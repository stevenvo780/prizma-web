# Sintesis Financiera Historica (2023-2025)

> Referencia unica de clientes: `documentacion/CLIENTES-FUENTE-UNICA.md`
> Datos normalizados: `entradas/ingresos_consolidado.csv` · `salidas/gastos_consolidado.csv`

## Resumen Ejecutivo
Este documento consolida la contabilidad historica de Humanizar Systems.
- Fuente de verdad maestra: `cicloOperativo/finanzas/Contabilidad Humanizar.xlsx`
- Fuente normalizada de ingresos: `entradas/ingresos_consolidado.csv` (928 registros)
- Fuente normalizada de egresos: `salidas/gastos_consolidado.csv` (192 registros)
- Pagos internos: `salidas/pagos_internos.csv` (32 registros — equipo, dividendos, bonos, QA)
- Validacion: `reportes/validacion.md`

## Volumen Consolidado
- Registros de ingreso validados: 928
- Clientes con facturacion historica: 61
- Facturacion total consolidada (Ventas): **$105,608,432 COP**
- Meses cubiertos: 30 (jul-2023 a dic-2025)

## Estructura de Gastos Fijos (Actual 2026)
| Proveedor             | Categoria       | Costo Mensual (USD) | Notas            |
| :-------------------- | :-------------- | :------------------ | :--------------- |
| ChatGPT               | IA              | $20                 | Suscripcion Plus |
| Claude                | IA              | $20                 | Suscripcion Pro  |
| Google                | Productividad   | $20                 | Workspace / Mail |
| Github Copilot        | Desarrollo      | $80                 | Licencias equipo |
| GCP                   | Infraestructura | $60                 | Cloud Services   |
| Vercel                | Infraestructura | $20                 | Frontend Hosting |
| **Total Mensual USD** |                 | **$220**            | (~$858,000 COP)  |

Fuente detallada: `salidas/gastos_operativos.csv` y `salidas/proveedores/*.csv`

## Cobertura Temporal

La normalizacion reconstruyo una linea de tiempo de **30 meses con ingresos** (julio 2023 a diciembre 2025).

| Metrica                      | Valor                                            |
| :--------------------------- | :----------------------------------------------- |
| Meses cubiertos con ingresos | 30 (jul-2023 a dic-2025)                         |
| Meses sin datos de ingresos  | ene-2026, feb-2026 (fuente llega hasta dic-2025) |
| Registros de gastos          | 192 (10 proveedores)                             |
| Gastos COP acumulados        | $72,784,400                                      |
| Gastos USD acumulados        | $2,569.00                                        |

## Analisis de Sostenibilidad Historica (Ingresos vs Gastos)

| Ano       | Ingresos (COP)   | Fuente                                   |
| :-------- | :--------------- | :--------------------------------------- |
| **2023**  | $21,588,400      | Excel directo                            |
| **2024**  | $47,651,900      | Excel directo                            |
| **2025**  | $36,368,132      | Excel (ene-mar) + CSV deducido (abr-dic) |
| **Total** | **$105,608,432** |                                          |

### Conciliacion Bruta
| Concepto                  | Monto                |
| :------------------------ | :------------------- |
| Total ingresos            | $105,608,432 COP     |
| Total gastos COP          | $72,784,400 COP      |
| Total gastos USD          | $2,569.00 USD        |
| **Balance COP bruto**     | **+$32,824,032 COP** |
| **Balance total (@3900)** | **+$22,804,932 COP** |

> **Nota Operativa**: PidoRapido/TotalPedido ($71.55M COP) es el principal componente de gasto (costos interpolados: soporte por usuario + infra fija). GCP y Hostinger se contabilizan por separado en sus facturas directas. Detalle en `salidas/proveedores/pidorapido_totalpedido.csv`.

## Valoración Base de la Empresa (Sweat Equity)

Al calcular las 4,092 horas estimadas de trabajo no remunerado de los fundadores (Steven e Isa) a tarifas muy conservadoras de mercado B2B ($70k/h y $35k/h respectivamente), la empresa cuenta con una "deuda" en capital de trabajo de **$205,590,000 COP**. 
Este monto constituye la **Valoración Base (Piso)** de la empresa al momento de emitir acciones formales o negociar inversión externa. Detalle completo en `reportes/calculo_sweat_equity_2026.md`.

## Unit Economics (Economía Unitaria)
- **Costo de Adquisición (CAC Máximo Permisible)**: Dado que el **Lifetime Value (LTV)** promedio es de **~$1,048,419 COP** con una retención de 15.5 meses, se dispone de un margen saludable (hasta ~$250,000 COP por cliente) para destinar a fuerza de ventas activa y pauta de marketing B2B.
- **Costo Mantenimiento (Graf)**: La refactorización a software propio (Graf) cuesta **$5.72 USD/mes por usuario activo** (sobre base 50 clientes). Esto genera un asombroso Margen Bruto del **73%** (vendiendo a $80k COP), volviendo el negocio mucho más rentable que en su era "TotalPedido".

