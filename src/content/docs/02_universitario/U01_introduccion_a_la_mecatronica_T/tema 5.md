---
title: Ciencias aplicadas de la ingeniería mecatrónica
---
# Ciencias aplicadas de la ingeniería mecatrónica
## Introducción
Las ciencias aplicadas en mecatrónica representan la transición de los principios físicos abstractos hacia la implementación técnica de sistemas inteligentes. Esta sección aborda cómo la manipulación de la energía eléctrica y la información digital permite la creación de sistemas autónomos capaces de interactuar con el mundo físico mediante la detección, el procesamiento y la actuación.

## Introducción general a la electricidad y magnetismo:

La electricidad y el magnetismo son fenómenos interrelacionados que constituyen el soporte energético y de señal de todo sistema mecatrónico.

### Carga eléctrica, corriente, voltaje y resistencia (Ley de Ohm).

- **Carga eléctrica ($q$):** Propiedad intrínseca de la materia medida en culombios ($C$). Es el origen de los campos eléctricos.
    
- **Corriente ($I$):** Flujo neto de carga eléctrica a través de un conductor por unidad de tiempo ($I = \frac{dq}{dt}$), medida en amperios ($A$).
    
- **Voltaje ($V$):** Diferencia de potencial eléctrico entre dos puntos, o el trabajo necesario para mover una carga entre ellos ($V = \frac{dW}{dq}$), medido en voltios ($V$).
    
- **Resistencia ($R$):** Oposición al flujo de corriente, medida en ohmios ($\Omega$).
    
- **Ley de Ohm:** Establece una relación lineal entre estas variables para materiales óhmicos:
    
    $$V = I \cdot R$$
    

### Circuitos eléctricos básicos.

Un circuito es una interconexión de componentes eléctricos que forman una trayectoria cerrada. Se clasifican principalmente en:

- **Serie:** Los componentes se conectan uno tras otro; la corriente es la misma en todos, pero el voltaje se divide.
    
- **Paralelo:** Los componentes comparten los mismos nodos de entrada y salida; el voltaje es el mismo, pero la corriente se ramifica.
    

### Leyes de Kirchhoff (leyes de corrientes y voltajes).

Son leyes fundamentales para el análisis de redes complejas basadas en la conservación de la carga y la energía:

1. **Ley de Corrientes (LCK):** La suma algebraica de las corrientes que entran a un nodo es igual a cero ($\sum I = 0$).
    
2. **Ley de Voltajes (LVK):** La suma algebraica de las diferencias de potencial en una trayectoria cerrada o malla es igual a cero ($\sum V = 0$).
    

## Fuerzas electromagnéticas.

La fuerza electromagnética es la interacción que ocurre entre partículas cargadas eléctricamente. En ingeniería, la **Fuerza de Lorentz** describe la fuerza que experimenta una partícula de carga $q$ que se mueve a una velocidad $\vec{v}$ en presencia de un campo eléctrico $\vec{E}$ y un campo magnético $\vec{B}$:

$$\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$$

Esta fuerza es el principio fundamental detrás de la deflexión de haces de electrones y el funcionamiento básico de los actuadores magnéticos.

## Ley de Faraday y electromagnetismo.

La **Ley de Inducción de Faraday** indica que un campo magnético variable en el tiempo induce una fuerza electromotriz (FEM) en un circuito cerrado.

$$\varepsilon = -N \frac{d\Phi_B}{dt}$$

Donde $\Phi_B$ es el flujo magnético y $N$ el número de espiras. Este fenómeno es la base para la conversión de energía en generadores y transformadores, permitiendo la transmisión eficiente de potencia.

## Motores eléctricos, principios de funcionamiento.

Los motores eléctricos convierten energía eléctrica en energía mecánica rotacional mediante la interacción de campos magnéticos.

- **Motor de Corriente Continua (DC):** Utiliza un conmutador para invertir la dirección de la corriente y mantener un torque constante.
    
- **Motores de Inducción (AC):** Funcionan basándose en un campo magnético rotatorio en el estator que induce corrientes en el rotor.
    
- **Servomotores:** Motores con retroalimentación de posición, esenciales en robótica para el control preciso de articulaciones.
    

## Fundamentos de electrónica:

La electrónica se encarga del control del flujo de electrones para el procesamiento de información y conmutación de potencia.

### Componentes básicos de circuitos electrónicos y sus aplicaciones.

- **Resistencias:** Limitan la corriente y dividen voltajes.
    
- **Condensadores ($C$):** Almacenan energía en un campo eléctrico; se usan para filtrado y acoplamiento.
    
- **Diodos:** Permiten el flujo de corriente en una sola dirección (rectificación).
    
