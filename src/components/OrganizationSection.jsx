import { Card, CardBody, Tag } from 'prizma-ui';
import {
  commercialModel,
  culturePrinciples,
  growthRoute,
  icpSegments,
  operationQuality,
  organizationOverview,
  portfolioArchitecture,
  roadmapTimeline,
  successCases,
} from '../data/siteData';

const appIcons = {
  Iris: '/assets/icons/apps/emw.svg',
  Hermes: '/assets/icons/apps/graf.svg',
  Talaria: '/assets/icons/apps/meravuelta.png',
  Talanton: '/assets/icons/apps/sinergia.svg',
  Agora: '/assets/icons/apps/agora.svg',
  Terminal: '/assets/icons/apps/terminal.png',
  Conectores: '/assets/icons/apps/fiar.png',
  Pistis: '/assets/icons/apps/fiar.png',
};

function PortfolioLane({ lane }) {
  return (
    <article className="orgv-lane">
      <span className="orgv-lane-label">{lane.line}</span>
      <div className="orgv-lane-icons">
        {lane.apps.split(' + ').map((app) => (
          <span key={`${lane.line}-${app}`} className="orgv-app">
            <img src={appIcons[app]} alt={app} loading="lazy" />
            {app}
          </span>
        ))}
      </div>
    </article>
  );
}

export function OrganizationSection() {
  return (
    <section className="section section-contrast" id="organizacion">
      <div className="container orgv-shell">
        <div className="section-head">
          <p className="eyebrow">Organización y Visión</p>
          <h2>El Organismo de Innovación Prizma</h2>
        </div>

        <div className="orgv-top">
          <Card>
            <CardBody className="orgv-kpi">
              <span>Modelo</span>
              <strong>Bootstrapping Soberano</strong>
              <p>{organizationOverview.stage}</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="orgv-kpi">
              <span>Misión</span>
              <strong>Democratización Tecnológica</strong>
              <p>{organizationOverview.problem}</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="orgv-kpi focus">
              <span>Productos estrella</span>
              <strong>Hermes + Iris</strong>
              <p>Traccion comercial y conversion por WhatsApp.</p>
            </CardBody>
          </Card>
        </div>

        <div className="orgv-grid">
          <Card>
            <CardBody className="orgv-card wide">
              <h3>Arquitectura de portafolio</h3>
              <div className="orgv-lanes">
                {portfolioArchitecture.map((lane) => (
                  <PortfolioLane key={lane.line} lane={lane} />
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="orgv-card">
              <h3>Para quien y con que foco</h3>
              <div className="orgv-chip-wrap">
                {icpSegments.map((item) => (
                  <Tag key={item.segment} tone="module">
                    {item.segment}
                  </Tag>
                ))}
              </div>
              <div className="orgv-cases">
                {successCases.map((item) => (
                  <div key={item.client} className="orgv-case">
                    <strong>{item.client}</strong>
                    <span>{item.after}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="orgv-card wide">
              <h3>Ruta de crecimiento del cliente</h3>
              <div className="orgv-route-inline">
                {growthRoute.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="orgv-card wide">
              <div className="orgv-dual">
                <div>
                  <h3>Bundles</h3>
                  <div className="orgv-bundles">
                    {commercialModel.map((bundle) => (
                      <div key={bundle.bundle} className="orgv-bundle">
                        <strong>{bundle.bundle}</strong>
                        <span>{bundle.includes}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3>Roadmap 3-6-12</h3>
                  <div className="orgv-roadmap">
                    {roadmapTimeline.map((item) => (
                      <div key={item.horizon} className="orgv-road-item">
                        <strong>{item.horizon}</strong>
                        <span>{item.focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="orgv-culture">
          {operationQuality.roles.map((item) => (
            <span key={item} className="soft">
              {item.split(':')[0]}
            </span>
          ))}
          {culturePrinciples.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
