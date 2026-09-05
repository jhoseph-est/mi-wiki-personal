---
title: Dinámica de una partícula
---
## Introducción

El estudio de la dinámica de una partícula se fundamenta en la capacidad de cuantificar cómo la aplicación de una fuerza neta altera el estado de movimiento. Para ello, es imperativo definir la masa como una medida de la inercia, es decir, la resistencia de un cuerpo a cambiar su estado de reposo o movimiento.

## Segunda ley de Newton

La **Segunda Ley de Newton** establece que la aceleración de un objeto es directamente proporcional a la fuerza neta que actúa sobre él e inversamente proporcional a su masa. Vectorialmente, se expresa como:

$$\sum \vec{F} = m \vec{a}$$

Donde $\vec{a}$ es la aceleración instantánea y $m$ es la masa inercial del cuerpo. Esta ley es válida únicamente en sistemas de referencia inerciales y para cuerpos de masa constante. En términos de la tasa de cambio del momento lineal, la forma más general de la ley es:

+1

$$\vec{F}_{net} = \frac{d\vec{p}}{dt}$$

## Masa y peso de un cuerpo

Es fundamental distinguir entre estos dos conceptos:

- **Masa ($m$):** Magnitud escalar intrínseca de la materia. Es una medida de la inercia y es constante independientemente de la ubicación del cuerpo.
    
- **Peso ($\vec{W}$):** Magnitud vectorial que representa la fuerza de atracción gravitacional ejercida por un cuerpo celeste (como la Tierra) sobre una masa. Su módulo se calcula como:
    
    $$W = m \cdot g$$
    
    Donde $g$ es la aceleración de la gravedad. En la Tierra, $g \approx 9.81 \, m/s^2$.
    

## Aplicación de la segunda ley de Newton

Para resolver problemas dinámicos, se sigue un procedimiento sistemático:

1. **Selección del sistema:** Identificar la partícula de interés.
    
2. **Diagrama de Cuerpo Libre (DCL):** Dibujar todas las fuerzas que actúan sobre la partícula.
    
3. **Establecimiento de ejes:** Elegir un sistema de coordenadas (cartesianas, normales/tangenciales).
    
4. **Ecuaciones de movimiento:** Aplicar $\sum F_x = m a_x$ y $\sum F_y = m a_y$.
    

## Sistema de referencia inercial y no inercial

- **Inercial:** Aquel que está en reposo o se mueve a velocidad constante respecto a las estrellas fijas. En estos sistemas, las leyes de Newton se cumplen sin modificaciones.
    
    +1
    
- **No inercial:** Aquel que se encuentra acelerado respecto a un sistema inercial. En este marco, un cuerpo parece acelerarse sin la presencia aparente de una fuerza física real.
    
    +1
    

## Fuerzas en los sistemas de referencia inercial y no inercial

En un sistema inercial, solo se consideran **fuerzas verdaderas** (interacciones físicas). En un sistema no inercial, para que la segunda ley de Newton siga siendo operativa, se deben añadir términos correctores conocidos como fuerzas de inercia.

## Fuerzas verdaderas y ficticias

- **Fuerzas verdaderas:** Aquellas que provienen de interacciones fundamentales o de contacto (Tensión, Normal, Peso, Fricción).
    
- **Fuerzas ficticias (o de inercia):** No son resultado de una interacción entre cuerpos, sino de la aceleración del observador. Ejemplos incluyen la fuerza centrífuga y la fuerza de Coriolis. Se definen matemáticamente como:
    
    $$\vec{F}_{ficticia} = -m \vec{a}_{sistema}$$
    

## Fuerzas tangencial, normal, radial y transversal

En movimientos curvilíneos, la fuerza neta se descompone según la geometría de la trayectoria:

- **Fuerza Tangencial ($F_t$):** $\sum F_t = m \frac{dv}{dt}$. Responsable del cambio en la magnitud de la velocidad.
    
- **Fuerza Normal o Centrípeta ($F_n$):** $\sum F_n = m \frac{v^2}{\rho}$. Responsable del cambio en la dirección de la trayectoria, dirigida siempre hacia el centro de curvatura.
    
- **Coordenadas polares ($F_r, F_\theta$):**
    
    $$\sum F_r = m(\ddot{r} - r\dot{\theta}^2)$$
    
    $$\sum F_\theta = m(r\ddot{\theta} + 2\dot{r}\dot{\theta})$$
    

## Momento lineal e Impulso lineal

- **Momento lineal ($\vec{p}$):** Definido como el producto de la masa por la velocidad: $\vec{p} = m \vec{v}$.
    
- **Impulso ($\vec{J}$):** El cambio en el momento lineal de una partícula producido por una fuerza que actúa durante un intervalo de tiempo:
    
    $$\vec{J} = \int_{t_1}^{t_2} \vec{F} dt = \Delta \vec{p}$$
    

## Momento angular

