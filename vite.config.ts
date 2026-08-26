import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools()],
  resolve: {
    tsconfigPaths: true,
  },
});
