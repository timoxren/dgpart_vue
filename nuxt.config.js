import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    ssr: true,
    modules: [
        '@pinia/nuxt',
        'nuxt-recaptcha',
    ],
    recaptcha: {
        version: 3,
    },
    runtimeConfig: {
        recaptcha: {
            secretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,
        },
        public: {
            recaptcha: {
                siteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
            },
        }
    },
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
