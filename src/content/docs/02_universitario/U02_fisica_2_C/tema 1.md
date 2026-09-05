---
title: tema 1
---

# 1. Movimiento Armónico Simple (M.A.S.)

El Movimiento Armónico Simple es un movimiento periódico y oscilatorio en ausencia de fricción, producido por una fuerza restauradora directamente proporcional al desplazamiento. Cumple la ley de Hooke y se rige por una ecuación diferencial lineal homogénea de segundo orden.

$$\frac{d^2x}{dt^2} + \omega^2 x = 0$$

## Cinemática y energía en el M.A.S.

La cinemática del M.A.S. se describe mediante funciones armónicas dependientes del tiempo. La posición, velocidad y aceleración presentan desfases de $\pi/2$ radianes entre sí.

$$x(t) = A \cos(\omega t + \phi)$$

$$v(t) = \frac{dx}{dt} = -A \omega \sin(\omega t + \phi)$$

$$a(t) = \frac{dv}{dt} = -A \omega^2 \cos(\omega t + \phi) = -\omega^2 x$$

El sistema es conservativo; la energía mecánica total permanece constante. Existe una transferencia continua entre energía cinética y potencial elástica en función de la posición.

$$E_k = \frac{1}{2} m v^2 = \frac{1}{2} m \omega^2 A^2 \sin^2(\omega t + \phi)$$

$$E_p = \frac{1}{2} k x^2 = \frac{1}{2} m \omega^2 A^2 \cos^2(\omega t + \phi)$$

$$E = E_k + E_p = \frac{1}{2} k A^2$$

> [!example] Esquema Técnico
> Gráfica de energía cinética, potencial y mecánica total frente a la posición $x$ en el dominio $[-A, A]$.

## Otros casos de M.A.S.

Los sistemas masa-resorte orientados verticalmente o en planos inclinados mantienen la naturaleza del M.A.S. La fuerza gravitatoria introduce un desplazamiento constante en la posición de equilibrio estático, pero no altera la frecuencia angular.

$$\Delta x_{eq} = \frac{mg \sin(\alpha)}{k}$$

La frecuencia angular depende exclusivamente de las propiedades inerciales y elásticas del sistema.

$$\omega = \sqrt{\frac{k}{m}}$$

## Péndulo simple

Un péndulo simple consiste en una masa puntual suspendida de un hilo inextensible de masa despreciable. Ejecuta un M.A.S. estrictamente bajo la aproximación de ángulos pequeños, donde $\sin(\theta) \approx \theta$.

$$\frac{d^2\theta}{dt^2} + \frac{g}{L} \theta = 0$$

La frecuencia angular y el periodo son independientes de la masa del cuerpo suspendido, dependiendo únicamente de la longitud del hilo y la aceleración de la gravedad local.

$$\omega = \sqrt{\frac{g}{L}}$$

$$T = 2\pi \sqrt{\frac{L}{g}}$$

> [!example] Esquema Técnico
> 
> Diagrama de cuerpo libre de una masa pendular desplazada un ángulo $\theta$, mostrando las componentes tangencial y radial del peso.

## Péndulo físico

Un péndulo físico es cualquier cuerpo rígido que oscila alrededor de un eje fijo que no pasa por su centro de masa. El torque restaurador es generado por la fuerza de gravedad actuando sobre el centro de masa del cuerpo.

$$\frac{d^2\theta}{dt^2} + \frac{mgd}{I} \theta = 0$$

Las propiedades oscilatorias dependen del momento de inercia del cuerpo respecto al eje de rotación y la distancia entre dicho eje y el centro de masa.

$$\omega = \sqrt{\frac{mgd}{I}}$$

$$T = 2\pi \sqrt{\frac{I}{mgd}}$$

## Péndulo de torsión

Un péndulo de torsión está compuesto por un cuerpo rígido suspendido de un alambre o fibra que ejerce un torque restaurador proporcional al desplazamiento angular. Cumple la ley de Hooke para torsión.

$$\tau = -\kappa \theta$$

$$\frac{d^2\theta}{dt^2} + \frac{\kappa}{I} \theta = 0$$

La frecuencia y el periodo están dictados por la constante de torsión del alambre y el momento de inercia del cuerpo suspendido.

$$\omega = \sqrt{\frac{\kappa}{I}}$$

$$T = 2\pi \sqrt{\frac{I}{\kappa}}$$

**Definición de variables:**

- $x$: Posición o desplazamiento lineal [$\text{m}$]
- $t$: Tiempo [$\text{s}$]
- $\omega$: Frecuencia angular [$\text{rad/s}$]
- $A$: Amplitud máxima [$\text{m}$]
- $\phi$: Fase inicial o constante de fase [$\text{rad}$]
- $v$: Velocidad lineal [$\text{m/s}$]
- $a$: Aceleración lineal [$\text{m/s}^2$]
- $E_k$: Energía cinética [$\text{J}$]
- $E_p$: Energía potencial elástica [$\text{J}$]
- $E$: Energía mecánica total [$\text{J}$]
- $m$: Masa [$\text{kg}$]
- $k$: Constante elástica del resorte [$\text{N/m}$]
- $\Delta x_{eq}$: Desplazamiento del punto de equilibrio [$\text{m}$]
- $g$: Aceleración de la gravedad [$\text{m/s}^2$]
- $\alpha$: Ángulo de inclinación del plano [$\text{rad}$]
- $\theta$: Desplazamiento angular [$\text{rad}$]
- $L$: Longitud del péndulo simple [$\text{m}$]
- $T$: Periodo de oscilación [$\text{s}$]
- $d$: Distancia del centro de masa al eje de rotación [$\text{m}$]
- $I$: Momento de inercia [$\text{kg} \cdot \text{m}^2$]
- $\tau$: Torque mecánico [$\text{N} \cdot \text{m}$]
- $\kappa$: Constante de torsión [$\text{N} \cdot \text{m/rad}$]

