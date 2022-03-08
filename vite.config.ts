import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const reactRefresh = require('@vitejs/plugin-react-refresh');
// const reactSvgPlugin = require('vite-plugin-react-svg');

// module.exports = {
//   plugins: [
//     // reactRefresh(),
//     reactSvgPlugin(),
//   ],
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ]
})
