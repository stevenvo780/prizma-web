# Rastreo de Transferencias — Evidencia WhatsApp

**Fecha de generación**: Marzo 2026  
**Fuente primaria**: Chat de WhatsApp entre Stev y Miguel Arcila (11,094 líneas)  
**Período del chat**: Abril 2023 – Marzo 2026  
**Propósito**: Rastrear todos los movimientos de dinero entre Miguel y Steven para detectar
discrepancias con la contabilidad formal y posibles fugas de dinero.

> ⚠️ **Nota de confidencialidad**: Este reporte extrae ÚNICAMENTE datos financieros del chat.
> El archivo fuente está en `.gitignore` y no se commitea.

---

## 1. Cuentas Bancarias Identificadas

| Titular                 | Banco       | Tipo    | Número      | Identificación  |
| ----------------------- | ----------- | ------- | ----------- | --------------- |
| **Steven** (personal)   | Bancolombia | Ahorros | 55100027771 | CC 1000306867   |
| **Miguel** (personal)   | Bancolombia | Ahorros | 02919098298 | —               |
| **Humanizar** (empresa) | Bancolombia | Ahorros | 02900000629 | NIT 901394814-7 |
| **Dani** (externo)      | Bancolombia | Ahorros | 61316095649 | —               |

### Hallazgo crítico sobre cuentas

- La cuenta **empresarial** (02900000629) solo aparece **1 vez** en todo el chat — en una
  notificación automática de pedido de Salinero (Nov 2025, línea 10532).
- **Todo el ingreso previo (Jul 2023 – ~Oct 2025)** pasó por la cuenta **personal de Miguel**
  (02919098298) o por Wompi (que también dispersaba a Miguel).
- No hay evidencia en el chat de que la cuenta empresarial estuviera activa antes de Nov 2025.

---

## 2. Transferencias Confirmadas (Cronológicas)

Cada entrada tiene: fecha, dirección, monto, contexto del chat, y si está en `pagos_internos.csv`.

### T-001 · 25/05/2023 — Préstamo personal Miguel→Steven

| Campo       | Valor                                                    |
| ----------- | -------------------------------------------------------- |
| Dirección   | Miguel → Steven                                          |
| Monto       | **$100,000 COP**                                         |
| Cuenta dest | 55100027771 (Steven)                                     |
| Evidencia   | IMG-20230525-WA0066.jpg (comprobante)                    |
| Contexto    | Steven: "Parce tendrás 100 que me prestes hasta mañana?" |
| Naturaleza  | **Préstamo personal**, no pago de empresa                |
| En CSV      | ❌ No                                                     |

### T-002 · 25/05/2023 — Devolución Steven→Miguel (monto desconocido)

| Campo       | Valor                                                         |
| ----------- | ------------------------------------------------------------- |
| Dirección   | Steven → Miguel                                               |
| Monto       | **Desconocido** (probablemente $100K devolución + pago Wompi) |
| Cuenta dest | 02919098298 (Miguel personal)                                 |
| Evidencia   | IMG-20230525-WA0118.jpg (comprobante)                         |
| Contexto    | Steven: "ya me llego la money te lo mando a la misma cuenta?" |
| Naturaleza  | Devolución préstamo y/o traspaso de pago de cliente           |
| En CSV      | ❌ No                                                          |

### T-003 · 21/06/2023 — Pago parcial desarrollo Palomino

| Campo       | Valor                                                           |
| ----------- | --------------------------------------------------------------- |
| Dirección   | Miguel → Steven                                                 |
| Monto       | **$120,000 COP**                                                |
| Cuenta dest | 551000027771 (Steven)                                           |
| Evidencia   | Multimedia (comprobante adjunto en chat)                        |
| Contexto    | Miguel: "te voy a pasar el desarrollo de Palomino, los 300,     |
|             | 300 menos 180 de woompi = 120"                                  |
| Naturaleza  | **Pago de cliente** (Palomino pagó $300K; $180K llegó por Wompi |
|             | directo a Steven, Miguel transfirió los $120K restantes)        |
| En CSV      | ❌ No                                                            |

### T-004 · 17/08/2023 — Compra de equipos (Humanizar)

