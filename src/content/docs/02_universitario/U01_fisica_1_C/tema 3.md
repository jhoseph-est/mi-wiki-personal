---
title: tema 3
ciclo: 1
curso: fisica-1
---
## Introducción

En el análisis de ingeniería, la estática permite determinar las cargas internas y externas que actúan sobre las estructuras. Se basa en la premisa de que la suma de todas las fuerzas y momentos que actúan sobre un sistema es nula, garantizando la estabilidad mecánica.

## Antecedentes de las leyes del movimiento de Newton, principio de Galileo

Antes de Isaac Newton, la visión aristotélica sostenía que el estado natural de los cuerpos era el reposo y que se requería una fuerza constante para mantener el movimiento. Galileo Galilei revolucionó este concepto mediante el **Principio de Inercia**, demostrando que, en ausencia de fricción, un cuerpo en movimiento continuará desplazándose indefinidamente a velocidad constante. Galileo introdujo el concepto de sistema de referencia inercial y utilizó planos inclinados para demostrar que la aceleración es independiente de la masa en caída libre (idealizada).

## Primera ley de Newton y concepto de fuerza

La **Primera Ley de Newton** formaliza el principio de inercia:

> "Todo cuerpo permanece en su estado de reposo o de movimiento rectilíneo uniforme a menos que sea obligado a cambiar dicho estado por fuerzas impresas sobre él."

La **fuerza** ($\vec{F}$) se define como una magnitud vectorial que mide la intensidad del intercambio de momento lineal entre dos cuerpos. En el SI, su unidad es el Newton ($N$), definido como:

$$1 \, N = 1 \, kg \cdot m/s^2$$

## Fuerzas básicas en la naturaleza

Desde la perspectiva de la física fundamental, existen cuatro interacciones que rigen el universo:

1. **Gravitatoria:** Interacción atractiva entre masas ($F \propto m_1 m_2 / r^2$).
    
2. **Electromagnética:** Fuerzas entre cargas eléctricas en reposo o movimiento.
    
3. **Nuclear fuerte:** Mantiene unidos los nucleones en el núcleo atómico.
    
4. **Nuclear débil:** Responsable de ciertos procesos de desintegración radiactiva.
    

En estática, la mayoría de las fuerzas de contacto (tensión, normal, fricción) son de origen electromagnético a nivel molecular.

## Principio de superposición

Este principio establece que la acción combinada de un sistema de fuerzas $\{\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n\}$ que actúa sobre una partícula es equivalente a la acción de una única fuerza resultante $\vec{R}$:

$$\vec{R} = \sum_{i=1}^{n} \vec{F}_i = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n$$

## Fuerzas y equilibrio de una partícula, tercera ley de Newton

Para que una partícula esté en equilibrio, la fuerza resultante debe ser nula:

$$\sum \vec{F} = 0 \implies \sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0$$

La **Tercera Ley de Newton** (Acción y Reacción) establece que si un cuerpo A ejerce una fuerza $\vec{F}_{AB}$ sobre un cuerpo B, el cuerpo B ejerce simultáneamente una fuerza $\vec{F}_{BA}$ sobre el cuerpo A de igual magnitud y dirección, pero de sentido opuesto:

$$\vec{F}_{AB} = -\vec{F}_{BA}$$

## Principio de transmisibilidad

Establece que las condiciones de equilibrio o de movimiento de un cuerpo rígido permanecerán inalteradas si una fuerza $\vec{F}$ que actúa en un punto dado se reemplaza por otra fuerza $\vec{F}'$ de igual magnitud y dirección, pero que actúa en un punto diferente, siempre que ambas fuerzas tengan la misma **línea de acción**.

## Diagrama de cuerpo libre (DCL)

Es una representación gráfica que muestra una partícula o cuerpo aislado de su entorno, donde se dibujan todas las fuerzas externas que actúan sobre él (peso, tensiones, reacciones de apoyo, fricción). Es la herramienta fundamental para plantear las ecuaciones de equilibrio.

## Concepto de cuerpo rígido

Un **cuerpo rígido** es un modelo idealizado de un sistema de partículas donde las distancias entre ellas permanecen constantes, independientemente de las fuerzas aplicadas. A diferencia de la partícula, el cuerpo rígido tiene dimensiones finitas y puede experimentar rotaciones.

## Torque de una fuerza respecto de un punto

El torque o momento ($\vec{M}$) mide la tendencia de una fuerza a producir una rotación alrededor de un punto o eje. Se define vectorialmente como:

$$\vec{M}_O = \vec{r} \times \vec{F}$$

Donde $\vec{r}$ es el vector posición desde el centro de momentos $O$ hasta el punto de aplicación de la fuerza.

- **Módulo:** $M = F \cdot d$, donde $d$ es el brazo de palanca (distancia perpendicular).
    
- **Unidad:** $N \cdot m$.
    

## Resultante en un sistema de fuerzas concurrentes, paralelas y en un plano

- **Fuerzas concurrentes:** Sus líneas de acción se cruzan en un único punto; la resultante es la suma vectorial directa.
    
- **Fuerzas paralelas (Teorema de Varignon):** Establece que el momento de la resultante de un sistema de fuerzas respecto a cualquier punto es igual a la suma de los momentos de las fuerzas individuales respecto al mismo punto:
    
    $$M_R = \sum (\vec{r}_i \times \vec{F}_i)$$
    
- **Fuerzas distribuidas:** Se reemplazan por una **viga equivalente** donde la carga distribuida $w(x)$ se sustituye por una fuerza puntual $P = \int w(x) dx$ aplicada en el centroide del área bajo la curva de carga.
    

## Par de fuerzas o cupla

Un par de fuerzas consiste en dos fuerzas de igual magnitud, direcciones paralelas y sentidos opuestos, separadas por una distancia $d$. Su fuerza resultante es cero, pero producen un momento puro:

$$M = F \cdot d$$

El momento de un par es un **vector libre**, lo que significa que es el mismo para cualquier centro de momentos en el cuerpo.

## Equilibrio de un cuerpo rígido. Condiciones de equilibrio

Para que un cuerpo rígido esté en equilibrio estático, se deben cumplir dos condiciones vectoriales:

1. **Equilibrio Traslacional:** $\sum \vec{F} = 0$
    
2. **Equilibrio Rotacional:** $\sum \vec{M}_O = 0$ (respecto a cualquier punto $O$).
    

## Máquinas simples

Son dispositivos mecánicos que transforman una fuerza aplicada (potencia) en una fuerza de salida (resistencia), generalmente para obtener una **ventaja mecánica** ($VM = R/P$). Incluyen:

- Palancas (de 1°, 2° y 3° grado).
    
- Poleas (fijas y móviles).
    
- Plano inclinado, cuña y tornillo.
    

## Rozamiento: fuerza de rozamiento estático y cinético por deslizamiento

La fricción es la fuerza tangencial que se opone al movimiento relativo entre superficies.

- **Rozamiento estático ($f_s$):** Actúa cuando no hay movimiento. Su valor máximo es:
    
    $$f_{s,max} = \mu_s N$$
    
- **Rozamiento cinético ($f_k$):** Actúa cuando hay deslizamiento. Su valor es constante:
    
    $$f_k = \mu_k N$$
    
    Generalmente, $\mu_s > \mu_k$.
    

> [!example] foto
> 
> [Gráfica de la fuerza de fricción vs fuerza aplicada, mostrando la región estática lineal, el umbral de movimiento inminente y la región cinética constante].
