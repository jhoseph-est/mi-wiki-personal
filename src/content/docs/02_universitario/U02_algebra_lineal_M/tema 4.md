---
title: Espacios vectoriales
---
# 4. Espacios vectoriales

## Introducción

La abstracción de las propiedades de las operaciones en $\mathbb{R}^n$ conduce a la noción de **espacio vectorial**, una estructura algebraica que unifica el estudio de diversos objetos matemáticos como vectores, matrices, polinomios y funciones. El análisis de los espacios vectoriales permite comprender la geometría subyacente a las operaciones de suma y escalonamiento, proporcionando las bases para la comprensión de la linealidad, la cual es esencial en la física moderna (mecánica cuántica) y el análisis funcional.

## Definición y propiedades

Un **espacio vectorial** $(V, +, \cdot)$ sobre un cuerpo $\mathbb{K}$ (usualmente $\mathbb{R}$ o $\mathbb{C}$) es un conjunto no vacío $V$ cuyos elementos se denominan vectores, dotado de dos operaciones que cumplen diez axiomas fundamentales:

### Axiomas de la suma de vectores

1. **Clausura:** $\forall u, v \in V, u + v \in V$.
    
2. **Asociatividad:** $(u + v) + w = u + (v + w)$.
    
3. **Conmutatividad:** $u + v = v + u$.
    
4. **Elemento neutro:** $\exists \mathbf{0} \in V$ tal que $v + \mathbf{0} = v, \forall v \in V$.
    
5. **Elemento opuesto:** $\forall v \in V, \exists -v \in V$ tal que $v + (-v) = \mathbf{0}$.
    

### Axiomas del producto por un escalar

6. **Clausura:** $\forall \alpha \in \mathbb{K}, \forall v \in V, \alpha v \in V$.
    
7. **Distributividad del escalar sobre vectores:** $\alpha(u + v) = \alpha u + \alpha v$.
    
8. **Distributividad del vector sobre escalares:** $(\alpha + \beta)v = \alpha v + \beta v$.
    
9. **Compatibilidad de escalares:** $\alpha(\beta v) = (\alpha \beta)v$.
    
10. **Elemento neutro del escalar:** $1 \cdot v = v$, donde 1 es la unidad de $\mathbb{K}$.
    

**Propiedades derivadas:**

- $0 \cdot v = \mathbf{0}$ para todo vector $v$.
    
- $\alpha \cdot \mathbf{0} = \mathbf{0}$ para todo escalar $\alpha$.
    
- Si $\alpha v = \mathbf{0}$, entonces $\alpha = 0$ o $v = \mathbf{0}$.
    

## Combinaciones lineales

Un vector $w \in V$ es una **combinación lineal** de un conjunto de vectores $\{v_1, v_2, \dots, v_n\}$ si existen escalares $c_1, c_2, \dots, c_n \in \mathbb{K}$ tales que:

$$w = c_1 v_1 + c_2 v_2 + \dots + c_n v_n = \sum_{i=1}^{n} c_i v_i$$

El conjunto de todas las combinaciones lineales posibles de un conjunto $S \subseteq V$ se denomina **envolvente lineal** o **span**, denotado como $\text{lin}(S)$ o $\text{span}(S)$.

## Dependencia e independencia lineal de vectores

Un conjunto de vectores $\{v_1, v_2, \dots, v_n\}$ se dice **linealmente independiente (L.I.)** si la única solución a la ecuación vectorial:

$$c_1 v_1 + c_2 v_2 + \dots + c_n v_n = \mathbf{0}$$

es la solución trivial $c_1 = c_2 = \dots = c_n = 0$.

Si existe al menos un $c_i \neq 0$ que satisfaga la ecuación, el conjunto es **linealmente dependiente (L.D.)**. Geométricamente, la dependencia lineal implica que al menos uno de los vectores puede expresarse como combinación lineal de los restantes, lo que representa redundancia en la descripción del espacio.

## Subespacios vectoriales

Un subconjunto no vacío $W \subseteq V$ es un **subespacio vectorial** de $V$ si $W$ es, por derecho propio, un espacio vectorial bajo las mismas operaciones de suma y producto escalar definidas en $V$.

## Teorema fundamental (caracterización de un subespacio)

Un subconjunto $W$ es un subespacio de $V$ si y solo si cumple las siguientes tres condiciones de manera simultánea:

1. El vector nulo de $V$ pertenece a $W$ ($\mathbf{0} \in W$).
    
2. **Cerrado bajo la suma:** Si $u, v \in W$, entonces $u + v \in W$.
    
