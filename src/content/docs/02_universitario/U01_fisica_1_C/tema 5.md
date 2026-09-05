---
title: Dinámica de un sistema de partículas
---
## Introducción

Un sistema de partículas es un conjunto de $n$ puntos materiales con masas $m_i$ que pueden interactuar mediante fuerzas internas o ser afectados por campos externos. La complejidad del sistema reside en que el movimiento de cada partícula está acoplado al de las demás, pero su comportamiento global puede simplificarse mediante el concepto de centro de masa.

## Fuerzas internas y fuerzas externas

En un sistema de partículas, las fuerzas se clasifican según su origen:

- **Fuerzas externas ($\vec{F}_i^{ext}$):** Ejercidas por agentes fuera del sistema definido (ej. gravedad, campos eléctricos externos).
    
- **Fuerzas internas ($\vec{f}_{ij}$):** Fuerzas de interacción entre la partícula $i$ y la partícula $j$ dentro del sistema.
    

Según la **Tercera Ley de Newton**, $\vec{f}_{ij} = -\vec{f}_{ji}$, lo que implica que la suma de todas las fuerzas internas de un sistema es siempre nula:

$$\sum_{i} \sum_{j, j \neq i} \vec{f}_{ij} = 0$$

## Centro de masa. Cálculo del centro de masa

El centro de masa (CM) es un punto geométrico que representa la posición promedio de la masa del sistema. Se comporta como si toda la masa del sistema estuviera concentrada en él.

Para un sistema discreto de $n$ partículas, el vector posición del centro de masa $\vec{r}_{cm}$ es:

$$\vec{r}_{cm} = \frac{\sum_{i=1}^{n} m_i \vec{r}_i}{M}$$

Donde $M = \sum m_i$ es la masa total del sistema.

Para un cuerpo continuo, el sumatorio se reemplaza por una integral:

$$\vec{r}_{cm} = \frac{1}{M} \int \vec{r} \, dm$$

## Velocidad y aceleración del centro de masa

Derivando la posición del CM respecto al tiempo $t$:

- **Velocidad del CM ($\vec{v}_{cm}$):** $\vec{v}_{cm} = \frac{\sum m_i \vec{v}_i}{M} = \frac{\vec{P}}{M}$. Representa la cantidad de movimiento total dividida por la masa total.
    
- **Aceleración del CM ($\vec{a}_{cm}$):** $\vec{a}_{cm} = \frac{\sum m_i \vec{a}_i}{M}$. Relaciona la fuerza externa neta con la aceleración del punto representativo del sistema.
    

## Impulso y cantidad de movimiento lineal y angular de un sistema

- **Momento lineal total ($\vec{P}$):** Es la suma vectorial de los momentos de cada partícula: $\vec{P} = \sum m_i \vec{v}_i = M \vec{v}_{cm}$.
    
- **Impulso lineal total ($\vec{J}$):** $\vec{J} = \int \sum \vec{F}^{ext} dt = \Delta \vec{P}$.
    
- **Momento angular total ($\vec{L}$):** Suma de los momentos angulares individuales respecto a un punto $O$: $\vec{L}_O = \sum (\vec{r}_i \times m_i \vec{v}_i)$.
    
    - **Teorema de König para $\vec{L}$:** El momento angular total es igual al momento angular del CM más el momento angular relativo al CM ($\vec{L}_O = \vec{r}_{cm} \times M \vec{v}_{cm} + \vec{L}_{cm}$).
        

## Conservación de la cantidad de movimiento

Si la fuerza externa resultante es nula ($\sum \vec{F}^{ext} = 0$), entonces el momento lineal total $\vec{P}$ permanece constante en el tiempo. Esto es independiente de la magnitud de las fuerzas internas. De igual forma, si el torque externo neto es nulo, el momento angular $\vec{L}$ se conserva.

## Ecuación de movimiento

La dinámica traslacional del sistema está gobernada por la ecuación:

$$\sum \vec{F}^{ext} = M \vec{a}_{cm}$$

Esta ecuación indica que el centro de masa de un sistema se mueve como una partícula de masa $M$ bajo la influencia de la resultante de las fuerzas externas únicamente.

## Energía cinética

La energía cinética total ($K$) de un sistema no es simplemente la energía del CM. Aplicando el **Segundo Teorema de König**:

$$K = \frac{1}{2} M v_{cm}^2 + \sum \frac{1}{2} m_i v_{i/cm}^2$$

Donde el primer término es la energía cinética traslacional del CM y el segundo es la energía cinética interna (relativa al CM).

## Teorema del trabajo y la energía

El cambio en la energía cinética total del sistema es igual al trabajo neto realizado por **todas** las fuerzas (externas e internas):

$$W_{ext} + W_{int} = \Delta K$$

A diferencia del momento lineal, las fuerzas internas **sí pueden realizar trabajo** y cambiar la energía del sistema (ej. una explosión interna).

## Sistemas conservativos y no conservativos

Un sistema es conservativo si todas las fuerzas (internas y externas) que realizan trabajo son conservativas. En tal caso, la energía mecánica total ($E = K + U_{ext} + U_{int}$) permanece constante. Si existen fuerzas disipativas internas (fricción, deformación plástica), la energía mecánica disminuye.

## Fuerzas impulsivas

Son fuerzas de gran magnitud que actúan en intervalos de tiempo extremadamente cortos ($\Delta t \to 0$). Durante este intervalo, el efecto de otras fuerzas constantes (como el peso) es despreciable, permitiendo analizar el cambio de movimiento exclusivamente a través del impulso.

## Choques. Coeficiente de restitución

Un choque es una interacción impulsiva entre dos o más cuerpos. El momento lineal total se conserva, pero la energía cinética puede no hacerlo. Se define el **coeficiente de restitución ($e$)** como la razón entre las velocidades relativas de alejamiento y aproximación:

$$e = \frac{-(v_{2f} - v_{1f})}{v_{2i} - v_{1i}}$$

- **$e = 1$:** Choque elástico (se conserva $K$).
    
- **$0 < e < 1$:** Choque inelástico (pérdida de $K$).
    
- **$e = 0$:** Choque perfectamente inelástico (los cuerpos quedan unidos).
    

## Análisis energético

En los choques, la pérdida de energía cinética ($\Delta K$) se transforma generalmente en energía térmica o deformación permanente. La energía perdida se calcula comparando los estados antes y después del impacto: $\Delta K = K_f - K_i$.

## Sistemas de masa variable

Para sistemas donde la masa entra o sale (como un cohete), la segunda ley de Newton se reformula para incluir el flujo de masa. La ecuación fundamental de la propulsión es:

$$\vec{F}_{ext} + \vec{v}_{rel} \frac{dm}{dt} = m \frac{d\vec{v}}{dt}$$

Donde $\vec{v}_{rel}$ es la velocidad de la masa eyectada relativa al sistema principal y $\frac{dm}{dt}$ es la tasa de variación de masa.

> [!example] foto
> 
> [Diagrama de un cohete en vuelo ilustrando el empuje generado por la eyección de gases, la fuerza de gravedad externa y la aplicación de la conservación del momento lineal en sistemas de masa variable].
