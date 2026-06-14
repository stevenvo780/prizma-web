# Estimación de Horas Invertidas — Humanizar Systems

**Fecha de generación**: Marzo 2026  
**Período analizado**: Octubre 2021 – Marzo 2026  
**Estado**: Estimación (nunca se trackearon horas formalmente)

---

## Fuentes de datos

| Fuente               | Descripción                                         | Registros     |
| -------------------- | --------------------------------------------------- | ------------- |
| Git logs (28 repos)  | Commits de todos los repositorios locales           | 3,990 commits |
| `pagos_internos.csv` | Pagos a equipo, identifica roles y períodos activos | 32 registros  |
| Estimación directa   | Información del CEO sobre dedicación de Isa, Miguel | —             |

## Repositorios analizados (28)

- **Deprecados**: bot-emw-v7, emw-api, emw, wpp-api-oficial (en `.deprecated/emw-8/`)
- **EMW**: emw-backend, emw-frontend
- **Graf**: graf-admin, graf-backend, graf-client, graf (parent)
- **Sinergia**: pos, pos-frond
- **MeraVuelta**: MeraVueltaApi, MeraVueltaFrond, MeraVueltaMovil, MeraVueltaPublicity
- **Fiar**: fiar-api, fiar-front
- **APIs**: ApiSigo, ApiSoftia, HubCentral
- **Web/Docs**: Humanizar, HumanizarDocs, ComercialHumanizar, EducacionCooperativa
- **Otros**: simple-typescript-cr, ultimate-terminal, siete-proxy (utils)

---

## Metodología para roles de desarrollo (Git)

### Normalización de autores

Steven opera bajo 11+ aliases de git. Se consolidaron todos bajo una sola identidad:
- `stevenvo780`, `Stev`, `StevenVo780`, `stev`, `Steven vallejo`, `stev vallejo`, `Steven Vallejo Ortiz`, `Stevenvo32`, `Steven`, `steven`, `Steven Vallejo`, `Humanizar Admin`

Bots excluidos: `copilot-swe-agent[bot]`, `dependabot[bot]`, `Vercel`, `Humanizar Bot`

### Algoritmo de sesiones

1. **Ordenar** commits por autor y timestamp
2. **Agrupar en sesiones**: commits consecutivos del mismo autor dentro de **2 horas** de diferencia pertenecen a la misma sesión
3. **Duración de sesión**:
   - 1 solo commit → **30 minutos** (mínimo)
   - Múltiples commits → (último – primero) + 15 minutos de cierre
   - Mínimo: 30 minutos
   - Máximo: 8 horas (cap para sesiones muy largas)

### Factor de ajuste: ×1.8

Los commits representan solo una fracción del trabajo real de desarrollo. El factor **1.8** cubre:
- Diseño y planificación previo al código
- Debugging y troubleshooting sin commits
- Testing y QA manual
- Configuración de infraestructura y deploys
- Code review y reuniones técnicas
- Reuniones con clientes y gestión comercial (especialmente Steven como CEO)
- Documentación

> **Referencia**: La industria de software estima que el tiempo "en IDE escribiendo código" es ~40-60% del tiempo total de un desarrollador. El factor 1.8 es conservador (asume ~56% en commits).

---

## Metodología para roles no-dev (estimación)

### Isa — Directora de Operaciones / Diseño
- **Período**: Julio 2023 – Diciembre 2025 (30 meses)
- **Base**: El CEO reporta dedicación variable de 1-7 horas/día
- **Funciones**: Gestión operativa, diseño gráfico para clientes y marca corporativa, UI/UX de productos, atención a clientes
- **Estimación**: Promedio conservador de **3.5 horas/día** × 22 días laborables/mes
- **Total**: 30 × 22 × 3.5 = **2,310 horas**
- **Confianza**: Media (basada en estimación verbal)

### Miguel — Socio / Supervisión
- **Período**: Julio 2023 – Diciembre 2025 (30 meses)
- **Base**: El CEO reporta dedicación de "~0h/mes" en operaciones activas
- **Estimación**: **4 horas/mes** para reuniones, supervisión, decisiones estratégicas
- **Total**: 30 × 4 = **120 horas**
- **Confianza**: Baja (rol pasivo, estimación conservadora)

