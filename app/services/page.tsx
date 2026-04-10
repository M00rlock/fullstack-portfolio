import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Послуги",
  description: "Послуги Full Stack розробки для стартапів та бізнесу.",
};

const services = [
  {
    title: "MVP під запуск",
    points: [
      "Швидкий старт продукту для перевірки гіпотез.",
      "Фокус на ключовий user flow і бізнес-цінність.",
      "Гнучкі ітерації раз на 1-2 тижні.",
    ],
  },
  {
    title: "Міграція legacy frontend",
    points: [
      "Поступове оновлення без ризику для бізнесу.",
      "Зменшення техборгу і прискорення delivery.",
      "План переходу з прозорими етапами.",
    ],
  },
  {
    title: "Full Stack розробка",
    points: [
      "Frontend: Angular, React, Svelte.",
      "Backend: Node.js, Express, REST API.",
      "Інтеграція із зовнішніми сервісами.",
    ],
  },
  {
    title: "Підсилення команди",
    points: [
      "Part-time або контрактна співпраця.",
      "Tech Lead підтримка і code quality.",
      "Робота в існуючих процесах команди.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-semibold text-slate-100">Послуги</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Працюю зі стартапами, яким важливі швидкість запуску, технічна якість і
          передбачуваний результат.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="glass rounded-xl p-6">
            <h2 className="text-xl font-semibold text-cyan-300">{service.title}</h2>
            <ul className="mt-4 space-y-2 text-slate-300">
              {service.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="glass neon-border rounded-xl p-6">
        <h2 className="text-xl font-semibold text-slate-100">Як проходить співпраця</h2>
        <ol className="mt-4 space-y-2 text-slate-300">
          <li>1. Короткий бриф: ціль, контекст, обмеження, дедлайн.</li>
          <li>2. Технічний план: scope, ризики, етапи, оцінка.</li>
          <li>3. Реалізація спринтами з регулярними демо.</li>
          <li>4. Передача результату з документацією і підтримкою.</li>
        </ol>
        <Link
          href="/contacts"
          className="mt-6 inline-block rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Обговорити ваш запит
        </Link>
      </section>
    </div>
  );
}