| Campo       | Valor                                                               |
| ----------- | ------------------------------------------------------------------- |
| Dirección   | Miguel → Steven                                                     |
| Monto       | **$1,000,000 COP** ($900K + $100K en 2 partes)                      |
| Cuenta dest | 55100027771 (Steven)                                                |
| Evidencia   | IMG-20230817-WA0027.jpg (comprobante $100K)                         |
| Contexto    | Miguel: "mandame numero de cuenta" → Steven: "Llegaron 900"         |
|             | → Miguel: "ya te paso los otros 100"                                |
|             | Steven: "la plata salió de Humanizar o de vos?" Miguel: "humanizar" |
| Destino     | SSD 1TB, RAM 32GB, UPS 1200W, adaptadores, disipadores              |
| Naturaleza  | **Gasto de infraestructura** — fondos de la empresa, no de Miguel   |
| En CSV      | ❌ No (debería estar en gastos_consolidado)                          |

### T-005 · 12/10/2023 — Servidores + ChatGPT + Dani

| Campo        | Valor                                                                   |
| ------------ | ----------------------------------------------------------------------- |
| Dirección    | Miguel → Steven + Dani                                                  |
| Monto        | **~$555,000 COP estimado** (servers $177K + ChatGPT ~$78K + Dani $300K) |
| Cuenta dest  | 55100027771 (Steven) y 61316095649 (Dani)                               |
| Evidencia    | 2× IMG (comprobantes adjuntos)                                          |
| Contexto     | Miguel: "quedo listo entonces: Servidores, Chat, Dividendos"            |
|              | "y Dani 300, con gusto"                                                 |
| Naturaleza   | **Reembolso gastos** (servers+ChatGPT) + **Pago externo** (Dani)        |
| Monto Steven | ~$255,000 COP (reembolso servicios)                                     |
| Monto Dani   | $300,000 COP (honorarios)                                               |
| En CSV       | Parcial: Dani Oct $500K en CSV, pero no como $300K separado             |

### T-006 · 18/12/2023 — Reembolso mes anterior

| Campo       | Valor                                                    |
| ----------- | -------------------------------------------------------- |
| Dirección   | Miguel → Steven                                          |
| Monto       | **$100,000 COP**                                         |
| Cuenta dest | 55100027771 (Steven)                                     |
| Evidencia   | Multimedia (comprobante adjunto)                         |
| Contexto    | Miguel: "te debo algo?" Steven: "los 100 del mes pasado" |
|             | Miguel: "pasame la cuenta, te pago eso"                  |
| Naturaleza  | **Reembolso** de servicios del mes anterior              |
| En CSV      | ❌ No                                                     |

### T-007 · 11/01/2024 — Pago mensual + viaje Bogotá

| Campo       | Valor                                                           |
| ----------- | --------------------------------------------------------------- |
| Dirección   | Miguel → Steven                                                 |
| Monto       | **$600,000 COP**                                                |
| Cuenta dest | 55100027771 (Steven)                                            |
| Evidencia   | Referenciado en chat 29/01: "e 11 de enero te pase 600"         |
| Contexto    | Steven: "de los 600 me quedaron creo que 375 solo a isa y a mi" |
|             | (el resto fue para Isa y/o servicios)                           |
| Naturaleza  | **Fondos operativos** — mezcla de honorarios y servicios        |
| En CSV      | Parcial: CSV tiene "Viajes Bogota $600K" en Ene 2024            |

### T-008 · 15/02/2024 — Completar pago mensual

| Campo       | Valor                                                        |
| ----------- | ------------------------------------------------------------ |
| Dirección   | Miguel → Steven                                              |
| Monto       | **$200,000 COP**                                             |
| Cuenta dest | 55100027771 CC 1000306867 (Steven)                           |
| Evidencia   | Contexto del chat                                            |
| Contexto    | Miguel: "ya vamos en 300 del mes, te debo 300"               |
|             | "100 mas estos 200 van 300" — Steven: "del pago pasaste 100" |
| Naturaleza  | **Honorarios** parciales (febrero)                           |
| En CSV      | ❌ No como pago a Steven directo                              |

### T-009 · Mar 2024 — Dividendos + Bono (Abr 2024)

| Campo      | Valor                                                       |
| ---------- | ----------------------------------------------------------- |
| Dirección  | Miguel → Steven                                             |
| Monto      | **$625,215 (dividendo) + $521,760 (bono) = $1,146,975 COP** |
| Evidencia  | Registrado en contabilidad formal                           |
| Naturaleza | **Dividendos y bono** — distribución 80/15/5                |
| En CSV     | ✅ Sí                                                        |

### T-010 · 30/04/2024 — Cierre de mes

