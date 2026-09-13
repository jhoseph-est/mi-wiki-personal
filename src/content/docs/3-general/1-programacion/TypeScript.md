---
title: TypeScript
---

# TypeScript

## 1. Fundamentos del lenguaje

### 1.1 Propósito y ventajas de TypeScript

TypeScript es un **superconjunto tipado de JavaScript** (superset) desarrollado por Microsoft, diseñado para el desarrollo de aplicaciones de gran escala. Su propósito fundamental es introducir un **sistema de tipos estáticos** sobre la naturaleza dinámica de JavaScript, permitiendo la detección de errores en tiempo de compilación (_compile-time_) en lugar de en tiempo de ejecución (_runtime_).

Las ventajas técnicas se articulan en los siguientes ejes:

- **Seguridad de Tipos (Type Safety):** Minimiza las excepciones de tipo, como el clásico `TypeError: Cannot read property 'x' of undefined`, al validar la coherencia de los datos durante el desarrollo.
    
- **Productividad y Autocompletado:** El servidor de lenguaje de TypeScript proporciona herramientas de introspección superiores, permitiendo que los entornos de desarrollo (IDE) ofrezcan sugerencias precisas, refactorización segura y navegación entre símbolos.
    
- **Documentación Inherente:** Las anotaciones de tipo actúan como un contrato formal que documenta la intención del código, facilitando el mantenimiento en equipos multidisciplinarios.
    
- **Compatibilidad con ECMAScript:** TypeScript permite utilizar características de versiones futuras de JavaScript (ESNext), transpilando el código a versiones anteriores (ES5, ES6) para asegurar la compatibilidad con navegadores u entornos de ejecución antiguos.
    

### 1.2 Configuración del entorno de desarrollo

La arquitectura de un entorno TypeScript requiere de dos componentes esenciales: el entorno de ejecución de JavaScript y el compilador de TypeScript (**tsc**).

1. **Instalación de Node.js:** Es el requisito previo que proporciona el gestor de paquetes `npm`.
    
2. **Instalación del Compilador:** Se realiza globalmente o por proyecto mediante:
    
    `npm install -g typescript`
    
3. **Inicialización del Proyecto:** La creación del archivo de configuración `tsconfig.json` es crítica. Este archivo gobierna el comportamiento del compilador, definiendo el nivel de restricción y el objetivo de transpilación.
    
    `tsc --init`
    
4. **Entorno de Desarrollo (IDE):** Visual Studio Code es el estándar de facto, dado que incluye un servicio de lenguaje nativo para TypeScript que sincroniza la validación en tiempo real sin necesidad de compilación manual constante.
    

### 1.3 Tipos básicos y anotaciones

Las anotaciones de tipo se realizan mediante la sintaxis `: tipo` después del identificador. TypeScript clasifica los tipos básicos en categorías primitivas y especiales.

- **Primitivos:**
    
    - `string`: Secuencias de caracteres.
        
    - `number`: Valores numéricos de punto flotante de 64 bits (IEEE 754).
        
    - `boolean`: Valores lógicos `true` o `false`.
        
    - `bigint`: Números enteros de precisión arbitraria.
        
    - `symbol`: Identificadores únicos e inmutables.
        
- **Especiales:**
    
    - `any`: Opta por salir del sistema de tipos. Su uso debe ser excepcional, ya que anula la seguridad de tipos.
        
    - `unknown`: Similar a `any`, pero requiere una comprobación de tipo (type checking) o un estrechamiento (narrowing) antes de operar con el valor.
        
    - `void`: Indica la ausencia de un valor de retorno en funciones.
        
    - `never`: Representa el tipo de valores que nunca ocurren (por ejemplo, una función que siempre lanza una excepción).
        
    - `null` y `undefined`: Correspondientes a sus respectivos valores en JavaScript.
        

> [!example] foto
> 
> Un diagrama que muestre la jerarquía de tipos en TypeScript, situando a 'unknown' en la parte superior como tipo universal y a 'never' en la base como el tipo que es subtipo de todos.

### 1.4 Inferencia de tipos

TypeScript emplea algoritmos de **inferencia de tipos** para deducir el tipo de una variable cuando no se proporciona una anotación explícita. Este proceso ocurre en el momento de la inicialización.

