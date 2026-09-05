---
title: tema 4
---

# 4. Interferencia y Ondas Estacionarias

La interferencia surge de la coexistencia de múltiples perturbaciones ondulatorias en la misma región del espacio y tiempo. Su interacción cinemática y dinámica produce un campo de onda resultante, dando origen a fenómenos como las ondas estacionarias bajo condiciones de frontera restrictivas.

## Interferencia - Principio de superposición

El principio de superposición establece que el desplazamiento resultante de dos o más ondas mecánicas lineales en un punto es la suma algebraica de sus funciones de onda individuales.

$$y(x,t) = \sum_{i=1}^{n} y_i(x,t)$$

Para dos ondas armónicas coherentes de idéntica frecuencia y amplitud, la amplitud resultante $A_R$ es modulada por la diferencia de fase $\Delta\phi$ entre ellas. Ocurre interferencia constructiva máxima cuando $\Delta\phi = 2m\pi$ e interferencia destructiva total cuando $\Delta\phi = (2m+1)\pi$, siendo $m$ un número entero.

$$A_R = 2A \cos\left(\frac{\Delta\phi}{2}\right)$$

$$y_R(x,t) = A_R \sin\left(kx - \omega t + \frac{\phi_1 + \phi_2}{2}\right)$$

## Reflexión - Refracción en ondas

La reflexión ocurre cuando una onda incide sobre una frontera física, retornando su energía al medio de origen. En un extremo rígidamente fijo, la onda reflejada sufre una inversión de fase de $\pi$ radianes; en un extremo libre, la reflexión se produce en fase con la onda incidente.

La refracción es la transmisión de una perturbación ondulatoria hacia un segundo medio con distinta impedancia mecánica. Este fenómeno altera la celeridad y la longitud de onda de la onda transmitida, pero la frecuencia se conserva invariable al depender estrictamente de la fuente. La geometría de refracción obedece la ley de Snell.

$$\frac{\sin(\theta_i)}{v_1} = \frac{\sin(\theta_r)}{v_2}$$

## Ondas estacionarias en una cuerda

Las ondas estacionarias son el resultado de la interferencia continua de dos ondas armónicas idénticas que viajan en sentidos opuestos dentro de un medio confinado. No propagan energía neta a lo largo del medio, sino que establecen un patrón espacial fijo caracterizado por puntos de amplitud nula (nodos) y puntos de amplitud máxima (antinodos).

$$y(x,t) = [2A \sin(kx)] \cos(\omega t)$$

Las condiciones de frontera, como extremos fijos en $x=0$ y $x=L$, imponen una cuantización geométrica que restringe las longitudes de onda y frecuencias permitidas. Esto genera un espectro discreto de modos normales de vibración o armónicos, definidos por el índice de modo $n$.

$$\lambda_n = \frac{2L}{n}$$

$$f_n = n \frac{v}{2L} = n f_1$$

> [!example] Esquema Técnico
> Representación espacial de los tres primeros armónicos ($n=1, 2, 3$) en una cuerda sujeta en ambos extremos, evidenciando las posiciones de los nodos y antinodos geométricos.

**Definición de variables:**

- $y(x,t)$: Desplazamiento mecánico resultante [$\text{m}$]
- $y_i(x,t)$: Función de onda individual [$\text{m}$]
- $y_R(x,t)$: Función de onda armónica superpuesta [$\text{m}$]
- $A$: Amplitud de las ondas componentes [$\text{m}$]
- $A_R$: Amplitud resultante [$\text{m}$]
- $\Delta\phi$: Diferencia de fase [$\text{rad}$]
- $m$: Número entero para condición de interferencia [Adimensional]
- $k$: Número de onda angular [$\text{rad/m}$]
- $\omega$: Frecuencia angular [$\text{rad/s}$]
- $\phi_1, \phi_2$: Constantes de fase iniciales [$\text{rad}$]
- $\theta_i$: Ángulo de incidencia respecto a la normal [$\text{rad}$]
- $\theta_r$: Ángulo de refracción respecto a la normal [$\text{rad}$]
- $v_1, v_2$: Velocidades de fase en el medio 1 y 2 [$\text{m/s}$]
- $x$: Coordenada espacial a lo largo de la cuerda [$\text{m}$]
- $t$: Tiempo [$\text{s}$]
- $L$: Longitud total de la cuerda confinada [$\text{m}$]
- $\lambda_n$: Longitud de onda del modo normal $n$ [$\text{m}$]
- $f_n$: Frecuencia del armónico $n$ [$\text{Hz}$]
- $f_1$: Frecuencia fundamental o primer armónico [$\text{Hz}$]
- $n$: Número de modo normal o armónico ($1, 2, 3, \dots$) [Adimensional]
- $v$: Celeridad de onda en el medio material [$\text{m/s}$]
