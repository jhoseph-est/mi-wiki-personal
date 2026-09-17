---
title: "resumen 1"
---

# Compendio de Fórmulas, Conceptos y Métodos de Estática

Este documento sintetiza la teoría, formulación matemática con leyendas y metodologías de resolución de problemas extraídas del material del curso de Estática (Vectores, Momentos, Sistemas Equivalentes, Torsor, Equilibrio 2D/3D, Centroides y Cargas Distribuidas).

---

## 1. Álgebra Vectorial y Fuerzas en el Espacio

### 1.1. Vector de Posición y Vector Unitario
Para dos puntos en el espacio $A(x_A, y_A, z_A)$ y $B(x_B, y_B, z_B)$:

$$
\vec{r}_{AB} = (x_B - x_A)\hat{\imath} + (y_B - y_A)\hat{\jmath} + (z_B - z_A)\hat{k}
$$

$$
\|\vec{r}_{AB}\| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}
$$

$$
\hat{u}_{AB} = \frac{\vec{r}_{AB}}{\|\vec{r}_{AB}\|}
$$

**Leyenda:**
* $\vec{r}_{AB}$: Vector posición dirigido desde el punto $A$ hacia el punto $B$.
* $\|\vec{r}_{AB}\|$: Distancia euclidiana o longitud del segmento entre $A$ y $B$.
* $\hat{u}_{AB}$: Vector unitario adimensional en la línea de acción de $A$ a $B$.

### 1.2. Fuerza Expresada en Términos de su Magnitud y Vector Unitario

$$
\vec{F} = F\,\hat{u}_{AB} = F_x\,\hat{\imath} + F_y\,\hat{\jmath} + F_z\,\hat{k}
$$

$$
F = \|\vec{F}\| = \sqrt{F_x^2 + F_y^2 + F_z^2}
$$

### 1.3. Cosenos Directores

$$
\cos\alpha = \frac{F_x}{F}, \quad \cos\beta = \frac{F_y}{F}, \quad \cos\gamma = \frac{F_z}{F}
$$

$$
\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1
$$

**Leyenda:**
* $\alpha, \beta, \gamma$: Ángulos directores que forma el vector con los ejes positivos $x, y, z$ respectivamente.
* $F_x, F_y, F_z$: Componentes escalares ortogonales de la fuerza $\vec{F}$.

### 1.4. Producto Punto (Escalar)

$$
\vec{U} \cdot \vec{V} = \|\vec{U}\|\|\vec{V}\|\cos\theta = U_x V_x + U_y V_y + U_z V_z
$$

$$
\cos\theta = \frac{\vec{U} \cdot \vec{V}}{\|\vec{U}\|\|\vec{V}\|}
$$

**Proyección sobre una recta o eje $L$:**

$$
V_L = \vec{V} \cdot \hat{u}_L, \quad \vec{V}_L = (\vec{V} \cdot \hat{u}_L)\,\hat{u}_L
$$

---

## 2. Momento de una Fuerza y Sistemas de Pares

### 2.1. Momento de una Fuerza respecto a un Punto
* **Formulación Escalar (2D):**
  $$
  M_O = \pm F \cdot D
  $$
  *(Convención habitual: giro antihorario positivo $+$, horario negativo $-$).*
* **Formulación Vectorial (3D):**
$$
\vec{M}_O = \vec{r} \times \vec{F} = \begin{vmatrix} \hat{\imath} & \hat{\jmath} & \hat{k} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix}
$$

$$
D = \frac{\|\vec{M}_O\|}{\|\vec{F}\|}
$$

**Leyenda:**
* $\vec{M}_O$: Vector momento respecto al centro de momentos $O$.
* $\vec{r}$: Vector de posición que va desde el centro de momentos $O$ hasta **cualquier punto** sobre la línea de acción de $\vec{F}$.
* $D$: Brazo de palanca (distancia perpendicular mínima entre el punto $O$ y la línea de acción de la fuerza).

### 2.2. Momento respecto a un Eje o Línea $L$

$$
M_L = \hat{u}_L \cdot (\vec{r} \times \vec{F}) = \begin{vmatrix} u_{Lx} & u_{Ly} & u_{Lz} \\ r_x & r_y & r_z \\ F_x & F_y & F_z \end{vmatrix}
$$

$$
\vec{M}_L = M_L\,\hat{u}_L
$$

**Leyenda:**
* $\hat{u}_L$: Vector unitario a lo largo del eje $L$.
* $\vec{r}$: Vector desde cualquier punto sobre el eje $L$ hasta cualquier punto en la línea de acción de $\vec{F}$.

### 2.3. Momento de un Par (Cupla)
Dos fuerzas de igual magnitud, sentidos opuestos y líneas de acción paralelas separadas por una distancia perpendicular $d$:

