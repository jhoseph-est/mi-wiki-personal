---
title: Estructura de control de decisión
---
# 3. Estructura

## Operadores aritméticos, relacionales, lógicos

Los operadores son símbolos que instruyen al intérprete para realizar manipulaciones lógicas o matemáticas específicas. En Python, estos se clasifican según la naturaleza de la operación que ejecutan.

### Operadores Aritméticos

Permiten la ejecución de cálculos matemáticos sobre tipos de datos numéricos (`int`, `float`, `complex`).

- **Suma (`+`) y Resta (`-`)**: Operaciones aditivas estándar.
    
- **Multiplicación (`*`)**: Producto de operandos.
    
- **División Real (`/`)**: Retorna siempre un `float`, por ejemplo, $5 / 2 = 2.5$.
    
- **División Entera (`//`)**: Retorna el cociente truncado de la división ($\lfloor a / b \rfloor$).
    
- **Módulo (`%`)**: Retorna el residuo de la división entera ($a \pmod{b}$).
    
- **Exponenciación (`**`)**: Eleva un operando a la potencia de otro ($a^b$).
    

### Operadores Relacionales (Comparación)

Evalúan la relación entre dos operandos y devuelven un valor booleano (`True` o `False`).

- **Igualdad (`==`)** y **Diferencia (`!=`)**.
    
- **Mayor que (`>`)**, **Menor que (`<`)**, **Mayor o igual que (`>=`)**, **Menor o igual que (`<=`)**.
    

### Operadores Lógicos

Se utilizan para combinar expresiones booleanas siguiendo las tablas de verdad de la lógica de Boole.

- **`and` (Conjunción)**: Verdadero si ambos operandos son verdaderos.
    
- **`or` (Disyunción)**: Verdadero si al menos uno de los operandos es verdadero.
    
- **`not` (Negación)**: Invierte el valor de verdad del operando.
    

> [!example] foto
> 
> [Tabla de jerarquía de operadores que muestra el orden de precedencia desde la exponenciación hasta los operadores lógicos, esencial para evitar errores de cálculo en expresiones complejas.]

## Manejo de cadenas sin funciones

El manejo de cadenas (`str`) a nivel estructural se basa en que son **secuencias inmutables** de caracteres. Sin utilizar métodos de clase (como `.upper()` o `.split()`), el programador puede manipularlas mediante:

- **Indexación:** Acceso a un carácter específico mediante su posición. Python utiliza indexación basada en cero. Sea $S$ una cadena, $S[i]$ accede al carácter en la posición $i$. Se soporta indexación negativa, donde $S[-1]$ es el último carácter.
    
- **Slicing (Sucedido):** Permite extraer subcadenas mediante la sintaxis `S[inicio:fin:paso]`. La subcadena resultante incluye los caracteres desde `inicio` hasta `fin - 1`.
    
- **Concatenación:** Uso del operador `+` para unir dos cadenas.
    
- **Repetición:** Uso del operador `*` para duplicar una cadena $n$ veces.
    
- **Longitud:** La función integrada `len(S)` devuelve el número de caracteres (puntos de código) en la cadena.
    

## Estructura de control `if() else`

La estructura `if-else` es la unidad fundamental de la **ejecución condicional**. Permite al programa bifurcar su flujo basándose en la evaluación de una expresión booleana.

Python

```
if condicion:
    # Bloque de código si la condición es True
else:
    # Bloque de código si la condición es False
```

Desde el punto de vista de la arquitectura de software, esta estructura implementa una decisión binaria. Es imperativo respetar la **identación (sangría)**, ya que Python la utiliza para definir el alcance (_scope_) de los bloques de código, a diferencia de otros lenguajes que emplean llaves `{}`.

## Estructura de control `if() elif() else`

Cuando existen múltiples condiciones mutuamente excluyentes, se emplea la cláusula `elif` (abreviatura de _else if_). Esta estructura permite evaluar múltiples expresiones en secuencia; en cuanto una resulta ser `True`, se ejecuta su bloque correspondiente y se omite el resto de la estructura.

La eficiencia de esta estructura reside en que evita evaluaciones redundantes una vez que se ha satisfecho una condición previa en la cadena.

## Estructura `if` anidado

Un `if` anidado consiste en una estructura de control situada dentro del bloque de otra sentencia condicional. Se utiliza para modelar jerarquías de decisión complejas donde una condición solo es relevante si una condición superior ha sido previamente satisfecha.

La profundidad de anidamiento debe gestionarse con precaución para mantener la **legibilidad** y reducir la **complejidad ciclomática** del código.

## Estructura de control `match`

Introducida en Python 3.10 como **Structural Pattern Matching**, la sentencia `match` es una alternativa más potente y legible al encadenamiento de múltiples `if-elif`.

Python

```
match variable:
    case valor1:
        # bloque
    case valor2:
        # bloque
    case _:
        # bloque por defecto (comodín)
```

A diferencia de los condicionales simples, `match` permite realizar comprobaciones de patrones complejos, incluyendo el desempaquetado de secuencias y la verificación de tipos de objetos, mejorando significativamente la claridad en la gestión de múltiples estados.

## Números aleatorios: `random`, `randint`, `randrange`

La generación de aleatoriedad en Python se gestiona mediante el módulo `random`, que implementa el algoritmo **Mersenne Twister**, un generador de números pseudoaleatorios (PRNG) determinista de periodo largo.

- **`random.random()`**: Genera un `float` en el intervalo semiabierto $[0.0, 1.0)$.
    
- **`random.randint(a, b)`**: Genera un número entero $n$ tal que $a \le n \le b$. A diferencia de otras funciones en Python, el límite superior **sí** está incluido.
    
- **`random.randrange(start, stop, step)`**: Devuelve un elemento seleccionado aleatoriamente del rango `range(start, stop, step)`. Es más versátil para generar números aleatorios siguiendo un patrón de saltos (por ejemplo, solo números pares).
    

> [!example] foto
> 
> [Diagrama explicativo sobre el funcionamiento de un generador pseudoaleatorio, ilustrando cómo una semilla (seed) inicial produce una secuencia determinista de números que simulan la aleatoriedad.]

---

He completado el desarrollo técnico de la sección **Estructura**. El contenido cubre desde la lógica de operadores hasta la generación de datos estocásticos. ¿Desea continuar con el siguiente bloque del temario o requiere una expansión técnica sobre algún punto específico?