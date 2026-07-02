const BUILD_ID = new Date().toISOString();

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.22),_transparent_45%),linear-gradient(135deg,_#07110b_0%,_#111827_100%)] px-4 py-6 text-zinc-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 rounded-[28px] border border-emerald-400/20 bg-black/35 p-4 shadow-2xl shadow-emerald-950/40 backdrop-blur sm:p-6 lg:p-8">
        <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
          <div>
            <p className="text-lg font-semibold text-white">Nova IA</p>
            <p className="text-sm text-zinc-400">Automação para conversas inteligentes</p>
          </div>
          <nav className="flex gap-2 text-sm text-zinc-300">
            <a href="#features" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">Recursos</a>
            <a href="#workflow" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">Fluxo</a>
            <a href="#cta" className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">Contato</a>
          </nav>
        </header>

        <section className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex w-fit rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
              Nova experiência pronta para crescer
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Seu agente inteligente já está pronto para conversar.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-zinc-300">
                Este app foi criado com Next.js e já está preparado para evoluir com automações, canais de mensagem e uma interface moderna.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#workflow" className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300">
                Ver o fluxo
              </a>
              <a href="#features" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Explorar recursos
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm text-zinc-200 shadow-lg shadow-black/20">
            <p className="font-semibold text-white">Status</p>
            <p className="mt-2">Deploy no Railway ativo</p>
            <p className="mt-1 text-emerald-300">Pronto para receber novas integrações</p>
          </div>
        </section>

        <section id="features" className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Rápido",
              text: "Estrutura enxuta para começar sem complicações.",
            },
            {
              title: "Escalável",
              text: "Base preparada para crescer com novos módulos.",
            },
            {
              title: "Conectável",
              text: "Pronto para integrar com WhatsApp, Instagram e IA.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-zinc-900/70 p-5"
            >
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{item.text}</p>
            </div>
          ))}
        </section>

        <section id="workflow" className="grid gap-6 rounded-3xl border border-emerald-400/20 bg-zinc-950/70 p-6 lg:grid-cols-[1.3fr_0.7fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Fluxo do produto
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              De mensagem para resposta em poucos passos.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
              O projeto já nasce com uma estrutura preparada para receber bots, regras de negócio e canais de atendimento, tudo em uma base moderna e simples de evoluir.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {[
              "Receba mensagens em múltiplos canais",
              "Centralize o fluxo em uma única interface",
              "Adicione automações e IA sem recomeçar do zero",
            ].map((step) => (
              <div key={step} className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
                {step}
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-emerald-400/20 bg-gradient-to-r from-emerald-500/15 to-cyan-500/10 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Próximo passo
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">
              Quer levar isso para um produto real?
            </h2>
          </div>
          <a
            href="https://railway.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
          >
            Ver mais sobre o Railway
          </a>
        </section>
        <footer className="mt-6 text-right text-xs text-zinc-400">Build ID: {BUILD_ID}</footer>
      </div>
    </main>
  );
}