- **Inferencia Básica:** Si se declara `let x = 10;`, el compilador infiere automáticamente que `x` es de tipo `number`.
    
- **Mejor Tipo Común:** Al analizar un array con múltiples elementos, como `[0, 1, null]`, el compilador busca el tipo que sea compatible con todos los miembros, resultando en `(number | null)[]`.
    
- **Inferencia Contextual:** Ocurre cuando el tipo de una expresión está implícito por su ubicación. Por ejemplo, en un manejador de eventos de DOM, el parámetro `event` se infiere automáticamente como `MouseEvent` debido al contexto de la función `addEventListener`.
    

### 1.5 Variables, constantes y ámbito

TypeScript hereda las reglas de ámbito (_scope_) de ECMAScript 2015 (ES6), pero añade la capa de restricción de tipos.

- **`let`:** Declara variables con ámbito de bloque (_block-scope_). Son mutables en valor pero inmutables en tipo una vez asignado o inferido.
    
- **`const`:** Declara constantes con ámbito de bloque. Requieren una inicialización inmediata y su referencia no puede ser reasignada. En el caso de objetos declarados con `const`, sus propiedades internas siguen siendo mutables a menos que se utilicen tipos de solo lectura (`Readonly`).
    
- **Ámbito (Scope):** * **Global:** Accesible en todo el programa.
    
    - **De Función/Módulo:** Accesible solo dentro del archivo o función donde se define.
        
    - **De Bloque:** Limitado a las llaves `{}` (estructuras `if`, `for`, `while`).
        

### 1.6 Operadores y estructuras de control

Los operadores y estructuras de control en TypeScript son semánticamente idénticos a JavaScript, pero se benefician del análisis estático para garantizar que los operandos sean compatibles.

- **Operadores Aritméticos y Lógicos:** TypeScript valida que las operaciones aritméticas se realicen sobre tipos `number` o `bigint`. El operador `+` está permitido entre strings para concatenación.
    
- **Estructuras de Control:** `if-else`, `switch`, `for`, `while` y `do-while`.
    
- **Type Guarding en Control de Flujo:** TypeScript realiza un análisis de flujo de control. Si dentro de un bloque `if (typeof x === 'string')` se accede a `x`, el compilador garantiza que en ese bloque `x` es tratado estrictamente como `string`.


## 2. Sistema de tipos avanzado

El sistema de tipos de TypeScript no es solo declarativo, sino **computacional**. Permite generar nuevos tipos a partir de tipos existentes mediante operadores lógicos y transformaciones estructurales.

### 2.1 Tipos unión e intersección

Estos operadores permiten combinar múltiples tipos para modelar estructuras de datos complejas y flexibles.

- **Tipos Unión (`|`):** Representa un valor que puede ser uno de varios tipos. Se comporta como un "OR" lógico a nivel de tipos.
    
    - **Sintaxis:** `let resultado: string | number;`
        
    - **Estrechamiento (Narrowing):** Para acceder a métodos específicos (como `.toUpperCase()` de un `string`), TypeScript requiere una validación previa mediante `typeof`, `instanceof` o Type Guards, asegurando que el valor pertenece al subtipo esperado en ese bloque de ejecución.
        
- **Tipos Intersección (`&`):** Combina múltiples tipos en uno solo que contiene todas las propiedades de los tipos constituyentes. Se utiliza frecuentemente para composición de objetos y Mixins.
    
    - **Sintaxis:** `type EmpleadoDetalle = Persona & Trabajo;`
        
    - **Regla de Combinación:** Si dos tipos intersecados tienen una propiedad con el mismo nombre pero tipos incompatibles (ej. `string` y `number`), la propiedad resultante será de tipo `never`.
        

### 2.2 Tipos literales y alias

Los tipos literales permiten especificar valores exactos que una variable puede adoptar, mientras que los alias proporcionan nombres semánticos a estructuras de tipos.

- **Tipos Literales:** Limitan el dominio de un tipo a valores específicos de cadena, número o booleano.
    
    - Ejemplo: `type Estado = "loading" | "success" | "error";`
        
- **Alias de Tipo (`type`):** Es una forma de asignar un nombre a cualquier definición de tipo. A diferencia de las interfaces, los alias pueden representar primitivos, uniones y tuplas.
    
    - **Inmutabilidad de Definición:** Los alias no soportan _declaration merging_ (fusión de declaraciones), lo que los hace ideales para definir modelos de datos estáticos y cerrados.
        

