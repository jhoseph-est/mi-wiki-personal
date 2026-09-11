---
title: JavaScript XML
---

# JSX (JavaScript XML)

## 1. Fundamentos de JSX

### 1.1 Concepto y propósito de JSX

**JSX** es una extensión de la sintaxis de **JavaScript** que permite la escritura de estructuras de interfaz de usuario con una apariencia visual análoga a **HTML**. Desde una perspectiva técnica, JSX no es interpretado directamente por los motores de ejecución de JavaScript (como V8 o SpiderMonkey), sino que actúa como una capa de abstracción sintáctica sobre las llamadas a funciones de creación de elementos de la biblioteca de interfaz de usuario subyacente (generalmente `React.createElement`).

El propósito fundamental de JSX es la **unificación del marcado y la lógica de control** en una única unidad cohesiva denominada componente. Históricamente, el desarrollo web seguía una separación de preocupaciones basada en tecnologías (HTML para estructura, JS para comportamiento). JSX propone una separación basada en unidades funcionales, donde la estructura del DOM virtual se define dentro del mismo ámbito donde reside la lógica de manipulación de datos, optimizando el flujo de desarrollo y reduciendo la carga cognitiva al visualizar la jerarquía de la interfaz.

### 1.2 Sintaxis básica y expresiones

La sintaxis de JSX combina literales de etiquetas con la potencia expresiva de JavaScript. Un elemento JSX se define mediante una etiqueta de apertura y cierre (o una etiqueta de cierre automático) similar a XML:

`const element = <h1 id="main-title">Contenido Académico</h1>;`

La integración de lógica dinámica se realiza mediante el uso de **llaves** `{ }`. Cualquier expresión válida de JavaScript —incluyendo operaciones aritméticas, llamadas a funciones y evaluación de variables— puede ser embebida dentro de estas llaves.

> [!example] foto
> 
> [Diagrama de flujo de datos que muestra una variable de tipo string en un script de JS siendo inyectada en una etiqueta h1 de JSX, resaltando la delimitación por llaves].

### 1.3 Diferencias entre HTML y JSX

A pesar de la similitud visual, JSX opera bajo las reglas de **JavaScript**, lo que introduce divergencias críticas respecto a HTML estándar:

- **CamelCase para atributos:** Los atributos de HTML se convierten en propiedades de objetos JavaScript. Por ello, atributos como `onclick` o `tabindex` deben escribirse como `onClick` y `tabIndex` respectivamente.
    
- **Palabras reservadas:** Dado que JSX es JavaScript, no se pueden utilizar palabras reservadas del lenguaje como nombres de atributos. El caso más notable es `class`, que se sustituye por `className`, y `for`, que se sustituye por `htmlFor`.
    
- **Cierre obligatorio:** Todas las etiquetas deben cerrarse explícitamente. Etiquetas que en HTML5 son facultativas, como `<br>` o `<img>`, en JSX deben ser `<br />` o `<img />`.
    
- **Tipado de atributos:** En HTML, todos los valores de atributos son cadenas de texto. En JSX, se pueden pasar tipos de datos complejos (objetos, arreglos, funciones) mediante la sintaxis de expresiones.
    

### 1.4 Reglas de elementos raíz

Un principio arquitectónico de JSX es que toda expresión debe retornar un **único nodo raíz**. Técnicamente, esto se debe a que una función de JavaScript solo puede devolver un único valor (o un único objeto). Al transformar JSX, un conjunto de elementos hermanos sin un padre común resultaría en múltiples llamadas a `createElement` sin un contenedor, lo cual es sintácticamente inválido en un retorno de función.

Para agrupar múltiples elementos sin añadir nodos adicionales al DOM real, se recurre a los **Fragmentos**.

### 1.5 Inserción de variables y funciones

La inserción de datos dinámicos en JSX se rige por la evaluación de expresiones en tiempo de ejecución. Cuando el motor de renderizado encuentra una expresión entre llaves, resuelve su valor antes de construir el árbol del DOM virtual.