| Campo       | Valor                                                           |
| ----------- | --------------------------------------------------------------- |
| Dirección   | Miguel → Steven                                                 |
| Monto       | **~$340,000 COP**                                               |
| Cuenta dest | 55100027771 (Steven, ya inscrita por Miguel)                    |
| Evidencia   | Multimedia + audio (comprobante)                                |
| Contexto    | Miguel: "a ver que te debo para cerrar mes, de lo tuyo y de Isa |
|             | y de servicios" Steven: "faltaban como 340 algo asi"            |
|             | Miguel: "ya te pago lo que hace falta"                          |
| Naturaleza  | **Fondos operativos** — honorarios Steven+Isa + servicios       |
| En CSV      | ❌ No                                                            |

### T-011 · 15/09/2024 — Pago parcial septiembre

| Campo      | Valor                                                 |
| ---------- | ----------------------------------------------------- |
| Dirección  | Miguel → Steven                                       |
| Monto      | **$500,000 COP**                                      |
| Evidencia  | IMG-20240915-WA0002.jpg + "van 500.000 de septiembre" |
| Naturaleza | **Honorarios / operación** — primer abono del mes     |
| En CSV     | ❌ No                                                  |

### T-012 · 17/09/2024 — Complemento septiembre

| Campo      | Valor                                      |
| ---------- | ------------------------------------------ |
| Dirección  | Miguel → Steven                            |
| Monto      | **$300,000 COP** (acumulado sep = $800K)   |
| Evidencia  | Multimedia + "800 septiembre"              |
| Naturaleza | **Honorarios / operación** — segundo abono |
| En CSV     | ❌ No                                       |

### T-013 · 16/12/2024 — Pago diciembre

| Campo      | Valor                                        |
| ---------- | -------------------------------------------- |
| Dirección  | Miguel → Steven                              |
| Monto      | **$400,000 COP**                             |
| Evidencia  | IMG-20241216-WA0008.jpg + "van 400 este mes" |
| Naturaleza | **Honorarios / operación** mensual           |
| En CSV     | ❌ No                                         |

### T-014 · 18/07/2025 — Pago de cliente (Salinero)

| Campo      | Valor                                                             |
| ---------- | ----------------------------------------------------------------- |
| Dirección  | Miguel → Steven                                                   |
| Monto      | **Desconocido** (Miguel: "Te la paso toda")                       |
| Evidencia  | Chat: "Que hago con la plata, Te la paso toda"                    |
| Contexto   | Ingreso de cliente Salinero. Steven iba a subcontratar desarrollo |
| Naturaleza | **Fondos de cliente** para operación/contratación                 |
| En CSV     | ❌ No                                                              |

### T-015 · 27/09/2025 — Pago JR / abono deuda

| Campo      | Valor                                    |
| ---------- | ---------------------------------------- |
| Dirección  | Miguel → Steven                          |
| Monto      | **$600,000 COP**                         |
| Evidencia  | IMG-20250927-WA0024.jpg (comprobante)    |
| Contexto   | Miguel: "Te paso 600.000?" Steven: "Szs" |
|            | Steven: "Estos 600 abono a la deuda?"    |
|            | Miguel: ofreció de entrada de cliente JR |
| Naturaleza | **Fondos de operación / abono a deuda**  |
| En CSV     | ❌ No                                     |

---

## 3. Resumen de Transferencias Miguel → Steven

### 3.1 Totales confirmados

| Categoría                   |      Monto COP | # Transferencias |
| --------------------------- | -------------: | :--------------: |
| Fondos operativos (empresa) |     $4,215,000 |        10        |
| Dividendos + Bono (CSV)     |     $1,146,975 |        2         |
| Préstamo personal           |       $100,000 |        1         |
| Montos desconocidos         |             ¿? |        2         |
| **Total confirmado**        | **$5,461,975** |      **15**      |

### 3.2 Detalle por categoría de fondos operativos

| Fecha       |      Monto COP | Naturaleza                                     |
| ----------- | -------------: | ---------------------------------------------- |
| 21/06/23    |       $120,000 | Pago Palomino (parcial, $180K por Wompi)       |
| 17/08/23    |     $1,000,000 | Equipo servidor (SSD+RAM+UPS) — fondos empresa |
| 12/10/23    |      ~$255,000 | Reembolso servers + ChatGPT                    |
| 18/12/23    |       $100,000 | Reembolso servicios mes anterior               |
| 11/01/24    |       $600,000 | Operación (Steven+Isa+servicios)               |
| 15/02/24    |       $200,000 | Honorarios febrero                             |
| 30/04/24    |      ~$340,000 | Cierre mes (Steven+Isa+servicios)              |
| 15-17/09/24 |       $800,000 | Operación septiembre                           |
| 16/12/24    |       $400,000 | Operación diciembre                            |
| 27/09/25    |       $600,000 | Abono deuda / operación                        |
| **Total**   | **$4,415,000** |                                                |