## Ingresos por Producto (Normalizado)

| Producto                  | Registros | Total COP   |
| :------------------------ | :-------- | :---------- |
| EMW                       | 456       | $43,849,304 |
| TotalPedido               | 298       | $32,260,200 |
| TotalPedido+EMW           | 109       | $14,045,820 |
| TotalPedido (Instalacion) | 17        | $6,801,924  |
| Desarrollo Web            | 12        | $4,592,000  |
| Graf                      | 16        | $1,887,936  |
| EMW (Temporal)            | 11        | $1,154,624  |
| TotalPedido+Servidores    | 9         | $1,016,624  |

> **Nota**: TotalPedido = plataforma externa PidoRapido (legacy). Graf = plataforma propia Humanizar (migración desde sep-2025). Clientes migrados: FincaDirecta, Maria Pilera, Olivenza, Peach, La Plazê.

## Gastos por Proveedor

| Proveedor                | Facturas | Total USD | Total COP   |
| :----------------------- | :------- | :-------- | :---------- |
| PidoRapido (TotalPedido) | 32       | -         | $71,550,000 |
| Hostinger                | 20       | -         | $1,004,402  |
| GoDaddy                  | 3        | -         | $230,045    |
| GitHub                   | 37       | $712.00   | -           |
| ChatGPT                  | 32       | $640.00   | -           |
| GCP                      | 25       | $434.00   | -           |
| Claude                   | 25       | $434.00   | -           |
| Vercel                   | 11       | $260.00   | -           |
| LocalXpose               | 7        | $42.00    | -           |

> PidoRapido: $71.55M COP — costos interpolados (soporte $50K/usuario/mes + infra fija). GCP y Hostinger en facturas directas. Detalle: `salidas/proveedores/pidorapido_totalpedido.csv`

## Estructura de Datos

| Archivo                             | Contenido                             | Origen                                                        |
| :---------------------------------- | :------------------------------------ | :------------------------------------------------------------ |
| `entradas/ingresos_consolidado.csv` | 928 registros de ingreso normalizados | `Contabilidad Humanizar.xlsx` + CSV deducido                  |
| `salidas/gastos_consolidado.csv`    | 192 registros de gasto unificados     | Union de proveedores + operativos                             |
| `salidas/gastos_operativos.csv`     | Stack SaaS + legacy mensual           | `archivo_fuentes_originales/Historico_Gastos_Cronologico.csv` |
| `salidas/proveedores/*.csv`         | 9 CSVs por proveedor individual       | CSVs de facturacion + PidoRapido interpolado                  |
| `salidas/pagos_internos.csv`        | 32 registros de pagos internos        | Excel maestro (equipo, dividendos, bonos, QA)                 |
| `archivo_fuentes_originales/`       | CSVs fuente sin normalizar (archivo)  | Respaldo de datos originales                                  |

## Observaciones
1. **Pico Comercial:** El mayor volumen de ingreso se concentra en 2024 ($47.7M) — año de mayor crecimiento.
2. **Productos:** EMW fue el producto líder ($43.8M, a pesar de incidentes en Q4 2025), seguido de TotalPedido ($32.3M). La migración TotalPedido→Graf inició en sep-2025 (5+ clientes migrados a dic-2025).
3. **Conciliación Pendiente:** ~39% de los ingresos históricos tienen estado "Sin confirmar" (334 registros, $41.1M) — prioridad de conciliacion. Ver `reportes/CONCILIACION-CSV-VS-WHATSAPP.md`.
4. **Dependencia Externa (El Gasto):** PidoRapido/TotalPedido consumió **$71.55M COP**; este gasto vampírico (basado en un alto costo por usuario) justifica técnica y financieramente la creación de *Graf*.
5. **Valoración Fiduciaria:** La empresa posee un balance en caja de +$22.8M COP, pero ha sido apalancada por **$205.5 Millones COP en Sweat Equity** (trabajo fundador no facturado).
6. **Pagos internos** (32 registros, $13,376,210 COP): equipo, dividendos, bonos, QA — documentados en `salidas/pagos_internos.csv`.
7. **Transferencias informales no registradas** (~$3.8M COP): 9 transferencias operativas confirmadas por comprobante Bancolombia que no están en CSV. Ver `reportes/CONCILIACION-CSV-VS-WHATSAPP.md`.

## Regla de Verdad
Cuando exista diferencia entre documentos markdown y archivos consolidados, prevalece la informacion de los archivos XLSX originales.

---
*Actualizado desde normalizacion contable el 2026-03-04. Fuente: `reportes/validacion.md`*
