"use client";

import { FormEvent, useState } from "react";

type RequestState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<RequestState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("failed");
      }

      if (typeof window !== "undefined" && "gtag" in window) {
        (
          window as Window & {
            gtag?: (action: string, event: string, params: Record<string, string>) => void;
          }
        ).gtag?.("event", "lead_submit", {
          event_category: "engagement",
          event_label: "contact_form",
        });
      }

      setState("success");
      setMessage("Дякую! Заявку надіслано. Я відповім найближчим часом.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Не вдалося надіслати форму. Напишіть, будь ласка, на email нижче.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-200">
          Ім&apos;я
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
        />
      </div>

      <div>
        <label htmlFor="contact" className="mb-1 block text-sm font-medium text-slate-200">
          Контакт (email/Telegram)
        </label>
        <input
          id="contact"
          name="contact"
          required
          className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="mb-1 block text-sm font-medium text-slate-200">
          Тип задачі
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
        >
          <option value="">Оберіть</option>
          <option value="mvp">MVP</option>
          <option value="legacy-migration">Legacy migration</option>
          <option value="team-augmentation">Підсилення команди</option>
          <option value="other">Інше</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="mb-1 block text-sm font-medium text-slate-200">
          Бюджет
        </label>
        <select
          id="budget"
          name="budget"
          required
          className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
        >
          <option value="">Оберіть</option>
          <option value="up-to-2k">до $2k</option>
          <option value="2k-5k">$2k - $5k</option>
          <option value="5k-15k">$5k - $15k</option>
          <option value="15k-plus">$15k+</option>
        </select>
      </div>

      <div>
        <label htmlFor="details" className="mb-1 block text-sm font-medium text-slate-200">
          Коротко про задачу
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          className="w-full rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none focus:border-cyan-300"
        />
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-slate-500"
      >
        {state === "loading" ? "Надсилаю..." : "Надіслати заявку"}
      </button>

      {message ? (
        <p className={state === "success" ? "text-emerald-700" : "text-rose-700"}>{message}</p>
      ) : null}
    </form>
  );
}
