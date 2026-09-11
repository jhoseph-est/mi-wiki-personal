---
title: tema 4
---

# 4. Intersección y desarrollo de poliedros y superficies

## Intersección de poliedros

### Tipos de intersecciones y sistema de numeración

Las intersecciones se clasifican en **mordedura** (entrada y salida por la misma cara o caras adyacentes) y **penetración** (el sólido atraviesa completamente al otro). El sistema de numeración asigna dígitos a los vértices del poliedro penetrante y letras o números con primas a los puntos de intersección en las aristas del poliedro base para rastrear la visibilidad.

### Intersección de recta con poliedro: prisma y pirámide

Se utiliza el método del **plano cortante** que contiene a la recta. La intersección de este plano con las caras del poliedro genera un polígono de sección; los puntos donde la recta original corta los lados de este polígono son los puntos de entrada y salida.

### Intersección entre plano y poliedro

La sección resultante es un polígono cuyos vértices se encuentran en las aristas del poliedro que son cortadas por el plano. Si el plano es oblicuo, se traslada a una vista auxiliar donde se proyecte **de canto** para identificar directamente los puntos de cruce sobre las aristas.

### Intersección de dos prismas, pirámide y prisma

Se determinan los puntos donde las aristas de un sólido penetran las caras del otro. El contorno de la intersección es una línea quebrada cerrada (o dos, en caso de penetración total) compuesta por los segmentos que unen dichos puntos de penetración.

### Método del plano cortante

Consiste en pasar planos auxiliares (generalmente horizontales o frontales) que corten a ambos sólidos simultáneamente. Las secciones producidas por estos planos en ambos poliedros se intersecan entre sí, revelando puntos pertenecientes a la línea de intersección común.

---

## Desarrollo

### Método radial

Se aplica a sólidos cuyas aristas o generatrices convergen en un punto común (vértice).

- **Pirámide y cono rectos:** Las aristas laterales son iguales; el desarrollo es un sector circular o serie de triángulos isósceles.
    
- **Pirámide y cono oblicuos:** Requiere hallar la **Verdadera Magnitud (VM)** de cada arista o generatriz mediante rotación o vistas auxiliares antes de trasladarlas al plano.
    

### Método de líneas paralelas

Se utiliza para sólidos de sección constante (prismas y cilindros).

- **Cilindro recto:** El desarrollo es un rectángulo de base $L = \pi \cdot D$ y altura $H$.
    
- **Prisma y cilindro oblicuo truncado:** Se traza una **sección recta** (perpendicular a las aristas/generatrices). La longitud de esta sección extendida actúa como línea de base (desarrollo de la "piel" del sólido).
    

### Método por triangulación

Técnica para superficies de curvatura compuesta o poliedros irregulares. La superficie se descompone en una serie de triángulos cuyas aristas se calculan en $VM$. El desarrollo se construye ensamblando estos triángulos de forma adyacente.

### Desarrollo de piezas de transición o adaptadores

Utilizado para conectar ductos de diferentes secciones (ej. de circular a cuadrada). Se emplean métodos combinados: las caras planas se desarrollan por verdadera magnitud y las esquinas redondeadas se tratan como porciones de conos oblicuos mediante triangulación.

### Desarrollo de intersecciones entre poliedros y superficies en posiciones particulares

Para desarrollar un sólido con un orificio de intersección, primero se halla la línea de intersección en las vistas principales. Luego, al extender el desarrollo (paralelo o radial), se trasladan las distancias desde una arista de referencia y las alturas reales de cada punto de la intersección.

---

**Lista de variables:**

- $VM$: Verdadera Magnitud.
    
- $L$: Longitud de la circunferencia o perímetro de la sección recta.
    
- $D$: Diámetro de la base circular.
    
- $H$: Altura del sólido.
    
- $\pi$: Constante circular ($\approx 3.1416$).
    

¿Deseas que profundice en el cálculo de Verdaderas Magnitudes para la triangulación o prefieres pasar a un ejemplo práctico de ensamblaje industrial?