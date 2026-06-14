# KPIs por Software - HumanizarSystems

Fecha de corte: 2026-03-04

## Resumen numerico (comercial)

| Software     | KPI 1                  | KPI 2                                         | KPI 3                                                                         | Fuente                   |
| :----------- | :--------------------- | :-------------------------------------------- | :---------------------------------------------------------------------------- | :----------------------- |
| EMW          | 1M+ mensajes           | 463 registros (consolidado)                   | COP 42.153.740 historico (EMW puro)                                           | ingresos_consolidado.csv |
| Graf         | 650+ compras/dia       | 16 registros propios + 298 TotalPedido legacy | COP 1.680.800 (Graf) + COP 30.999.750 (TotalPedido) + COP 14.027.850 (TP+EMW) | ingresos_consolidado.csv |
| Mera Vuelta  | 20 entregas gratis     | 300 pedidos plan base                         | 2.000 pedidos plan alto                                                       | Pricing publico          |
| Sinergia POS | 100 facturas plan base | 500 facturas plan estandar                    | 2.000 facturas plan premium                                                   | Pricing publico          |
| Agora        | COP 30.000 basico      | COP 50.000 pro                                | COP 150.000 enterprise                                                        | Pricing publico          |
| Terminal     | USD 10 basico          | USD 20 estandar                               | USD 50 premium                                                                | Pricing publico          |
| Fiar         | 1 portal activo        | 1 flujo de acceso temprano                    | 0 tarifario publico final                                                     | Producto en desarrollo   |

## Notas de calculo

- Productos EMW normalizados: `EMW`, `EMW (Temporal)`. Total: $42,153,740 + $588,000.
- Productos Graf (propios): `Graf` = $1,680,800 (16 registros desde sep-2025, migracion desde TotalPedido).
- Productos TotalPedido (legacy PidoRapido): `TotalPedido` $30,999,750 + `TotalPedido+EMW` $14,027,850 + `TotalPedido (Instalacion)` $6,688,000 + `TotalPedido+Servidores` $1,544,400.
- Producto Desarrollo Web: $4,592,000 (12 registros).
- Gasto PidoRapido/TotalPedido: $71,550,000 COP (interpolado, sin doble conteo GCP/Hostinger). Detalle: `salidas/proveedores/pidorapido_totalpedido.csv`.
- Fuente historica contable: `cicloOperativo/finanzas/entradas/ingresos_consolidado.csv`.
