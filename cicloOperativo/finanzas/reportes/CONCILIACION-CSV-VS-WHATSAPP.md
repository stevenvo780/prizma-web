# Conciliación: Transferencias WhatsApp vs Registros CSV

**Fecha de generación**: 4 de marzo de 2026  
**Fuente WhatsApp**: `cicloOperativo/finanzas/reportes/rastreo_transferencias_whatsapp.md`  
**Fuentes CSV**:
- `cicloOperativo/finanzas/salidas/pagos_internos.csv` (32 registros)
- `cicloOperativo/finanzas/entradas/ingresos_consolidado.csv` (928 registros)
- `cicloOperativo/finanzas/salidas/gastos_consolidado.csv` (192 registros)

**Propósito**: Cruzar rigurosamente cada transferencia detectada en WhatsApp con los registros
formales en CSV, determinando qué sí se reportó, qué no, y las implicaciones reales.

---

## 1. Cruce Transferencia por Transferencia

| ID    | Fecha      | Dir.   | Monto COP    | Concepto                        | ¿En CSV?           | Detalle del cruce                                                                                    |
| ----- | ---------- | ------ | -----------: | ------------------------------- | :-----------------: | ---------------------------------------------------------------------------------------------------- |
| T-001 | 25/05/23   | M→S    | $100,000     | Préstamo personal               | N/A                | Préstamo entre personas, NO es transacción empresarial. Correcto que no esté en CSV.                 |
| T-002 | 25/05/23   | S→M    | ¿?           | Devolución + traspaso Wompi     | N/A                | Dirección inversa. No aplica para pagos_internos.                                                    |
| T-003 | 21/06/23   | M→S    | $120,000     | Pago parcial Palomino           | ❌ No registrado    | Pagos_internos no tiene este concepto. El ingreso de Palomino tampoco aparece en ingresos_consolidado.|
| T-004 | 17/08/23   | M→S    | $1,000,000   | Compra equipos (SSD+RAM+UPS)    | ❌ No registrado    | No aparece en gastos_consolidado ni en pagos_internos. Es gasto de infraestructura de la empresa.    |
| T-005 | 12/10/23   | M→S+D  | ~$555,000    | Servers + ChatGPT + Dani        | ⚠️ Parcial          | CSV tiene "Dani,TotalPedido,$500,000" en Oct-23. Pero servers ($177K) y ChatGPT (~$78K) no aparecen. |
| T-006 | 18/12/23   | M→S    | $100,000     | Reembolso servicios             | ❌ No registrado    | No hay registro en ningún CSV.                                                                       |
| T-007 | ~11/01/24  | M→S    | $600,000     | Operación (Steven+Isa+serv.)    | ⚠️ Posible match    | CSV tiene "Viajes Bogota,$600,000" en 2024-01. **Podría ser el mismo $600K** pero con concepto distinto. Steven dijo: "de los 600 me quedaron 375, a Isa y a mí". No era viaje. |
| T-008 | ~15/02/24  | M→S    | $200,000     | Honorarios febrero              | ❌ No registrado    | CSV tiene pagos a Isa y Dani en Feb, pero no a Steven.                                               |
| T-009 | Mar-Abr/24 | M→S   | $1,146,975   | Dividendo ($625K) + Bono ($522K)| ✅ Sí               | `pagos_internos.csv`: "2024-03,Div Ste,,625215" + "2024-04,Bono Stev,,521760". **Match exacto.**     |
| T-010 | ~30/04/24  | M→S    | ~$340,000    | Cierre de mes                   | ❌ No registrado    | No hay registro en CSV. Steven dijo: "faltaban como 340".                                            |
| T-011 | 15/09/24   | M→S    | $500,000     | Primer abono septiembre         | ❌ No registrado    | No hay ningún pago a Steven en Sep-24 en CSV.                                                        |
| T-012 | 17/09/24   | M→S    | $300,000     | Complemento septiembre          | ❌ No registrado    | Acumulado sept = $800K. Ninguno registrado.                                                          |
| T-013 | 16/12/24   | M→S    | $400,000     | Operación diciembre             | ❌ No registrado    | No hay registro en CSV para Dic-24.                                                                  |
| T-014 | 18/07/25   | M→S    | ¿?           | Pago cliente Salinero           | ❌ No registrado    | Monto desconocido. Miguel dijo "Te la paso toda".                                                    |
| T-015 | 27/09/25   | M→S    | $600,000     | Abono deuda / operación         | ❌ No registrado    | Steven preguntó: "Estos 600 abono a la deuda?" No está en CSV.                                      |

