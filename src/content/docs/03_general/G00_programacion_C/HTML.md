---
title: HTML
---

# HTML

## 1. Fundamentos del lenguaje

### 1.1 Historia y evolución de HTML

El **HyperText Markup Language (HTML)** constituye el estándar fundamental para la estructuración de documentos en la World Wide Web. Su origen se remonta a 1989, cuando **Tim Berners-Lee**, científico del CERN, propuso un sistema de hipertexto basado en Internet para compartir información entre investigadores.

- **HTML 1.0 (1991):** La versión inaugural contenía apenas 18 etiquetas básicas, muchas de ellas derivadas del estándar **SGML** (_Standard Generalized Markup Language_). Carecía de capacidades para tablas o formularios complejos.
    
- **HTML 2.0 (1995):** Se estableció como el primer estándar oficial mediante el RFC 1866. Introdujo el soporte para formularios y capacidades interactivas rudimentarias.
    
- **HTML 3.2 (1997):** Publicado como Recomendación del W3C, permitió la inclusión de tablas, applets de Java y el flujo de texto alrededor de las imágenes, marcando la transición hacia un diseño visual más controlado.
    
- **HTML 4.01 (1999):** Representó una etapa de madurez, separando la estructura del contenido de la presentación visual mediante la promoción del uso de **CSS** (_Cascading Style Sheets_). Introdujo tres variantes: _Strict_, _Transitional_ y _Frameset_.
    
- **XHTML 1.0 (2000):** Una reformulación de HTML 4.01 bajo las reglas estrictas de XML. Exigía el cierre obligatorio de todas las etiquetas y el uso de minúsculas, buscando una interoperabilidad técnica superior.
    
- **HTML5 (2014):** La evolución más disruptiva, desarrollada conjuntamente por el W3C y el WHATWG. Introdujo etiquetas semánticas nativas (`<article>`, `<section>`), soporte multimedia directo (`<video>`, `<audio>`), y una serie de APIs para aplicaciones web complejas (Canvas, Web Storage, Geolocation).
    

### 1.2 Estructura básica de documento

Todo documento HTML5 debe seguir una jerarquía estricta para garantizar que el motor de renderizado del navegador (_browser engine_) interprete el contenido en modo estándar y no en modo de compatibilidad (_quirks mode_).

1. **Doctype Declaration:** `<!DOCTYPE html>` es la instrucción inicial que indica al navegador que el documento sigue la especificación HTML5. No es una etiqueta, sino una declaración de tipo de documento.
    
2. **Elemento Raíz:** La etiqueta `<html>` envuelve todo el contenido. Suele incluir el atributo `lang` para definir el idioma principal, facilitando la accesibilidad y el indexado SEO.
    
3. **Cabecera (`<head>`):** Contiene metadatos, enlaces a hojas de estilo, scripts y el título del documento. Esta sección no se renderiza visualmente en la ventana del navegador, a excepción del elemento `<title>`.
    
4. **Cuerpo (`<body>`):** Contiene la totalidad del contenido visible para el usuario (texto, imágenes, componentes interactivos).
    

> [!example] foto
> 
> Diagrama de bloques que represente la anatomía de un documento HTML. Debe mostrar el contenedor global `<html>` dividido en dos grandes bloques: `<head>` (con metadatos y recursos) y `<body>` (con la jerarquía visual del contenido).

### 1.3 Sintaxis y buenas prácticas

La sintaxis de HTML se basa en el uso de etiquetas encerradas en corchetes angulares. La mayoría de los elementos constan de una etiqueta de apertura y una de cierre, aunque existen excepciones.

- **Elementos Vacíos (Void Elements):** Son aquellos que no contienen texto ni otros elementos hijos y, por tanto, no requieren etiqueta de cierre. Ejemplos: `<img>`, `<br>`, `<hr>`, `<meta>`.
    
- **Sensibilidad a Mayúsculas:** Aunque HTML no distingue entre mayúsculas y minúsculas (`<DIV>` es funcionalmente igual a `<div>`), el estándar académico y profesional dicta el uso exclusivo de **minúsculas** para mejorar la legibilidad y compatibilidad con XHTML.
    
