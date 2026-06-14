# Análisis de Contribuciones vs Distribución Accionaria — Humanizar Systems

**Fecha de generación**: Marzo 2026  
**Período analizado**: Octubre 2021 – Marzo 2026  
**Propósito**: Documentar los desequilibrios entre el acuerdo accionario inicial y las contribuciones
reales (trabajo, capital, infraestructura) de los tres socios fundadores.

---

## 1. Acuerdo Accionario Inicial

| Socio  | Participación | Rol inicial                    |
| ------ | :-----------: | ------------------------------ |
| Miguel |      80%      | CEO / Inversión / Estrategia   |
| Steven |      15%      | CTO / Desarrollo / Operaciones |
| Isa    |      5%       | Operaciones / Diseño / UX·UI   |

---

## 2. Resumen de Contribuciones Reales

### 2.1 Horas de trabajo invertidas

_Fuente: `cicloOperativo/horas_invertidas/METODOLOGIA.md` (ver fundamentación detallada por persona)_

| Socio     | Horas estimadas |   Commits | % del total de horas (socios) | Participación accionaria |
| --------- | --------------: | --------: | ----------------------------: | :----------------------: |
| Isa       |           2,310 |         — |                         54.8% |            5%            |
| Steven    |           1,782 |     3,739 |                         42.3% |           15%            |
| Miguel    |             120 |         — |                          2.8% |           80%            |
| **Total** |       **4,212** | **3,739** |                      **100%** |         **100%**         |

> **Observación**: Existe una inversión entre contribución en horas y participación accionaria.
> Isa, con 5% de participación, aportó el 54.8% de las horas de los socios.
> Steven, con 15%, aportó el 42.3%. Miguel, con 80%, aportó el 2.8%.

### 2.2 Retribución económica recibida por cada socio

_Fuente: `cicloOperativo/finanzas/salidas/pagos_internos.csv`_

| Socio  | Honorarios COP | Dividendo COP | Bono COP | Total recibido COP | Tarifa pagada ($/h) |
| ------ | -------------: | ------------: | -------: | -----------------: | ------------------: |
| Miguel |              — |     3,334,480 |  521,760 |          3,856,240 |              32,135 |
| Isa    |      2,329,830 |       208,405 |  521,760 |          3,059,995 |               1,325 |
| Steven |              — |       625,215 |  521,760 |          1,146,975 |                 644 |

> **Nota Q1-2026**: La tabla anterior refleja únicamente lo registrado en `pagos_internos.csv`.
> La conciliación CSV vs WhatsApp (`CONCILIACION-CSV-VS-WHATSAPP.md`) identificó **$3,815,000 COP**
> adicionales en transferencias operativas de Miguel a Steven (comprobantes Bancolombia) que no están
> en CSV. Si se incluyen, el total recibido por Steven sería ~$4,961,975 COP ($2,785/h).
> Estos fondos no fueron todos para Steven: parte se redistribuyó a Isa, Dani y servicios.

> **Observación**: La columna "tarifa pagada" refleja lo que efectivamente se les pagó por hora
> (total recibido ÷ horas trabajadas), NO el valor de mercado de su trabajo.
> Steven recibió $644/h — unas **78× menos** que la tarifa de mercado para su rol ($50,000/h).
> Isa recibió $1,325/h — unas **19× menos** que su tarifa de mercado ($25,000/h).

### 2.3 Tarifas de referencia de mercado (Colombia 2024–2025)

| Rol                                  | Rango mercado COP/h | Tarifa adoptada | Fuente / Justificación                                 |
| ------------------------------------ | ------------------: | --------------: | ------------------------------------------------------ |
| CTO / Dev Senior Full-Stack (5+ exp) |     $37,500–$75,000 |     **$50,000** | Salario $6M–$12M/mes ÷ 160h. Freelance hasta $100K/h   |
| Dir. Operaciones / Diseño UX/UI      |     $22,000–$44,000 |     **$25,000** | Salario $3.5M–$7M/mes ÷ 160h. Rol combinado ops+diseño |
| Supervisión / Asesoría estratégica   |    $50,000–$150,000 |     **$30,000** | Conservador para supervisión pasiva (~4h/mes)          |

