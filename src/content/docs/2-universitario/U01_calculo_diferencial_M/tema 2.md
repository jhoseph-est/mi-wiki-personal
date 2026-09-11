---
title: tema 2
---

# 2. Límites y continuidad de funciones

## Aplicaciones de apoyo a diversas disciplinas de la respectiva especialidad: modelamiento.

El cálculo de límites fundamenta matemáticamente los modelos de estados estacionarios y transitorios en sistemas de ingeniería. Permite la evaluación de tolerancias mecánicas en manufactura y la predicción algorítmica de saturación en modelos dinámicos de fluidos o circuitos de control.

## Topología en R.

La topología estándar en la recta real $\mathbb{R}$ se estructura métricamente a través de la familia de intervalos abiertos. Establece el marco riguroso para definir la proximidad analítica y la vecindad de los números reales sin requerir construcciones geométricas auxiliares.

## Vecindades abiertas y reducidas.

Una vecindad abierta de radio $\delta$ centrada en un punto $x_0$ es el intervalo simétrico que contiene todos los puntos a una distancia estrictamente menor que $\delta$.

$$V_\delta(x_0) = \{x \in \mathbb{R} \mid |x - x_0| < \delta\}$$

Una vecindad reducida perfora el intervalo excluyendo el punto central $x_0$, siendo la base estructural para evaluar límites funcionales.

$$V^*_\delta(x_0) = \{x \in \mathbb{R} \mid 0 < |x - x_0| < \delta\}$$

## Punto de acumulación.

Un punto $x_0$ es de acumulación de un subconjunto $S$ si toda vecindad reducida de $x_0$ interseca a $S$. Garantiza la existencia de secuencias dentro del conjunto que convergen hacia $x_0$, habilitando el cálculo de límites en dicho punto.

$$\forall \delta > 0, V^*_\delta(x_0) \cap S \neq \emptyset$$

## Noción de límite de una función.

Describe el valor escalar hacia el cual converge la variable dependiente $f(x)$ conforme la variable independiente $x$ se aproxima infinitesimalmente a un punto de acumulación $x_0$. Evalúa exclusivamente la tendencia de la función en la vecindad reducida, operando de forma independiente a la existencia de $f(x_0)$.

## Definición formal.

El límite de $f(x)$ en $x_0$ es $L$, si para toda tolerancia estricta $\epsilon > 0$ en el rango, existe un radio $\delta > 0$ en el dominio que acota la dispersión de las imágenes.

$$\lim_{x \to x_0} f(x) = L \iff \forall \epsilon > 0, \exists \delta > 0 \mid 0 < |x - x_0| < \delta \implies |f(x) - L| < \epsilon$$

## Teoremas fundamentales.

- **Unicidad y Operaciones:** Si el límite existe, es único. Los límites son operadores lineales que distribuyen sobre sumas, productos y cocientes (si el límite del denominador es no nulo).
    
- **Teorema del emparedado (Squeeze):** Si una función está acotada entre otras dos de convergencia idéntica en $x_0$, esta hereda obligatoriamente el mismo límite.
    
    $$g(x) \le f(x) \le h(x) \land \lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = L \implies \lim_{x \to x_0} f(x) = L$$
    

## Indeterminación de tipo 0/0.

Singularidad algebraica que ocurre cuando numerador y denominador tienden simultáneamente a cero. Su resolución exige manipulación simbólica mediante factorización, conjugación polinómica, identidades trascendentes o el uso de series de Taylor equivalentes para aislar y cancelar el factor crítico de anulación.

## Límites laterales.

Restringen la evaluación topológica aproximándose al punto de acumulación exclusivamente por valores estrictamente menores (izquierda) o mayores (derecha). La convergencia global exige que ambos límites laterales existan y posean magnitudes escalares idénticas.

$$\lim_{x \to x_0^-} f(x) = L_1, \quad \lim_{x \to x_0^+} f(x) = L_2$$

## Límites trigonométricos.

Patrones de convergencia fundamentados en acotaciones geométricas sobre el sector circular unitario. Resuelven indeterminaciones periódicas mediante reducciones angulares al primer cuadrante.

