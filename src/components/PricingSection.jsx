import { Badge, Button, Card, CardBody } from 'prizma-ui';
import { pricingByProduct, pricingHighlights } from '../data/siteData';

export function PricingSection() {
  const getRecommendedIndex = (tiers) => {
    const byPriority = ['pro', 'estandar', 'premium', 'basico', 'especial', 'enterprise'];
    for (const key of byPriority) {
      const idx = tiers.findIndex((tier) => tier.name.toLowerCase().includes(key));
      if (idx >= 0) return idx;
    }
    return tiers.findIndex((tier) => !/gratis|gratuito|demo|incluido/i.test(`${tier.name} ${tier.price}`));
  };

  return (
    <section className="section section-contrast" id="planes">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Planes y precios</p>
          <h2>Planes por producto para escalar a tu ritmo</h2>
          <p className="price-global-note">Todos los productos incluyen plan gratuito o demo inicial.</p>
        </div>
        <div className="price-visual-ribbon" aria-hidden="true">
          <span>Explora</span>
          <span>Activa</span>
          <span>Escala</span>
        </div>
        <div className="price-highlight-grid">
          {pricingHighlights.map((item) => (
            <a key={item.product} href={item.href} className="price-highlight-card" target="_blank" rel="noopener noreferrer">
              <div className="price-highlight-top">
                <img src={item.icon} alt={item.product} className="plan-icon" loading="lazy" />
                <strong>{item.product}</strong>
              </div>
              <span className="price-highlight-value">Desde {item.price}</span>
              <span className="price-highlight-note">{item.note}</span>
            </a>
          ))}
        </div>
        <div className="pricing-products-grid">
          {pricingByProduct.map((entry) => {
            const recommendedIndex = getRecommendedIndex(entry.tiers);
            return (
              <Card key={entry.product}>
                <CardBody>
                  <div className="price-product-layout">
                    <div className="price-product-intro">
                      <div className="price-product-head">
                        <img src={entry.icon} alt={`${entry.product} icono`} className="plan-icon" loading="lazy" />
                        <h3>{entry.product}</h3>
                      </div>
                      <p className="price-meta">
                        Verificado: {entry.verifiedAt} ·{' '}
                        <a href={entry.sourceUrl} target="_blank" rel="noopener noreferrer">
                          fuente
                        </a>
                      </p>
                      <p className="price-meta">{entry.sourceNote}</p>
                    </div>
                    <div className="price-lines">
                      {entry.tiers.map((tier, idx) => (
                        <div
                          key={`${entry.product}-${tier.name}`}
                          className={`price-line${idx === recommendedIndex ? ' recommended' : ''}`}
                        >
                          <span className="price-line-name">{tier.name}</span>
                          {idx === recommendedIndex && (
                            <Badge tone="primary" className="price-line-badge">Recomendado</Badge>
                          )}
                          <strong className="price-line-value">{tier.price}</strong>
                          <span className="price-line-detail">{tier.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
        <div className="pricing-cta-row">
          <a href="#contacto">
            <Button variant="primary">Quiero recomendacion personalizada</Button>
          </a>
          <a href="#productos">
            <Button variant="secondary">Volver a productos</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
