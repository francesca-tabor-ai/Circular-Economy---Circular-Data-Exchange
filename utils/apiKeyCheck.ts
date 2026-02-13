
export const hasApiKey = (): boolean => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
  return apiKey.trim() !== '' && apiKey !== 'your_api_key_here';
};

export const getApiKeyError = (): string => {
  return 'Google API key is required. Please set GEMINI_API_KEY in your .env.local file.';
};