$$
M = F \cdot d, \quad \vec{M} = \vec{r} \times \vec{F}
$$

* El momento de un par es un **vector libre** (su valor es idéntico respecto a cualquier punto del espacio).
* Pares equivalentes: tienen el mismo vector momento $\vec{M}$ (misma magnitud, dirección y sentido de giro).

---

## 3. Reducción de Sistemas de Fuerzas y Llave de Torsión (Torsor)

### 3.1. Reducción a un Sistema Fuerza-Par en un punto $O$

$$
\vec{R} = \sum \vec{F}_i
$$

$$
\vec{M}_O^R = \sum \vec{M}_O = \sum (\vec{r}_i \times \vec{F}_i) + \sum \vec{M}_j
$$

* Si el sistema se traslada de $O$ a un nuevo punto $O'$ (con vector $\vec{s}$ de $O'$ a $O$ o $\vec{r}_{O'/O}$):
  $$
  \vec{M}_{O'}^R = \vec{M}_O^R + \vec{s} \times \vec{R}
  $$

### 3.2. Casos de Reducción a Fuerza Única
Un sistema puede reducirse a una sola fuerza resultante $\vec{R}$ si y solo si:
1. Fuerzas concurrentes.
2. Fuerzas coplanares ($\vec{M}_O^R$ es perpendicular a $\vec{R}$, es decir, $\vec{R} \cdot \vec{M}_O^R = 0$).
3. Fuerzas paralelas en el espacio ($\vec{R} \cdot \vec{M}_O^R = 0$).

* **Línea de acción en 2D:**
  $$
  x R_y - y R_x = M_O^R
  $$
  $$
  x_{\text{int}} = \frac{M_O^R}{R_y} \quad (\text{para } y=0), \qquad y_{\text{int}} = -\frac{M_O^R}{R_x} \quad (\text{para } x=0)
  $$
* **Línea de acción en 3D (para $\vec{R} \cdot \vec{M}_O^R = 0$):**
  $$
  \vec{r} \times \vec{R} = \vec{M}_O^R
  $$

### 3.3. Sistema Torsor o Llave de Torsión (Wrench)
En el caso tridimensional general, $\vec{R} \cdot \vec{M}_O^R \neq 0$. El sistema se reduce a una fuerza $\vec{R}$ y a un momento par colineal con ella ($\vec{M}_1 \parallel \vec{R}$).

* **Momento mínimo (paralelo a $\vec{R}$):**
  $$
  \mu = M_1 = \frac{\vec{R} \cdot \vec{M}_O^R}{\|\vec{R}\|}, \quad \vec{M}_1 = \mu\,\frac{\vec{R}}{\|\vec{R}\|}
  $$
* **Paso o avance del torsor ($p$ o $\lambda$):**
  $$
  p = \frac{\mu}{\|\vec{R}\|} = \frac{\vec{R} \cdot \vec{M}_O^R}{\|\vec{R}\|^2} \quad [\text{unidades de longitud: m, pulg}]
  $$
* **Ecuación vectorial de la recta del eje del torsor:**
  $$
  \vec{r}_P(t) = \frac{\vec{R} \times \vec{M}_O^R}{\|\vec{R}\|^2} + t\,\frac{\vec{R}}{\|\vec{R}\|}, \quad t \in \mathbb{R}
  $$
  Donde $\vec{r}_0 = \dfrac{\vec{R} \times \vec{M}_O^R}{\|\vec{R}\|^2}$ es el punto del eje más cercano al origen.

---

## 4. Equilibrio de Cuerpos Rígidos

### 4.1. Condiciones Generales

$$
\sum \vec{F} = \vec{0}, \qquad \sum \vec{M}_O = \vec{0}
$$

* **Equilibrio 2D (hasta 3 ecuaciones escalares independientes):**
  $$
  \sum F_x = 0, \quad \sum F_y = 0, \quad \sum M_A = 0
  $$
* **Equilibrio 3D (hasta 6 ecuaciones escalares independientes):**
  $$
  \sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0
  $$
  $$
  \sum M_x = 0, \quad \sum M_y = 0, \quad \sum M_z = 0
  $$

### 4.2. Tipos de Apoyos y sus Reacciones
| Apoyo / Conexión | Dimensiones | Reacciones que genera | Grados de libertad impedidos |
| :--- | :---: | :--- | :---: |
| **Cable / Eslabón** | 2D / 3D | 1 Fuerza a lo largo del cable (tensión) | Traslación en el eje del cable |
| **Superficie lisa / Rodillo** | 2D / 3D | 1 Fuerza normal a la superficie | Traslación normal |
| **Pasador liso (Perno) / Bisagra alineada** | 2D | 2 Fuerzas ($A_x, A_y$) | Traslaciones $x, y$ |
| **Empotramiento 2D** | 2D | 2 Fuerzas ($A_x, A_y$) y 1 Momento ($M_A$) | Todas las traslaciones y rotación plana |
| **Rótula esférica (Bola y cuenca)** | 3D | 3 Fuerzas ($A_x, A_y, A_z$) | Las 3 traslaciones (permite giros) |
| **Bisagra simple o Chumacera única** | 3D | 3 Fuerzas ($A_x, A_y, A_z$) y 2 Momentos | Traslaciones y giros fuera del eje |
| **Bisagras / Chumaceras alineadas** | 3D | Solo fuerzas radiales/axiales (no se generan pares) | Traslaciones combinadas |
| **Empotramiento 3D** | 3D | 3 Fuerzas ($A_x, A_y, A_z$) y 3 Momentos ($M_x, M_y, M_z$) | Todo movimiento (6 GDL) |

### 4.3. Teorema de las Tres Fuerzas (Equilibrio 2D)
Si un cuerpo en equilibrio está sometido únicamente a tres fuerzas coplanares concurrentes o paralelas:

$$
\frac{F_1}{\operatorname{sen}\beta} = \frac{F_2}{\operatorname{sen}\alpha} = \frac{F_3}{\operatorname{sen}\varepsilon} \quad (\text{Ley de Senos / Teorema de Lami})
$$

---

## 5. Centroides y Centros de Masa

### 5.1. Fórmulas de Integración Directa

| Entidad | Coordenada $\bar{x}$ | Coordenada $\bar{y}$ | Coordenada $\bar{z}$ |
| :--- | :---: | :---: | :---: |
| **Líneas** | $\dfrac{\int x\,dL}{\int dL}$ | $\dfrac{\int y\,dL}{\int dL}$ | $\dfrac{\int z\,dL}{\int dL}$ |
| **Áreas** | $\dfrac{\int x\,dA}{\int dA}$ | $\dfrac{\int y\,dA}{\int dA}$ | — |
| **Volúmenes** | $\dfrac{\int x\,dV}{\int dV}$ | $\dfrac{\int y\,dV}{\int dV}$ | $\dfrac{\int z\,dV}{\int dV}$ |
| **Centro de Masa** | $\dfrac{\int x\,\rho\,dV}{\int \rho\,dV}$ | $\dfrac{\int y\,\rho\,dV}{\int \rho\,dV}$ | $\dfrac{\int z\,\rho\,dV}{\int \rho\,dV}$ |

* **Diferencial de línea en coordenadas cartesianas:**
  $$
  dL = \sqrt{dx^2 + dy^2} = \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\,dx
  $$
* **Diferencial de línea en coordenadas polares:**
  $$
  dL = R\,d\theta, \quad x = R\cos\theta, \quad y = R\operatorname{sen}\theta
  $$

### 5.2. Cuerpos Compuestos
Para áreas, volúmenes o masas formadas por figuras geométricas conocidas:

$$
\bar{x} = \frac{\sum \bar{x}_i A_i}{\sum A_i}, \quad \bar{y} = \frac{\sum \bar{y}_i A_i}{\sum A_i}
$$

$$
\bar{x} = \frac{\sum \bar{x}_i V_i}{\sum V_i}, \quad \bar{x} = \frac{\sum \bar{x}_i m_i}{\sum m_i}, \quad \bar{x} = \frac{\sum \bar{x}_i W_i}{\sum W_i}
$$

* **Regla para huecos o vacíos:** Las propiedades de área, volumen o masa de un hueco se ingresan con **signo negativo** ($-A_{\text{hueco}}$).

### 5.3. Valores Notables de Centroides
* **Triángulo rectángulo** (base $b$, altura $h$): $\bar{x} = \frac{2}{3}b$ (desde el vértice agudo) o $\frac{1}{3}b$ (desde el ángulo recto); $\bar{y} = \frac{1}{3}h$.
* **Arco semicircular** (radio $R$): $\bar{y} = \dfrac{2R}{\pi}$.
* **Área semicircular** (radio $R$): $\bar{y} = \dfrac{4R}{3\pi}$.
* **Cono de revolución** (altura $h$ desde el vértice): $\bar{x} = \dfrac{3}{4}h$ (o a $\frac{1}{4}h$ de la base plana).

### 5.4. Teoremas de Pappus-Guldinus
1. **Área de una superficie de revolución:** Generada al rotar una curva plana $L$ alrededor de un eje que no la interseca:
   $$
   A = 2\pi\,\bar{y}_L\,L
   $$
   *(Distancia recorrida por el centroide de la línea $\times$ longitud de la línea).*

2. **Volumen de un cuerpo de revolución:** Generado al rotar un área plana $A$ alrededor de un eje que no la interseca:
   $$
   V = 2\pi\,\bar{y}_A\,A
   $$
   *(Distancia recorrida por el centroide del área $\times$ área generatriz).*

---

## 6. Cargas Distribuidas y Presión Hidrostática

### 6.1. Cargas Distribuidas en Vigas
Dada una carga continua $w = f(x)$ $[\text{N/m}]$ a lo largo de una viga de longitud $L$:
* **Fuerza concentrada equivalente:**
  $$
  W = \int_0^L w\,dx = \text{Área bajo la curva } w(x)
  $$
* **Punto de aplicación (línea de acción $\bar{x}$):**
  $$
  \bar{x} = \frac{\int_0^L x\,w\,dx}{W} = \text{Centroide del área bajo la curva } w(x)
  $$

### 6.2. Presión Hidrostática sobre Superficies
* **Presión a profundidad $h$:**
  $$
  p = \gamma\,h = \rho\,g\,h \quad [\text{N/m}^2 \text{ o lb/ft}^2]
  $$
  Donde $\gamma$ es el peso específico del fluido ($\gamma_{\text{agua}} \approx 9810\text{ N/m}^3 = 62.4\text{ lb/ft}^3$).
* **Fuerza diferencial y total:**
  $$
  dR = p\,dA = \gamma\,h\,(b\,dx) \implies R = \int dR
  $$
* **Punto de aplicación:** Coincide con el centroide del prisma o trapecio de presiones que actúa sobre la compuerta.

---

## 7. Métodos Sistemáticos de Resolución de Problemas

### Método A: Equilibrio Tridimensional de Cuerpos Rígidos
1. **Identificar y parametrizar:** Establecer el sistema de coordenadas cartesianas $(x, y, z)$ y registrar las coordenadas de todos los puntos clave.
2. **Definir vectores de fuerza:**
   * Para cables: determinar $\vec{r}_{origen \to fin}$, su módulo y el unitario $\hat{u}$; expresar la fuerza como $\vec{T} = T\,\hat{u}$.
   * Para apoyos: colocar las incógnitas de reacción ($A_x, A_y, A_z$ y momentos si restringe giro).
3. **Calcular momentos respecto a un punto estratégico:**
   * Elegir un punto por el que pase el mayor número de fuerzas desconocidas (usualmente la rótula o bisagra $A$).
   * Evaluar $\vec{M}_A = \sum (\vec{r}_i \times \vec{F}_i) + \sum \vec{M}_{\text{par}} = \vec{0}$.
4. **Plantear y resolver el sistema:** Igualar coeficientes $(\hat{\imath}, \hat{\jmath}, \hat{k})$ en $\sum \vec{M}_A = \vec{0}$ y $\sum \vec{F} = \vec{0}$ para resolver las hasta 6 incógnitas escalares.

### Método B: Reducción a Sistema Torsor
1. **Calcular la resultante:** $\vec{R} = \sum \vec{F}_i$. Si $\vec{R} = \vec{0}$, el sistema se reduce a un par puro $\vec{M}_O^R$.
2. **Calcular el momento resultante en el origen:** $\vec{M}_O^R = \sum (\vec{r}_i \times \vec{F}_i) + \sum \vec{M}_{\text{par}}$.
3. **Verificar perpendicularidad:**
   * Si $\vec{R} \cdot \vec{M}_O^R = 0$, se reduce a una **fuerza única**.
   * Si $\vec{R} \cdot \vec{M}_O^R \neq 0$, es un **torsor**.
4. **Determinar las propiedades del torsor:**
   * Momento mínimo: $\mu = \dfrac{\vec{R} \cdot \vec{M}_O^R}{\|\vec{R}\|}$.
   * Paso: $p = \dfrac{\mu}{\|\vec{R}\|}$.
   * Eje del torsor: $\vec{r} = \dfrac{\vec{R} \times \vec{M}_O^R}{\|\vec{R}\|^2} + t\,\hat{u}_R$.
   * Intersección con un plano (ej. plano $x-z$): hacer $y=0$ en la recta paramétrica y despejar el parámetro $t$ para hallar $x$ y $z$.

### Método C: Cálculo de Centroides por Partes Compuestas
1. **Descomposición:** Dividir la geometría compleja en figuras estándar (rectángulos, triángulos, círculos, semicírculos).
2. **Tabulación:**
   * Columna 1: Parte $i$.
   * Columna 2: Coordenadas del centroide local $(\bar{x}_i, \bar{y}_i, \bar{z}_i)$.
   * Columna 3: Medida de la parte ($A_i$, $V_i$ o $L_i$), usando signo negativo si es un agujero.
   * Columna 4, 5, 6: Momentos de primer orden ($\bar{x}_i A_i, \bar{y}_i A_i$, etc.).
3. **Sumatorias y cocientes:**
   $$
   \bar{x} = \frac{\sum \bar{x}_i A_i}{\sum A_i}, \qquad \bar{y} = \frac{\sum \bar{y}_i A_i}{\sum A_i}
   $$