> Las tarifas adoptadas son **conservadoras** (rango bajo–medio del mercado colombiano).
> Se usan estas tarifas para valorar la deuda de trabajo, no las tarifas pagadas.

---

## 3. Deuda de Trabajo No Remunerado

### 3.1 Isa — Trabajo sin pago desde Mayo 2024

#### Timeline de pagos

| Período                 | Tipo       | Total COP | Estado     |
| ----------------------- | ---------- | --------: | ---------- |
| Jul 2023 – Feb 2024     | Honorarios | 2,329,830 | ✅ Pagado   |
| Mar 2024                | Dividendo  |   208,405 | ✅ Pagado   |
| Abr 2024                | Bono       |   521,760 | ✅ Pagado   |
| **May 2024 – Dic 2025** | **—**      |     **0** | ❌ Sin pago |

#### Trabajo realizado sin remuneración

**Período sin pago**: Mayo 2024 – Diciembre 2025 = **20 meses**

Durante este período, Isa continuó realizando:
- **Montajes de sitios web (EMW)**: 12–16 montajes/mes (verificado en repos de EMW, ver METODOLOGIA.md)
- **Gestión operativa**: 25–34 clientes activos/mes requiriendo soporte
- **Diseño gráfico**: Imagen de marca corporativa y de clientes
- **UI/UX**: Diseño de interfaces para productos (Graf, EMW, Fiar)
- **Atención al cliente**: Comunicación directa con clientes de todos los productos

#### Cálculo de deuda de trabajo

| Concepto                                     |               Valor |
| -------------------------------------------- | ------------------: |
| Tarifa de mercado (Dir. Ops / Diseño UX)     |       $25,000 COP/h |
| Horas/mes estimadas (3.5h/día × 22 días)     |            77 h/mes |
| Meses sin pago                               |                  20 |
| Horas trabajadas sin remuneración            |         **1,540 h** |
| Valor a tarifa de mercado                    |     $38,500,000 COP |
| Retribución recibida (período anterior)      |     -$3,059,995 COP |
| **Deuda neta de trabajo (toda la relación)** | **$54,690,005 COP** |

> **Nota sobre tarifa pagada vs mercado**: Lo que Isa recibió como honorarios ($2,329,830 en
> 8 meses) equivale a $3,782/h — un **6.6%** de la tarifa de mercado para su rol.
> La deuda neta considera el total de 2,310 horas a $25,000/h menos todo lo recibido.

---

### 3.2 Steven — Trabajo técnico e infraestructura asumida

#### Deuda de trabajo técnico

| Concepto                          |               Valor |
| --------------------------------- | ------------------: |
| Horas trabajadas                  |             1,782 h |
| Tarifa de mercado (CTO / Dev Sr.) |       $50,000 COP/h |
| Valor a tarifa de mercado         |     $89,100,000 COP |
| Retribución total recibida        |     -$1,146,975 COP |
| **Deuda neta de trabajo**         | **$87,953,025 COP** |

> **Nota sobre tarifa pagada vs mercado**: Lo que Steven recibió ($1,146,975 total)
> equivale a $644/h — un **1.3%** de la tarifa de mercado para su rol ($50,000/h).
> La tarifa de $50,000/h es conservadora; rangos reales para CTO full-stack: $37,500–$100,000/h.

#### Gastos de infraestructura pagados por Steven

Todos los gastos de herramientas SaaS, servicios cloud, hosting y dominios fueron cubiertos
por Steven con su tarjeta personal. **Ningún otro socio pagó gastos de infraestructura.**

_Fuente: `cicloOperativo/finanzas/salidas/gastos_consolidado.csv`_

**Gastos pre-ingresos (Oct 2021 – Jun 2023) — absorbidos antes de que existieran ingresos:**

