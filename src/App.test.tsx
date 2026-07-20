import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

describe('legacy reviews route', () => {
  it('redirects the retired Reviews page to the Projects reviews section', async () => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      value: vi.fn(),
      configurable: true
    });
    render(
      <MemoryRouter initialEntries={['/reviews']}>
        <App />
      </MemoryRouter>
    );

    expect(await screen.findByRole('heading', { name: 'Google Reviews' })).toBeInTheDocument();
  });
});
