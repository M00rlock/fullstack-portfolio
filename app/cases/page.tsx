import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Кейси",
  description: "Приклади задач, рішень і результатів у веб-розробці.",
};

const cases = [
  {
    title: "Enterprise SPA у великій команді",
    challenge: "Складний домен і багато інтеграцій з backend сервісами.",
    solution:
      "Розробка і підтримка Angular/React модулів, синхронізація з QA, DevOps, PM.",
    result: "Стабільний delivery нових функцій і покращення якості коду.",
  },
  {
    title: "Міграція legacy на сучасний SPA",
    challenge: "Застарілий стек гальмував розвиток продукту.",
    solution:
      "Поступова міграція на React/Redux та Node.js proxy для безпечного переходу.",
    result: "Менше техборгу, краща підтримуваність і швидші релізи.",
  },
  {
    title: "Tech Lead / R&D на продуктовому напрямку",
    challenge: "Потрібно обрати технології та архітектурний підхід для зростання.",
    solution: "Проведення R&D, ухвалення технічних рішень, контроль якості реалізації.",
    result: "Передбачувана архітектура і покращена продуктивність команди.",
  },
  {
    title: "Freelance у домені нерухомості",
    challenge: "Потрібен end-to-end цикл: від UI до інтеграцій і тестування.",
    solution: "Розробка веб-додатку на Angular з REST API інтеграціями і unit/e2e тестами.",
    result: "Надійніший релізний процес і швидша доставка функцій.",
  },
];

export default function CasesPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-semibold text-slate-100">Кейси</h1>
        <p className="mt-3 max-w-3xl text-slate-300">
          Формат кожного кейсу: проблема, підхід, результат. За потреби під NDA готую
          детальнішу технічну версію на дзвінку.
        </p>
      </header>

      <section className="grid gap-4">
        {cases.map((item) => (
          <article key={item.title} className="glass rounded-xl p-6">
            <h2 className="text-xl font-semibold text-cyan-300">{item.title}</h2>
            <p className="mt-3 text-slate-200">
              <span className="font-medium">Проблема:</span> {item.challenge}
            </p>
            <p className="mt-2 text-slate-200">
              <span className="font-medium">Рішення:</span> {item.solution}
            </p>
            <p className="mt-2 text-slate-200">
              <span className="font-medium">Результат:</span> {item.result}
            </p>
          </article>
        ))}
      </section>

      <Link
        href="/contacts"
        className="inline-block rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Хочу схоже рішення
      </Link>
    </div>
  );
}
