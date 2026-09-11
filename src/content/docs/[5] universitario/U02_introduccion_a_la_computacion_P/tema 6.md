---
title: Funciones
---
# 6. Funciones

## Tipos de parámetros: entrada y salida

En la arquitectura de software, una función se define como una unidad autónoma de código diseñada para realizar una tarea específica, encapsulando la lógica y promoviendo la reutilización. La comunicación entre la función y el resto del programa se gestiona a través de una interfaz de parámetros y valores de retorno.

### Parámetros de Entrada

Los parámetros (o argumentos) son las variables que la función recibe para procesar. En Python, el paso de parámetros se realiza mediante **paso por asignación** (objetos mutables vs. inmutables).

- **Parámetros Formales:** Son las variables definidas en la firma de la función: `def función(parámetro1, parámetro2):`.
    
- **Argumentos Reales:** Son los valores o variables que se pasan a la función durante la llamada: `función(valor1, valor2)`.
    

### Parámetros de Salida (Retorno)

La salida de una función es el resultado procesado que se devuelve al ámbito (_scope_) que realizó la llamada mediante la sentencia `return`. Una función puede devolver cualquier objeto, incluyendo tipos de datos compuestos o incluso otras funciones.

## Funciones sin entrada, una entrada, varias entradas, sin salida, una salida y varias salidas

La versatilidad de las funciones en Python permite diversas configuraciones estructurales dependiendo de la necesidad algorítmica:

1. **Sin entrada y sin salida:** Suelen utilizarse para procedimientos estáticos, como mostrar un encabezado o limpiar la consola.
    
2. **Una entrada y una salida:** Es el modelo matemático clásico $f(x) = y$. Por ejemplo, una función que recibe un radio y devuelve el área de un círculo.
    
3. **Varias entradas y una salida:** Funciones que procesan múltiples variables para retornar un único valor escalar o un objeto complejo (ej. calcular la hipotenusa $c = \sqrt{a^2 + b^2}$).
    
4. **Varias salidas:** En Python, esto se logra técnicamente devolviendo una **tupla**. La sintaxis `return a, b, c` permite que una función entregue múltiples resultados simultáneamente, los cuales pueden ser desempaquetados directamente por el llamador: `x, y, z = función()`.
    

> [!example] foto
> 
> [Cuadro comparativo que ilustra las diferentes firmas de funciones en Python, mostrando ejemplos de def con y sin parámetros, y el uso de return para uno o múltiples valores.]

## Desarrollo de programas de forma modular

El desarrollo modular es un paradigma de diseño que consiste en dividir un sistema complejo en partes más pequeñas denominadas módulos (en este caso, funciones y archivos independientes). Cada módulo es responsable de una única funcionalidad (Principio de Responsabilidad Única).

### Ventajas Técnicas de la Modularidad:

- **Abstracción:** El programador puede utilizar una función conociendo solo sus entradas y salidas, sin necesidad de entender su implementación interna.
    
- **Mantenibilidad:** Si un algoritmo requiere corrección, solo se modifica la función correspondiente sin afectar la estructura global del programa.
    
- **Reducción de la Redundancia:** Evita la duplicación de código mediante la invocación de funciones en diferentes puntos del flujo de ejecución.
    
- **Facilidad de Pruebas:** Permite realizar pruebas unitarias sobre componentes aislados para asegurar la integridad del software.
    

En Python, la modularidad se extiende al uso de archivos `.py` que pueden ser importados mediante la sentencia `import`, permitiendo organizar bibliotecas de funciones técnicas y científicas de manera jerárquica.

> [!example] foto
> 
> [Diagrama de arquitectura modular que muestra un "Script Principal" invocando funciones desde diferentes módulos especializados (Cálculos, E/S, Validaciones), ilustrando el flujo de control y la separación de responsabilidades.]
