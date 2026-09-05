---
title: CSS
---

# 1. Fundamentos del lenguaje

## 1.1 Sintaxis, reglas y selectores básicos

La hoja de estilo en cascada (CSS, _Cascading Style Sheets_) es un lenguaje de diseño declarativo que define la representación de documentos estructurados en HTML o XML. La unidad fundamental de CSS es la **regla**, compuesta por un **selector** y un **bloque de declaración**.

### La Regla CSS

Una regla se define mediante la siguiente estructura formal:

`selector { propiedad: valor; }`

- **Selector:** Cadena de texto que identifica los elementos del DOM (_Document Object Model_) a los que se aplicarán los estilos.
    
- **Declaración:** Par compuesto por una propiedad (atributo visual) y un valor (parámetro específico), separados por dos puntos y finalizados con un punto y coma.
    

### Selectores Básicos

Los selectores primarios permiten la selección de nodos basándose en la identidad, el tipo o la clasificación dentro del árbol del documento:

1. **Selector Universal (`*`):** Coincide con todos los elementos del documento. Se utiliza frecuentemente para reinicios de márgenes y rellenos (_resets_), aunque impacta en el rendimiento si se abusa de su especificidad global.
    
2. **Selector de Tipo (Etiqueta):** Selecciona elementos que comparten el mismo nombre de etiqueta HTML (p. ej., `h1`, `p`, `div`).
    
3. **Selector de Clase (`.nombre`):** Selecciona elementos que posean el atributo `class` coincidente. Es el mecanismo más utilizado por su reusabilidad y baja especificidad.
    
4. **Selector de ID (`#nombre`):** Selecciona un único elemento con el atributo `id` correspondiente. Debido a su alta especificidad y la restricción de unicidad en el DOM, su uso en estilizado se desaconseja en favor de las clases.
    
5. **Selector de Atributo:** Permite la selección basada en la presencia o el valor de un atributo específico (p. ej., `input[type="text"]`).
    

> [!example] foto
> 
> Un diagrama que muestre la anatomía de una regla CSS, señalando con flechas técnicas el selector, las llaves del bloque, la propiedad, los dos puntos, el valor y el punto y coma final.

---

## 1.2 Cascada, herencia y especificidad

El algoritmo de CSS determina qué valores de propiedad se aplican finalmente a un elemento cuando existen múltiples reglas en conflicto. Este proceso se rige por tres conceptos fundamentales.

### La Cascada

La cascada es el proceso de resolución de conflictos que sigue un orden de prioridad basado en:

1. **Origen de la hoja de estilo:** (Autor > Usuario > Navegador).
    
2. **Importancia:** Declaraciones marcadas con `!important`.
    
3. **Especificidad:** El "peso" de los selectores.
    
4. **Orden de aparición:** A igualdad de condiciones, la última regla declarada prevalece.
    

### Especificidad

La especificidad es una medida cuantitativa que el navegador calcula para cada regla. Se representa comúnmente como una tríada de valores $(A, B, C)$:

- **A:** Identificadores (`#id`).
    
- **B:** Clases, pseudo-clases y atributos.
    
- **C:** Elementos y pseudo-elementos.
    

La comparación se realiza de izquierda a derecha. Un solo ID tiene más peso que cualquier número de clases. Los estilos en línea (_inline styles_) poseen una jerarquía superior a cualquier selector externo, excepto frente a `!important`.

### Herencia

Ciertas propiedades se transmiten de los elementos padres a sus descendientes. Propiedades relacionadas con el texto (como `color`, `font-family`, `line-height`) suelen ser heredables, mientras que propiedades de estructura y caja (como `border`, `margin`, `padding`) no lo son por defecto. El valor `inherit` puede forzar la herencia en propiedades que no la poseen de forma nativa.

---

## 1.3 Unidades, valores y colores

En CSS, los valores determinan la magnitud y apariencia de las propiedades. Estos deben seguir una sintaxis rigurosa para ser interpretados correctamente por el motor de renderizado.

