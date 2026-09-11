---
title: Sistema de ecuaciones lineales
---
# 2. Sistemas de ecuaciones lineales

## Introducción

La resolución de sistemas de ecuaciones lineales constituye uno de los problemas centrales del análisis numérico y el álgebra lineal. Su importancia radica en que una vasta cantidad de fenómenos físicos, económicos y biológicos pueden modelarse mediante relaciones lineales entre variables. El desarrollo de métodos sistemáticos para hallar soluciones, determinar la existencia de las mismas y analizar su estructura geométrica ha permitido avanzar en campos tan diversos como la optimización industrial, el procesamiento de señales y la mecánica estructural.

## Definición de sistema de ecuaciones lineales

Un **sistema de ecuaciones lineales (SEL)** es un conjunto finito de $m$ ecuaciones con $n$ incógnitas de la forma:

$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m \end{cases}$$

Donde:

- $x_1, x_2, \dots, x_n$ son las **incógnitas**.
    
- $a_{ij} \in \mathbb{K}$ son los **coeficientes** del sistema.
    
- $b_i \in \mathbb{K}$ son los **términos independientes**.
    

Una solución del sistema es una $n$-tupla $(s_1, s_2, \dots, s_n)$ que satisface simultáneamente las $m$ igualdades.

## Matriz de un sistema de ecuaciones

Un SEL puede expresarse de manera compacta mediante la notación matricial $Ax = b$, donde:

- $A \in \mathcal{M}_{m \times n}(\mathbb{K})$ es la **matriz de coeficientes**.
    
- $x \in \mathcal{M}_{n \times 1}(\mathbb{K})$ es el **vector columna de incógnitas**.
    
- $b \in \mathcal{M}_{m \times 1}(\mathbb{K})$ es el **vector columna de términos independientes**.
    

Para el análisis de soluciones, se utiliza la **matriz ampliada** o aumentada, denotada como $(A|b)$, que resulta de adjuntar el vector $b$ a la derecha de la matriz $A$:

$$(A|b) = \left( \begin{array}{cccc|c}

a_{11} & a_{12} & \dots & a_{1n} & b_1 \

a_{21} & a_{22} & \dots & a_{2n} & b_2 \

\vdots & \vdots & \ddots & \vdots & \vdots \

a_{m1} & a_{m2} & \dots & a_{mn} & b_m

\end{array} \right)$$

## Sistema homogéneo y no homogéneo

- **Sistema Homogéneo:** Es aquel donde $b = 0$ (es decir, $b_i = 0$ para todo $i$). Todo sistema homogéneo es **consistente**, pues admite al menos la **solución trivial** $x_1 = x_2 = \dots = x_n = 0$.
    
- **Sistema No Homogéneo:** Es aquel donde al menos un $b_i \neq 0$. Estos sistemas pueden ser consistentes (con solución única o infinitas) o inconsistentes (sin solución).
    

## Solución particular y solución general

- **Solución Particular ($x_p$):** Es cualquier vector específico que satisface la ecuación $Ax = b$.
    
- **Solución General:** Es el conjunto de todas las posibles soluciones del sistema. Para un sistema consistente, la solución general se expresa como la suma de una solución particular y la solución general del sistema homogéneo asociado ($Ax = 0$):
    
    $$x = x_p + x_h$$
    
    donde $x_h$ pertenece al **núcleo** o _nullspace_ de la matriz $A$.
    

## Relación entre las soluciones generales

Existe una relación estructural profunda entre el SEL no homogéneo y su correspondiente homogéneo. Si $x_1$ y $x_2$ son dos soluciones de $Ax = b$, su diferencia $x_1 - x_2$ es necesariamente una solución de $Ax = 0$. Por lo tanto, el conjunto de soluciones de un sistema no homogéneo es un **espacio afín**, que resulta de trasladar el subespacio vectorial de las soluciones homogéneas mediante un vector de solución particular.

## Sistemas equivalentes

Dos sistemas de ecuaciones lineales son **equivalentes** si y solo si poseen exactamente el mismo conjunto de soluciones. La equivalencia se preserva mediante la aplicación de operaciones que no alteren las restricciones del espacio de soluciones.

## Operaciones elementales entre ecuaciones

Para transformar un SEL en uno equivalente más sencillo, se emplean las siguientes operaciones:

1. Intercambiar el orden de dos ecuaciones.
    
2. Multiplicar una ecuación por un escalar no nulo.
    
3. Sumar a una ecuación el múltiplo de otra.
    

Estas operaciones corresponden directamente a las operaciones elementales de fila aplicadas a la matriz ampliada $(A|b)$.

## Método de eliminación gaussiana

El método de eliminación gaussiana consiste en aplicar operaciones elementales de fila a la matriz ampliada hasta transformarla en una **forma escalonada**.

- **Fase de eliminación hacia adelante:** Se eliminan las incógnitas bajo los pivotes para obtener una matriz triangular superior.
    
- **Sustitución regresiva:** Una vez obtenida la forma escalonada, se resuelven las incógnitas partiendo de la última fila hacia la primera.
    
    Si se continúa el proceso hasta obtener la forma escalonada reducida, el método se denomina **Gauss-Jordan**.
    

## Rango de una matriz

El **rango** de una matriz $A$, denotado como $\text{rang}(A)$ o $\rho(A)$, es el número máximo de filas (o columnas) linealmente independientes. En términos prácticos, es el número de pivotes (filas no nulas) presentes en su forma escalonada.

## Cálculo del rango mediante operaciones elementales y determinantes

1. **Por operaciones elementales:** Se reduce la matriz a su forma escalonada; el número de filas no nulas es el rango.
    
2. **Por determinantes (Método de los menores):** El rango es el orden del mayor menor no nulo de la matriz. Si existe un menor de orden $k$ distinto de cero y todos los menores de orden $k+1$ son cero, entonces $\text{rang}(A) = k$.
    

> [!example] foto
> 
> [Diagrama comparativo que muestre una matriz original y su transformación a forma escalonada, señalando visualmente cómo el número de filas con pivotes define el rango de la matriz].

## Variables libres

En un SEL con $n$ incógnitas y $\text{rang}(A) = r$, si el sistema es consistente y $r < n$, existen $n - r$ **variables libres**. Estas variables no poseen un pivote asociado en la forma escalonada y pueden tomar cualquier valor escalar, lo que genera un sistema con infinitas soluciones parametrizadas.

## Regla de Cramer

Es un método analítico para resolver SEL cuadrados ($m=n$) con $\det(A) \neq 0$. Cada incógnita se halla mediante la relación:

$$x_i = \frac{\det(A_i)}{\det(A)}$$

Donde $A_i$ es la matriz obtenida al reemplazar la columna $i$ de $A$ por el vector de términos independientes $b$.

## Descomposición LU y su aplicación en sistemas de ecuaciones lineales

La descomposición LU consiste en factorizar la matriz de coeficientes $A$ como el producto de dos matrices:

$$A = LU$$

Donde $L$ es una matriz triangular inferior (_Lower_) con unos en la diagonal y $U$ es una matriz triangular superior (_Upper_).

### Aplicación en SEL:

Para resolver $Ax = b$:

1. Se sustituye $A$: $LUx = b$.
    
2. Se define $Ux = y$, resultando en $Ly = b$.
    
3. Se resuelve $Ly = b$ por **sustitución progresiva** para hallar $y$.
    
4. Se resuelve $Ux = y$ por **sustitución regresiva** para hallar $x$.
    

Este método es altamente eficiente para resolver múltiples sistemas que comparten la misma matriz de coeficientes $A$ pero diferentes vectores $b$.
