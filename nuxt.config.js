import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    ssr: true,
    modules: [
        '@pinia/nuxt',
    ],
    vite: {
        server: {
            watch: {
                usePolling: true, // Включение опроса для отслеживания изменений
                interval: 2000,    // Интервал опроса (в миллисекундах)
            },
            watchIgnored: [
                '**/node_modules/**', // Исключаем node_modules
                '**/.git/**',         // Исключаем папку .git
            ],
            allowedHosts: ['www.timoxren.ru', 'timoxren.ru'],
        },
    },
});
