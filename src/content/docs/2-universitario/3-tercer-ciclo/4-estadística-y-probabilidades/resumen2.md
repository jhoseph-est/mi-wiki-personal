---
title: "resumen 2"
---
# Formulario y Resumen Teórico: Estadística Descriptiva, Probabilidades y Regresión

Este compendio reúne las definiciones formales, fórmulas matemáticas, leyendas de variables y reglas de decisión correspondientes a los módulos de **Estadística Descriptiva**, **Técnicas de Conteo**, **Teoría de Probabilidades** y **Modelos de Regresión** (FIM - UNI).

---

## 1. Notación Fundamental y Medidas Descriptivas

### 1.1 Población vs. Muestra

| Concepto | Parámetro (Población) | Estadístico (Muestra) |
| :--- | :---: | :---: |
| **Tamaño** | $N$ | $n$ |
| **Media / Promedio** | $\mu = \frac{\sum_{i=1}^N X_i}{N}$ | $\overline{X} = \frac{\sum_{i=1}^n X_i}{n}$ |
| **Varianza** | $\sigma^2 = \frac{\sum_{i=1}^N (X_i - \mu)^2}{N}$ | $s^2 = \frac{\sum_{i=1}^n (X_i - \overline{X})^2}{n-1} = \frac{\sum X_i^2 - n\overline{X}^2}{n-1}$ |
| **Desviación Estándar** | $\sigma = \sqrt{\sigma^2}$ | $s = \sqrt{s^2}$ |
| **Proporción** | $P$ | $p$ |

### 1.2 Reglas de Agrupación por Intervalos (Sturges)

* **Rango:** $R = X_{\max} - X_{\min}$
* **Número de Intervalos ($k$ o $m$):** 
  $$k = 1 + 3.32 \log_{10}(n) \quad \text{(redondeado al entero inmediato mayor)}$$
* **Amplitud ($c$):** $c = \frac{R}{k}$
* **Marca de Clase ($x_i$ o $m_i$):** $x_i = \frac{L_{\inf} + L_{\sup}}{2}$

### 1.3 Medidas en Datos Agrupados

* **Media:** $\overline{X} = \frac{\sum x_i f_i}{n}$
* **Mediana ($Me$):** Localizada en $F_i \ge \frac{n}{2}$:
  $$Me = L_{\inf} + c \left[ \frac{\frac{n}{2} - F_{i-1}}{f_i} \right]$$
* **Moda ($Mo$):** Localizada en el intervalo con mayor $f_i$:
  $$Mo = L_{\inf} + c \left[ \frac{\Delta_1}{\Delta_1 + \Delta_2} \right]$$
  *Leyenda:* $\Delta_1 = f_i - f_{i-1}$, $\Delta_2 = f_i - f_{i+1}$.
* **Cuantiles ($Q_j, D_j, P_j$):**
  $$Q_j = L_{\inf} + c \left[ \frac{\frac{j \cdot n}{4} - F_{i-1}}{f_i} \right], \quad D_j = L_{\inf} + c \left[ \frac{\frac{j \cdot n}{10} - F_{i-1}}{f_i} \right], \quad P_j = L_{\inf} + c \left[ \frac{\frac{j \cdot n}{100} - F_{i-1}}{f_i} \right]$$
* **Varianza Agrupada:** $s^2 = \frac{\sum x_i^2 f_i - n\overline{X}^2}{n-1}$
* **Coeficiente de Variación:** $CV = \frac{s}{\overline{X}}$
  * $CV < 0.30$ (o $0.33$): Datos **Homogéneos** (media representativa).
  * $CV \ge 0.30$ (o $0.33$): Datos **Heterogéneos** (alta dispersión).
* **Asimetría de Pearson ($As$):** $As = \frac{3(\overline{X} - Me)}{s}$
  * $As = 0$: Simétrica.
  * $As > 0$: Asimetría positiva (cola a la derecha).
  * $As < 0$: Asimetría negativa (cola a la izquierda).
* **Curtosis ($k$):** $k = \frac{Q_3 - Q_1}{2(P_{90} - P_{10})}$
  * $k < 0.263$: Platicúrtica (aplanada).
  * $k = 0.263$: Mesocúrtica (normal).
  * $k > 0.263$: Leptocúrtica (apuntada).

---

## 2. Técnicas de Conteo

### 2.1 Principios Fundamentales
* **Principio de Multiplicación:** Si un procedimiento consta de $k$ operaciones sucesivas con $n_1, n_2, \dots, n_k$ alternativas cada una:
  $$\text{Total de formas} = n_1 \times n_2 \times \dots \times n_k$$
* **Principio de Adición:** Si las alternativas son mutuamente excluyentes (no pueden ocurrir juntas):
  $$\text{Total de formas} = n_1 + n_2 + \dots + n_k$$

### 2.2 Permutaciones (El orden importa: $AB \neq BA$)
* **Permutación simple de $n$ elementos:**
  $$P_n = n! = 1 \times 2 \times \dots \times n, \quad (0! = 1)$$
* **Permutación de $n$ elementos tomados de $k$ en $k$:**
  $$P_k^n = \frac{n!}{(n-k)!}$$
* **Permutación con Elementos Repetidos:** Si existen grupos idénticos de tamaños $n_1, n_2, \dots, n_r$ tales que $\sum n_i = n$:
  $$P_{n_1, n_2, \dots, n_r}^n = \frac{n!}{n_1! \, n_2! \, \dots \, n_r!}$$

### 2.3 Combinaciones (El orden NO importa: $\{A, B\} = \{B, A\}$)
* **Combinatoria simple de $n$ elementos tomados de $k$ en $k$:**
  $$C_k^n = \binom{n}{k} = \frac{n!}{(n-k)! \, k!}$$