### Unidades de Medida

Se dividen en dos categorías principales:

1. **Unidades Absolutas:** Tienen una dimensión física fija.
    
    - `px` (Píxel): Unidad base en pantallas ($1px = 1/96$ de pulgada).
        
    - `cm`, `mm`, `in`: Utilizadas principalmente en hojas de estilo para impresión (`media print`).
        
2. **Unidades Relativas:** Se calculan en función de otro valor.
    
    - `em`: Relativa al tamaño de fuente del elemento actual.
        
    - `rem` (_Root em_): Relativa al tamaño de fuente del elemento raíz (`<html>`). Es fundamental para la accesibilidad.
        
    - `%`: Relativa al tamaño del contenedor padre.
        
    - `vw` / `vh`: Porcentaje del ancho y alto del _viewport_ (ventana gráfica).
        

### Representación del Color

El color se define mediante diversos modelos matemáticos:

- **Hexadecimal:** Representación en base 16 (`#RRGGBB` o `#RRGGBBAA`).
    
- **RGB / RGBA:** Define la intensidad de rojo, verde y azul en un rango $[0, 255]$. El canal _alpha_ $[0, 1]$ controla la opacidad.
    
- **HSL / HSLA:** Modelo basado en _Hue_ (Matiz, 0-360°), _Saturation_ (Saturación, 0-100%) y _Lightness_ (Luminosidad, 0-100%). Es más intuitivo para la manipulación programática de paletas.
    

---

## 1.4 Comentarios y organización del código

La mantenibilidad de una hoja de estilos depende de una estructura lógica y una documentación interna adecuada.

- **Sintaxis de Comentarios:** En CSS, los comentarios se delimitan únicamente por `/* comentario */`. No se admiten comentarios de una sola línea con `//` (característica propia de preprocesadores como Sass).
    
- **Arquitectura de Archivo:** Se recomienda el uso de secciones claramente delimitadas por comentarios de bloque para separar el _reset_, las variables globales, los componentes de interfaz y los ajustes de diseño responsivo.
    
- **Metodologías de Nomenclatura:** Aunque se profundizará en el tema 5, la organización requiere evitar nombres genéricos o dependientes del contenido (p. ej., usar `.btn-primary` en lugar de `.boton-azul`).
    

---

## 1.5 Inclusión: inline, interno y externo

Existen tres métodos para vincular reglas CSS con un documento HTML, cada uno con un nivel de prioridad y propósito distinto:

1. **Estilos Externos:** Uso de la etiqueta `<link rel="stylesheet" href="style.css">` dentro del `<head>`. Es el método estándar para producción, ya que permite la caché del navegador y la separación total de preocupaciones (_Separation of Concerns_).
    
2. **Estilos Internos:** Definidos dentro de un elemento `<style>` en el `<head>`. Útiles para estilos críticos de una sola página o demostraciones rápidas.
    
3. **Estilos Inline:** Aplicados directamente en el atributo `style` de una etiqueta HTML. Poseen la mayor especificidad pero rompen la mantenibilidad y el principio de reutilización, por lo que su uso debe ser excepcional (p. ej., para valores calculados dinámicamente mediante JavaScript).
  
# 3. Maquetación moderna

La maquetación moderna en CSS se aleja de las técnicas basadas en flotantes (_floats_) y tablas para adoptar sistemas diseñados específicamente para la distribución de espacio y el alineamiento de elementos en interfaces complejas y fluidas.

---

## 3.1 Flexbox: ejes, contenedor y elementos

El modelo de **Caja Flexible (Flexbox)** está diseñado para el diseño unidimensional, permitiendo que los elementos se expandan o contraigan para llenar el espacio disponible. Se basa en la relación jerárquica entre un **flex container** y sus **flex items**.

### Los Ejes de Flexbox

La disposición se rige por dos ejes perpendiculares:

1. **Eje Principal (Main Axis):** Definido por la propiedad `flex-direction`. Puede ser horizontal (`row`, `row-reverse`) o vertical (`column`, `column-reverse`).
    
