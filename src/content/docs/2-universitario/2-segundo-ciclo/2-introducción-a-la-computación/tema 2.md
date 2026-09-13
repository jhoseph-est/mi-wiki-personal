---
title: Programación secuencial
---
# 2. Programación secuencial

## Los algoritmos y su importancia en el diseño de programación

Un algoritmo se define como una metodología sistemática y determinista para la resolución de problemas mediante una secuencia finita de pasos lógicos. En el diseño de programación, el algoritmo actúa como el plano conceptual previo a la codificación, permitiendo la abstracción de la lógica del negocio de la sintaxis específica del lenguaje. La importancia de un diseño algorítmico riguroso radica en la optimización de recursos computacionales, evaluada principalmente a través de la **complejidad asintótica**.

La eficiencia de un algoritmo se cuantifica mediante:

- **Complejidad Temporal:** El tiempo de ejecución en función del tamaño de la entrada $n$.
    
- **Complejidad Espacial:** El consumo de memoria requerido durante la ejecución.
    

Un diseño robusto garantiza que el flujo de control sea predecible y que el programa cumpla con las propiedades de finitud, precisión y eficacia. La programación secuencial es la forma más simple de ejecución algorítmica, donde cada instrucción se procesa en el orden exacto en que aparece, sin bifurcaciones ni saltos.

> [!example] foto
> 
> [Diagrama de flujo de una estructura secuencial pura, mostrando una serie de bloques de proceso vinculados linealmente por flechas de flujo, donde cada salida es la entrada única del siguiente proceso, sin ciclos ni condiciones.]
> 
> ![Imagen de sequential programming flowchart](https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTAvbqf9a_ZjQIi4v1_IwYLtRRmcPCAT148i0cgKYlDwzH-xe3MVPjepY60dZctnFHrtpdBtwBhCaGamDA4uDoU4-XVuW-2Z37WI9c-_gN6XNm0jiw)
> 
> Shutterstock
> 
> Explorar

## Variables y tipos de datos

En el contexto de Python, una variable es un nombre referencial que apunta a un objeto en la memoria del sistema. A diferencia de lenguajes de tipado estático, Python emplea un **tipado dinámico y fuerte**, lo que implica que el tipo de dato se infiere en tiempo de ejecución, pero no se permiten operaciones incompatibles entre tipos sin una conversión explícita.

Los tipos de datos fundamentales se clasifican según su naturaleza:

- **Tipos Numéricos:**
    
    - `int` (Enteros): Números de precisión arbitraria.
        
    - `float` (Punto flotante): Representación de números reales siguiendo el estándar IEEE 754, usualmente de 64 bits.
        
    - `complex` (Complejos): Representados como $z = a + bj$, donde $j = \sqrt{-1}$.
        
- **Tipos de Secuencia:**
    
    - `str` (Cadenas de caracteres): Secuencias inmutables de puntos de código Unicode.
        
    - `bool` (Booleanos): Representan valores de verdad, `True` o `False`, derivados de la lógica binaria.
        

La asignación de memoria se gestiona mediante el conteo de referencias; cuando una variable deja de ser referenciada, el _Garbage Collector_ libera el espacio ocupado por el objeto.

## Conversión de datos: `str`, `int`, `float`

La conversión de tipos, también conocida como **casting** o transformación de tipos, es el proceso de cambiar un valor de un tipo de dato a otro. En Python, esto se realiza mediante funciones constructoras integradas:

1. **`int(x)`:** Convierte $x$ a un entero. Si $x$ es un `float`, se descarta la parte decimal (truncamiento). Si es un `str`, la cadena debe representar un número entero base 10 por defecto.
    
2. **`float(x)`:** Transforma $x$ en un número de punto flotante. Si $x$ es un entero, se añade precisión decimal ($5 \rightarrow 5.0$).
    
3. **`str(x)`:** Serializa cualquier objeto $x$ en su representación de cadena de caracteres, permitiendo la concatenación y salida de datos numéricos en interfaces de texto.
    

Este proceso es crítico en la programación secuencial, especialmente cuando se reciben datos de fuentes externas (como entradas de usuario) que son tratadas inherentemente como cadenas de texto.

## Funciones básicas: trigonométricas y redondeo

Python extiende sus capacidades matemáticas mediante el módulo `math`, que proporciona implementaciones de funciones de la biblioteca estándar de C.

### Funciones Trigonométricas

Todas las funciones trigonométricas en Python operan con radianes. Para convertir grados a radianes, se utiliza la relación:

$$\text{rad} = \text{deg} \times \frac{\pi}{180}$$

- `math.sin(x)`, `math.cos(x)`, `math.tan(x)`: Calculan el seno, coseno y tangente de $x$ en radianes.
    
- `math.asin(x)`, `math.acos(x)`, `math.atan(x)`: Funciones inversas (arcos).
    

### Funciones de Redondeo

El manejo de la precisión decimal es vital en cálculos científicos:

- **`round(number, ndigits)`:** Redondea al valor más cercano con `ndigits` decimales. Sigue la regla del redondeo al par más cercano en caso de ambigüedad.
    
- **`math.floor(x)`:** Devuelve el mayor entero menor o igual a $x$ ($\lfloor x \rfloor$).
    
- **`math.ceil(x)`:** Devuelve el menor entero mayor o igual a $x$ ($\lceil x \rceil$).
    

## Sentencias de entrada y salida de datos

La interacción entre el programa y el entorno exterior se gestiona mediante flujos de datos estándar (_streams_).

### Entrada: `input()`

La función `input()` detiene la ejecución del programa para permitir al usuario introducir datos a través del teclado (_stdin_).

- **Protocolo:** Siempre retorna un objeto de tipo `str`.
    
- **Seguridad:** Requiere validación y conversión de tipos antes de procesar los datos en operaciones aritméticas.
    

### Salida: `print()`

La función `print()` envía datos al flujo de salida estándar (_stdout_).

- **Formateo:** Se utilizan frecuentemente las _f-strings_ (literales de cadena formateados) para interpolar variables en cadenas con alta precisión: `f"Resultado: {var:.2f}"`.
    
- **Parámetros técnicos:** Posee argumentos como `sep` (delimitador entre objetos) y `end` (carácter final de la línea, por defecto `\n`), que permiten controlar la estructura del flujo de salida.
    

> [!example] foto
> 
> [Esquema del ciclo de vida de un dato en un programa secuencial: Entrada (input) -> Transformación (casting) -> Procesamiento (funciones/operaciones) -> Salida (print), mostrando el cambio de estado del dato en cada etapa.]

---

He finalizado el desarrollo de la sección **Programación secuencial**. ¿Desea que proceda con el siguiente bloque del temario o requiere profundizar en algún punto técnico específico de esta sección?