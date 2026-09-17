---
title: "resumen 1"
---
# Resumen de Fórmulas y Conceptos Clave de Estadística Descriptiva

Este documento sintetiza las fórmulas, definiciones operativas y leyendas de variables correspondientes a las **Semanas 1 y 2** del curso de *Estadística y Probabilidades* (FIM - UNI).

---

## 1. Notación Básica: Parámetros vs. Estadísticos

| Medida / Concepto | Parámetro (Población) | Estadístico (Muestra) |
| :--- | :---: | :---: |
| **Tamaño** | $N$ | $n$ |
| **Media / Promedio** | $\mu$ | $\overline{x}$ o $\overline{X}$ |
| **Varianza** | $\sigma^2$ | $s^2$ |
| **Desviación Estándar** | $\sigma$ | $s$ |
| **Proporción** | $P$ | $p$ |

---

## 2. Tablas de Distribución de Frecuencias y Gráficos

### Frecuencias y Proporciones
* **Frecuencia Relativa Simple ($h_i$):**
  $$h_i = \frac{f_i}{n}$$
  *Propiedad:* $\sum_{i=1}^{m} h_i = 1$
* **Frecuencia Porcentual ($p_i$):**
  $$p_i = h_i \times 100\%$$
* **Frecuencia Absoluta Acumulada ($F_i$):**
  $$F_i = \sum_{j=1}^{i} f_j = f_1 + f_2 + \dots + f_i$$
* **Frecuencia Relativa Acumulada ($H_i$):**
  $$H_i = \sum_{j=1}^{i} h_j = \frac{F_i}{n}$$
* **Ángulo de sector circular ($X_i^\circ$):**
  $$X_i^\circ = \frac{360^\circ \cdot f_i}{n} = 360^\circ \cdot h_i$$

### Construcción de Tablas para Datos Agrupados (Variables Continuas)
1. **Rango o Recorrido ($R$):**
   $$R = X_{\max} - X_{\min}$$
2. **Número de Intervalos ($m$ o $k$) — Regla de Sturges:**
   $$m = 1 + 3.32 \log_{10}(n) \quad \text{o} \quad k = 1 + 3.3 \log_{10}(n)$$
   *(Nota: Siempre redondear al entero inmediato superior).*
3. **Amplitud o Ancho de Clase ($c$):**
   $$c = \frac{R}{m}$$
4. **Marca de Clase ($x_i$ o $m_i$):**
   $$x_i = \frac{L_{\inf} + L_{\sup}}{2}$$

---

## 3. Medidas de Tendencia Central

### 3.1 Media Aritmética ($\overline{X}$)

* **Datos no agrupados:**
  $$\overline{X} = \frac{\sum_{i=1}^{n} X_i}{n}$$
* **Datos agrupados:**
  $$\overline{X} = \frac{\sum_{i=1}^{m} x_i \cdot f_i}{n}$$
  *Leyenda:* $x_i$ = marca de clase del intervalo $i$, $f_i$ = frecuencia absoluta simple.
* **Media Ponderada:**
  $$\overline{X}_w = \frac{\sum_{i=1}^{k} w_i \cdot X_i}{\sum_{i=1}^{k} w_i}$$
  *Leyenda:* $w_i$ = ponderaciones o pesos asociados.
* **Media Combinada (a partir de submuestras):**
  $$\overline{X} = \frac{\sum_{i=1}^{k} n_i \cdot \overline{X}_i}{\sum_{i=1}^{k} n_i}$$
* **Propiedad de Transformación Lineal:**
  Si $Y_i = aX_i + b \implies \overline{Y} = a\overline{X} + b$

### 3.2 Media Geométrica ($Mg$)
$$Mg = \sqrt[n]{X_1 \cdot X_2 \cdot \dots \cdot X_n}$$
*Uso:* Cálculo de tasas medias de crecimiento y variaciones relativas acumuladas.

### 3.3 Mediana ($Me$)

* **Datos no agrupados:**
  * Posición o lugar: $\frac{n+1}{2}$ con los datos ordenados en orden ascendente.
  * Si $n$ es impar: valor ubicado exactamente al centro.
  * Si $n$ es par: promedio de las dos observaciones centrales.
* **Datos agrupados:**
  1. Identificar la clase mediana mediante la posición $\frac{n}{2}$ en la columna $F_i$.
  2. Aplicar interpolación:
     $$Me = L_{\inf} + c \left[ \frac{\frac{n}{2} - F_{i-1}}{f_i} \right]$$
     *Leyenda:*
     * $L_{\inf}$: límite inferior del intervalo mediano.
     * $c$: amplitud de clase.
     * $n$: total de observaciones.
     * $F_{i-1}$: frecuencia acumulada anterior a la clase mediana.
     * $f_i$: frecuencia absoluta simple de la clase mediana.

### 3.4 Moda ($Mo$)

* **Datos no agrupados:** Valor con mayor frecuencia absoluta (puede ser unimodal, bimodal, multimodal o amodal).
* **Datos agrupados:**
  $$Mo = L_{\inf} + c \left[ \frac{\Delta_1}{\Delta_1 + \Delta_2} \right]$$
  *Donde:*
  * $\Delta_1 = f_i - f_{i-1}$
  * $\Delta_2 = f_i - f_{i+1}$
  * $f_i$: frecuencia de la clase modal (la más alta).
  * $f_{i-1}, f_{i+1}$: frecuencias de las clases anterior y posterior respectivamente.