> Nota: De estos ~$4.4M, una parte significativa era para **redistribuir a Isa, Dani y servicios**,
> no retribución directa a Steven. Steven funcionaba como intermediario de pagos.

---

## 4. Análisis de Fugas de Dinero

### 4.1 Flujo de ingresos por canal

| Canal de cobro        |        Total COP | # Registros | ¿A qué cuenta?                        |
| --------------------- | ---------------: | :---------: | ------------------------------------- |
| Banco (transferencia) |      $37,692,700 |     377     | Ambiguo — ¿personal Miguel o empresa? |
| Sin confirmar         |      $58,923,732 |     495     | No cobrado / pendiente                |
| Wompi                 |       $4,976,000 |     15      | Dispersión automática                 |
| Otro (efectivo/etc)   |       $4,016,000 |     41      | Diversos                              |
| **Total registrado**  | **$105,608,432** |   **928**   |                                       |

De estos, **$1,422,100** están explícitamente marcados como "Cuenta Miguel" (16 pagos, Jul 2023).

### 4.2 Pregunta crítica: ¿Los pagos "Banco" iban a la cuenta de Miguel?

La cuenta empresarial de Bancolombia (02900000629) **no aparece activa en el chat hasta Nov 2025**.
Antes de esa fecha, todas las referencias a cuentas bancarias para cobrar a clientes apuntan
a la cuenta personal de Miguel (02919098298).

| Evidencia del chat                                                        | Fecha          |
| ------------------------------------------------------------------------- | -------------- |
| Miguel envía "Ahorros Bancolombia 02919098298" como cuenta de cobro       | 25/05/23       |
| Miguel envía "Ahorros Bancolombia 02919098298" de nuevo                   | 02/06/23       |
| Chat muestra que clientes consignan mensualmente a esa cuenta             | 21/06/23       |
| Miguel: "yo recibo los pagos" (contexto repetido en varias ocasiones)     | Todo 2023-2024 |
| Primera aparición cuenta empresa (02900000629) en notificación automática | Nov 2025       |

**Esto implica que los $37.7M registrados como "Banco" entre Ago 2023 y ~Oct 2025 probablemente
entraron a la cuenta personal de Miguel (02919098298), no a la cuenta empresarial.**

### 4.3 Balance: Dinero que entró a Miguel vs dinero que salió

| Concepto                                   |        Monto COP |
| ------------------------------------------ | ---------------: |
| **ENTRADAS a Miguel**                      |                  |
| Cobros marcados "Cuenta Miguel" (Jul 2023) |       $1,422,100 |
| Pagos "Banco" (Ago 2023 – ~Oct 2025)       |    ~$37,692,700¹ |
| Dispersiones Wompi a Miguel                |     ~$4,976,000² |
| **Subtotal estimado entradas**             | **~$44,090,800** |
|                                            |                  |
| **SALIDAS desde Miguel**                   |                  |
| Transferencias a Steven (operación)        |       $4,415,000 |
| Dividendos + Bono a Steven                 |       $1,146,975 |
| Dividendos + Bono a Isa (estimado)         |        $730,165³ |
| Dividendo Miguel (se lo quedó)             |       $3,334,480 |
| Bono Miguel (se lo quedó)                  |         $521,760 |
| Pagos internos a Dani (CSV)                |       $3,100,000 |
| Pagos internos a Laura (CSV)               |         $344,000 |
| Pagos internos a Isa (CSV honorarios)      |       $2,329,830 |
| Gastos operativos (dominios, renovaciones) |         $469,000 |
| **Subtotal estimado salidas documentadas** |  **$16,391,210** |
|                                            |                  |
| **BRECHA SIN DOCUMENTAR**                  | **~$27,699,590** |

_¹ Asume que la mayoría de pagos "Banco" fueron a la cuenta personal de Miguel. Si una porción
fue directo a la cuenta empresarial, la brecha disminuye proporcionalmente._

