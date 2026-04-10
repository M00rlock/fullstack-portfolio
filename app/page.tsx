import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-slate-600">Львів, Україна · Remote</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-slate-950">
          Розробляю веб-продукти для стартапів: від MVP до стабільного зростання.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-700">
          Я ФОП і Full Stack Developer з 10+ роками досвіду. Допомагаю запускати нові
          продукти, модернізувати legacy frontend та будувати надійну архітектуру на
          Angular, React, Svelte та Node.js.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contacts"
            className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-700"
          >
            Обговорити проєкт
          </Link>
          <Link
            href="/cases"
            className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Подивитись кейси
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-950">Що я роблю</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "MVP для стартапів з фокусом на швидкий time-to-market",
            "Міграція legacy frontend на сучасний стек",
            "Розробка та інтеграція API на Node.js/Express",
            "Аудит продуктивності і стабільності SPA",
          ].map((item) => (
            <article key={item} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-slate-800">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-950">Чому мені довіряють</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-3xl font-semibold text-slate-950">10+ років</p>
            <p className="mt-2 text-slate-700">Практики у продукті, аутсорсі та freelance.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-3xl font-semibold text-slate-950">Tech Lead досвід</p>
            <p className="mt-2 text-slate-700">
              Участь у технічних рішеннях, R&D і виборі архітектури.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-950">Досвід у компаніях</p>
            <p className="mt-2 text-slate-700">Grid Dynamics, Vodworks, Eleks, Perfectial.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-950">Якість і тестування</p>
            <p className="mt-2 text-slate-700">
              Практика з Jest, Karma, Jasmine та Playwright.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-950">Приклади сайтів</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Проєкти з вашої папки Portfolio, які можна показувати як частину портфоліо.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Color Adapt MVP</h3>
            <p className="mt-2 text-slate-700">
              Health-care MVP для тренування кольоросприйняття: реєстрація, щоденні вправи,
              прогрес і досягнення.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Stack: Angular, RxJS, Django, MongoDB
            </p>
            <a
              href="http://127.0.0.1:4200"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Відкрити локальну демо-версію
            </a>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-slate-950">Tarot Atlas</h3>
            <p className="mt-2 text-slate-700">
              Full-stack pet-проєкт про карти Таро: карта дня, розклад на 3 карти,
              API-ендпойнти та інтеграція з JanusGraph.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Stack: Vue 3, NestJS, TypeScript, JanusGraph
            </p>
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Відкрити локальну демо-версію
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