2. **Eje Secundario (Cross Axis):** Es siempre perpendicular al eje principal.
    

### Propiedades del Contenedor

- **display: flex | inline-flex**: Activa el contexto de formato flexible.
    
- **flex-wrap**: Determina si los elementos deben saltar a una nueva línea (`wrap`) o forzarse en una sola (`nowhere`).
    
- **flex-flow**: Taquigrafía (_shorthand_) para `flex-direction` y `flex-wrap`.
    

### Propiedades de los Elementos (Items)

- **flex-grow**: Factor de crecimiento unitario que define cuánto espacio sobrante debe ocupar el item.
    
- **flex-shrink**: Factor de contracción que define cómo se reduce el item cuando el contenedor es más pequeño que la suma de sus hijos.
    
- **flex-basis**: Define el tamaño inicial del item antes de que se distribuyan los espacios (reemplaza conceptualmente a `width` o `height` según el eje).
    

---

## 3.2 Alineación y distribución en Flexbox

La potencia de Flexbox reside en su capacidad para alinear elementos sin cálculos manuales de márgenes:

- **justify-content**: Alinea los items a lo largo del **eje principal**. Valores comunes: `flex-start`, `center`, `space-between` (espacio máximo entre elementos), `space-around`.
    
- **align-items**: Alinea los items a lo largo del **eje secundario** para todas las líneas del contenedor.
    
- **align-self**: Permite a un item individual sobrescribir la alineación definida por `align-items` de su padre.
    
- **align-content**: Alinea las líneas de un contenedor flexible cuando hay espacio extra en el eje secundario (solo efectivo si hay múltiples líneas con `flex-wrap: wrap`).
    

---

## 3.3 Grid: contenedor, pistas y áreas

**CSS Grid Layout** es un sistema bidimensional (filas y columnas) que permite crear estructuras de diseño complejas que antes requerían _frameworks_ externos o marcado HTML redundante.

### Terminología de Grid

- **Grid Container**: El elemento donde se aplica `display: grid`.
    
- **Grid Line**: Las líneas divisorias que forman la estructura. Se numeran comenzando por 1.
    
- **Grid Track**: El espacio entre dos líneas adyacentes (una fila o una columna).
    
- **Grid Cell**: La unidad mínima de la cuadrícula, delimitada por cuatro líneas.
    
- **Grid Area**: Cualquier espacio rectangular compuesto por una o más celdas.
    

### Definición de Pistas

Se utilizan las propiedades `grid-template-columns` y `grid-template-rows`. Se introduce la unidad **fr (fractional unit)**, que representa una fracción del espacio libre en el contenedor:

$$1fr = \frac{\text{Espacio Disponible}}{\text{Suma Total de Fracciones}}$$

---

## 3.4 Alineación y posicionamiento en Grid

Al igual que Flexbox, Grid ofrece un control exhaustivo sobre el posicionamiento de sus elementos:

- **Grid-column / Grid-row**: Propiedades de los items para definir en qué línea empiezan y terminan (p. ej., `grid-column: 1 / 3` expande el elemento sobre dos columnas).
    
- **grid-template-areas**: Permite asignar nombres a celdas y referenciarlas para crear layouts visuales directamente en el código:
    
    CSS
    
    ```
    grid-template-areas: 
      "header header"
      "sidebar content"
      "footer footer";
    ```
    
- **gap (column-gap, row-gap)**: Define el espaciado entre pistas sin necesidad de márgenes en los elementos individuales.
    
- **Justify / Align (items/content)**: Funcionan de forma análoga a Flexbox, pero aplicados a las celdas y al contenido total de la cuadrícula en ambos ejes simultáneamente.
    

---

## 3.5 Layouts responsivos con media queries

El diseño responsivo (_Responsive Web Design_) adapta la interfaz a diferentes tamaños de pantalla mediante la regla at-rule `@media`.

### Sintaxis y Lógica

