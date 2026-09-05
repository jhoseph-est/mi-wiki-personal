---
title: El átomo mecano-cuántico y el sistema periódico
ciclo: 1
curso: quimica-1
---
## Introducción

La transición de la física clásica a la mecánica cuántica a principios del siglo XX representó uno de los cambios de paradigma más profundos en la historia de la ciencia. Mientras que la mecánica newtoniana describía con precisión el movimiento de cuerpos macroscópicos, resultaba insuficiente para explicar fenómenos a escala atómica y subatómica. El modelo mecano-cuántico del átomo surge de la necesidad de integrar la naturaleza dual de la materia y la cuantización de la energía. Este modelo no solo define la estructura interna del átomo mediante funciones de probabilidad, sino que constituye la base teórica fundamental para comprender la periodicidad de los elementos químicos. La organización de la tabla periódica y las propiedades físico-químicas de la materia no son arbitrarias, sino que son una consecuencia directa de la configuración electrónica y de las soluciones de las ecuaciones fundamentales que gobiernan el comportamiento de los electrones en el campo potencial del núcleo.

---

## Efecto fotoeléctrico con aplicaciones.

El efecto fotoeléctrico consiste en la emisión de electrones (fotoelectrones) desde la superficie de un material, generalmente un metal, cuando sobre él incide radiación electromagnética de una frecuencia determinada. Este fenómeno, explicado por Albert Einstein en 1905, fue crucial para demostrar la naturaleza corpuscular de la luz.

De acuerdo con la teoría cuántica, la luz se propaga en paquetes discretos de energía llamados fotones. La energía de un fotón ($E$) es proporcional a su frecuencia ($f$ o $\nu$):

$$E = h \cdot f$$

Donde $h$ es la constante de Planck ($6.626 \times 10^{-34} \ J \cdot s$). Para que un electrón sea expulsado del metal, el fotón incidente debe poseer una energía mínima igual a la función de trabajo ($\Phi$) del material. Si $hf > \Phi$, el exceso de energía se convierte en energía cinética ($K_{max}$) del electrón:

$$hf = \Phi + K_{max}$$

$$hf = hf_0 + \frac{1}{2} m_e v^2$$

Donde $f_0$ es la frecuencia umbral característica de cada metal, $m_e$ es la masa del electrón ($9.11 \times 10^{-31} \ kg$) y $v$ su velocidad.

**Aplicaciones técnicas:**

1. **Celdas Fotovoltaicas:** Conversión directa de energía solar en electricidad mediante la generación de pares electrón-hueco en semiconductores.
    
2. **Fotomultiplicadores:** Dispositivos que detectan niveles extremadamente bajos de luz convirtiendo fotones en una corriente eléctrica amplificada.
    
3. **Espectroscopía Fotoelectrónica (XPS/UPS):** Técnica analítica para determinar la composición química y los estados de unión de la superficie de un material midiendo la energía cinética de los electrones emitidos bajo irradiación de rayos X o UV.
    

## Orígenes de la teoría cuántica: dualidad onda-partícula, relación de De Broglie, principio de incertidumbre de Heisenberg, ecuación de Schrödinger.

La mecánica cuántica se fundamenta en principios que desafían la intuición macroscópica:

- **Dualidad onda-partícula:** Propuesta inicialmente por la luz y extendida a la materia por Louis de Broglie en 1924. Postula que toda partícula en movimiento tiene una onda asociada.
    
- **Relación de De Broglie:** Establece la longitud de onda ($\lambda$) de una partícula de masa ($m$) que viaja a una velocidad ($v$):
    
    $$\lambda = \frac{h}{p} = \frac{h}{m \cdot v}$$
    
    Donde $p$ es el momento lineal. Esto implica que la naturaleza ondulatoria es relevante solo para masas extremadamente pequeñas, como los electrones.
    
- **Principio de incertidumbre de Heisenberg:** Werner Heisenberg postuló que es intrínsecamente imposible conocer simultáneamente y con precisión absoluta ciertos pares de variables conjugadas, como la posición ($x$) y el momento lineal ($p$):
    
    $$\Delta x \cdot \Delta p \geq \frac{h}{4\pi}$$
    
    Esto sustituye el concepto de "órbita" definida por el de "orbital" o región de probabilidad.
    
- **Ecuación de Schrödinger:** Erwin Schrödinger formuló una ecuación de onda diferencial que describe la evolución temporal y espacial de un sistema cuántico. En su forma independiente del tiempo:
    
    $$\hat{H}\psi = E\psi$$
    
    Donde $\hat{H}$ es el operador Hamiltoniano (energía total), $\psi$ es la función de onda y $E$ es la energía del sistema. El cuadrado de la función de onda ($|\psi|^2$) representa la densidad de probabilidad de encontrar al electrón en un punto del espacio.
    

## El átomo de hidrógeno. Números cuánticos. Orbitales atómicos. Átomos polielectrónicos.

La resolución de la ecuación de Schrödinger para el átomo de hidrógeno (un sistema de un solo electrón) da lugar a soluciones permitidas que dependen de tres **números cuánticos** principales, a los que se añade un cuarto por la naturaleza intrínseca del electrón:

1. **Número cuántico principal ($n$):** Define el nivel de energía y el tamaño del orbital. $n = 1, 2, 3, \dots$
    