Durante ~21 meses antes del primer ingreso (Jul 2023), Steven cubrió de su bolsillo:

| Fecha      | Proveedor | Concepto               |                      Monto |
| ---------- | --------- | ---------------------- | -------------------------: |
| 2021-10-07 | Hostinger | Plan 2 Servidor VPS    |                $72,858 COP |
| 2023-01-24 | GitHub    | Copilot (Ene 2023)     |                    $10 USD |
| 2023-02-06 | Hostinger | Dominio meravuelta.com |                $44,767 COP |
| 2023-02–05 | GitHub    | Copilot (Feb–May 2023) |                    $40 USD |
| 2023-06-16 | Hostinger | Cloud Domain           |                 $5,767 COP |
| **Total**  |           |                        | **$123,392 COP + $50 USD** |

> Estos gastos fueron la inversión semilla real de la empresa. Steven los asumió sin reembolso.

**Herramientas SaaS pagadas en USD (tarjeta personal de Steven) — todo el período:**

| Proveedor     |     Total USD | Total COP (@3900) | Período             |
| ------------- | ------------: | ----------------: | ------------------- |
| GitHub        |       $715.91 |        $2,792,049 | Ene 2023 – Mar 2026 |
| ChatGPT       |       $640.00 |        $2,496,000 | Jul 2023 – Mar 2026 |
| GCP           |       $442.87 |        $1,727,193 | Jul 2025 – Mar 2026 |
| Claude        |       $442.87 |        $1,727,193 | Jul 2025 – Mar 2026 |
| Vercel        |       $260.52 |        $1,016,028 | Mar 2025 – Mar 2026 |
| GoDaddy       |        $47.99 |          $187,161 | Feb 2025            |
| LocalXpose    |        $42.00 |          $163,800 | Mar 2025 – Mar 2026 |
| **Total USD** | **$2,592.16** |   **$10,109,424** |                     |

**Hosting y dominios pagados en COP:**

| Proveedor     |      Total COP | Concepto             |
| ------------- | -------------: | -------------------- |
| Hostinger     |     $1,004,402 | VPS, dominios, cloud |
| GoDaddy       |       $229,998 | Dominios .CO         |
| **Total COP** | **$1,234,400** |                      |

**Total infraestructura pagada por Steven: ~$11,343,824 COP**

> Estos gastos salieron de la cuenta personal de Steven y no fueron reembolsados por la empresa.
> Son herramientas directamente necesarias para la operación: hosting, CI/CD, IA para desarrollo,
> dominios, y servicios cloud.

#### Gastos operativos de la empresa (Stack + Legacy)

Adicionalmente, la operación de la empresa genera gastos fijos mensuales que Steven gestiona:

| Categoría           | Total COP (acumulado) | Período             |
| ------------------- | --------------------: | ------------------- |
| Stack SaaS (tools)  |           $16,925,200 | Jul 2023 – Feb 2026 |
| Legacy TotalPedido  |           $70,550,000 | Jul 2023 – Feb 2026 |
| **Total operativo** |       **$87,475,200** |                     |

> El Stack SaaS es el costo de las herramientas; Legacy TotalPedido es la infraestructura
> y mantenimiento de la plataforma heredada que genera los ingresos principales.

---

### 3.3 Miguel — Inversiones, cobros y retribución

#### Retribución recibida

| Concepto           |     Monto COP | Fecha    | Base de cálculo         |
| ------------------ | ------------: | -------- | ----------------------- |
| Dividendo (80%)    |     3,334,480 | Mar 2024 | 80% de $4,168,100       |
| Bono               |       521,760 | Abr 2024 | Igual para los 3 socios |
| **Total recibido** | **3,856,240** |          |                         |

> Miguel recibió el **80%** del dividendo total ($4,168,100) distribuido en marzo 2024,
> proporcional a su participación original del 80%. Los otros socios recibieron solo 15% y 5%.

