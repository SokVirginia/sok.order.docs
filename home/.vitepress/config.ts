import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SOK Docs',
  description: 'Документация модулей и решений команды SOK',
  lang: 'ru-RU',
  srcDir: '.',
  outDir: '../dist/home',

  themeConfig: {
    nav: [
      { text: 'Все проекты', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SokVirginia/sok.order.docs' }
    ],
    footer: {
      message: 'Документация команды SOK',
    },
  }
})
