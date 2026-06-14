import { products } from '../data/siteData';

export function ProductGrid() {
  const productOutcome = {
    EMW: 'Mas conversion en WhatsApp con campanas segmentadas.',
    Graf: 'Mas pedidos cerrados con catalogo y carrito conversacional.',
    'Mera Vuelta': 'Entregas mas rapidas con trazabilidad por pedido.',
    'Sinergia POS': 'Caja e inventario ordenados en tiempo real.',
    Agora: 'Equipos coordinados en un solo workspace cloud.',
    Terminal: 'Soporte tecnico mas agil en entornos remotos.',
    Fiar: 'Control de cobro y cartera en un flujo digital.',
  };

  return (
    <section className="section" id="productos">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Portafolio Olympo</p>
          <h2>Que producto te conviene segun el resultado que buscas</h2>
        </div>
        <div className="card-grid">
          {products.map((product) => (
            <article key={product.name} className="card">
              <div className="product-head">
                <img src={product.icon} alt={`${product.name} logo`} className="product-icon" loading="lazy" />
                <h3>{product.name}</h3>
              </div>
              <p className="card-tag">{product.tag}</p>
              <p className="product-outcome">{productOutcome[product.name] ?? product.description}</p>
              <div className="product-card-actions">
                <a href={product.cta} target="_blank" rel="noopener noreferrer">
                  Ver producto
                </a>
                <a href="#planes">Plan recomendado</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
