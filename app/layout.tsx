import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Analytics } from "./analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const buildVersion =
  process.env.NEXT_PUBLIC_BUILD_VERSION ??
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ??
  "local";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site.example"),
  title: {
    default: "Oleksandr Vasyliev | Full Stack Developer",
    template: "%s | Oleksandr Vasyliev",
  },
  description:
    "ФОП з комп'ютерного програмування. Розробка веб-додатків, міграція legacy frontend, інтеграції API та підсилення команди.",
  openGraph: {
    title: "Oleksandr Vasyliev | Full Stack Developer",
    description:
      "10+ років досвіду у веб-розробці: Angular, React, Svelte, Node.js.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-slate-200">
        <Analytics />
        <header className="glass sticky top-0 z-30 border-b border-slate-700/70">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-sky-300 uppercase">
              Oleksandr Vasyliev
            </Link>
            <nav className="flex items-center gap-5 text-sm text-slate-300">
              <Link href="/services" className="hover:text-sky-300 transition-colors">
                Послуги
              </Link>
              <Link href="/cases" className="hover:text-sky-300 transition-colors">
                Кейси
              </Link>
              <Link href="/contacts" className="hover:text-sky-300 transition-colors">
                Контакти
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">{children}</main>
        <footer className="glass border-t border-slate-700/70">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <p>ФОП Oleksandr Vasyliev, комп&apos;ютерне програмування</p>
            <p>Львів, Україна · Remote · v. {buildVersion}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