- **Comentarios:** Se delimitan mediante ``. Son esenciales para la documentación técnica del código, pero no deben exponer información sensible, ya que son visibles en el código fuente del cliente.
    
- **Indentación:** El uso de sangría (generalmente 2 o 4 espacios) es crítico para reflejar la jerarquía del DOM (_Document Object Model_) y facilitar el mantenimiento del software.
    

### 1.4 Etiquetas, elementos y atributos

Es imperativo distinguir entre estos tres conceptos fundamentales:

1. **Etiqueta (Tag):** Los delimitadores `<tagname>` y `</tagname>`.
    
2. **Elemento:** El conjunto completo que comprende la etiqueta de apertura, el contenido y la etiqueta de cierre.
    
3. **Atributo:** Propiedades adicionales definidas dentro de la etiqueta de apertura que modifican el comportamiento o proporcionan información extra. Siguen el formato `nombre="valor"`.
    

**Atributos Globales Comunes:**

- `id`: Identificador único en todo el documento para fines de estilos CSS o manipulación vía JavaScript.
    
- `class`: Identificador no único que permite agrupar múltiples elementos bajo una misma regla de estilo.
    
- `title`: Proporciona información adicional en forma de _tooltip_ al posicionar el cursor sobre el elemento.
    
- `style`: Permite la inclusión de declaraciones CSS en línea (desaconsejado para escalabilidad).
    

### 1.5 Anidamiento y jerarquía DOM

El navegador procesa el código HTML para construir el **Document Object Model (DOM)**, una estructura de árbol donde cada elemento es un nodo.

- **Reglas de Anidamiento:** Un elemento debe cerrarse antes de que se cierre su elemento padre. Un anidamiento incorrecto (ej. `<div><p></div></p>`) obliga al navegador a realizar una corrección de errores automática que puede derivar en fallos de renderizado.
    
- **Relaciones Parentales:**
    
    - **Padre (Parent):** El elemento que contiene a otro.
        
    - **Hijo (Child):** El elemento contenido directamente por otro.
        
    - **Hermano (Sibling):** Elementos que comparten el mismo padre.
        
- **Categorías de Contenido:** HTML define qué elementos pueden ser hijos de otros. Por ejemplo, un elemento de bloque como `<div>` puede contener otros bloques o elementos en línea (`<span>`), pero un elemento en línea no debe contener elementos de bloque según las especificaciones estrictas.
    

---

## 2. Estructura y semántica del contenido

### 2.1 Etiquetas semánticas principales

La semántica en HTML se refiere al uso de etiquetas que describen el significado de su contenido tanto para el desarrollador como para el navegador y las tecnologías asistivas (lectores de pantalla).

- `<main>`: Define el contenido principal y único del `<body>`. Solo debe haber uno por documento.
    
- `<header>`: Contenedor para contenido introductorio o conjunto de enlaces de navegación.
    
- `<footer>`: Representa el pie de página de un documento o sección, conteniendo información de autoría, copyright o datos de contacto.
    
- `<nav>`: Bloque destinado exclusivamente a los enlaces de navegación del sitio.
    

### 2.2 Encabezados y organización del contenido

Los encabezados establecen la jerarquía de la información y son cruciales para el SEO y la accesibilidad. Se definen desde `<h1>` hasta `<h6>`.

- **`<h1>`**: Representa el título de mayor nivel o el tema principal del documento. Se recomienda un único `<h1>` por página.
    
- **Subniveles (`<h2>`-`<h6>`)**: Deben seguir un orden lógico. No se debe saltar niveles (ej. pasar de `<h1>` a `<h3>`) por razones puramente estéticas; el estilo debe manejarse con CSS.
    

### 2.3 Párrafos, citas y texto enriquecido

- **`<p>`**: Define un bloque de texto. Los navegadores añaden automáticamente un margen superior e inferior.
    
- **`<blockquote>`**: Utilizado para citas extensas de otras fuentes. Suele incluir el atributo `cite` con la URL de origen.
    
- **`<q>`**: Para citas cortas en línea; el navegador suele insertar comillas automáticamente.
    
- **`<strong>` y `<em>`**: Representan énfasis fuerte (negrita) y énfasis semántico (itálica) respectivamente. A diferencia de `<b>` e `<i>`, estas etiquetas aportan valor semántico sobre la importancia del texto.
    

