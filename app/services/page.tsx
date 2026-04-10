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
      "Швидкий старт продукту для перевірки гіпотез без зайвих витрат",
      "Фокус на ключовому user flow та реальній бізнес-цінності",
      "Гнучка розробка з ітераціями кожні 1–2 тижні",
      "Мінімум часу до першого результату (Time-to-Market)",
      "Можливість швидкого масштабування після валідації ідеї",
      "Обговорення подальшого розвитку після запуску MVP",
    ],
  },
  {
    title: "Міграція legacy frontend",
    points: [
      "Поступове оновлення без зупинки продукту та ризиків для бізнесу",
      "Зменшення технічного боргу і прискорення розробки (delivery)",
      "Прозорий план міграції з чіткими етапами та дедлайнами",
      "Збереження існуючого функціоналу під час переходу",
      "Покращення продуктивності та UX після оновлення",
    ],
  },
  {
    title: "Full Stack розробка",
    points: [
      "Створюю end-to-end рішення: від інтерфейсу до серверної логіки",
      "Будую масштабовану архітектуру, яка витримує ріст продукту",
      "Інтегрую платежі, API, сторонні сервіси без “костилів”",
      "Забезпечую швидку роботу та стабільність системи",
      "Пишу код, який легко підтримувати і розвивати",
    ],
  },
  {
    title: "Підсилення команди",
    points: [
      "Включаюсь як experienced developer / tech partner, а не “ресурс”",
      "Беру на себе відповідальність за складні частини системи",
      "Піднімаю рівень команди через best practices та code review",
      "Допомагаю приймати технічні рішення, а не просто виконую задачі",
      "Швидко даю результат без довгого онбордингу"
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-semibold text-slate-100">Послуги</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Допомагаю стартапам швидко запускати продукти з високою технічною якістю
          та передбачуваними результатами — від архітектури до релізу.
  
          (Швидкий MVP, масштабування, покриття тестами, DevOps та підтримка.)
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
          <li>2. Технічний план: область робіт, ризики, етапи, оцінка.</li>
          <li>3. Реалізація спринтами: ітерації з регулярними демо та зворотним звʼязком.</li>
          <li>4. Передача результату: документація, інструкції для підтримки та гарантійна підтримка.</li>
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
