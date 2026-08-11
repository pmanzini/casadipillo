import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Casa di Pillo',
        short_name: 'Casa di Pillo',
        description: 'La tua casa tra le colline marchigiane.',
        theme_color: '#173f3a',
        background_color: '#f5f0e8',
        display: 'standalone',
        start_url: '/',
        lang: 'it'
      }
    })
  ],
  build: { outDir: 'dist' }
});