La sintaxis básica evalúa una condición de medios:

`@media screen and (min-width: 768px) { ... }`

- **Breakpoints (Puntos de interrupción)**: Valores de ancho de pantalla donde el diseño cambia significativamente.
    
- **Estrategia Mobile-First**: Se definen los estilos base para pantallas pequeñas y se utilizan `min-width` para añadir complejidad progresivamente. Esto optimiza el rendimiento y la carga de estilos en dispositivos móviles.
    
- **Funciones Lógicas**: Se pueden combinar condiciones usando `and`, `not`, y `only` para apuntar a capacidades específicas del dispositivo (como la resolución de pantalla o la orientación).
    

> [!example] foto
> 
> Un diagrama que ilustre cómo un layout de Grid cambia de una sola columna en móvil a una estructura de tres columnas en escritorio mediante el uso de Media Queries.

# 4. Estilos visuales y tipografía

Este bloque aborda la capa de presentación estética y dinámica de CSS, centrada en la legibilidad, la profundidad visual y la interactividad a través del movimiento.

---

## 4.1 Tipografías web y propiedades de texto

La gestión tipográfica en CSS ha evolucionado desde el uso exclusivo de fuentes del sistema hacia la integración de fuentes externas y el control tipográfico avanzado.

- **Fuentes Web (@font-face):** Permite cargar archivos de fuentes (WOFF2, WOFF) desde servidores propios o externos, garantizando la consistencia visual independientemente del sistema operativo.
    
- **Propiedades de Estilizado:**
    
    - `font-family`: Define una lista de prioridades de fuentes (_stack_), finalizando siempre con una familia genérica (`serif`, `sans-serif`, `monospace`).
        
    - `font-weight`: Define el grosor del glifo. Los valores numéricos (100 a 900) ofrecen mayor precisión que los términos `bold` o `normal`.
        
    - `line-height`: Establece la distancia entre líneas de texto. Se recomienda el uso de valores unitarios (p. ej., `1.5`) en lugar de píxeles para mantener la proporcionalidad en el escalado.
        
- **Propiedades de Alineación y Espaciado:**
    
    - `text-align`: Controla la distribución horizontal (`justify`, `center`, etc.).
        
    - `letter-spacing` y `word-spacing`: Ajustan el _kerning_ y el espacio entre palabras para optimizar la legibilidad en diferentes tamaños.
        
    - `text-transform`: Permite la normalización de mayúsculas/minúsculas sin alterar el contenido del DOM.
        

---

## 4.2 Fondos, gradientes e imágenes

El tratamiento de superficies y fondos permite generar profundidad visual sin recurrir a activos pesados.

- **Background-image:** Admite múltiples imágenes de fondo apiladas mediante una lista separada por comas. La primera imagen declarada se renderiza en la capa superior.
    
- **Gradientes:** Se consideran imágenes generadas algorítmicamente:
    
    - **Linear-gradients:** Definidos por un ángulo de dirección y paradas de color (_color-stops_).
        
        $$CSS: linear-gradient(direction, color1, color2)$$
        
    - **Radial-gradients:** Surgen de un punto central o focal, expandiéndose en forma circular o elíptica.
        
- **Propiedades de Ajuste:**
    
    - `background-size`: Valores como `cover` (ajuste para llenar) o `contain` (ajuste para mostrar íntegramente) son esenciales para el diseño responsivo.
        
    - `background-attachment`: `fixed` permite crear efectos de paralaje básicos donde el fondo permanece estático respecto al _viewport_.
        

---

## 4.3 Bordes, sombras y efectos visuales

La manipulación de la luz y la forma de la caja se realiza mediante propiedades de renderizado avanzado:

- **border-radius:** Permite redondear las esquinas de los elementos. El valor puede ser un porcentaje, donde `50%` en un elemento cuadrado genera un círculo perfecto.
    
- **box-shadow:** Define sombras exteriores o interiores (`inset`). Su sintaxis requiere cuatro parámetros principales más el color:
    
    `box-shadow: h-offset v-offset blur-radius spread-radius color;`
    