> **Nota Q1-2026**: Adicionalmente, Miguel manejó $37,692,700 COP en ingresos de clientes
> cobrados a través de su cuenta personal (02919098298) durante Jul 2023 – Oct 2025.
> De esos ingresos, las salidas documentadas (pagos al equipo, gastos, dividendos) suman
> ~$13.4M registrados + ~$3.8M informales. El resto requiere extracto bancario para conciliar.
> Ver `CONCILIACION-CSV-VS-WHATSAPP.md`.

#### Cobros de clientes en cuenta personal de Miguel

En julio 2023, **16 pagos de clientes** fueron recibidos en la cuenta bancaria personal de Miguel.
Estos cobros corresponden a ingresos de la empresa, no a inversión personal:

| Cliente            | Producto        |      Monto COP | Nota en contabilidad |
| ------------------ | --------------- | -------------: | -------------------- |
| El Palito Inglés   | TotalPedido     |        $75,000 | cuenta miguel        |
| Le Palito          | TotalPedido     |        $75,000 | cuenta miguel        |
| FincaDirecta       | TotalPedido     |        $78,000 | cuenta miguel        |
| FincaDirecta B2B   | TotalPedido     |        $78,000 | cuenta miguel        |
| MCA                | TotalPedido+EMW |       $150,000 | Cuenta Miguel        |
| OchoBizcocho       | TotalPedido+EMW |       $150,000 | Cuenta Miguel        |
| Olivenza           | TotalPedido     |        $78,000 | Cuenta Miguel        |
| Peach              | TotalPedido     |        $78,000 | cuenta Miguel        |
| Punto Naranja      | TotalPedido+EMW |       $121,500 | cuenta miguel        |
| Cencogan           | EMW             |        $38,600 | Cuenta Miguel        |
| Freedog AyC        | EMW             |        $70,000 | Cuenta Miguel        |
| TICLAM             | EMW             |        $80,000 | Cuenta Miguel        |
| L Pineda           | EMW             |        $90,000 | Cuenta Miguel        |
| Repares            | EMW             |        $90,000 | Cuenta Miguel        |
| Villemont Caucania | EMW             |        $80,000 | Cuenta Miguel        |
| Gaia               | EMW             |        $90,000 | Cuenta Miguel        |
| **Total cobrado**  |                 | **$1,422,100** |                      |

> **Aclaración importante**: Estos $1.4M son **ingresos de la empresa** que pasaron por la cuenta
> de Miguel como canal de cobro. No constituyen una inversión de capital propia.

#### Análisis de inversiones de capital

Se realizó una búsqueda exhaustiva en toda la documentación financiera y legal para identificar
aportes de capital realizados por Miguel:

| Fuente verificada                                           | ¿Registro de inversión?  |
| ----------------------------------------------------------- | :----------------------: |
| `cicloOperativo/finanzas/entradas/ingresos_consolidado.csv` |           ❌ No           |
| `cicloOperativo/finanzas/salidas/pagos_internos.csv`        |           ❌ No           |
| `cicloOperativo/finanzas/salidas/gastos_consolidado.csv`    |           ❌ No           |
| `Consolidado_Contable_2023_2025.csv` (fuente original)      |           ❌ No           |
| `ACUERDO-DE-SOCIOS.md` (§4 Aportes)                         |      Solo gestión¹       |
| `CONTRATO-SOCIO-MIGUEL-ARCILLA.md` (§5 Aportes)             |      Solo gestión²       |
| `MANIFIESTO-FUNDACIONAL.md`                                 | "Sin Inversión Externa"³ |

¹ _"Aporte de gestión: obligatorio para cada socio según su rol. Aportes económicos adicionales: solo por acuerdo unánime y por escrito."_  
² _"Aportes iniciales: gestión directiva, relación comercial estratégica, dirección general y validación de decisiones críticas."_  
³ _"Sin Inversión Externa: Nuestra libertad creativa nace de nuestra independencia financiera."_

