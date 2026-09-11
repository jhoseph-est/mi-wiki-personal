---
title: tema 2
ciclo: 1
curso: fisica-1
---
## Introducción

En el nivel de Física I, el estudio se simplifica mediante el modelo de **partícula**, donde se desprecia la geometría del cuerpo para concentrar toda su masa en un punto matemático. Esto permite describir el movimiento traslacional puro, ignorando rotaciones internas o deformaciones.

## Móvil. Movimiento. Sistemas de referencia. Sistemas coordenados. Partícula

- **Móvil:** Es el cuerpo u objeto en movimiento.
    
- **Movimiento:** Cambio de posición de un cuerpo respecto a un punto considerado fijo a lo largo del tiempo. Es un concepto intrínsecamente relativo.
    
- **Sistema de Referencia (SR):** Conjunto de convenciones utilizadas por un observador para medir la posición y otras magnitudes físicas. Un SR es **inercial** si cumple las leyes de Newton (se mueve a velocidad constante o está en reposo).
    
- **Sistemas Coordenados:** Herramientas matemáticas asociadas al SR. Los más comunes son el Cartesiano $(x, y, z)$, el Cilíndrico $(\rho, \phi, z)$ y el Esférico $(r, \theta, \phi)$.
    
- **Partícula:** Abstracción física de un cuerpo cuyas dimensiones son despreciables frente a las distancias recorridas en el fenómeno estudiado.
    

## Definiciones de cantidades cinemáticas

- **Vector Posición ($\vec{r}$):** Vector que une el origen del sistema de coordenadas con el punto donde se encuentra la partícula.
    
- **Trayectoria:** Lugar geométrico de las posiciones sucesivas ocupadas por la partícula. Es una línea (curva o recta) en el espacio.
    
- **Longitud recorrida ($s$):** Magnitud escalar que mide la distancia real medida sobre la trayectoria.
    
- **Vector Desplazamiento ($\Delta \vec{r}$):** Cambio neto de posición, definido como $\Delta \vec{r} = \vec{r}_f - \vec{r}_i$. Es independiente de la trayectoria.
    
- **Vector Velocidad Media ($\vec{v}_m$):** Relación entre el desplazamiento y el intervalo de tiempo: $\vec{v}_m = \frac{\Delta \vec{r}}{\Delta t}$.
    
- **Vector Velocidad Instantánea ($\vec{v}$):** Límite de la velocidad media cuando el intervalo de tiempo tiende a cero, equivalente a la derivada de la posición: $\vec{v} = \frac{d\vec{r}}{dt}$. Es siempre tangente a la trayectoria.
    
- **Rapidez media ($v_{media}$):** Escalar definido como la distancia total recorrida dividida por el tiempo total.
    
- **Rapidez instantánea ($v$):** Módulo del vector velocidad instantánea: $v = |\vec{v}|$.
    

## Aceleración media. Aceleración instantánea. Unidades

La aceleración cuantifica el cambio del vector velocidad respecto al tiempo.

- **Aceleración media ($\vec{a}_m$):** $\vec{a}_m = \frac{\Delta \vec{v}}{\Delta t}$.
    
- **Aceleración instantánea ($\vec{a}$):** Derivada de la velocidad respecto al tiempo: $\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}$.
    

**Unidades:** En el SI, la unidad es el metro por segundo al cuadrado ($m/s^2$).

## Movimiento unidimensional

Se restringe el análisis a una única línea recta (eje $x$).

### Movimiento rectilíneo uniforme (MRU)

Caracterizado por una velocidad constante ($\vec{a} = 0$). La ecuación de posición es:

$$x(t) = x_0 + v \cdot t$$

### Movimiento rectilíneo uniformemente variado (MRUV)

La aceleración es constante ($a = \text{cte}$). Las ecuaciones cinemáticas fundamentales son:

1. $v(t) = v_0 + a \cdot t$
    
2. $x(t) = x_0 + v_0 \cdot t + \frac{1}{2} a \cdot t^2$
    
3. $v_f^2 = v_0^2 + 2a \cdot \Delta x$
    

### Ecuaciones, análisis e interpretación de gráficos