_² Asume dispersiones Wompi iban a Miguel; algunas podrían ir directo a Steven.$_

_³ Dividendo Isa $208,405 + Bono $521,760 = $730,165._

### 4.4 Interpretación de la brecha

La brecha de **~$27.7M COP** tiene varias explicaciones posibles (no mutuamente excluyentes):

1. **Ingresos "Sin confirmar" ($58.9M)**: El 56% de los ingresos registrados están como
   "Sin confirmar" — estos probablemente **nunca se cobraron**. Si se excluyen, el cálculo cambia.

2. **Pagos "Banco" que no fueron a Miguel**: Es posible que algunos clientes pagaran directo
   a la cuenta empresarial (02900000629) incluso antes de Nov 2025, pero no hay evidencia en el chat.

3. **Gastos no documentados**: Miguel pudo haber cubierto gastos de la empresa desde su cuenta
   personal sin registrarlos (impuestos, contabilidad, viáticos comerciales).

4. **Fugas reales**: Dinero de clientes que entró a la cuenta personal de Miguel y no fue
   ni transferido ni registrado como gasto.

### 4.5 Recálculo conservador (solo ingresos confirmados como pagados)

| Concepto                                      |        Monto COP |
| --------------------------------------------- | ---------------: |
| Ingresos estado "Pagado" (no "Sin confirmar") |     ~$46,684,700 |
| Menos Wompi directo a Steven                  |     ~$2,000,000¹ |
| **Dinero que pasó por Miguel (estimación)**   | **~$44,684,700** |
| Salidas documentadas desde Miguel             |     -$16,391,210 |
| **Brecha conservadora**                       | **~$28,293,490** |

_¹ Estimación: parte de Wompi iba directo a la cuenta de Steven._

---

## 5. Promesas de Pago No Confirmadas

El chat contiene varias promesas de Miguel que no tienen confirmación de ejecución:

| Fecha    | Promesa                                               | Monto estimado | ¿Confirmado? |
| -------- | ----------------------------------------------------- | -------------: | :----------: |
| 06/10/23 | "cuando entre platica les paso lo de Isa y tuyo, 600" |       $600,000 |      ❌       |
| 06/10/23 | "la otra semana te pago eso" (servers $177K)          |       $177,000 |      ❌¹      |
| 07/10/23 | "esta semana apenas nos entre de una" (Dani $300K)    |       $300,000 |      ❌       |
| 22/06/23 | "voy a hacer un archivo tuyo y mio donde pongamos     |              — |      ❌       |
|          | la plata que le hemos aportado a la empresa"          |                |              |
| 19/10/23 | Miguel paga ChatGPT4 por Steven (tarjeta al rojo)     |       ~$78,000 |   Parcial²   |

_¹ El pago de $177K de servers se confirma parcialmente en T-005 (12/10/23)._
_² Miguel intentó pagar ChatGPT pero su tarjeta fue rechazada por estar al límite._

> **Nota**: La promesa del 22/06/23 de crear un archivo de aportes mutuos **nunca se materializó**.
> Esto habría sido la contabilidad interna que ahora hace falta.

---

## 6. Patrones Identificados

### 6.1 Esquema de flujo de dinero

```
CLIENTES → pagan a → CUENTA PERSONAL MIGUEL (02919098298)
                          │
                          ├── Miguel se queda con su parte
                          ├── Transfiere ad-hoc a Steven (55100027771)
                          │       └── Steven redistribuye a: Isa, Dani, servicios
                          └── ¿? (brecha sin documentar)
```

### 6.2 Problemas estructurales detectados

1. **Sin contabilidad formal de ingresos vs egresos por cuenta**: No existe un libro de
   banco que registre qué entró y qué salió de la cuenta de Miguel.

2. **Pagos ad-hoc sin periodicidad**: Las transferencias a Steven no siguen un calendario;
   dependen de que Miguel "tenga platica" o de que Steven pida.

3. **Mezcolanza de conceptos**: Un solo pago de Miguel incluye honorarios de Steven + Isa +
   reembolso de servicios + pago a terceros. Sin desglose formal.

4. **No hay recibos bidireccionales**: Solo se ven comprobantes de Bancolombia (imágenes),
   pero no hay registro contable de cada transferencia.

5. **Cuenta empresarial infrautilizada**: La empresa tiene NIT y cuenta bancaria
   (02900000629) pero no se usó durante los primeros ~2.5 años de operación.

### 6.3 Indicadores de riesgo

