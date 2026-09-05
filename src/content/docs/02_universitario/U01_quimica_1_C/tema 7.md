---
title: Soluciones líquidas y propiedades
---
## Introducción

Una solución es una mezcla homogénea a nivel molecular o iónico de dos o más sustancias que no reaccionan entre sí. La fase que se encuentra en mayor proporción y conserva su estado de agregación se denomina disolvente (o solvente), mientras que los componentes presentes en menor cantidad se denominan solutos. En las soluciones líquidas, el comportamiento físico y químico está determinado no solo por la naturaleza de los componentes, sino por las interacciones intermoleculares que surgen durante la mezcla. El estudio de estas interacciones es crítico para procesos de separación industrial, como la destilación, y para la comprensión de fenómenos biológicos fundamentales como la ósmosis.

---

## Definición. Solubilidad. Procesos de disolución. Expresiones de la concentración. Soluciones ideales.

### Solubilidad y Proceso de Disolución

La solubilidad es la cantidad máxima de soluto que puede disolverse en una cantidad dada de disolvente a una temperatura y presión específicas. El proceso de disolución involucra tres etapas energéticas:

1. **Separación de las moléculas del soluto** ($\Delta H_1 > 0$): Endotérmico.
    
2. **Separación de las moléculas del disolvente** ($\Delta H_2 > 0$): Endotérmico.
    
3. **Interacción soluto-disolvente** ($\Delta H_3 < 0$): Exotérmico (Solvatación).
    

La entalpía de disolución es $\Delta H_{dis} = \Delta H_1 + \Delta H_2 + \Delta H_3$. Una solución se formará espontáneamente si el cambio en la energía libre de Gibbs ($\Delta G = \Delta H - T\Delta S$) es negativo.

### Expresiones de la Concentración

La cuantificación de soluciones requiere unidades precisas:

- **Molaridad ($M$):** $\text{moles de soluto} / \text{litros de solución}$.
    
- **Molalidad ($m$):** $\text{moles de soluto} / \text{kg de disolvente}$.
    
- **Fracción Molar ($x_i$):** $n_i / n_{tot}$.
    
- **Partes por millón (ppm):** $(\text{mg de soluto} / \text{kg o L de solución})$.
    

### Soluciones Ideales

Una solución es ideal si las fuerzas intermoleculares entre partículas $A-A$, $B-B$ y $A-B$ son idénticas. En este caso, $\Delta H_{dis} = 0$ y el volumen total es la suma de los volúmenes individuales ($\Delta V_{mix} = 0$).

## Propiedades coligativas.

Las propiedades coligativas dependen exclusivamente del **número** de partículas de soluto presentes en la solución y no de su naturaleza química.

1. **Descenso de la presión de vapor (Ley de Raoult):** La presión de vapor de la solución ($P_s$) es menor que la del disolvente puro ($P_1^\circ$):
    
    $$P_s = x_1 P_1^\circ$$
    
2. **Aumento ebulloscópico ($\Delta T_b$):** La temperatura de ebullición de la solución es mayor que la del disolvente puro:
    
    $$\Delta T_b = K_b \cdot m \cdot i$$
    
3. **Descenso crioscópico ($\Delta T_f$):** La temperatura de congelación disminuye al añadir un soluto:
    
    $$\Delta T_f = K_f \cdot m \cdot i$$
    
4. **Presión Osmótica ($\Pi$):** Presión necesaria para detener el flujo de disolvente a través de una membrana semipermeable hacia la solución más concentrada:
    
    $$\Pi = M \cdot R \cdot T \cdot i$$
    

Donde $i$ es el factor de van't Hoff, $K_b$ y $K_f$ son las constantes ebulloscópica y crioscópica del disolvente, respectivamente.

## Electrolitos.

Los electrolitos son sustancias que, al disolverse en agua, se disocian en iones, permitiendo la conducción de corriente eléctrica.

- **Electrolitos Fuertes:** Se disocian al 100% (sales solubles, ácidos fuertes como $HCl$).
    
- **Electrolitos Débiles:** Se disocian parcialmente, estableciendo un equilibrio químico (ácidos débiles como $CH_3COOH$).
    
- **Factor de van't Hoff ($i$):** Representa el número de partículas producidas por unidad de fórmula. Para el $NaCl$, $i \approx 2$; para el $Na_2SO_4$, $i \approx 3$. En soluciones reales, $i$ suele ser menor debido a la formación de pares iónicos.
    

## Soluciones con dos componentes líquidos volátiles. Ley de Raoult.

Cuando ambos componentes ($A$ y $B$) de una solución son volátiles, la presión de vapor total ($P_T$) es la suma de las presiones parciales:

$$P_T = P_A + P_B = x_A P_A^\circ + x_B P_B^\circ$$

Si la solución muestra desviaciones positivas de la Ley de Raoult (fuerzas $A-B$ débiles), la presión es mayor a la ideal. Si muestra desviaciones negativas (fuerzas $A-B$ fuertes), es menor.

## Ley de Henry. Líquidos no miscibles.

### Ley de Henry

Establece que la solubilidad de un gas en un líquido ($C_g$) es directamente proporcional a la presión parcial del gas ($P_g$) sobre el líquido:

$$C_g = k_H \cdot P_g$$

Donde $k_H$ es la constante de la Ley de Henry. Esta ley explica por qué los refrescos carbonatados liberan $CO_2$ al abrirse (disminución de presión) y la enfermedad por descompresión en buzos.

### Líquidos no miscibles

Cuando dos líquidos no se mezclan (como agua y aceite), cada uno ejerce su propia presión de vapor de forma independiente. La presión total es simplemente la suma de las presiones de vapor de los componentes puros:

$$P_T = P_A^\circ + P_B^\circ$$

Este fenómeno es la base de la **destilación por arrastre de vapor**, permitiendo destilar sustancias con altos puntos de ebullición a temperaturas inferiores a $100$ °C.

> [!example] foto
> 
> [Diagrama de un proceso de ósmosis. Debe mostrar dos compartimentos separados por una membrana semipermeable, uno con agua pura y otro con una solución acuosa. Se debe ilustrar la dirección del flujo de agua, el aumento del nivel del líquido en el lado de la solución y la aplicación de presión mecánica ($\Pi$) para alcanzar el equilibrio].
