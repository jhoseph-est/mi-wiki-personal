---
title: Secciones y cortes
---
# 1. Secciones y cortes

## Prueba de entrada e introducción al curso.

La representación de objetos tridimensionales en un plano bidimensional mediante proyecciones ortogonales presenta limitaciones cuando la complejidad interna de la pieza es elevada. La acumulación de líneas ocultas (trazos discontinuos) dificulta la interpretación de cavidades, espesores de pared y detalles morfológicos internos, comprometiendo la precisión en los procesos de fabricación y control de calidad.

El estudio de **secciones y cortes** se fundamenta en la aplicación de un plano secante imaginario que intercepta el objeto, permitiendo visualizar su estructura interna como si este hubiera sido fragmentado. Esta técnica no solo clarifica la geometría, sino que es indispensable para la acotación de detalles que, de otro modo, quedarían supeditados a líneas no visibles, práctica prohibida por la normativa técnica internacional (**ISO 128-3**). La introducción al curso establece la transición de la visualización externa hacia la comprensión de la volumetría interna mediante convenciones normalizadas.

## Definición, rayado de sección, partes que no se seccionan.

### Definición

Un **corte** es la representación de la parte de una pieza que queda después de haber sido imaginariamente dividida por un plano secante, eliminando la porción situada entre el observador y dicho plano. Una **sección**, en sentido estricto, representa exclusivamente la intersección del plano de corte con el material de la pieza, omitiendo los contornos posteriores visibles.

### Rayado de sección (Hachurado)

El rayado se utiliza para resaltar las superficies donde el plano de corte ha impactado el material sólido. Se rige por las siguientes normas:

- **Ángulo:** Generalmente a $45^{\circ}$ respecto a los ejes principales o líneas de contorno de la pieza.
    
- **Espaciado:** Debe ser uniforme y proporcional al tamaño de la superficie seccionada, típicamente entre $1.5\text{ mm}$ y $3\text{ mm}$.
    
- **Continuidad:** En una misma pieza, el rayado debe mantener la misma inclinación y separación en todas sus vistas seccionadas.
    
- **Interrupciones:** El rayado no debe atravesar cotas o inscripciones. Si una cota debe situarse dentro de una zona rayada, se debe interrumpir el hachurado alrededor de los caracteres.
    

### Partes que no se seccionan

Existen elementos mecánicos que, por convención y para evitar interpretaciones erróneas de la solidez de la pieza, no deben ser rayados aunque el plano de corte los atraviese longitudinalmente. Estos incluyen:

1. **Elementos de unión:** Pernos, tuercas, arandelas, remaches y pasadores.
2. **Elementos de transmisión y soporte:** Ejes (árboles), radios de volantes o poleas, y nervios (refuerzos).
3. **Elementos de rodadura:** Bolas y rodillos de cojinetes.
4. **Dientes de engranaje:** Se representan de forma simplificada sin seccionar el diente individual.

> [!example] foto
> 
> [Diagrama técnico que muestra un conjunto mecánico con un eje, un perno y un nervio de refuerzo atravesados por un plano de corte. La imagen debe destacar que el cuerpo principal está rayado a 45°, mientras que el eje, el perno y el nervio permanecen sin hachurado, ilustrando las excepciones de seccionado longitudinal].

## Clasificación de secciones: total, girada, proyectada, desplazada.

### Sección total

Corresponde a la representación de la superficie de contacto generada por un plano que atraviesa la pieza de extremo a extremo. Es la forma más básica de visualización de la superficie de corte.

### Sección girada (Abatida)

Se obtiene girando el plano de la sección $90^{\circ}$ sobre su eje de simetría hasta hacerlo coincidir con el plano del dibujo, superponiéndola a la vista normal. El contorno de la sección girada se dibuja con línea fina continua. Es extremadamente útil para indicar la forma de la sección transversal de barras, brazos o nervios sin necesidad de crear una vista adicional.

### Sección proyectada

Es una variante donde la sección, tras ser abatida, se desplaza fuera del contorno de la pieza a lo largo de la línea de eje. Mantiene la alineación con la ubicación original del corte, facilitando la interpretación sin obstruir el detalle de la vista principal.

### Sección desplazada

Se utiliza cuando la complejidad del dibujo o la falta de espacio impiden colocar la sección sobre la vista o en su proyección inmediata. La sección se traslada a una zona libre del plano, identificándola mediante letras mayúsculas (ej. Sección A-A) y manteniendo una escala que puede ser distinta a la de la pieza principal para resaltar detalles mínimos.

## Clasificación de cortes: total, medio corte, alineado, por planos paralelos, parcial.

### Corte total

Producido por un único plano que atraviesa completamente la pieza. Se utiliza en objetos con simetría interna o configuraciones lineales simples.

### Medio corte (Corte a un cuarto)

Aplicable exclusivamente a piezas simétricas. Consiste en eliminar una cuarta parte de la pieza, de modo que la vista resultante muestra, simultáneamente, la mitad de la estructura interna (seccionada) y la mitad de la apariencia externa. Una línea de eje separa ambas representaciones en lugar de una línea de contorno sólido.

### Corte alineado

Se emplea en piezas que poseen elementos de detalle (como agujeros o radios) situados en planos que forman un ángulo entre sí. El plano de corte se "quiebra" para pasar por estos elementos y luego se gira imaginariamente hasta que coincida con un plano paralelo al de proyección. Esto evita la deformación por escorzo que ocurriría en una proyección ortogonal estándar.

### Corte por planos paralelos (Corte escalonado)

Se utiliza para mostrar diversos detalles internos que no están alineados en un solo plano. El plano secante realiza desplazamientos paralelos (escalones) para interceptar todas las cavidades de interés. En la representación final, las transiciones entre los planos paralelos no se dibujan; el corte aparece como una superficie continua.

### Corte parcial (Rotura)

No requiere un plano de corte que atraviese toda la pieza. Se delimita mediante una línea de rotura a mano alzada (fina) y se aplica solo en una zona específica para revelar un detalle interno puntual, como un agujero ciego o un chavetero, optimizando el tiempo de dibujo y manteniendo la integridad del resto de la vista externa.

## Ejemplos con piezas industriales.

El análisis de piezas industriales reales permite consolidar la aplicación de los criterios anteriores:

1. **Bloque de cilindros (Motor):** Requiere **cortes por planos paralelos** para visualizar simultáneamente las camisas de los cilindros, los conductos de refrigeración y los pasos de lubricación, elementos que no coexisten en un mismo plano axial.
2. **Poleas y Volantes de inercia:** Se benefician de las **secciones giradas** en sus radios para especificar si tienen una geometría elíptica, circular o en "I", y de **cortes totales** en el eje central que, sin embargo, dejan los radios sin seccionar.
3. **Carcasas de bombas centrífugas:** Debido a su asimetría interna y la presencia de álabes, suelen representarse mediante **cortes alineados** para proyectar la verdadera magnitud de los canales de flujo.

> [!example] foto
> 
> [Vista explosionada o en corte de una carcasa de bomba industrial donde se aprecie un corte escalonado atravesando el rodete y los alojamientos de los rodamientos. Debe incluir la señalización del plano de corte A-B-C-D y la vista de sección resultante con el rayado normado].