### 2.4 Listas ordenadas y no ordenadas

HTML proporciona estructuras específicas para agrupar elementos relacionados:

1. **Listas No Ordenadas (`<ul>`):** Los elementos se presentan con viñetas. Se utilizan cuando el orden de los factores no altera el sentido de la información.
    
2. **Listas Ordenadas (`<ol>`):** Los elementos se presentan numerados. Ideales para secuencias lógicas o pasos de un proceso.
    
3. **Elementos de Lista (`<li>`):** Es el único hijo directo permitido dentro de `<ul>` o `<ol>`.


## 3. Enlaces y recursos externos

### 3.1 Hipervínculos internos y externos

El elemento ancla `<a>` (_anchor_) es el componente fundamental que permite la arquitectura de hipertexto. Su funcionamiento se basa en el atributo `href` (_hypertext reference_), que especifica el destino del enlace.

- **Enlaces Externos:** Apuntan a dominios fuera del sitio web actual. Es una práctica de seguridad recomendada incluir los atributos `target="_blank"` y `rel="noopener noreferrer"` para evitar ataques de _tabnabbing_ y mejorar el rendimiento al abrir el recurso en una nueva pestaña.
    
- **Enlaces Internos (Anclas de página):** Permiten la navegación dentro del mismo documento. Se activan referenciando el atributo `id` de un elemento destino mediante el prefijo `#` (ej. `<a href="#seccion1">`).
    
- **Protocolos Especiales:** El atributo `href` admite esquemas como `mailto:` para clientes de correo electrónico y `tel:` para marcado telefónico, integrando capacidades del sistema operativo del cliente.
    

### 3.2 Rutas absolutas y relativas

La referencia a recursos externos e internos se gestiona mediante dos sistemas de direccionamiento:

1. **Rutas Absolutas:** Contienen la URL completa, incluyendo el protocolo (HTTPS), el subdominio, el dominio y la extensión (ej. `https://www.ejemplo.com/assets/img/logo.png`). Son necesarias para recursos alojados en servidores externos.
    
2. **Rutas Relativas:** Se definen en relación con la ubicación del archivo HTML actual en el sistema de archivos del servidor.
    
    - `./`: Referencia al directorio actual.
        
    - `../`: Permite ascender un nivel en la jerarquía de directorios.
        
    - `/`: Referencia a la raíz del sitio web.
        

### 3.3 Inserción de imágenes

El elemento `<img>` es un componente de tipo _void_ (vacío) que incrusta contenido gráfico de forma síncrona o asíncrona.

- **Atributo `src`:** Define la ruta del archivo de imagen.
    
- **Atributo `alt` (Texto Alternativo):** Es estrictamente obligatorio por estándares de accesibilidad (WCAG) y SEO. Describe el contenido de la imagen para lectores de pantalla y se muestra si el recurso no carga.
    
- **Atributos de Dimensión:** `width` y `height` permiten reservar el espacio en el _layout_ antes de la descarga del recurso, mitigando el _Cumulative Layout Shift_ (CLS).
    

> [!example] foto
> 
> Diagrama que ilustre el flujo de carga de una imagen: desde la petición del navegador basada en el atributo `src`, hasta el renderizado en el DOM, destacando la importancia del atributo `alt` como nodo de texto de respaldo.

### 3.4 Audio y video embebido

HTML5 introdujo los elementos `<audio>` y `<video>`, eliminando la dependencia de complementos externos como Adobe Flash.

- **Atributos de Control:** `controls` (interfaz nativa de reproducción), `autoplay` (inicio automático, generalmente bloqueado por navegadores si hay audio), `loop` (repetición infinita) y `muted`.
    
- **Elemento `<source>`:** Permite especificar múltiples formatos (MP4, WebM, Ogg) para asegurar la compatibilidad entre navegadores mediante la técnica de _fallback_.
    
- **Atributo `poster`:** Exclusivo de `<video>`, define una imagen que se muestra mientras el video se descarga o hasta que el usuario inicia la reproducción.
    

### 3.5 Iframes e integración externa

El elemento `<iframe>` (_inline frame_) permite la inserción de un contexto de navegación completo (otro documento HTML) dentro de la página actual.

