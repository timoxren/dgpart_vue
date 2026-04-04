// plugins/recaptcha.client.ts
import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const siteKey = '6Lcf-qQsAAAAAA5EU8She4Y3eW0OtM-8oCm8nGCG'

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