import { useEffect, useMemo, useRef, useState } from 'react';
import {
  commercialKpis,
  implementationPath,
  roadmapTimeline,
  successCases,
} from '../data/siteData';

export function VisualProofSection() {
  const [transformProgress, setTransformProgress] = useState(58);
  const wrapRef = useRef(null);

  const caseSlides = useMemo(() => [...successCases, ...successCases], []);
  const leanNodePositions = useMemo(() => {
    const total = implementationPath.length;
    return implementationPath.map((_, idx) => {
      const angle = ((-90 + (360 / total) * idx) * Math.PI) / 180;
      return {
        left: `${50 + Math.cos(angle) * 30}%`,
        top: `${50 + Math.sin(angle) * 30}%`,
      };
    });
  }, []);
  const orderLayout = useMemo(
    () => [
      [20, 18],
      [40, 18],
      [60, 18],
      [80, 18],
      [20, 38],
      [40, 38],
      [60, 38],
      [80, 38],
      [20, 58],
      [40, 58],
      [60, 58],
      [80, 58],
      [40, 78],
      [60, 78],
    ],
    []
  );
  const chaosLayout = useMemo(
    () => [
      [8, 20],
      [16, 72],
      [28, 34],
      [37, 86],
      [44, 12],
      [57, 76],
      [63, 28],
      [70, 90],
      [78, 41],
      [85, 14],
      [91, 68],
      [30, 56],
      [52, 49],
      [14, 44],
    ],
    []
  );
  const graphLinks = useMemo(
    () => [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 5],
      [1, 5],
      [1, 6],
      [2, 6],
      [2, 7],
      [3, 7],
      [4, 5],
      [5, 6],
      [6, 7],
      [4, 8],
      [5, 9],
      [6, 10],
      [7, 11],
      [5, 6],
      [9, 10],
      [10, 11],
      [9, 12],
      [10, 12],
      [10, 13],
      [11, 13],
      [12, 13],
    ],
    []
  );
  const graphNodes = useMemo(() => {
    const progress = transformProgress / 100;
    return orderLayout.map(([ox, oy], idx) => {
      const [cx, cy] = chaosLayout[idx];
      return {
        id: idx,
        x: cx + (ox - cx) * progress,
        y: cy + (oy - cy) * progress,
      };
    });
  }, [transformProgress, orderLayout, chaosLayout]);

  return (
    <section className="section" id="impacto" ref={wrapRef}>
      <div className="container visual-shell">
        <div className="section-head">
          <p className="eyebrow">Impacto visual</p>
          <h2>Menos texto, mas evidencia operativa</h2>
        </div>

        <div className="visual-counters">
          {commercialKpis.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>

        <div className="visual-grid">
          <article className="visual-card">
            <h3>Del desorden al orden</h3>
            <div className="chaos-order-board">
              <svg viewBox="0 0 100 100" className="chaos-order-svg" role="img" aria-label="Transformacion de grafo">
                <defs>
                  <linearGradient id="flowLink" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(246,130,130,0.85)" />
                    <stop offset="48%" stopColor="rgba(155,200,200,0.6)" />
                    <stop offset="100%" stopColor="rgba(25,222,196,0.92)" />
                  </linearGradient>
                </defs>
                {graphLinks.map(([a, b], idx) => {
                  const from = graphNodes[a];
                  const to = graphNodes[b];
                  return (
                    <line
                      key={`link-${a}-${b}-${idx}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      className="chaos-link"
                      style={{
                        opacity: 0.18 + transformProgress / 130,
                        strokeWidth: 0.14 + transformProgress / 140,
                      }}
                    />
                  );
                })}
                {graphNodes.map((node, idx) => (
                  <circle
                    key={`node-${node.id}`}
                    cx={node.x}
                    cy={node.y}
                    r={1.25 + transformProgress / 120}
                    className={`chaos-node${idx % 3 === 0 ? ' hot' : ''}`}
                  />
                ))}
              </svg>
              <div className="state-chip state-chip-chaos">Desorden</div>
              <div className="state-chip state-chip-order">Orden</div>
              <div className="state-meter" style={{ width: `${transformProgress}%` }}>
                <span />
              </div>
            </div>
            <input
              className="split-range"
              type="range"
              min="10"
              max="92"
              value={transformProgress}
              onChange={(event) => {
                setTransformProgress(Number(event.target.value));
              }}
              aria-label="Control desorden y orden"
            />
          </article>

          <article className="visual-card">
            <h3>Ciclo LEAN de implementacion</h3>
            <div className="lean-cycle">
              <svg viewBox="0 0 100 100" className="lean-cycle-svg" aria-hidden="true">
                <circle cx="50" cy="50" r="34" className="lean-cycle-track" />
                <circle cx="50" cy="50" r="34" className="lean-cycle-ring" />
                <circle className="lean-cycle-dot" r="2.4">
                  <animateMotion dur="6.5s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#leanCyclePath" />
                  </animateMotion>
                </circle>
                <path id="leanCyclePath" d="M 84 50 A 34 34 0 1 1 16 50 A 34 34 0 1 1 84 50" fill="none" />
              </svg>
              {implementationPath.map((step, idx) => (
                <div key={step.phase} className="lean-node" style={leanNodePositions[idx]}>
                  <span>{idx + 1}</span>
                  <strong>{step.phase}</strong>
                  <small>{step.timing}</small>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="visual-card roadmap-card">
          <h3>Roadmap activo</h3>
          <div className="road-flow">
            <span className="road-flow-pulse" aria-hidden="true" />
            {roadmapTimeline.map((item) => (
              <div key={item.horizon} className="road-flow-stop">
                <span className="road-flow-time">{item.horizon}</span>
                <p>{item.focus}</p>
              </div>
            ))}
          </div>
        </article>

        <div className="visual-asym-grid">
          <article className="visual-card case-card">
            <h3>Casos en movimiento</h3>
            <div className="case-carousel">
              <div className="case-track">
                {caseSlides.map((item, idx) => (
                  <div key={`${item.client}-${idx}`} className="case-slide">
                    <strong>{item.client}</strong>
                    <span>{item.sector}</span>
                    <p>{item.after}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
