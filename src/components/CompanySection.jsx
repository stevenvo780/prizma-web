import { useState } from 'react';
import { Card, CardBody } from 'prizma-ui';
import { companyHighlights, importantClients, testimonials } from '../data/siteData';

export function CompanySection() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="section" id="empresa">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Empresa</p>
          <h2>Nuestra Esencia y Propósito</h2>
        </div>

        <div className="company-grid">
          {companyHighlights.map((item) => (
            <Card key={item.title}>
              <CardBody>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="clients-block">
          <div className="clients-carousel-header">
            <button
              className="carousel-pause-btn"
              aria-label={paused ? 'Reanudar carrusel de clientes' : 'Pausar carrusel de clientes'}
              aria-pressed={paused}
              onClick={() => setPaused((p) => !p)}
            >
              {paused ? '▶ Reanudar' : '⏸ Pausar'}
            </button>
          </div>
          <div
            className="clients-carousel"
            aria-label="Carrusel de clientes destacados"
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div
              className="clients-track"
              style={{ animationPlayState: paused ? 'paused' : 'running' }}
            >
              {/* Real items — visible to assistive technology */}
              {importantClients.map((client) => (
                <article key={client.name} className="client-slide">
                  <a href={client.site} target="_blank" rel="noopener noreferrer">
                    <img src={client.icon} alt={`${client.name} logo`} className="client-icon" loading="lazy" />
                    <strong>{client.name}</strong>
                    <span>{client.segment}</span>
                  </a>
                </article>
              ))}
              {/* Cloned items — hidden from assistive technology */}
              {importantClients.map((client) => (
                <article key={`clone-${client.name}`} className="client-slide" aria-hidden="true">
                  <a href={client.site} tabIndex={-1}>
                    <img src={client.icon} alt="" className="client-icon" loading="lazy" />
                    <strong>{client.name}</strong>
                    <span>{client.segment}</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <Card key={`${item.company}-${item.author}`}>
              <CardBody>
                <p>"{item.quote}"</p>
                <strong>{item.company}</strong>
                <span>{item.author}</span>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
