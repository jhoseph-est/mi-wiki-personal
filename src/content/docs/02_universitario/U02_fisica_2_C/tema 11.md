---
title: tema 11
---

# 11. Gases Ideales y Primera Ley de la Termodinámica

## Gases ideales; leyes de los gases ideales

Un gas ideal es un modelo termodinámico límite compuesto por partículas puntuales que no ejercen fuerzas intermoleculares a distancia, interactuando únicamente mediante colisiones perfectamente elásticas. Su estado macroscópico de equilibrio se rige por la ecuación de estado que sintetiza analíticamente las relaciones empíricas de Boyle-Mariotte, Charles y Gay-Lussac.

$$P V = n R T = N k_B T$$

## Teoría cinética de los gases

Vincula la termodinámica macroscópica con la mecánica estadística de las partículas constituyentes. La presión sobre las fronteras del volumen de control es el resultado macroscópico de la tasa de transferencia de momento lineal por colisiones elásticas. La temperatura absoluta es una medida escalar directamente proporcional a la energía cinética traslacional promedio por molécula.

$$P = \frac{1}{3} \frac{N m}{V} v_{rms}^2$$

$$\bar{K} = \frac{3}{2} k_B T$$

## Energía interna de un gas ideal: monoatómico, diatómico, poliatómico

La energía interna total de un gas ideal depende exclusivamente de su temperatura termodinámica, postulada por el teorema de equipartición de la energía que asigna $\frac{1}{2} k_B T$ de energía por cada grado de libertad $f$. Las moléculas monoatómicas poseen 3 grados traslacionales ($f=3$); las diatómicas suman 2 rotacionales a temperatura ambiente ($f=5$); y las poliatómicas añaden grados rotacionales adicionales e incluso vibracionales a altas temperaturas ($f \ge 6$).

$$U = \frac{f}{2} n R T$$

## Primera Ley de la Termodinámica para un sistema termodinámico cerrado

Constituye la formulación termodinámica del principio de conservación de la energía macroscópica. Establece que la variación de la energía interna de un sistema cerrado durante cualquier proceso politrópico es el balance algebraico exacto entre el calor neto absorbido por el sistema y el trabajo mecánico realizado por el sistema sobre su entorno.

$$\Delta U = Q - W$$

## Trabajo de la sustancia

El trabajo termodinámico cuasiestático de expansión o compresión volumétrica de frontera móvil se define como la integral de línea de la presión absoluta interna respecto al diferencial de volumen. Es una función de trayectoria, por lo que su magnitud depende críticamente de la ruta termodinámica seguida en el espacio de estados.

$$W = \int_{V_1}^{V_2} P \, dV$$

## Primera Ley de la Termodinámica para un ciclo termodinámico

Al completar un ciclo termodinámico cerrado, el sistema retorna a su estado macroscópico inicial, implicando que el cambio neto de cualquier función de estado exacta, como la energía interna o la entalpía, es rigurosamente nulo. Consecuentemente, el trabajo neto entregado por el ciclo es mecánicamente equivalente al flujo neto de calor absorbido en el proceso.

$$\oint dU = 0 \implies Q_{neto} = W_{neto}$$

## Capacidad calorífica molar de un gas ideal

Cuantifica la entalpía o energía interna requerida para elevar un Kelvin la temperatura de un mol de gas. La relación de Mayer dicta que la diferencia analítica entre la capacidad calorífica molar isobárica ($C_p$) y la isocórica ($C_v$) es igual a la constante universal de los gases ideales.

$$C_v = \frac{f}{2} R \quad ; \quad C_p = C_v + R$$

$$\gamma = \frac{C_p}{C_v} = 1 + \frac{2}{f}$$

## Procesos termodinámicos con gases ideales: a volumen constante, a presión constante, isotérmico, adiabático

En un proceso isocórico ($V = \text{cte}$), el trabajo volumétrico es nulo, y el flujo térmico altera directamente la energía interna. En un proceso isobárico ($P = \text{cte}$), el sistema realiza trabajo acoplado a la variación de volumen.

$$W_{isocorico} = 0 \implies Q = \Delta U = n C_v \Delta T$$

$$W_{isobarico} = P \Delta V \implies Q = n C_p \Delta T$$

En un proceso isotérmico ($T = \text{cte}$), la variación de energía interna es nula, igualando todo el calor absorbido al trabajo logarítmico de expansión. Un proceso adiabático ($Q = 0$) prohíbe el intercambio térmico con el entorno, variando su temperatura exclusivamente por el trabajo mecánico bajo la restricción del índice politrópico $\gamma$.

$$W_{isotermico} = n R T \ln\left(\frac{V_2}{V_1}\right) \implies Q = W$$

$$P V^\gamma = \text{cte} \implies W_{adiabatico} = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1} = -\Delta U$$

> [!example] Esquema Técnico
> Diagrama termodinámico $P-V$ superponiendo las cuatro trayectorias de procesos fundamentales desde un estado de inicio común, destacando la mayor pendiente asintótica de la curva adiabática frente a la isotérmica.

---

**Definición de variables:**

- $P$: Presión absoluta termodinámica del gas [$\text{Pa}$]
- $V$: Volumen espacial confinado [$\text{m}^3$]
- $n$: Número de moles de la sustancia [$\text{mol}$]
- $R$: Constante universal de los gases ideales ($8.314 \text{ J/(mol}\cdot\text{K)}$) [$\text{J/(mol}\cdot\text{K)}$]
- $T$: Temperatura termodinámica absoluta [$\text{K}$]
- $N$: Número microscópico total de partículas o moléculas [Adimensional]
- $k_B$: Constante física de Boltzmann ($1.38 \times 10^{-23} \text{ J/K}$) [$\text{J/K}$]
- $m$: Masa inercial de una molécula individual [$\text{kg}$]
- $v_{rms}$: Velocidad cuadrática media molecular [$\text{m/s}$]
- $\bar{K}$: Energía cinética traslacional promedio molecular [$\text{J}$]
- $U$: Energía interna macroscópica del sistema [$\text{J}$]
- $f$: Grados de libertad moleculares activos [Adimensional]
- $\Delta U$: Variación de estado de la energía interna [$\text{J}$]
- $Q$: Calor neto transferido o absorbido por el volumen de control [$\text{J}$]
- $W$: Trabajo mecánico politrópico realizado por el sistema [$\text{J}$]
- $V_1, V_2$: Volúmenes termodinámicos inicial y final [$\text{m}^3$]
- $Q_{neto}$: Intercambio calórico total algebraico del ciclo [$\text{J}$]
- $W_{neto}$: Trabajo mecánico útil total del ciclo cerrado [$\text{J}$]
- $C_v$: Capacidad calorífica molar a volumen inercial constante [$\text{J/(mol}\cdot\text{K)}$]
- $C_p$: Capacidad calorífica molar a presión estática constante [$\text{J/(mol}\cdot\text{K)}$]
- $\gamma$: Índice de expansión termodinámico o coeficiente adiabático [Adimensional]
- $\Delta T$: Diferencial temporal del gradiente absoluto de temperatura [$\text{K}$]
- $\Delta V$: Desplazamiento de frontera de la capacidad volumétrica [$\text{m}^3$]
- $P_1, P_2$: Presiones absolutas operativas en los estados de inicio y fin [$\text{Pa}$]