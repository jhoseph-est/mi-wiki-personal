---
title: Secciones cónicas
---
# 7. Secciones cónicas

## Introducción

Las **secciones cónicas** se definen geométricamente como las curvas resultantes de la intersección entre un plano y un cono circular recto de dos mantos. Dependiendo del ángulo de inclinación del plano respecto al eje del cono y su generatriz, se generan cuatro curvas fundamentales: la circunferencia, la parábola, la elipse y la hipérbola. Desde una perspectiva algebraica, estas curvas corresponden al lugar geométrico de los puntos $P(x, y)$ que satisfacen una ecuación de segundo grado en dos variables de la forma general:

$$Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$$

## La circunferencia: definición y ecuaciones (ordinaria, general)

La **circunferencia** es el lugar geométrico de los puntos cuya distancia a un punto fijo $C(h, k)$, denominado centro, es constante e igual a $r$ (radio).

1. **Ecuación Ordinaria (Canónica):** Si el centro es $(h, k)$ y el radio es $r$:
    
    $$(x - h)^2 + (y - k)^2 = r^2$$
    
2. **Ecuación General:** Desarrollando los binomios e igualando a cero:
    
    $$x^2 + y^2 + Dx + Ey + F = 0$$
    
    Donde el centro se localiza en $(-D/2, -E/2)$ y el radio se obtiene mediante $r = \frac{1}{2}\sqrt{D^2 + E^2 - 4F}$, bajo la condición $D^2 + E^2 - 4F > 0$.
    

## Ecuación de la recta tangente a una circunferencia

Para una circunferencia $(x-h)^2 + (y-k)^2 = r^2$ y un punto de tangencia $P_0(x_0, y_0)$ perteneciente a la curva, la ecuación de la recta tangente se obtiene mediante la condición de que el radio es perpendicular a la tangente:

$$(x_0 - h)(x - h) + (y_0 - k)(y - k) = r^2$$

## Cuerda de contacto

Dado un punto externo $P_e(x_e, y_e)$, existen dos rectas tangentes a la circunferencia que pasan por él. La recta que une los dos puntos de tangencia se denomina **cuerda de contacto**. Su ecuación tiene la misma estructura que la de la tangente, sustituyendo el punto de tangencia por el punto externo $P_e$.

## Familia de circunferencias

Un haz o familia de circunferencias es el conjunto de todas las circunferencias que cumplen una condición común (como pasar por los mismos puntos de intersección). Si $C_1 = 0$ y $C_2 = 0$ son las ecuaciones de dos circunferencias, la familia se expresa como:

$$C_1 + kC_2 = 0, \quad k \in \mathbb{R}$$

## Transformación de coordenadas: traslación, rotación y combinación de ejes

Para simplificar ecuaciones de segundo grado, se emplean transformaciones lineales:

1. **Traslación:** Desplazamiento del origen a un punto $(h, k)$.
    
    $$x = x' + h, \quad y = y' + k$$
    
2. **Rotación:** Giro de los ejes un ángulo $\theta$ para eliminar el término mixto $xy$.
    
    $$x = x' \cos \theta - y' \sin \theta, \quad y = x' \sin \theta + y' \cos \theta$$
    
    El ángulo óptimo cumple $\cot(2\theta) = \frac{A-C}{B}$.
    

## La parábola: definición, elementos, ecuaciones (vectorial, cartesiana, general)

Lugar geométrico de los puntos que equidistan de un punto fijo $F$ (foco) y una recta fija $\mathcal{D}$ (directriz).

- **Elementos:** Vértice ($V$), Foco ($F$), Directriz ($\mathcal{D}$), Parámetro ($p$, distancia de $V$ a $F$), Eje focal, Lado recto ($|4p|$).
    
- **Ecuación Cartesiana (Eje vertical):** $(x-h)^2 = 4p(y-k)$.
    
- **Ecuación Cartesiana (Eje horizontal):** $(y-k)^2 = 4p(x-h)$.
    
- **Ecuación Vectorial:** $P = V + t^2 \vec{v} + 2pt \vec{n}$, donde $\vec{v}$ es el vector director del eje y $\vec{n}$ su normal.
    

## Recta tangente y normal a una parábola

En el punto $P_0(x_0, y_0)$ de la parábola $(x-h)^2 = 4p(y-k)$, la tangente es:

$$(x_0 - h)(x - h) = 2p(y + y_0 - 2k)$$

La normal es la recta perpendicular a la tangente en $P_0$.

## Propiedades de la parábola

La propiedad más destacada es la **reflexión**: cualquier rayo paralelo al eje de la parábola que incida sobre su superficie cóncava se refleja pasando exactamente por el foco.

## La elipse: definición, elementos, ecuaciones (vectorial, cartesiana)

Lugar geométrico de los puntos cuya suma de distancias a dos focos $F_1, F_2$ es constante ($2a$).

- **Elementos:** Centro, Vértices ($V$), Focos ($F$), Eje mayor ($2a$), Eje menor ($2b$), Semidistancia focal ($c$). Se cumple $a^2 = b^2 + c^2$.
    
- **Ecuación Cartesiana (Centro $(h,k)$):** $\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1$.
    
- **Excentricidad:** $e = c/a < 1$.
    

## Recta tangente y normal a una elipse

En $P_0(x_0, y_0)$, la ecuación de la tangente a la elipse centrada en el origen es:

$$\frac{x_0 x}{a^2} + \frac{y_0 y}{b^2} = 1$$

## Propiedades de la elipse

Propiedad óptica: Un rayo de luz o señal acústica que parte de un foco y choca contra la elipse se refleja hacia el otro foco.

## La hipérbola: definición, elementos, asíntotas, ecuaciones (vectorial, cartesiana)

Lugar geométrico de los puntos cuyo valor absoluto de la diferencia de distancias a dos focos es constante ($2a$).

- **Elementos:** Centro, Vértices, Focos, Eje transverso ($2a$), Eje conjugado ($2b$). Se cumple $c^2 = a^2 + b^2$.
    
- **Asíntotas:** Rectas a las que la curva se aproxima infinitamente: $y - k = \pm \frac{b}{a}(x - h)$.
    
- **Ecuación:** $\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1$ (Horizontal).
    

## Hipérbolas conjugadas

Dos hipérbolas son conjugadas si el eje transverso de una es el eje conjugado de la otra. Sus ecuaciones difieren solo en el signo del término constante.

## Recta tangente a una hipérbola

En $P_0(x_0, y_0)$, para una hipérbola centrada en el origen:

$$\frac{x_0 x}{a^2} - \frac{y_0 y}{b^2} = 1$$

## Propiedades de la hipérbola

La excentricidad $e = c/a$ es siempre mayor a 1. Al igual que las otras cónicas, posee propiedades de reflexión fundamentales en el diseño de telescopios de tipo Cassegrain.

> [!example] foto
> 
> [Diagrama comparativo de las cuatro secciones cónicas mostrando su origen como cortes transversales en un cono doble, incluyendo los elementos focales de cada una y sus respectivas ecuaciones generales].
