---
title: tema 5
---

# 5. Sonido

## Onda de sonido

Una onda de sonido es una perturbación mecánica longitudinal que se propaga a través de medios elásticos compresibles (sólidos, líquidos o gases). El movimiento de las partículas del medio es paralelo a la dirección de propagación de la energía, generando regiones alternas de compresión y rarefacción. La cinemática de la onda armónica se modela mediante una función de desplazamiento longitudinal.

$$s(x,t) = s_{max} \cos(kx - \omega t)$$

## Rapidez de sonido

La celeridad de propagación acústica está determinada por la inercia del medio y su resistencia a la compresión elástica. En un medio fluido estacionario, depende del módulo de compresibilidad volumétrica y la densidad volumétrica.

$$v = \sqrt{\frac{B}{\rho}}$$

Para un gas ideal bajo procesos termodinámicos adiabáticos, la rapidez del sonido es función exclusiva de la temperatura absoluta y las propiedades moleculares del gas.

$$v = \sqrt{\frac{\gamma R T}{M}}$$

## Intensidad de una onda

La intensidad acústica define la tasa temporal promediada de transferencia de energía mecánica por unidad de área transversal a la dirección de propagación. Es directamente proporcional a la densidad del medio, la celeridad de la onda y al cuadrado de la amplitud de desplazamiento y la frecuencia angular.

$$I = \frac{P_{med}}{A} = \frac{1}{2} \rho v \omega^2 s_{max}^2$$

Para una fuente sonora puntual que emite ondas esféricas en un medio isotrópico y no disipativo, la intensidad decae según la ley de la inversa del cuadrado de la distancia radial.

$$I = \frac{P_s}{4\pi r^2}$$

## Nivel de intensidad de la onda de sonido audible

Dado el amplio rango dinámico del sistema auditivo humano, se emplea una escala logarítmica base 10 para cuantificar la percepción de la intensidad. Se mide en decibelios ($\text{dB}$) y toma como referencia el umbral estándar de audición humana, fijado en $10^{-12} \text{ W/m}^2$.

$$\beta = 10 \log_{10}\left(\frac{I}{I_0}\right)$$

## Descripción de la onda de sonido en un gas con la presión

El gradiente de desplazamiento longitudinal induce fluctuaciones dinámicas locales en la presión del gas respecto a su presión de equilibrio. La onda de presión resultante presenta un desfase espacial y temporal de $\pi/2$ radianes respecto a la onda de desplazamiento.

$$\Delta P(x,t) = -B \frac{\partial s}{\partial x}$$

$$\Delta P(x,t) = \Delta P_{max} \sin(kx - \omega t)$$

La amplitud máxima de presión es directamente proporcional a la amplitud de desplazamiento y a la impedancia acústica del medio fluido.

$$\Delta P_{max} = B k s_{max} = \rho v \omega s_{max}$$

## Efecto Doppler

El Efecto Doppler acústico es el cambio aparente en la frecuencia detectada debido al movimiento relativo a lo largo de la línea de visión entre la fuente emisora y el observador. La ecuación general asume un convenio de signos geométrico dependiente de la dirección de los vectores de velocidad respecto al eje de propagación.

$$f' = f \left( \frac{v \pm v_o}{v \mp v_s} \right)$$

El signo superior en el numerador y denominador corresponde a un acercamiento relativo (incremento de frecuencia observada), mientras que el signo inferior indica alejamiento (decremento de frecuencia observada).

## Onda de choque

Una onda de choque se genera cuando la celeridad de la fuente sonora supera la rapidez de propagación del sonido en el medio fluido de acogida. La interferencia constructiva asimétrica de los frentes de onda esféricos emitidos conforma un cono de Mach tridimensional.

$$\sin(\alpha) = \frac{v}{v_s} = \frac{1}{M_a}$$

El ángulo del vértice del cono está dictado por el número de Mach del móvil supersónico. Toda la energía acústica disipada se concentra altamente en la envolvente cónica, produciendo un incremento discontinuo de presión.

> [!example] Esquema Técnico
> Representación geométrica de los frentes de onda esféricos no concéntricos generando la envolvente cónica tangencial (onda de choque) bajo condición $v_s > v$.

---

**Definición de variables:**

- $s(x,t)$: Desplazamiento longitudinal instantáneo de la partícula [$\text{m}$]
- $s_{max}$: Amplitud máxima de desplazamiento [$\text{m}$]
- $x$: Coordenada de posición en la dirección de propagación [$\text{m}$]
- $t$: Tiempo [$\text{s}$]
- $k$: Número de onda angular [$\text{rad/m}$]
- $\omega$: Frecuencia angular [$\text{rad/s}$]
- $v$: Rapidez de propagación de la onda de sonido en el medio [$\text{m/s}$]
- $B$: Módulo de compresibilidad volumétrica (Bulk modulus) [$\text{Pa}$]
- $\rho$: Densidad volumétrica del medio material [$\text{kg/m}^3$]
- $\gamma$: Coeficiente de dilatación adiabática (Índice adiabático) [Adimensional]
- $R$: Constante universal de los gases ideales [$\text{J/(mol} \cdot \text{K)}$]
- $T$: Temperatura termodinámica absoluta [$\text{K}$]
- $M$: Masa molar del gas [$\text{kg/mol}$]
- $I$: Intensidad acústica en un punto [$\text{W/m}^2$]
- $P_{med}$: Potencia acústica media [$\text{W}$]
- $A$: Área de la sección transversal [$\text{m}^2$]
- $P_s$: Potencia acústica de la fuente emisora puntual [$\text{W}$]
- $r$: Distancia radial desde la fuente puntual [$\text{m}$]
- $\beta$: Nivel de intensidad sonora [$\text{dB}$]
- $I_0$: Intensidad umbral estándar de audición ($10^{-12} \text{ W/m}^2$) [$\text{W/m}^2$]
- $\Delta P(x,t)$: Variación acústica de presión instantánea [$\text{Pa}$]
- $\Delta P_{max}$: Amplitud máxima de fluctuación de presión [$\text{Pa}$]
- $f'$: Frecuencia observada o aparente [$\text{Hz}$]
- $f$: Frecuencia real emitida por la fuente sonora [$\text{Hz}$]
- $v_o$: Velocidad lineal del observador receptor [$\text{m/s}$]
- $v_s$: Velocidad lineal de la fuente sonora emisora [$\text{m/s}$]
- $\alpha$: Ángulo del vértice del cono de Mach [$\text{rad}$]
- $M_a$: Número de Mach (adimensional, razón $v_s/v$) [Adimensional]