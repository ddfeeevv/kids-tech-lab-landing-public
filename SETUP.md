# Настройка проекта

## Telegram Bot

1. Создайте бота через [@BotFather](https://t.me/BotFather)
2. Получите токен бота и chat ID

## Переменные окружения

Создайте `.env.local`:
```
REACT_APP_TELEGRAM_BOT_TOKEN=your_token_here
REACT_APP_TELEGRAM_CHAT_ID=your_chat_id_here
```

## Запуск

```bash
npm install
npm start
```

## Деплой

Для GitHub Pages добавьте переменные в Settings → Secrets and variables → Actions:
- `REACT_APP_TELEGRAM_BOT_TOKEN`
- `REACT_APP_TELEGRAM_CHAT_ID`