> **Resultado**: No se encontró evidencia documental de inversión de capital por parte de Miguel.
> Si existieron aportes económicos, no fueron registrados en la contabilidad de la empresa
> ni en los acuerdos societarios. Los documentos legales especifican que su aporte es de **gestión**,
> no económico.

#### Contribución documentada

| Tipo de contribución      | Detalle                                              |                 Valor |
| ------------------------- | ---------------------------------------------------- | --------------------: |
| Horas de supervisión      | 120h (estimación conservadora, ~4h/mes × 30 meses)   | $3,600,000 (a $30K/h) |
| Gestión comercial         | Relación con clientes iniciales (FincaDirecta, etc.) |     Incluido en horas |
| Canal de cobro (Jul 2023) | Recibió pagos de clientes en su cuenta ($1.4M)       |     $0 (no es aporte) |
| Inversión de capital      | Sin registro documental                              |                **$0** |

#### Balance neto de Miguel

| Concepto                   |     Monto COP |
| -------------------------- | ------------: |
| Valor de trabajo (mercado) |   +$3,600,000 |
| Inversión documentada      |            $0 |
| Retribución recibida       |   -$3,856,240 |
| **Balance neto**           | **+$256,240** |

> Miguel recibió **$256,240 más** de lo que aportó a tarifa de mercado.
> Es el único socio con balance positivo. Los otros dos socios tienen deudas
> netas de **$99.3M** (Steven) y **$54.7M** (Isa) respectivamente.

#### Nota sobre la distribución del dividendo de Marzo 2024

El dividendo se distribuyó al **80/15/5**, entregando a Miguel $3.3M de los $4.2M distribuidos.
Si se hubiese distribuido al **33.33/33.33/33.33** (acuerdo actual), cada socio habría recibido:

| Socio  | Al 80/15/5 (real) | Al 33.33% (equitativo) |  Diferencia |
| ------ | ----------------: | ---------------------: | ----------: |
| Miguel |        $3,334,480 |             $1,389,367 | +$1,945,113 |
| Steven |          $625,215 |             $1,389,367 |   -$764,152 |
| Isa    |          $208,405 |             $1,389,367 | -$1,180,962 |

---

## 4. Análisis Comparativo: Contribución vs Participación

### 4.1 Matriz de contribución

| Dimensión                            |      Steven |         Isa |     Miguel |
| ------------------------------------ | ----------: | ----------: | ---------: |
| **Participación accionaria**         |         15% |          5% |        80% |
| **Horas de trabajo**                 |     1,782 h |     2,310 h |      120 h |
| **% horas (socios)**                 |       42.3% |       54.8% |       2.8% |
| **Retribución total recibida**       |  $1,146,975 |  $3,059,995 | $3,856,240 |
| **Tarifa pagada (real)**             |      $644/h |    $1,325/h |  $32,135/h |
| **Tarifa de mercado**                |   $50,000/h |   $25,000/h |  $30,000/h |
| **Commits (código verificable)**     |       3,739 |           — |          — |
| **Deuda neta de trabajo**            | $87,953,025 | $54,690,005 |          — |
| **Infra pagada de bolsillo**         | $11,343,824 |           — |          — |
| **Inversión de capital documentada** |           — |           — |        $0¹ |
| **Meses sin pago trabajando**        |   53 meses* |    20 meses |          — |

_¹ No se encontró registro de inversión de capital de Miguel en ningún CSV, contable ni acuerdo legal._

_*Steven nunca recibió honorarios mensuales; solo dividendo y bono en Mar-Abr 2024._

### 4.2 Índice de desbalance

Para cuantificar el desequilibrio, calculamos la relación entre contribución en horas
y participación accionaria:

| Socio  | Ratio (% horas ÷ % accionario) | Interpretación                          |
| ------ | :----------------------------: | --------------------------------------- |
| Isa    |             10.96×             | Aporta ~11× más trabajo que su equity   |
| Steven |             2.82×              | Aporta ~3× más trabajo que su equity    |
| Miguel |             0.04×              | Aporta ~25× menos trabajo que su equity |

