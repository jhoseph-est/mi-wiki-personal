---  
title: prueba  
---
# Archivo de Pruebas Matemáticas para Lector Markdown con LaTeX

Este archivo contiene una batería de expresiones matemáticas en diferentes formatos. El objetivo es probar la solidez del renderizador de Markdown y su soporte para LaTeX, especialmente en casos límite.

---

## 1. Variables y Símbolos Básicos en Línea

Aquí hay algunas variables en línea: $x$, $y$, $z$. Podemos tener griegas como $\alpha$, $\beta$, $\gamma$. Y operadores: $+$, $-$, $\times$, $\div$.

Mezclado con texto, podemos escribir cosas como: el área de un círculo es $A = \pi r^2$. La ecuación de Einstein es $E = mc^2$. La raíz cuadrada de 2 es $\sqrt{2}$.

### 1.1 Subíndices y Superíndices

En línea: $x_1$, $x_2$. Superíndices: $x^2$, $y^3$. Combinados: $x_1^2$, $a_{ij}^{k}$. Un ejemplo más complejo: $e^{i\pi} + 1 = 0$.

## 2. Fracciones en Línea (Inline)

Las fracciones en línea son complicadas. Veamos: $1/2$, $\frac{1}{2}$, $\frac{a}{b}$.

Texto normal con fracción: La velocidad es $v = \frac{d}{t}$. Esto es $\frac{1}{x^2+1}$.

**Caso problemático:** Fracciones en línea con texto justo al lado: el valor es $\frac{22}{7}$aproximadamente. Y otra: $\frac{\partial f}{\partial x}$.

## 3. Fracciones en Bloque (Display)

Una fracción en bloque:

$$
\frac{1}{2} + \frac{1}{3} = \frac{5}{6}
$$

Otra más compleja:

$$
\frac{\frac{1}{x} + \frac{1}{y}}{\frac{1}{x} - \frac{1}{y}} = \frac{x+y}{y-x}
$$

Integral con fracción:

$$
\int_{0}^{1} \frac{x^2}{x^3+1} \, dx = \frac{1}{3} \ln 2
$$


## 4. Fracciones Inline que Parecen Display (Usando \dfrac)

Para forzar que una fracción en línea se vea como en bloque, usamos `\dfrac`:

Esto es una fracción en línea con `\dfrac`: $\dfrac{1}{2}$. Es grande.

Mezcla: $\dfrac{a}{b}$ y $\dfrac{\partial u}{\partial t}$.

**Caso extremo:** $\dfrac{\dfrac{x}{y}}{\dfrac{z}{w}}$ en línea.

## 5. Vectores y Matrices

Vectores en línea: $\vec{v} = (x, y, z)$ o $\mathbf{v} = (x, y, z)$.

Notación con flecha: $\overrightarrow{AB}$.

Matriz en bloque:

$$
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
$$

Matriz con paréntesis:

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

Determinante:

$$
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$

Vector en bloque:

$$
\vec{v} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}
$$

## 6. Integrales y Sumatorios

Sumatorio en línea: $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$.

Sumatorio en bloque:

$$
\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}
$$

Integral en línea: $\int_{0}^{\infty} e^{-x} \, dx = 1$.

Integral en bloque:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

Con límites grandes:

$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

## 7. Texto en Modo Matemático

Texto en línea: $x \text{ es un número real}$.

En bloque:

$$
\text{La suma de } a \text{ y } b \text{ es } a+b
$$

Texto con espacios: $\text{Si } x > 0 \text{ entonces } x^2 > 0$.

## 8. Delimitadores y Tamaños

Delimitadores ajustables en línea: $\left( \frac{1}{2} \right)$.

Delimitadores grandes en bloque:

$$
\left\{ \frac{x}{y} \right\} \quad \left[ \frac{a}{b} \right] \quad \left\langle \frac{u}{v} \right\rangle
$$

Con `\left` y `\right`:

$$
\left( \sum_{i=1}^{n} i \right)^2 = \left( \frac{n(n+1)}{2} \right)^2
$$

## 9. Ecuaciones en Varias Líneas (Alineadas)

Usando `align`:

$$
\begin{aligned}
x &= 2y + 3 \\
y &= 4z - 1
\end{aligned}
$$

O con `aligned` dentro de `\[ ... \]`:

\[
\begin{aligned}
a &= b + c \\
d &= e + f
\end{aligned}
\]

## 10. Casos Especiales y Límites

Funciones a trozos en bloque:

$$
f(x) = \begin{cases}
x^2 & \text{si } x < 0 \\
x & \text{si } 0 \le x \le 1 \\
\frac{1}{x} & \text{si } x > 1
\end{cases}
$$

## 11. Caracteres Especiales y Símbolos

Símbolos griegos: $\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta, \theta, \iota, \kappa, \lambda, \mu, \nu, \xi, \omicron, \pi, \rho, \sigma, \tau, \upsilon, \phi, \chi, \psi, \omega$.

Mayúsculas: $\Gamma, \Delta, \Theta, \Lambda, \Xi, \Pi, \Sigma, \Upsilon, \Phi, \Psi, \Omega$.

Operadores: $\pm, \mp, \cdot, \times, \div, \cap, \cup, \subset, \subseteq, \supset, \in, \notin$.

## 12. Fracaso Potencial: Sintaxis Conflictiva

### 12.1 Asteriscos y Guiones Bajos en Matemáticas

Texto: $x_*$ y $x^*$ y $x_{*}$.

Problema: `_` y `*` son especiales en Markdown. Esto puede fallar: $x_1$ y $x_2$. Pero también: $a_{b_c}$.

### 12.2 Corchetes y Paréntesis Anidados

$[x, y]$ y $\{x, y\}$. Con anidación: $[a, (b+c)]$.

### 12.3 Barra Invertida y Llaves

$\{ \frac{1}{2} \}$ y $\{ \frac{1}{2} }$ (mal formado a propósito).

## 13. Fórmulas Largas

En línea: $\frac{1}{2\pi i} \oint_C \frac{f(z)}{z-a} \, dz = f(a)$.

En bloque:

$$
\frac{1}{2\pi i} \oint_C \frac{f(z)}{z-a} \, dz = f(a)
$$

Otra larga:

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

## 14. Mezcla de Estilos en el Mismo Párrafo

Aquí hay una fracción en línea $\frac{1}{2}$ y luego un vector $\vec{v}$ y una integral $\int_0^1 x^2 dx$. Luego una con `\dfrac`: $\dfrac{1}{2}$. Y terminamos con un límite $\lim_{n \to \infty} \frac{1}{n} = 0$.

## 15. Problemas Conocidos con Parsers

- **Falta de delimitadores:** `$x^2$` y `$x^2$` (bien).
- **Espacios dentro de `$...$`:** `$ x^2 $` (con espacios).
- **Uso de `\` dentro de texto:** `\$` debería ser escape, pero en modo matemático: `$ \$ $` (raro).
- **Doble $$:** `$$x^2$$` (a veces interpretado como display, a veces como inline).
- **Mezcla con HTML:** `<span>$x^2$</span>`.

## 16. Ecuaciones con Subrayado y Superrayado

$\overline{x}$, $\underline{x}$, $\overrightarrow{AB}$, $\overleftarrow{CD}$.

En bloque:

$$
\overline{a+b} = \overline{a} + \overline{b}
$$

## 17. Raíces y Radicales

$\sqrt{x}$, $\sqrt[3]{x}$, $\sqrt{\frac{a}{b}}$.

Raíz anidada: $\sqrt{1 + \sqrt{2 + \sqrt{3}}}$.

## 18. Texto Rodeando Fórmulas

El área de un círculo es \(A = \pi r^2\). Otra forma: \( \frac{1}{2} \). Usando paréntesis: \( \left( \frac{1}{2} \right) \).

También con `\[ ... \]`: \[ \frac{1}{2} \] y luego texto.

## 19. Muchas Fórmulas Seguidas

$1$ $2$ $3$ $4$ $5$ $\frac{1}{2}$ $\frac{3}{4}$ $\sqrt{2}$ $\int$ $\sum$ $\prod$.

## 20. Problemas de Renderizado Comunes

- **Fracción mal cerrada:** $\frac{1}{2$ (falta llave).
- **Delimitador no cerrado:** $\left( \frac{1}{2} \right$ (falta cierre).
- **Comandos no definidos:** $\unknowncommand$.
- **Símbolos no estándar:** $\heartsuit$, $\clubsuit$.

## 21. Uso de \displaystyle en Línea

$\displaystyle \sum_{i=1}^{n} i = \frac{n(n+1)}{2}$ (esto fuerza estilo display en línea).

## 22. Conclusión

Este archivo cubre una amplia gama de casos. Si tu lector soporta todo esto sin errores, ¡está muy bien preparado!

---

**Fin del archivo de pruebas.**