- **Seguridad y Aislamiento:** El atributo `sandbox` es crítico; permite restringir las acciones del contenido embebido (ejecución de scripts, envío de formularios, apertura de ventanas emergentes).
    
- **Atributo `loading="lazy"`:** Optimiza el rendimiento al diferir la carga del iframe hasta que se encuentra cerca del _viewport_ del usuario.
    

---

## 4. Formularios e interacción básica

### 4.1 Estructura de formularios HTML

El elemento `<form>` actúa como un contenedor para los controles interactivos. Se define principalmente por dos atributos:

- **`action`:** Especifica la URL del servidor que procesará los datos enviados.
    
- **`method`:** Define el método HTTP de envío. `GET` (datos en la URL, para búsquedas) o `POST` (datos en el cuerpo de la petición, para información sensible o extensa).
    

### 4.2 Tipos de campos de entrada

El elemento `<input>` es versátil y su comportamiento varía drásticamente según el atributo `type`:

- **`text` / `password`:** Entrada de texto plano y texto oculto.
    
- **`email` / `url` / `tel`:** Variantes con validación de formato semántico integrada en el navegador.
    
- **`checkbox` / `radio`:** Selección múltiple o de opción única (agrupados por el atributo `name`).
    
- **`number` / `range`:** Entradas numéricas con límites definidos por los atributos `min` y `max`.
    

### 4.3 Etiquetas label y accesibilidad

El elemento `<label>` vincula semánticamente un título con un control de formulario.

- **Vinculación:** Se realiza mediante el atributo `for` en la etiqueta `<label>`, el cual debe coincidir con el `id` del control asociado.
    
- **Beneficios:** Aumenta el área de clic (mejorando la experiencia en dispositivos móviles) y proporciona el contexto necesario a los lectores de pantalla para que el usuario sepa qué información se le solicita.
    

### 4.4 Validación nativa de formularios

HTML5 permite realizar validaciones en el lado del cliente sin necesidad de JavaScript, mediante atributos específicos:

- **`required`:** Impide el envío si el campo está vacío.
    
- **`pattern`:** Permite definir una Expresión Regular (**Regex**) que el valor de entrada debe cumplir.
    
- **`minlength` / `maxlength`:** Controla la extensión de la cadena de caracteres.
    

### 4.5 Botones y envío de datos

El elemento `<button>` define la acción final del formulario. Posee tres tipos principales (`type`):

1. **`submit`:** Envía los datos del formulario al servidor (comportamiento por defecto).
    
2. **`reset`:** Restablece todos los campos a sus valores iniciales.
    
3. **`button`:** No tiene acción por defecto; se utiliza para ser programado externamente con JavaScript.
    

### 4.6 Agrupación y organización de campos

Para formularios complejos, se emplean etiquetas estructurales que mejoran la semántica y la usabilidad:

- **`<fieldset>`:** Agrupa lógicamente un conjunto de controles relacionados.
    
- **`<legend>`:** Proporciona un título o descripción para el grupo definido por `<fieldset>`.
    

> [!example] foto
> 
> Representación de un formulario complejo organizado con `<fieldset>` y `<legend>`, mostrando visualmente cómo se agrupan campos como "Información Personal" e "Información de Envío".


## 5. Integración y buenas prácticas modernas

### 5.1 Relación HTML con CSS

La separación de preocupaciones (_Separation of Concerns_) dicta que HTML debe encargarse exclusivamente de la estructura y la semántica, delegando la presentación visual a las **Hojas de Estilo en Cascada (CSS)**.

- **Vinculación Externa:** El método estándar es el uso del elemento `<link>` dentro del `<head>`, con los atributos `rel="stylesheet"` y `href` apuntando al archivo `.css`. Esta técnica optimiza el rendimiento mediante el aprovechamiento del caché del navegador.
    
- **Estilos en Bloque (`<style>`):** Permite incluir reglas CSS dentro del propio documento HTML. Se utiliza principalmente para "Critical CSS" (estilos necesarios para el renderizado inicial).
    
- **Estilos en Línea (Atributo `style`):** Aplica reglas directamente sobre un elemento. Su uso es desaconsejado en entornos de producción por dificultar el mantenimiento y la especificidad del código.
    