> Un ratio de 1.0× significaría equilibrio perfecto. Ratios >1× indican que la persona
> contribuye más de lo que su participación refleja.

### 4.3 Valor total aportado por socio (estimación)

| Socio  | Valor trabajo (tarifa mercado) | Infra pagada | Inversión capital | Retribución recibida |     Balance neto |
| ------ | -----------------------------: | -----------: | ----------------: | -------------------: | ---------------: |
| Steven |      $89,100,000 (1,782h×$50K) |  $11,343,824 |                 — |           $1,146,975 | **-$99,296,849** |
| Isa    |      $57,750,000 (2,310h×$25K) |            — |                 — |           $3,059,995 | **-$54,690,005** |
| Miguel |         $3,600,000 (120h×$30K) |            — |            **$0** |           $3,856,240 |    **+$256,240** |

_Tarifas de mercado adoptadas (conservadoras): CTO/Dev Sr. $50K/h, Dir. Ops/Diseño UX $25K/h, Supervisión $30K/h._
_Ver justificación de tarifas en sección 2.3._

> **Steven** tiene el mayor desbalance negativo: aportó ~$100M en valor de trabajo + infraestructura
> (incluyendo la inversión semilla pre-ingresos de Oct 2021 – Jun 2023) y recibió ~$1.1M.  
> **Isa** tiene un desbalance de ~$54.7M (trabajo no remunerado durante 20 meses).  
> **Miguel** es el único socio con balance positivo. No se encontró evidencia documental de
> inversión de capital. Su aporte contractual es de gestión, no económico (ver sección 3.3).

---

## 5. Conclusiones

1. **Deuda de trabajo de Isa**: 20 meses (May 2024 – Dic 2025) de trabajo continuo sin remuneración,
   equivalentes a 1,540 horas. A tarifa de mercado ($25,000/h para Dir. Ops / Diseño UX),
   la deuda neta acumulada (incluyendo período con pago subvalorado) es de **~$54.7M COP**.
   Esta deuda debe reconocerse formalmente.

2. **Deuda de trabajo de Steven**: 53 meses de trabajo como CTO/desarrollador principal.
   Recibió $1.1M total ($644/h pagada vs $50,000/h mercado — solo el 1.3% de su valor).
   Deuda neta: **~$88M COP**. Además, asumió **~$11.3M COP** en gastos de infraestructura
   de su bolsillo. Deuda total: **~$99.3M COP**.

3. **Distribución accionaria actual (80/15/5) no refleja las contribuciones reales**:
   - El 97.1% de las horas de trabajo de los socios lo aportaron Steven (42.3%) e Isa (54.8%)
   - Miguel aportó el 2.8% de las horas pero posee el 80% de la empresa
   - El desequilibrio es estructural y se ha profundizado con el tiempo

4. **Deuda combinada Steven + Isa**: ~**$154M COP** a tarifas conservadoras de mercado.

5. **Inversiones de Miguel — sin evidencia documental**: Se verificaron todos los registros
   contables (ingresos, gastos, pagos internos, consolidado original) y documentos legales
   (acuerdo de socios, contrato individual, manifiesto fundacional). **No existe registro
   de inversión de capital por parte de Miguel**. Los cobros de clientes en su cuenta personal
   ($1.4M en Jul 2023) son ingresos de la empresa, no aportes propios. Su contrato especifica
   que su aporte es de **gestión**, no económico.

6. **Distribución del dividendo Mar 2024**: Se distribuyó al 80/15/5, entregando a Miguel
   $3.3M de los $4.2M totales. Si se hubiera aplicado la distribución actual (33.33%),
   Miguel habría recibido $1.4M en lugar de $3.3M — una diferencia de $1.9M.

7. **Infraestructura pagada por Steven desde antes del primer ingreso**: Desde Oct 2021
   (21 meses antes de que la empresa generara su primer ingreso en Jul 2023), Steven financió
   de su bolsillo servidores, dominios y herramientas de desarrollo. La inversión semilla real
   y documentada de la empresa fue aportada por Steven, no por Miguel.

