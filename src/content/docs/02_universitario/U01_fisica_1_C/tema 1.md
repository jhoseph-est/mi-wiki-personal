---
title: tema 1
ciclo: 1
curso: fisica-1
---
## Introducción
La física, como ciencia fundamental que estudia las propiedades de la materia, la energía, el espacio y el tiempo, constituye la base epistemológica y técnica de todas las ramas de la ingeniería. Su objetivo primordial es establecer leyes cuantitativas que gobiernan los fenómenos naturales, permitiendo la predicción y el control de sistemas físicos complejos mediante modelos matemáticos.

## Importancia de la física en la ingeniería

La ingeniería es, esencialmente, la aplicación de principios científicos para el diseño, construcción y optimización de estructuras, máquinas y procesos. La física provee el marco teórico necesario para comprender las interacciones fundamentales. Desde la mecánica clásica, indispensable para el análisis estructural y la cinemática de mecanismos, hasta el electromagnetismo y la termodinámica, que rigen la generación de energía y el procesamiento de señales.

El rigor de la física permite al ingeniero transformar conceptos abstractos en soluciones funcionales. Sin la cuantificación de fuerzas, flujos térmicos o campos electromagnéticos, el desarrollo tecnológico carecería de la seguridad y eficiencia requeridas en la praxis profesional contemporánea.

## El método científico

El método científico es el procedimiento sistemático y riguroso empleado para adquirir nuevos conocimientos. En física e ingeniería, este proceso asegura que los resultados sean reproducibles y verificables. Se estructura típicamente en las siguientes fases:

1. **Observación:** Identificación de un fenómeno físico y recopilación de datos preliminares.
    
2. **Formulación de hipótesis:** Elaboración de una explicación provisional basada en principios teóricos conocidos.
    
3. **Experimentación:** Diseño de pruebas controladas para validar o refutar la hipótesis.
    
4. **Análisis de datos:** Procesamiento estadístico y matemático de los resultados experimentales.
    
5. **Teorización:** Establecimiento de leyes o modelos que describen el fenómeno de manera universal.
    

> [!example] foto
> 
> [Diagrama de flujo del método científico mostrando el ciclo iterativo entre la experimentación y el refinamiento de la hipótesis, destacando el papel de la observación y la deducción matemática].

## Mediciones y errores: medición, tipos de errores, cifras significativas, propagación de errores

La **medición** es el proceso de comparar una magnitud física con una unidad patrón. Ninguna medición es exacta; siempre existe una incertidumbre intrínseca.

### Tipos de errores

- **Errores sistemáticos:** Aquellos que ocurren de manera constante debido a fallos en el equipo (falta de calibración) o deficiencias en el método. Se pueden corregir mediante ajustes técnicos.
    
- **Errores aleatorios:** Variaciones estocásticas impredecibles debidas a factores ambientales o limitaciones del observador. Se minimizan mediante el tratamiento estadístico de múltiples medidas.
    

### Cifras significativas

Representan la precisión de una medida. Incluyen todos los dígitos conocidos con certeza más el primer dígito incierto. El manejo de estas cifras en cálculos sigue reglas estrictas: en sumas y restas, el resultado se limita por el menor número de decimales; en productos y divisiones, por la menor cantidad de cifras significativas totales.

### Propagación de errores

Cuando una magnitud $z$ depende de variables medidas $x$ e $y$ (donde $z = f(x, y)$), la incertidumbre $\Delta z$ se calcula mediante derivadas parciales:

$$\Delta z = \sqrt{\left( \frac{\partial f}{\partial x} \Delta x \right)^2 + \left( \frac{\partial f}{\partial y} \Delta y \right)^2}$$

Donde $\frac{\partial f}{\partial x}$ y $\frac{\partial f}{\partial y}$ son las sensibilidades de la función respecto a cada variable.

## Escalares y vectores

- **Escalares:** Magnitudes que quedan definidas únicamente por su valor numérico y su unidad (ej. masa, temperatura, tiempo).
    
- **Vectores:** Entidades matemáticas que requieren, además de una magnitud (módulo), una dirección y un sentido (ej. fuerza, velocidad, aceleración). Un vector se denota comúnmente como $\mathbf{A}$ o $\vec{A}$.
    

## Representación gráfica y simbólica de un vector

Simbólicamente, un vector en un espacio $n$-dimensional se expresa como una tupla ordenada de componentes: $\vec{A} = (A_x, A_y, A_z)$.

Gráficamente, se representa mediante un segmento de recta dirigido (flecha). La longitud del segmento es proporcional a su **módulo** $|\vec{A}|$, la orientación de la recta define la **dirección** y la punta de la flecha indica el **sentido**.

> [!example] foto
> 
> [Representación de un vector en un sistema de coordenadas cartesianas 3D, mostrando el origen, el punto extremo, el ángulo de inclinación respecto a los ejes y la proyección del vector en los planos coordenados].

## Componentes de un vector, vector unitario

Un vector $\vec{A}$ en el plano puede descomponerse en sus proyecciones sobre los ejes ortogonales:

$A_x = |\vec{A}| \cos \theta$

$A_y = |\vec{A}| \sin \theta$

