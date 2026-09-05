---
title: Vectores y rectas en R²
---
# 5. Vectores y rectas en $\mathbb{R}^2$

## Introducción

El estudio de los vectores y las rectas en el plano cartesiano ($\mathbb{R}^2$) constituye la base de la geometría analítica moderna. Esta disciplina permite la unificación de los métodos algebraicos con las intuiciones geométricas, transformando figuras y relaciones espaciales en ecuaciones manipulables. En el contexto técnico, $\mathbb{R}^2$ sirve como el prototipo de espacio métrico y normado, donde se definen conceptos fundamentales de dirección, magnitud y proximidad que son indispensables para la física clásica y la computación gráfica.

## Vectores en $\mathbb{R}^2$: sistema de coordenadas bidimensional

El conjunto $\mathbb{R}^2$ se define como el producto cartesiano $\mathbb{R} \times \mathbb{R}$, compuesto por todos los pares ordenados $(x, y)$ de números reales. En este sistema, cada par representa un punto o un vector posicionado respecto a un origen $O(0,0)$, donde $x$ es la abscisa e $y$ la ordenada.

## Operaciones con pares ordenados

Dadas las tuplas $u = (u_1, u_2)$ y $v = (v_1, v_2)$ en $\mathbb{R}^2$, se definen las siguientes operaciones binarias:

1. **Igualdad:** $u = v \iff u_1 = v_1 \text{ y } u_2 = v_2$.
    
2. **Suma:** $u + v = (u_1 + v_1, u_2 + v_2)$.
    
3. **Producto por escalar:** $\alpha u = (\alpha u_1, \alpha u_2)$, para cualquier $\alpha \in \mathbb{R}$.
    

## Espacio vectorial bidimensional real

$\mathbb{R}^2$ con las operaciones de suma y producto escalar anteriormente definidas satisface los diez axiomas de un espacio vectorial sobre el cuerpo de los reales. Posee dimensión 2, y su base canónica está integrada por los vectores unitarios $i = (1, 0)$ y $j = (0, 1)$.

## Representación geométrica de vectores

Geométricamente, un vector en $\mathbb{R}^2$ se representa como un segmento de recta orientado (flecha). La suma de vectores sigue la **regla del paralelogramo** o la regla del triángulo, donde el vector resultante une el origen del primer vector con el extremo del último.

![Imagen de vector addition parallelogram law](https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRHNKzrHNhQ1wXXcUD-BYj-saw4y-RZ3XtNYTlzgHABtqKwaCtAhvdZ6Nh4C1V304fKzDmoP087QVdPqFdRxDh8qpL6VXeSFcW3zk01ZfKdQjVtuNo)

Shutterstock

Explorar

## Vector de posición, vector libre, vectores paralelos

- **Vector de posición:** Aquel cuyo punto inicial es el origen $(0,0)$. Todo punto $P(x,y)$ tiene un único vector de posición asociado $\vec{OP}$.
    
- **Vector libre:** Clase de equivalencia de todos los segmentos orientados que tienen la misma magnitud, dirección y sentido, independientemente de su punto de aplicación.
    
- **Vectores paralelos:** Dos vectores $u$ y $v$ son paralelos ($u \parallel v$) si existe un escalar $\lambda \neq 0$ tal que $u = \lambda v$.
    

## Norma de un vector y propiedades

La norma euclidiana (o magnitud) de un vector $v = (v_1, v_2)$, denotada como $\|v\|$, se define mediante el Teorema de Pitágoras:

$$\|v\| = \sqrt{v_1^2 + v_2^2}$$

**Propiedades:**

1. $\|v\| \geq 0$; $\|v\| = 0 \iff v = \mathbf{0}$.
    
2. $\|\alpha v\| = |\alpha| \cdot \|v\|$.
    
3. Desigualdad triangular: $\|u + v\| \leq \|u\| + \|v\|$.
    

## Distancia entre dos puntos

La distancia $d(P_1, P_2)$ entre dos puntos $P_1(x_1, y_1)$ y $P_2(x_2, y_2)$ es la norma del vector que los une:

$$d(P_1, P_2) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

## Vector unitario, vectores ortogonales

- **Vector unitario:** Un vector $u$ es unitario si $\|u\| = 1$. Dado $v \neq 0$, el vector $\frac{v}{\|v\|}$ es el vector unitario en la dirección de $v$.
    
- **Vectores ortogonales:** Dos vectores son ortogonales ($u \perp v$) si su producto escalar es nulo.
    

## Producto escalar y propiedades

El producto escalar (o producto punto) de $u = (u_1, u_2)$ y $v = (v_1, v_2)$ se define como:

$$u \cdot v = u_1 v_1 + u_2 v_2$$

**Propiedades:**

1. Conmutatividad: $u \cdot v = v \cdot u$.
    
2. Distributividad: $u \cdot (v + w) = u \cdot v + u \cdot w$.
    
3. Relación con la norma: $v \cdot v = \|v\|^2$.
    

## Ángulo de inclinación de un vector

Es el ángulo $\theta$ que forma el vector con el semieje positivo de las abscisas, medido en sentido antihorario. Se determina mediante:

$$\theta = \arctan\left(\frac{v_2}{v_1}\right)$$

considerando el cuadrante correspondiente para la corrección del argumento.

## Combinación lineal de vectores

Un vector $w$ es combinación lineal de $u$ y $v$ si existen $\alpha, \beta \in \mathbb{R}$ tales que $w = \alpha u + \beta v$. En $\mathbb{R}^2$, cualquier vector puede expresarse como combinación lineal de dos vectores no paralelos.

## Vectores ortonormales

