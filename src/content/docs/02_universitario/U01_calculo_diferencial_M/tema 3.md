---
title: tema 3
---

# 3. Derivada de una función

## Definición de la derivada de una función en un punto. Interpretación geométrica.

La derivada $f'(x_0)$ es el límite del cociente incremental evaluado cuando la perturbación de la variable independiente tiende asintóticamente a cero. Geométricamente, cuantifica la pendiente exacta de la recta tangente a la gráfica funcional en el punto de tangencia coordenado $(x_0, f(x_0))$.

$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

> [!example] Esquema Técnico
> 
> Gráfico de una curva $y=f(x)$ mostrando una recta secante que converge topológicamente a la recta tangente en el punto $(x_0, f(x_0))$ al anularse el incremento $h$.

## Consecuencias.

Habilita el cálculo preciso de tasas de variación instantánea en fenómenos dinámicos transitorios. Constituye el operador matemático primario para optimización de funciones, determinación de concavidades y modelado de cinemática de partículas (velocidad escalar y aceleración).

## Recta tangente y normal a la gráfica de una función.

La recta tangente es la aproximación lineal de primer orden de la curva en el entorno de $x_0$. La recta normal es la trayectoria ortogonal a la curva en dicho punto, cuya pendiente es el recíproco negativo de la derivada.

- **Ecuación tangente:** $y - y_0 = f'(x_0)(x - x_0)$
    
- **Ecuación normal:** $y - y_0 = -\frac{1}{f'(x_0)}(x - x_0)$
    

## Derivadas laterales.

Límites unilaterales del cociente de diferencias evaluados por aproximación estricta desde la izquierda o la derecha del punto de estudio. Caracterizan la suavidad direccional en puntos de transición o fronteras de dominios definidos por tramos.

$$f'_-(x_0) = \lim_{h \to 0^-} \frac{f(x_0 + h) - f(x_0)}{h}, \quad f'_+(x_0) = \lim_{h \to 0^+} \frac{f(x_0 + h) - f(x_0)}{h}$$

## Existencia de la derivada.

Condición analítica que exige la convergencia finita y la estricta igualdad escalar de ambas derivadas laterales en $x_0$. La ausencia de igualdad evidencia puntos angulosos (cúspides) o tangentes verticales donde la función es topológicamente no diferenciable.

## Diferenciabilidad y continuidad.

Todo operador diferenciable en un punto $x_0$ garantiza absolutamente la continuidad funcional topológica en dicho punto. La proposición recíproca es falsa: existen curvas continuas (como la función valor absoluto) que carecen de diferenciabilidad en singularidades angulares.

## Teoremas.

- **Teorema de Rolle:** Si $f(x)$ es continua en $[a, b]$, derivable en $(a, b)$ y $f(a) = f(b)$, existe al menos un punto crítico $c \in (a, b)$ donde $f'(c) = 0$.
    
- **Teorema del Valor Medio (Lagrange):** Bajo las mismas condiciones de continuidad y derivabilidad, existe un $c$ donde la recta tangente es paralela a la secante global.
    
    $$f'(c) = \frac{f(b) - f(a)}{b - a}$$
    

## Derivadas de funciones elementales.

Reglas axiomáticas directas derivadas de la expansión binomial del límite del cociente incremental. Incluyen operadores de anulación para constantes y reducción de grado para monomios algebraicos.

## Tablas de derivadas.

Repositorio estructurado de transformaciones diferenciales estándar, optimizadas para elusión del cálculo de límites por primeros principios.

- $\frac{d}{dx}(c) = 0$
    
- $\frac{d}{dx}(x^n) = nx^{n-1}$
    

## Propiedades de las derivadas.

El operador derivada $D_x$ es una transformación lineal que distribuye sobre la adición y respeta la extracción de factores escalares. Su aplicación sobre productos y cocientes exige el uso de reglas distributivas ponderadas cruzadas.

## Derivada de la composición de funciones diferenciales.

Estructura analítica para derivar sistemas acoplados donde la salida de una función actúa como argumento de excitación de otra. Requiere la propagación secuencial de las tasas de cambio de las variables internas hacia las externas.

## Regla de la cadena.

Teorema fundamental para la derivación de funciones compuestas, multiplicando las derivadas de los eslabones funcionales evaluados en sus respectivos argumentos intermedios.

$$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

## Reglas de derivación.

Algoritmos operativos algebraicos para descomponer expresiones complejas en derivadas elementales tabuladas.

- **Producto:** $(u \cdot v)' = u'v + uv'$
    
- **Cociente:** $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$
    

## Derivadas de funciones trascendentes (trigonométricas, trigonométricas inversas, logarítmica, exponencial, hiperbólicas, hiperbólicas inversas).

- **Trigonométricas:** $(\sin x)' = \cos x$, $(\cos x)' = -\sin x$, $(\tan x)' = \sec^2 x$
    
- **Trigonométricas inversas:** $(\arcsin x)' = \frac{1}{\sqrt{1 - x^2}}$, $(\arctan x)' = \frac{1}{1 + x^2}$
    
- **Logarítmica y exponencial:** $(\ln x)' = \frac{1}{x}$, $(e^x)' = e^x$, $(a^x)' = a^x \ln a$
    
- **Hiperbólicas:** $(\sinh x)' = \cosh x$, $(\cosh x)' = \sinh x$
    
- **Hiperbólicas inversas:** $(\text{arsinh } x)' = \frac{1}{\sqrt{x^2 + 1}}$, $(\text{artanh } x)' = \frac{1}{1 - x^2}$
    

## Derivadas de orden superior.

Aplicación recursiva y sucesiva del operador diferencial sobre la función resultante de una derivación previa. Describen métricas geométricas avanzadas como la concavidad (segunda derivada) o parámetros dinámicos como el "jerk" físico (tercera derivada).

$$y'' = \frac{d}{dx}\left(\frac{dy}{dx}\right) = \frac{d^2y}{dx^2}$$

## Derivación implícita.

Técnica para obtener $\frac{dy}{dx}$ en ecuaciones de variables acopladas $F(x, y) = 0$ sin despejar algebraicamente $y$. Se aplica el operador de derivación lineal a toda la ecuación, tratando a $y$ como una función anidada de $x$ mediante la regla de la cadena.

## Propiedades.

La derivación implícita preserva la linealidad topológica sobre variedades geométricas descritas algebraicamente. Su efectividad depende del Teorema de la Función Implícita, requiriendo que la derivada parcial respecto a la variable dependiente sea no nula.

## Problemas de aplicación.

Resolución de configuraciones geométricas de tasas relacionadas donde múltiples variables dependen temporalmente de un parámetro común $t$. Optimización de diseño estructural minimizando el uso de material mediante la anulación de la primera derivada para localizar extremos relativos.

## Teorema de Leibnitz.

Fórmula combinatoria estandarizada para evaluar directamente la derivada de orden $n$ del producto de dos funciones diferenciables.

$$(uv)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} u^{(n-k)}v^{(k)}$$

