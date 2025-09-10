# 🔧 Настройка проекта

## 🚨 ВАЖНО: Безопасность

**НИКОГДА не коммитьте токены ботов в код!**

## 📋 Шаги настройки:

### 1. Создайте Telegram бота
1. Перейдите к [@BotFather](https://t.me/BotFather)
2. Создайте нового бота командой `/newbot`
3. Получите токен бота

### 2. Настройте переменные окружения
1. Скопируйте файл `env.example` в `.env.local`
2. Заполните ваши данные:
   ```
   REACT_APP_TELEGRAM_BOT_TOKEN=ваш_токен_бота
   REACT_APP_TELEGRAM_CHAT_ID=ваш_chat_id
   ```

### 3. Запустите проект
```bash
npm install
npm start
```

## 🔒 Безопасность

- ✅ Файл `.env.local` добавлен в `.gitignore`
- ✅ Токены не попадают в репозиторий
- ✅ Используются переменные окружения

## 🌐 Деплой

Для GitHub Pages нужно настроить переменные окружения в настройках репозитория:
1. Repository → Settings → Secrets and variables → Actions
2. Добавьте `REACT_APP_TELEGRAM_BOT_TOKEN`
3. Добавьте `REACT_APP_TELEGRAM_CHAT_ID`