Un conjunto de vectores es ortonormal si todos sus elementos son unitarios y ortogonales entre sí. En $\mathbb{R}^2$, la base $\{i, j\}$ es el ejemplo canónico de sistema ortonormal.

## Vectores linealmente dependientes e independientes

En $\mathbb{R}^2$, un par de vectores es L.D. si y solo si son colineales (paralelos). Son L.I. si apuntan en direcciones distintas, lo cual implica que el determinante de la matriz formada por ellos es no nulo.

## Ángulo entre dos vectores

El ángulo $\phi \in [0, \pi]$ entre dos vectores no nulos $u$ y $v$ se deriva de la definición geométrica del producto escalar:

$$\cos \phi = \frac{u \cdot v}{\|u\| \|v\|} \implies \phi = \arccos\left(\frac{u_1 v_1 + u_2 v_2}{\|u\| \|v\|}\right)$$

## Proyección ortogonal y componente ortogonal

La proyección ortogonal de $u$ sobre $v$ ($v \neq 0$), denotada $\text{proy}_v u$, es el vector:

$$\text{proy}_v u = \left( \frac{u \cdot v}{\|v\|^2} \right) v$$

La **componente escalar** u **ortogonal** es la magnitud con signo de dicha proyección: $\text{comp}_v u = \frac{u \cdot v}{\|v\|}$.

## Bisectriz de un ángulo

La bisectriz de un ángulo formado por los vectores $u$ y $v$ puede representarse vectorialmente mediante la suma de sus vectores unitarios correspondientes:

$$b = \frac{u}{\|u\|} + \frac{v}{\|v\|}$$

## Área de un paralelogramo y de un triángulo

- **Paralelogramo:** El área de un paralelogramo generado por $u = (u_1, u_2)$ y $v = (v_1, v_2)$ es el valor absoluto del determinante de la matriz formada por ellos:
    
    $$\text{Área} = |u_1 v_2 - u_2 v_1|$$
    
- **Triángulo:** Es la mitad del área del paralelogramo: $\text{Área} = \frac{1}{2} |u_1 v_2 - u_2 v_1|$.
    

## La recta en $\mathbb{R}^2$: definición y ecuaciones

Una recta $\mathcal{L}$ es el conjunto de puntos $P(x, y)$ que satisfacen diversas formas algebraicas:

1. **Vectorial:** $P = P_0 + t\vec{v}$, donde $P_0$ es un punto de la recta, $\vec{v}$ es el vector director y $t \in \mathbb{R}$.
    
2. **Paramétrica:** $x = x_0 + tv_1, \quad y = y_0 + tv_2$.
    
3. **Simétrica:** $\frac{x-x_0}{v_1} = \frac{y-y_0}{v_2}$ (si $v_1, v_2 \neq 0$).
    
4. **Normal:** $\vec{n} \cdot (P - P_0) = 0$, donde $\vec{n}$ es un vector perpendicular a la recta.
    
5. **General:** $Ax + By + C = 0$, donde $\vec{n} = (A, B)$ es el vector normal.
    
6. **Interceptos:** $\frac{x}{a} + \frac{y}{b} = 1$, donde $a$ y $b$ son las intersecciones con los ejes $x$ e $y$.
    

## Distancia de un punto a una recta

La distancia mínima de un punto $P_1(x_1, y_1)$ a la recta $\mathcal{L}: Ax + By + C = 0$ se calcula como:

$$d(P_1, \mathcal{L}) = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}$$

## Segmento de recta y división en una razón dada

Si un punto $P$ divide al segmento $P_1P_2$ en la razón $r = \frac{P_1P}{PP_2}$, sus coordenadas son:

$$x = \frac{x_1 + r x_2}{1 + r}, \quad y = \frac{y_1 + r y_2}{1 + r}$$

## Ángulo de inclinación y pendiente de una recta

La **pendiente** $m$ es la tangente del ángulo de inclinación $\alpha$:

$$m = \tan \alpha = \frac{y_2 - y_1}{x_2 - x_1} = -\frac{A}{B}$$

## Ecuación punto-pendiente

Si se conoce un punto $P_0(x_0, y_0)$ y la pendiente $m$, la ecuación es:

$$y - y_0 = m(x - x_0)$$

## Rectas paralelas y ortogonales

Dadas dos rectas con pendientes $m_1$ y $m_2$:

- **Paralelas:** $m_1 = m_2$.
    
- **Ortogonales:** $m_1 \cdot m_2 = -1$ (o una es vertical y la otra horizontal).
    

## Intersección de rectas

La intersección de dos rectas se halla resolviendo el sistema de dos ecuaciones con dos incógnitas formado por sus ecuaciones generales. Puede resultar en un punto único, ninguna solución (paralelas) o infinitas soluciones (coincidentes).

## Familia de rectas

Una familia de rectas es un conjunto de rectas que comparten una propiedad común (como pasar por un punto fijo o tener la misma pendiente). Se expresa mediante una ecuación con un parámetro $k$.

## Ángulo entre dos rectas

Dadas las rectas con pendientes $m_1$ y $m_2$, el ángulo $\theta$ entre ellas se obtiene por:

$$\tan \theta = \left| \frac{m_2 - m_1}{1 + m_1 m_2} \right|$$

## Área de un triángulo

Para un triángulo con vértices $P_1(x_1, y_1)$, $P_2(x_2, y_2)$ y $P_3(x_3, y_3)$, el área se determina mediante el valor absoluto del determinante:

$$\text{Área} = \frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

> [!example] foto
> 
> [Diagrama detallado de una recta en el plano cartesiano mostrando su vector director, su vector normal, la pendiente como relación entre catetos de un triángulo rectángulo, y la representación del ángulo de inclinación].
