import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Залиште заявку на розробку або технічну консультацію.",
};

export default function ContactsPage() {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
      <section className="glass rounded-xl p-6">
        <h1 className="text-3xl font-semibold text-slate-100">Контакти</h1>
        <p className="mt-3 text-slate-300">
          Опишіть задачу у формі. Я повернусь з оцінкою формату співпраці, термінів та
          перших кроків.
        </p>
        <div className="mt-6 space-y-2 text-slate-200">
          <p>
            Email:{" "}
            <a className="text-cyan-300 underline" href="mailto:oleksandr.morlock@gmail.com">
              oleksandr.morlock@gmail.com
            </a>
          </p>
          <p>
            Телефон:{" "}
            <a className="text-cyan-300 underline" href="tel:+380686787096">
              +38 068 678 7096
            </a>
          </p>
          <p>Локація: Львів, Україна (Remote)</p>
        </div>
      </section>
      <section className="glass neon-border rounded-xl p-6">
        <ContactForm />
      </section>
    </div>
  );
}
