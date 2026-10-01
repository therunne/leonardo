import { currentUser } from "@clerk/nextjs/server";
import { appConfig } from "@/app.config";

export default async function DashboardPage() {
  const user = await currentUser();
  const firstName =
    user?.firstName ??
    user?.primaryEmailAddress?.emailAddress.split("@")[0] ??
    "atleta";

  return (
    <main className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <section className="rounded-3xl bg-slate-950 px-6 py-8 text-white sm:px-10 sm:py-10">
        <p className="text-sm font-semibold text-orange-300">
          {appConfig.emoji} {appConfig.name}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Olá, {firstName}!
        </h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-300">
          {appConfig.description}
        </p>
      </section>

      <section className="mt-12">
        <div className="max-w-2xl">
          <p
            className="text-sm font-bold uppercase tracking-[0.2em]"
            style={{ color: appConfig.accentColor }}
          >
            O que vem por aí
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Em breve no {appConfig.name}
          </h2>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {appConfig.roadmap.map((item, index) => (
            <article
              className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/[0.03]"
              key={item.title}
            >
              <span
                className="grid size-10 place-items-center rounded-2xl text-sm font-bold text-white"
                style={{ backgroundColor: appConfig.accentColor }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