---

## 2. Resumen Cuantitativo de la Conciliación

### 2.1 Por estado de registro

| Estado              | # Transf. | Monto COP         | Observación                                                  |
| ------------------- | :-------: | -----------------: | ------------------------------------------------------------ |
| ✅ En CSV (match)    |     1     | $1,146,975         | Dividendo + Bono de Steven (2024-03 y 2024-04)              |
| ⚠️ Match parcial     |     2     | ~$1,155,000        | T-005 (Dani sí, servers no) + T-007 (¿Viajes Bogotá?)       |
| ❌ No registrado     |     9     | $3,560,000         | Fondos operativos, reembolsos, honorarios                    |
| N/A (no aplica)     |     3     | $100,000 + ¿?      | Préstamo personal + devolución + monto desconocido           |
| **Total rastreado** |  **15**   | **~$5,962,000**¹   |                                                              |

_¹ Sin incluir T-002 y T-014 (montos desconocidos)._

### 2.2 Lo que debería estar en CSV y no está

| Concepto                                 | Monto COP   | CSV destino sugerido              |
| ---------------------------------------- | ----------: | --------------------------------- |
| Compra equipos (SSD+RAM+UPS) Ago-23      | $1,000,000  | `gastos_consolidado.csv`          |
| Pago parcial Palomino Jun-23             | $120,000    | `pagos_internos.csv`              |
| Reembolso servers Oct-23                 | ~$177,000   | `gastos_consolidado.csv`          |
| Reembolso ChatGPT Oct-23                 | ~$78,000    | `gastos_consolidado.csv`          |
| Reembolso servicios Dic-23              | $100,000    | `pagos_internos.csv`              |
| Honorarios Steven Feb-24                 | $200,000    | `pagos_internos.csv`              |
| Cierre mes Abr-24                        | ~$340,000   | `pagos_internos.csv`              |
| Operación Sep-24 (2 abonos)             | $800,000    | `pagos_internos.csv`              |
| Operación Dic-24                         | $400,000    | `pagos_internos.csv`              |
| Operación/abono Sep-25                   | $600,000    | `pagos_internos.csv`              |
| **Total sin registrar**                  | **$3,815,000** |                                |

### 2.3 Lo que SÍ está registrado correctamente

| Concepto                   | Monto COP   | CSV                  | Registro                        |
| -------------------------- | ----------: | -------------------- | ------------------------------- |
| Dividendo Steven Mar-24    | $625,215    | `pagos_internos.csv` | "2024-03,Div Ste,,625215"       |
| Bono Steven Abr-24         | $521,760    | `pagos_internos.csv` | "2024-04,Bono Stev,,521760"     |
| Pagos a Isa (7 meses)      | $2,329,830  | `pagos_internos.csv` | 7 registros mensuales           |
| Pagos a Dani (8 meses)     | $3,300,000  | `pagos_internos.csv` | 8 registros mensuales           |
| Dividendo + Bono Isa       | $730,165    | `pagos_internos.csv` | "Div Isa" + "Bono Isa"          |
| Dividendo + Bono Miguel    | $3,856,240  | `pagos_internos.csv` | "Div Miguel" + "Bono Miguel"    |
| Gastos operativos (dom.)   | $469,000    | `pagos_internos.csv` | Dominios, renovaciones           |
| QA Tester (5 meses)        | $600,000    | `pagos_internos.csv` | Nov-25 a Mar-26                  |
| **Total registrado**       | **$12,432,210** |                  |                                 |

---

## 3. Interpretación Honesta

### 3.1 Lo que funciona bien

1. **Los dividendos y bonos están correctamente registrados**: Los $1,146,975 de Steven,
   los $730,165 de Isa, y los $3,856,240 de Miguel aparecen fielmente en `pagos_internos.csv`.

2. **Los pagos recurrentes a terceros son consistentes**: Dani (8 meses, $3.3M) e Isa
   (7 meses, $2.3M) tienen registro mensual con montos coherentes.

3. **Los gastos de infraestructura digital están bien**: `gastos_consolidado.csv` tiene 160
   registros de hosting, dominios, GitHub, GCP, etc. con fechas y montos trazables.

