import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  contact?: string;
  projectType?: string;
  budget?: string;
  details?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.contact || !body.projectType || !body.budget || !body.details) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (botToken && chatId) {
    const text =
      `Нова заявка з сайту\n` +
      `Ім'я: ${body.name}\n` +
      `Контакт: ${body.contact}\n` +
      `Тип задачі: ${body.projectType}\n` +
      `Бюджет: ${body.budget}\n` +
      `Опис: ${body.details}`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      },
    );

    if (!telegramResponse.ok) {
      return NextResponse.json({ error: "Telegram send failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
