---
title: Equilibrio REDOX
---
## Introducción

La electroquímica es la rama de la química que estudia la interconversión entre la energía eléctrica y la energía química. Estos procesos ocurren a través de reacciones de transferencia de electrones (redox) en la interfaz de un conductor eléctrico (electrodo) y un conductor iónico (electrolito). El estudio del equilibrio redox es fundamental para el desarrollo de tecnologías de almacenamiento de energía, la comprensión de los mecanismos de corrosión que afectan la infraestructura global y el diseño de procesos industriales de electrometalurgia y galvanoplastia.

---

## Procesos de oxidación-reducción. Energía libre en reacciones redox.

Una reacción redox implica la transferencia de electrones de un agente reductor (que se oxida) a un agente oxidante (que se reduce). La fuerza impulsora de esta transferencia es el cambio en la **energía libre de Gibbs ($\Delta G$)**.

En un sistema electroquímico, el trabajo eléctrico máximo que puede realizar el sistema es igual a la variación de energía libre:

$$\Delta G = -nFE_{celda}$$

Donde:

- $n$: número de moles de electrones transferidos en la reacción balanceada.
    
- $F$: constante de Faraday ($\approx 96485 \text{ C/mol } e^-$).
    
- $E_{celda}$ o $\epsilon$: potencial de celda o fuerza electromotriz (FEM) en voltios ($V$).
    

Para que una reacción sea espontánea bajo condiciones de estado estándar, $\Delta G^\circ$ debe ser negativo, lo que implica que el potencial estándar de celda ($E^\circ_{celda}$) debe ser **positivo**.

## Celdas galvánicas. Potenciales redox. Celdas de concentración. Ecuación de Nernst.

### Celdas Galvánicas (o Voltáicas)

Son dispositivos que transforman la energía química de una reacción espontánea en energía eléctrica. Constan de dos semiceldas:

- **Ánodo:** Electrodo donde ocurre la **oxidación** (polo negativo en celdas galvánicas).
    
- **Cátodo:** Electrodo donde ocurre la **reducción** (polo positivo en celdas galvánicas).
    
    Un puente salino permite la migración de iones para mantener la electroneutralidad sin mezclar las soluciones.
    

### Potenciales Estándar de Reducción ($E^\circ$)

Se miden en comparación con el **Electrodo Estándar de Hidrógeno (EEH)**, al cual se le asigna arbitrariamente un potencial de $0.00 \text{ V}$.

$$E^\circ_{celda} = E^\circ_{cátodo} - E^\circ_{ánodo}$$

### Ecuación de Nernst

Describe la dependencia del potencial de celda con la concentración de las especies y la temperatura. Para una reacción a $25$ °C:

$$E = E^\circ - \frac{0.0592}{n} \log Q$$

Donde $Q$ es el cociente de reacción. Esta ecuación permite calcular el potencial en condiciones no estándar.

### Celdas de Concentración

Son celdas compuestas por los mismos electrodos y electrolitos, pero con diferentes concentraciones. La FEM se genera por la tendencia del sistema a igualar las concentraciones (aumento de entropía). El potencial estándar $E^\circ$ es siempre cero, y el flujo de electrones va de la semicelda diluida a la concentrada.

## Celdas de combustible. Determinación de la energía eléctrica.

Una **celda de combustible** es un dispositivo electroquímico que convierte la energía química de un combustible (frecuentemente hidrógeno) y un oxidante (oxígeno) directamente en electricidad. A diferencia de las baterías, no se agotan ni requieren recarga mientras se suministre combustible.

**Reacción en celda de hidrógeno/oxígeno:**

- Ánodo: $2H_2 \rightarrow 4H^+ + 4e^-$
    
- Cátodo: $O_2 + 4H^+ + 4e^- \rightarrow 2H_2O$
    
- Global: $2H_2 + O_2 \rightarrow 2H_2O$
    

![Imagen de hydrogen fuel cell diagram](https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQSmdzc1Wm80SE8sSyKkVCUOwLkfNe-XGzmowFOWiAY1KFt6nUWi5TMQiby5I-3m1sRyCBTYXEluk6WKmhvSCbdt8Q2TI4DNU8nqcOMB3Kf2hC2H0o)

Shutterstock

La eficiencia de estas celdas es superior a los motores de combustión interna porque no están limitadas por el ciclo de Carnot, ya que transforman energía química directamente en eléctrica sin pasar por energía térmica.

## Corrosión metálica: tipos, medición y prevención.

La corrosión es el deterioro de un metal debido a un ataque electroquímico por su entorno (proceso espontáneo, $\Delta G < 0$).

### Tipos de Corrosión

1. **Uniforme:** El ataque se extiende de forma homogénea sobre toda la superficie.
    
2. **Galvánica:** Ocurre cuando dos metales de diferente potencial están en contacto en presencia de un electrolito. El metal menos noble (más anódico) se corroe.
    
3. **Por picadura (Pitting):** Ataque localizado que crea pequeños orificios; es extremadamente peligrosa por ser difícil de detectar.
    

### Prevención

- **Protección Catódica:** Se fuerza al metal a ser el cátodo de una celda.
    
    - **Ánodo de sacrificio:** Se conecta el metal a uno más activo (ej. Magnesio para proteger acero).
        
    - **Corriente impresa:** Se aplica una fuente externa de corriente continua.
        
- **Recubrimientos:** Pinturas, polímeros o galvanizado (recubrimiento con Zinc).
    

## Celdas electrolíticas. Leyes de Faraday. Sobretensión.

La **electrólisis** utiliza energía eléctrica para forzar una reacción química no espontánea ($\Delta G > 0$, $E_{celda} < 0$).

### Leyes de Faraday

Relacionan la cantidad de sustancia producida en los electrodos con la carga eléctrica ($Q$) que circula:

1. La masa ($m$) de sustancia liberada es proporcional a la carga eléctrica: $Q = I \cdot t$ (Corriente por tiempo).
    
2. Para una misma carga, la masa liberada es proporcional al peso equivalente del elemento:
    
    $$m = \frac{I \cdot t \cdot M}{n \cdot F}$$
    
    Donde $M$ es la masa molar y $n$ el número de electrones.
    

### Sobretensión (Overpotential)

Es la diferencia de potencial entre el potencial teórico de equilibrio y el potencial real necesario para iniciar la electrólisis a una velocidad apreciable. Se debe a limitaciones cinéticas en la transferencia de electrones o en la difusión de reactivos hacia la superficie del electrodo.

> [!example] foto
> 
> [Diagrama comparativo entre una celda galvánica y una celda electrolítica. Debe mostrar claramente la diferencia en la dirección del flujo de electrones, la polaridad de los electrodos (Ánodo/Cátodo) en cada caso y la presencia de una fuente de alimentación externa en la celda electrolítica frente a una carga o voltímetro en la galvánica].