- **Gráfico $x$ vs $t$:** En MRU es una recta cuya pendiente es $v$. En MRUV es una parábola.
    
- **Gráfico $v$ vs $t$:** En MRUV es una recta cuya pendiente es $a$. El **área bajo la curva** representa el desplazamiento $\Delta x$.
    
- **Gráfico $a$ vs $t$:** En MRUV es una línea horizontal. El área representa el cambio de velocidad $\Delta v$.
    

### Caída libre

Caso particular de MRUV donde un objeto se mueve bajo la influencia exclusiva de la gravedad ($g \approx 9.81 \, m/s^2$ en la superficie terrestre), dirigida hacia el centro de la Tierra. Se asume ausencia de resistencia del aire.

## Movimiento rectilíneo con aceleración variable

Cuando $a = f(t)$, $a = f(v)$ o $a = f(x)$, se recurre al cálculo integral para hallar la velocidad y posición:

$$v(t) = v_0 + \int_{t_0}^{t} a(t) dt$$

$$x(t) = x_0 + \int_{t_0}^{t} v(t) dt$$

## Movimiento bidimensional con aceleración constante: movimiento parabólico

Resultado de la superposición de dos movimientos independientes (Principio de Galileo):

1. **Eje horizontal ($x$):** MRU ($a_x = 0$).
    
2. **Eje vertical ($y$):** MRUV (caída libre, $a_y = -g$).
    

Las ecuaciones de posición son:

$$x(t) = v_{0x} t$$

$$y(t) = y_0 + v_{0y} t - \frac{1}{2} g t^2$$

## Componentes tangencial y normal de la aceleración

En movimientos curvilíneos, es útil descomponer la aceleración en un sistema de ejes intrínseco a la trayectoria:

$$\vec{a} = \vec{a}_t + \vec{a}_n$$

- **Aceleración tangencial ($a_t$):** Cambia el módulo de la velocidad ($a_t = \frac{dv}{dt}$).
    
- **Aceleración normal o centrípeta ($a_n$):** Cambia la dirección de la velocidad. Se dirige hacia el centro de curvatura ($a_n = \frac{v^2}{\rho}$, donde $\rho$ es el radio de curvatura).
    

> [!example] foto
> 
> [Diagrama de un móvil en una trayectoria curva mostrando los vectores velocidad, aceleración tangencial dirigida según la trayectoria y aceleración normal dirigida hacia el centro de la curva].

## Movimiento circular

El movimiento circular es un caso particular de movimiento bidimensional donde la trayectoria es una circunferencia de radio $R$ constante. En este contexto, es más eficiente utilizar variables angulares en lugar de cartesianas.

### Posición angular ($\theta$)

Define la ubicación de la partícula mediante el ángulo formado por el radio vector y un eje de referencia (generalmente el eje $+x$). Se mide en **radianes** ($rad$) en el SI. La relación con la longitud de arco $s$ es:

$$s = \theta R$$

### Desplazamiento angular ($\Delta \theta$)

Es la variación de la posición angular entre dos instantes de tiempo: $\Delta \theta = \theta_f - \theta_i$.

### Velocidad angular media e instantánea ($\omega$)

- **Media ($\omega_m$):** $\omega_m = \frac{\Delta \theta}{\Delta t}$.
    
- **Instantánea ($\omega$):** $\omega = \frac{d\theta}{dt}$. Representa la rapidez con la que cambia el ángulo. Su unidad es $rad/s$.
    
    La relación con la velocidad tangencial es: $v = \omega R$.
    

### Aceleración angular media e instantánea ($\alpha$)

- **Media ($\alpha_m$):** $\alpha_m = \frac{\Delta \omega}{\Delta t}$.
    
- **Instantánea ($\alpha$):** $\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$. Su unidad es $rad/s^2$.
    
    Se relaciona con la aceleración tangencial mediante: $a_t = \alpha R$.
    

### Movimiento circular uniforme (MCU)

Ocurre cuando $\omega$ es constante ($\alpha = 0$).

- **Ecuación:** $\theta(t) = \theta_0 + \omega t$.
    
- **Aceleración:** No existe aceleración tangencial, pero **sí existe aceleración centrípeta** ($a_n = \omega^2 R$), ya que la dirección de la velocidad cambia continuamente.
    

