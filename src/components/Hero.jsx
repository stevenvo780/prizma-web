import { EcosystemGraph } from './EcosystemGraph';
import { heroProof, importantClients } from '../data/siteData';

export function Hero() {
  const heroClients = importantClients.slice(0, 6);

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Laboratorio de Democratización Tecnológica</p>
          <h1>La ciencia de sistemas al servicio del empresario visionario.</h1>
          <p className="hero-copy">
            Olympo es un organismo de microservicios independientes diseñado por científicos, filósofos y estrategas de campo. Hacemos accesible la tecnología más avanzada para transformar la operación real en resultados exponenciales.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-primary" href="#contacto">
              Agendar demo
            </a>
            <a className="btn btn-secondary" href="#planes">
              Ver planes
            </a>
          </div>
          <div className="start-path">
            <a href="#productos">
              <span>1</span>
              <strong>Elige tu objetivo</strong>
              <small>Ventas, operacion o productividad.</small>
            </a>
            <a href="#planes">
              <span>2</span>
              <strong>Activa plan recomendado</strong>
              <small>Empieza con demo o plan de entrada.</small>
            </a>
            <a href="#contacto">
              <span>3</span>
              <strong>Escala con acompanamiento</strong>
              <small>Onboarding, go-live y soporte.</small>
            </a>
          </div>
          <div className="hero-logos" aria-label="Clientes destacados">
            {heroClients.map((client) => (
              <a key={client.name} href={client.site} target="_blank" rel="noopener noreferrer" title={client.name}>
                <img src={client.icon} alt={client.name} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <EcosystemGraph />
          <div className="metric-grid">
            {heroProof.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
