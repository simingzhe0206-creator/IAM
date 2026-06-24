import { PaperPlaneTilt, UploadSimple, WarningCircle } from '@phosphor-icons/react';
import { FormEvent, useMemo, useState } from 'react';
import { formOptions } from '../content/site';
import {
  ALLOWED_FILE_EXTENSIONS,
  MAX_FILE_BYTES,
  MAX_TOTAL_FILE_BYTES,
  type QuoteErrors,
  type QuotePayload,
  validateQuotePayload
} from '../utils/quoteValidation';

const initialForm: Required<QuotePayload> = {
  name: '',
  email: '',
  phone: '',
  siteAddress: '',
  councilArea: '',
  serviceRequired: '',
  projectType: '',
  projectStage: '',
  message: ''
};

function megabytes(value: number) {
  return `${Math.round((value / 1024 / 1024) * 10) / 10}MB`;
}

export function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const totalBytes = useMemo(() => files.reduce((sum, file) => sum + file.size, 0), [files]);

  function updateField(name: keyof Required<QuotePayload>, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function updateFiles(nextFiles: FileList | null) {
    const selected = Array.from(nextFiles ?? []);
    setFiles(selected);
    setErrors((current) => ({ ...current, files: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validateQuotePayload(form, files);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus('idle');
      return;
    }

    const body = new FormData();
    Object.entries(form).forEach(([key, value]) => body.append(key, value));
    files.forEach((file) => body.append('files', file));

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/enquiries', { method: 'POST', body });
      const result = (await response.json()) as { message?: string; errors?: QuoteErrors };
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
    <form className="surface-card p-5 md:p-8" onSubmit={submit} noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input value={form.name} onChange={(event) => updateField('name', event.target.value)} />
        </Field>
        <Field label="Email" error={errors.email}>
          <input value={form.email} type="email" onChange={(event) => updateField('email', event.target.value)} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input value={form.phone} onChange={(event) => updateField('phone', event.target.value)} />
        </Field>
        <Field label="Council Area">
          <input value={form.councilArea} onChange={(event) => updateField('councilArea', event.target.value)} />
        </Field>
        <Field label="Site Address" error={errors.siteAddress} wide>
          <input value={form.siteAddress} onChange={(event) => updateField('siteAddress', event.target.value)} />
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
            value={form.message}
            rows={5}
            onChange={(event) => updateField('message', event.target.value)}
          />
        </Field>
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-[#f4e00c]/70 bg-[#f0eedc] p-5">
        <label className="flex cursor-pointer flex-col gap-3 text-sm text-[#4b4a48] md:flex-row md:items-center md:justify-between">
          <span className="flex items-center gap-3 font-semibold">
            <UploadSimple className="text-[#4b4a48]" size={22} />
            Upload supporting files
          </span>
          <span className="text-xs text-[#a9a9a7]">
            {ALLOWED_FILE_EXTENSIONS.join(', ')}. {megabytes(MAX_FILE_BYTES)} each, {megabytes(MAX_TOTAL_FILE_BYTES)} total.
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
          <div className="mt-4 grid gap-2 text-sm text-[#4b4a48]">
            {files.map((file) => (
              <span key={`${file.name}-${file.size}`} className="flex justify-between gap-4 rounded-xl bg-white px-3 py-2">
                <span>{file.name}</span>
                <span className="text-[#a9a9a7]">{megabytes(file.size)}</span>
              </span>
            ))}
            <span className="text-xs text-[#a9a9a7]">Total: {megabytes(totalBytes)}</span>
          </div>
        )}
        {errors.files && <p className="mt-3 text-sm font-semibold text-red-700">{errors.files}</p>}
      </div>

      {statusMessage && (
        <div
          className={`mt-5 flex gap-3 rounded-2xl p-4 text-sm ${
            status === 'sent'
              ? 'border border-[#cdcdcd] bg-[#f0eedc] text-[#4b4a48]'
              : 'border border-red-200 bg-red-50 text-red-800'
          }`}
        >
          <WarningCircle size={20} />
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#f4e00c] px-6 text-sm font-black text-[#4b4a48] transition hover:brightness-95 active:translate-y-px disabled:cursor-wait disabled:opacity-70 md:w-auto"
      >
        <PaperPlaneTilt size={20} weight="fill" />
        {status === 'sending' ? 'Sending enquiry' : 'Submit Quote Request'}
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
    <label className={`quote-field grid gap-2 text-sm font-semibold text-[#4b4a48] ${wide ? 'md:col-span-2' : ''}`}>
      {label}
      {children}
      {error && <span className="text-xs font-semibold text-red-700">{error}</span>}
    </label>
  );
}
