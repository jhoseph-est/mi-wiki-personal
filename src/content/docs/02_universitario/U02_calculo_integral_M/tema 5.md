---
title: tema 5
---

# 5. Ecuaciones diferenciales

## Fundamentos de las ecuaciones diferenciales

### Definición, orden y grado

Una ecuación diferencial (ED) es una igualdad que relaciona una función desconocida, sus variables y sus derivadas. El **orden** lo determina la derivada de mayor jerarquía presente. El **grado** es el exponente algebraico al que está elevada la derivada de mayor orden, siempre que la ED esté en forma polinómica respecto a sus derivadas.

### Solución particular, general y singular

- **General:** Familia de funciones que satisface la ED, conteniendo $n$ constantes arbitrarias (donde $n$ es el orden).
    
- **Particular:** Se obtiene al asignar valores específicos a las constantes a partir de condiciones dadas.
    
- **Singular:** Solución que satisface la ED pero no puede obtenerse a partir de la solución general para ningún valor de las constantes.
    

### Problemas de valor inicial

Consiste en una ED de orden $n$ junto con $n$ condiciones auxiliares especificadas en un mismo punto del dominio ($x_0$). El Teorema de Existencia y Unicidad de Picard-Lindelöf establece las condiciones bajo las cuales este problema posee una solución única.

---

## Clasificación de ecuaciones diferenciales de primer orden

### Lineales y no lineales

Una ED de primer orden es **lineal** si puede expresarse en la forma $a_1(x)y' + a_0(x)y = g(x)$, donde $y$ y sus derivadas tienen exponente 1 y no son argumentos de funciones no lineales. Si no cumple esta estructura, la ecuación es **no lineal**.

---

## Métodos de resolución de ecuaciones diferenciales de primer orden

### Ecuaciones de variables separables

Se resuelven cuando la ED puede factorizarse como $\frac{dy}{dx} = g(x)h(y)$. La solución se obtiene mediante integración directa de ambos miembros tras la separación:

$$\int \frac{1}{h(y)} dy = \int g(x) dx + C$$

### Ecuaciones homogéneas

Una ED de la forma $M(x,y)dx + N(x,y)dy = 0$ es homogénea si $M$ y $N$ son funciones homogéneas del mismo grado. Se resuelve mediante la sustitución $y = ux$, lo que la transforma en una ecuación de variables separables.

### Ecuaciones exactas

Ocurren cuando el miembro izquierdo de $M(x,y)dx + N(x,y)dy = 0$ corresponde a la diferencial total de una función $f(x,y)$. La condición necesaria y suficiente es:

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$$

#### Reducibles a exactas (factor integrante)

Si la ecuación no es exacta, se busca una función $\mu(x,y)$ tal que $\mu M dx + \mu N dy = 0$ cumpla el criterio de exactitud. El factor integrante $\mu$ suele depender de una sola variable ($x$ o $y$).

### Ecuaciones lineales de primer orden

Tienen la forma estándar $y' + P(x)y = f(x)$. Se resuelven mediante el factor integrante $\mu(x) = e^{\int P(x) dx}$:

$$y = \frac{1}{\mu(x)} \left[ \int \mu(x) f(x) dx + C \right]$$

#### Reducibles a lineal

##### Bernoulli

Ecuación de la forma $y' + P(x)y = f(x)y^n$. Se linealiza mediante la sustitución $v = y^{1-n}$, transformándola en una ED lineal en $v$.

##### Riccati

Ecuación de la forma $y' = P(x) + Q(x)y + R(x)y^2$. Si se conoce una solución particular $y_1$, la sustitución $y = y_1 + \frac{1}{v}$ la reduce a una ED lineal en $v$.

---

## Ecuaciones especiales

### Ecuación de Lagrange

Tiene la forma $y = x f(y') + g(y')$. Se resuelve diferenciando respecto a $x$ y tratando a $p = y'$ como la variable independiente, resultando en una ED lineal para $x(p)$.

### Ecuación de Clairaut

Caso particular de Lagrange donde $f(y') = y'$, es decir, $y = xy' + g(y')$. Su solución general es una familia de rectas $y = Cx + g(C)$, y posee además una solución singular dada por la envolvente de dicha familia.

---

## Aplicaciones

### Aplicaciones de apoyo a diversas disciplinas

- **Dinámica de Poblaciones:** Modelo de Malthus ($P' = kP$) y modelo logístico de Verhulst.
    
- **Circuitos Eléctricos:** Análisis de transitorios en circuitos RL y RC mediante leyes de Kirchhoff.
    
- **Cinética Química:** Determinación de la velocidad de reacción en sistemas de primer y segundo orden.
    
- **Enfriamiento de Newton:** $\frac{dT}{dt} = -k(T - T_m)$, que modela la pérdida de calor de un cuerpo en un medio a temperatura constante.
    

---

**Lista de variables:**

- $x, y$: Variables independiente y dependiente.
- $y', y^{(n)}$: Derivada de primer orden y de orden $n$.
- $C$: Constante de integración.
- $\mu$: Factor integrante.
- $M, N$: Funciones coeficientes de los diferenciales $dx$ y $dy$.
- $P(x), Q(x), f(x)$: Funciones continuas de la variable independiente.
- $T, T_m$: Temperatura del objeto y del medio ambiente.