3. **Cerrado bajo el producto escalar:** Si $\alpha \in \mathbb{K}$ y $v \in W$, entonces $\alpha v \in W$.
    

Estas tres condiciones pueden resumirse en una sola: $W$ es un subespacio si $\forall \alpha, \beta \in \mathbb{K}$ y $\forall u, v \in W$, se cumple que $\alpha u + \beta v \in W$.

## Descripción implícita y paramétrica de subespacios

Un subespacio puede ser descrito matemáticamente de dos formas complementarias:

1. **Forma Implícita (o cartesiana):** El subespacio se define como el conjunto de soluciones de un sistema de ecuaciones lineales homogéneo.
    
    $$W = \{ (x_1, \dots, x_n) \in V : A \mathbf{x} = \mathbf{0} \}$$
    
    Las ecuaciones representan restricciones geométricas (hiperplanos) cuya intersección es el subespacio.
    
2. **Forma Paramétrica:** El subespacio se define mediante variables libres (parámetros), expresando cada vector genérico como una combinación lineal de una base.
    
    $$W = \{ \lambda_1 v_1 + \dots + \lambda_k v_k : \lambda_i \in \mathbb{K} \}$$
    

## Conjuntos generadores de espacios

Un conjunto $S = \{v_1, v_2, \dots, v_n\}$ es un **conjunto generador** de $V$ si todo vector $v \in V$ puede expresarse como una combinación lineal de los elementos de $S$. En este caso, se dice que $V = \text{span}(S)$. Mientras que la independencia lineal asegura la "eficiencia", el carácter de generador asegura la "cobertura" del espacio.

## Conjuntos equivalentes

Dos conjuntos de vectores $S_1$ y $S_2$ son **equivalentes** si generan el mismo subespacio vectorial ($\text{span}(S_1) = \text{span}(S_2)$). Esto ocurre si cada vector de $S_1$ puede expresarse como combinación lineal de los vectores de $S_2$ y viceversa.

## Base y dimensión de un espacio vectorial finito

Una **base** $B$ de un espacio vectorial $V$ es un conjunto de vectores que cumple dos condiciones:

1. Es linealmente independiente.
    
2. Es un conjunto generador de $V$.
    

La **dimensión** de $V$, denotada como $\text{dim}(V)$, es el número de vectores que conforman cualquiera de sus bases. Todas las bases de un mismo espacio vectorial finito tienen el mismo número de elementos (Teorema de la base).

## Cambio de base

Dado un vector $v \in V$ y dos bases distintas $B = \{u_1, \dots, u_n\}$ y $B' = \{w_1, \dots, w_n\}$, el vector puede representarse mediante coordenadas respecto a ambas: $[v]_B$ y $[v]_{B'}$.

La relación entre estas coordenadas viene dada por la **matriz de transición** (o de cambio de base) $P_{B \to B'}$:

$$[v]_{B'} = P_{B \to B'} [v]_B$$

Las columnas de $P_{B \to B'}$ son las coordenadas de los vectores de la base $B$ expresadas en términos de la base $B'$.

## Operaciones con subespacios: inclusión, intersección, suma

Sean $U$ y $W$ subespacios de $V$:

- **Inclusión:** $U \subseteq W$ si todo vector de $U$ pertenece a $W$.
    
- **Intersección ($U \cap W$):** El conjunto de vectores que pertenecen simultáneamente a $U$ y $W$. La intersección de subespacios es siempre un subespacio.
    
- **Suma ($U + W$):** El conjunto de todos los vectores $v$ tales que $v = u + w$, con $u \in U$ y $w \in W$. Es el subespacio más pequeño que contiene tanto a $U$ como a $W$.
    

**Fórmula de Grassmann:**

$$\text{dim}(U + W) = \text{dim}(U) + \text{dim}(W) - \text{dim}(U \cap W)$$

## Suma directa de subespacios

Se dice que $V$ es la **suma directa** de $U$ y $W$ (denotado $V = U \oplus W$) si:

1. $V = U + W$.
    
2. $U \cap W = \{\mathbf{0}\}$.
    

En una suma directa, cada vector $v \in V$ tiene una representación única de la forma $v = u + w$. Si $V = U \oplus W$, entonces $U$ y $W$ son subespacios complementarios y $\text{dim}(V) = \text{dim}(U) + \text{dim}(W)$.

> [!example] foto
> 
> [Diagrama de Venn modificado para subespacios vectoriales en $\mathbb{R}^3$, mostrando dos planos que se intersecan en una recta para ilustrar la intersección y la suma, y un ejemplo de suma directa donde un plano y una recta no contenida en él generan todo el espacio].