### 2.3 Tipos genéricos

Los genéricos permiten crear componentes reutilizables que funcionan con una variedad de tipos en lugar de uno solo, manteniendo la seguridad de tipos sin recurrir a `any`.

- **Sintaxis de Parámetro de Tipo:** Se denotan habitualmente con `<T>`.
    
- **Restricciones de Genéricos (`extends`):** Permiten limitar los tipos que pueden ser pasados como argumento genérico.
    
    - Ejemplo: `<T extends { id: number }>` asegura que cualquier tipo `T` posea al menos una propiedad `id` de tipo numérico.
        
- **Valores por Defecto:** Al igual que los parámetros de funciones, los genéricos pueden tener tipos predeterminados: `<T = string>`.
    

### 2.4 Tipos condicionales

Introducidos en versiones avanzadas, permiten realizar lógica booleana durante la fase de resolución de tipos. Su estructura es análoga al operador ternario de JavaScript.

- **Estructura:** `T extends U ? X : Y`
    
- **Utilidad:** Son fundamentales para la creación de bibliotecas y tipos que deben reaccionar a la naturaleza de los datos de entrada. Por ejemplo, un tipo que extrae el tipo de retorno de una función solo si el argumento de entrada es efectivamente una función.
    
- **Distribución:** Cuando se aplican sobre tipos unión, los tipos condicionales se distribuyen sobre cada miembro de la unión de forma independiente.
    

### 2.5 Tipos mapeados

Los tipos mapeados permiten crear nuevos tipos transformando las propiedades de un tipo existente de manera iterativa. Se basan en la sintaxis de firma de índice.

- **Operador `in`:** Se utiliza para iterar sobre las claves de un tipo (generalmente obtenidas con `keyof`).
    
- **Modificadores de Mapeo:**
    
    - `readonly`: Convierte las propiedades en solo lectura.
        
    - `?`: Convierte las propiedades en opcionales.
        
    - `-readonly` o `-?`: Elimina dichos modificadores durante la transformación.
        
- **Ejemplo Teórico:** Un tipo mapeado puede transformar todas las propiedades de una interfaz `Usuario` de `string` a `boolean` automáticamente.
    

> [!example] foto
> 
> Un diagrama de flujo que ilustre la transformación de un tipo "A" a un tipo "B" mediante un tipo mapeado, mostrando el proceso de iteración `keyof` y la aplicación de modificadores como `readonly`.

### 2.6 Tipos utilitarios estándar

TypeScript provee una serie de tipos globales que facilitan las transformaciones de tipos más comunes, construidos internamente mediante tipos mapeados y condicionales.

|**Tipo Utilitario**|**Descripción**|
|---|---|
|`Partial<T>`|Convierte todas las propiedades de `T` en opcionales.|
|`Required<T>`|Convierte todas las propiedades de `T` en obligatorias.|
|`Readonly<T>`|Hace que todas las propiedades de `T` sean de solo lectura.|
|`Record<K, T>`|Construye un tipo de objeto con un conjunto de propiedades `K` de tipo `T`.|
|`Pick<T, K>`|Crea un tipo seleccionando un conjunto de propiedades `K` de `T`.|
|`Omit<T, K>`|Crea un tipo eliminando un conjunto de propiedades `K` de `T`.|
|`Exclude<T, U>`|Excluye de `T` aquellos tipos que son asignables a `U`.|


## 3. Programación orientada a objetos

TypeScript extiende las capacidades de la programación orientada a objetos (POO) de ES6, proporcionando un sistema de clases robusto con validación estática de miembros y relaciones estructurales.

### 3.1 Clases y constructores tipados

En TypeScript, las clases actúan tanto como una **entidad en tiempo de ejecución** (una función constructora) como un **tipo de dato en tiempo de compilación**.

- **Declaración de Propiedades:** A diferencia de JavaScript, las propiedades deben declararse y tiparse antes de ser utilizadas en el constructor, a menos que se use la inicialización abreviada.
    
- **Constructor:** El método `constructor` es el punto de entrada para la instanciación. TypeScript permite la **asignación automática de parámetros** (Parameter Properties) al prefijar los argumentos del constructor con un modificador de acceso.
    
    - _Ejemplo:_ `constructor(public nombre: string) {}` declara e inicializa la propiedad `nombre` simultáneamente.
        
