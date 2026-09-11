---
title: Equilibrio y espontaneidad
---
## Introducción

El equilibrio químico representa el estado final de un sistema dinámico en el que las velocidades de la reacción directa e inversa se igualan, resultando en concentraciones de reactivos y productos que permanecen constantes en el tiempo. Este fenómeno no implica estaticidad, sino una competencia balanceada a nivel molecular. La termodinámica, a través de la energía libre de Gibbs, proporciona el criterio fundamental para determinar la posición de este equilibrio y la espontaneidad de los procesos. Comprender el equilibrio es esencial para maximizar el rendimiento en síntesis industriales y predecir el comportamiento de sistemas químicos complejos bajo variaciones de presión, temperatura o concentración.

+1

---

## Equilibrio químico. Cociente de reacción ($Q$).

En una reacción reversible de la forma $aA + bB \rightleftharpoons cC + dD$, el equilibrio se alcanza cuando el sistema minimiza su energía libre. La relación de concentraciones en este estado se define mediante la **Constante de Equilibrio ($K_c$)**:

$$K_c = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$

Para reacciones en fase gaseosa, se utiliza frecuentemente la constante en términos de presiones parciales ($K_p$):

$$K_p = K_c (RT)^{\Delta n}$$

Donde $\Delta n$ es la diferencia de moles gaseosos entre productos y reactivos.

### Cociente de Reacción ($Q$)

El cociente de reacción utiliza la misma expresión matemática que $K$, pero con concentraciones medidas en cualquier instante del tiempo, no necesariamente en el equilibrio. La comparación entre $Q$ y $K$ predice la dirección de la reacción:

+1

- **$Q < K$:** El sistema se desplazará hacia la derecha (formación de productos) para alcanzar el equilibrio.
    
- **$Q > K$:** El sistema se desplazará hacia la izquierda (formación de reactivos).
    
- **$Q = K$:** El sistema se encuentra en equilibrio dinámico.
    
    +1
    

![Imagen de chemical equilibrium concentration vs time graph](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRd6gOXLQLYLJzOX8aNutAT_rpB3y-3vaWA3KrqLso8qPyFekG-YUoGO2tpCnedkWWwHqlSXKl29lqVOYOhtIQLUkDrkmXdLvyvMxq95s8yh2XtFwY)

Shutterstock

Explorar

## Principio de Le Chatelier.

El Principio de Le Chatelier establece que si un sistema en equilibrio es sometido a una perturbación (cambio en concentración, presión o temperatura), el sistema ajustará su posición de equilibrio de manera que se oponga parcialmente a dicho cambio.

1. **Cambio en la Concentración:** Si se añade un reactivo, el equilibrio se desplaza hacia los productos. Si se retira un producto, el equilibrio también se desplaza hacia la derecha.
    
    +1
    
2. **Cambio en la Presión/Volumen (Gases):** Un aumento de presión (o disminución de volumen) desplaza el equilibrio hacia el lado de la ecuación que tenga el menor número de moles gaseosos.
    
3. **Cambio en la Temperatura:** Es el único factor que modifica el **valor numérico** de $K$.
    
    - En reacciones **exotérmicas**, un aumento de $T$ desplaza el equilibrio hacia los reactivos ($K$ disminuye).
        
    - En reacciones **endotérmicas**, un aumento de $T$ desplaza el equilibrio hacia los productos ($K$ aumenta).
        

## Energía libre: criterio de espontaneidad. Variaciones de la energía libre.

La función de estado **Energía Libre de Gibbs ($G$)** combina la entalpía y la entropía para definir la espontaneidad de un proceso a presión y temperatura constantes:

$$\Delta G = \Delta H - T\Delta S$$

**Criterios de Espontaneidad:**

- **$\Delta G < 0$:** Proceso espontáneo (exergónico).
    
- **$\Delta G > 0$:** Proceso no espontáneo (endergónico).
    
- **$\Delta G = 0$:** El sistema está en equilibrio.
    
    +1
    

### Variaciones de la Energía Libre

Para cualquier estado del sistema, la variación de energía libre se relaciona con la energía libre estándar ($\Delta G^\circ$) y el cociente de reacción ($Q$):

$$\Delta G = \Delta G^\circ + RT \ln Q$$

En el equilibrio ($\Delta G = 0$ y $Q = K$), la ecuación se transforma en la relación fundamental:

$$\Delta G^\circ = -RT \ln K$$

## Energía libre y constante de equilibrio en función de la temperatura.

La dependencia de la constante de equilibrio con la temperatura se describe mediante la **Ecuación de van 't Hoff**. Si asumimos que $\Delta H^\circ$ y $\Delta S^\circ$ son aproximadamente constantes en el intervalo de temperatura considerado:

$$\ln K = -\frac{\Delta H^\circ}{R} \left( \frac{1}{T} \right) + \frac{\Delta S^\circ}{R}$$

Esta ecuación muestra que una gráfica de $\ln K$ frente a $1/T$ es una línea recta. La pendiente de dicha recta ($-\Delta H^\circ / R$) permite determinar experimentalmente la entalpía de la reacción.

Para comparar constantes a dos temperaturas diferentes ($T_1$ y $T_2$):

$$\ln \left( \frac{K_2}{K_1} \right) = \frac{\Delta H^\circ}{R} \left( \frac{1}{T_1} - \frac{1}{T_2} \right)$$

> [!example] foto
> 
> [Gráfico de van 't Hoff que muestre la relación lineal entre $\ln K$ y $1/T$. El diagrama debe incluir dos líneas con pendientes opuestas: una para una reacción exotérmica (pendiente positiva) y otra para una reacción endotérmica (pendiente negativa), indicando claramente cómo varía la constante de equilibrio con el incremento de la temperatura en cada caso].