### 5.2 Relación HTML con JavaScript

JavaScript dota de comportamiento dinámico al documento estático mediante la manipulación del **DOM** (_Document Object Model_).

- **Inclusión de Scripts:** Se realiza mediante la etiqueta `<script>`.
    
- **Estrategias de Carga:**
    
    - **`async`:** El script se descarga de forma asíncrona y se ejecuta en cuanto está disponible, pudiendo interrumpir el análisis (_parsing_) del HTML.
        
    - **`defer`:** El script se descarga de forma asíncrona pero su ejecución se pospone hasta que el análisis del HTML ha finalizado por completo. Es la práctica recomendada para scripts que dependen del DOM.
        
- **Manipulación de Nodos:** HTML proporciona los identificadores (`id`) y clases (`class`) que JavaScript utiliza como selectores para interactuar con los elementos.
    

### 5.3 Accesibilidad web básica

La accesibilidad (a11y) garantiza que el contenido sea perceptible, operable y comprensible por cualquier usuario, incluyendo personas con discapacidades.

- **Atributos ARIA (_Accessible Rich Internet Applications_):** Se utilizan cuando la semántica nativa de HTML no es suficiente. Por ejemplo, `aria-label`, `aria-hidden` o `role`.
    
- **Jerarquía Lógica:** El uso correcto de encabezados (`<h1>` a `<h6>`) permite que los lectores de pantalla generen un índice de navegación coherente.
    
- **Contraste y Escalabilidad:** Aunque dependientes de CSS, el HTML debe estar estructurado para soportar el escalado de texto sin pérdida de funcionalidad.
    

> [!example] foto
> 
> Infografía que compare un sitio web "Visualmente idéntico" pero con estructuras diferentes: uno basado en `<div>` genéricos (inaccesible) y otro basado en etiquetas semánticas y atributos ARIA (accesible), destacando cómo el segundo es interpretado correctamente por un lector de pantalla.

### 5.4 Compatibilidad entre navegadores

Dado que cada motor de renderizado (Blink, WebKit, Gecko) puede interpretar el código de manera ligeramente distinta, se deben aplicar estrategias de normalización.

- **Polyfills:** Scripts que proporcionan funcionalidades modernas de HTML5 a navegadores antiguos que no las soportan de forma nativa.
    
- **Detección de Funcionalidades:** Uso de bibliotecas o APIs nativas para verificar si el navegador soporta una etiqueta específica (como `<canvas>` o `<video>`) antes de intentar renderizarla.
    
- **Reset CSS / Normalize.css:** Aunque es una técnica de CSS, su objetivo es homogeneizar la apariencia base de los elementos HTML entre diferentes navegadores.
    

### 5.5 Optimización y estructura limpia

El rendimiento web y la mantenibilidad dependen de un código fuente optimizado.

- **Minificación:** Proceso de eliminar caracteres innecesarios (espacios, saltos de línea, comentarios) del archivo HTML para reducir su peso en la transferencia de red.
    
- **Reducción de la Profundidad del DOM:** Evitar el anidamiento excesivo de elementos innecesarios (comúnmente llamado "divitis"), lo cual acelera el cálculo del _layout_ por parte del motor del navegador.
    
- **Carga Diferida (_Lazy Loading_):** Aplicar el atributo `loading="lazy"` en imágenes y marcos para priorizar los recursos críticos del _above-the-fold_.
    

### 5.6 Estándares y validación de código

El cumplimiento de los estándares establecidos por el **W3C** (_World Wide Web Consortium_) asegura la longevidad y consistencia del proyecto.

- **Validadores del W3C:** Herramientas técnicas que analizan el documento en busca de errores sintácticos, etiquetas mal cerradas o atributos obsoletos (deprecados).
    
- **Uso de Estándares Actuales:** Evitar elementos obsoletos como `<font>`, `<center>` o `<marquee>`, los cuales han sido eliminados de la especificación moderna en favor de soluciones basadas en CSS.
    
- **Documentación de Tipos:** Asegurar que el `DOCTYPE` y los metadatos de codificación (`<meta charset="UTF-8">`) estén correctamente definidos para evitar errores de interpretación de caracteres especiales.
    
