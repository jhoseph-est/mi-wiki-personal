---
title: Vectores, rectas y planos en R³
---
# 6. Vectores, rectas y planos en $\mathbb{R}^3$

## Introducción

La extensión del análisis algebraico al espacio euclidiano tridimensional ($\mathbb{R}^3$) permite el modelado de fenómenos físicos en el espacio real. El estudio de vectores, rectas y planos en tres dimensiones introduce conceptos de quiralidad y orientación que no están presentes en el plano, tales como el producto vectorial. Esta sección establece las bases geométricas para el cálculo multivariable, la mecánica racional y el diseño asistido por computadora, proporcionando un marco analítico para describir la posición y orientación de objetos en el espacio.

## Vectores en $\mathbb{R}^3$: sistema de coordenadas tridimensional

El espacio $\mathbb{R}^3$ se define como el producto cartesiano $\mathbb{R} \times \mathbb{R} \times \mathbb{R}$, compuesto por ternas ordenadas $(x, y, z)$. El sistema se rige por la **regla de la mano derecha**, donde los ejes $X$ (abscisas), $Y$ (ordenadas) y $Z$ (cotas) son mutuamente perpendiculares y se intersecan en el origen $O(0, 0, 0)$.

## Operaciones con ternas ordenadas

Dadas las ternas $u = (u_1, u_2, u_3)$ y $v = (v_1, v_2, v_3)$ en $\mathbb{R}^3$:

1. **Suma:** $u + v = (u_1 + v_1, u_2 + v_2, u_3 + v_3)$.
    
2. **Producto por escalar:** $\alpha u = (\alpha u_1, \alpha u_2, \alpha u_3)$, con $\alpha \in \mathbb{R}$.
    
3. **Igualdad:** $u = v$ si y solo si $u_i = v_i$ para $i=1, 2, 3$.
    

## Espacio vectorial tridimensional

$\mathbb{R}^3$ constituye un espacio vectorial de dimensión 3 sobre el cuerpo de los reales. Bajo las operaciones de suma y producto escalar, cumple con la estructura de grupo abeliano y las leyes de distributividad escalar, poseyendo una base única de tres vectores para representar cualquier punto del espacio.

## Vector tridimensional y operaciones

Un vector en $\mathbb{R}^3$ puede ser visto como un ente algebraico (terna) o geométrico (segmento orientado). Las operaciones de suma y resta se realizan componente a componente, cumpliendo con las propiedades de asociatividad, conmutatividad y existencia de elemento neutro e inverso.

## Vector de posición, vector libre

- **Vector de posición:** Vector $\vec{r} = \vec{OP}$ que une el origen con un punto $P(x, y, z)$.
    
- **Vector libre:** Representación de una magnitud vectorial que no está ligada a un punto inicial específico, definida únicamente por su norma, dirección y sentido.
    

## Norma de un vector y propiedades

La norma euclidiana de $v = (v_1, v_2, v_3)$ es:

$$\|v\| = \sqrt{v_1^2 + v_2^2 + v_3^2}$$

Cumple las propiedades de positividad, homogeneidad ($\|\alpha v\| = |\alpha| \cdot \|v\|$) y la desigualdad triangular.

## Distancia entre dos puntos en $\mathbb{R}^3$

La distancia entre $P_1(x_1, y_1, z_1)$ y $P_2(x_2, y_2, z_2)$ es la norma del vector $\vec{P_1P_2}$:

$$d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

## Segmento de recta y coordenadas del baricentro

En un sistema de puntos $P_i$, el baricentro $G$ de un conjunto de vértices (como un triángulo) es el promedio aritmético de sus coordenadas:

$$G = \left( \frac{\sum x_i}{n}, \frac{\sum y_i}{n}, \frac{\sum z_i}{n} \right)$$

## Combinación lineal de vectores

Un vector $w$ es combinación lineal de $\{v_1, v_2, v_3\}$ si existen $\alpha, \beta, \gamma \in \mathbb{R}$ tales que $w = \alpha v_1 + \beta v_2 + \gamma v_3$.

## Dependencia e independencia lineal

Un conjunto de vectores en $\mathbb{R}^3$ es L.I. si su única combinación lineal nula es la trivial. Tres vectores son L.D. si y solo si son coplanares (están en el mismo plano).

## Vectores fundamentales

La base canónica de $\mathbb{R}^3$ está formada por los vectores unitarios:

- $i = (1, 0, 0)$
    
- $j = (0, 1, 0)$
    
- $k = (0, 0, 1)$
    

## Producto escalar y propiedades

$u \cdot v = u_1 v_1 + u_2 v_2 + u_3 v_3$. Es una operación conmutativa y distributiva. Se relaciona con el ángulo mediante $u \cdot v = \|u\| \|v\| \cos \theta$.

## Vectores paralelos

$u \parallel v$ si $u \times v = \mathbf{0}$ o si existe $\lambda$ tal que $u = \lambda v$. Sus componentes son proporcionales: $\frac{u_1}{v_1} = \frac{u_2}{v_2} = \frac{u_3}{v_3}$.

## Puntos colineales

Tres puntos $A, B, C$ son colineales si los vectores $\vec{AB}$ y $\vec{BC}$ son paralelos.

## Proyección ortogonal y componente ortogonal

