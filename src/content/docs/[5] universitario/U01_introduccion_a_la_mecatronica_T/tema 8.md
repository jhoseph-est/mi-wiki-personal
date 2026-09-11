---
title: Proyecto de diseño y fabricacón
---
# Proyecto de diseño y fabricación
## Introducción
El desarrollo de un proyecto en ingeniería mecatrónica constituye la síntesis práctica de las competencias adquiridas en mecánica, electrónica y programación. Este proceso no es meramente constructivo, sino que sigue una metodología de ingeniería rigurosa que garantiza que el producto final cumpla con las especificaciones técnicas y funcionales establecidas inicialmente.

## Opciones de proyecto:

Las siguientes opciones representan problemas típicos de control y automatización a escala académica, diseñados para evaluar la capacidad de integración sistémica.

### Desarrollo de sistema mecatrónico: robot seguidor de línea.

Este proyecto se centra en el control de movimiento y la percepción sensorial. Consiste en un vehículo autónomo capaz de detectar una trayectoria (generalmente una línea de alto contraste) y ajustar la velocidad de sus motores para mantenerse sobre ella.

- **Componentes Críticos:** Sensores infrarrojos (transmisor y receptor), puente H ($L298N$ o similar), motores DC con reducción y un microcontrolador (ATmega328P o similar).
    
- **Desafío Técnico:** Implementación de un algoritmo de control, idealmente un PID (Proporcional-Integral-Derivativo), para suavizar las correcciones de dirección y evitar oscilaciones.
    

### Fabricación de un semáforo automatizado con un sistema embebido.

Un sistema de control de tráfico que gestiona flujos vehiculares y peatonales. A diferencia de un temporizador simple, un semáforo mecatrónico avanzado integra sensores de presencia para optimizar los tiempos de espera.

- **Componentes Críticos:** Matriz de LEDs de alta potencia, sensores de proximidad ultrasónicos o inductivos, y una unidad de control lógico programable.
    
- **Desafío Técnico:** Diseño de una máquina de estados finitos ($FSM$) que gestione las transiciones de seguridad y las prioridades de tráfico de manera determinista.
    

### Proyecto propuesto por el profesor de práctica.

Orientado a aplicaciones específicas de la industria local o investigación académica. Suele implicar mayor complejidad, como sistemas de visión artificial básica, brazos robóticos de 3 grados de libertad ($DoF$) o sistemas de monitoreo IoT para variables ambientales.

## Pasos para el diseño y/o fabricación:

El flujo de trabajo sigue el ciclo de vida de desarrollo de productos mecatrónicos, asegurando la trazabilidad desde la idea hasta la validación.

### Diseño conceptual. Bocetos iniciales del diseño.

Es la etapa de abstracción donde se definen las funciones principales del sistema sin entrar en detalles técnicos profundos.

- **Actividades:** Lluvia de ideas, diagramas de bloques funcionales y bocetos a mano alzada. Se establece la arquitectura del sistema: qué parte será mecánica, cuál electrónica y cómo interactuarán.
    

### Modelado en CAD o similares. Simulación del funcionamiento.

Se traslada el concepto al entorno digital para realizar pruebas virtuales.

- **Modelado 3D:** Uso de software CAD (SolidWorks, Fusion 360) para definir la geometría, materiales y verificar que no existan interferencias mecánicas.
    
- **Simulación:** Ejecución de pruebas de esfuerzo (FEA) en la estructura y simulaciones de circuitos (Proteus, Multisim) para validar que los voltajes y corrientes sean los adecuados antes de la implementación física.
    

### Selección de materiales y procesos de manufactura.

Elección basada en criterios de costo, peso, resistencia y facilidad de fabricación.

- **Materiales:** Polímeros (PLA/ABS) para impresión 3D, acrílico cortado por láser, o aleaciones de aluminio para estructuras que requieran mayor rigidez.
    
- **Procesos:** Manufactura aditiva, mecanizado CNC o técnicas de fabricación manual de precisión.
    

### Fabricación del prototipo y ensamblaje.

Materialización de las partes diseñadas y montaje de los sistemas.

- **Electrónica:** Soldadura de componentes en placas de prueba o fabricación de circuitos impresos ($PCB$).
    
- **Mecánica:** Ensamblaje de motores, transmisiones y estructura.
    
- **Software:** Carga del firmware inicial en el microcontrolador y calibración de sensores.
    

### Pruebas y evaluación.

Fase crítica donde se somete al prototipo a condiciones de operación reales o simuladas.

- **Verificación:** ¿El robot sigue la línea? ¿El semáforo cambia en el tiempo correcto?
    
- **Depuración (Debugging):** Identificación y corrección de errores en el código o fallos en el cableado. Se busca optimizar el rendimiento mediante el ajuste de parámetros de control.
    

### Presentación de resultados.

Documentación final que demuestra la consecución de los objetivos.

- **Entregables:** Informe técnico detallado (memoria de cálculo, planos, código fuente), demostración funcional y análisis de posibles mejoras futuras (escalabilidad).
    

> [!example] foto
> 
> [Diagrama de flujo del proceso de diseño mecatrónico, desde la detección de la necesidad y el diseño conceptual, pasando por el diseño detallado en CAD/CAE, hasta la integración, pruebas y validación final].
