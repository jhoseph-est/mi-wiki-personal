---
title: Matrices y determinantes
---
# 1. Matrices y determinantes

## Introducción

El estudio de las matrices y los determinantes constituye la piedra angular del álgebra lineal, proporcionando un marco formal para el tratamiento de sistemas de ecuaciones lineales, transformaciones geométricas y operadores lineales en espacios vectoriales de dimensión finita. Históricamente, el concepto de determinante precedió al de matriz, surgiendo de la necesidad de establecer condiciones de existencia y unicidad de soluciones en sistemas lineales. En el contexto del análisis matemático y la ingeniería, las matrices se consolidan como representaciones tabulares de datos y operadores, permitiendo la compactación de algoritmos complejos en estructuras algebraicas manipulables mediante reglas operativas estrictas.

## Definición y propiedades

Una **matriz** $A$ de orden $m \times n$ sobre un cuerpo $\mathbb{K}$ (usualmente $\mathbb{R}$ o $\mathbb{C}$) se define como una aplicación de un conjunto de índices $\{1, \dots, m\} \times \{1, \dots, n\}$ en $\mathbb{K}$, denotada como $A = (a_{ij})$, donde $a_{ij}$ representa el elemento situado en la fila $i$ y la columna $j$. El conjunto de todas las matrices de dimensiones $m \times n$ se denota por $\mathcal{M}_{m \times n}(\mathbb{K})$.

### Propiedades de las operaciones fundamentales

1. **Suma de matrices:** Sean $A, B \in \mathcal{M}_{m \times n}(\mathbb{K})$. La suma $C = A + B$ se define elemento a elemento como $c_{ij} = a_{ij} + b_{ij}$. Esta operación confiere a $\mathcal{M}_{m \times n}(\mathbb{K})$ una estructura de grupo abeliano.
    
2. **Producto por un escalar:** Sea $\alpha \in \mathbb{K}$ y $A \in \mathcal{M}_{m \times n}(\mathbb{K})$. El producto $\alpha A$ resulta en una matriz donde cada componente es $\alpha a_{ij}$.
    
3. **Producto de matrices:** Sean $A \in \mathcal{M}_{m \times p}(\mathbb{K})$ y $B \in \mathcal{M}_{p \times n}(\mathbb{K})$. El producto $C = AB$, donde $C \in \mathcal{M}_{m \times n}(\mathbb{K})$, se define mediante la suma:
    
    $$c_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj}$$
    
    El producto es asociativo y distributivo respecto a la suma, pero no conmutativo en general ($AB \neq BA$).
    

## Álgebra de matrices cuadradas: potencias y polinomios de matrices

En el espacio $\mathcal{M}_{n \times n}(\mathbb{K})$, las matrices poseen el mismo número de filas y columnas, permitiendo la iteración del producto.

### Potencias de una matriz

Para una matriz cuadrada $A$, se define la potencia $k$-ésima de forma recursiva:

- $A^0 = I_n$ (Matriz identidad).
    
- $A^k = A \cdot A^{k-1}$ para todo $k \in \mathbb{N}$.
    

### Polinomios de matrices

Sea $P(x) = c_m x^m + c_{m-1} x^{m-1} + \dots + c_1 x + c_0$ un polinomio con coeficientes en $\mathbb{K}$. Se define el polinomio de la matriz $A$ como:

$$P(A) = c_m A^m + c_{m-1} A^{m-1} + \dots + c_1 A + c_0 I_n$$

Este concepto es fundamental en el Teorema de Cayley-Hamilton, el cual establece que toda matriz cuadrada anula su propio polinomio característico, es decir, $p_A(A) = 0$.

## Matrices escalonadas

Una matriz $E \in \mathcal{M}_{m \times n}(\mathbb{K})$ se denomina **escalonada por filas** si cumple las siguientes condiciones:

1. Todas las filas nulas (si existen) se encuentran en la parte inferior de la matriz.
    
2. En cada fila no nula, el primer elemento distinto de cero (denominado **pivote** o elemento conductor) se encuentra estrictamente a la derecha del pivote de la fila anterior.
    

Formalmente, si $k_i$ es el índice de la columna del primer elemento no nulo de la fila $i$, entonces $k_1 < k_2 < \dots < k_r$, donde $r$ es el rango de la matriz.

> [!example] foto
> 
> [Diagrama de una matriz escalonada donde se resalte la estructura en escalera de los pivotes, mostrando ceros debajo de cada elemento conductor y la disposición de las filas nulas al final].

## Matriz canónica por filas

Una matriz se encuentra en su **forma canónica por filas** (o forma escalonada reducida por filas) si, además de ser escalonada, cumple:

1. El pivote de cada fila no nula es igual a 1.
    
2. En cada columna que contiene un pivote, todos los demás elementos son iguales a cero.
    

