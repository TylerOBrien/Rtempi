/**
 * Exports
*/

export const AppConfig = {
  name: process.env.APP_NAME,
  slug: process.env.APP_SLUG || (process.env.APP_NAME || '').toLowerCase().replace(/[^a-z\-]/g, ''),
  debug: (process.env.APP_DEBUG || '').toLowerCase() === 'true'
};
