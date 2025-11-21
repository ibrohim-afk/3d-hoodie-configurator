import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Menggunakan './' (Relatif) agar GitHub Pages selalu bisa menemukan folder dist/
  // Ini adalah solusi paling aman untuk menghindari masalah nama repositori.
  base: './', 
  
  build: {
    // Pastikan path assets relatif
    assetsDir: 'assets', 
  },
});