Esta forma es única para cada matriz $A$ y se obtiene mediante el algoritmo de eliminación de Gauss-Jordan. Es la herramienta principal para determinar el rango y resolver sistemas de ecuaciones.

## Equivalencia por filas y operaciones elementales entre filas

Dos matrices $A$ y $B$ son **equivalentes por filas** ($A \sim_f B$) si existe una secuencia finita de operaciones elementales de fila que transforma $A$ en $B$. Las operaciones elementales son:

1. **Intercambio:** Permutar las filas $i$ y $j$ ($F_i \leftrightarrow F_j$).
    
2. **Escalamiento:** Multiplicar la fila $i$ por un escalar $\lambda \neq 0$ ($\lambda F_i \to F_i$).
    
3. **Sustitución (Adición):** Reemplazar la fila $i$ por la suma de sí misma y un múltiplo de la fila $j$ ($F_i + \lambda F_j \to F_i$).
    

Estas operaciones preservan el espacio fila de la matriz y el conjunto solución de los sistemas lineales asociados.

## Operaciones elementales entre columnas

De manera análoga a las filas, se definen las operaciones elementales de columna ($C_i \leftrightarrow C_j$, $\lambda C_i \to C_i$, $C_i + \lambda C_j \to C_i$). Dos matrices son **equivalentes por columnas** si una puede obtenerse de la otra mediante estas operaciones. Si una matriz se somete a operaciones tanto de filas como de columnas, se habla de **equivalencia de matrices**, lo cual permite reducir cualquier matriz a una forma normal de la forma:

$$N = \begin{pmatrix} I_r & 0 \\ 0 & 0 \end{pmatrix}$$

donde $r$ representa el rango de la matriz.

## Matrices elementales

Una **matriz elemental** $E$ es aquella que se obtiene al aplicar una única operación elemental de fila a la matriz identidad $I_n$.

- La aplicación de una operación elemental de fila a una matriz $A$ equivale a premultiplicar $A$ por la correspondiente matriz elemental ($E \cdot A$).
    
- Toda matriz elemental es invertible, y su inversa es también una matriz elemental del mismo tipo.
    

## Aplicaciones: matrices invertibles y propiedades

Una matriz $A \in \mathcal{M}_{n \times n}(\mathbb{K})$ es **invertible** o regular si existe una matriz $B$ tal que $AB = BA = I_n$. En tal caso, $B$ es única y se denota como $A^{-1}$.

### Propiedades fundamentales:

1. $(A^{-1})^{-1} = A$.
    
2. $(AB)^{-1} = B^{-1}A^{-1}$.
    
3. $(A^T)^{-1} = (A^{-1})^T$.
    
4. Una matriz es invertible si y solo si es equivalente por filas a la matriz identidad $I_n$.
    
5. Una matriz es invertible si y solo si su determinante es no nulo ($\det(A) \neq 0$).
    

## Matrices especiales: simétrica, antisimétrica, nilpotente, periódica, idempotente, involutiva, ortogonal

Existen clases de matrices cuadradas con propiedades estructurales específicas:

- **Simétrica:** $A = A^T$, donde $a_{ij} = a_{ji}$.
    
- **Antisimétrica:** $A = -A^T$, lo que implica que los elementos de la diagonal principal deben ser cero ($a_{ii} = 0$).
    
- **Nilpotente:** Existe un $k \in \mathbb{Z}^+$ tal que $A^k = 0$. El menor $k$ se llama índice de nilpotencia.
    
- **Periódica:** Existe $k \in \mathbb{Z}^+$ tal que $A^{k+1} = A$. Si $k=1$, la matriz es idempotente.
    
- **Idempotente:** $A^2 = A$. Representan proyecciones sobre subespacios.
    
- **Involutiva:** $A^2 = I$. La matriz es su propia inversa.
    
- **Ortogonal:** $A^T = A^{-1}$, lo que implica que sus filas (y columnas) forman un conjunto ortonormal bajo el producto escalar canónico.

## Determinantes: definición recursiva usando permutaciones

El **determinante** es una función escalar $f: \mathcal{M}_{n \times n}(\mathbb{K}) \to \mathbb{K}$ que asigna a cada matriz cuadrada un valor único que caracteriza propiedades críticas como la invertibilidad y el volumen de transformación.

Existen dos aproximaciones formales para su definición. La definición basada en **permutaciones** (fórmula de Leibniz) establece que:

$$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^{n} a_{i, \sigma(i)}$$

Donde:

- $S_n$ es el conjunto de todas las permutaciones del conjunto $\{1, 2, \dots, n\}$.
    
- $\sigma(i)$ es el valor de la permutación en la posición $i$.
    
- $\text{sgn}(\sigma)$ es el signo de la permutación, definido como $(-1)^k$, donde $k$ es el número de inversiones (transposiciones) necesarias para obtener $\sigma$ desde la identidad.
    