- **text-shadow:** Aplica efectos de sombra específicamente a los glifos de texto.
    
- **filter:** Permite aplicar efectos de post-procesamiento gráfico como `blur()`, `brightness()`, `grayscale()` o `drop-shadow()` directamente en el navegador.
    

> [!example] foto
> 
> Un diagrama comparativo que muestre la diferencia entre `box-shadow` (que aplica la sombra al borde de la caja) y `filter: drop-shadow()` (que aplica la sombra siguiendo el contorno real de un elemento con transparencia, como un PNG o un SVG).

---

## 4.4 Transformaciones 2D y 3D

La propiedad `transform` permite alterar la geometría del elemento sin afectar el flujo normal del documento (no provoca _reflow_, solo _repaint_ o composición de capas).

- **Funciones 2D:**
    
    - `translate(x, y)`: Desplazamiento posicional.
        
    - `scale(x, y)`: Modificación de la escala.
        
    - `rotate(angle)`: Rotación en el plano bidimensional.
        
    - `skew(x, y)`: Inclinación o sesgado de los ejes.
        
- **Funciones 3D:** Requieren que el contenedor padre tenga una propiedad `perspective` definida para crear un punto de fuga.
    
    - `rotateX()`, `rotateY()`: Rotaciones sobre los ejes que generan profundidad.
        
    - `translateZ()`: Desplazamiento hacia o desde el espectador.
        

---

## 4.5 Transiciones y animaciones CSS

CSS permite la interpolación de valores de propiedades a lo largo del tiempo.

### Transiciones (Transitions)

Se utilizan para cambios de estado simples (p. ej., `:hover`).

- `transition-property`: La propiedad que cambiará.
    
- `transition-duration`: Tiempo de ejecución.
    
- `transition-timing-function`: Curva de velocidad (Bézier), como `ease-in` o `linear`.
    

### Animaciones (Animations)

Permiten secuencias complejas sin necesidad de interacción externa, basadas en la regla `@keyframes`.

- **@keyframes:** Define estados intermedios mediante porcentajes ($0\%$ a $100\%$).
    
- **Propiedades de control:** `animation-iteration-count` (repeticiones), `animation-direction` (normal o reversa) y `animation-fill-mode` (determina el estado del elemento al finalizar la animación).

# 5. Arquitectura y buenas prácticas

La escalabilidad y el mantenimiento de sistemas de diseño complejos requieren una estructura organizada que trascienda la mera escritura de reglas. Este bloque analiza las metodologías y herramientas que transforman a CSS en una disciplina de ingeniería de software.

---

## 5.1 Metodologías de organización: BEM, OOCSS

Para evitar la colisión de nombres y la complejidad excesiva de la especificidad, se han desarrollado convenciones de nomenclatura y paradigmas estructurales:

- **BEM (Block, Element, Modifier):** Es una metodología de nomenclatura estricta que facilita la creación de componentes modulares.
    
    - **Block:** Entidad independiente que es significativa por sí misma (p. ej., `.menu`).
        
    - **Element:** Parte de un bloque que no tiene significado independiente y está vinculado semánticamente a su bloque (p. ej., `.menu__item`).
        
    - **Modifier:** Una bandera en un bloque o elemento para cambiar la apariencia o el comportamiento (p. ej., `.menu--hidden`).
        
- **OOCSS (Object Oriented CSS):** Se basa en dos principios:
    
    1. **Separación de la estructura de la piel:** El layout de un componente es independiente de su estilo visual (colores, bordes).
        
    2. **Separación del contenedor del contenido:** Los objetos deben lucir iguales independientemente de dónde se ubiquen en el DOM.
        

---

## 5.2 Variables CSS y funciones personalizadas

Las **Propiedades Personalizadas (Custom Properties)** permiten almacenar valores que pueden ser reutilizados en todo el documento, facilitando cambios globales y la implementación de temas (como el modo oscuro).

