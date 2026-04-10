import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="glass neon-border rounded-2xl p-8">
        <p className="text-sm font-medium tracking-wide text-cyan-300">Львів, Україна · Remote</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-slate-100">
          Розробляю веб-продукти для стартапів: від MVP до стабільного зростання.
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-slate-300">
          Я ФОП і Full Stack Developer з 10+ роками досвіду. Допомагаю запускати нові
          продукти, модернізувати legacy frontend та будувати надійну архітектуру на
          Angular, React, Svelte та Node.js.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contacts"
            className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Обговорити проєкт
          </Link>
          <Link
            href="/cases"
            className="rounded-lg border border-slate-500 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Подивитись кейси
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-100">Що я роблю</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "MVP для стартапів з фокусом на швидкий time-to-market",
            "Міграція legacy frontend на сучасний стек",
            "Розробка та інтеграція API на Node.js/Express",
            "Аудит продуктивності і стабільності SPA",
          ].map((item) => (
            <article key={item} className="glass rounded-xl p-5">
              <p className="text-slate-200">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-100">Чому мені довіряють</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="glass rounded-xl p-5">
            <p className="text-3xl font-semibold text-cyan-300">10+ років</p>
            <p className="mt-2 text-slate-300">Практики у продукті, аутсорсі та freelance.</p>
          </article>
          <article className="glass rounded-xl p-5">
            <p className="text-3xl font-semibold text-cyan-300">Tech Lead досвід</p>
            <p className="mt-2 text-slate-300">
              Участь у технічних рішеннях, R&D і виборі архітектури.
            </p>
          </article>
          <article className="glass rounded-xl p-5">
            <p className="font-semibold text-slate-100">Досвід у компаніях</p>
            <p className="mt-2 text-slate-300">Grid Dynamics, Vodworks, Eleks, Perfectial.</p>
          </article>
          <article className="glass rounded-xl p-5">
            <p className="font-semibold text-slate-100">Якість і тестування</p>
            <p className="mt-2 text-slate-300">
              Практика з Jest, Karma, Jasmine та Playwright.
            </p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-slate-100">Приклади сайтів</h2>
        <p className="mt-3 max-w-3xl text-slate-300">
          Проєкти з вашої папки Portfolio, які можна показувати як частину портфоліо.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-100">Color Adapt MVP</h3>
            <p className="mt-2 text-slate-300">
              Health-care MVP для тренування кольоросприйняття: реєстрація, щоденні вправи,
              прогрес і досягнення.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Stack: Angular, RxJS, Django, MongoDB
            </p>
            <a
              href="http://127.0.0.1:4200"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Відкрити локальну демо-версію
            </a>
          </article>

          <article className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold text-slate-100">Tarot Atlas</h3>
            <p className="mt-2 text-slate-300">
              Full-stack pet-проєкт про карти Таро: карта дня, розклад на 3 карти,
              API-ендпойнти та інтеграція з JanusGraph.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Stack: Vue 3, NestJS, TypeScript, JanusGraph
            </p>
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-lg border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              Відкрити локальну демо-версію
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