- **Inicialización Estricta:** Si la opción `strictPropertyInitialization` está activa en el `tsconfig.json`, el compilador garantiza que todas las propiedades declaradas sean inicializadas en el constructor o tengan un valor por defecto.
    

### 3.2 Modificadores de acceso

Los modificadores de acceso controlan la visibilidad y la encapsulación de los miembros de la clase (propiedades y métodos).

- **`public` (por defecto):** El miembro es accesible desde cualquier lugar.
    
- **`private`:** El miembro solo es accesible dentro de la clase que lo define. Ni siquiera las subclases pueden acceder a él.
    
- **`protected`:** El miembro es accesible dentro de la clase que lo define y en sus subclases, pero no desde instancias externas.
    
- **`readonly`:** Impide la reasignación del valor de una propiedad después de su inicialización inicial (ya sea en la declaración o en el constructor).
    

### 3.3 Interfaces y contratos estructurales

A diferencia de otros lenguajes como Java o C#, donde las interfaces son nominales, en TypeScript las interfaces siguen un **sistema de tipado estructural** (_duck typing_).

- **Contrato de Forma:** Una interfaz define la estructura que un objeto debe cumplir. Si un objeto tiene las propiedades requeridas con los tipos correctos, se considera que implementa la interfaz, incluso sin una declaración explícita.
    
- **Propiedades Opcionales y de Solo Lectura:** Las interfaces pueden marcar propiedades como opcionales mediante `?` y como inmutables mediante `readonly`.
    
- **Extensibilidad:** Las interfaces pueden extenderse entre sí mediante la palabra clave `extends`, permitiendo la composición de contratos complejos.
    

### 3.4 Herencia y polimorfismo

TypeScript implementa herencia simple de clases, permitiendo que una subclase herede comportamiento y estructura de una superclase.

- **`extends`:** Palabra clave para establecer la relación de herencia.
    
- **`super`:** Utilizado en el constructor de la subclase para invocar al constructor padre y en métodos para acceder a implementaciones de la superclase. Es obligatorio llamar a `super()` antes de acceder a `this` en un constructor derivado.
    
- **Sobrescritura de Métodos (Overriding):** Las subclases pueden redefinir métodos de la clase padre para especializar su comportamiento, manteniendo la compatibilidad de la firma del método para preservar el polimorfismo.
    

### 3.5 Clases abstractas

Las clases abstractas sirven como modelos base para otras clases y no pueden ser instanciadas directamente.

- **`abstract`:** Se aplica tanto a la clase como a los métodos.
    
- **Métodos Abstractos:** No contienen implementación en la clase base; obligan a las subclases derivadas a proporcionar una implementación específica. Esto garantiza que un conjunto de clases compartan una interfaz común pero con comportamientos distintos.
    

### 3.6 Implementación de interfaces

Una clase puede utilizar la palabra clave `implements` para asegurar que cumple con un contrato definido por una interfaz.

- **Validación de Contrato:** Si la clase no define todos los miembros requeridos por la interfaz, el compilador generará un error.
    
- **Múltiples Interfaces:** A diferencia de la herencia de clases, una clase puede implementar múltiples interfaces simultáneamente, separándolas por comas.
    
- **Separación de Interfaz y Lógica:** Esta práctica desacopla la definición de la forma (interfaz) de la implementación concreta (clase), facilitando el testing y el mantenimiento.
    

> [!example] foto
> 
> Diagrama de clases UML que muestre una Clase Abstracta "Vehiculo", una Interfaz "Electrico" y una Clase Concreta "Tesla" que hereda de la primera e implementa la segunda, detallando los niveles de acceso y los métodos abstractos.


## 4. Módulos y organización del código

TypeScript emplea el sistema de módulos de ECMAScript (ESM) como estándar, permitiendo la encapsulación de lógica y la creación de fronteras claras entre diferentes componentes del software.

### 4.1 Sistemas de módulos

Aunque el estándar actual es ESM (`import`/`export`), TypeScript es capaz de emitir código compatible con diversos sistemas de módulos dependiendo del entorno de ejecución:

- **CommonJS (`module.exports` / `require`):** Estándar tradicional de Node.js.
    
- **ES Next / ES6:** Estándar moderno basado en la web y versiones recientes de Node.js.
    
