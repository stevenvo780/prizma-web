import { useEffect, useRef, useState } from 'react';

const brandLogo = '/prizma-symbol.svg';

const center = { x: 50, y: 50 };
const nodes = [
  {
    id: 'fiar',
    x: 50,
    y: 12,
    label: 'Pistis',
    hint: 'Facturacion y cartera conectada.',
    icon: '/assets/icons/apps/fiar.png',
    href: 'https://fiar.humanizar.cloud',
  },
  {
    id: 'emw',
    x: 23,
    y: 24,
    label: 'Iris',
    hint: 'Campanas por WhatsApp que convierten.',
    icon: '/assets/icons/apps/emw.svg',
    href: 'https://emw.humanizar.cloud/login',
  },
  {
    id: 'graf',
    x: 77,
    y: 24,
    label: 'Hermes',
    hint: 'Catalogo y ventas conversacionales.',
    icon: '/assets/icons/apps/graf.svg',
    href: 'https://www.graf.com.co/graf',
  },
  {
    id: 'mera',
    x: 18,
    y: 54,
    label: 'Talaria',
    hint: 'Logistica de pedidos y entregas.',
    icon: '/assets/icons/apps/meravuelta.png',
    href: 'https://www.meravuelta.com/',
  },
  {
    id: 'sinergia',
    x: 82,
    y: 54,
    label: 'Talanton',
    hint: 'POS para tienda e inventario.',
    icon: '/assets/icons/apps/sinergia.svg',
    href: 'https://www.sinergia-pos.com/',
  },
  {
    id: 'agora',
    x: 33,
    y: 84,
    label: 'Agora',
    hint: 'Workspace colaborativo en la nube.',
    icon: '/assets/icons/apps/agora.svg',
    href: 'https://agora.humanizar.cloud/',
  },
  {
    id: 'terminal',
    x: 67,
    y: 84,
    label: 'Terminal',
    hint: 'Control remoto de workers y shells.',
    icon: '/assets/icons/apps/terminal.png',
    href: 'https://terminal.humanizar-dev.cloud/',
  },
];

const allRelations = [];
for (let i = 0; i < nodes.length; i += 1) {
  for (let j = i + 1; j < nodes.length; j += 1) {
    const from = nodes[i];
    const to = nodes[j];
    allRelations.push({
      id: `rel-${from.id}-${to.id}`,
      from: from.id,
      to: to.id,
    });
  }
}

const nodeMap = Object.fromEntries(nodes.map((node) => [node.id, node]));

export function EcosystemGraph() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef({ active: false, px: 0, py: 0, ox: 0, oy: 0 });
  const wheelResetTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (wheelResetTimer.current) clearTimeout(wheelResetTimer.current);
    };
  }, []);

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const handlePointerDown = (event) => {
    drag.current = {
      active: true,
      px: event.clientX,
      py: event.clientY,
      ox: offset.x,
      oy: offset.y,
    };
  };

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - rect.left - rect.width / 2;
    const dy = event.clientY - rect.top - rect.height / 2;
    setTilt({
      x: clamp((dx / rect.width) * 18, -9, 9),
      y: clamp((-dy / rect.height) * 14, -7, 7),
    });

    if (!drag.current.active) return;
    setOffset({
      x: clamp(drag.current.ox + (event.clientX - drag.current.px), -70, 70),
      y: clamp(drag.current.oy + (event.clientY - drag.current.py), -55, 55),
    });
  };

  const handlePointerUp = () => {
    drag.current.active = false;
  };

  const handleWheel = (event) => {
    // Ignore pinch-zoom gestures and browser-level zoom shortcuts.
    if (event.ctrlKey || event.metaKey) return;
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.02 : 0.02;
    setZoom((prev) => clamp(prev + delta, 0.96, 1.08));
    if (wheelResetTimer.current) clearTimeout(wheelResetTimer.current);
    wheelResetTimer.current = setTimeout(() => {
      setZoom(1);
    }, 850);
  };

  const sceneTransform = `translate(${offset.x}px, ${offset.y}px) scale(${zoom}) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`;
  const buildCurve = (source, target) => {
    const mx = (source.x + target.x) / 2;
    const my = (source.y + target.y) / 2;
    const outX = mx - center.x;
    const outY = my - center.y;
    const outLen = Math.hypot(outX, outY) || 1;
    const edgeLen = Math.hypot(target.x - source.x, target.y - source.y) || 1;
    const strength = Math.min(9, Math.max(3.6, edgeLen * 0.22));
    const cx = mx + (outX / outLen) * strength;
    const cy = my + (outY / outLen) * strength;
    return `M ${source.x} ${source.y} Q ${cx} ${cy} ${target.x} ${target.y}`;
  };

  return (
    <div
      className="ecosystem-manual-wrap"
      role="region"
      aria-label="Ecosistema Prizma — mapa interactivo de productos"
      aria-describedby="ecosystem-instructions"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onWheel={handleWheel}
    >
      <p id="ecosystem-instructions" className="sr-only">
        Mapa interactivo. Arrastra para mover, usa la rueda del ratón para hacer zoom. Cada nodo es un enlace al producto.
      </p>
      <div className="ecosystem-viewport">
        <div className="ecosystem-scene" style={{ transform: sceneTransform }}>
          <svg className="ecosystem-manual-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {nodes.map((node) => (
              <line key={`core-${node.id}`} className="line-core" x1={center.x} y1={center.y} x2={node.x} y2={node.y} />
            ))}
            {allRelations.map((link) => {
              const source = nodeMap[link.from];
              const target = nodeMap[link.to];
              const d = buildCurve(source, target);
              return (
                <g key={`${link.from}-${link.to}`}>
                  <path id={link.id} className="curve-relation" d={d} />
                  <circle className="data-dot" r="0.55">
                    <animateMotion dur="7s" begin="0s" repeatCount="indefinite" rotate="auto">
                      <mpath href={`#${link.id}`} />
                    </animateMotion>
                  </circle>
                  <circle className="data-dot reverse" r="0.45">
                    <animateMotion
                      dur="9s"
                      begin="0.8s"
                      repeatCount="indefinite"
                      calcMode="linear"
                      keyPoints="1;0"
                      keyTimes="0;1"
                      rotate="auto"
                    >
                      <mpath href={`#${link.id}`} />
                    </animateMotion>
                  </circle>
                </g>
              );
            })}
          </svg>

          <div className="ecosystem-manual-core">
            <img src={brandLogo} alt="Prizma" loading="lazy" />
          </div>

          {nodes.map((node) => (
            <a
              key={node.id}
              className={`ecosystem-manual-node node-${node.id}`}
              href={node.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              aria-label={`Abrir ${node.label}`}
            >
              <img src={node.icon} alt={node.label} loading="lazy" />
              <span>{node.label}</span>
              <em className="ecosystem-node-tip">{node.hint}</em>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
