import { describe, expect, it } from 'vitest';
import { getQuoteDeploymentConfig } from './quoteDeployment';

describe('quote deployment configuration', () => {
  it('disables submission for the GitHub Pages static preview', () => {
    expect(
      getQuoteDeploymentConfig({
        VITE_QUOTE_ENABLED: 'false',
        VITE_QUOTE_API_BASE_URL: 'https://api.example.com/'
      })
    ).toEqual({
      enabled: false,
      apiBaseUrl: 'https://api.example.com'
    });
  });

  it('uses same-origin API paths when the base URL is blank', () => {
    expect(
      getQuoteDeploymentConfig({
        VITE_QUOTE_ENABLED: 'true',
        VITE_QUOTE_API_BASE_URL: ''
      })
    ).toEqual({ enabled: true, apiBaseUrl: '' });
  });
});
