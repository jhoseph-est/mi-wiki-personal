---
title: tema 6
---

# 6. Sucesiones y series / series de Taylor

## Fundamentos de sucesiones

### Sucesiones: límite, propiedades, monotonía y convergencia

Una sucesión $\{a_n\}$ es una función cuyo dominio son los enteros positivos. Converge a un límite $L$ si para todo $\epsilon > 0$ existe un $N$ tal que si $n > N$, entonces $|a_n - L| < \epsilon$.

- **Monotonía:** Una sucesión es monótona si es siempre creciente ($a_{n+1} \geq a_n$) o decreciente ($a_{n+1} \leq a_n$).
    
- **Acotación:** Si una sucesión es monótona y acotada, entonces es convergente (Teorema de la Convergencia Monótona).
    

---

## Series numéricas

### Series numéricas: propiedades

Una serie $\sum a_n$ es la suma de los términos de una sucesión. Converge si la sucesión de sus sumas parciales $S_k = \sum_{n=1}^{k} a_n$ tiene un límite finito.

- **Condición necesaria:** Si $\sum a_n$ converge, entonces $\lim_{n \to \infty} a_n = 0$. (El recíproco no es necesariamente cierto).
    
- **Linealidad:** $\sum (c a_n + b_n) = c \sum a_n + \sum b_n$, siempre que las series individuales converjan.
    

### Series notables

#### Serie geométrica

Es de la forma $\sum_{n=0}^{\infty} ar^n$. Converge si y solo si $|r| < 1$, y su suma es:

$$S = \frac{a}{1-r}$$

> [!example] Esquema Técnico

---

## Series de potencias

### Series de potencias: radio de convergencia

Una serie de potencias tiene la forma $\sum_{n=0}^{\infty} c_n (x-a)^n$. Existe un número $R \geq 0$ tal que la serie converge absolutamente para $|x-a| < R$ y diverge para $|x-a| > R$. El radio de convergencia $R$ se determina usualmente mediante el criterio de la razón o la raíz:

$$R = \lim_{n \to \infty} \left| \frac{c_n}{c_{n+1}} \right|$$

### Derivación e integración de series

Dentro de su intervalo de convergencia, una serie de potencias puede derivarse o integrarse término a término, manteniendo el mismo radio de convergencia:

$$\frac{d}{dx} \sum c_n (x-a)^n = \sum n c_n (x-a)^{n-1}$$

$$\int \left( \sum c_n (x-a)^n \right) dx = C + \sum \frac{c_n (x-a)^{n+1}}{n+1}$$

---

## Desarrollo en series de Taylor

### Serie de Taylor y Maclaurin

Si una función $f(x)$ tiene derivadas de todos los órdenes en un punto $a$, su serie de Taylor es:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$

Si $a=0$, la serie se denomina de **Maclaurin**. El error al truncar la serie en el término $n$ se expresa mediante el resto de Taylor $R_n(x)$.

---

## Aplicaciones

### Cálculo de límites

Permite resolver formas indeterminadas sustituyendo la función por su desarrollo en serie de Taylor, facilitando la cancelación de términos de menor orden.

### Cálculo de integrales

Facilita la evaluación de integrales de funciones que no poseen una primitiva elemental (como $e^{-x^2}$ o $\frac{\sin x}{x}$) mediante la integración de su expansión en serie de potencias.

### Aplicaciones de apoyo a diversas disciplinas

- **Física Clásica:** Aproximación de pequeña oscilación para el péndulo simple ($\sin \theta \approx \theta$).
    
- **Relatividad:** Aproximación de la energía cinética para velocidades bajas ($v \ll c$).
    
- **Computación:** Algoritmos para el cálculo numérico de funciones trascendentes en procesadores.
    

---

**Lista de variables:**

- $a_n$: Término general de la sucesión.
- $S_k$: Suma parcial de orden $k$.
- $r$: Razón de la serie geométrica.
- $c_n$: Coeficiente de la serie de potencias.
- $R$: Radio de convergencia.
- $a$: Centro de la serie de Taylor.
- $f^{(n)}(a)$: $n$-ésima derivada evaluada en el centro.
- $x$: Variable independiente.