$$\lim_{x \to 0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0} \frac{1 - \cos x}{x} = 0$$

## Límites de funciones compuestas, límites de funciones inversas, límites de funciones exponencial.

- **Compuestas:** Si $\lim_{x \to x_0} g(x) = L$ y $f$ es continua en $L$, el operador límite permuta con la función exterior: $\lim_{x \to x_0} f(g(x)) = f(L)$.
    
- **Inversas:** Las funciones monótonas continuas transfieren sus propiedades de convergencia a sus inversas reflexivas sobre el eje de simetría $y=x$.
    
- **Exponencial:** Definen la base natural del cálculo diferencial mediante sucesiones de crecimiento continuo.
    
    $$\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$$
    

## Extensión de la definición: límites infinitos y en infinito. Formas indeterminadas e infinitas.

- **Límites Infinitos:** Divergencia asintótica donde $|f(x)|$ supera cualquier cota $M > 0$ al contraer la vecindad de $x_0$.
    
- **Límites en Infinito:** Convergencia o divergencia evaluada mientras la variable independiente crece o decrece sin cota superior e inferior ($x \to \pm\infty$).
    
- **Indeterminaciones:** Además de $0/0$, abarcan $\infty/\infty$, $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, $0^0$ y $\infty^0$, resolubles mediante la regla de L'Hôpital o transformaciones logarítmicas.
    

## Problemas de aplicación de límites.

Proporcionan la justificación para el cálculo de tasas de variación instantánea en cinemática de partículas. Modelan decaimientos radiactivos en isótopos e identifican los factores de atenuación críticos en líneas de transmisión eléctrica largas.

## Comportamiento asintótico.

Tendencia estructural de una curva a aproximarse infinitesimalmente a un lugar geométrico patrón (recta o polinomio) en los extremos de su dominio. Caracteriza las condiciones de frontera estables y los límites de capacidad en sistemas dinámicos.

## Asíntotas: vertical, horizontal, oblicua.

- **Vertical:** Recta $x = a$ inducida por una divergencia infinita en el punto de acumulación. ($\lim_{x \to a} f(x) = \pm\infty$).
    
- **Horizontal:** Recta $y = L$ definida por la estabilización de la función ante dominios no acotados. ($\lim_{x \to \pm\infty} f(x) = L$).
    
- **Oblicua:** Recta $y = mx + b$ ($m \neq 0$) cuando el residuo entre la función y la recta se anula en el infinito.
    
    $$m = \lim_{x \to \pm\infty} \frac{f(x)}{x}, \quad b = \lim_{x \to \pm\infty} (f(x) - mx)$$
    

## Curva asíntota.

Comportamiento no lineal donde la función base $f(x)$ converge hacia una función de orden superior $g(x)$ (ej. parabólica o cúbica) en el infinito. Se verifica al anularse la diferencia funcional evaluada asintóticamente.

$$\lim_{x \to \pm\infty} [f(x) - g(x)] = 0$$

## Continuidad de una función en un punto, sobre un conjunto acotado.

Una función es continua en $x_0$ si su límite existe, está definida en el punto, y ambas cantidades coinciden escalarmente ($\lim_{x \to x_0} f(x) = f(x_0)$). Es continua sobre un intervalo cerrado $[a,b]$ si cumple esta condición en el interior y posee continuidad lateral en las fronteras de acotación.

## Teoremas de continuidad.

La topología algebraica determina que las combinaciones lineales, productos y composiciones de funciones continuas preservan la continuidad absoluta. Los cocientes mantienen la continuidad estrictamente en el subdominio donde la función divisora es no nula.

## Continuidad lateral.

Exige la coincidencia entre el límite unilateral direccional y la evaluación estática del punto. Resulta indispensable para garantizar cierres topológicos precisos en modelamientos definidos por partes o por tramos.

$$\lim_{x \to x_0^-} f(x) = f(x_0) \quad \lor \quad \lim_{x \to x_0^+} f(x) = f(x_0)$$

## Funciones discontinuas.