Recursivamente, el determinante de una matriz $A$ de orden $n$ se define mediante el desarrollo por una fila o columna (generalmente la primera), reduciendo el problema al cálculo de determinantes de orden $n-1$. Para $n=1$, $\det(a_{11}) = a_{11}$.

## Propiedades del determinante

El determinante posee propiedades algebraicas fundamentales que facilitan su cálculo y manipulación teórica:

1. **Multilinealidad:** El determinante es una función lineal respecto a cada fila (o columna) individualmente. Si una fila se multiplica por $\lambda$, el determinante queda multiplicado por $\lambda$.
    
2. **Alternancia:** Si se intercambian dos filas (o columnas), el signo del determinante se invierte.
    
3. **Matriz Identidad:** $\det(I_n) = 1$.
    
4. **Transposición:** $\det(A) = \det(A^T)$.
    
5. **Producto de matrices:** $\det(AB) = \det(A) \cdot \det(B)$ (Teorema de Cauchy-Determinante).
    
6. **Invertibilidad:** $A$ es invertible si y solo si $\det(A) \neq 0$. En ese caso, $\det(A^{-1}) = \frac{1}{\det(A)}$.
    
7. **Filas/Columnas dependientes:** Si una matriz tiene dos filas iguales o una fila es combinación lineal de otras, $\det(A) = 0$.
    

## Menores y cofactores

Para una matriz $A \in \mathcal{M}_{n \times n}(\mathbb{K})$, se definen los siguientes conceptos auxiliares:

- **Menor complementario ($M_{ij}$):** Es el determinante de la submatriz de orden $(n-1) \times (n-1)$ que resulta de eliminar la fila $i$ y la columna $j$ de la matriz $A$.
    
- **Cofactor ($C_{ij}$):** También llamado adjunto algebraico, se define incorporando el signo posicional al menor:
    
    $$C_{ij} = (-1)^{i+j} M_{ij}$$
    

Estos elementos permiten descomponer el cálculo de un determinante de alto orden en términos de determinantes menores.

## Expansión de Laplace

El **Teorema de Laplace** generaliza la definición recursiva del determinante, permitiendo su cálculo mediante la suma de los productos de los elementos de cualquier fila o columna por sus respectivos cofactores.

Para una fila $i$ fija:

$$\det(A) = \sum_{j=1}^{n} a_{ij} C_{ij}$$

Para una columna $j$ fija:

$$\det(A) = \sum_{i=1}^{n} a_{ij} C_{ij}$$

Este método es computacionalmente eficiente cuando la matriz posee una fila o columna con una alta densidad de ceros.

## Determinante de Vandermonde

La matriz de Vandermonde surge en problemas de interpolación polinómica y tiene la forma:

$$V = \begin{pmatrix} 1 & x_1 & x_1^2 & \dots & x_1^{n-1} \\ 1 & x_2 & x_2^2 & \dots & x_2^{n-1} \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ 1 & x_n & x_n^2 & \dots & x_n^{n-1} \end{pmatrix}$$

Su determinante está dado por el producto de todas las diferencias posibles de los escalares $x_i$:

$$\det(V) = \prod_{1 \leq i < j \leq n} (x_j - x_i)$$

Este resultado implica que la matriz es invertible si y solo si todos los puntos $x_i$ son distintos entre sí.

## Adjunta de una matriz cuadrada

La **matriz adjunta** (o traspuesta de cofactores), denotada como $\text{adj}(A)$ o $A^*$, es la traspuesta de la matriz formada por los cofactores de $A$:

$$\text{adj}(A) = (C_{ij})^T$$

Es decir, el elemento en la posición $(i, j)$ de $\text{adj}(A)$ es el cofactor $C_{ji}$.

La propiedad más notable de la adjunta es su relación con el producto matricial:

$$A \cdot \text{adj}(A) = \text{adj}(A) \cdot A = \det(A) \cdot I_n$$

> [!example] foto
> 
> [Diagrama matricial que muestre la transformación de una matriz original A en su matriz de cofactores C y posteriormente su transposición para obtener la matriz adjunta, resaltando la relación de los índices (i,j) y (j,i)].

## Matriz inversa

A partir de la relación de la adjunta, se deriva la fórmula analítica para la **matriz inversa**. Si $\det(A) \neq 0$, entonces:

$$A^{-1} = \frac{1}{\det(A)} \text{adj}(A)$$

Esta expresión, aunque menos eficiente computacionalmente que el método de Gauss-Jordan para matrices de gran escala, es fundamental en el análisis teórico y permite obtener la solución de sistemas mediante la **Regla de Cramer**, donde cada incógnita $x_i$ se calcula como:

$$x_i = \frac{\det(A_i)}{\det(A)}$$

Siendo $A_i$ la matriz $A$ reemplazando su columna $i$ por el vector de términos independientes.
