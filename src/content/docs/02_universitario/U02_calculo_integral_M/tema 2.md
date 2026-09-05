---
title: tema 2
---

# 2. La integral definida

## Construcción conceptual de la integral definida

### La integral como límite de una suma: suma superior e inferior

Dada una función $f(x)$ continua en $[a, b]$, se define una partición $P$ del intervalo. Las sumas de Darboux se calculan usando el ínfimo ($m_i$) y el supremo ($M_i$) de la función en cada subintervalo $\Delta x_i$:

- **Suma Inferior:** $L(P, f) = \sum_{i=1}^{n} m_i \Delta x_i$
    
- **Suma Superior:** $U(P, f) = \sum_{i=1}^{n} M_i \Delta x_i$
    

> [!example] Esquema Técnico
> 
> [Diagrama de sumas de Riemann mostrando rectángulos inscritos (inferiores) y circunscritos (superiores) bajo una curva continua para ilustrar la aproximación del área].

### Definición

Una función es integrable en el sentido de Riemann si el límite de las sumas de Riemann existe cuando la norma de la partición $\|P\|$ tiende a cero, independientemente de la elección del punto muestra $x_i^*$:

$$\int_{a}^{b} f(x) dx = \lim_{\|P\| \to 0} \sum_{i=1}^{n} f(x_i^*) \Delta x_i$$

---

## Interpretación de la integral definida

### Interpretación de la integral definida

Representa el valor neto del área acumulada entre la gráfica de la función $f(x)$ y el eje de las abscisas en el intervalo $[a, b]$. Las áreas por encima del eje $x$ tienen signo positivo, mientras que las situadas por debajo tienen signo negativo.

### Cálculo del área como límite de una aproximación

El área $A$ se define como el límite de la suma de áreas de $n$ rectángulos de ancho $\Delta x = \frac{b-a}{n}$. A medida que $n \to \infty$, la aproximación converge al valor exacto del área bajo la curva.

---

## Propiedades de la integral definida

### Propiedades

1. **Linealidad:** $\int_{a}^{b} [kf(x) + g(x)] dx = k\int_{a}^{b} f(x) dx + \int_{a}^{b} g(x) dx$.
    
2. **Aditividad del intervalo:** $\int_{a}^{b} f(x) dx = \int_{a}^{c} f(x) dx + \int_{c}^{b} f(x) dx$.
    
3. **Inversión de límites:** $\int_{a}^{b} f(x) dx = -\int_{b}^{a} f(x) dx$.
    
4. **Acotación:** Si $m \leq f(x) \leq M$, entonces $m(b-a) \leq \int_{a}^{b} f(x) dx \leq M(b-a)$.
    

### Teorema del valor medio e intermedio

Si $f$ es continua en $[a, b]$, existe al menos un punto $c \in [a, b]$ tal que el valor de la función en ese punto es igual al valor promedio de la integral:

$$f(c) = \frac{1}{b-a} \int_{a}^{b} f(x) dx$$

---

## Relación entre derivación e integración

### Teoremas fundamentales del cálculo

- **Primer Teorema:** Establece que la derivación es la operación inversa de la integración definida. Si $F(x) = \int_{a}^{x} f(t) dt$, entonces:
    
    $$\frac{d}{dx} \int_{a}^{x} f(t) dt = f(x)$$
    
- **Segundo Teorema (Regla de Barrow):** Permite calcular integrales definidas usando la antiderivada $F$:
    
    $$\int_{a}^{b} f(x) dx = F(b) - F(a)$$
    

---

## Funciones asociadas a la integral definida

### Función logaritmo natural y su relación con el número ($e$)

El logaritmo natural se define formalmente como una integral de área variable para $x > 0$:

$$\ln(x) = \int_{1}^{x} \frac{1}{t} dt$$

El número $e$ es la base tal que el área bajo la curva $1/t$ desde $1$ hasta $e$ es exactamente $1$ unidad cuadrada, es decir, $\ln(e) = 1$.

---

## Aplicaciones

### Aplicaciones de apoyo a diversas disciplinas

- **Física:** Cálculo de trabajo mecánico ($W = \int F dx$), centro de masa y momentos de inercia.
    
- **Ingeniería Civil:** Cálculo de áreas, volúmenes de sólidos de revolución y presiones hidrostáticas.
    
- **Probabilidad:** Determinación de funciones de densidad acumulada mediante la integración de funciones de densidad.
    

---

**Lista de variables:**

- $a, b$: Límites inferior y superior de integración.
- $\Delta x_i$: Ancho del i-ésimo subintervalo.
- $m_i, M_i$: Ínfimo y supremo de la función en un subintervalo.
- $P$: Partición del intervalo $[a, b]$.
- $\|P\|$: Norma de la partición (máximo $\Delta x_i$).
- $f(c)$: Valor medio de la función.
- $F(x)$: Función acumulación o antiderivada.
- $e$: Constante de Euler ($\approx 2.71828$).