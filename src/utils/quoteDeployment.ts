export type QuoteDeploymentEnv = {
  VITE_QUOTE_ENABLED?: string;
  VITE_QUOTE_API_BASE_URL?: string;
};

export function getQuoteDeploymentConfig(env: QuoteDeploymentEnv) {
  return {
    enabled: env.VITE_QUOTE_ENABLED?.toLowerCase() !== 'false',
    apiBaseUrl: (env.VITE_QUOTE_API_BASE_URL ?? '').trim().replace(/\/$/, '')
  };
}
