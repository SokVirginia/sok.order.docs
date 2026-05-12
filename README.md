# SOK Docs

Монорепозиторий документации команды SOK. Развёртывается на `docs.sok24.ru`.

## Структура

```
projects/
  sok.order/   → docs.sok24.ru/order/
home/          → docs.sok24.ru/
```

## Локальный запуск

```bash
npm install
npm run dev:home    # главная страница
npm run dev:order   # документация модуля sok.order
```

## Добавить новый проект

1. Создать папку `projects/название/`
2. Добавить `.vitepress/config.ts` с `base: '/название/'`
3. Добавить скрипты в `package.json`: `"dev:name"` и `"build:name"`
4. Добавить шаг Deploy в `.github/workflows/deploy.yml`
5. Добавить карточку на главной `home/index.md`