- **Transistores (BJT, MOSFET):** Funcionan como interruptores electrónicos o amplificadores. Son los bloques de construcción de los microchips modernos.
    

### Osciladores.

Circuitos que generan señales repetitivas (ondas senoidales o cuadradas) sin una entrada de señal externa. Son cruciales para generar las señales de reloj ($clock$) en sistemas digitales y microcontroladores.

## Sensores y actuadores electrónicos.

Son los elementos de interfaz con el mundo físico:

- **Sensores:** Dispositivos que detectan cambios en variables físicas y los convierten en señales eléctricas (ej. termistores para temperatura, LDR para luz, encoders para posición).
    
- **Actuadores:** Dispositivos que ejecutan una acción física a partir de una señal de control (ej. relés, solenoides, cilindros neumáticos controlados por válvulas de solenoide).
    

## Señales analógicas y digitales.

- **Analógicas:** Varían de forma continua en el tiempo y pueden tomar infinitos valores dentro de un rango. Son susceptibles al ruido.
    
- **Digitales:** Toman valores discretos (generalmente representados por niveles de voltaje 0 y 1). Son robustas y permiten el procesamiento computacional.
    
- **Conversión:** Se requiere de convertidores **ADC** (Analógico a Digital) para que un microcontrolador pueda leer un sensor analógico, y **DAC** (Digital a Analógico) para generar salidas continuas.
    

## Introducción a los microcontroladores.

Un microcontrolador (MCU) es un computador en un solo chip que integra una CPU, memoria (RAM y Flash) y periféricos de entrada/salida (I/O). Es el componente central de los sistemas embebidos en mecatrónica, encargado de ejecutar el algoritmo de control en tiempo real.

## Dispositivos y circuitos digitales:

### Electrónica digital.

Se basa en el álgebra de Boole para manipular variables binarias. Es la base de toda la tecnología de computación actual.

### Funciones y puertas lógicas.

Son las operaciones básicas:

- **NOT:** Inversión.
    
- **AND:** Salida alta solo si todas las entradas son altas.
    
- **OR:** Salida alta si al menos una entrada es alta.
    
- **XOR:** Salida alta si las entradas son diferentes.
    
- **NAND/NOR:** Funciones universales que pueden replicar cualquier otra función lógica.
    

### Familias lógicas: TTL, CMOS.

- **TTL (Transistor-Transistor Logic):** Basada en transistores bipolares; rápida pero consume más energía.
    
- **CMOS (Complementary Metal-Oxide-Semiconductor):** Basada en MOSFETs; consumo de energía extremadamente bajo, dominante en la electrónica actual.
    

### Circuitos combinacionales y secuenciales.

- **Combinacionales:** La salida depende solo de las entradas actuales (ej. sumadores, multiplexores).
    
- **Secuenciales:** La salida depende de las entradas actuales y de la historia pasada del sistema (poseen memoria). El bloque básico es el **Flip-Flop**.
    

## Fundamentos de control:

La teoría de control permite regular el comportamiento de los sistemas dinámicos.

### Teoría básica de control: sistemas abiertos y cerrados.

- **Lazo Abierto:** La acción de control no depende de la salida (ej. un tostador).
    
- **Lazo Cerrado (Feedback):** La salida se mide y se compara con la referencia para corregir el error (ej. un termostato).
    

### Controladores PID.

Es el algoritmo de control más utilizado en la industria. Calcula la acción de control basándose en tres términos:

1. **Proporcional ($P$):** Acción proporcional al error actual.
    
2. **Integral ($I$):** Acción proporcional a la acumulación del error en el tiempo (elimina el error en estado estacionario).
    
3. **Derivativo ($D$):** Acción proporcional a la tasa de cambio del error (predice el comportamiento futuro).
    

$$u(t) = K_p e(t) + K_i \int e(t)dt + K_d \frac{de(t)}{dt}$$

### Sistemas de control en tiempo real.

Sistemas donde la corrección de la respuesta debe ocurrir dentro de límites de tiempo estrictos (determinismo). Un retraso en el procesamiento puede causar inestabilidad en el sistema físico.

### Introducción a la programación de controladores.

Consiste en la implementación de algoritmos (como el PID) en lenguajes como C o mediante lógica de escalera ($Ladder$) en PLCs, asegurando la correcta adquisición de datos de sensores y el envío de comandos a los actuadores.

> [!example] foto
> 
> [Diagrama de bloques de un sistema de control de lazo cerrado, mostrando la referencia, el comparador de error, el controlador PID, el actuador, la planta o proceso, y el sensor en la ruta de retroalimentación].

---

He concluido el desarrollo del quinto módulo con el nivel de profundidad técnica requerido. ¿Desea proceder con el siguiente tema del temario?