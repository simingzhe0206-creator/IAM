import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { QuoteForm } from './QuoteForm';

describe('quote form deployment states', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it('shows a disabled static preview when quote delivery is not enabled', () => {
    vi.stubEnv('VITE_QUOTE_ENABLED', 'false');

    render(<QuoteForm />);

    expect(screen.getByText(/static website preview/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit quote request/i })).toBeDisabled();
  });

  it('checks the API health endpoint before enabling submission', async () => {
    vi.stubEnv('VITE_QUOTE_ENABLED', 'true');
    vi.stubEnv('VITE_QUOTE_API_BASE_URL', 'https://quotes.example.com/');
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ok: true, mailReady: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    );
    vi.stubGlobal('fetch', fetchMock);

    render(<QuoteForm />);

    expect(screen.getByRole('button', { name: /checking quote service/i })).toBeDisabled();
    await waitFor(() => expect(screen.getByRole('button', { name: /submit quote request/i })).toBeEnabled());
    expect(fetchMock).toHaveBeenCalledWith(
      'https://quotes.example.com/api/health',
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    );
  });
});
