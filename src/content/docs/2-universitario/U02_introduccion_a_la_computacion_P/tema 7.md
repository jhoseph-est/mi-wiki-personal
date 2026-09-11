---
title: Arreglos
---
# 7. Arreglos

## Arreglo de una dimensión

Un arreglo unidimensional, comúnmente denominado **vector**, es una estructura de datos lineal que almacena una colección de elementos bajo un único nombre de variable. En el contexto de Python puro, esta funcionalidad se implementa mediante el tipo de dato `list`, aunque técnicamente las listas de Python son arreglos dinámicos que pueden contener tipos de datos heterogéneos.

Desde una perspectiva de bajo nivel, un arreglo de una dimensión representa un bloque contiguo de memoria. La ubicación de cualquier elemento se calcula mediante una función de direccionamiento simple:

$$\text{Dirección}(i) = \text{Base} + i \times \text{tamaño\_elemento}$$

Donde:

- **Base:** Es la dirección de memoria del primer elemento (índice 0).
    
- **$i$:** Es el índice del elemento deseado.
    
- **tamaño_elemento:** Es la cantidad de bytes que ocupa el tipo de dato.
    

Esta estructura permite un **acceso aleatorio** con una complejidad temporal de $O(1)$, lo que significa que el tiempo para acceder al primer elemento es idéntico al necesario para acceder al millonésimo.

## Aplicaciones: búsqueda, ordenamiento, adición, eliminación, vectores paralelos, etc.

La manipulación de arreglos unidimensionales constituye la base de la algoritmia clásica.

- **Búsqueda:**
    
    - _Lineal:_ Recorre el arreglo de principio a fin ($O(n)$).
        
    - _Binaria:_ Requiere que el arreglo esté ordenado. Divide el espacio de búsqueda a la mitad en cada iteración ($O(\log n)$).
        
- **Ordenamiento:** Procesos para organizar elementos bajo un criterio (ascendente/descendente). Algoritmos comunes incluyen _Bubble Sort_ ($O(n^2)$), _Insertion Sort_, y los más eficientes como _QuickSort_ o _MergeSort_ ($O(n \log n)$).
    
- **Adición y Eliminación:** En arreglos de tamaño fijo, estas operaciones requieren el desplazamiento de elementos. Insertar un dato en la posición $i$ obliga a desplazar todos los elementos posteriores una posición hacia la derecha.
    
- **Vectores Paralelos:** Es una técnica de diseño donde dos o más arreglos de igual longitud mantienen una relación lógica a través de sus índices. Por ejemplo, un arreglo `nombres[i]` y otro `calificaciones[i]` donde el índice $i$ vincula ambos datos sin necesidad de una estructura de objeto compleja.
    

> [!example] foto
> 
> [Infografía que muestra el proceso de una búsqueda binaria en un arreglo ordenado, destacando los punteros 'low', 'mid' y 'high' y cómo se descarta la mitad de los elementos en cada paso.]

## Arreglo de dos dimensiones

Un arreglo bidimensional, o **matriz**, es una estructura de datos organizada en filas ($m$) y columnas ($n$). Se puede conceptualizar como un "arreglo de arreglos", donde cada elemento de la estructura principal es, a su vez, otro vector.

La notación matemática estándar para un elemento es $A_{i,j}$, donde $i$ representa la fila y $j$ la columna. En Python, el acceso se realiza mediante la sintaxis `matriz[i][j]`.

La disposición en memoria puede ser:

1. **Row-major order (Orden por filas):** Los elementos de la primera fila se almacenan seguidos, luego la segunda, y así sucesivamente.
    
2. **Column-major order (Orden por columnas):** Se almacenan por columnas completas.
    

Para una matriz de tamaño $M \times N$, la dirección de un elemento $(i, j)$ en un esquema de almacenamiento por filas se calcula como:

$$\text{Posición} = (i \times N) + j$$

## Aplicaciones: juegos

En el desarrollo de videojuegos y simulaciones, los arreglos bidimensionales son fundamentales para la representación espacial y lógica.

- **Mapas de Tiles (Mosaicos):** Representación de entornos 2D. Cada número en la matriz corresponde a un tipo de terreno (0 = suelo, 1 = muro, 2 = agua). El motor gráfico recorre la matriz para renderizar las texturas correspondientes.
    
- **Tableros Lógicos:** Juegos como el ajedrez, buscaminas o el tres en raya (tic-tac-toe) utilizan matrices para validar estados de victoria y colisiones.
    
- **Sistemas de Partículas y Rejillas de Colisión:** Para optimizar la detección de colisiones en juegos complejos, se divide el espacio en una rejilla bidimensional. Solo se comprueban las colisiones entre objetos que comparten la misma celda (o adyacentes) en el arreglo.
    
- **Procesamiento de Imágenes:** Una imagen digital es, técnicamente, una matriz de píxeles donde cada celda contiene información de color (valores RGB).
    

> [!example] foto
> 
> [Diagrama que muestra la traducción de una matriz numérica (ej. 0s y 1s) a un nivel de videojuego visual, donde el arreglo bidimensional define la disposición de obstáculos y caminos para un personaje.]