### Dani — Soporte TotalPedido
- **Período**: Julio 2023 – Febrero 2024 (8 meses, según pagos_internos.csv)
- **Estimación**: **40 horas/mes** (medio tiempo)
- **Total**: 8 × 40 = **320 horas**
- **Confianza**: Media (corroborada por pagos consistentes mensuales)

### Laura — Ventas (comisiones)
- **Período**: Julio 2023 (único pago registrado)
- **Estimación**: **20 horas** total (rol puntual, breve al inicio del proyecto)
- **Confianza**: Baja

### QA Tester — Testing externo
- **Período**: Noviembre 2025 – Marzo 2026 (5 meses)
- **Base**: Pagos por ~$600,000 COP a tarifa de $50,000/hora
- **Estimación**: $600,000 ÷ $50,000/h = **12 horas**
- **Total**: **12 horas**
- **Confianza**: Alta (basada en pagos reales y tarifa conocida)

---

## Resultados

### Consolidado por persona

| Persona    | Rol                               |     Horas |   Commits | Método     | Confianza |
| ---------- | --------------------------------- | --------: | --------: | ---------- | --------- |
| Isa        | Dir. Operaciones / Diseño / UI·UX |     2,310 |         — | Estimación | Media     |
| Steven     | CEO / CTO / Dev Principal         |     1,782 |     3,739 | Git ×1.8   | Alta      |
| Dani       | Soporte TotalPedido               |       320 |         — | Estimación | Media     |
| Miguel     | Socio / Supervisión               |       120 |         — | Estimación | Baja      |
| Sebastian  | Desarrollador (contratista)       |        70 |       107 | Git ×1.8   | Alta      |
| Laura      | Ventas (comisiones)               |        20 |         — | Estimación | Baja      |
| Juan Diego | Desarrollador (contratista)       |        19 |        29 | Git ×1.8   | Media     |
| JP         | Desarrollador (contratista)       |        15 |        26 | Git ×1.8   | Media     |
| QA Tester  | Testing externo                   |        12 |         — | Pagos      | Alta      |
| Yuliana    | Desarrollador (contratista)       |        12 |         9 | Git ×1.8   | Media     |
| John       | Desarrollador (contratista)       |        10 |        16 | Git ×1.8   | Media     |
| Vrilli     | Desarrollador (contratista)       |         7 |        14 | Git ×1.8   | Media     |
| Selena     | Desarrollador (contratista)       |         1 |         6 | Git ×1.8   | Media     |
| **TOTAL**  |                                   | **4,698** | **3,946** |            |           |

### Consolidado por categoría de rol

| Categoría                          | Personas |     Horas | % del total |
| ---------------------------------- | -------- | --------: | ----------: |
| Operaciones / Diseño / UI·UX (Isa) | 1        |     2,310 |       49.2% |
| Desarrollo (Steven)                | 1        |     1,782 |       37.9% |
| Soporte (Dani)                     | 1        |       320 |        6.8% |
| Desarrollo (contratistas)          | 7        |       134 |        2.9% |
| Dirección / Supervisión (Miguel)   | 1        |       120 |        2.6% |
| Ventas (Laura)                     | 1        |        20 |        0.4% |
| QA Testing externo                 | 1        |        12 |        0.3% |
| **TOTAL**                          | **13**   | **4,698** |    **100%** |

### Horas por año

| Año            | Desarrollo | Operaciones (Isa) | Soporte (Dani) | QA Testing | Supervisión (Miguel) | Total |
| -------------- | ---------: | ----------------: | -------------: | ---------: | -------------------: | ----: |
| 2021           |         27 |                 — |              — |          — |                    — |    27 |
| 2022           |        143 |                 — |              — |          — |                    — |   143 |
| 2023           |        389 |               462 |            240 |          — |                   24 | 1,115 |
| 2024           |         69 |               924 |             80 |          — |                   48 | 1,121 |
| 2025           |        990 |               924 |              — |          5 |                   48 | 1,967 |
| 2026 (ene-mar) |        257 |                 — |              — |          7 |                    — |   264 |

---

## Fundamentación con Evidencia por Persona

A continuación se presenta la justificación detallada de las horas estimadas para cada persona,
referenciada con datos verificables de commits, pagos financieros y entregables.

---

### Steven Vallejo — CEO / CTO / Desarrollador Principal

**Horas estimadas**: 1,782 h · **Commits**: 3,739 · **Método**: Git sesiones ×1.8 · **Confianza**: Alta

