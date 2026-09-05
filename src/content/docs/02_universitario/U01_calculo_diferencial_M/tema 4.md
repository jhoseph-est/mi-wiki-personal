---
title: tema 4
---

# 4. Aplicaciones de la derivada. Polinomio de Taylor

## La derivada como razón de cambio instantánea. Aplicaciones.

La derivada modela la variación instantánea de una magnitud física respecto a una variable independiente. En cinemática, la velocidad instantánea $v$ y la aceleración $a$ de una partícula en el tiempo $t$ se definen rigurosamente como las derivadas temporales del vector posición $s$, expresadas en el Sistema Internacional como m/s y m/s$^2$.

$$v = \frac{ds}{dt}, \quad a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$$

## Teorema de Rolle.

Si una función $f$ es topológicamente continua en un intervalo cerrado $[a, b]$, diferenciable en el abierto $(a, b)$ y sus fronteras evaluadas son idénticas ($f(a) = f(b)$), existe al menos un punto interior $c \in (a, b)$ con tangente geométrica horizontal.

$$f'(c) = 0$$

## Teorema del valor medio (Lagrange).

Si $f$ es continua en $[a, b]$ y diferenciable en $(a, b)$, existe un punto $c \in (a, b)$ donde la tasa de cambio instantánea iguala exactamente a la tasa de cambio promedio global de la secante que une los extremos.

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

## Teorema generalizado del valor medio (Cauchy).

Extensión analítica para dos funciones $f$ y $g$ continuas en $[a, b]$ y diferenciables en $(a, b)$, exigiendo que $g'(x) \neq 0$. Establece la proporcionalidad estricta de sus incrementos relativos evaluados en un punto interior común $c$.

$$\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}$$

## Monotonía de funciones.

Propiedad estructural que define la tendencia de crecimiento o decrecimiento direccional de una curva. Se cuantifica evaluando el signo algebraico del operador diferencial de primer orden sobre un subconjunto conexo del dominio.

## Criterio de la primera derivada.

Si $f'(x) > 0$ para todo $x \in I$, la función es estrictamente creciente en dicho intervalo, indicando acumulación positiva. Si $f'(x) < 0$, la función es estrictamente decreciente, modelando disipación o decaimiento.

## Teoremas.

El Teorema de Fermat establece que si $f$ posee un extremo local en un punto interior $c$ y es diferenciable en dicho punto, necesariamente su derivada se anula. Constituye una condición analítica necesaria, mas no suficiente, para localizar extremos geométricos.

## Valores extremos. 

Imágenes funcionales que representan cotas absolutas o relativas en procesos de optimización. Identifican estados de energía mínima en física de partículas o maximización de eficiencia en diseño de máquinas térmicas.

## Valores extremos relativos y absolutos.

Los extremos relativos (locales) dominan exclusivamente sobre una vecindad topológica abierta $V(c)$. Los extremos absolutos (globales) representan el supremo o ínfimo inobjetable del conjunto imagen sobre la totalidad del dominio $D_f$.

## Puntos críticos.

Elementos del dominio $x = c$ donde la recta tangente es perfectamente horizontal o resulta analíticamente inexistente. Son los candidatos algebraicos exclusivos para albergar variaciones extremas en la topología de la curva.

$$f'(c) = 0 \quad \lor \quad \nexists f'(c)$$

## Máximos y mínimos relativos y absolutos.

Un máximo relativo exige la inecuación $f(c) \ge f(x)$ en $V(c)$, y un máximo absoluto requiere $f(c) \ge f(x)$ ∀ $x \in D_f$. Inecuaciones estrictamente invertidas ($f(c) \le f(x)$) definen la tipología de mínimos relativos y absolutos respectivamente.

## Criterio del cambio de signo de la derivada.

Al transitar la variable independiente $x$ por un punto crítico $c$: si $f'(x)$ muta de positivo a negativo, $f(c)$ es un máximo local. Si $f'(x)$ transiciona de negativo a positivo, $f(c)$ es un mínimo local.

## Concavidades.

Métrica de curvatura que indica si la gráfica funcional se proyecta por encima (cóncava hacia arriba) o por debajo (cóncava hacia abajo) de sus rectas tangentes locales. Su naturaleza depende exclusivamente del signo del operador diferencial de segundo orden $f''(x)$.

## Punto de inflexión.

Coordenada cartesiana $(c, f(c))$ donde la curva experimenta una transición geométrica estricta y verificable de concavidad. Exige como prerrequisito la anulación analítica o indefinición puntual de la segunda derivada.

$$f''(c) = 0 \quad \lor \quad \nexists f''(c)$$

> [!example] Esquema Técnico

Gráfico de una función cúbica detallando el punto central exacto donde la curvatura muta de cóncava hacia abajo a cóncava hacia arriba, cruzando la recta tangente.

## Límites trigonométricos.

En el entorno de las derivadas, su cálculo complejo se simplifica mediante el Teorema de L'Hôpital o aproximaciones por series de potencias. Permiten resolver indeterminaciones originadas por las propiedades oscilatorias de las funciones seno y coseno.

## Límites de funciones compuestas, límites de funciones inversas, límites de funciones exponencial.

La derivabilidad asegura la continuidad, autorizando la permutación del operador límite en composiciones topológicas $f(g(x))$. Las indeterminaciones exponenciales se linealizan aplicando previamente transformaciones logarítmicas naturales para extraer el exponente diferencial.

## Extensión de la definición: límites infinitos y en infinito.

