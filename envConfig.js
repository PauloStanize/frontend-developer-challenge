const env = (key, defaultVal) => process.env[key] || defaultVal

module.exports = {
  env: env("NODE_ENV", "development"),
  port: env("PORT", "3000"),
  apiUrl: env("API_URL", ""),
}