**Aliases Git consolidados (11)**: `stevenvo780`, `Stev`, `StevenVo780`, `stev`, `Steven vallejo`,
`stev vallejo`, `Steven Vallejo Ortiz`, `Stevenvo32`, `Steven`, `steven`, `Steven Vallejo`,
`Humanizar Admin`.

#### Distribución de commits por producto y año

| Producto      | 2021 | 2022 | 2023 | 2024 |  2025 | 2026* | TOTAL |
| ------------- | ---: | ---: | ---: | ---: | ----: | ----: | ----: |
| Graf          |    0 |    0 |    0 |    0 | 1,432 |    60 | 1,492 |
| MeraVuelta    |   21 |  188 |  378 |    3 |    24 |     2 |   616 |
| EMW (legacy)  |    0 |    0 |   88 |   90 |   212 |     0 |   390 |
| EducCoop      |    0 |    0 |    0 |    0 |     0 |   261 |   261 |
| Sinergia      |    0 |    0 |   67 |   39 |    92 |    23 |   221 |
| EMW           |    0 |    0 |    0 |    0 |   122 |    80 |   202 |
| Web Corp      |    0 |    0 |   20 |    0 |    33 |    80 |   133 |
| Fiar          |    0 |    0 |    0 |    0 |    64 |    45 |   109 |
| HubCentral    |    0 |    0 |    0 |    0 |    66 |     0 |    66 |
| APIs (Sigo)   |    0 |    0 |    0 |    0 |    59 |     1 |    60 |
| Documentación |    0 |    0 |    0 |    0 |     0 |    58 |    58 |
| CRM Spark     |    0 |    0 |    0 |    0 |    47 |     0 |    47 |
| UltTerminal   |    0 |    0 |    0 |    0 |     0 |    44 |    44 |
| Comercial     |    0 |    0 |    0 |    0 |     0 |    25 |    25 |
| APIs (Softia) |    0 |    0 |    0 |    0 |     8 |     1 |     9 |
| Infra         |    0 |    0 |    0 |    0 |     6 |     0 |     6 |
| **TOTAL**     |   21 |  188 |  553 |  132 | 2,165 |   680 | 3,739 |

_*2026 = ene–mar (parcial)_

#### Observaciones clave

- **2021–2022**: Fase fundacional — desarrollo de MeraVuelta (API + frontend + móvil). Steven + Sebastian.
- **2023**: Año de mayor diversificación — MeraVuelta (378), EMW legacy (88), Sinergia (67), Web Corp (20). Total 553 commits.
- **2024**: Solo 132 commits en 12 meses (6 meses con 0 commits). Período de baja actividad de desarrollo explicado por enfoque en operaciones y gestión comercial.
- **2025**: Explosión de actividad — 2,165 commits. Lanzamiento de Graf (1,432 commits = 66%), Fiar, HubCentral, CRM Spark, y EMW nuevo. Pico en Mar (260 commits graf-admin + 136 graf-backend + 77 graf-client = 473 solo en Graf).
- **2026 (ene–mar)**: 680 commits ya en 3 meses. EducCoop (261), EMW (80), Web Corp (80), Graf (60).

#### Pagos registrados

- Dividendo: $625,215 COP (Mar 2024)
- Bono: $521,760 COP (Abr 2024)
- **Total recibido: $1,146,975 COP** — nunca recibió honorarios mensuales.
- Tarifa implícita: $644 COP/h (vs mercado ~$60,000/h para dev senior en Colombia).

#### Infraestructura pagada de bolsillo

Steven cubrió con su tarjeta personal todos los gastos SaaS de la empresa:
GitHub ($715 USD), ChatGPT ($640 USD), GCP ($443 USD), Claude ($443 USD), Vercel ($261 USD),
GoDaddy, LocalXpose, y dominios Hostinger. **Total: ~$11.3M COP** sin reembolso.

Ver análisis completo en: `cicloOperativo/finanzas/reportes/analisis_equity_contribuciones.md`

#### Justificación del factor ×1.8

El factor cubre trabajo no visible en commits: diseño de arquitectura, debugging sin commits,
deploys e infraestructura, reuniones con clientes, gestión comercial, y documentación.
La industria de software estima que el tiempo "en IDE escribiendo código" es 40–60% del tiempo
total. El factor 1.8 (≈56%) es conservador frente al estándar de ×2.0–2.5.

