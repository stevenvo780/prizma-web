import { Card, CardBody } from 'prizma-ui';
import { products } from '../data/siteData';

export function ProductGrid() {
  const productOutcome = {
    Iris: 'Mas conversion en WhatsApp con campanas segmentadas.',
    Hermes: 'Mas pedidos cerrados con catalogo y carrito conversacional.',
    Talaria: 'Entregas mas rapidas con trazabilidad por pedido.',
    Talanton: 'Caja e inventario ordenados en tiempo real.',
    Agora: 'Equipos coordinados en un solo workspace cloud.',
    Terminal: 'Soporte tecnico mas agil en entornos remotos.',
    Pistis: 'Control de cobro y cartera en un flujo digital.',
  };

  return (
    <section className="section" id="productos">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Portafolio Prizma</p>
          <h2>Que producto te conviene segun el resultado que buscas</h2>
        </div>
        <div className="card-grid">
          {products.map((product) => (
            <Card key={product.name} interactive>
              <CardBody>
                <div className="product-head">
                  <img src={product.icon} alt={`${product.name} logo`} className="product-icon" loading="lazy" />
                  <h3>{product.name}</h3>
                </div>
                <p className="card-tag">{product.tag}</p>
                <p className="product-outcome">{productOutcome[product.name] ?? product.description}</p>
                <div className="product-card-actions">
                  <a href={product.cta} target="_blank" rel="noopener noreferrer" aria-label={`Ver producto ${product.name}`}>
                    Ver producto
                  </a>
                  <a href="#planes" aria-label={`Plan recomendado para ${product.name}`}>Plan recomendado</a>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
