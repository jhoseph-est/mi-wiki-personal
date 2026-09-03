---
title: "ciencia"
theme: "academico"
---
# La antiderivada y métodos de integración

## Fundamento conceptual de la antiderivada

La operación inversa de la derivada ($\int f(u) du$) busca recuperar la función primitiva $F(x)$ a partir de su derivada $f(x)$.

$$
\text{si } F^{\prime} (x) = f(x) \ \to \ \int f(x) dx = F(x)
$$

---

## Integral indefinida

### Definición conceptual

La integral indefinida es el conjunto de todas las funciones primitivas de una función $f(x)$.

$$\int f(x) dx = F(x) + C$$

### Propiedades

- **Linealidad:**
$$
\int [af(x) + bg(x)] dx = a \int f(x) dx + b \int g(x) dx
$$
- **Derivada de una integral:**
$$
\frac{d}{dx} [\int f(x) dx] = f(x)
$$
- **Integral de una diferencial:**
$$
\int dF(x) = F(x) + C
$$

### Antiderivadas de funciones elementales: tabla

1. $$ \int x^n dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1) $$
2. $$ \int \frac{1}{x} dx = \ln|x| + C $$
3. $$ \int e^x dx = e^x + C $$
4. $$ \int \sin(x) dx = -\cos(x) + C $$
5. $$ \int \cos(x) dx = \sin(x) + C $$
6. $$ \int \sec^2(x) dx = \tan(x) + C $$

---

## Métodos generales de integración

### Cambio de variable
Se basa en la **regla de la cadena**.

- **Paso 1 :** Identificar la integral, tiene que tenar la siguiente forma.
$$
\int f(g(x)) \, g'(x) \, dx
$$
- **Paso 2 :** Se usa el siguiente cambio de variable.
$$
\begin{align}
u  &= g(x) \\
du  &= g'(x) \, dx
\end{align}
$$
- **Paso 3 :** Entonces queda así la nueva función.
$$
\int f(u) \, du = F(u) + C \to F(g(x)) + C
$$


### Integración por partes

Deriva de la regla del **producto para derivadas**.

- **Paso 1 :**  Identificar la integral, tiene que tenar la siguiente forma.
$$
\int f(x) \, g(x) \, dx
$$
- **Paso 2 :** Usar el siguiente cambio de variable bajo la regla LIATE (Logaritmo, Inversas, Algebraicas, Trigonométricas, Exponenciales).
$$
\begin{align}
u = f(x)  & \to du = f(x)^{\prime} dx \\
dv = g(x) \, dx  & \to v = G(x)
\end{align}
$$
- **Paso 3 :** Usar la regla de integración por partes.
$$
\int u \, dv = uv - \int v \, du
$$
- **Paso 4 :** Devolver los valores de las variables.
$$
\int f(x) \, g(x) \, dx = f(x) \, G(x) - \int G(x) \, f(x)^{\prime} \, dx
$$

### Sustitución trigonométrica e hiperbólica

Se utiliza para eliminar radicales de la forma $\sqrt{a^2 \pm x^2}$ o $\sqrt{x^2 - a^2}$.

- **Paso 1 :**  Identificar la integral, tiene que tenar la siguiente forma.
$$
\int f(x,\sqrt{a^2 \pm x^2} o \sqrt{x^2 - a^2}
$$
- **paso 2 :** usar el cambio de variable dependiendo del caso que sea

	- Si $\sqrt{a^2 - x^2}$, usar $x = a \sin(\theta)$.
	- Si $\sqrt{a^2 + x^2}$, usar $x = a \tan(\theta)$.
	- Si $\sqrt{x^2 - a^2}$, usar $x = a \sec(\theta)$.

- **paso 3 :** despeja $x$ en función de $t$, luego remplaza en la integral, integra con cualquier método utilizado.

---

## Integración según tipo de función

### Integración de funciones racionales

Consiste en integrar cocientes de polinomios $P(x)/Q(x)$. Si el grado de $P(x) \geq Q(x)$, se realiza división polinómica previa.

#### Descomposición en fracciones parciales

Transforma una función racional compleja en una suma de fracciones simples cuyos denominadores son factores lineales o cuadráticos irreducibles de $Q(x)$.

- **caso 1:**
$$
\frac{P(x)}{f(x) \cdot g(x)} = \frac{A}{f(x)} + \frac{B}{g(x)}
$$

- **caso 2**
$$
\frac{P(x)}{f(x)^{2}} = \frac{A}{f(x)} + \frac{B}{f(x)^{2}}
$$

>- Factores lineales: $\dfrac{A}{ax+b}$.
>- Factores cuadráticos: $\dfrac{Ax+B}{ax^2+bx+c}$.
>- etc.

### Integración de funciones racionales e irracionales

#### Sustituciones de Euler

Permiten racionalizar integrales del tipo.
$$ \int R(x, \sqrt{ax^2+bx+c}) dx $$

- **paso 1 :** identifica que caso es.

1. Si $a > 0$: $\sqrt{ax^2+bx+c} = \pm \sqrt{a}x + t$.
2. Si $c > 0$: $\sqrt{ax^2+bx+c} = xt \pm \sqrt{c}$.
3. Si el discriminante $\Delta > 0$: $\sqrt{a(x-x_1)(x-x_2)} = t(x-x_1)$.

- **paso 2 :** 

### Integración de binomios diferenciales

#### Método de Chebishev

Se aplica a integrales de la forma $\int x^m (a + bx^n)^p dx$, donde $m, n, p \in \mathbb{Q}$. Es integrable de forma elemental en solo tres casos:

1. $p \in \mathbb{Z}$: Expansión o sustitución simple.
2. $\frac{m+1}{n} \in \mathbb{Z}$: Sustitución $a + bx^n = t^s$ ($s$ es el denominador de $p$).
3. $\frac{m+1}{n} + p \in \mathbb{Z}$: Sustitución $ax^{-n} + b = t^s$.

### Integración de funciones racionales en seno y coseno

Se utiliza la sustitución universal de Weierstrass para convertir funciones trigonométricas en funciones racionales de $t$:

$$t = \tan\left(\frac{x}{2}\right), \quad \sin(x) = \frac{2t}{1+t^2}, \quad \cos(x) = \frac{1-t^2}{1+t^2}, \quad dx = \frac{2dt}{1+t^2}$$

---

## Técnicas sistemáticas avanzadas

### Fórmulas de reducción o de recurrencia

Permiten expresar una integral que depende de un parámetro $n$ ($I_n$) en términos de $I_{n-k}$. Se obtienen usualmente mediante integración por partes sistemática. Ejemplo para potencias de seno:

$$I_n = \int \sin^n(x) dx = -\frac{\sin^{n-1}(x) \cos(x)}{n} + \frac{n-1}{n} I_{n-2}$$

---

**Lista de variables:**

- $x$: Variable independiente (dominio real).
- $F(x)$: Función primitiva o antiderivada.
- $f(x)$: Función integrando (derivada de $F$).
- $C$: Constante de integración arbitraria.
- $u, v, t$: Variables auxiliares de sustitución.
- $m, n, p$: Exponentes racionales o enteros.
- $a, b, c$: Coeficientes constantes reales.
- $\theta$: Variable angular en sustitución trigonométrica.