---

### Isa — Directora de Operaciones / Diseño / UI·UX

**Horas estimadas**: 2,310 h · **Commits**: 0 · **Método**: Estimación · **Confianza**: Media

#### Evidencia financiera (pagos en `pagos_internos.csv`)

| Mes       |     Monto COP | Concepto   |
| --------- | ------------: | ---------- |
| 2023-07   |       161,180 | Honorarios |
| 2023-08   |       363,620 | Honorarios |
| 2023-09   |        84,250 | Honorarios |
| 2023-10   |       249,820 | Honorarios |
| 2023-11   |       322,300 | Honorarios |
| 2023-12   |       441,820 | Honorarios |
| 2024-01   |       225,220 | Honorarios |
| 2024-02   |       481,620 | Honorarios |
| 2024-03   |       208,405 | Dividendo  |
| 2024-04   |       521,760 | Bono       |
| **Total** | **3,059,995** |            |

**Período documentado de pagos**: Jul 2023 – Abr 2024 (10 meses).  
**Período estimado activo**: Jul 2023 – Dic 2025 (30 meses). A partir de May 2024
no se formalizaron más honorarios, pero la actividad operativa continuó según reporte del CEO.

#### ⚠️ Deuda de trabajo: 20 meses sin remuneración

| Período                 | Estado                              |
| ----------------------- | ----------------------------------- |
| Jul 2023 – Feb 2024     | Honorarios pagados ($2,329,830 COP) |
| Mar – Abr 2024          | Dividendo + Bono ($730,165 COP)     |
| **May 2024 – Dic 2025** | **Sin pago — 20 meses activa**      |

Durante los 20 meses sin pago, Isa continuó realizando montajes EMW (12–16/mes),
gestión operativa (25–34 clientes/mes), diseño gráfico y UI/UX.
Esto equivale a **1,540 horas de trabajo no remunerado** (**~$38.5M COP a tarifa de mercado** de $25,000/h para Dir. Ops / Diseño UX/UI).

Ver análisis completo en: `cicloOperativo/finanzas/reportes/analisis_equity_contribuciones.md`

#### Evidencia de entregables: montajes web (EMW)

Los montajes de sitios web (EMW) son el entregable principal que requiere trabajo de diseño,
configuración visual y UI. Se verificó en los repos la frecuencia de commits/deployments
que corresponden a entregas de montajes a clientes:

| Rango        | Montajes EMW/mes | Clientes únicos/mes |
| ------------ | :--------------: | :-----------------: |
| Jul–Dic 2023 |      12–16       |        25–30        |
| Ene–Jun 2024 |      16–20       |        28–34        |
| Jul–Dic 2024 |      12–16       |        26–32        |
| Ene–Dic 2025 |      12–16       |        25–30        |

Cada montaje EMW involucra: diseño/personalización visual, configuración de marca del cliente,
revisión UX, y comunicación con el cliente para aprobación.

#### Funciones documentadas (RRHH)

Según la estructura organizacional de Humanizar Systems:
- Diseño de Experiencia (UX/UI)
- Procesos Operativos
- Gestión Sensorial
- Atención al Cliente
- Diseño gráfico para marca corporativa y clientes

#### Cálculo

30 meses × 22 días laborables × 3.5 h/día promedio = **2,310 h**

El promedio de 3.5 h/día es conservador considerando la carga de 12–20 montajes/mes
más la gestión operativa de 25–34 clientes activos mensuales.

---

### Dani — Soporte TotalPedido

**Horas estimadas**: 320 h · **Commits**: 0 · **Método**: Estimación · **Confianza**: Media

#### Evidencia financiera (pagos en `pagos_internos.csv`)

| Mes       |     Monto COP | Concepto    |
| --------- | ------------: | ----------- |
| 2023-07   |     1,000,000 | TotalPedido |
| 2023-08   |       500,000 | TotalPedido |
| 2023-09   |       500,000 | TotalPedido |
| 2023-10   |       500,000 | TotalPedido |
| 2023-11   |       200,000 | TotalPedido |
| 2023-12   |       200,000 | TotalPedido |
| 2024-01   |       200,000 | TotalPedido |
| 2024-02   |       200,000 | TotalPedido |
| **Total** | **3,300,000** |             |

#### Observaciones