4. **Las fuentes CSV son consistentes entre sí**: Los totales cuadran dentro del modelo
   formal de contabilidad definido en `00-POLITICA-FINANCIERA-CONTABLE.md`.

### 3.2 Lo que falta

1. **Las transferencias operativas ad-hoc no se registraron** (~$3.8M):
   - Miguel transfería fondos a Steven para que este redistribuyera (Isa, servicios, equipos).
   - Estos pagos eran informales (WhatsApp + comprobante Bancolombia) y no entraron al CSV.
   - Esto no significa que el dinero se "perdió" — se usó, pero sin registro.

2. **La compra de equipos de $1M no aparece como gasto**:
   - En agosto 2023 Miguel transfirió $1M de fondos de la empresa para hardware.
   - Estos equipos existen físicamente y están en uso. Pero el gasto no se registró.

3. **Reembolsos de servicios pagados por Steven no se registraron**:
   - Steven pagaba servidores, ChatGPT, etc. con su tarjeta y Miguel le reembolsaba.
   - Ni el gasto del servicio ni el reembolso están en CSV.

### 3.3 Por qué pasó esto

1. **No existía proceso contable formal**: Hasta febrero 2026 no se creó la política
   financiera ni el modelo de conciliación. Los primeros 2.5 años fueron informales.

2. **Todo era consensuado**: Ambas partes (Miguel y Steven) operaban bajo el esquema
   de "te paso plata por WhatsApp" sin objeción. No fue ocultamiento intencional.