### Movimiento circular uniformemente variado (MCUV)

Ocurre cuando $\alpha$ es constante. Las ecuaciones son análogas al MRUV:

1. $\omega(t) = \omega_0 + \alpha t$
    
2. $\theta(t) = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2$
    
3. $\omega_f^2 = \omega_0^2 + 2\alpha \Delta \theta$
    

> [!example] foto
> 
> [Diagrama de una partícula en movimiento circular mostrando los vectores de velocidad angular (vector axial), velocidad tangencial y las componentes de la aceleración: centrípeta y tangencial].

## Movimiento bidimensional en coordenadas radial y transversal

En trayectorias curvilíneas generales, se utilizan los vectores unitarios radial ($\hat{u}_r$) y transversal ($\hat{u}_\theta$). La posición es $\vec{r} = r \hat{u}_r$. Al derivar respecto al tiempo, considerando que los vectores unitarios también cambian de dirección:

- **Velocidad:** $\vec{v} = \dot{r} \hat{u}_r + r \dot{\theta} \hat{u}_\theta$
    
- **Aceleración:** $\vec{a} = (\ddot{r} - r \dot{\theta}^2) \hat{u}_r + (r \ddot{\theta} + 2\dot{r}\dot{\theta}) \hat{u}_\theta$
    

Donde $\dot{r}$ es la velocidad radial y $r \dot{\theta}$ es la velocidad transversal ($v_\theta$).

## Movimiento tridimensional en coordenadas cartesianas

Es la generalización del movimiento a tres ejes independientes. El vector posición es $\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}$. La trayectoria es una curva en el espacio (curva espacial). Las magnitudes de velocidad y aceleración se calculan mediante el módulo del vector resultante de sus tres componentes.

## Movimiento relativo: velocidad y aceleración relativas

Describe cómo se observa el movimiento de una partícula $P$ desde dos sistemas de referencia distintos, $A$ (fijo) y $B$ (en movimiento).

- **Posición:** $\vec{r}_{P/A} = \vec{r}_{B/A} + \vec{r}_{P/B}$
    
- **Velocidad:** $\vec{v}_{P/A} = \vec{v}_{B/A} + \vec{v}_{P/B}$
    
- **Aceleración:** $\vec{a}_{P/A} = \vec{a}_{B/A} + \vec{a}_{P/B}$
    

## Ejes en traslación

Si el sistema de referencia $B$ se traslada respecto a $A$ sin rotar, la orientación de los ejes coordenados de $B$ permanece paralela a los de $A$. En este caso, la velocidad y aceleración relativas se calculan por simple suma vectorial, como se indicó en el apartado anterior. Si $B$ se mueve a velocidad constante respecto a $A$, las aceleraciones medidas en ambos sistemas son idénticas ($\vec{a}_{P/A} = \vec{a}_{P/B}$), lo que define a ambos como sistemas inerciales.

## Ejes en rotación; aceleración de Coriolis

Cuando el sistema de referencia $B$ rota con una velocidad angular $\vec{\Omega}$ respecto a $A$, el cálculo de la aceleración se vuelve más complejo debido a que los ejes de $B$ cambian su orientación. La aceleración absoluta de la partícula medida desde $A$ es:

$$\vec{a}_A = \vec{a}_B + \vec{a}_{B/A} + \vec{\Omega} \times (\vec{\Omega} \times \vec{r}) + \dot{\vec{\Omega}} \times \vec{r} + 2\vec{\Omega} \times \vec{v}_B$$

Donde:

- **Aceleración centrípeta:** $\vec{\Omega} \times (\vec{\Omega} \times \vec{r})$.
    
- **Aceleración de Coriolis:** $2\vec{\Omega} \times \vec{v}_B$. Esta componente solo aparece si la partícula se mueve respecto al sistema rotante ($\vec{v}_B \neq 0$). Es responsable de fenómenos como la desviación de vientos en la atmósfera terrestre.
    

> [!example] foto
> 
> [Esquema de dos sistemas de referencia, uno fijo y otro rotante, ilustrando la trayectoria aparente de una partícula y la dirección del vector de aceleración de Coriolis perpendicular al eje de rotación y a la velocidad relativa].