- **Patrón decreciente**: El pago inicia en $1M (julio, mes de arranque con mayor carga)
  y decrece a $200K (últimos 4 meses), lo que refleja la reducción progresiva de clientes
  que requerían soporte dedicado en TotalPedido (PidoRapido).
- **Rol específico**: Soporte operativo a restaurantes que usaban la plataforma TotalPedido,
  incluyendo configuración de menús, atención a incidencias y capacitación.
- **Cálculo**: 8 meses × 40 h/mes (medio tiempo) = **320 h**.
- La tarifa implícita promedio es ~$10,313/h, consistente con soporte operativo en Colombia.

---

### Miguel — Socio / Supervisión

**Horas estimadas**: 120 h · **Commits**: 0 · **Método**: Estimación · **Confianza**: Baja

#### Evidencia financiera

| Mes       |     Monto COP | Concepto  |
| --------- | ------------: | --------- |
| 2024-03   |     3,334,480 | Dividendo |
| 2024-04   |       521,760 | Bono      |
| **Total** | **3,856,240** |           |

#### Rol documentado (RRHH)

- Estrategia de Negocio
- Desarrollo Comercial
- Logística Real

#### Observaciones

- El CEO reporta dedicación de "~0h/mes" en operaciones activas de software.
- Se estima **4 h/mes** como mínimo conservador para: reuniones de junta, revisión
  de reportes financieros, decisiones estratégicas, y supervisión general.
- Los dividendos y bonos reflejan su participación como socio, no remuneración por horas.
- **Cálculo**: 30 meses × 4 h/mes = **120 h**.

---

### Sebastian — Desarrollador (contratista)

**Horas estimadas**: 70 h · **Commits**: 107 · **Método**: Git sesiones ×1.8 · **Confianza**: Alta

#### Evidencia de commits

| Mes       | Repo            | Commits | Producto   |
| --------- | --------------- | ------: | ---------- |
| 2021-10   | MeraVueltaFrond |       2 | MeraVuelta |
| 2021-11   | MeraVueltaFrond |      14 | MeraVuelta |
| 2021-11   | MeraVueltaApi   |       3 | MeraVuelta |
| 2021-12   | MeraVueltaFrond |      24 | MeraVuelta |
| 2021-12   | MeraVueltaApi   |       1 | MeraVuelta |
| 2022-01   | MeraVueltaFrond |      36 | MeraVuelta |
| 2022-01   | MeraVueltaApi   |      27 | MeraVuelta |
| **Total** |                 | **107** |            |

#### Observaciones

- Período activo: **Oct 2021 – Feb 2022** (5 meses).
- Concentración en **Ene 2022** (63 commits = 59% de su total).
- Trabajó exclusivamente en MeraVuelta: frontend (76 commits) y API (31 commits).
- Rol: desarrollo del frontend y API inicial de la plataforma de domicilios.

---

### JP — Desarrollador (contratista)

**Horas estimadas**: 15 h · **Commits**: 26 · **Método**: Git sesiones ×1.8 · **Confianza**: Media

#### Evidencia de commits

| Mes       | Repo         | Commits | Producto |
| --------- | ------------ | ------: | -------- |
| 2025-09   | emw-backend  |       6 | EMW      |
| 2025-10   | emw-backend  |      10 | EMW      |
| 2025-10   | emw-frontend |       5 | EMW      |
| 2025-11   | emw-backend  |       3 | EMW      |
| 2025-11   | emw-frontend |       2 | EMW      |
| **Total** |              |  **26** |          |

#### Observaciones

- Período activo: **Sep – Nov 2025** (3 meses).
- Trabajó exclusivamente en EMW: backend (19) y frontend (7).
- Rol: desarrollo del nuevo sistema EMW (reescritura de la plataforma legacy).

---

### Juan Diego — Desarrollador (contratista)

**Horas estimadas**: 19 h · **Commits**: 29 · **Método**: Git sesiones ×1.8 · **Confianza**: Media

#### Evidencia de commits

| Mes       | Repo            | Commits | Producto |
| --------- | --------------- | ------: | -------- |
| 2025-05   | Fiar/fiar-front |      12 | Fiar     |
| 2025-08   | emw-backend     |       7 | EMW      |
| 2025-08   | emw-frontend    |       6 | EMW      |
| 2025-09   | emw-backend     |       4 | EMW      |
| **Total** |                 |  **29** |          |

