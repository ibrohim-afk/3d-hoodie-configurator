import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// SUDAH DIPERBAIKI: Menggunakan nama repositori Anda yang sebenarnya.
const base_url = '/3d-hoodie-configurator/'; 

export default defineConfig({
  plugins: [react()],
  
  // Konfigurasi PENTING untuk GitHub Pages:
  // Ini memastikan semua aset (JS, CSS, GLB) di-load dari /3d-hoodie-configurator/
  base: process.env.NODE_ENV === 'production' ? base_url : '/',
  
  build: {
    // Pastikan path assets relatif
    assetsDir: 'assets', 
  },
});
