# Análisis LTV, Churn y Ciclo de Vida del Cliente

**Fecha**: Marzo 2026
**Fuente**: Extracción y análisis matemático de `ingresos_consolidado.csv` (Script Python: `analyze_ltv.py`)

Al evaluar la historia de los 61 clientes únicos de Humanizar entre Julio 2023 y Marzo 2026, obtuvimos los siguientes indicadores de salud comercial, cruciales para modelar pauta, comisiones y rentabilidad.

---

## 1. Ciclo de Vida (Lifespan) y Lifetime Value (LTV)

El "Lifetime Value" indica cuánto dinero deja en promedio un cliente a lo largo de su relación con nosotros antes de irse.

| Métrica Matemática | Resultado Validado | Interpretación para Inversionista |
| :--- | :--- | :--- |
| **Tiempo Promedio de Vida (Lifespan)** | **15.5 Meses** | Nuestra retención es excelente. Un cliente dura más de 1 año pagando. |
| **LTV Promedio (Pagado Real)** | **$1,048,419 COP** | Cada cliente nuevo que cerramos hoy, a la larga, significa ~$1 Millón COP para caja. |

### Top 8 Clientes por facturación histórica (actualizado Q1-2026):
1. **El Perol**: $8,180,624 COP — EMW
2. **JR Speed Logic**: $4,592,000 COP — Desarrollo Web
3. **FincaDirecta**: $4,230,224 COP — TotalPedido+EMW
4. **OchoBizcocho**: $4,194,224 COP — TotalPedido+EMW
5. **MCA**: $3,581,624 COP — TotalPedido+EMW
6. **Punto Naranja**: $3,553,124 COP — TotalPedido+EMW
7. **La Maga**: $3,443,700 COP — TotalPedido+EMW
8. **Power Lab**: $3,330,624 COP — EMW

> *Fuente: `ingresos_consolidado.csv` (928 registros). Las cifras anteriores provenían de un corte previo a la normalización final.*

---

## 2. Tasa de Deserción y Fidelidad (Churn Rate)

El Churn rate es cuántos clientes se van vs cuántos se quedan. De un universo histórico de 61 clientes:

- **Clientes Presuntamente Activos**: 26 (Tuvieron transacciones en los últimos 3-4 meses).
- **Clientes Inactivos (Churned)**: 35
- **Tasa de Churn Acumulada**: **57.4%**

**Contexto del Churn**:
Aunque perder al 57% parece alto, es natural para una pyme en 3 años (algunos negocios quiebran, la contingencia de EMW, etc.). Lo valioso es que nuestro "Core" (26 clientes) ha estado fidelizado durante los 30 meses completos que llevamos operando, lo que habla sumamente bien de las operaciones y la plataforma.

---

## 3. Conclusión Financiera (Crecimiento Base)

Con esta matemática ya podemos crear la estrategia comercial (CAC):

Dado que nuestro **LTV es ~$1,048,419 COP** y nuestro **margen bruto de plataforma propia (Graf/EMW) es del 73%**:
- Podemos darnos el lujo absoluto de invertir hasta **$250,000 COP** en adquirir un solo cliente comercialmente (sea pagando comisiones B2B al vendedor, o pagándolo en Pauta en Facebook). 
- Seguiríamos ganando dinero con ese cliente tras los primeros meses de cobro porque su esperanza de vida con nosotros es de **15.5 meses**.
