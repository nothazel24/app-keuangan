import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
            usePolling: true,
        },
        // auto refresh
        host: '0.0.0.0', // Mengizinkan akses dari host manapun
        port: 5173,
        hmr: {
            host: 'localhost',
            port: 5173,
        }
    },
});