- **UMD / AMD:** Utilizados principalmente en cargadores de módulos heredados como RequireJS.
    

La elección del sistema se define en la propiedad `module` del archivo `tsconfig.json`, lo que permite que el mismo código fuente sea distribuido para diferentes ecosistemas.

### 4.2 Importación y exportación tipada

TypeScript añade la capacidad de exportar e importar no solo valores (variables, funciones, clases), sino también tipos y interfaces.

- **Exportaciones Nombradas y por Defecto:** Se utilizan `export` y `export default` de manera idéntica a JavaScript.
    
- **`import type`:** Introducido para optimizar la compilación. Permite importar únicamente las definiciones de tipo. Esto garantiza que el compilador elimine completamente estas líneas durante la transpilación a JavaScript, evitando dependencias circulares y reduciendo el tamaño del bundle.
    
- **Re-exportación:** Permite centralizar las exportaciones de varios archivos en un único punto de entrada (archivo _barrel_), mejorando la legibilidad del código consumidor.
    

### 4.3 Archivos de declaración

Los archivos de declaración (`.d.ts`) contienen únicamente metadatos de tipos, sin implementación lógica. Su propósito es describir la forma de bibliotecas escritas en JavaScript puro.

- **Generación Automática:** Mediante la bandera `"declaration": true` en la configuración, el compilador genera estos archivos automáticamente a partir del código fuente.
    
- **Consumo de Tipos:** Permiten que TypeScript entienda el tipado de una librería externa, habilitando el autocompletado y la validación incluso si la librería no fue escrita originalmente en TypeScript.
    

### 4.4 Namespaces y módulos internos

Anteriormente conocidos como "módulos internos", los `namespaces` son una forma específica de TypeScript para organizar el código y evitar la contaminación del ámbito global.

- **Agrupación Lógica:** Permiten agrupar interfaces, clases y funciones bajo un identificador único.
    
- **Uso Actual:** Con la estandarización de los módulos ES, el uso de `namespaces` ha quedado relegado principalmente a la definición de tipos globales o extensiones de bibliotecas que no poseen una estructura modular clara.
    

### 4.5 Configuración tsconfig.json

El archivo `tsconfig.json` es el núcleo del proyecto. Sus directivas principales incluyen:

- **`compilerOptions`:**
    
    - `target`: Versión de JavaScript de salida (ej. `ES5`, `ES2020`).
        
    - `lib`: Conjunto de definiciones de tipos de biblioteca que se incluirán (ej. `DOM`, `ESNext`).
        
    - `strict`: Habilita todas las comprobaciones estrictas de tipos para máxima seguridad.
        
    - `outDir`: Directorio donde se depositará el código transpilado.
        
- **`include` y `exclude`:** Especifican qué archivos deben ser procesados o ignorados por el compilador.
    

### 4.6 Gestión de dependencias tipadas

Para bibliotecas de JavaScript que no incluyen sus propios tipos, la comunidad mantiene el repositorio **DefinitelyTyped**.

- **Instalación de tipos:** Se realiza mediante el prefijo `@types/`. Por ejemplo: `npm install --save-dev @types/lodash`.
    
- **Resolución de Módulos:** TypeScript busca automáticamente en la carpeta `node_modules/@types` para resolver las definiciones necesarias.
    
- **Peer Dependencies:** Es fundamental asegurar que la versión de los tipos coincida con la versión de la librería instalada para evitar discrepancias de firma.
    

> [!example] foto
> 
> Un esquema que represente el flujo de transpilación: desde múltiples archivos `.ts` con sus respectivos `imports`, pasando por el proceso de resolución del `tsconfig.json`, hasta la generación de archivos `.js` de implementación y archivos `.d.ts` de declaraciones.


## 5. Integración y herramientas

La integración de TypeScript en flujos de trabajo profesionales trasciende la mera escritura de código; implica la orquestación de procesos de transformación y la convivencia con ecosistemas de software preexistentes.

### 5.1 Compilación y transpilación

A diferencia de los lenguajes compilados tradicionales que generan código de máquina, TypeScript realiza un proceso de **transpilación** (fuente a fuente), convirtiendo código TS en código JS compatible con motores como V8 o SpiderMonkey.

