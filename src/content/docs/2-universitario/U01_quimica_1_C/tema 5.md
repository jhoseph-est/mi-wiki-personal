---
title: Cambios de energía en las reacciones químicas
---
## Introducción

La termoquímica es la rama de la termodinámica que estudia el intercambio de energía, específicamente en forma de calor, que acompaña a las reacciones químicas. Este intercambio es una consecuencia directa de la diferencia de energía potencial entre los enlaces de los reactivos y los productos. El estudio energético no solo permite determinar si una reacción es viable desde el punto de vista de la espontaneidad, sino que es fundamental para el diseño de reactores, la optimización de procesos industriales y el aprovechamiento de combustibles. En esta sección, se analizan las leyes que gobiernan la energía y su aplicación específica en la ingeniería de la combustión.

---

## La energía en las reacciones químicas.

En una reacción química, la energía total del sistema se conserva, pero se transforma. La energía interna de las sustancias reside principalmente en la energía cinética de sus partículas y en la energía potencial de sus enlaces químicos e interacciones intermoleculares.

- **Reacciones Exotérmicas:** Son aquellas que liberan energía al entorno. La energía de los productos es menor que la de los reactivos ($\Delta H < 0$).
    
- **Reacciones Endotérmicas:** Son aquellas que requieren la absorción de energía del entorno para proceder. La energía de los productos es mayor que la de los reactivos ($\Delta H > 0$).
    

## Sistemas termodinámicos. Estado y función de estado.

Para el estudio termodinámico, se define el **sistema** como la parte del universo bajo estudio, y el **entorno** como todo lo que interactúa con él.

- **Tipos de sistemas:**
    
    1. **Abierto:** Intercambia materia y energía con el entorno.
        
    2. **Cerrado:** Intercambia energía (calor y trabajo) pero no materia.
        
    3. **Aislado:** No intercambia ni materia ni energía.
        

**Funciones de Estado:** Son propiedades del sistema que dependen únicamente de su estado actual y no del camino seguido para alcanzarlo (ej. presión $P$, temperatura $T$, volumen $V$, entalpía $H$, energía interna $U$). El calor ($q$) y el trabajo ($w$) **no** son funciones de estado, sino funciones de trayectoria.

## Energía, entalpía, ley cero y primera ley de la termodinámica.

### Ley Cero de la Termodinámica

Establece que si dos sistemas están en equilibrio térmico con un tercero, están en equilibrio térmico entre sí. Define la validez de la temperatura como una propiedad medible.

### Primera Ley de la Termodinámica

Es el principio de conservación de la energía. Para un sistema cerrado, el cambio en la energía interna ($\Delta U$) es igual al calor absorbido por el sistema más el trabajo realizado sobre él (según el criterio de la IUPAC):

$$\Delta U = q + w$$

### Entalpía ($H$)

En procesos químicos realizados a presión constante (condición común en laboratorios e industria), el flujo de calor se define como la variación de entalpía:

$$H = U + PV \implies \Delta H = q_p$$

Donde $q_p$ es el calor a presión constante.

## Calores de reacción. Ley de Hess. Calor de combustión.

El **Calor de Reacción** ($\Delta H_{rxn}$) es el cambio de entalpía asociado a una reacción química balanceada.

- **Entalpía Estándar de Formación ($\Delta H_f^\circ$):** Cambio de entalpía para formar 1 mol de un compuesto a partir de sus elementos en su estado más estable a 1 atm y 25°C.
    

### Ley de Hess

Establece que el cambio de entalpía total para una reacción es el mismo si esta ocurre en un solo paso o en una serie de pasos. Esto permite calcular $\Delta H$ para reacciones difíciles de medir experimentalmente:

$$\Delta H_{rxn}^\circ = \sum n \Delta H_f^\circ(\text{productos}) - \sum m \Delta H_f^\circ(\text{reactivos})$$

### Calor de Combustión

Es el $\Delta H$ de la reacción de oxidación completa de una sustancia con oxígeno molecular. Se suele expresar en términos de Poder Calorífico Superior (PCS) si el agua producida queda en estado líquido, o Poder Calorífico Inferior (PCI) si queda en estado de vapor.

## Condiciones para la combustión. Contaminación por productos de la combustión.

Para que ocurra la combustión se requiere la coexistencia de tres elementos (Triángulo del fuego): **Combustible**, **Comburente** y **Energía de Activación** (calor).

### Impacto Ambiental

Los productos de la combustión generan diversos contaminantes:

- **$CO_2$:** Gas de efecto invernadero responsable del calentamiento global.
    
- **$CO$:** Producto de combustión incompleta, altamente tóxico por su afinidad con la hemoglobina.
    
- **$NO_x$:** Óxidos de nitrógeno formados a altas temperaturas, precursores de la lluvia ácida y el smog fotoquímico.
    
- **$SO_x$:** Óxidos de azufre provenientes de impurezas en combustibles fósiles, causantes de lluvia ácida.
    
- **Material Particulado (PM):** Hollín y cenizas que afectan la salud respiratoria.
    

## Balance energético en procesos de combustión.

El balance de energía en un proceso de combustión se basa en la aplicación de la primera ley para sistemas de flujo estable (como calderas o turbinas).

La energía liberada por el combustible debe igualar a la energía absorbida por los productos de combustión (gases de chimenea), las pérdidas de calor al entorno y el trabajo útil generado:

$$Q - W = \sum n_{out} h_{out} - \sum n_{in} h_{in}$$

Donde $h$ representa la entalpía absoluta, la cual incluye la entalpía de formación más el cambio de entalpía sensible debido al aumento de temperatura:

$$h(T) = \Delta H_f^\circ + \int_{298}^{T} C_p(T) dT$$

$C_p$ es la capacidad calorífica a presión constante, que suele ser una función polinómica de la temperatura.

> [!example] foto
> 
> [Diagrama de balance de energía para un sistema de combustión adiabático. Debe mostrar una cámara de combustión con entradas de combustible y aire a temperatura ambiente ($T_0$), y salida de gases de combustión a una temperatura de llama adiabática ($T_{ad}$). El diagrama debe ilustrar que la entalpía química de los reactivos se transforma íntegramente en entalpía sensible de los productos].
