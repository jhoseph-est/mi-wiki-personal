---
title: Dinámica de rotación
---
## Introducción
La dinámica de rotación analiza el comportamiento de los cuerpos extensos (cuerpos rígidos) cuando estos rotan alrededor de un eje o experimentan movimientos combinados de traslación y rotación. En este contexto, la distribución de la masa respecto al eje de giro resulta tan crítica como la magnitud de la masa misma.

## Momento de inercia de un sistema de partículas y de un cuerpo rígido

El **momento de inercia ($I$)** es la medida de la resistencia de un cuerpo a los cambios en su velocidad angular. Depende de la distribución de la masa respecto al eje de rotación seleccionado.

- **Sistema de partículas:** $I = \sum m_i r_i^2$
    
- **Cuerpo rígido (distribución continua):**
    
    $$I = \int r^2 dm = \int \rho r^2 dV$$
    
    Donde $r$ es la distancia perpendicular desde el elemento de masa $dm$ al eje de rotación y $\rho$ es la densidad del material.
    

## Teorema de los ejes paralelos (Teorema de Steiner)

Este teorema permite calcular el momento de inercia respecto a cualquier eje paralelo a un eje que pase por el centro de masa ($CM$), siempre que se conozca el momento de inercia respecto a este último ($I_{cm}$).

$$I_{eje} = I_{cm} + M d^2$$

Donde $M$ es la masa total del cuerpo y $d$ es la distancia perpendicular entre ambos ejes paralelos.

## Radio de giro ($k$)

El radio de giro es una distancia imaginaria desde el eje de rotación en la cual se podría concentrar toda la masa del cuerpo sin alterar su momento de inercia. Matemáticamente:

$$I = M k^2 \implies k = \sqrt{\frac{I}{M}}$$

## Movimiento del cuerpo rígido

Un cuerpo rígido experimenta movimiento cuando sus partículas constituyentes cambian de posición en el espacio. Las distancias relativas entre cualquier par de puntos del cuerpo permanecen constantes.

### Cinemática

Se describe mediante variables angulares ($\theta, \omega, \alpha$) vinculadas a las variables tangenciales de cada punto del cuerpo: $v = \omega r$ y $a_t = \alpha r$.

### Movimiento plano

Es aquel donde todos los puntos del cuerpo se mueven en planos paralelos. Puede descomponerse en una traslación del centro de masa y una rotación alrededor de un eje que pase por dicho centro.

### Centro instantáneo de rotación (CIR)

Para cualquier cuerpo rígido en movimiento plano, existe un punto (que puede estar fuera del cuerpo físico) que en un instante dado tiene velocidad nula. El movimiento completo del cuerpo en ese instante puede considerarse como una rotación pura alrededor de este punto.

## Movimiento de traslación

En la traslación pura, todos los puntos del cuerpo tienen la misma velocidad y aceleración en cualquier instante. No hay cambio en la orientación del cuerpo ($\omega = 0$). La ecuación de movimiento es $\sum \vec{F} = M \vec{a}_{cm}$.

## Movimiento de rotación alrededor de un eje fijo

El cuerpo gira alrededor de un eje que no se desplaza. La ecuación fundamental de la dinámica de rotación es:

$$\sum \tau_{eje} = I_{eje} \alpha$$

Donde $\tau$ es el torque y $\alpha$ es la aceleración angular.

## Movimiento de traslación y rotación

El movimiento más general combina ambos efectos. Se puede analizar de dos formas equivalentes:

1. **Respecto al CM:** Se aplican $\sum \vec{F} = M \vec{a}_{cm}$ y $\sum \tau_{cm} = I_{cm} \alpha$.
    
2. **Respecto al CIR:** Se considera una rotación pura con $\sum \tau_{cir} = I_{cir} \alpha$.
    

## Rodadura sin resbalamiento

Es un caso especial de movimiento combinado donde el punto de contacto entre el cuerpo (cilindro, esfera) y la superficie tiene velocidad instantánea cero ($v_{contacto} = 0$).

- **Condición de rodadura pura:** $v_{cm} = \omega R$ y $a_{cm} = \alpha R$.
    
- **Fuerza de fricción por rodadura:** Es una fricción estática ($f_s$) que actúa en el punto de contacto para evitar el deslizamiento. No realiza trabajo pues no hay desplazamiento relativo en el punto de aplicación.
    

## Diagrama de cuerpo libre (DCL) y efectos de una fuerza

En dinámica de rotación, el DCL debe mostrar el **punto exacto de aplicación** de cada fuerza, ya que esto determina el brazo de palanca y, por ende, el torque. Una fuerza aplicada al CM genera solo traslación; una fuerza desplazada del CM genera tanto traslación como rotación.

## Trabajo de rotación

El trabajo realizado por un torque $\tau$ constante al rotar un cuerpo un ángulo $\Delta \theta$ es:

$$W_{rot} = \int_{\theta_1}^{\theta_2} \tau d\theta$$

## Energía cinética ($K$)

La energía cinética total de un cuerpo rígido en movimiento plano es la suma de su energía traslacional y rotacional:

$$K = \frac{1}{2} M v_{cm}^2 + \frac{1}{2} I_{cm} \omega^2$$

## Teorema del trabajo y la energía

El trabajo total realizado por torques externos y fuerzas externas es igual al cambio en la energía cinética total (traslacional + rotacional):

$$W_{neto} = \Delta K_{tot}$$

## Ley de conservación de la energía

En ausencia de fuerzas no conservativas que realicen trabajo (como la fricción cinética), la energía mecánica total se conserva:

$$(K + U)_{inicial} = (K + U)_{final}$$

_Nota: En rodadura pura, la fricción estática no realiza trabajo, por lo que la energía mecánica se conserva._

## Momento angular ($\vec{L}$)

Para un cuerpo rígido que rota alrededor de un eje de simetría:

$$\vec{L} = I \vec{\omega}$$

Si el torque externo neto es cero ($\sum \tau = 0$), el momento angular se conserva ($I_i \omega_i = I_f \omega_f$), lo que explica por qué un patinador gira más rápido al recoger sus brazos (disminuye $I$).

## Giroscopio

Un giroscopio es un cuerpo en rotación rápida alrededor de un eje de simetría. Debido a la conservación del momento angular, presenta **precesión**: si se aplica un torque perpendicular al eje de rotación, el eje no cae, sino que describe un cono en el espacio con una velocidad angular de precesión $\Omega$:

$$\Omega = \frac{M g d}{I \omega}$$

Donde $d$ es la distancia al CM e $I\omega$ es el momento angular del disco.

> [!example] foto
> 
> [Diagrama de un giroscopio en precesión mostrando los vectores de momento angular, el torque debido al peso y la dirección de la velocidad de precesión resultante].