Las asíntotas y divergencias se cuantifican mediante tasas de crecimiento comparativas. Permiten evaluar qué función domina asintóticamente (ej. exponencial sobre polinómica) mediante derivaciones sucesivas en el infinito.

## Formas indeterminadas e infinitas.

Singularidades analíticas como $0/0$, $\infty/\infty$, $0 \cdot \infty$, $1^\infty$ y $\infty-\infty$ que carecen de interpretación topológica directa. Requieren factorización, conjugación o uso del Teorema de L'Hôpital para extraer el valor convergente real.

## Problemas de aplicación de límites.

Evaluación asintótica de estados estacionarios en redes eléctricas RC/RL donde las variables transitorias decaen teóricamente a cero. Cálculo diferencial de velocidades terminales en fluidos viscosos donde la aceleración se anula ($a \to 0$).

## Teoremas.

La regla de L'Hôpital constituye el teorema angular para el análisis asintótico acoplado. Fundamenta el análisis de sensibilidad en modelos de ingeniería que operan en los márgenes de singularidades algebraicas.

## Gráficas de funciones directas e inversas: interceptos con los ejes coordenados.

Puntos de anulación ortogonal que establecen las raíces estructurales del sistema coordenado.

- Interceptos en $x$: Raíces analíticas resultantes de la ecuación $f(x) = 0$.
    
- Intercepto en $y$: Evaluación estática y única en el origen $y = f(0)$.
    

## Simetría.

Propiedad de invarianza reflexiva que reduce la carga computacional en dominios simétricos $[-L, L]$. Funciones pares reflejan idénticamente sobre el eje de ordenadas ($f(-x)=f(x)$); funciones impares presentan simetría rotacional de 180° respecto al origen ($f(-x)=-f(x)$).

## Asíntotas.

Fronteras lineales de contención que guían la trayectoria infinita de la función. El estudio diferencial asegura que la distancia ortogonal entre la curva y la recta asíntota converja estrictamente a cero al expandir el dominio.

## Monotonía y puntos de inflexión: convexidad y concavidad.

Síntesis del modelado analítico mediante segmentación del dominio. El escrutinio concurrente de $f'(x)$ y $f''(x)$ define subintervalos de comportamiento paramétrico predecible, permitiendo esbozar trayectorias complejas sin tabulación discreta de puntos.

## Estudio de la aproximación: polinomios de Taylor, teoremas y deducciones.

Un polinomio $P_n(x)$ aproxima localmente una función trascendente o compleja en la vecindad de un centro de expansión $x = a$. Se construye forzando la estricta equivalencia de sus derivadas sucesivas desde el orden $0$ hasta el orden $n$ en dicho punto.

$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!} (x - a)^k$$

## Importancia del residuo.

Herramienta de control analítico que acota el error de truncamiento inherente a la sustitución de la función real por su equivalente polinómico de grado finito. Dimensiona empíricamente las tolerancias métricas permitidas en el diseño de algoritmos numéricos iterativos.

## Aproximación de una función mediante un polinomio de Taylor.

El Teorema de Taylor establece la igualdad estricta $f(x) = P_n(x) + R_n(x)$. El residuo $R_n(x)$, expresado en la forma de Lagrange, cuantifica el error mediante la evaluación de la derivada subsecuente en un punto intermedio arbitrario $\xi \in (a, x)$.

$$R_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} (x - a)^{n+1}$$

## Aplicaciones del polinomio de Taylor. 

Facilita el cálculo embebido de funciones seno o logaritmos en arquitecturas de hardware (ALUs) mediante sumas y multiplicaciones polinomiales elementales. Linealiza ecuaciones diferenciales de fluidos no newtonianos en la estricta vecindad de los puntos de operación de equilibrio.

## Aplicaciones al cálculo de límites.

Proporciona resolución analítica jerárquica para indeterminaciones intratables por la regla de L'Hôpital de orden superior. Sustituye términos conflictivos por sus expansiones equivalentes truncadas, cancelando algebraicamente el factor de singularidad nula.

## Aplicaciones de apoyo a diversas disciplinas de la respectiva especialidad.

En resistencia de materiales, la linealización de Taylor fundamenta la teoría de pequeñas deflexiones de Euler-Bernoulli ($\sin \theta \approx \theta$). En teoría de control, permite el diseño de controladores PID lineales para plantas físicas inherentemente no lineales mediante aproximaciones jacobianas.

---

**Lista de Variables:**

- $v$: Velocidad instantánea en cinemática (m/s).
    
- $a$: Aceleración instantánea referida al tiempo (m/s$^2$) o centro de expansión del polinomio de Taylor.
    
- $s$: Vector de posición o desplazamiento.
    
- $t$: Variable independiente de tiempo.
    
- $b$: Frontera superior del intervalo de análisis.
    
- $c$: Punto interior, punto crítico o valor intermedio topológico.
    
- $f, g$: Reglas de correspondencia de funciones reales.
    
- $f', f'', f^{(k)}$: Derivadas de orden primero, segundo y k-ésimo respectivamente.
    
- $I$: Intervalo general de monotonía.
    
- $V(c)$: Vecindad abierta centrada en el punto $c$.
    
- $D_f$: Dominio absoluto de la función $f$.
    
- $P_n(x)$: Polinomio de Taylor de grado enésimo.
    
- $R_n(x)$: Término de residuo o error de truncamiento de grado enésimo.
    
- $n$: Orden máximo de expansión polinómica o derivación (entero positivo).
    
- $k$: Índice discreto del operador sumatoria.
    
- $\xi$: Punto intermedio evaluativo en la forma del residuo de Lagrange.
    
- $\theta$: Desplazamiento angular (rad).