---
title: tema 6
---

# 6. Hidrostática

## Definición de fluido

Un fluido es un medio material continuo que sufre una deformación irreversible y constante al ser sometido a un esfuerzo cortante tangencial, sin importar su magnitud. Esta categoría física engloba líquidos y gases, sistemas que carecen de forma macroscópica propia y se adaptan a las fronteras sólidas de su contorno. En el régimen puramente hidrostático, los esfuerzos cortantes son estrictamente nulos.

$$\tau = 0$$

## Densidad relativa

La densidad relativa o gravedad específica es un escalar adimensional que establece la razón matemática entre la densidad volumétrica de una sustancia y la densidad de un fluido de referencia. Para líquidos y sólidos, el estándar universal termodinámico es el agua pura a $4^\circ\text{C}$ y $1 \text{ atm}$.

$$SG = \frac{\rho}{\rho_{H_2O}}$$

## Peso específico

El peso específico cuantifica el peso físico de una sustancia homogénea por unidad de volumen ocupado. Se define operativamente como el producto escalar de la densidad volumétrica del material y la aceleración del campo gravitatorio local.

$$\gamma = \frac{W}{V} = \rho g$$

## Presión

La presión mecánica en un fluido estático es un escalar definido como la magnitud de la fuerza normal neta ejercida sobre un elemento diferencial de área superficial. Por el principio de Pascal, en un punto determinado, este esfuerzo normal actúa de forma isótropa en todas las direcciones.

$$P = \frac{dF_{\perp}}{dA}$$

## Presión atmosférica

La presión atmosférica es la presión hidrostática generada por el peso de la columna de masa gaseosa de la atmósfera terrestre sobre una superficie dada. Su magnitud termodinámica de referencia a nivel medio del mar establece el valor de la atmósfera estándar.

$$P_{atm} = 101325 \text{ Pa}$$

## Variación de la presión en un fluido en reposo

La ecuación fundamental de la hidrostática modela el gradiente de presión vertical en un fluido incompresible en equilibrio estático bajo un campo gravitatorio uniforme. La diferencia de presión estática entre dos cotas es directamente proporcional a la densidad del fluido y la profundidad $h$.

$$\frac{dP}{dz} = -\rho g$$

$$\Delta P = \rho g h$$

> [!example] Esquema Técnico
> 
> Diagrama de cuerpo libre de un elemento diferencial de fluido estático, evidenciando el equilibrio mecánico de fuerzas inducidas por el gradiente de presión y la gravedad.

## Principio de Arquímedes

Todo cuerpo sólido total o parcialmente sumergido en un fluido estático experimenta una fuerza de sustentación vertical inducida por la asimetría del campo de presiones. Esta fuerza de empuje $E$ se opone al peso del cuerpo y su magnitud es matemáticamente equivalente al peso del volumen del fluido desplazado.

$$E = \rho_f g V_d$$

## Principio de Pascal

Cualquier incremento de presión mecánica estática aplicado a un fluido confinado e incompresible se transmite de forma instantánea y sin atenuación a todos los puntos geométricos del fluido y a las paredes del recipiente. Este principio rige el mecanismo de amplificación de fuerza en los sistemas de transmisión hidráulica.

$$\Delta P_1 = \Delta P_2 \implies \frac{F_1}{A_1} = \frac{F_2}{A_2}$$

> [!example] Esquema Técnico
> 
> Representación geométrica transversal de una prensa hidráulica, acotando las áreas de las secciones transversales $A_1$ y $A_2$ de los émbolos, y los vectores de fuerza $F_1$ y $F_2$ correspondientes al equilibrio.

**Definición de variables:**

- $\tau$: Esfuerzo cortante tangencial [$\text{Pa}$]
- $SG$: Densidad relativa o gravedad específica [Adimensional]
- $\rho$: Densidad volumétrica absoluta del medio [$\text{kg/m}^3$]
- $\rho_{H_2O}$: Densidad volumétrica del agua a $4^\circ\text{C}$ ($1000 \text{ kg/m}^3$) [$\text{kg/m}^3$]
- $\gamma$: Peso específico [$\text{N/m}^3$]
- $W$: Peso de la sustancia geométrica [$\text{N}$]
- $V$: Volumen espacial ocupado [$\text{m}^3$]
- $g$: Aceleración local de la gravedad [$\text{m/s}^2$]
- $P$: Presión hidrostática absoluta [$\text{Pa}$]
- $dF_{\perp}$: Diferencial de fuerza perpendicular [$\text{N}$]
- $dA$: Diferencial de área superficial geométrica [$\text{m}^2$]
- $P_{atm}$: Presión atmosférica física estándar [$\text{Pa}$]
- $z$: Coordenada de elevación vertical respecto a una referencia [$\text{m}$]
- $\Delta P$: Diferencial o salto de presión [$\text{Pa}$]
- $h$: Distancia vertical entre dos planos isobaros (profundidad) [$\text{m}$]
- $E$: Fuerza neta de empuje hidrostático [$\text{N}$]
- $\rho_f$: Densidad volumétrica del fluido circundante [$\text{kg/m}^3$]
- $V_d$: Volumen físico de fluido desplazado [$\text{m}^3$]
- $F_1, F_2$: Fuerzas mecánicas aplicadas perpendicularmente sobre las interfaces [$\text{N}$]
- $A_1, A_2$: Áreas geométricas de las secciones transversales [$\text{m}^2$]