$\text{proy}_v u = \left( \frac{u \cdot v}{\|v\|^2} \right) v$. La componente es el escalar $\text{comp}_v u = \frac{u \cdot v}{\|v\|}$.

## Ángulo entre dos vectores

$\cos \theta = \frac{u \cdot v}{\|u\| \|v\|}$ para $\theta \in [0, \pi]$.

## Vectores unitarios

Un vector $u$ es unitario si $\|u\| = 1$. El vector unitario en la dirección de $v$ es $\hat{u} = v / \|v\|$.

## Bisectriz de un ángulo

Dado el ángulo entre $u$ y $v$, el vector bisector es $b = \frac{u}{\|u\|} + \frac{v}{\|v\|}$.

## Ángulos, cosenos y números directores de un vector

Si $\alpha, \beta, \gamma$ son los ángulos que forma el vector con los ejes $X, Y, Z$:

$$\cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma = 1$$

Los componentes del vector unitario son precisamente sus cosenos directores.

## Producto vectorial e interpretación geométrica

El producto vectorial $u \times v$ es un vector ortogonal a ambos, cuya magnitud $\|u \times v\| = \|u\| \|v\| \sin \theta$ representa el **área del paralelogramo** generado. Se calcula mediante el determinante:

$$u \times v = \begin{vmatrix} i & j & k \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix}$$

## Triple producto escalar e interpretación geométrica

Definido como $u \cdot (v \times w)$. Su valor absoluto representa el **volumen del paralelepípedo** formado por los tres vectores.

## Volumen de un tetraedro

$V = \frac{1}{6} |u \cdot (v \times w)|$.

## La recta en $\mathbb{R}^3$: definición y ecuaciones

1. **Vectorial:** $P = P_0 + t\vec{v}$.
    
2. **Paramétrica:** $x = x_0 + tv_1, y = y_0 + tv_2, z = z_0 + tv_3$.
    
3. **Simétrica:** $\frac{x-x_0}{v_1} = \frac{y-y_0}{v_2} = \frac{z-z_0}{v_3}$.
    

## Rectas paralelas y ortogonales

Dependen de la relación entre sus vectores directores $\vec{v_1}$ y $\vec{v_2}$ (paralelismo o producto escalar nulo).

## Distancia entre rectas paralelas

$d = \frac{\|\vec{P_1P_2} \times \vec{v}\|}{\|\vec{v}\|}$.

## Distancia mínima entre rectas que se cruzan

$d = \frac{|\vec{P_1P_2} \cdot (\vec{v_1} \times \vec{v_2})|}{\|\vec{v_1} \times \vec{v_2}\|}$.

## Ángulo entre dos rectas

Determinado por el coseno del ángulo entre sus vectores directores.

## Proyección ortogonal de un punto sobre una recta

Es el punto $Q$ de la recta tal que $\vec{PQ} \perp \vec{v}$.

## El plano: definición y ecuaciones

1. **Vectorial:** $P = P_0 + s\vec{u} + t\vec{v}$.
    
2. **Normal:** $\vec{n} \cdot (P - P_0) = 0$.
    
3. **General:** $Ax + By + Cz + D = 0$, donde $\vec{n} = (A, B, C)$.
    

## Planos paralelos y ortogonales

Dos planos son paralelos si sus normales son paralelas, y ortogonales si $\vec{n_1} \cdot \vec{n_2} = 0$.

## Intersección de planos

Dos planos no paralelos se intersecan en una recta.

## Ecuación biplanar de la recta

Una recta expresada como la intersección de dos planos:

$$\begin{cases} A_1x + B_1y + C_1z + D_1 = 0 \\ A_2x + B_2y + C_2z + D_2 = 0 \end{cases}$$

## Intersección de un plano y una recta

Se halla sustituyendo las ecuaciones paramétricas de la recta en la general del plano.

## Familia de planos

Conjunto de planos que contienen una recta común (haz de planos):

$(A_1x + B_1y + C_1z + D_1) + \lambda(A_2x + B_2y + C_2z + D_2) = 0$.

## Posiciones relativas entre un plano y una recta

Puede ser contenida en el plano, paralela al plano o secante al plano.

## Distancia de un punto a un plano

$d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$.

## Distancia entre dos planos paralelos

$d = \frac{|D_2 - D_1|}{\|\vec{n}\|}$ (con normales normalizadas).

## Ángulo entre recta y plano

Es el complementario del ángulo entre el director de la recta y la normal del plano: $\sin \theta = \frac{|\vec{v} \cdot \vec{n}|}{\|\vec{v}\| \|\vec{n}\|}$.

## Ángulo entre dos planos

Ángulo entre sus vectores normales.

## Proyección ortogonal de un punto sobre un plano

Punto $P'$ en el plano tal que $\vec{PP'}$ es paralelo a $\vec{n}$.

## Proyección ortogonal de una recta sobre un plano

Es la recta formada por la proyección de todos sus puntos; se obtiene intersecando el plano dado con un plano perpendicular que contenga a la recta.

> [!example] foto
> 
> [Diagrama tridimensional que muestre un plano con su vector normal, una recta que lo atraviesa, el ángulo entre ambos y la proyección de la recta sobre el plano formando una sombra geométrica].