**Nota**: Se consolidaron los aliases `juan-pablo-Isa-662`, `Juan Diego M G`, y `Juan Diego`
bajo una misma persona, verificado por cruce de repos y timestamps.

#### Observaciones

- Período activo: **May 2025 y Ago–Sep 2025** (no continuo).
- Dos asignaciones: frontend de Fiar (May) y luego EMW backend+frontend (Ago–Sep).

---

### John — Desarrollador (contratista)

**Horas estimadas**: 10 h · **Commits**: 16 · **Método**: Git sesiones ×1.8 · **Confianza**: Media

#### Evidencia de commits

| Mes       | Repo               | Commits | Producto |
| --------- | ------------------ | ------: | -------- |
| 2023-12   | Sinergia/pos       |       7 | Sinergia |
| 2023-12   | Sinergia/pos-frond |       9 | Sinergia |
| **Total** |                    |  **16** |          |

#### Observaciones

- Período activo: **Diciembre 2023** únicamente (1 mes).
- Trabajó en ambos módulos de Sinergia: backend POS (7) y frontend (9).
- Contribución puntual al sistema de punto de venta.

---

### Vrilli — Desarrollador (contratista)

**Horas estimadas**: 7 h · **Commits**: 14 · **Método**: Git sesiones ×1.8 · **Confianza**: Media

#### Evidencia de commits

| Mes       | Repo         | Commits | Producto |
| --------- | ------------ | ------: | -------- |
| 2025-10   | emw-backend  |       5 | EMW      |
| 2025-10   | emw-frontend |       3 | EMW      |
| 2025-11   | emw-backend  |       4 | EMW      |
| 2025-11   | emw-frontend |       2 | EMW      |
| **Total** |              |  **14** |          |

#### Observaciones

- Período activo: **Oct – Nov 2025** (2 meses).
- Trabajó exclusivamente en EMW: backend (9) y frontend (5).

---

### Yuliana — Desarrollador (contratista)

**Horas estimadas**: 12 h · **Commits**: 9 · **Método**: Git sesiones ×1.8 · **Confianza**: Media

#### Evidencia de commits

| Mes       | Repo                     | Commits | Producto   |
| --------- | ------------------------ | ------: | ---------- |
| 2025-05   | Fiar/fiar-api            |       8 | Fiar       |
| 2025-09   | MeraVuelta/MeraVueltaApi |       1 | MeraVuelta |
| **Total** |                          |   **9** |            |

#### Observaciones

- Período activo: **May y Sep 2025** (no continuo).
- Asignación principal: backend de Fiar (8 commits en mayo).
- Contribución puntual en MeraVuelta API (1 commit, septiembre).

---

### Selena — Desarrollador (contratista)

**Horas estimadas**: 1 h · **Commits**: 6 · **Método**: Git sesiones ×1.8 · **Confianza**: Media

#### Evidencia de commits

| Mes     | Repo          | Commits | Producto | Duración sesión |
| ------- | ------------- | ------: | -------- | --------------- |
| 2025-05 | Fiar/fiar-api |       6 | Fiar     | 3 minutos       |

#### Observaciones

- Período activo: **4 de mayo 2025** (un solo día).
- Todos los commits ocurrieron entre las 15:27 y 15:29 (3 minutos).
- Una sola sesión corta de trabajo, posiblemente push de código preparado previamente.
- Es persona distinta a Yuliana (verificado: ambas comitearon en Fiar/fiar-api en mayo 2025
  pero con emails, timestamps y repos de trabajo diferentes).

---

### Laura — Ventas (comisiones)

**Horas estimadas**: 20 h · **Commits**: 0 · **Método**: Estimación · **Confianza**: Baja

#### Evidencia financiera

| Mes     | Monto COP | Concepto          |
| ------- | --------: | ----------------- |
| 2023-07 |   344,000 | Comisiones_Ventas |

#### Observaciones

- Único pago registrado: **$344,000 COP** en julio 2023.
- Rol de ventas por comisión en la fase inicial del proyecto.
- 20 horas es una estimación conservadora para un rol de ventas puntual.
- Sin actividad posterior documentada.

---

### QA Tester — Testing externo

**Horas estimadas**: 12 h · **Commits**: 0 · **Método**: Pagos · **Confianza**: Alta

#### Evidencia financiera (pagos en `pagos_internos.csv`)

