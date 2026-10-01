import {
  Show,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { appConfig } from "@/app.config";

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_#ffedd5,_transparent_50%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p
              className="mb-5 text-sm font-bold uppercase tracking-[0.22em]"
              style={{ color: appConfig.accentColor }}
            >
              Sua jornada, no seu ritmo
            </p>
            <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              <span aria-hidden="true" className="mr-3">
                {appConfig.emoji}
              </span>
              {appConfig.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {appConfig.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Show when="signed-out">
                <SignUpButton>
                  <button
                    className="rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/10 transition hover:-translate-y-0.5 hover:brightness-95"
                    style={{ backgroundColor: appConfig.accentColor }}
                    type="button"
                  >
                    Começar agora
                  </button>
                </SignUpButton>
                <SignInButton>
                  <button
                    className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50"
                    type="button"
                  >
                    Já tenho conta
                  </button>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <Link
                  className="rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-900/10 transition hover:-translate-y-0.5 hover:brightness-95"
                  href="/dashboard"
                  style={{ backgroundColor: appConfig.accentColor }}
                >
                  Ir para o dashboard
                </Link>
              </Show>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-orange-100/70 blur-2xl" />
            <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-xl shadow-orange-950/5 sm:p-9">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Seu próximo passo
                  </p>
                  <p className="mt-1 text-xl font-bold text-slate-900">
                    Consistência começa hoje
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid size-12 place-items-center rounded-2xl bg-orange-50 text-2xl"
                >
                  {appConfig.emoji}
                </span>
              </div>
              <div className="mt-8 space-y-4">
                {appConfig.roadmap.slice(0, 3).map((item, index) => (
                  <div
                    className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
                    key={item.title}
                  >
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: appConfig.accentColor }}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-800">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-orange-100 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: appConfig.accentColor }}
          >
            Feito para evoluir
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Mais clareza em cada treino.
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {appConfig.roadmap.slice(0, 3).map((item) => (
              <article
                className="rounded-3xl border border-slate-100 bg-[#fffaf5] p-6"
                key={item.title}
              >
                <div
                  aria-hidden="true"
                  className="mb-5 h-1 w-12 rounded-full"
                  style={{ backgroundColor: appConfig.accentColor }}
                />
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