Si se inserta una función, esta no se ejecuta automáticamente a menos que se invoque explícitamente `{miFuncion()}`. Sin embargo, en el contexto de manejadores de eventos, se suele pasar la referencia de la función `{miFuncion}` para que sea el motor de eventos quien la ejecute ante la interacción del usuario. Es imperativo considerar que JSX escapa automáticamente cualquier valor renderizado para prevenir ataques de **Cross-Site Scripting (XSS)**, convirtiendo cualquier entrada en una cadena de texto inerte antes de su inserción.

### 1.6 Comentarios y fragmentos

Los comentarios en JSX deben estar contenidos dentro de bloques de expresiones para no ser interpretados como nodos de texto. La sintaxis estándar es:

`{/* Comentario de bloque técnico */}`.

Los **Fragmentos** (`<React.Fragment>` o la sintaxis corta `<> ... </>`) son componentes abstractos que permiten agrupar una lista de hijos sin agregar un nodo extra al DOM. Su uso es esencial para mantener la semántica del HTML (por ejemplo, al devolver múltiples elementos `<td>` que deben estar contenidos directamente en un `<tr>`).

---

## 2. JSX y componentes

### 2.1 JSX en componentes funcionales

Un componente funcional es una función de JavaScript pura que recibe un objeto de configuración y retorna un elemento JSX. La integración de JSX en estas funciones define la estructura declarativa de la interfaz. La ejecución de la función genera un nuevo árbol de elementos JSX cada vez que el componente se actualiza, permitiendo una sincronización eficiente entre el estado de la aplicación y la representación visual.

### 2.2 Props en JSX

Las **Props** (propiedades) son el mecanismo de paso de parámetros en JSX. Se definen como atributos en la etiqueta del componente y se consolidan en un único objeto que el componente recibe como argumento.

A diferencia de los atributos HTML, las props en JSX permiten el paso de cualquier tipo de dato. La sintaxis para pasar una prop no-cadena requiere el uso de llaves:

`<Componente volumen={100} activo={true} configuracion={{escala: 'log'}} />`

### 2.3 Composición de componentes

La composición es el paradigma mediante el cual se construyen interfaces complejas a partir de componentes más simples. En JSX, esto se logra mediante la **anidación**. Un componente puede contener otros componentes dentro de su declaración JSX.

Un aspecto avanzado de la composición es el uso de la propiedad especial `children`, que permite a un componente capturar y renderizar cualquier elemento o componente definido entre sus etiquetas de apertura y cierre, facilitando la creación de "componentes contenedor" o "layouts".

### 2.4 Renderizado condicional básico

Dado que JSX es una extensión de JavaScript, el renderizado condicional se basa en operadores lógicos del lenguaje:

1. **Operador Ternario:** Utilizado para bifurcaciones simples: `{condicion ? <ElementoA /> : <ElementoB />}`.
    
2. **Operador Lógico AND (&&):** Utilizado para renderizado de "cortocircuito", donde un elemento solo se muestra si la condición es verdadera: `{isLoggedIn && <UserMenu />}`.
    

Es fundamental que la expresión siempre evalúe a un nodo JSX, una cadena, un número, o valores que el motor ignore (como `null`, `undefined` o `false`).

### 2.5 Listas y claves

El renderizado de colecciones de datos se realiza transformando arreglos de JavaScript en arreglos de elementos JSX, típicamente mediante el método `.map()`.

Cada elemento generado en una lista **debe** poseer un atributo único denominado `key`. La `key` es un identificador de tipo string o numérico que permite al algoritmo de diferenciación (reconciliation) identificar qué elementos han cambiado, se han añadido o se han eliminado. El uso de índices de arreglo como `key` se desaconseja en listas dinámicas, ya que puede inducir errores en el estado de los componentes y degradar el rendimiento.

> [!example] foto
> 
> [Diagrama comparativo del proceso de Reconciliación con y sin el uso de 'keys', mostrando cómo el algoritmo identifica nodos específicos en el árbol virtual].

### 2.6 Manejo de eventos en JSX

El manejo de eventos en JSX se basa en el sistema de **Eventos Sintéticos** (Synthetic Events). Estos son envoltorios multiplataforma sobre los eventos nativos del navegador, garantizando un comportamiento consistente en diferentes entornos.

