export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: { cssPath: '~/assets/css/main.css' },
  // Defaults below; override from .env (NUXT_SMTP_PASS is required, the rest are optional)
  runtimeConfig: {
    smtpHost: 'smtp.gmail.com',
    smtpPort: '465',
    smtpUser: 'sonokelingheritage@gmail.com',
    smtpPass: '',
    inquiryTo: 'sonokelingheritage@gmail.com',
  },
  app: {
    head: {
      title: 'Sonokeling Heritage',
      meta: [{ name: 'description', content: 'Sonokeling logs, beams and planks. Click around the workshop and send us an inquiry.' }],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Figtree:wght@400;500;600&display=swap' },
      ],
    },
  },
})