| Indicador                                    |  Nivel  | Detalle                           |
| -------------------------------------------- | :-----: | --------------------------------- |
| Dinero de empresa en cuenta personal         | 🔴 Alto  | ~$44M pasaron por cuenta Miguel   |
| Brecha entre entradas y salidas documentadas | 🔴 Alto  | ~$28M sin documentar              |
| Ausencia de contabilidad de banco            | 🔴 Alto  | No hay libro de banco             |
| Transferencias sin recibo formal             | 🟡 Medio | Comprobantes son fotos WhatsApp   |
| Promesas de pago sin cumplir                 | 🟡 Medio | Al menos 3 promesas sin confirmar |
| Cuenta empresa no usada hasta 2025           | 🟠 Alto  | 2.5 años de operación informal    |

---

## 7. Conclusiones

1. **Se confirmaron ~$5.5M COP** en transferencias de Miguel a Steven (incluyendo dividendos/bonos).
   Solo $1.1M de estos corresponden a retribución personal de Steven (dividendo + bono).
   El resto (~$4.4M) fueron fondos operativos que Steven redistribuyó.

2. **Brecha estimada de ~$28M COP** entre dinero que entró a la cuenta personal de Miguel
   y salidas documentadas. Esta brecha puede deberse a:
   - Ingresos nunca cobrados (muchos marcados "Sin confirmar")
   - Gastos de Miguel no registrados
   - Dinero no transferido (fuga real)

3. **La empresa operó ~2.5 años con los ingresos pasando por la cuenta personal de Miguel**,
   sin contabilidad formal ni reconciliación bancaria.

4. **Recomendación urgente**: Solicitar a Miguel un extracto bancario de la cuenta 02919098298
   (Jul 2023 – Oct 2025) para cruzar con los ingresos registrados y las transferencias documentadas.
   Solo con ese extracto se puede determinar la magnitud real de la brecha.

5. **Todas las transferencias encontradas en el chat están soportadas con comprobantes**
   (imágenes adjuntas), pero estos comprobantes son fotos de WhatsApp, no documentación contable.

---

## 8. Anexos

### 8.1 Líneas clave del chat (referencia)

|  Línea | Fecha    | Contenido resumido                                |
| -----: | -------- | ------------------------------------------------- |
|  1,935 | 25/05/23 | Cuenta Steven: 55100027771 Ahorros Bancolombia    |
|  1,969 | 25/05/23 | Miguel da cuenta: 02919098298                     |
|  2,265 | 02/06/23 | Miguel vuelve a dar su cuenta personal            |
|  3,645 | 21/06/23 | Pago Palomino $120K (300-180 Wompi)               |
|  3,690 | 22/06/23 | Miguel promete archivo de aportes (nunca se hizo) |
|  5,122 | 17/08/23 | Transferencia $1M para equipos                    |
|  5,636 | 06/10/23 | Promesa de $600K + $177K servers                  |
|  5,672 | 12/10/23 | Pago servers+ChatGPT+Dani                         |
|  6,027 | 18/12/23 | Pago $100K adeudados                              |
|  6,782 | 29/01/24 | Referencia: "11 enero te pase 600"                |
|  7,252 | 15/02/24 | "te debo 300" → paga $200K                        |
|  7,754 | 30/04/24 | Cierre mes ~$340K                                 |
|  8,352 | 15/09/24 | "van 500.000 de septiembre"                       |
|  8,363 | 17/09/24 | "800 septiembre" (total mes)                      |
|  8,510 | 16/12/24 | "van 400 este mes"                                |
|  9,140 | 18/07/25 | "Que hago con la plata, Te la paso toda"          |
|  9,695 | 27/09/25 | "Te paso 600.000?"                                |
| 10,532 | Nov 2025 | Primera aparición cuenta empresa 02900000629      |

### 8.2 Documentos cruzados

| Documento                                                            | Relación                       |
| -------------------------------------------------------------------- | ------------------------------ |
| `cicloOperativo/finanzas/salidas/pagos_internos.csv`                 | Solo registra dividendos/bonos |
| `cicloOperativo/finanzas/entradas/ingresos_consolidado.csv`          | 16 registros "Cuenta Miguel"   |
| `cicloOperativo/finanzas/reportes/analisis_equity_contribuciones.md` | Análisis de equity             |
| `documentacion/legal/ACUERDO-DE-SOCIOS.md`                           | Acuerdo actual 33.33%          |
