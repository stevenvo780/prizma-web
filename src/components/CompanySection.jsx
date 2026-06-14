import { companyHighlights, importantClients, testimonials } from '../data/siteData';

export function CompanySection() {
  const carouselClients = [...importantClients, ...importantClients];

  return (
    <section className="section" id="empresa">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Empresa</p>
          <h2>Nuestra Esencia y Propósito</h2>
        </div>

        <div className="company-grid">
          {companyHighlights.map((item) => (
            <article key={item.title} className="company-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="clients-block">
          <div className="clients-carousel" aria-label="Carrusel de clientes destacados">
            <div className="clients-track">
              {carouselClients.map((client, idx) => (
                <article key={`${client.name}-${idx}`} className="client-slide">
                  <a href={client.site} target="_blank" rel="noopener noreferrer">
                    <img src={client.icon} alt={`${client.name} logo`} className="client-icon" loading="lazy" />
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
            <article key={`${item.company}-${item.author}`} className="testimonial-card">
              <p>"{item.quote}"</p>
              <strong>{item.company}</strong>
              <span>{item.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