La sintaxis requiere pasar una referencia de función al atributo de evento (por ejemplo, `onChange={handleChange}`). Es una práctica estándar definir estas funciones dentro del cuerpo del componente para que tengan acceso al ámbito de las props y el estado.


## 3. Atributos y estilos en JSX

### 3.1 Atributos y propiedades especiales

En JSX, los atributos no se mapean directamente a atributos de archivos HTML, sino a propiedades de objetos de JavaScript. Esta distinción es fundamental para entender el comportamiento del **DOM Virtual**. Cuando se define un atributo en JSX, se está pasando una configuración al motor de renderizado, el cual decide cómo aplicarla al nodo del DOM real.

Existen propiedades con comportamientos específicos que se desvían del estándar de marcado tradicional, como `value` y `checked` en elementos de formulario, los cuales permiten un control síncrono del estado del componente (Componentes Controlados).

### 3.2 className y htmlFor

Debido a que JSX se transpile a código JavaScript estándar, el uso de palabras reservadas del lenguaje está restringido en la definición de atributos.

- **`className`**: Sustituye al atributo `class` de HTML. Dado que `class` es una palabra clave para definir clases en ES6, JSX utiliza `className` para asignar clases de CSS a un elemento.
    
- **`htmlFor`**: Sustituye al atributo `for` utilizado en etiquetas `<label>`. Dado que `for` es una palabra clave reservada para bucles, se emplea `htmlFor` para establecer la asociación con el `id` de un elemento de entrada (input).
    

### 3.3 Estilos en línea con objetos

A diferencia de HTML, donde los estilos se declaran como una cadena de texto (`style="color: red;"`), en JSX el atributo `style` acepta exclusivamente un **objeto de JavaScript**.

Las propiedades de este objeto deben escribirse en formato **camelCase** (por ejemplo, `backgroundColor` en lugar de `background-color`). Los valores suelen ser cadenas, aunque para propiedades que aceptan medidas en píxeles, se pueden pasar números que el motor interpretará automáticamente con la unidad `px`.

$$\text{Estilo} = \{ \text{propertyName}_{camelCase}: \text{'value'} \}$$

### 3.4 Manejo de formularios en JSX

El manejo de formularios en JSX introduce el concepto de **Single Source of Truth** (Fuente única de verdad). En lugar de que el DOM mantenga el estado interno de un campo de texto, este se vincula a una variable de estado mediante la prop `value`.

Cualquier cambio en el input debe ser capturado por un manejador `onChange`, que actualiza el estado, provocando un re-renderizado del componente con el nuevo valor. Este flujo bidireccional garantiza que la lógica de la aplicación siempre tenga control sobre los datos del formulario.

### 3.5 Propagación de atributos

La propagación de atributos (Spread Attributes) permite pasar un objeto completo de propiedades a un elemento JSX utilizando el operador de propagación de ES6 (`...`).

`const props = { id: "btn-01", className: "primary-button", disabled: false };`

`<button {...props}>Enviar</button>`

Esta técnica es altamente eficiente en patrones de **Componentes de Alto Orden (HOC)** o componentes de envoltura, donde se desea delegar múltiples atributos al elemento subyacente sin listarlos individualmente.

### 3.6 Valores booleanos y nulos

JSX trata los valores booleanos, `null` y `undefined` de manera especial:

- Si un atributo booleano se escribe sin valor (ej. `<input disabled />`), JSX lo interpreta implícitamente como `true`.
    
- Los valores `false`, `null`, `undefined` y los booleanos no se renderizan en el DOM. Son útiles para el renderizado condicional, permitiendo que una expresión no produzca salida visual sin generar errores de ejecución.
    

---

## 4. Transformación y compilación de JSX

### 4.1 Proceso de transpilación

JSX no es código ejecutable por el navegador; requiere un proceso de **transpilación**. Herramientas como **Babel** o **SWC** actúan como compiladores de fuente a fuente, transformando la sintaxis JSX en llamadas a funciones de creación de elementos. Este proceso ocurre generalmente durante la etapa de construcción (build time) de la aplicación.

### 4.2 JSX como llamadas de función

Cada etiqueta JSX se convierte en una invocación de una función específica (comúnmente `React.createElement` o el nuevo _JSX runtime_).

La estructura de la transformación es la siguiente:

1. **Tipo**: El nombre de la etiqueta (string para HTML, referencia para componentes).
    
2. **Props**: Un objeto que contiene todos los atributos definidos.
    
3. **Children**: Los elementos anidados, que se pasan como argumentos adicionales o como parte del objeto de props.
    

> [!example] foto
> 
> [Diagrama técnico que muestra la transformación de un bloque de código JSX a su equivalente en JavaScript puro (llamadas anidadas de React.createElement), resaltando cómo los atributos se convierten en el segundo argumento de la función].

### 4.3 Configuración de herramientas de compilación

La compilación de JSX depende de la configuración del entorno de desarrollo. En herramientas modernas como **Vite** o **Webpack**, se definen reglas de carga (_loaders_) que identifican archivos `.jsx` o `.tsx`.

Desde la introducción de la versión 17 de React, el compilador puede importar automáticamente las funciones necesarias (`_jsx`), eliminando la necesidad de tener `React` en el alcance global de cada archivo que contenga JSX.

### 4.4 Optimización de renderizado

La eficiencia de JSX radica en su integración con el **DOM Virtual**. Durante la compilación, se pueden aplicar optimizaciones como:

- **Constant Hoisting:** Mover elementos estáticos fuera de la función de renderizado para evitar su recreación en cada ciclo.
    
- **Inline Elements:** Transformar elementos JSX en objetos planos de JavaScript directamente para reducir la sobrecarga de llamadas a funciones en tiempo de ejecución.
    

### 4.5 Manejo de errores comunes

Los errores más frecuentes en la fase de compilación y ejecución de JSX incluyen:

- **Adjacent JSX elements:** Error derivado de no envolver elementos hermanos en un nodo raíz o fragmento.
    
- **Unterminated JSX contents:** Fallo en el cierre de etiquetas autoconclusivas.
    
- **Variables no definidas:** Intentar renderizar un componente que no ha sido importado o declarado en el ámbito actual.
    

---

## 5. Buenas prácticas y patrones con JSX

### 5.1 Organización de estructuras JSX

Para mantener la mantenibilidad en aplicaciones de gran escala, se recomienda:

- **Modularidad:** Extraer bloques de JSX complejos en sub-componentes especializados.
    
- **Lógica fuera del retorno:** Realizar cálculos complejos y filtrado de datos antes de la sentencia `return`, manteniendo el cuerpo del JSX lo más declarativo y limpio posible.
    

### 5.2 Reutilización mediante componentes

El patrón de **Componentes Presentacionales y de Contenedor** fomenta la reutilización de JSX. Mientras que el contenedor maneja la lógica y los datos, el componente presentacional recibe props y retorna una estructura JSX puramente visual, permitiendo su uso en diferentes contextos de la aplicación.

### 5.3 Legibilidad y formato del código

El uso de paréntesis en la sentencia `return` es una convención estándar para evitar problemas con la inserción automática de puntos y coma (ASI) de JavaScript y permitir la indentación multilínea:

JavaScript

```
return (
  <div className="container">
    <Component />
  </div>
);
```

### 5.4 Seguridad en la inserción de contenido

JSX protege contra ataques XSS al escapar valores de forma predeterminada. Sin embargo, si es estrictamente necesario renderizar HTML crudo (por ejemplo, desde un CMS), se debe utilizar la propiedad `dangerouslySetInnerHTML`. Esta propiedad requiere un objeto con la clave `__html`, sirviendo como una advertencia explícita sobre los riesgos de seguridad implicados.

### 5.5 Patrones de renderizado avanzados

- **Render Props:** Pasar una función como prop que retorna JSX, permitiendo compartir lógica de comportamiento entre componentes.
    
- **HOC (Higher-Order Components):** Funciones que reciben un componente y devuelven uno nuevo con capacidades extendidas, manipulando el JSX resultante.
    

### 5.6 Pruebas de componentes con JSX

Las pruebas unitarias y de integración para JSX se centran en verificar que la estructura del DOM resultante coincida con el estado esperado. Herramientas como **Jest** y **React Testing Library** permiten renderizar el JSX en un entorno de simulación (JSDOM) y realizar aserciones sobre la presencia de elementos, atributos y el comportamiento ante eventos de usuario.
