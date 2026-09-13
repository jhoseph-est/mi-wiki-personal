---
title: Aplicaciones de matrices, determinantes y sistemas de ecuaciones lineales
---
# 3. Aplicaciones de matrices, determinantes y sistemas de ecuaciones lineales

## Introducción

La operatividad algebraica de las matrices y los determinantes trasciende la mera resolución de sistemas lineales, convirtiéndose en el lenguaje fundamental para el análisis de transformaciones lineales y la estabilidad de sistemas dinámicos. En este módulo, se abordan las herramientas que permiten simplificar la representación de operadores lineales mediante el estudio de sus invariantes geométricos y algebraicos, facilitando el cálculo de potencias matriciales, la resolución de ecuaciones diferenciales lineales y la optimización de formas cuadráticas en contextos de ingeniería y física.

## Valores y vectores propios

Sea $A \in \mathcal{M}_{n \times n}(\mathbb{K})$ un operador lineal. Un escalar $\lambda \in \mathbb{K}$ se denomina **valor propio** (o autovalor) de $A$ si existe un vector no nulo $v \in \mathbb{K}^n$, llamado **vector propio** (o autovector), tal que se satisface la ecuación fundamental:

$$Av = \lambda v$$

Esta relación indica que la aplicación de la matriz $A$ sobre el vector $v$ resulta en un escalamiento del mismo, preservando su dirección. Para hallar los valores propios, se resuelve la **ecuación característica**:

$$\det(A - \lambda I_n) = 0$$

El polinomio $P(\lambda) = \det(A - \lambda I_n)$ es de grado $n$, y sus raíces en $\mathbb{K}$ constituyen el espectro de la matriz, denotado como $\sigma(A)$.

## Propiedades

Los valores y vectores propios poseen propiedades algebraicas que vinculan los invariantes de la matriz con su espectro:

1. **Traza y Determinante:** La suma de los valores propios (contando multiplicidad) es igual a la traza de la matriz ($\sum \lambda_i = \text{tr}(A)$), y su producto es igual al determinante ($\prod \lambda_i = \det(A)$).
    
2. **Independencia Lineal:** Vectores propios asociados a valores propios distintos son linealmente independientes.
    
3. **Valores propios de potencias:** Si $\lambda$ es un valor propio de $A$, entonces $\lambda^k$ es un valor propio de $A^k$ para cualquier $k \in \mathbb{N}$.
    
4. **Multiplicidad:** Se distingue entre la **multiplicidad algebraica** ($m_a$), que es el número de veces que $\lambda$ aparece como raíz del polinomio característico, y la **multiplicidad geométrica** ($m_g$), que es la dimensión del autoespacio asociado $E_\lambda = \{v : (A - \lambda I)v = 0\}$. Siempre se cumple que $1 \leq m_g \leq m_a$.
    

## Teorema de Cayley-Hamilton

El **Teorema de Cayley-Hamilton** establece que toda matriz cuadrada $A$ satisface su propia ecuación característica. Si $P(\lambda) = (-1)^n \lambda^n + c_{n-1} \lambda^{n-1} + \dots + c_1 \lambda + c_0$ es el polinomio característico de $A$, entonces:

$$P(A) = (-1)^n A^n + c_{n-1} A^{n-1} + \dots + c_1 A + c_0 I_n = \mathbf{0}$$

Donde $\mathbf{0}$ es la matriz nula.

- **Aplicación en Inversas:** Si $\det(A) \neq 0$, el término constante $c_0 \neq 0$, lo que permite despejar $A^{-1}$ como una combinación lineal de las potencias $\{I, A, A^2, \dots, A^{n-1}\}$.
    
- **Reducción de Potencias:** Permite expresar potencias elevadas $A^k$ ($k \geq n$) como polinomios en $A$ de grado a lo sumo $n-1$.
    

## Proceso de ortogonalización de Gram-Schmidt

El proceso de **Gram-Schmidt** es un algoritmo para construir una base ortogonal (u ortonormal) a partir de un conjunto de vectores linealmente independientes $\{v_1, v_2, \dots, v_n\}$ en un espacio con producto interno.

Dados $\{v_1, \dots, v_n\}$, los vectores ortogonales $\{u_1, \dots, u_n\}$ se definen como:

1. $u_1 = v_1$
    
2. $u_2 = v_2 - \text{proj}_{u_1}(v_2) = v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1$
    
3. $u_k = v_k - \sum_{j=1}^{k-1} \frac{\langle v_k, u_j \rangle}{\langle u_j, u_j \rangle} u_j$
    

Donde $\langle \cdot, \cdot \rangle$ representa el producto escalar. Para obtener una base **ortonormal**, se normaliza cada vector: $e_k = \frac{u_k}{\|u_k\|}$.

> [!example] foto
> 
> [Esquema geométrico en $\mathbb{R}^3$ que ilustre la proyección de un vector sobre el subespacio generado por los vectores anteriores y la obtención del vector residual ortogonal].

## Diagonalización de matrices

Una matriz $A \in \mathcal{M}_{n \times n}(\mathbb{K})$ es **diagonalizable** si existe una matriz invertible $P$ y una matriz diagonal $D$ tales que:

$$A = PDP^{-1}$$

- **Condición necesaria y suficiente:** $A$ es diagonalizable si y solo si posee $n$ vectores propios linealmente independientes. Esto ocurre si para cada valor propio, la multiplicidad algebraica coincide con la multiplicidad geométrica ($m_a = m_g$).
    
- **Estructura:** Las columnas de $P$ son los vectores propios de $A$, y los elementos de la diagonal de $D$ son los correspondientes valores propios.
    

## Matrices semejantes

Dos matrices $A, B \in \mathcal{M}_{n \times n}(\mathbb{K})$ son **semejantes** si existe una matriz invertible $P$ tal que $B = P^{-1}AP$. La semejanza es una relación de equivalencia que preserva invariantes fundamentales:

1. Mismo determinante: $\det(A) = \det(B)$.
    
2. Misma traza: $\text{tr}(A) = \text{tr}(B)$.
    
3. Mismo polinomio característico.
    
4. Mismos valores propios (aunque no necesariamente los mismos vectores propios).
    

## Diagonalización ortogonal de matrices simétricas

El **Teorema Espectral** para matrices simétricas reales ($A = A^T$) establece que:

1. Todos los valores propios de $A$ son reales.
    
2. Vectores propios asociados a valores propios distintos son ortogonales entre sí.
    
3. $A$ siempre es diagonalizable mediante una **matriz ortogonal** $Q$ (doncall $Q^T = Q^{-1}$), tal que:
    
    $$A = QDQ^T$$
    
    Esta propiedad es crucial en el análisis de componentes principales (PCA) y en la simplificación de formas cuadráticas $x^T Ax$.
    

## Aplicación de sistemas de ecuaciones a problemas reales

Los SEL son herramientas resolutivas en múltiples dominios técnicos:

- **Análisis de Redes Eléctricas:** Aplicación de las leyes de Kirchhoff para determinar corrientes y voltajes en nodos y mallas.
    
- **Balance de Reacciones Químicas:** Determinación de coeficientes estequiométricos mediante sistemas homogéneos que aseguran la conservación de la masa.
    
- **Modelos de Insumo-Producto (Leontief):** Utilizados en economía para analizar la interdependencia entre distintos sectores industriales mediante la ecuación $x = Cx + d$, donde $(I-C)x = d$.
    
- **Mecánica de Estructuras:** Cálculo de desplazamientos y fuerzas internas en cerchas y pórticos mediante el método de rigidez, donde $K u = f$ ($K$ es la matriz de rigidez).
