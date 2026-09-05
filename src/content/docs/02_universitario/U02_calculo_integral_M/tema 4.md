---
title: tema 4
---

# 4. Aplicaciones de la integral definida

## Áreas de regiones planas

### En coordenadas rectangulares

	El área $A$ delimitada por $f(x)$ y $g(x)$ en $[a, b]$, con x$f(x) \geq g(x)$, se calcula mediante la integral de la diferencia de las funciones.

$$ A = \int_{a}^{b} [f(x) - g(x)] \, dx $$

### En coordenadas polares

Para una región barrida por el radio vector $r = f(\theta)$ entre los ángulos $\alpha$ y $\beta$, el área se define como:

$$A = \frac{1}{2} \int_{\alpha}^{\beta} [f(\theta)]^2 d\theta$$

### En coordenadas paramétricas

Dada una curva definida por $x = x(t)$ y $y = y(t)$, el área bajo la curva para $t \in [t_1, t_2]$ se obtiene mediante:

$$A = \int_{t_1}^{t_2} y(t) x'(t) dt$$

---

## Longitud de arco

### En coordenadas rectangulares

La longitud $s$ de una curva suave $y = f(x)$ desde $x=a$ hasta $x=b$ es:

$$s = \int_{a}^{b} \sqrt{1 + [f'(x)]^2} dx$$

### En coordenadas polares

Para una curva $r = f(\theta)$, la longitud se calcula sobre el intervalo angular $[\alpha, \beta]$:

$$s = \int_{\alpha}^{\beta} \sqrt{r^2 + \left(\frac{dr}{d\theta}\right)^2} d\theta$$

### En coordenadas paramétricas

Para una trayectoria definida por $(x(t), y(t))$ en el intervalo $[t_1, t_2]$:

$$s = \int_{t_1}^{t_2} \sqrt{[x'(t)]^2 + [y'(t)]^2} dt$$

---

## Volumen de sólidos

### Volúmenes de sólidos de revolución

#### Método del disco

Se aplica cuando el sólido se genera al rotar una región plana alrededor de un eje que es frontera de dicha región. El elemento diferencial es un disco de radio $R(x)$.

$$V = \pi \int_{a}^{b} [R(x)]^2 dx$$

#### Método del anillo

Se emplea cuando el eje de rotación no es frontera de la región, generando un sólido con un hueco central. Utiliza un radio exterior $R(x)$ y uno interior $r(x)$.

$$V = \pi \int_{a}^{b} ([R(x)]^2 - [r(x)]^2) dx$$

#### Método de la corteza cilíndrica

Útil cuando la rotación es paralela al eje de la función. El volumen se calcula sumando capas cilíndricas de radio $x$ y altura $f(x)$.

$$V = 2\pi \int_{a}^{b} x f(x) dx$$

> [!example] Esquema Técnico

### Volúmenes por secciones

#### Método de las secciones transversales

Si el área de la sección transversal perpendicular al eje $x$ es una función conocida $A(x)$, el volumen es la integral de dicha área:

$$V = \int_{a}^{b} A(x) dx$$

#### Método de las secciones planas paralelas conocidas

Variante donde las secciones transversales tienen formas geométricas regulares (triángulos, cuadrados, semicírculos) cuyas dimensiones dependen de la base del sólido en el plano $xy$.

---

## Área de superficies de revolución

El área $S$ generada al rotar una curva $y = f(x)$ alrededor del eje $x$ se define mediante la longitud de arco ponderada por la circunferencia de rotación:

$$S = 2\pi \int_{a}^{b} f(x) \sqrt{1 + [f'(x)]^2} dx$$

---

## Principios y herramientas teóricas

### Teorema de Pappus

1. **Primer Teorema (Área):** $S = 2\pi \bar{y} L$. El área de una superficie de revolución es el producto de la longitud de la curva $L$ y la distancia recorrida por su centroide $\bar{y}$.
    
2. **Segundo Teorema (Volumen):** $V = 2\pi \bar{y} A$. El volumen es el producto del área de la región $A$ y la distancia recorrida por su centroide.
    

### Polinomio de Taylor

Permite aproximar funciones integrables mediante sumas de potencias, facilitando la integración de funciones sin primitiva elemental:

$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (x-a)^k$$

---

## Aplicaciones

### Aplicaciones de apoyo a diversas disciplinas

- **Mecánica de Fluidos:** Cálculo de fuerzas de presión sobre superficies sumergidas.
    
- **Resistencia de Materiales:** Determinación de momentos estáticos y centros de gravedad de secciones complejas.
    
- **Termodinámica:** Cálculo del trabajo realizado en procesos de expansión/compresión ($W = \int P dV$).
    

---

**Lista de variables:**

- $A, V, S$: Área plana, Volumen y Área de superficie, respectivamente.
- $f(x), g(x)$: Funciones que limitan la región.
- $r, \theta$: Coordenadas polares (radio y ángulo).
- $x(t), y(t)$: Funciones paramétricas.
- $R, r$: Radios exterior e interior de revolución.
- $\bar{y}$: Ordenada del centroide de la figura.
- $f^{(k)}(a)$: $k$-ésima derivada evaluada en $a$.