El momento angular ($\vec{L}$) describe la tendencia de rotación de una partícula respecto a un punto $O$. Se define como el producto vectorial del vector posición y el momento lineal:

$$\vec{L} = \vec{r} \times \vec{p}$$

La tasa de cambio del momento angular es igual al torque neto aplicado: $\frac{d\vec{L}}{dt} = \sum \vec{\tau}$.

## Momento de inercia de una partícula

Para una sola partícula de masa $m$ que rota a una distancia $r$ de un eje, el momento de inercia ($I$) se define como:

$$I = m r^2$$

Representa la resistencia de la partícula a cambios en su velocidad angular.

## Principio de conservación del momento lineal y angular

- **Conservación de $\vec{p}$:** Si la fuerza neta externa sobre un sistema es cero, el momento lineal total permanece constante ($\Delta \vec{p} = 0$).
    
- **Conservación de $\vec{L}$:** Si el torque neto externo sobre un sistema es cero, el momento angular total permanece constante ($\Delta \vec{L} = 0$).
    

## Trabajo y concepto de energía

El **Trabajo ($W$)** es una magnitud escalar que cuantifica la energía transferida a un cuerpo mediante una fuerza que provoca un desplazamiento. La **Energía** es la capacidad de un sistema para realizar trabajo.

## Trabajo de una fuerza constante

Si una fuerza $\vec{F}$ es constante en magnitud y dirección, y el desplazamiento es $\vec{d}$:

$$W = \vec{F} \cdot \vec{d} = F d \cos \phi$$

Donde $\phi$ es el ángulo entre la fuerza y el desplazamiento.

## Trabajo de una fuerza de magnitud variable

Si la fuerza varía a lo largo de la trayectoria, el trabajo se calcula mediante una integral de línea:

$$W = \int_{C} \vec{F} \cdot d\vec{r}$$

## Trabajo de la fuerza gravitacional (Peso)

El trabajo realizado por el peso al mover una masa desde una altura $y_1$ a $y_2$ es:

$$W_g = -mg(y_2 - y_1)$$

Este trabajo es independiente de la trayectoria seguida, solo depende de los puntos inicial y final.

## Trabajo de la fuerza elástica del resorte

Para un resorte que obedece la Ley de Hooke ($F_e = -kx$), el trabajo realizado por el resorte al estirarse o comprimirse desde $x_1$ hasta $x_2$ es:

$$W_e = \frac{1}{2} k x_1^2 - \frac{1}{2} k x_2^2$$

## Energía potencial: gravitatoria y elástica

Es la energía que posee un sistema debido a su configuración o posición:

- **Energía Potencial Gravitatoria ($U_g$):** $U_g = mgy$.
    
- **Energía Potencial Elástica ($U_e$):** $U_e = \frac{1}{2} k x^2$.
    

## Energía cinética

Es la energía asociada al estado de movimiento de la partícula:

$$K = \frac{1}{2} m v^2$$

## Teorema del trabajo y la energía

Establece que el trabajo total realizado por todas las fuerzas (conservativas y no conservativas) que actúan sobre una partícula es igual al cambio en su energía cinética:

$$W_{neto} = \Delta K = K_f - K_i$$

## Energía mecánica

La energía mecánica total ($E$) de un sistema es la suma de su energía cinética y sus energías potenciales:

$$E = K + U$$

## Fuerza conservativa

Una fuerza es conservativa si el trabajo realizado por ella sobre una partícula que se mueve entre dos puntos es independiente de la trayectoria seguida. Ejemplos: gravedad, fuerza elástica. Para estas fuerzas:

$$W_{cons} = -\Delta U$$

## Fuerza no conservativa

Aquellas cuyo trabajo depende de la trayectoria. La energía mecánica no se conserva en su presencia, ya que se disipa usualmente en forma de calor. Ejemplo: fricción ($f_k$).

$$W_{fricción} = \int \vec{f}_k \cdot d\vec{r} < 0$$

## Conservación de la energía mecánica

En un sistema donde solo actúan fuerzas conservativas, la energía mecánica total permanece constante:

$$E_i = E_f \implies K_i + U_i = K_f + U_f$$

## Trabajo de una fuerza no conservativa

Si en el sistema actúan fuerzas no conservativas ($W_{nc}$), el cambio en la energía mecánica es igual al trabajo realizado por estas:

$$W_{nc} = \Delta E = E_f - E_i$$

## Potencia

La potencia ($P$) es la rapidez con la que se realiza un trabajo o se transfiere energía:

- **Media:** $P_m = \frac{W}{\Delta t}$.
    
- **Instantánea:** $P = \vec{F} \cdot \vec{v}$.
    
    Unidad en el SI: Watt ($W = J/s$).
    

## Eficiencia mecánica ($\eta$)

Es la relación entre el trabajo o potencia de salida útil y el trabajo o potencia de entrada suministrada:

$$\eta = \frac{P_{salida}}{P_{entrada}} \cdot 100\%$$

Debido a las fuerzas disipativas, la eficiencia siempre es menor al 100%.
