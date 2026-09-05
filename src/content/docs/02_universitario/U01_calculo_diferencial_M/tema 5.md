---
title: tema 5
---

# 5. Parametrización de curvas y coordenadas polares

## Parametrización de curvas: las ecuaciones paramétricas y la derivada.

Una curva plana se define analíticamente mediante un par de funciones continuas $x = f(t)$ e $y = g(t)$, donde $t$ es el parámetro escalar independiente sobre un intervalo $I$. La primera derivada $\frac{dy}{dx}$, que define la pendiente de la recta tangente, se obtiene mediante el cociente de las derivadas paramétricas individuales respecto a $t$, asumiendo que $\frac{dx}{dt} \neq 0$.

$$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$$

La segunda derivada requiere aplicar la regla de la cadena sobre el operador diferencial de primer orden, dividiendo nuevamente por la derivada de la componente horizontal.

$$\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}$$

## Gráficas de representaciones definidas paramétricamente.

El trazado geométrico constituye un lugar de puntos $(f(t), g(t))$ en el plano cartesiano generado conforme $t$ barre su dominio. Esta representación dota a la curva de una orientación vectorial estricta o sentido de recorrido cinemático, indispensable para evaluar integrales de línea en campos vectoriales.

## El sistema de coordenadas polares.

Sistema de referencia bidimensional topológico donde cada punto se localiza mediante un radio vector dirigido $r$ y un ángulo direccional $\theta$ medido en radianes. El origen coordenado se denomina polo, y el semieje positivo de las abscisas constituye el eje polar referencial de fase nula.

## Transformación de sistemas: de polares a cartesianas y viceversa.

La equivalencia analítica se fundamenta en las proyecciones ortogonales de un triángulo rectángulo hipotenusal sobre el plano afín.

- **Polares a Cartesianas:** Las componentes rectangulares se extraen mediante modulaciones trigonométricas directas del radio polar.
    
    $$x = r \cos \theta, \quad y = r \sin \theta$$
    
- **Cartesianas a Polares:** El radio vector es la norma euclidiana euclídea, y el ángulo polar es el arco tangente del cociente de coordenadas, sujeto a correcciones de cuadrante.
    
    $$r^2 = x^2 + y^2, \quad \tan \theta = \frac{y}{x}$$
    

## Gráfica de ecuaciones polares: interceptos, simetría, extensión, periodicidad y recta tangente en el polo.

- **Interceptos:** Se evalúa $r(\theta)$ en ángulos notables (e.g., $0, \pi/2, \pi$) para cruces axiales, y se imponen ceros funcionales ($r = 0$) para intersecciones con el polo.
    
- **Simetría:** Invarianzas topológicas verificadas si la ecuación no se altera al sustituir $\theta \to -\theta$ (eje polar), $\theta \to \pi - \theta$ (eje $\pi/2$), o $r \to -r$ (polo).
    
- **Extensión y periodicidad:** Determinación de cotas máximas $|r_{max}|$ derivadas de las amplitudes trigonométricas y del periodo fundamental de las funciones base (típicamente $2\pi$).
    
- **Recta tangente en el polo:** Si $r(\alpha) = 0$ y $r'(\alpha) \neq 0$, la recta directriz $\theta = \alpha$ constituye la tangente geométrica exacta en la singularidad del origen.
    

> [!example] Esquema Técnico
> 
> Gráfica polar de una cardioide $r = a(1 - \cos \theta)$ exhibiendo sus simetrías axiales sobre el eje polar, interceptos máximos y la tangente analítica asintótica en el polo coordenado.

## Intersecciones de gráficas en coordenadas polares.

La resolución algebraica simultánea del sistema $r_1(\theta) = r_2(\theta)$ identifica los puntos de colisión paramétrica compartidos. Exige un análisis suplementario iterativo debido a la multiplicidad de coordenadas polares equivalentes $(r, \theta) \equiv (-r, \theta + (2k+1)\pi)$, donde curvas distintas pueden cruzar el mismo punto espacial en fases desfasadas.

## Ángulos entre dos curvas.

El ángulo interno $\psi$ entre el radio vector y la recta tangente a una curva polar en un punto específico se define rigurosamente mediante el diferencial trigonométrico.

$$\tan \psi = \frac{r}{\frac{dr}{d\theta}}$$

El ángulo geométrico absoluto de intersección $\beta$ entre dos curvas polares concurrentes se calcula mediante la diferencia analítica de sus respectivos ángulos internos $\psi_1$ y $\psi_2$.

$$\beta = |\psi_2 - \psi_1|$$

## Aplicaciones de apoyo a diversas disciplinas de la respectiva especialidad.

La parametrización modela estrictamente la cinemática balística independiente del tiempo en trayectorias de proyectiles sometidos a campos gravitatorios escalares constantes. Las coordenadas polares simplifican algorítmicamente la simulación de diagramas de radiación en antenas isotrópicas y el análisis de singularidades de esfuerzos en la punta de grietas en mecánica de fracturas.

---

**Lista de Variables:**

- $x, y$: Componentes rectangulares o coordenadas cartesianas espaciales.
    
- $t$: Parámetro escalar independiente (típicamente representa el tiempo, s).
    
- $I$: Intervalo numérico base del dominio paramétrico.
    
- $f, g$: Funciones continuas o reglas de correspondencia paramétrica.
    
- $r, r_1, r_2$: Radio vector absoluto o magnitud direccional polar.
    
- $\theta$: Ángulo polar o argumento trigonométrico direccional (rad).
    
- $\alpha$: Ángulo escalar constante donde la curva interseca el polo nulo.
    
- $\psi, \psi_1, \psi_2$: Ángulo agudo entre el radio vector y la recta tangente métrica (rad).
    
- $\beta$: Ángulo geométrico escalar de intersección entre curvas cruzadas (rad).
    
- $k$: Índice de número entero para multiplicidad periódica ($k \in \mathbb{Z}$).
    

Dime si el formato es correcto y solicítame el siguiente bloque del temario si corresponde.