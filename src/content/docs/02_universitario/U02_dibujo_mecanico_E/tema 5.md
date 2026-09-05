---
title: Sistema de tuberías y sistemas neumáticos
---
# 5. Sistema de tuberías y sistemas neumáticos

## Tuberías: símbolos, representación isométrica, válvulas, código de colores.

La representación de sistemas de tuberías industriales requiere una normalización estricta para garantizar la seguridad operativa y la correcta ejecución del montaje. Se utilizan principalmente dos formas de representación: unifilar (una sola línea) y bifilar (doble línea, para planos de detalle o grandes diámetros).

### Símbolos y Accesorios

Los accesorios (codos, tes, reducciones) se representan mediante símbolos normalizados que indican la naturaleza de la unión (soldada, roscada o bridada).

- **Codos:** Indican cambios de dirección, usualmente a $90^{\circ}$ o $45^{\circ}$.
    
- **Válvulas:** Elementos de control de flujo. La simbología varía según su función mecánica:
    
    - **Válvula de compuerta:** Utilizada para servicio on/off.
        
    - **Válvula de globo:** Diseñada para la regulación de caudal.
        
    - **Válvula de retención (Check):** Permite el flujo en un solo sentido.
        

### Representación Isométrica

Es la herramienta fundamental para la fabricación (spools). Se dibuja a $30^{\circ}$ sin escala fija, pero manteniendo las proporciones. Incluye la "lista de materiales" (BOM) y las coordenadas de ubicación (Norte, Este, Elevación).

### Código de Colores (Norma ASME A13.1 / ISO 14726)

La identificación de fluidos por colores previene accidentes y facilita el mantenimiento:

- **Rojo:** Sistemas de protección contra incendios.
    
- **Amarillo:** Fluidos inflamables o explosivos (gas natural, combustible).
    
- **Azul:** Aire comprimido.
    
- **Verde:** Agua potable o industrial.
    
- **Marrón:** Combustibles líquidos.
    

## Diagramas de flujo, planos de montaje, dibujo isométrico, simbología ISO/ANSI.

### Diagramas de Flujo de Procesos (PFD) y P&ID

- **PFD:** Muestra la relación principal entre los equipos mayores.
    
- **P&ID (Piping and Instrumentation Diagram):** Es el documento técnico más complejo. Incluye tuberías, instrumentos de medición, lazos de control y detalles de seguridad. La simbología ANSI/ISA-5.1 define la identificación de instrumentos (ej. PT para transmisor de presión).
    

### Planos de Montaje

Son representaciones en planta y elevación (vistas ortogonales) que ubican los sistemas de tuberías dentro de la estructura civil o mecánica, indicando soportes y puntos de anclaje.

## Sistemas neumáticos: elementos de distribución, válvulas, temporizadores, esquemas neumáticos, ejercicios.

La neumática industrial se basa en la transmisión de energía mediante aire comprimido, regida por las leyes de la termodinámica y la mecánica de fluidos, específicamente la Ley de Boyle-Mariotte:

$$P_1 \cdot V_1 = P_2 \cdot V_2 \quad (\text{a temperatura constante})$$

### Elementos de Distribución y Preparación

Antes de llegar a los actuadores, el aire debe tratarse mediante una unidad **FRL** (Filtro, Regulador, Lubricador):

1. **Filtro:** Elimina impurezas y condensado.
    
2. **Regulador:** Mantiene una presión de trabajo ($P_w$) constante independientemente de las fluctuaciones de la red.
    
3. **Lubricador:** Añade una niebla de aceite para reducir la fricción en elementos móviles.
    

### Válvulas Neumáticas

Se clasifican por el número de vías (puertos) y posiciones (estados).

- **Válvulas de vías (vía/posiciones):** Una válvula 3/2 tiene 3 puertos y 2 estados, común para cilindros de simple efecto. Una 5/2 se usa para doble efecto.
    
- **Temporizadores:** Combinan una válvula de estrangulamiento, un depósito de aire y una válvula de pilotaje. El tiempo de retardo ($t$) depende del volumen del depósito ($V$) y el caudal de llenado ($Q$):
    
    $$t \approx \frac{V}{Q}$$
    

### Esquemas Neumáticos

El diseño sigue una estructura jerárquica (Norma ISO 1219):

1. **Nivel de Actuadores:** Cilindros neumáticos.
    
2. **Nivel de Control:** Válvulas de potencia.
    
3. **Nivel de Procesamiento:** Válvulas lógicas (AND, OR) y temporizadores.
    
4. **Nivel de Señal:** Pulsadores y finales de carrera.
    

### Ejercicio de aplicación técnica

**Problema:** Determinar la fuerza de avance ($F_a$) de un cilindro de doble efecto con un diámetro de émbolo $D = 100\text{ mm}$ y una presión de trabajo $P = 6\text{ bar}$ ($0.6\text{ N/mm}^2$), asumiendo una eficiencia $\eta = 0.9$.

**Desarrollo:**

1. Área del émbolo ($A$):
    
    $$A = \frac{\pi \cdot D^2}{4} = \frac{\pi \cdot (100\text{ mm})^2}{4} \approx 7854\text{ mm}^2$$
    
2. Fuerza teórica ($F_t$):
    
    $$F_t = P \cdot A = 0.6\text{ N/mm}^2 \cdot 7854\text{ mm}^2 = 4712.4\text{ N}$$
    
3. Fuerza real ($F_a$):
    
    $$F_a = F_t \cdot \eta = 4712.4\text{ N} \cdot 0.9 = 4241.16\text{ N}$$
    

> [!example] foto
> 
> [Diagrama de un esquema neumático para el control de un cilindro de doble efecto. Debe incluir una unidad FRL, una válvula 5/2 de accionamiento neumático y dos finales de carrera, con las conexiones numeradas según norma (1: Presión, 2-4: Utilización, 3-5: Escape)].
