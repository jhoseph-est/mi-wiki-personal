---
title: tema 3
---

# 3. Ondas Mecánicas

Las ondas mecánicas consisten en la propagación de una perturbación a través de un medio material continuo y deformable. Este fenómeno transfiere energía y momento lineal desde la fuente hacia el medio sin implicar un transporte neto de masa.

## Onda mecánica

La existencia de una onda mecánica requiere una perturbación inicial, un medio físico y fuerzas de interacción interatómicas o intermoleculares que actúen como mecanismo de acoplamiento. Se clasifican cinemáticamente, según la relación entre la dirección de propagación y la dirección del desplazamiento del medio, en transversales o longitudinales. La celeridad de la onda depende intrínsecamente de las propiedades inerciales y elásticas del medio.

$$v = \sqrt{\frac{\text{Propiedad elástica}}{\text{Propiedad inercial}}}$$

## Función de onda unidimensional

Representa el estado de perturbación del medio, definiendo el desplazamiento de una partícula en la coordenada $x$ durante el instante $t$. Para una onda armónica progresiva viajando en la dirección positiva del eje $x$, el perfil de la onda se modela mediante una función trigonométrica.

$$y(x,t) = A \cos(kx - \omega t + \phi)$$

Los parámetros espaciales y temporales se vinculan mediante el número de onda angular $k$ y la frecuencia angular $\omega$. La velocidad de fase $v$ establece la relación de dispersión lineal fundamental del medio material.

$$k = \frac{2\pi}{\lambda}$$

$$v = \frac{\omega}{k} = \lambda f$$

> [!example] Esquema Técnico
> Gráfica espacial $y(x)$ de una onda armónica en un instante $t$ fijo, acotando la amplitud máxima $A$ y la longitud de onda $\lambda$ entre dos crestas consecutivas.

## Ecuación diferencial de onda unidimensional

Es una ecuación diferencial en derivadas parciales, lineal y de segundo orden, que rige la cinemática de cualquier perturbación mecánica en un medio unidimensional no dispersivo. Surge directamente de la aplicación de la Segunda Ley de Newton a un elemento de volumen infinitesimal del medio elástico.

$$\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2}$$

El principio de d'Alembert establece que cualquier función doblemente diferenciable cuyo argumento sea de la forma $(x \pm vt)$ constituye una solución matemática válida. Esto representa perfiles de onda que se trasladan con velocidad constante $v$ sin alterar su forma.

## Potencia transmitida por una onda

Cuantifica la tasa temporal de flujo de energía mecánica a través de una sección transversal del medio durante la propagación de la onda. En el caso específico de una cuerda bajo tensión transversal $F_T$, la potencia instantánea es el producto de la componente transversal de la fuerza y la velocidad transversal de la partícula en ese punto.

$$P(x,t) = -F_T \frac{\partial y}{\partial x} \frac{\partial y}{\partial t}$$

Para una onda armónica continua, la magnitud de interés analítico es la potencia media transferida por ciclo de oscilación. Esta transferencia energética es directamente proporcional a la densidad lineal de masa del medio, la celeridad de la onda, y al cuadrado de la amplitud y frecuencia angular.

$$P_{med} = \frac{1}{2} \mu v \omega^2 A^2$$

**Definición de variables:**

- $v$: Velocidad de fase o celeridad de propagación [$\text{m/s}$]
- $y(x,t)$: Desplazamiento de la partícula en la posición $x$ y tiempo $t$ [$\text{m}$]
- $x$: Coordenada de posición a lo largo de la dirección de propagación [$\text{m}$]
- $t$: Tiempo [$\text{s}$]
- $A$: Amplitud máxima de la perturbación [$\text{m}$]
- $k$: Número de onda angular [$\text{rad/m}$]
- $\omega$: Frecuencia angular [$\text{rad/s}$]
- $\phi$: Constante de fase inicial [$\text{rad}$]
- $\lambda$: Longitud de onda [$\text{m}$]
- $f$: Frecuencia cíclica u ordinaria [$\text{Hz}$]
- $P(x,t)$: Potencia instantánea transmitida [$\text{W}$]
- $F_T$: Fuerza de tensión en el medio unidimensional [$\text{N}$]
- $P_{med}$: Potencia media transmitida por ciclo [$\text{W}$]
- $\mu$: Densidad lineal de masa del medio elástico [$\text{kg/m}$]