## Diferencial de una función.

Operador de aproximación local lineal que cuantifica la variación infinitesimal estimada en la variable dependiente $dy$, inducida por un incremento infinitesimal arbitrario en la independiente $dx$.

$$dy = f'(x) dx$$

## Aproximación lineal de una función usando diferenciales.

Método analítico numérico que proyecta el valor funcional en un entorno cercano utilizando la recta tangente evaluada en un punto base conocido.

$$f(x + \Delta x) \approx f(x) + f'(x)\Delta x$$

## Teorema de aproximación.

Establece que el incremento real total de una función continua es igual a su diferencial de primer orden más un residuo de error $\epsilon$ que converge a cero más rápido que el incremento independiente.

$$\Delta y = dy + \epsilon \Delta x \quad \text{donde} \quad \lim_{\Delta x \to 0} \epsilon = 0$$

## Diferenciales de orden superior.

Iteraciones del operador diferencial escalar que asumen un diferencial de la variable independiente $dx$ geométricamente constante.

$$d^2y = f''(x) dx^2, \quad d^ny = f^{(n)}(x) dx^n$$

## Regla de L’Hospital para el cálculo de límites.

Algoritmo de resolución para indeterminaciones algebraicas $0/0$ o $\infty/\infty$ en cocientes funcionales. Sustituye la evaluación del límite original por el límite del cociente de sus respectivas derivadas de primer orden.

$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$

## Aplicaciones de apoyo a diversas disciplinas de la respectiva especialidad.

En termodinámica, definen el calor específico como la derivada de la entalpía respecto a la temperatura en procesos isobáricos. En mecánica de fluidos, el gradiente de velocidad diferencial es fundamental para calcular el esfuerzo cortante de viscosidad mediante la ley de Newton, expresado estrictamente en unidades SI (m/s por m, resultando en s$^{-1}$).

---

**Lista de Variables:**

- $f$: Función o regla de correspondencia principal.
    
- $f'$: Primera derivada de la función $f$.
    
- $x$: Variable independiente del dominio base.
    
- $x_0$: Punto de tangencia o evaluación fija.
    
- $h$: Incremento infinitesimal de la variable independiente ($\Delta x$).
    
- $y$: Variable dependiente o imagen de $f(x)$.
    
- $y_0$: Imagen funcional evaluada en $x_0$ ($f(x_0)$).
    
- $a, b$: Fronteras inferior y superior de un intervalo cerrado.
    
- $c$: Constante escalar arbitraria o punto crítico del dominio.
    
- $n$: Orden de derivación o exponente constante.
    
- $u, v$: Funciones base dependientes de la variable $x$.
    
- $k$: Índice de sumatoria o combinación.
    
- $dx$: Diferencial infinitesimal de la variable independiente.
    
- $dy$: Diferencial de primer orden de la variable dependiente.
    
- $\Delta x$: Incremento finito real en la variable $x$.
    
- $\Delta y$: Variación finita exacta de la función.
    
- $\epsilon$: Residuo asintótico de error de aproximación.