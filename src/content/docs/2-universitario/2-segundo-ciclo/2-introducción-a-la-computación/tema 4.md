---
title: Estructuras repetitivas (básicas)
---
# 4. Estructuras repetitivas – parte 1 (Básicas)

## Estructura repetitiva `for()`

En Python, la sentencia `for` no es un bucle de estilo aritmético tradicional (como en C o Java), sino un iterador de colecciones o secuencias. Su función principal es recorrer los elementos de un objeto iterable (listas, tuplas, cadenas o rangos) y ejecutar un bloque de código para cada elemento.

La sintaxis fundamental se apoya en la función `range(start, stop, step)`, la cual genera una progresión aritmética:

- **`start`**: Límite inferior (incluido). Por defecto es 0.
    
- **`stop`**: Límite superior (excluido). El bucle finaliza en `stop - 1`.
    
- **`step`**: Incremento entre valores. Puede ser negativo para progresiones descendentes.
    

Desde el punto de vista de la eficiencia, `range` en Python 3 es un objeto de tipo secuencia que genera los números "on-demand" (evaluación perezosa), lo que optimiza el uso de la memoria RAM al no almacenar la lista completa de números en una iteración de gran escala.

![Imagen de for loop flow chart in python](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQlDekKKCwbbtWdvVkFkVm6T6vGMc0AvevSDOHU794xSnyz4nVwJ4XpeJby2Gz0hLNcs7ozy0eq8ki8lyHUKlsqohArKyh1rJQNXUOWu0RY0vHL3oc)

Shutterstock

Explorar

## Estructura repetitiva `for()` con `if` e `if` anidado

La integración de estructuras condicionales dentro de un bucle `for` permite la implementación de algoritmos de filtrado y toma de decisiones en tiempo de iteración.

- **Filtrado Simple:** Un `if` dentro de un `for` permite ejecutar operaciones solo en elementos que cumplen un criterio (ej. sumar solo números pares).
    
- **Anidamiento Lógico:** La inserción de `if` anidados dentro del bucle permite manejar múltiples estados de control. Esto es común en algoritmos de búsqueda donde, tras encontrar un elemento, se debe realizar una validación adicional antes de procesarlo.
    

Esta combinación es la base de la complejidad algorítmica. Si un bucle `for` tiene una complejidad $O(n)$, la adición de condicionales mantiene la complejidad lineal, pero aumenta la densidad lógica de la unidad de procesamiento.

## Contadores y sumadores

Son estructuras de acumulación de datos esenciales en cualquier proceso iterativo.

1. **Contadores:** Variables que se incrementan en un valor constante (generalmente 1) en cada iteración. Se utilizan para cuantificar ocurrencias.
    
    - Fórmula: $c = c + 1$ o de forma abreviada `c += 1`.
        
2. **Sumadores (Acumuladores):** Variables que acumulan valores variables en cada paso del bucle. Son fundamentales para el cálculo de totales, medias aritméticas y procesos de integración numérica.
    
    - Fórmula: $s = s + x_i$ o `s += valor_actual`.
        

Es un requisito técnico crítico inicializar estas variables (usualmente en 0 o 1, dependiendo de si la operación es aditiva o multiplicativa) fuera del cuerpo del bucle para evitar errores de referencia o reinicios indeseados del valor.

## Aplicaciones en funciones matemáticas: raíces, integrales, máximos y mínimos, longitud de curva, etc.

El bucle `for` es la herramienta base para la computación numérica cuando se requiere aproximar resultados de cálculo infinitesimal mediante métodos discretos.

- **Integración Numérica (Regla del Trapecio/Simpson):** Se divide el intervalo $[a, b]$ en $n$ subintervalos de ancho $\Delta x = \frac{b-a}{n}$. El bucle `for` suma las áreas de estos diferenciales para aproximar la integral definida:
    
    $$\int_{a}^{b} f(x) dx \approx \sum_{i=1}^{n} f(x_i) \Delta x$$
    
- **Máximos y Mínimos:** Mediante una estructura iterativa se comparan los valores de una función en un dominio discreto. Se utiliza un condicional dentro del `for` para actualizar una variable `max_val` si el valor actual es mayor al registrado.
    
- **Longitud de Curva:** Se aproxima mediante la suma de distancias euclidianas entre puntos infinitesimalmente cercanos sobre la función:
    
    $$L \approx \sum \sqrt{\Delta x^2 + \Delta y^2}$$
    

> [!example] foto
> 
> [Diagrama de la aproximación de una integral definida mediante la suma de Riemann, mostrando cómo un bucle iterativo suma los rectángulos bajo la curva para obtener el área total.]

## Cálculo de sumatorias de series infinitas en _n_ términos

Muchas funciones trascendentes (como $\sin(x)$, $e^x$, $\ln(x)$) se calculan en computación mediante series de potencias o series de Taylor. Dado que no se puede iterar hasta el infinito, se establece un límite $n$ de términos para alcanzar una precisión deseada.

La estructura para una sumatoria de la forma $S = \sum_{k=0}^{n} a_k$ se implementa como:

1. Inicializar `suma = 0`.
    
2. Bucle `for k in range(n + 1)`.
    
3. Calcular el término $k$-ésimo ($a_k$).
    
4. Acumular: `suma += a_k`.
    

Por ejemplo, para aproximar el número $e$:

$$e \approx \sum_{k=0}^{n} \frac{1}{k!}$$

Donde el bucle `for` gestiona tanto el cálculo del factorial como la acumulación de la serie. La precisión del resultado es directamente proporcional al número de iteraciones $n$, supeditada a los límites de precisión de punto flotante de la arquitectura del sistema.

> [!example] foto
> 
> [Gráfico que compara la convergencia de una serie de Taylor hacia la función original (por ejemplo, sen(x)) a medida que aumenta el número de términos n procesados por el bucle, ilustrando la reducción del error residual.]
