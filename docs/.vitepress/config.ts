import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SOK: Оформление заказа',
  description: 'Документация модуля оформления заказа для 1С-Битрикс',
  lang: 'ru-RU',

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: 'Руководство', link: '/guide/what-is-it' },
      { text: 'Установка', link: '/guide/installation' },
      { text: 'API и события', link: '/api/events' },
    ],

    sidebar: [
      {
        text: 'Введение',
        items: [
          { text: 'Что такое модуль', link: '/guide/what-is-it' },
          { text: 'Быстрый старт', link: '/guide/quick-start' },
        ]
      },
      {
        text: 'Установка и настройка',
        items: [
          { text: 'Требования', link: '/guide/requirements' },
          { text: 'Установка', link: '/guide/installation' },
          { text: 'Настройка шаблона', link: '/guide/template-setup' },
          { text: 'Конфигурация', link: '/guide/configuration' },
        ]
      },
      {
        text: 'API и события',
        items: [
          { text: 'Обзор событий', link: '/api/events' },
          { text: 'Кастомизация логики', link: '/api/customization' },
        ]
      },
      {
        text: 'Примеры',
        items: [
          { text: 'Типовые сценарии', link: '/examples/common' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SokVirginia/sok.order.docs' }
    ],

    footer: {
      message: 'Документация команды SOK',
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: 'На этой странице',
      level: [2, 3]
    },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    darkModeSwitchLabel: 'Тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',
  }
})