- **Verificación de Tipos (Type Checking):** Es la fase donde el compilador analiza el Árbol de Sintaxis Abstracta (AST) para validar la integridad semántica.
    
- **Emisión de Código:** Una vez validado, el compilador elimina todas las anotaciones de tipo, interfaces y decoradores, dejando un archivo JavaScript limpio.
    
- **Source Maps:** TypeScript genera archivos `.js.map` que vinculan las líneas del código JavaScript generado con las líneas originales de TypeScript, permitiendo la depuración (debugging) directamente sobre los archivos `.ts` en el navegador o el IDE.
    

### 5.2 Integración con JavaScript existente

TypeScript permite una adopción gradual mediante la configuración del compilador, facilitando la migración de bases de código legadas.

- **`allowJs` y `checkJs`:** Estas banderas en el `tsconfig.json` permiten que el compilador procese archivos JavaScript. Si `checkJs` está activo, TypeScript utilizará comentarios **JSDoc** para inferir tipos y reportar errores en archivos `.js`.
    
- **Migración Incremental:** Se pueden renombrar archivos `.js` a `.ts` de forma paulatina, utilizando el tipo `any` temporalmente para estabilizar el sistema antes de aplicar un tipado riguroso.
    

### 5.3 Tipado de librerías externas

Cuando se utilizan bibliotecas que no proporcionan tipos nativos, TypeScript recurre a estrategias de resolución jerárquica:

1. **Tipos Embebidos:** La librería incluye su propio archivo `index.d.ts`.
    
2. **DefinitelyTyped (`@types`):** El repositorio comunitario mencionado anteriormente.
    
3. **Declaraciones Shorthand:** Si no existen tipos, el desarrollador puede declarar un módulo vacío para evitar errores de compilación: `declare module 'nombre-libreria';`. Esto trata todas las exportaciones de dicha librería como `any`.
    

### 5.4 Manejo de errores tipados

El sistema de tipos de TypeScript ayuda a gestionar excepciones y estados de error mediante técnicas de tipado exhaustivo.

- **Discriminated Unions para Errores:** En lugar de lanzar excepciones que pueden interrumpir el flujo, se suelen retornar objetos que contienen un tipo de error discriminado.
    
    - _Ejemplo:_ `type Resultado = { status: 'success', data: T } | { status: 'error', message: string };`
        
- **`unknown` en Catch Blocks:** A partir de versiones recientes, TypeScript permite (u obliga, según configuración) que el error capturado en un `try-catch` sea de tipo `unknown`, forzando al desarrollador a validar el tipo del error antes de acceder a sus propiedades.
    

### 5.5 Herramientas de linting y formato

Para garantizar la calidad del código, TypeScript se integra con herramientas de análisis estático que van más allá de la validación de tipos.

- **ESLint:** Es el estándar para aplicar reglas de estilo y detectar patrones problemáticos. Utiliza `@typescript-eslint/parser` para entender la sintaxis de TypeScript.
    
- **Prettier:** Herramienta de formateo de código que asegura una estética consistente (espaciado, comas, punto y coma) independientemente del autor del código.
    
- **Husky:** Se utiliza frecuentemente para ejecutar estas herramientas en _pre-commit hooks_, impidiendo que código que no cumpla los estándares llegue al repositorio.
    

### 5.6 Automatización de compilación

En proyectos complejos, el compilador `tsc` suele integrarse en cadenas de montaje (pipelines) más amplias.

- **Bundlers (Webpack, Vite, Rollup):** Utilizan cargadores como `ts-loader` o `esbuild` para integrar la transpilación dentro del proceso de empaquetado de la aplicación.
    
- **CI/CD:** La ejecución de `tsc --noEmit` en servidores de integración continua es una práctica estándar para asegurar que ningún cambio rompa la seguridad de tipos antes de proceder al despliegue.
    

> [!example] foto
> 
> Un diagrama del pipeline de desarrollo moderno: Código fuente (.ts) -> ESLint/Prettier -> Compilador (tsc) -> Bundler (Vite/Webpack) -> Código final optimizado (.js) y Source Maps (.map).


## 6. Buenas prácticas y patrones

El uso efectivo de TypeScript no reside únicamente en la supresión de errores de compilación, sino en el diseño de sistemas de tipos que actúen como una capa de seguridad y documentación activa para el desarrollo a largo plazo.

### 6.1 Diseño de tipos robustos

