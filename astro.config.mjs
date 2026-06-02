// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
    site: 'https://karensofialopezreyes.github.io/Una_web_estatica/',
    base: '/Una_web_estatica/',
    vite: {
        plugins: [tailwindcss()]
    }
});