---

## 6. Rastreo de Flujo de Dinero (WhatsApp)

_Fuente completa: `cicloOperativo/finanzas/reportes/rastreo_transferencias_whatsapp.md`_

Se realizó un rastreo forense de todas las transferencias de dinero entre Miguel y Steven
usando el historial de WhatsApp (11,094 líneas, Abr 2023 – Mar 2026). Hallazgos principales:

### 6.1 Cuentas bancarias

| Titular         | Cuenta Bancolombia | Uso                                                     |
| --------------- | -----------------: | ------------------------------------------------------- |
| Miguel personal |        02919098298 | Recibió **todos** los pagos de clientes hasta ~Oct 2025 |
| Steven personal |        55100027771 | Recibió transferencias de Miguel                        |
| Humanizar S.A.  |        02900000629 | Primera aparición en chat: **Nov 2025**                 |

> La empresa tiene cuenta bancaria propia (NIT 901394814-7), pero no se utilizó durante
> los primeros **~2.5 años de operación**. Todo pasó por la cuenta personal de Miguel.

### 6.2 Transferencias confirmadas (15 eventos)

Se identificaron **15 transferencias** de Miguel a Steven, por un total confirmado de **~$5.5M COP**:

| Tipo                       |      Monto COP | En CSV |
| -------------------------- | -------------: | :----: |
| Dividendos + Bono (formal) |     $1,146,975 |   ✅    |
| Fondos operativos (ad-hoc) |     $4,215,000 |   ❌    |
| Préstamo personal          |       $100,000 |   ❌    |
| **Total confirmado**       | **$5,461,975** |        |

> Solo **$1,146,975** (21%) de las transferencias están registrados en `pagos_internos.csv`.
> El **79% restante** fueron transferencias informales documentadas solo en WhatsApp.

### 6.3 Brecha financiera estimada

| Concepto                                |        Monto COP |
| --------------------------------------- | ---------------: |
| Ingresos pagados que pasaron por Miguel |     ~$37,700,000 |
| Salidas documentadas desde Miguel       |     ~$17,200,000 |
| **Brecha sin documentar**               | **~$20,500,000** |

> **Nota Q1-2026**: La brecha anterior se recalculó incluyendo los $3.8M de transferencias
> informales confirmadas por comprobante. La brecha de ~$20.5M (no $28M como se estimó inicialmente)
> aún requiere el **extracto bancario** de la cuenta 02919098298 de Miguel
> (Jul 2023 – Oct 2025) para determinar si corresponde a gastos no registrados,
> ingresos nunca cobrados (el 39% "Sin confirmar" = $41M), o fugas reales.
> Ver conciliación completa: `CONCILIACION-CSV-VS-WHATSAPP.md`.

---

## 7. Anexos y Referencias

| Documento                  | Ubicación                                                                 | Contenido                             |
| -------------------------- | ------------------------------------------------------------------------- | ------------------------------------- |
| Fundamentación de horas    | `cicloOperativo/horas_invertidas/METODOLOGIA.md`                          | Evidencia detallada por persona       |
| Resumen de horas           | `cicloOperativo/horas_invertidas/resumen_horas_por_rol.csv`               | CSV con totales                       |
| Pagos internos             | `cicloOperativo/finanzas/salidas/pagos_internos.csv`                      | 32 registros de pagos                 |
| Gastos consolidados        | `cicloOperativo/finanzas/salidas/gastos_consolidado.csv`                  | 194 facturas de proveedores           |
| Gastos operativos          | `cicloOperativo/finanzas/salidas/gastos_operativos.csv`                   | Stack SaaS + Legacy mensual           |
| Síntesis financiera        | `cicloOperativo/finanzas/reportes/sintesis_financiera.md`                 | Resumen general                       |
| **Rastreo transferencias** | **`cicloOperativo/finanzas/reportes/rastreo_transferencias_whatsapp.md`** | **15 transferencias, análisis fugas** |
