---
title: "formulas 1"
slides: true
date: 2026-09-16
author: "Admin"
---

# Pruebas de Matemáticas
### Reveal.js + MathJax 3

Presiona la **Flecha Derecha** o la barra espaciadora para avanzar.



## 1. Álgebra y Teoría de Conjuntos

Fórmula en línea: la pertenencia se define como $x \in A$ y la inclusión como $A \subseteq B$.

Fórmula en bloque centrada:

$$
A \cup B = \{ x \mid x \in A \lor x \in B \}
$$

Diferencia simétrica y cuantificadores:

$$
\forall x \in U, \quad x \in (A \bigtriangleup B) \iff (x \in A \land x \notin B) \lor (x \in B \land x \notin A)
$$



## 2. Cálculo y Límites
	
Definición formal de límite $(\varepsilon - \delta)$ :

$$
\lim_{ x \to a } f( x ) = L \iff \forall \varepsilon > 0, \, \exists \delta > 0 : 0 < |x - a| < \delta \implies |f( x ) - L| < \varepsilon + \lim_{ x \to a } f( x ) = L \iff \forall \varepsilon > 0, \, \exists \delta > 0 : 0 < |x - a| < \delta \implies |f( x ) - L| < \varepsilon
$$

Fracción display grande:

$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
$$



## 3. Integrales y Sumatorias

Integral definida fundamental:

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

Sumatoria de Gauss y series infinitas:

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \quad \sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

Integral doble sobre una región:

$$
\iint_{D} \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \, dy = \oint_{C} (P \, dx + Q \, dy)
$$



## 4. Matrices y Sistemas Lineales

Matriz de rotación en 2D:

$$
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
x' \\
y'
\end{bmatrix}
$$

Determinante:

$$
\det(A) = \begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$



## 5. Casos y Funciones a Trozos

Función escalonada de Heaviside y valor absoluto:

$$
f(x) = \begin{cases}
-x & \text{si } x < 0 \\
0 & \text{si } x = 0 \\
x^2 + 1 & \text{si } x > 0
\end{cases}
$$

> **Importante:** "tierra" no significa necesariamente que el objeto deba estar enterrado. En electricidad puede representar un referente de potencial y/o un gran reservorio de carga.

