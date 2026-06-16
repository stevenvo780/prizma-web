import { Button, Hero as HeroShell, MetricGrid } from 'prizma-ui';
import { EcosystemGraph } from './EcosystemGraph';
import { heroProof, importantClients } from '../data/siteData';

export function Hero() {
  const heroClients = importantClients.slice(0, 6);

  const metrics = heroProof.map((item) => ({
    id: item.label,
    label: item.label,
    value: item.value,
  }));

  return (
    <HeroShell id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Laboratorio de Democratización Tecnológica</p>
          <h1>La ciencia de sistemas al servicio del empresario visionario.</h1>
          <p className="hero-copy">
            Prizma es un organismo de microservicios independientes diseñado por científicos, filósofos y estrategas de campo. Hacemos accesible la tecnología más avanzada para transformar la operación real en resultados exponenciales.
          </p>
          <div className="hero-cta-row">
            <a href="#contacto">
              <Button variant="primary">Agendar demo</Button>
            </a>
            <a href="#planes">
              <Button variant="secondary">Ver planes</Button>
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
          <MetricGrid
            metrics={metrics}
            aria-label="Metricas clave"
            className="metric-grid"
            gap="sm"
          />
        </div>
      </div>
    </HeroShell>
  );
}
