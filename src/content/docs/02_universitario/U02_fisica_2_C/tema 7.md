---
title: tema 7
---

# 7. Fluidos en Reposo y en Movimiento

El estudio de la mecánica de fluidos abarca tanto el equilibrio hidrostático bajo fuerzas conservativas o de inercia, como la dinámica de fluidos reales donde intervienen fenómenos de superficie y fricción interna debido a la viscosidad.

## Presión y fuerza sobre un área plana sumergida

La magnitud de la fuerza hidrostática resultante sobre una superficie plana sumergida es equivalente al producto de la presión en su centroide geométrico y el área total de la superficie. Esta fuerza resultante no actúa en el centroide, sino en el centro de presión, ubicado a una mayor profundidad debido al gradiente lineal de presión.

$$F_R = P_c A = \rho g h_c A$$

La coordenada del centro de presión se determina mediante el teorema de ejes paralelos, sumando al centroide un término dependiente del momento de inercia del área.

$$y_p = y_c + \frac{I_{xc}}{y_c A}$$

> [!example] Esquema Técnico
> Diagrama de una compuerta plana sumergida ilustrando la distribución de presiones trapezoidal, la ubicación del centroide geométrico y el vector de fuerza resultante en el centro de presión.

## Presión y fluidos sometidos a aceleración constante

Un fluido contenido en un recipiente que se mueve con aceleración lineal constante alcanza un estado de equilibrio relativo donde no existen esfuerzos cortantes internos. El fluido se comporta cinemáticamente como un cuerpo rígido, y la ecuación general de la hidrostática incorpora las fuerzas de inercia.

$$\nabla P = \rho(\vec{g} - \vec{a})$$

Las superficies isobáricas dejan de ser estrictamente horizontales para adoptar una inclinación constante respecto a la horizontal, dependiente de las componentes de la aceleración del sistema.

$$\tan(\theta) = \frac{a_x}{g + a_z}$$

## Tensión superficial

La tensión superficial es la energía mecánica necesaria para incrementar el área superficial de un líquido por unidad de área, originada por el desequilibrio de fuerzas cohesivas intermoleculares en la interfaz líquido-gas. Macroscópicamente, se modela como una fuerza de tracción distribuida a lo largo de una línea geométrica.

$$\sigma = \frac{F}{L}$$

Esta propiedad genera un salto de presión estática a través de interfaces curvas, modelado por la ecuación de Laplace para una gota esférica o burbuja.

$$\Delta P = \frac{2\sigma}{R}$$

## Capilaridad

La capilaridad es el fenómeno de elevación o depresión del menisco de un líquido confinado en un tubo de diámetro milimétrico. Resulta de la competencia termodinámica entre las fuerzas cohesivas del fluido y las fuerzas adhesivas entre el fluido y la pared sólida.

$$h = \frac{2\sigma \cos(\theta)}{\rho g r}$$

El ángulo de contacto define el comportamiento del fluido: si es agudo, el líquido moja la superficie y asciende (menisco cóncavo); si es obtuso, no la moja y experimenta depresión (menisco convexo).

## Viscosidad en fluidos

La viscosidad es la propiedad intrínseca que cuantifica la resistencia interna de un fluido a fluir bajo la acción de esfuerzos cortantes. A nivel molecular, representa la disipación de energía por fricción interna y transferencia de momento lineal, siendo fuertemente dependiente de la temperatura termodinámica del medio.

## Viscosidades dinámica y cinemática

La viscosidad dinámica o absoluta caracteriza la magnitud de la fricción interna temporal del fluido. La viscosidad cinemática relaciona la viscosidad dinámica con la inercia del fluido, representando la difusividad del momento lineal en el campo de flujo.

$$\nu = \frac{\mu}{\rho}$$

## Ley de la viscosidad de Newton

Postula que, para una clase específica de fluidos denominados newtonianos, el esfuerzo cortante tangencial es directamente y linealmente proporcional a la tasa de deformación angular. La constante de proporcionalidad es la viscosidad dinámica.

$$\tau = \mu \frac{du}{dy}$$

El gradiente de velocidades transversal define la rapidez con la que las capas contiguas de fluido se deslizan unas sobre otras.

> [!example] Esquema Técnico
> Perfil de velocidades lineal de un fluido newtoniano confinado entre dos placas paralelas (flujo de Couette), mostrando el gradiente de velocidad y el vector de esfuerzo cortante.

**Definición de variables:**

- $F_R$: Fuerza hidrostática resultante [$\text{N}$]
- $P_c$: Presión absoluta en el centroide del área [$\text{Pa}$]
- $A$: Área de la superficie plana sumergida [$\text{m}^2$]
- $\rho$: Densidad volumétrica del fluido [$\text{kg/m}^3$]
- $g$: Aceleración de la gravedad [$\text{m/s}^2$]
- $h_c$: Profundidad vertical del centroide [$\text{m}$]
- $y_p$: Coordenada del centro de presión sobre el eje inclinado [$\text{m}$]
- $y_c$: Coordenada del centroide sobre el eje inclinado [$\text{m}$]
- $I_{xc}$: Momento de inercia centroidal respecto al eje horizontal [$\text{m}^4$]
- $\nabla P$: Gradiente espacial de presión [$\text{Pa/m}$]
- $\vec{g}$: Vector aceleración de la gravedad [$\text{m/s}^2$]
- $\vec{a}$: Vector aceleración lineal constante del recipiente [$\text{m/s}^2$]
- $a_x, a_z$: Componentes horizontal y vertical de la aceleración del sistema [$\text{m/s}^2$]
- $\theta$: Ángulo de inclinación (isobara) o ángulo de contacto (capilaridad) [$\text{rad}$]
- $\sigma$: Coeficiente termodinámico de tensión superficial [$\text{N/m}$ o $\text{J/m}^2$]
- $F$: Fuerza debida a la tensión superficial [$\text{N}$]
- $L$: Longitud de la línea geométrica de contacto [$\text{m}$]
- $\Delta P$: Salto de presión a través de la interfaz curva [$\text{Pa}$]
- $R$: Radio de curvatura de la interfaz (gota/burbuja) [$\text{m}$]
- $h$: Altura de ascensión o depresión en el tubo capilar [$\text{m}$]
- $r$: Radio interno del tubo capilar [$\text{m}$]
- $\nu$: Viscosidad cinemática del fluido [$\text{m}^2\text{/s}$]
- $\mu$: Viscosidad dinámica o absoluta del fluido [$\text{Pa}\cdot\text{s}$ o $\text{kg/(m}\cdot\text{s)}$]
- $\tau$: Esfuerzo cortante local [$\text{Pa}$]
- $u$: Componente de la velocidad del fluido en la dirección del flujo principal [$\text{m/s}$]
- $y$: Coordenada espacial transversal a la dirección del flujo [$\text{m}$]