| Mes       |   Monto COP | Concepto |
| --------- | ----------: | -------- |
| 2025-11   |     120,000 | Testing  |
| 2025-12   |     120,000 | Testing  |
| 2026-01   |     120,000 | Testing  |
| 2026-02   |     120,000 | Testing  |
| 2026-03   |     120,000 | Testing  |
| **Total** | **600,000** |          |

#### Cálculo

- Tarifa conocida: **$50,000 COP/hora**.
- $600,000 ÷ $50,000/h = **12 horas**.
- Distribución: ~2.4 h/mes promedio durante 5 meses.
- Testing enfocado en productos Graf y EMW.

---

## Resumen de evidencia cruzada

| Persona    | Evidencia primaria                 | Evidencia secundaria                       | Verificable |
| ---------- | ---------------------------------- | ------------------------------------------ | :---------: |
| Steven     | 3,739 commits en 28 repos (5 años) | Pagos: $1.15M (div+bono)                   |      ✅      |
| Isa        | Pagos: $3.06M (10 registros)       | 12–20 montajes EMW/mes, 25–34 clientes/mes |      ✅      |
| Dani       | Pagos: $3.30M (8 registros)        | Patrón decreciente ↔ carga operativa       |      ✅      |
| Miguel     | Pagos: $3.86M (div+bono)           | Rol RRHH documentado                       |      ⚠️      |
| Sebastian  | 107 commits (5 meses)              | —                                          |      ✅      |
| JP         | 26 commits (3 meses)               | —                                          |      ✅      |
| Juan Diego | 29 commits (3 meses no continuos)  | —                                          |      ✅      |
| John       | 16 commits (1 mes)                 | —                                          |      ✅      |
| Vrilli     | 14 commits (2 meses)               | —                                          |      ✅      |
| Yuliana    | 9 commits (2 meses)                | —                                          |      ✅      |
| Selena     | 6 commits (1 día)                  | —                                          |      ✅      |
| Laura      | Pago: $344K (1 registro)           | —                                          |      ⚠️      |
| QA Tester  | Pagos: $600K (5 registros)         | Tarifa $50K/h conocida                     |      ✅      |

_✅ = evidencia objetiva verificable · ⚠️ = evidencia parcial, horas estimadas_

---

## Limitaciones y notas

1. **Las horas de Isa y Miguel son estimaciones** — no existen registros de tiempo objetivos. Los valores son conservadores, respaldados por pagos financieros y carga operativa documentada.
2. **Commits no capturan todo el trabajo de Steven** — El factor ×1.8 es conservador comparado con el estándar de la industria (×2.0–2.5). El año 2024 (132 commits, 6 meses a cero) refleja un período de mayor enfoque en gestión comercial y operaciones no reflejadas en código.
3. **Los contratistas pudieron haber trabajado más** de lo que muestran los commits, especialmente si hacían squash de commits o trabajaban localmente antes de pushear.
4. **No se incluyen**: horas de contabilidad externa y asesoría legal.
5. **2021–2022** fueron trabajo principalmente de Steven y Sebastian en los productos iniciales (MeraVuelta).
6. **2025 muestra un pico** de desarrollo (990h dev) correspondiente al lanzamiento de Graf (1,492 commits solo de Steven), Fiar, y la reorganización técnica.
7. **Todos los datos de commits** provienen de `git log` ejecutado sobre 28 repositorios locales el mismo día de generación de este reporte.
8. **Todos los datos financieros** provienen de `pagos_internos.csv` (32 registros) y son consistentes con la síntesis financiera general de la empresa.

---

## Archivos generados

| Archivo                     | Descripción                                                  |
| --------------------------- | ------------------------------------------------------------ |
| `resumen_horas_por_rol.csv` | Una fila por persona: rol, horas, commits, método, confianza |
| `desglose_mensual.csv`      | Desglose mes a mes por persona                               |
| `METODOLOGIA.md`            | Este documento                                               |

## Documentos relacionados

| Documento                           | Ubicación                                                            |
| ----------------------------------- | -------------------------------------------------------------------- |
| Análisis de Equity y Contribuciones | `cicloOperativo/finanzas/reportes/analisis_equity_contribuciones.md` |
| Síntesis Financiera                 | `cicloOperativo/finanzas/reportes/sintesis_financiera.md`            |
| Pagos internos                      | `cicloOperativo/finanzas/salidas/pagos_internos.csv`                 |
