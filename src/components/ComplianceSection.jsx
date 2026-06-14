import { complianceChecklist } from '../data/siteData';

export function ComplianceSection() {
  return (
    <section className="section" id="cumplimiento">
      <div className="container compliance-shell">
        <div>
          <p className="eyebrow">Estandar para emprendimientos en Colombia</p>
          <h2>Documentacion legal y empresarial que normalmente exigen clientes y aliados</h2>
          <p>
            Para operar con confianza y cerrar negocios B2B, estos documentos deben estar listos y visibles. Lo societario
            puede ir en progreso, pero el frente de datos y condiciones comerciales debe estar activo desde ya.
          </p>
        </div>
        <ul>
          {complianceChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
