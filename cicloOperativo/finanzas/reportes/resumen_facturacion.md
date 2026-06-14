# Resumen Consolidado de Facturación — Servicios Tecnológicos Humanizar

> Última actualización: Marzo 2026

---

## Costos mensuales aproximados (Feb/Mar 2026)

| Servicio                               | Costo mensual | Moneda | Archivo CSV                          |
| -------------------------------------- | ------------- | ------ | ------------------------------------ |
| **GCP** (emergent-enterprises + otros) | ~$253         | USD    | `salidas/proveedores/gcp.csv`        |
| **GitHub** (stevenvo780)               | $97.72        | USD    | `salidas/proveedores/github.csv`     |
| **Hostinger VM** (KVM 1 — srv936994)   | $50,900       | COP    | `salidas/proveedores/hostinger.csv`  |
| **Hostinger Dominios** (varios)        | variable      | COP    | `salidas/proveedores/hostinger.csv`  |
| **Vercel** (stevenvo780)               | $20.00        | USD    | `salidas/proveedores/vercel.csv`     |
| **ChatGPT Plus**                       | $20.00        | USD    | `salidas/proveedores/chatgpt.csv`    |
| **Claude**                             | ~$219.49      | USD    | `salidas/proveedores/claude.csv`     |
| **LocalXpose** (cancelado Sep 2025)    | $6.00         | USD    | `salidas/proveedores/localxpose.csv` |

**Total recurrente estimado: ~$610 USD + ~$51,000 COP/mes (SaaS directo)**

> **Costo Real por Usuario (Infraestructura Propia - Graf)**: Con GCP (~$253), Vercel ($20) y Hostinger (~$13), la infraestructura en la nube tiene un piso actual de **~$286 USD/mes**. Sobre una base de 50 clientes activos, el costo real por servir a cada usuario es de **~$5.72 USD/mes** (~$22,300 COP). Esto genera un margen bruto altamente escalable del **73%** asumiendo una venta base de $80,000 COP, contrastando fuertemente con los vampíricos márgenes pasados de TotalPedido.

> **Gasto adicional mayor (Legacy)**: PidoRapido/TotalPedido consumió históricamente ~$2.3M COP/mes promedio (interpolado: soporte por usuario + infra fija + GCP 33% + Hostinger 25%), llevándose todo el margen de la época. Detalle: `salidas/proveedores/pidorapido_totalpedido.csv`

---

## 🖥️ Hostinger — Infraestructura

### VM (Servidor de producción)
- **Hostname**: `srv936994.hstgr.cloud`
- **Plan**: KVM 1
- **Costo**: 50,900 COP/mes
- **Activo desde**: al menos Ago 2025
- **Uso**: Backend services de Humanizar (posible: bases de datos PostgreSQL, Redis, servicios que no están en Cloud Run)

### Dominios gestionados en Hostinger

| Dominio                | Tipo         | Proyecto           |
| ---------------------- | ------------ | ------------------ |
| `humanizar.cloud`      | CLOUD Domain | Portal principal   |
| `humanizar-dev.cloud`  | CLOUD Domain | Entorno desarrollo |
| `meravuelta.com`       | COM Domain   | Mera Vuelta        |
| `sinergia-pos.com`     | COM Domain   | Sinergia POS       |
| `cafeteriadelcaos.com` | COM Domain   | CafeteriaDelCaos   |

### VPS Anterior (Legacy)
- 2 pagos de **Plan 2 Servidor VPS** en Oct 2021 (72,858 COP c/u) — probablemente migrado al KVM 1 actual.

---

## 🌐 GoDaddy — Dominios Adicionales

| Dominio        | Tipo           | Renueva  | Costo Aproximado           |
| -------------- | -------------- | -------- | -------------------------- |
| `graf.com.co`  | .CO Registro   | Mar 2026 | $59,999 COP                |
| `humanizar.co` | .CO Renovación | Feb 2026 | $47.99 USD (~$187,000 COP) |

> **Nota:** Existen otros dominios en esta cuenta (`stevenvallejo.com`) pero son de uso personal y fueron excluidos del registro financiero del proyecto.

---

## Tendencia de costos (USD)

### GCP
| Mes          | USD         |
| ------------ | ----------- |
| Jul 2025     | $20.00      |
| Ago 2025     | $93.38      |
| Sep-Dic 2025 | ~$20.00/mes |
| Ene 2026     | $20.00      |
| Feb 2026     | ~$253.48    |

### GitHub (crecimiento por Copilot/Actions)
| Mes               | USD               |
| ----------------- | ----------------- |
| Ene 2023–Jun 2025 | $10.00/mes (Base) |
| Jul 2025          | $32.45            |
| Ago 2025          | $43.00            |
| Sep 2025          | $75.92            |
| Oct-Nov 2025      | $39.00/mes        |
| Dic 2025          | $60.29            |
| Ene 2026          | $56.92            |
| Feb 2026          | $97.72            |

### Vercel
| Mes               | USD                 |
| ----------------- | ------------------- |
| Mar–Jul 2025      | $20.00/mes          |
| Ago 2025          | $60.00              |
| Sep 2025–Ene 2026 | $20.00/mes          |
| Feb 2026          | $20.52              |
| Mar 2026          | $20.00 (Proyectado) |

### ChatGPT Plus
$20.00 USD/mes constante desde Jul 2023 (32 meses consecutivos)

### Claude
| Mes               | USD        |
| ----------------- | ---------- |
| Jul 2025          | $20.00     |
| Ago 2025          | $93.38     |
| Sep 2025–Ene 2026 | $20.00/mes |
| Feb 2026          | $219.49    |
| Mar 2026          | $0.00      |

### LocalXpose (CANCELADO)
$6.00 USD/mes de Mar–Sep 2025 (7 meses, total: $42.00)

---

## 📦 Archivos CSV disponibles

| Archivo                                          | Contenido                                   | Registros |
| ------------------------------------------------ | ------------------------------------------- | --------- |
| `referencia/gcp_proyectos_mapping.csv`           | Proyecto → Cuenta billing                   | 16        |
| `referencia/gcp_cuentas_billing.csv`             | 6 cuentas de facturación                    | 6         |
| `referencia/gcp_proyectos_detalle.csv`           | Relación cuenta→proyecto                    | 15        |
| `salidas/proveedores/gcp.csv`                    | Facturas GCP                                | 25        |
| `salidas/proveedores/vercel.csv`                 | Facturas Vercel                             | 14        |
| `salidas/proveedores/chatgpt.csv`                | Facturas ChatGPT                            | 32        |
| `salidas/proveedores/claude.csv`                 | Facturas Claude                             | 26        |
| `salidas/proveedores/github.csv`                 | Facturas GitHub                             | 42        |
| `salidas/proveedores/hostinger.csv`              | Facturas Hostinger (VM + dominios)          | 21        |
| `salidas/proveedores/godaddy.csv`                | Facturas GoDaddy (Solo dominios proyecto)   | 4         |
| `salidas/proveedores/localxpose.csv`             | Facturas LocalXpose                         | 7         |
| `salidas/proveedores/pidorapido_totalpedido.csv` | Costos PidoRapido/TotalPedido (interpolado) | 32        |

> Todas las rutas son relativas a `cicloOperativo/finanzas/`
