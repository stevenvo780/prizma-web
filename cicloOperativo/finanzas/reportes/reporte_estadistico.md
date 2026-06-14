# REPORTE ESTADISTICO MAESTRO: HUMANIZAR SYSTEMS (2023-2025)

> Referencia unica de clientes: `documentacion/CLIENTES-FUENTE-UNICA.md`
> Fuente normalizada: `entradas/ingresos_consolidado.csv` (928 registros)

## 1. Resumen Financiero Global
| Metrica                          | Valor (COP)  | Observacion                                                     |
| :------------------------------- | :----------- | :-------------------------------------------------------------- |
| Ventas Totales (Bruto)           | $105,608,432 | 928 registros normalizados desde `Contabilidad Humanizar.xlsx`. |
| Recaudo Identificado como Pagado | $58,711,412  | ~56% del total — registros con estado `Pagado` (540).           |
| Cartera Pendiente Identificada   | $5,799,384   | ~5% del total — registros con estado `Pendiente` (54).          |
| Monto Sin Estado Explícito       | $41,097,636  | ~39% — registros con estado `Sin confirmar` (334).              |

### 1.1 Resumen de Egresos y Gastos Fijos (Burn Rate)
| Concepto                       | Costo Mensual | Moneda  | Notas                                          |
| :----------------------------- | :------------ | :------ | :--------------------------------------------- |
| Herramientas IA (GPT/Claude)   | $40           | USD     | Operatividad y desarrollo.                     |
| Dev Stack (Copilot/GCP/Vercel) | $160          | USD     | Infraestructura y productividad.               |
| Google Workspace               | $20           | USD     | Comunicación corporativa.                      |
| **Subtotal SaaS USD**          | **$220**      | **USD** | **~$858,000 COP** (Tasa: 3,900)                |
| Soporte Total Pedido (Legacy)  | $500K–$3.15M  | COP     | PidoRapido: variable mensual (en deprecacion). |

Fuente detallada: `salidas/gastos_operativos.csv` y `salidas/proveedores/*.csv`

> **Análisis de Flujo:** El gasto operativo consolidado (COP: $72.8M + USD: $2,569) incluye SaaS, PidoRapido/TotalPedido ($71.55M COP interpolados, sin doble conteo GCP/Hostinger) y proveedores directos. Balance COP bruto: +$32.8M. Balance total (@3900): **+$22.8M COP**.

---

## 2. Evolucion Anual
| Ano       | Ingresos (COP)   | Fuente                                   |
| :-------- | :--------------- | :--------------------------------------- |
| 2023      | $21,588,400      | Excel directo                            |
| 2024      | $47,651,900      | Excel directo                            |
| 2025      | $36,368,132      | Excel (ene-mar) + CSV deducido (abr-dic) |
| **Total** | **$105,608,432** |                                          |

---

## 3. Flujo de Clientes y Retención (LTV & Churn)
- Clientes con facturacion historica: 61
- Clientes activos (últimos 3 meses): 26
- Registros contables validados: 928
- Meses cubiertos: 30 (jul-2023 a dic-2025)

### 3.1 Indicadores de Vida del Cliente (SaaS Metrics)
| Métrica                                | Valor Validado      | Análisis                                              |
| :------------------------------------- | :------------------ | :---------------------------------------------------- |
| **Tiempo Promedio de Vida (Lifespan)** | 15.5 Meses          | Alta retención orgánica.                              |
| **Lifetime Value (LTV Pagado)**        | $1,048,419 COP      | Ingreso promedio que deja cada cliente adquirido.     |
| **Tasa de Churn Histórica**            | 57.4% (35 clientes) | Deserción natural en 3 años + incidentes EMW Q4 2025. |

### 3.2 Top clientes por facturacion
1. El Perol: $8,180,624
2. JR Speed Logic: $4,592,000
3. FincaDirecta: $4,230,224
4. OchoBizcocho: $4,194,224
5. MCA: $3,581,624
6. Punto Naranja: $3,553,124
7. La Maga: $3,443,700
8. Power Lab: $3,330,624

---

## 4. Rendimiento por Producto (Normalizado)
| Producto                  | Registros | Ingresos Generados |
| :------------------------ | :-------- | :----------------- |
| EMW                       | 456       | $43,849,304        |
| TotalPedido               | 298       | $32,260,200        |
| TotalPedido+EMW           | 109       | $14,045,820        |
| TotalPedido (Instalacion) | 17        | $6,801,924         |
| Desarrollo Web            | 12        | $4,592,000         |
| Graf                      | 16        | $1,887,936         |
| EMW (Temporal)            | 11        | $1,154,624         |
| TotalPedido+Servidores    | 9         | $1,016,624         |

> **Nota**: TotalPedido = plataforma externa PidoRapido (legacy, costo por usuario). Graf = plataforma propia Humanizar (migracion desde sep-2025). Ver diccionario abajo.

---

## 5. Notas de Calidad de Dato
- La fuente de verdad es el Excel: `cicloOperativo/finanzas/Contabilidad Humanizar.xlsx`.
- Los datos normalizados viven en: `cicloOperativo/finanzas/entradas/ingresos_consolidado.csv`.
- Los estados de pago se unificaron a 3 categorias: Pagado, Pendiente, Sin confirmar.
- 6 formatos de fecha distintos fueron unificados a ISO YYYY-MM.
- 20+ variantes de producto fueron mapeadas a 8 categorias estandar.
- 1 duplicado exacto eliminado en ingresos, 1 en gastos (Hostinger). 7 duplicados adicionales corregidos (Limona, Pristina, Orobry jul-nov 2024).

## 6. Diccionario de Datos (Mapeo Comercial)

Debido a la evolución de la marca, los registros históricos en Excel utilizan nombres antiguos. Esta tabla normaliza los términos para análisis modernos.

| Nombre en Excel (Legacy) | Nombre Comercial Actual (2026) | Descripción                                             |
| :----------------------- | :----------------------------- | :------------------------------------------------------ |
| **TotalPedido**          | **TotalPedido (PidoRapido)**   | Plataforma externa legacy (costo por usuario).          |
| **Total-Pedido**         | **TotalPedido (PidoRapido)**   | Variación en la escritura de la misma plataforma.       |
| **Total**                | **TotalPedido (PidoRapido)**   | Abreviatura común en registros antiguos.                |
| **Graf**                 | **Graf**                       | Plataforma propia Humanizar (migración desde sep-2025). |
| **EMW**                  | **EMW**                        | Marketing por WhatsApp (Nombre conservado).             |
| **Sinergia**             | **Sinergia POS**               | Sistema de Punto de Venta.                              |

> **Nota Técnica:** TotalPedido es la plataforma externa PidoRapido (genera gasto de $71.55M COP). GCP y Hostinger se contabilizan por separado en sus facturas directas. Graf es la plataforma propia que reemplaza a TotalPedido desde sep-2025. No agrupar ambos bajo el mismo nombre.

---
*Actualizado desde normalizacion contable el 2026-03-04. Fuente: `reportes/validacion.md`*
