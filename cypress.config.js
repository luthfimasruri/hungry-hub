/* eslint-disable no-undef */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
  },
  env: {
    apiUrl: process.env.VITE_API_BASE_URL || 'https://hungryhub.com',
  },
})