Un diseño robusto busca que los estados imposibles sean irrepresentables mediante el sistema de tipos.

- **Evitar el uso de `any`:** El uso de `any` anula el propósito del lenguaje. En su lugar, debe preferirse `unknown` para valores externos, lo que obliga a realizar una validación de tipos antes de su manipulación.
    
- **Preferir Interfaces sobre Alias para Objetos:** Aunque funcionalmente similares, las interfaces ofrecen mejor rendimiento en el compilador y permiten la extensión (_merging_), lo que las hace preferibles para definir la forma de objetos y APIs.
    
- **Inmutabilidad por Defecto:** Utilizar `readonly` y tipos como `ReadonlyArray<T>` para prevenir efectos secundarios accidentales, asegurando que los datos fluyan de manera predecible a través de la aplicación.
    

### 6.2 Principios de tipado seguro

La seguridad de tipos debe ser el eje central de la arquitectura del software.

- **Tipado Exhaustivo (Exhaustiveness Checking):** Al trabajar con uniones discriminadas y estructuras `switch`, se debe asegurar que todos los casos posibles sean gestionados. El uso del tipo `never` en el bloque `default` permite que el compilador arroje un error si se añade un nuevo miembro a la unión y no se contempla en la lógica.
    
- **Validación en la Frontera:** Dado que TypeScript desaparece en tiempo de ejecución, es vital validar los datos que ingresan desde fuentes externas (APIs, formularios) mediante librerías como **Zod** o **Io-ts**, que sincronizan el esquema de validación en runtime con el tipo de TypeScript.
    

### 6.3 Patrones comunes en TypeScript

Existen patrones de diseño que aprovechan las características únicas del lenguaje para resolver problemas de arquitectura.

- **Discriminated Unions (Sum Types):** Es el patrón por excelencia para modelar estados complejos (ej. estados de una petición HTTP: `Cargando`, `Error`, `Éxito`) mediante una propiedad común, generalmente llamada `kind` o `type`.
    
- **Branded Types (Nominal Typing):** Dado que TypeScript es estructural, dos tipos con la misma forma son intercambiables. Los _Branded Types_ permiten simular tipado nominal añadiendo una propiedad única invisible para distinguir, por ejemplo, un `UserId` de un `PostId`, aunque ambos sean internamente `string`.
    

### 6.4 Refactorización con tipos

TypeScript transforma la refactorización de una tarea de riesgo en un proceso guiado y seguro.

- **Renombrado Seguro:** Gracias al servidor de lenguaje, renombrar un símbolo actualiza automáticamente todas sus referencias en el proyecto.
    
- **Cambio de Firmas:** Al modificar los parámetros de una función o las propiedades de una interfaz, el compilador señala inmediatamente todos los puntos de rotura, permitiendo una corrección sistemática.
    
- **Detección de Código Muerto:** El análisis estático ayuda a identificar variables, parámetros y funciones que no se utilizan, facilitando la limpieza del código.
    

### 6.5 Escalabilidad en proyectos grandes

La arquitectura de tipos en proyectos de gran envergadura requiere estrategias de optimización del compilador.

- **Project References:** Permiten dividir un proyecto de TypeScript en partes más pequeñas e independientes que se compilan por separado, mejorando drásticamente los tiempos de compilación y facilitando la modularidad.
    
- **Encapsulación de Tipos:** No exportar tipos internos de un módulo que no sean necesarios para el consumidor, reduciendo la superficie de la API y el acoplamiento.
    

### 6.6 Documentación y mantenimiento tipado

El código bien tipado reduce la necesidad de comentarios extensos, ya que el tipo comunica la intención.

- **TSDoc:** Utilizar el estándar TSDoc para documentar funciones y clases. El compilador y los IDEs extraen esta información para mostrarla en los tooltips de autocompletado.
    
- **Mantenimiento de Dependencias de Tipos:** Revisar periódicamente las versiones de `@types/*` para asegurar la paridad con las bibliotecas de ejecución, evitando errores sutiles por firmas desactualizadas.
    

> [!example] foto
> 
> Un diagrama de flujo que compare un proceso de refactorización en JavaScript puro (basado en búsqueda manual y pruebas unitarias) versus uno en TypeScript (basado en el análisis de errores del compilador y el rastro de tipos), destacando la reducción de incertidumbre.
