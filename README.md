## Portfolio Site (UA)

Портфоліо-сайт ФОП для залучення клієнтів: `Головна`, `Послуги`, `Кейси`, `Контакти`.

### Запуск локально

```bash
npm run dev
```

Відкрити [http://localhost:3000](http://localhost:3000).

### Змінні середовища

Створіть `.env.local`:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
```

- `NEXT_PUBLIC_GA_ID` — для подій Google Analytics.
- `TELEGRAM_*` — для надсилання заявок з форми у Telegram.

### Деплой

Рекомендовано: Vercel.

Перед деплоєм замініть базову адресу сайту:
- `app/layout.tsx` (`metadataBase`)
- `app/sitemap.ts`
- `app/robots.ts`

Потім виконайте:

```bash
npm run build
```