- **Declaración:** Se definen mediante el prefijo `--` y habitualmente se declaran en la pseudo-clase `:root` para tener un alcance global.
    
    $$:root \{ --color-primario: #3498db; \}$$
    
- **Uso:** Se invocan mediante la función `var(--nombre-variable)`.
    
- **Funciones Matemáticas:** CSS moderno permite realizar cálculos dinámicos:
    
    - `calc()`: Permite mezclar unidades (p. ej., `width: calc(100% - 20px);`).
        
    - `clamp()`: Establece un valor central con un límite mínimo y máximo definido.
        
    - `min()` y `max()`: Seleccionan el valor menor o mayor de una lista de argumentos.
        

---

## 5.3 Preprocesadores: Sass, Less conceptos

Los preprocesadores son herramientas que extienden las capacidades de CSS con características de lenguajes de programación, requiriendo un paso de compilación a CSS estándar.

- **Sass (Syntactically Awesome Style Sheets):** El más extendido actualmente.
    
    - **Anidamiento (Nesting):** Permite escribir selectores siguiendo la jerarquía del HTML.
        
    - **Mixins:** Bloques de código reutilizables que aceptan argumentos para generar estilos complejos dinámicamente.
        
    - **Partials:** Archivos fragmentados (p. ej., `_header.scss`) que se importan en un archivo principal para organizar el proyecto.
        
- **PostCSS:** A diferencia de los preprocesadores, PostCSS transforma el CSS ya escrito mediante plugins (p. ej., _Autoprefixer_ para añadir prefijos de compatibilidad de navegadores automáticamente).
    

---

## 5.4 Accesibilidad y diseño inclusivo

El CSS juega un rol crítico en la percepción del contenido por parte de usuarios con discapacidades.

- **Contraste de Color:** Es imperativo cumplir con los niveles de contraste definidos por la WCAG (Web Content Accessibility Guidelines) para asegurar que el texto sea legible.
    
- **Estados de Foco (Focus States):** Nunca debe eliminarse el `outline` de los elementos interactivos sin proporcionar una alternativa visual clara para usuarios que navegan mediante teclado.
    
- **Media Queries de Usuario:** CSS permite responder a preferencias del sistema operativo:
    
    - `prefers-reduced-motion`: Para usuarios que sufren de cinetosis o trastornos vestibulares.
        
    - `prefers-color-scheme`: Para detectar la preferencia de tema claro u oscuro.
        

---

## 5.5 Rendimiento y optimización de estilos

La velocidad de carga y renderizado se optimiza mediante la gestión eficiente del tamaño del archivo y el ciclo de vida del navegador.

- **Minificación:** Proceso de eliminar espacios en blanco, comentarios y caracteres innecesarios para reducir el peso del archivo `.css`.
    
- **CSS Crítico:** Técnica que consiste en extraer e insertar en el `<head>` del HTML solo los estilos necesarios para renderizar la parte superior de la página (_above the fold_), postergando la carga del resto.
    
- **Reducción de Reflows y Repaints:**
    
    - **Reflow:** Ocurre cuando se cambia la estructura geométrica del layout (p. ej., cambiar `width`). Es computacionalmente costoso.
        
    - **Repaint:** Ocurre al cambiar la apariencia sin alterar el layout (p. ej., cambiar `color`).
        
- **Propiedad `content-visibility`:** Permite al navegador omitir el renderizado de elementos que están fuera de la pantalla hasta que son necesarios, mejorando drásticamente el rendimiento en páginas extensas.
    

> [!example] foto
> 
> Un gráfico comparativo del proceso de renderizado del navegador (_Critical Rendering Path_), mostrando las etapas de construcción del DOM, CSSOM, Render Tree, Layout y Paint.

---

He finalizado el desarrollo exhaustivo de los cinco bloques del temario de CSS con el rigor académico solicitado. ¿Existe algún apartado que desee profundizar o necesita asistencia con otro tema técnico?