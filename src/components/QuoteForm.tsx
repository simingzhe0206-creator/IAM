import { PaperPlaneTilt, UploadSimple, WarningCircle } from '@phosphor-icons/react';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { formOptions } from '../content/site';
import {
  ALLOWED_FILE_EXTENSIONS,
  FIELD_MAX_LENGTHS,
  MAX_FILES,
  MAX_FILE_BYTES,
  MAX_TOTAL_FILE_BYTES,
  type QuoteErrors,
  type QuotePayload,
  validateQuotePayload
} from '../utils/quoteValidation';
import { getQuoteDeploymentConfig } from '../utils/quoteDeployment';

const initialForm: Required<QuotePayload> = {
  name: '',
  email: '',
  phone: '',
  siteAddress: '',
  councilArea: '',
  serviceRequired: '',
  projectType: '',
  projectStage: '',
  message: '',
  website: ''
};

type QuoteStatus = 'preview' | 'checking' | 'ready' | 'sending' | 'sent' | 'failed';

function megabytes(value: number) {
  return `${Math.round((value / 1024 / 1024) * 10) / 10}MB`;
}

export function QuoteForm() {
  const deployment = useMemo(
    () =>
      getQuoteDeploymentConfig({
        VITE_QUOTE_ENABLED: import.meta.env.VITE_QUOTE_ENABLED,
        VITE_QUOTE_API_BASE_URL: import.meta.env.VITE_QUOTE_API_BASE_URL
      }),
    []
  );
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<QuoteStatus>(deployment.enabled ? 'checking' : 'preview');
  const [mailReady, setMailReady] = useState(false);
  const [statusMessage, setStatusMessage] = useState(
    deployment.enabled
      ? 'Checking secure quote delivery.'
      : 'This is a static website preview. Quote submission is available on the production IAM website.'
  );

  const totalBytes = useMemo(() => files.reduce((sum, file) => sum + file.size, 0), [files]);

  useEffect(() => {
    if (!deployment.enabled) {
      return;
    }

    const controller = new AbortController();

    async function checkHealth() {
      try {
        const response = await fetch(`${deployment.apiBaseUrl}/api/health`, { signal: controller.signal });
        const result = (await response.json()) as { ok?: boolean; mailReady?: boolean };
        if (!response.ok || !result.ok || !result.mailReady) {
          throw new Error('Quote delivery is not ready.');
        }
        setMailReady(true);
        setStatus('ready');
        setStatusMessage('');
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }
        setMailReady(false);
        setStatus('failed');
        setStatusMessage(
          'Online quote delivery is temporarily unavailable. Please email office@iamsurveyor.com.au or call +61 452 666 691.'
        );
      }
    }

    void checkHealth();
    return () => controller.abort();
  }, [deployment]);

  function updateField(name: keyof Required<QuotePayload>, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === 'sent' && mailReady) {
      setStatus('ready');
      setStatusMessage('');
    }
  }

  function updateFiles(nextFiles: FileList | null) {
    const selected = Array.from(nextFiles ?? []);
    setFiles(selected);
    setErrors((current) => ({ ...current, files: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!deployment.enabled || !mailReady || status === 'sending') {
      return;
    }
    const validation = validateQuotePayload(form, files);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus('ready');
      return;
    }

    const body = new FormData();
    Object.entries(form).forEach(([key, value]) => body.append(key, value));
    files.forEach((file) => body.append('files', file));

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(`${deployment.apiBaseUrl}/api/enquiries`, { method: 'POST', body });
      const result = (await response.json()) as { message?: string; errors?: QuoteErrors; requestId?: string };
      if (!response.ok) {
        setErrors(result.errors ?? {});
        throw new Error(result.message ?? 'The enquiry could not be sent.');
      }
      setForm(initialForm);
      setFiles([]);
      setErrors({});
      setStatus('sent');
      setStatusMessage(result.message ?? 'Thank you. Your enquiry has been sent to IAM Surveyors.');
    } catch (error) {
      setStatus('failed');
      setStatusMessage(error instanceof Error ? error.message : 'The enquiry could not be sent.');
    }
  }

  return (
    <form className="surface-card relative p-5 md:p-8" onSubmit={submit} noValidate>
      <label className="quote-honeypot" aria-hidden="true">
        Website
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField('website', event.target.value)}
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input maxLength={FIELD_MAX_LENGTHS.name} value={form.name} onChange={(event) => updateField('name', event.target.value)} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input maxLength={FIELD_MAX_LENGTHS.email} value={form.email} type="email" onChange={(event) => updateField('email', event.target.value)} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input maxLength={FIELD_MAX_LENGTHS.phone} value={form.phone} onChange={(event) => updateField('phone', event.target.value)} />
        </Field>
        <Field label="Council Area">
          <input maxLength={FIELD_MAX_LENGTHS.councilArea} value={form.councilArea} onChange={(event) => updateField('councilArea', event.target.value)} />
        </Field>
        <Field label="Site Address" error={errors.siteAddress} wide>
          <input maxLength={FIELD_MAX_LENGTHS.siteAddress} value={form.siteAddress} onChange={(event) => updateField('siteAddress', event.target.value)} />
        </Field>
        <Field label="Service Required" error={errors.serviceRequired}>
          <select value={form.serviceRequired} onChange={(event) => updateField('serviceRequired', event.target.value)}>
            <option value="">Select a service</option>
            {formOptions.services.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Type" error={errors.projectType}>
          <select value={form.projectType} onChange={(event) => updateField('projectType', event.target.value)}>
            <option value="">Select a project type</option>
            {formOptions.projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project Stage" error={errors.projectStage}>
          <select value={form.projectStage} onChange={(event) => updateField('projectStage', event.target.value)}>
            <option value="">Select a project stage</option>
            {formOptions.projectStages.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Message" error={errors.message} wide>
          <textarea
            maxLength={FIELD_MAX_LENGTHS.message}
            value={form.message}
            rows={5}
            onChange={(event) => updateField('message', event.target.value)}
          />
        </Field>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-[#f4e00c]/60 bg-[#fffdf0]/8 p-5">
        <label className="flex cursor-pointer flex-col gap-3 text-sm text-[#fffdf0] md:flex-row md:items-center md:justify-between">
          <span className="flex items-center gap-3 font-semibold">
            <UploadSimple className="text-[#f4e00c]" size={22} />
            Upload supporting files
          </span>
          <span className="text-xs text-[#cdcdcd]">
            Up to {MAX_FILES} files: {ALLOWED_FILE_EXTENSIONS.join(', ')}. {megabytes(MAX_FILE_BYTES)} each, {megabytes(MAX_TOTAL_FILE_BYTES)} total.
          </span>
          <input
            className="sr-only"
            type="file"
            multiple
            accept={ALLOWED_FILE_EXTENSIONS.map((extension) => `.${extension}`).join(',')}
            onChange={(event) => updateFiles(event.target.files)}
          />
        </label>
        {files.length > 0 && (
          <div className="mt-4 grid gap-2 text-sm text-[#fffdf0]">
            {files.map((file) => (
              <span key={`${file.name}-${file.size}`} className="flex justify-between gap-4 rounded-xl bg-[#fffdf0]/8 px-3 py-2">
                <span>{file.name}</span>
                <span className="text-[#cdcdcd]">{megabytes(file.size)}</span>
              </span>
            ))}
            <span className="text-xs text-[#cdcdcd]">Total: {megabytes(totalBytes)}</span>
          </div>
        )}
        {errors.files && <p className="mt-3 text-sm font-semibold text-[#ffb4ab]">{errors.files}</p>}
      </div>

      {statusMessage && (
        <div
          className={`mt-5 flex gap-3 rounded-lg p-4 text-sm ${
            status === 'sent'
              ? 'border border-[#f4e00c]/35 bg-[#f4e00c]/10 text-[#fffdf0]'
              : status === 'preview' || status === 'checking'
                ? 'border border-[#fffdf0]/16 bg-[#fffdf0]/7 text-[#e6e2d2]'
                : 'border border-[#ffb4ab]/35 bg-[#ffb4ab]/10 text-[#ffd9d4]'
          }`}
        >
          <WarningCircle size={20} />
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'preview' || status === 'checking' || status === 'sending' || !mailReady}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#f4e00c] px-6 text-sm font-extrabold text-[#242321] shadow-[0_14px_34px_rgba(244,224,12,0.16)] transition hover:brightness-105 active:translate-y-px disabled:cursor-wait disabled:opacity-70 md:w-auto"
      >
        <PaperPlaneTilt size={20} weight="fill" />
        {status === 'checking' ? 'Checking Quote Service' : status === 'sending' ? 'Sending enquiry' : 'Submit Quote Request'}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  wide,
  children
}: {
  label: string;
  error?: string;
  wide?: boolean;
  children: React.ReactElement;
}) {
  return (
    <label className={`quote-field grid gap-2 text-sm font-semibold text-[#fffdf0] ${wide ? 'md:col-span-2' : ''}`}>
      {label}
      {children}
      {error && <span className="text-xs font-semibold text-[#ffb4ab]">{error}</span>}
    </label>
  );
}
