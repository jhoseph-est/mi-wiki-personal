---
title: Gravitación
---
## Introducción
La gravitación es la interacción fundamental que rige el movimiento de los cuerpos a escala macroscópica y astronómica. El estudio de la gravedad evolucionó de las observaciones empíricas de las órbitas planetarias hacia la formulación de una ley universal que describe la atracción entre masas.

---

## Leyes de Kepler

A principios del siglo XVII, Johannes Kepler formuló tres leyes que describen el movimiento cinemático de los planetas basándose en los datos observacionales de Tycho Brahe.

1. **Primera Ley (Ley de las órbitas):** Todos los planetas se mueven en órbitas elípticas, con el Sol en uno de los focos. La excentricidad de la elipse determina qué tan "alargada" es la órbita.
    
2. **Segunda Ley (Ley de las áreas):** El radio vector que une a un planeta con el Sol barre áreas iguales en tiempos iguales. Esto implica que la velocidad orbital no es constante: el planeta se mueve más rápido en el **perhelio** (punto más cercano) y más lento en el **afelio** (punto más lejano). Esto es una consecuencia directa de la conservación del momento angular.
    
3. **Tercera Ley (Ley de los periodos):** El cuadrado del periodo orbital $T$ de cualquier planeta es proporcional al cubo del semieje mayor $a$ de su órbita:
    
    $$T^2 = K a^3$$
    
    Donde $K$ es una constante que depende de la masa del cuerpo central (el Sol).
    

## Ley de gravitación universal

Isaac Newton demostró que la fuerza que mantiene a los planetas en órbita es la misma que hace caer los objetos en la Tierra. Formuló que cada partícula de materia en el universo atrae a cualquier otra partícula con una fuerza directamente proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia entre sus centros:

$$\vec{F}_g = -G \frac{m_1 m_2}{r^2} \hat{r}$$

Donde:

- $G \approx 6.674 \times 10^{-11} \, N \cdot m^2/kg^2$ es la constante de gravitación universal.
    
- $r$ es la distancia entre los centros de masa.
    
- El signo negativo indica que la fuerza es siempre **atractiva**.
    

## Definición de campo, campos escalares, campos vectoriales

En física, un **campo** es una función matemática que asigna un valor a cada punto del espacio $(x, y, z)$ en un tiempo $t$.

- **Campos escalares:** Asignan un único número (magnitud) a cada punto. Ejemplos: temperatura, presión o el potencial gravitatorio.
    
- **Campos vectoriales:** Asignan un vector (magnitud y dirección) a cada punto. Ejemplos: el campo de velocidades de un fluido o el campo gravitacional $\vec{g}$.
    

## Campo gravitacional (líneas de campo gravitacionales)

El **campo gravitacional ($\vec{g}$)** es la fuerza gravitacional por unidad de masa que una partícula de prueba experimentaría en un punto dado. Se define como:

$$\vec{g} = \frac{\vec{F}_g}{m} = -G \frac{M}{r^2} \hat{r}$$

Sus unidades en el SI son $N/kg$, que es equivalente a $m/s^2$.

Las **líneas de campo** son representaciones visuales donde la dirección de la línea indica la dirección de la fuerza. En el caso de una masa puntual o esférica, las líneas son radiales y apuntan hacia el centro de la masa. La densidad de líneas representa la intensidad del campo.

## Energía potencial gravitatoria ($U$)

A diferencia de la aproximación cercana a la superficie terrestre ($U = mgy$), para distancias astronómicas la energía potencial debe definirse de forma que sea cero en el infinito ($r \to \infty$). El trabajo realizado por una fuerza externa para mover una masa desde el infinito hasta una distancia $r$ define la energía potencial:

$$U(r) = -G \frac{M m}{r}$$

Es siempre negativa, lo que refleja que el sistema está "ligado" o atrapado por la atracción gravitatoria.

## Potencial gravitacional ($V$)

El potencial gravitacional es una magnitud escalar que representa la energía potencial por unidad de masa en un punto determinado del campo:

$$V = \frac{U}{m} = -G \frac{M}{r}$$

- **Superficies equipotenciales:** Son superficies donde el potencial gravitacional es constante. Para una masa puntual, estas superficies son esferas concéntricas.
    
- **Curvas equipotenciales:** En una representación 2D, son círculos. El movimiento de una masa a lo largo de una superficie equipotencial no requiere trabajo, ya que la fuerza gravitatoria es siempre perpendicular al desplazamiento sobre dicha superficie ($\Delta V = 0 \implies W = 0$).
    

> [!example] foto
> 
> [Diagrama de una masa central rodeada de superficies equipotenciales esféricas y líneas de campo radiales, mostrando la relación de perpendicularidad entre ambas].