El **vector unitario** es un vector adimensional con módulo igual a la unidad ($|\hat{u}| = 1$). Se utiliza para especificar una dirección en el espacio. Para cualquier vector $\vec{A}$, su vector unitario asociado es:

$$\hat{a} = \frac{\vec{A}}{|\vec{A}|}$$

En el sistema cartesiano, se utilizan los vectores unitarios canónicos $\hat{i}, \hat{j}, \hat{k}$ para los ejes $x, y, z$ respectivamente. Así, $\vec{A} = A_x \hat{i} + A_y \hat{j} + A_z \hat{k}$.

## Suma de vectores

La suma de dos vectores $\vec{A}$ y $\vec{B}$ produce un vector resultante $\vec{R}$.

Analíticamente, se realiza sumando sus componentes correspondientes:

$$\vec{R} = (A_x + B_x) \hat{i} + (A_y + B_y) \hat{j} + (A_z + B_z) \hat{k}$$

Propiedades:

- Conmutativa: $\vec{A} + \vec{B} = \vec{B} + \vec{A}$
    
- Asociativa: $(\vec{A} + \vec{B}) + \vec{C} = \vec{A} + (\vec{B} + \vec{C})$
    

## Producto escalar

También conocido como producto punto, es una operación que resulta en un escalar. Se define como:

$$\vec{A} \cdot \vec{B} = |\vec{A}| |\vec{B}| \cos \phi$$

donde $\phi$ es el ángulo entre los vectores. En términos de componentes:

$$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$$

Es fundamental para calcular el trabajo mecánico y proyecciones de fuerzas.

## Producto vectorial

El producto cruz resulta en un vector $\vec{C} = \vec{A} \times \vec{B}$ que es perpendicular al plano formado por $\vec{A}$ y $\vec{B}$. Su magnitud es:

$$|\vec{A} \times \vec{B}| = |\vec{A}| |\vec{B}| \sin \phi$$

El sentido se determina por la regla de la mano derecha. Analíticamente se resuelve mediante un determinante:

$$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$$

## Operaciones gráficas y analíticas

- **Método gráfico:** Incluye la regla del paralelogramo (para dos vectores) y el método del polígono (para múltiples vectores). Es útil para la visualización cualitativa.
    
- **Método analítico:** Utiliza la descomposición trigonométrica y el álgebra de componentes. Es el método estándar en ingeniería por su precisión y facilidad de implementación computacional.
    

> [!example] foto
> 
> [Comparación visual entre el método del paralelogramo y el método analítico por componentes para la suma de fuerzas concurrentes].

## Derivadas e integrales de funciones vectoriales

En el contexto de la física mecánica, las magnitudes suelen variar en función del tiempo $t$. Una función vectorial $\vec{r}(t)$ describe la posición de una partícula en el espacio para cada instante de tiempo:

$$\vec{r}(t) = x(t)\hat{i} + y(t)\hat{j} + z(t)\hat{k}$$

### Derivada de una función vectorial

La derivada de un vector respecto al tiempo define magnitudes cinemáticas fundamentales. La velocidad instantánea $\vec{v}(t)$ es la razón de cambio del vector posición:

$$\vec{v}(t) = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\hat{i} + \frac{dy}{dt}\hat{j} + \frac{dz}{dt}\hat{k}$$

De igual forma, la aceleración instantánea $\vec{a}(t)$ es la derivada del vector velocidad:

$$\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}$$

Propiedades clave de la derivación vectorial:

1. **Derivada de una suma:** $\frac{d}{dt} [\vec{u}(t) + \vec{v}(t)] = \vec{u}'(t) + \vec{v}'(t)$
    
2. **Derivada de un producto escalar:** $\frac{d}{dt} [\vec{u}(t) \cdot \vec{v}(t)] = \vec{u}'(t) \cdot \vec{v}(t) + \vec{u}(t) \cdot \vec{v}'(t)$
    
3. **Derivada de un producto vectorial:** $\frac{d}{dt} [\vec{u}(t) \times \vec{v}(t)] = \vec{u}'(t) \times \vec{v}(t) + \vec{u}(t) \times \vec{v}'(t)$ (el orden de los factores es crítico).
    

### Integral de una función vectorial

La integración permite recuperar la información de la trayectoria a partir de la aceleración o la velocidad, siempre que se conozcan las condiciones iniciales. La integral de una función vectorial se realiza componente a componente:

$$\int \vec{v}(t) dt = \left( \int v_x(t) dt \right)\hat{i} + \left( \int v_y(t) dt \right)\hat{j} + \left( \int v_z(t) dt \right)\hat{k} + \vec{C}$$

Donde $\vec{C}$ es el vector constante de integración, determinado por la posición inicial $\vec{r}(t_0) = \vec{r}_0$.

En Física I, la aplicación más común es el cálculo del desplazamiento $\Delta \vec{r}$ en un intervalo $[t_1, t_2]$:

$$\Delta \vec{r} = \int_{t_1}^{t_2} \vec{v}(t) dt$$

> [!example] foto
> 
> [Gráfica de una curva paramétrica en el espacio 3D que ilustra el vector posición r(t) y el vector tangente que representa la velocidad instantánea v(t) en un punto específico].