---

## 4. Medidas de Posición (Cuantiles)

Dividen el conjunto ordenado de datos en partes iguales.
* **Equivalencias clave:**
  $$Me = Q_2 = D_5 = P_{50}$$

### Fórmulas para Datos Agrupados

* **Cuartiles ($Q_j$ con $j \in \{1, 2, 3\}$):**
  $$\text{Posición} = \frac{j \cdot n}{4} \implies Q_j = L_{\inf} + c \left[ \frac{\frac{j \cdot n}{4} - F_{i-1}}{f_i} \right]$$
* **Deciles ($D_j$ con $j \in \{1, 2, \dots, 9\}$):**
  $$\text{Posición} = \frac{j \cdot n}{10} \implies D_j = L_{\inf} + c \left[ \frac{\frac{j \cdot n}{10} - F_{i-1}}{f_i} \right]$$
* **Percentiles ($P_j$ con $j \in \{1, 2, \dots, 99\}$):**
  $$\text{Posición} = \frac{j \cdot n}{100} \implies P_j = L_{\inf} + c \left[ \frac{\frac{j \cdot n}{100} - F_{i-1}}{f_i} \right]$$

---

## 5. Medidas de Dispersión

### 5.1 Rango ($R$)
$$R = X_{\max} - X_{\min}$$

### 5.2 Varianza Muestral ($s^2$)
* **Datos no agrupados (Definición):**
  $$s^2 = \frac{\sum_{i=1}^{n} (X_i - \overline{X})^2}{n - 1}$$
* **Datos no agrupados (Fórmula abreviada):**
  $$s^2 = \frac{\sum_{i=1}^{n} X_i^2 - n \overline{X}^2}{n - 1}$$
* **Datos agrupados:**
  $$s^2 = \frac{\sum_{i=1}^{m} x_i^2 \cdot f_i - n \overline{X}^2}{n - 1}$$

### 5.3 Desviación Estándar Muestral ($s$)
$$s = \sqrt{s^2}$$
*Interpretación:* Grado de alejamiento promedio de las observaciones respecto a su media aritmética (expresado en las unidades originales de la variable).

### 5.4 Coeficiente de Variación ($CV$)
$$CV = \frac{s}{\overline{X}} \quad \text{o} \quad CV\% = \left(\frac{s}{\overline{X}}\right) \times 100\%$$
* **Criterio de Homogeneidad:**
  * Si $CV < 0.33$ (o $< 30\%$ según bibliografía del curso): Conjunto **homogéneo** (datos concentrados, la media es representativa).
  * Si $CV \ge 0.33$ (o $\ge 30\%$): Conjunto **heterogéneo** (datos dispersos, la media no es confiable).

---

## 6. Medidas de Forma

### 6.1 Asimetría ($As$)
* **Coeficiente de Asimetría de Pearson:**
  $$As = \frac{3(\overline{X} - Me)}{s}$$
* **Interpretación:**
  * $As = 0 \implies$ **Simétrica** ($\overline{X} \approx Me \approx Mo$).
  * $As > 0 \implies$ **Asimetría Positiva (sesgo a la derecha)** ($\overline{X} > Me > Mo$). Mayor concentración de valores hacia la izquierda con cola hacia la derecha.
  * $As < 0 \implies$ **Asimetría Negativa (sesgo a la izquierda)** ($\overline{X} < Me < Mo$). Mayor concentración de valores hacia la derecha con cola hacia la izquierda.

### 6.2 Curtosis ($k$)
* **Coeficiente de Curtosis percentílico:**
  $$k = \frac{Q_3 - Q_1}{2(P_{90} - P_{10})}$$
* **Criterio de clasificación:**
  * $k < 0.263 \implies$ **Platicúrtica** (curva aplanada, datos más dispersos).
  * $k = 0.263 \implies$ **Mesocúrtica** (curva normal/estándar).
  * $k > 0.263 \implies$ **Leptocúrtica** (curva apuntada, alta concentración en el centro).
* *Nota para software (SPSS):* Al centrar en 0 ($k_{SPSS} = k - 0.263$ aprox.):
  * $k < 0 \implies$ Platicúrtica
  * $k = 0 \implies$ Mesocúrtica
  * $k > 0 \implies$ Leptocúrtica

---

## 7. Análisis Exploratorio de Datos (Diagrama de Cajas)

* **Rango Intercuartílico ($IQR$):**
  $$IQR = Q_3 - Q_1$$
* **Barreras para Valores Atípicos (*Outliers*):**
  * $\text{Límite Inferior} = Q_1 - 1.5 \cdot IQR$
  * $\text{Límite Superior} = Q_3 + 1.5 \cdot IQR$
* **Valores Atípicos:** Cualquier observación $X_i < \text{Límite Inferior}$ o $X_i > \text{Límite Superior}$ se considera un valor atípico (graficado comúnmente con $*$ o $\circ$).