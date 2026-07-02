const BUILD_ID = new Date().toISOString();

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <header className="topbar">
          <div>
            <p className="brand">Nova IA</p>
            <p className="tagline">Automação para conversas inteligentes</p>
          </div>
          <nav className="nav">
            <a href="#features">Recursos</a>
            <a href="#workflow">Fluxo</a>
            <a href="#cta">Contato</a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <span className="hero-badge">Nova experiência pronta para crescer</span>
            <h1>Seu agente inteligente já está pronto para conversar.</h1>
            <p>
              Este app foi criado com Next.js e já está preparado para evoluir com
              automações, canais de mensagem e uma interface moderna.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#workflow">
                Ver o fluxo
              </a>
              <a className="button button-outline" href="#features">
                Explorar recursos
              </a>
            </div>
          </div>

          <div className="status-card">
            <p className="status-title">Status</p>
            <p>Deploy no Railway ativo</p>
            <p className="status-highlight">Pronto para receber novas integrações</p>
          </div>
        </section>

        <section id="features" className="grid features-grid">
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
            <div key={item.title} className="feature-card">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        <section id="workflow" className="workflow-section">
          <div>
            <p className="section-label">Fluxo do produto</p>
            <h2>De mensagem para resposta em poucos passos.</h2>
            <p>
              O projeto já nasce com uma estrutura preparada para receber bots,
              regras de negócio e canais de atendimento, tudo em uma base moderna e
              simples de evoluir.
            </p>
          </div>
          <div className="workflow-list">
            {[
              "Receba mensagens em múltiplos canais",
              "Centralize o fluxo em uma única interface",
              "Adicione automações e IA sem recomeçar do zero",
            ].map((step) => (
              <div key={step} className="workflow-step">
                {step}
              </div>
            ))}
          </div>
        </section>

        <section id="cta" className="cta-section">
          <div>
            <p className="section-label">Próximo passo</p>
            <h2>Quer levar isso para um produto real?</h2>
          </div>
          <a
            href="https://railway.com"
            target="_blank"
            rel="noreferrer"
            className="button button-primary"
          >
            Ver mais sobre o Railway
          </a>
        </section>

        <footer className="footer">Build ID: {BUILD_ID}</footer>
      </div>
    </main>
  );
}