Relaciones matemáticas que fracturan la condición de igualdad tripartita en $x_0$. Representan singularidades físicas como impactos mecánicos instantáneos, transiciones de fase termodinámica o conmutaciones electrónicas lógicas abruptas.

## Tipos de discontinuidad.

- **Evitable:** Existe el límite ordinario, pero diverge del valor asignado $f(x_0)$ o este último no existe. Se repara redefiniendo la imagen en el punto.
    
- **De Salto (Esencial de primera especie):** Los límites laterales convergen a valores finitos, pero de magnitudes discordantes.
    
- **Infinita (Esencial de segunda especie):** Al menos un límite lateral diverge hacia $\pm\infty$ o presenta un estado oscilatorio irresoluble.
    

## Aplicaciones: ínfimo y supremo de una función.

Proporcionan cotas de estabilidad absolutas para algoritmos de optimización de procesos. Aseguran márgenes de seguridad en resistencia de materiales acotando las tensiones límite teóricas antes del punto de fluencia.

## Definición.

- **Supremo ($M$):** La mínima cota superior del rango del conjunto imagen; el menor valor que supera o iguala a todos los $f(x)$.
    
- **Ínfimo ($m$):** La máxima cota inferior del rango del conjunto imagen; el mayor valor que es menor o igual a todos los $f(x)$.
    

## Teoremas del valor intermedio de Bolzano y de Weierstrass. Consecuencias.

- **Weierstrass:** Toda función continua sobre un dominio compacto $[a,b]$ mapea invariablemente hacia un rango acotado, garantizando la existencia de máximos y mínimos absolutos.
    
- **Bolzano:** Si $f$ es continua en $[a,b]$ y presenta alternancia de signo en las fronteras ($f(a) \cdot f(b) < 0$), existe al menos un cruce por cero $c \in (a,b)$ tal que $f(c) = 0$.
    
- **Consecuencias:** Soporte axiomático para el método de bisección espectral y garantía de equilibrio térmico en transferencia de calor continua.
    

> [!example] Esquema Técnico
> 
> ![intermediate value theorem, generada por IA](https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQQCbQ49H-fhyug7ukepkLF4LRW42vMtw-y7NPwb0y0RFYteZFmkyoqs7IQIp4Oe77ons3py7-eNOCs6agBXk5J-78COOCR1IkdIY08ColezJT4JQE)
> 
> Shutterstock
> 
> Explorar

Gráfico ilustrando una curva continua en el plano cartesiano intersectando el eje de abscisas, evidenciando un cero funcional en el intervalo delimitado por $f(a) < 0$ y $f(b) > 0$.

## Aplicaciones de apoyo a diversas disciplinas de la respectiva especialidad: continuidad.

La continuidad garantiza que los campos vectoriales de esfuerzos en elementos finitos no presenten fracturas teóricas bajo carga. En dinámica de fluidos, es el prerrequisito matemático para validar las ecuaciones de conservación de masa de Navier-Stokes.

---

**Lista de Variables:**

- $\mathbb{R}$: Conjunto de los números reales.
    
- $V_\delta$: Vecindad abierta.
    
- $V^*_\delta$: Vecindad reducida perforada.
    
- $\delta$: Tolerancia o radio de la vecindad en el dominio ($>0$).
    
- $x$: Variable independiente del dominio.
    
- $x_0$: Punto central u origen de acumulación.
    
- $S$: Subconjunto topológico arbitrario de prueba.
    
- $f, g, h$: Funciones o reglas de correspondencia.
    
- $L, L_1, L_2$: Magnitudes escalares de límites convergentes.
    
- $\epsilon$: Tolerancia o acotación de error en el rango ($>0$).
    
- $e$: Base del logaritmo natural, límite exponencial constante ($\approx 2.718$).
    
- $M$: Cota superior arbitraria o supremo del conjunto imagen.
    
- $a, b$: Fronteras inferior y superior de un intervalo topológico.
    
- $m$: Pendiente asíntota oblicua o ínfimo del conjunto imagen.
    
- $c$: Valor intermedio de cruce o raíz funcional.