2. **Número cuántico del momento angular ($l$):** Define la forma del orbital. $l = 0, \dots, n-1$. (0=s, 1=p, 2=d, 3=f).
    
3. **Número cuántico magnético ($m_l$):** Define la orientación espacial del orbital. $m_l = -l, \dots, +l$.
    
4. **Número cuántico de espín ($m_s$):** Describe el giro intrínseco del electrón. $m_s = +1/2$ o $-1/2$.
    

**Orbitales atómicos:** Son las representaciones espaciales de las funciones de onda. Por ejemplo, los orbitales _s_ son esféricos, mientras que los _p_ tienen forma de lóbulos orientados en los ejes $x, y, z$.

> [!example] foto
> 
> [Representación gráfica de las superficies de contorno de los orbitales s (esfera), p (bilobulado en tres orientaciones) y d (formas complejas tetralobuladas). Debe indicarse la disposición espacial en un sistema de coordenadas cartesianas].

**Átomos polielectrónicos:** En átomos con más de un electrón, aparecen fuerzas de repulsión interelectrónica. Esto provoca que los niveles de energía que eran degenerados en el hidrógeno se desdoblen, haciendo que la energía dependa tanto de $n$ como de $l$.

## Estructura electrónica de los átomos. Configuración electrónica. Momento magnético.

La **configuración electrónica** describe la distribución de los electrones en los orbitales de un átomo. Se rige por tres principios:

1. **Principio de Aufbau:** Los electrones ocupan los orbitales en orden creciente de energía.
    
2. **Principio de exclusión de Pauli:** En un átomo, no pueden existir dos electrones con los mismos cuatro números cuánticos. Por tanto, un orbital puede albergar máximo dos electrones con espines opuestos.
    
3. **Regla de Hund:** En orbitales de igual energía (degenerados), los electrones se distribuyen con espines paralelos tanto como sea posible para minimizar la repulsión.
    

**Momento magnético:** El espín del electrón genera un pequeño campo magnético.

- **Diamagnetismo:** Sustancias con todos sus electrones apareados; son débilmente repelidas por campos magnéticos.
    
- **Paramagnetismo:** Sustancias con uno o más electrones desapareados; son atraídas por campos magnéticos. El momento magnético total depende del número de electrones desapareados.
    

## La tabla periódica moderna.

La tabla periódica organiza los elementos en orden creciente de su número atómico ($Z$). La estructura de la tabla refleja la ocupación de los niveles y subniveles de energía:

- **Periodos:** Filas horizontales que corresponden al número cuántico principal $n$.
    
- **Grupos:** Columnas verticales que contienen elementos con configuraciones electrónicas de valencia similares, lo que les confiere propiedades químicas análogas.
    
- **Bloques (s, p, d, f):** Regiones de la tabla según el último orbital que se está llenando.
    

## Propiedades periódicas.

Las propiedades de los elementos varían sistemáticamente debido a la carga nuclear efectiva ($Z_{eff}$), que es la carga neta positiva que experimenta un electrón en un átomo polielectrónico tras el apantallamiento de los electrones internos.

1. **Radio atómico e iónico:** El radio atómico disminuye de izquierda a derecha en un periodo (por aumento de $Z_{eff}$) y aumenta de arriba hacia abajo en un grupo (por aumento de $n$). El radio iónico sigue tendencias similares, pero los cationes son menores que sus átomos neutros y los aniones mayores.
    
2. **Energía de ionización ($EI$):** Energía necesaria para remover un electrón de un átomo gaseoso en su estado fundamental. Aumenta hacia la derecha y hacia arriba.
    
3. **Electronegatividad ($\chi$):** Capacidad de un átomo para atraer electrones en un enlace químico. Sigue la tendencia de la $EI$.
    
4. **Afinidad electrónica ($AE$):** Cambio de energía cuando un átomo gaseoso acepta un electrón.
    
5. **Estados de oxidación:** Carga aparente de un átomo en un compuesto, determinada por su configuración electrónica y la capacidad de perder o ganar electrones para alcanzar estabilidad (usualmente la configuración de gas noble).
    
6. **Acidez y basicidad:** Los óxidos de elementos a la izquierda de la tabla (metales) tienden a ser básicos, mientras que los de la derecha (no metales) tienden a ser ácidos.
    

## Predicción de propiedades periódicas: método de Mendeléiev y primer método de cálculo comparativo.

Históricamente, la capacidad predictiva de la tabla periódica fue su mayor éxito:

- **Método de Mendeléiev:** Basado en la observación de huecos en su tabla original, Mendeléiev predijo las propiedades de elementos aún no descubiertos (como el germanio, llamado _eka-silicio_) basándose en la interpolación de las propiedades de sus vecinos de grupo y periodo.
    
- **Método de cálculo comparativo:** En la química moderna, se utilizan relaciones lineales y no lineales entre propiedades (como puntos de ebullición, radios o energías) de elementos análogos. Si se conocen las propiedades de los elementos $A$ y $C$ de un grupo, las propiedades de $B$ (situado entre ellos) se estiman mediante promedios ponderados o extrapolaciones termodinámicas, permitiendo predecir comportamientos de elementos sintéticos o en condiciones extremas.