3. **Miguel prometió crear un registro** (22/06/2023: "voy a hacer un archivo tuyo y mio
   donde pongamos la plata que le hemos aportado") pero nunca se materializó.

4. **No había contador ni auditor**: La empresa operaba sin profesional contable hasta la
   fase de constitución formal (2026).

### 3.4 Lo que NO se puede afirmar sin más evidencia

1. **La brecha de ~$28M no es necesariamente fuga de dinero**. Este número asume que
   TODOS los pagos "Banco" en `ingresos_consolidado.csv` fueron a la cuenta personal de
   Miguel, lo cual es una estimación máxima, no un hecho confirmado.

2. **No sabemos cuántos ingresos "Sin confirmar" ($41M) se cobraron realmente**.
   Si la mayoría no se cobró (clientes que no pagaron), la brecha real es mucho menor.

3. **Miguel pudo tener gastos empresariales no documentados** desde su cuenta personal
   (viáticos comerciales, impuestos, pagos a proveedores locales) que no se registraron.

4. **La única forma de cerrar la brecha es con el extracto bancario** de la cuenta
   02919098298 (Jul 2023 – Oct 2025).

---

## 4. Problemas Concretos que Genera la Falta de Registro

### 4.1 Riesgo tributario
- Si Humanizar se constituye como SAS, la DIAN puede solicitar trazabilidad de ingresos/egresos.
- Ingresos que pasaron por cuenta personal de Miguel sin registro pueden generar observaciones.
- Los gastos no registrados (equipos, servers) no son deducibles sin soporte.

### 4.2 Riesgo entre socios
- Sin registro formal, cada socio tiene una versión diferente de "cuánto recibió".
- Los $3.8M que Steven recibió informalmente no aparecen — ni a favor ni en contra de nadie.
- La distribución real de dividendos puede cuestionarse sin trazabilidad completa.

### 4.3 Riesgo operativo
- No se puede calcular el margen real de la empresa si faltan gastos.
- La compra de equipos ($1M) no está en el balance, lo que subestima la inversión real.
- Los reembolsos informales dificultan la proyección de flujo de caja.

### 4.4 Riesgo de auditoría futura
- Si entra un inversionista o se hace due diligence, la contabilidad informal es red flag.
- Los comprobantes son fotos de WhatsApp — válidos como evidencia pero no como soporte contable.

---

## 5. Tareas Pendientes de Conciliación

### 5.1 Urgentes (antes de constitución SAS)

- [ ] **Solicitar extracto bancario** de cuenta 02919098298 (Miguel personal) período Jul 2023 – Oct 2025
- [ ] **Cruzar extracto con `ingresos_consolidado.csv`**: determinar cuántos pagos "Banco" efectivamente entraron a esa cuenta
- [ ] **Registrar en `pagos_internos.csv`** las 9 transferencias operativas confirmadas por WhatsApp que no están en CSV ($3,815,000)
- [ ] **Registrar en `gastos_consolidado.csv`** la compra de equipos de $1M (Ago-23) y reembolsos de servers/ChatGPT (~$255K)

### 5.2 Importantes (post-constitución)

- [ ] **Reconciliar el registro "Viajes Bogota $600K"** de pagos_internos con T-007 del WhatsApp — determinar si es el mismo movimiento o son diferentes
- [ ] **Crear libro de banco retroactivo** con todas las entradas/salidas de la cuenta de Miguel para el período informal
- [ ] **Formalizar pagos a Steven pre-2024** como honorarios de CTO o gastos operativos redistribuidos
- [ ] **Documentar la naturaleza de cada pago informal** (¿era honorario de Steven, redistribución a Isa, reembolso de servicios, o mixto?)

### 5.3 Estructurales (mejora continua)

- [ ] **Migrar 100% del recaudo a cuenta empresarial** (02900000629) — ya en proceso desde Nov 2025
- [ ] **Eliminar el esquema de redistribución vía Steven**: cada persona debe recibir pago directo desde cuenta empresa
- [ ] **Implementar cierre mensual real** según `01-MODELO-RECAUDO-CONCILIACION.md`
- [ ] **Contratar contador** para regularizar período informal antes de primera declaración como SAS

---

## 6. Registros Sugeridos para CSV

### 6.1 Registros para agregar a `pagos_internos.csv`

```csv
fecha,concepto,detalle,total_cop,tipo
2023-06,Steven,Pago_parcial_Palomino_via_Miguel,120000,honorarios_soporte
2023-10,Steven,Reembolso_servers_ChatGPT,255000,gasto_operativo
2023-12,Steven,Reembolso_servicios_nov,100000,gasto_operativo
2024-02,Steven,Honorarios_febrero,200000,honorarios_soporte
2024-04,Steven,Cierre_abril_operacion,340000,honorarios_soporte
2024-09,Steven,Operacion_septiembre,800000,honorarios_soporte
2024-12,Steven,Operacion_diciembre,400000,honorarios_soporte
2025-09,Steven,Abono_deuda_operacion,600000,honorarios_soporte
```

### 6.2 Registros para agregar a `gastos_consolidado.csv`

```csv
fecha,proveedor,concepto,total_original,moneda,estado,fuente
2023-08-17,Equipos_Hardware,SSD_1TB_RAM_32GB_UPS_1200W_adaptadores,1000000,COP,Pagado,comprobante_whatsapp
```

> ⚠️ **Estos registros NO se han agregado aún**. Requieren validación cruzada con extracto
> bancario y/o confirmación de ambas partes antes de incorporarse a las fuentes oficiales.

---

## 7. Conclusión

La contabilidad formal (CSVs) captura correctamente los **dividendos, bonos, pagos recurrentes
a terceros y gastos de infraestructura digital**. Sin embargo, omite **$3.8M en transferencias
operativas ad-hoc** entre socios y **$1M en compra de equipos** que están soportados por
comprobantes de WhatsApp.

Esto no invalida la contabilidad existente — la complementa. El período Jul 2023 – Feb 2026
fue de operación informal donde la empresa funcionaba sin estructura contable. Los registros
CSV reflejan lo que se formalizó; las transferencias WhatsApp reflejan lo que operó en paralelo.

**La prioridad #1 es obtener el extracto bancario** de la cuenta de Miguel para cerrar la
conciliación con datos reales, no estimaciones. Solo con ese dato se puede determinar si la
brecha es un tema contable (gastos no registrados) o un problema de fondo.

---

## 8. Referencias cruzadas

| Documento                                                            | Relación                                    |
| -------------------------------------------------------------------- | ------------------------------------------- |
| `rastreo_transferencias_whatsapp.md`                                 | Fuente primaria de las 15 transferencias    |
| `pagos_internos.csv`                                                 | Registros formales de pagos al equipo       |
| `ingresos_consolidado.csv`                                           | 928 registros de ingresos (16 "Cuenta Miguel") |
| `gastos_consolidado.csv`                                             | 192 registros de gastos operativos          |
| `00-POLITICA-FINANCIERA-CONTABLE.md`                                 | Política que define las fuentes oficiales   |
| `01-MODELO-RECAUDO-CONCILIACION.md`                                  | Modelo de flujo de caja                     |
| `PLAN-MAESTRO-CONSTITUCION-EMPRESA-2026.md`                          | Plan con hito de cuenta bancaria empresarial |
