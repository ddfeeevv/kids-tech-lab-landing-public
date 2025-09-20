# Tech Kids Lab Landing Page

Официальный веб-сайт детской IT-школы с интеграцией Telegram Bot API для обработки заявок.

## Технические характеристики

- **Framework**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Animation**: Framer Motion 10.16.4
- **Language**: JavaScript ES6+
- **Integration**: Telegram Bot API

## Функциональность

- Многоязычная поддержка (русский, узбекский, английский)
- Адаптивная верстка для всех устройств
- Автоматизированная обработка заявок через Telegram
- SEO-оптимизация
- Оптимизированная производительность

## Установка и запуск

### Требования
- Node.js >= 16.0.0
- npm >= 8.0.0

### Установка зависимостей
```bash
npm install
```

### Конфигурация окружения
Создайте файл `.env.local` на основе `env.example`:
```
REACT_APP_TELEGRAM_BOT_TOKEN=your_bot_token
REACT_APP_TELEGRAM_CHAT_ID=your_chat_id
```

### Запуск в режиме разработки
```bash
npm start
```

### Сборка для продакшена
```bash
npm run build
```

## Структура проекта

```
src/
├── components/     # Переиспользуемые React компоненты
├── contexts/       # React контексты (языковые настройки)
├── pages/          # Страницы отдельных курсов
├── sections/       # Секции главной страницы
├── translations.js # Файлы локализации
└── App.js         # Корневой компонент
```

## Деплой

### GitHub Pages
```bash
npm run deploy
```

### Альтернативные платформы
- Netlify: загрузите содержимое папки `build/`
- Vercel: подключите репозиторий для автоматического деплоя

## Лицензия

Все права защищены © 2025 Tech Kids Lab