---

## 3. Teoría de Probabilidades

### 3.1 Definición Clásica (Regla de Laplace)
Para un espacio muestral equiprobable $\Omega$:
$$P(A) = \frac{n(A)}{n(\Omega)} = \frac{\text{Número de casos favorables al evento } A}{\text{Número total de casos posibles}}$$

### 3.2 Axiomas de Kolmogorov y Teoremas
1. $0 \le P(A) \le 1$ para todo evento $A$.
2. $P(\Omega) = 1, \quad P(\emptyset) = 0$.
3. **Eventos mutuamente excluyentes ($A \cap B = \emptyset$):**
   $$P(A \cup B) = P(A) + P(B)$$
4. **Regla del Complemento:**
   $$P(A) = 1 - P(\overline{A})$$
5. **Regla General de la Adición (Eventos cualesquiera):**
   $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
   *Para tres eventos:*
   $$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$$

### 3.3 Probabilidad Condicional
Probabilidad de que ocurra $A$ dado que ocurrió $B$ ($P(B) > 0$):
$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

### 3.4 Regla de la Multiplicación
* **Forma general:**
  $$P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B)$$
* **Para tres eventos:**
  $$P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B)$$

### 3.5 Independencia de Eventos
Dos eventos $A$ y $B$ son estadísticamente independientes si y solo si:
$$P(A \cap B) = P(A) \cdot P(B) \iff P(A \mid B) = P(A)$$

### 3.6 Ley de Probabilidad Total y Teorema de Bayes
Si $\{A_1, A_2, \dots, A_n\}$ forman una **partición** del espacio muestral $\Omega$ (disjuntos dos a dos y $\bigcup_{i=1}^n A_i = \Omega$):

* **Probabilidad Total:** Para cualquier evento $B \subset \Omega$:
  $$P(B) = \sum_{i=1}^n P(A_i) \cdot P(B \mid A_i)$$

* **Teorema de Bayes:** Probabilidad *a posteriori* de la causa $A_k$ dado que se observó el efecto $B$:
  $$P(A_k \mid B) = \frac{P(A_k \cap B)}{P(B)} = \frac{P(A_k) \cdot P(B \mid A_k)}{\sum_{i=1}^n P(A_i) \cdot P(B \mid A_i)}$$

---

## 4. Regresión Lineal y Correlación

### 4.1 Coeficiente de Correlación Lineal de Pearson ($r$)
Mide la intensidad y dirección de la relación lineal entre dos variables cuantitativas $X$ (independiente) e $Y$ (dependiente):

$$r = \frac{n \sum XY - (\sum X)(\sum Y)}{\sqrt{\left[ n \sum X^2 - (\sum X)^2 \right] \left[ n \sum Y^2 - (\sum Y)^2 \right]}}$$

* **Propiedades y Escalas de $r$ ($-1 \le r \le 1$):**
  * $r = 1$: Correlación lineal positiva perfecta.
  * $r = -1$: Correlación lineal negativa perfecta.
  * $r = 0$: Correlación lineal nula.
  * $\pm 0.90 \le r \le \pm 0.99$: Muy alta.
  * $\pm 0.70 \le r \le \pm 0.89$: Alta.
  * $\pm 0.40 \le r \le \pm 0.69$: Moderada.
  * $\pm 0.20 \le r \le \pm 0.39$: Baja.
  * $\pm 0.01 \le r \le \pm 0.19$: Muy baja.

### 4.2 Modelo de Regresión Lineal Simple
Ecuación de la recta estimada:
$$\widehat{Y} = a + bX$$

* **Pendiente / Coeficiente de Regresión ($b$):**
  $$b = \frac{n \sum XY - (\sum X)(\sum Y)}{n \sum X^2 - (\sum X)^2}$$
  *Interpretación:* Variación esperada en la variable de respuesta $Y$ por cada incremento de una unidad en la variable explicativa $X$.

* **Intercepto / Constante ($a$):**
  $$a = \overline{Y} - b\overline{X} = \frac{\sum Y - b\sum X}{n}$$
  *Interpretación:* Valor promedio estimado de $Y$ cuando $X = 0$.

### 4.3 Coeficiente de Determinación ($R^2$)
$$R^2 = r^2 \quad \text{o} \quad R^2\% = r^2 \times 100\%$$
* **Rango:** $0 \le R^2 \le 1$ (ó $0\% \le R^2\% \le 100\%$).
* **Interpretación:** Porcentaje de la variabilidad total observada en la variable dependiente $Y$ que es explicado por el modelo de regresión en función de $X$.

### 4.4 Modelo de Regresión Lineal Múltiple
Relación lineal con $p$ variables predictoras:
$$\widehat{Y} = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p$$

* **Prueba Global de ANOVA (Significancia del modelo):**
  * $H_0: \beta_1 = \beta_2 = \dots = \beta_p = 0$
  * $H_1:$ Al menos un $\beta_i \neq 0$
  * Regla de decisión: Si $p\text{-valor (Sig.)} < \alpha$ (generalmente $\alpha = 0.05$), se **rechaza $H_0$**; el modelo es estadísticamente significativo.

* **Prueba Individual de Coeficientes (Prueba $t$):**
  * $H_0: \beta_i = 0 \quad \text{vs.} \quad H_1: \beta_i \neq 0$
  * Si $\text{Sig.} < 0.05$: La variable $X_i$ aporta significativamente a la predicción de $Y$.
  * Si $\text{Sig.} \ge 0.05$: La variable no es significativa y puede ser retirada para simplificar el modelo.