// plugins/recaptcha.client.ts
import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const siteKey = config.public.recaptchaSiteKey

    if (!siteKey) {
        console.error('ReCaptcha error: Site Key is missing!')
    }

    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: siteKey,
        loaderOptions: {
            autoHideBadge: false,
            explicitRender: false
        }
    })
})