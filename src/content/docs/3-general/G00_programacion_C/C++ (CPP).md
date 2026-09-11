---
title: C++ (CPP)
---

# 1. Fundamentos del Lenguaje

## 1.1 Historia y evolución de C++

El lenguaje de programación **C++** surge de la necesidad de extender las capacidades del lenguaje **C** hacia el paradigma de la **Programación Orientada a Objetos (POO)** sin sacrificar la eficiencia de bajo nivel. Fue diseñado originalmente por **Bjarne Stroustrup** en los Laboratorios Bell de AT&T a principios de la década de 1980, bajo el nombre inicial de "C con Clases".

La evolución del lenguaje se puede fragmentar en hitos estandarizados por la **ISO (International Organization for Standardization)**:

- **C++98 / C++03:** La primera estandarización formal (ISO/IEC 14882:1998). Introdujo la **Standard Template Library (STL)**, una innovación crítica que permitió la programación genérica mediante el uso de plantillas (_templates_).
    
- **C++11:** Conocido durante su desarrollo como C++0x, representó una revolución en el lenguaje. Introdujo semántica de movimiento (_move semantics_), inferencia de tipos con `auto`, expresiones lambda, punteros inteligentes (`std::unique_ptr`, `std::shared_ptr`) y soporte nativo para multihilo.
    
- **C++14:** Una actualización menor centrada en refinamientos, como el retorno de tipo `auto` en funciones y plantillas de variables.
    
- **C++17:** Introdujo características como el tipo de retorno `std::optional`, `std::variant`, `std::any`, y el sistema de archivos (_filesystem library_), además de mejoras en la elisión de copia.
    
- **C++20:** Considerado el cambio más significativo desde C++11. Incluye **Conceptos** (_Concepts_) para la programación genérica restringida, **Módulos** que reemplazan el modelo de inclusión de encabezados, **Corrutinas** y la librería `ranges`.
    

> [!example] foto
> 
> Diagrama de flujo cronológico que muestre la transición de C (1972) a C con Clases (1979), seguido por los hitos de estandarización ISO (98, 11, 14, 17, 20, 23). Debe destacar la retrocompatibilidad con C como una línea base persistente.

## 1.2 Estructura básica de programas

Un programa en C++ es una colección de unidades de traducción que se compilan y enlazan para generar un ejecutable binario. La estructura mínima requiere una función de entrada denominada `main`.

La anatomía de un programa estándar se compone de:

1. **Directivas del preprocesador:** Instrucciones que comienzan con `#` (como `#include <iostream>`) que el preprocesador interpreta antes de la compilación real, expandiendo archivos de cabecera o definiendo macros.
    
2. **Espacios de nombres (Namespaces):** Mecanismos para prevenir colisiones de nombres. El uso de `std::` identifica los elementos pertenecientes a la Biblioteca Estándar.
    
3. **Función principal (`main`):** El punto de entrada del sistema operativo. Su firma estándar es:
    
    - `int main()`
        
    - `int main(int argc, char* argv[])`, donde `argc` representa el conteo de argumentos y `argv` el vector de cadenas de caracteres con dichos argumentos.
        

## 1.3 Tipos de datos primitivos

C++ provee un conjunto de tipos de datos integrados que se corresponden directamente con las capacidades del hardware subyacente. Estos se clasifican en:

- **Tipos Integrales:**
    
    - `bool`: Almacena valores lógicos (`true` o `false`). Su tamaño suele ser de 1 byte.
        
    - `char`: Representa un carácter individual. Generalmente de 8 bits bajo el estándar ASCII o UTF-8.
        
    - `int`: Representa números enteros. Su tamaño depende de la arquitectura (usualmente 32 o 64 bits).
        
- **Tipos de Punto Flotante:**
    
    - `float`: Precisión simple (usualmente 32 bits según IEEE 754).
        
    - `double`: Precisión doble (64 bits).
        
    - `long double`: Precisión extendida (80 o 128 bits según la plataforma).
        
- **Tipo Vacío (`void`):** Indica la ausencia de valor o tipo; se utiliza principalmente en funciones que no retornan datos o en punteros genéricos.
    

El tamaño de estos tipos puede ser consultado mediante el operador `sizeof(T)`, el cual devuelve el tamaño en bytes del tipo de dato $T$.

## 1.4 Variables y constantes

Las **variables** son ubicaciones de memoria con nombre que permiten almacenar y manipular datos. En C++, es obligatorio declarar el tipo de la variable antes de su uso, debido a que es un lenguaje de tipado fuerte y estático.

- **Inicialización:** C++ permite múltiples formas de inicialización, siendo la inicialización de llaves (introducida en C++11) la más recomendada para evitar la reducción de tipos (_narrowing conversions_):
    
    `int x {5};`
    
- **Constantes:** Se definen mediante el calificador `const`. Una vez inicializada, el valor de una constante no puede ser modificado durante la ejecución.
    
    `const double PI = 3.1415926535;`
    
- **Expresiones constantes (`constexpr`):** Introducido en C++11, permite evaluar el valor de una variable o función en tiempo de compilación, optimizando el rendimiento y permitiendo su uso en contextos que requieren valores constantes literales (como tamaños de arreglos estáticos).
    

## 1.5 Operadores y expresiones

Los operadores en C++ son símbolos que indican al compilador la realización de manipulaciones lógicas o matemáticas específicas.

- **Aritméticos:** `+`, `-`, `*`, `/`, `%` (módulo).
    
- **Relacionales:** `==`, `!=`, `<`, `>`, `<=`, `>=`.
    
- **Lógicos:** `&&` (AND), `||` (OR), `!` (NOT).
    
- **De Asignación:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`.
    
- **Incremento/Decremento:** `++`, `--` (en versiones prefijas y postfijas).
    
- **Binarios (Bitwise):** `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `<<` (desplazamiento izquierda), `>>` (desplazamiento derecha).
    

La precedencia y asociatividad de los operadores determinan el orden de evaluación de las expresiones. Por ejemplo, en la expresión:

$$f(x, y) = a + b \cdot c^2$$

En C++, se traduciría como `a + b * pow(c, 2)`, donde la multiplicación tiene mayor precedencia que la suma.

## 1.6 Entrada y salida estándar

La comunicación con el exterior se realiza predominantemente a través de la librería `<iostream>`, que utiliza el concepto de **flujos (streams)** de datos.

- **`std::cout`:** Flujo de salida estándar (asociado normalmente a la consola). Utiliza el operador de inserción `<<`.
    
- **`std::cin`:** Flujo de entrada estándar (asociado al teclado). Utiliza el operador de extracción `>>`.
    
- **`std::cerr`:** Flujo de error estándar, no amortiguado (_unbuffered_), para mensajes de diagnóstico críticos.
    
- **`std::clog`:** Flujo de registro estándar, similar a `cerr` pero amortiguado.
    

Los manipuladores como `std::endl` insertan un carácter de nueva línea y fuerzan el vaciado del búfer (_flush_) del flujo de salida.

## 1.7 Control de flujo básico

El control de flujo permite alterar la ejecución secuencial del código basándose en condiciones o repeticiones.

- **Estructuras Condicionales:**
    
    - `if-else`: Ejecución bifurcada basada en una expresión booleana.
        
    - `switch-case`: Selección múltiple basada en el valor de una variable integral.
        
- **Estructuras de Repetición (Bucles):**
    
    - `while`: Evalúa la condición antes de cada iteración.
        
    - `do-while`: Evalúa la condición después de la primera ejecución, garantizando al menos una iteración.
        
    - `for`: Estructura compacta que incluye inicialización, condición de parada y expresión de actualización.
        
    - **Range-based for (C++11):** Itera sobre todos los elementos de un contenedor o rango:
        
        `for (const auto& elemento : contenedor) { ... }`
        

> [!example] foto
> 
> Diagrama de flujo que compare la lógica de un bucle `while` frente a un `do-while`, enfatizando el punto de evaluación de la condición y la ruta de ejecución cuando la condición es falsa desde el inicio.


# 2. Programación Estructurada

## 2.1 Funciones y prototipos

En C++, una función es una unidad modular de código diseñada para realizar una tarea específica, permitiendo la reutilización y la abstracción. La declaración de una función se divide habitualmente en dos partes: el **prototipo** (o firma) y la **definición**.

- **Prototipo:** Informa al compilador sobre el nombre de la función, el tipo de retorno y la lista de tipos de sus parámetros. Esto permite que la función sea invocada antes de su implementación completa en el archivo de código fuente.
    
    - Sintaxis: `tipo_retorno nombre_funcion(lista_parametros);`
        
- **Definición:** Contiene el bloque de código (_cuerpo_) que se ejecuta.
    
    - Sintaxis:
        
        C++
        
        ```
        int sumar(int a, int b) {
            return a + b;
        }
        ```
        

La firma de la función determina su identidad para el enlazador (_linker_). C++ permite la **sobrecarga de funciones**, donde múltiples funciones pueden compartir el mismo nombre siempre que sus listas de parámetros (número o tipo) difieran.

## 2.2 Paso de parámetros

El mecanismo de transferencia de datos entre el llamador y la función es crítico para la eficiencia y la seguridad de la memoria. Existen tres métodos principales:

1. **Paso por Valor:** Se crea una copia local del argumento. Las modificaciones dentro de la función no afectan a la variable original. Es costoso para estructuras de datos de gran tamaño.
    
2. **Paso por Puntero:** Se pasa la dirección de memoria de la variable. Permite modificar el valor original y es el método heredado de C.
    
3. **Paso por Referencia:** Se pasa un alias de la variable original. Combina la sintaxis limpia del paso por valor con la eficiencia y capacidad de modificación del paso por puntero.
    
    - **Referencia Constante (`const T&`):** Es el estándar académico para pasar objetos grandes que no deben ser modificados, evitando copias innecesarias y garantizando la integridad de los datos.
        

> [!example] foto
> 
> Diagrama de la pila de llamadas (_stack_) que ilustre la diferencia en el uso de memoria entre el paso por valor (duplicación de datos) y el paso por referencia (apuntamiento a la dirección de memoria original).

## 2.3 Ámbito y duración de variables

El sistema de gestión de nombres en C++ se rige por reglas de visibilidad y persistencia:

- **Ámbito (Scope):** Determina en qué parte del código es accesible un identificador.
    
    - _Local:_ Limitado al bloque `{}` donde se declara.
        
    - _Global:_ Declarado fuera de cualquier función, accesible en toda la unidad de traducción.
        
    - _De Clase/Namespace:_ Restringido a la entidad que lo contiene.
        
- **Duración (Storage Duration):**
    
    - _Automática:_ Variables locales que se destruyen al salir del ámbito (almacenadas en el _stack_).
        
    - _Estática (`static`):_ Persisten durante toda la ejecución del programa, manteniendo su valor entre llamadas a funciones.
        
    - _Dinámica:_ Cuyo ciclo de vida es controlado manualmente por el programador (almacenadas en el _heap_).
        

## 2.4 Arreglos unidimensionales y multidimensionales

Los arreglos (_arrays_) son colecciones de elementos del mismo tipo almacenados en posiciones de memoria contiguas.

- **Unidimensionales:** Definidos por `T nombre[N]`, donde $N$ debe ser una constante conocida en tiempo de compilación para arreglos estáticos. El acceso se realiza mediante el índice $i$, donde $0 \leq i < N$.
    
- **Multidimensionales:** Estructuras de arreglos de arreglos. Un arreglo bidimensional `int matriz[M][N]` se interpreta en memoria como una fila continua de $M \cdot N$ elementos (disposición _row-major_).
    

La dirección de memoria del elemento $(i, j)$ en una matriz de dimensiones $M \times N$ se calcula internamente como:

$$\text{Dirección} = \text{Base} + (i \cdot N + j) \cdot \text{sizeof}(T)$$

## 2.5 Cadenas de caracteres

C++ gestiona secuencias de texto de dos formas fundamentales:

1. **Cadenas de estilo C (`char*`):** Arreglos de caracteres que terminan con el carácter nulo `\0`. Son propensas a errores de desbordamiento de búfer (_buffer overflow_).
    
2. **Clase `std::string`:** Parte de la biblioteca estándar, gestiona dinámicamente la memoria, ofrece seguridad y métodos integrados para concatenación, búsqueda y comparación.
    

## 2.6 Punteros básicos

Un puntero es una variable cuyo valor es la dirección de memoria de otra variable. Es una herramienta potente para el acceso indirecto y la gestión de memoria.

- **Operador de dirección (`&`):** Obtiene la dirección de una variable.
    
- **Operador de desreferencia (`*`):** Accede al contenido almacenado en la dirección que contiene el puntero.
    

Un puntero nulo se representa en C++ moderno como `nullptr`, reemplazando la macro `NULL` para mayor seguridad de tipos.

> [!example] foto
> 
> Representación visual de un puntero $p$ almacenando la dirección $0x7ffee$ de una variable entera $x$. El diagrama debe mostrar la relación entre el identificador, la dirección de memoria y el valor contenido.

## 2.7 Referencias y alias

Una referencia es un nombre alternativo para una variable ya existente. A diferencia de los punteros:

- No pueden ser nulas.
    
- Deben inicializarse al momento de su declaración.
    
- No pueden ser reasignadas para referenciar a otro objeto después de su creación.
    

Desde un punto de vista sintáctico, se comportan como el objeto original, pero internamente el compilador suele implementarlas mediante punteros constantes desreferenciados automáticamente.


# 3. Programación Orientada a Objetos

## 3.1 Clases y objetos

La **clase** es el pilar fundamental de la POO en C++, definiéndose como un tipo de dato definido por el usuario que actúa como un plano o molde (_blueprint_). Un **objeto** es una instancia particular de una clase que ocupa un lugar en la memoria.

- **Atributos:** Representan el estado del objeto (variables miembro).
    
- **Métodos:** Representan el comportamiento del objeto (funciones miembro).
    

Desde una perspectiva de bajo nivel, una clase sin funciones virtuales tiene un tamaño en memoria igual a la suma del tamaño de sus atributos (ajustado por el _padding_ de alineación de la arquitectura).

## 3.2 Encapsulamiento y control de acceso

El encapsulamiento es la ocultación de los detalles de implementación de un objeto, exponiendo solo una interfaz segura. C++ implementa esto mediante etiquetas de acceso:

- **`public`:** Los miembros son accesibles desde cualquier parte del programa.
    
- **`private`:** Los miembros solo son accesibles por funciones miembro de la propia clase y por clases/funciones `friend`. Es el nivel por defecto en una `class`.
    
- **`protected`:** Los miembros son accesibles por la clase base y por sus clases derivadas.
    

> [!example] foto
> 
> Diagrama de visibilidad que ilustre un objeto como una "caja negra", donde los datos privados están en el núcleo y solo son manipulables a través de los métodos públicos (getters y setters) en la periferia.

## 3.3 Constructores y destructores

Son funciones miembro especiales que gestionan el ciclo de vida del objeto:

- **Constructor:** Se invoca automáticamente al crear el objeto. No tiene tipo de retorno. C++ permite la **Lista de Inicialización de Miembros**, la cual es más eficiente que la asignación dentro del cuerpo del constructor:
    
    `Clase() : atributo1(valor) {}`
    
- **Destructor:** Se invoca cuando el objeto sale de ámbito o es liberado con `delete`. Su nombre es precedido por una tilde (`~`). Es esencial para liberar recursos dinámicos y evitar fugas de memoria (_memory leaks_).
    

## 3.4 Sobrecarga de funciones y operadores

C++ permite redefinir el comportamiento de los operadores estándar (`+`, `-`, `*`, `<<`, `==`, etc.) para tipos de datos personalizados.

- **Sobrecarga de funciones:** Definir múltiples funciones con el mismo nombre pero diferente firma.
    
- **Sobrecarga de operadores:** Se realiza mediante la palabra clave `operator`. Por ejemplo, para sumar dos objetos `Vector`:
    
    `Vector operator+(const Vector& v) { ... }`
    

Esto permite que los tipos definidos por el usuario se comporten de manera intuitiva y similar a los tipos primitivos.

## 3.5 Herencia simple y múltiple

La herencia permite crear nuevas clases (derivadas) a partir de clases existentes (base), fomentando la reutilización de código.

- **Herencia Simple:** Una clase deriva de una única clase base.
    
- **Herencia Múltiple:** Una clase puede derivar de dos o más clases base. Esto puede introducir el "Problema del Diamante", el cual se resuelve en C++ mediante la **Herencia Virtual** (`virtual public Base`).
    

La sintaxis de derivación define cómo se heredan los niveles de acceso:

`class Derivada : public Base { ... };`

## 3.6 Polimorfismo y métodos virtuales

El polimorfismo permite tratar objetos de diferentes clases (dentro de una jerarquía) de manera uniforme a través de punteros o referencias a la clase base.

- **Funciones Virtuales (`virtual`):** Indican al compilador que la resolución de la llamada a la función debe realizarse en **tiempo de ejecución** (_dynamic binding_) y no en tiempo de compilación.
    
- **VTable (Virtual Method Table):** Mecanismo interno donde cada objeto con métodos virtuales contiene un puntero (`vptr`) a una tabla de direcciones de funciones, permitiendo el despacho dinámico.
    

> [!example] foto
> 
> Esquema de una Tabla de Métodos Virtuales (VTable) que muestre cómo un puntero de Clase Base apunta a la implementación correcta de la Clase Derivada en tiempo de ejecución.

## 3.7 Clases abstractas e interfaces

Una clase se vuelve **abstracta** si contiene al menos una **función virtual pura**, declarada con la sintaxis `= 0`:

`virtual void dibujar() = 0;`

- No se pueden instanciar objetos de una clase abstracta.
    
- Sirven como contratos o interfaces que las clases derivadas están obligadas a implementar.
    
- Permiten definir una interfaz común para un grupo de clases relacionadas sin proporcionar una implementación base.



# 4. Gestión de Memoria y Recursos

## 4.1 Memoria automática y dinámica

En C++, el programador tiene un control granular sobre dónde y cómo se almacenan los objetos. La memoria se divide principalmente en dos áreas de gestión:

- **Memoria Automática (Stack):** Es el área donde se almacenan las variables locales y los parámetros de funciones. La asignación y liberación son gestionadas automáticamente por el compilador al entrar y salir de un ámbito (_scope_). Es extremadamente rápida (LIFO - _Last In, First Out_), pero su tamaño es limitado y se determina en tiempo de compilación.
    
- **Memoria Dinámica (Heap):** Se utiliza para objetos cuya duración de vida debe trascender el ámbito donde fueron creados o cuyo tamaño no se conoce hasta el tiempo de ejecución. La gestión es manual o mediada por abstracciones de la biblioteca estándar. Es más lenta que el _stack_ y está sujeta a fragmentación.
    

## 4.2 Operadores new y delete

Para la gestión manual del _heap_, C++ proporciona los operadores `new` y `delete`, que superan a las funciones `malloc` y `free` de C al integrar la invocación de constructores y destructores.

- **`new`:** Reserva espacio suficiente para el tipo de dato solicitado e invoca al constructor. Retorna un puntero al tipo del objeto.
    
    - Ejemplo: `int* p = new int(10);`
        
- **`delete`:** Invoca al destructor del objeto y libera la memoria para que el sistema operativo pueda reutilizarla.
    
- **Arreglos dinámicos:** Se utilizan `new[]` y `delete[]`. Es imperativo emparejarlos correctamente para evitar comportamientos indefinidos:
    
    $$\text{Uso correcto: } \text{new } T[N] \rightarrow \text{delete[] } p;$$
    

## 4.3 Manejo de punteros avanzados

El uso de punteros crudos (_raw pointers_) es propenso a errores como fugas de memoria, punteros colgantes (_dangling pointers_) y desreferenciación de punteros nulos. La ingeniería de software moderna en C++ exige técnicas para mitigar estos riesgos:

- **Punteros Constantes:**
    
    - `const T* p`: Puntero a un dato constante (no se puede modificar el valor apuntado).
        
    - `T* const p`: Puntero constante (no se puede cambiar la dirección a la que apunta).
        
- **Punteros a punteros:** Representados como `T**`, se utilizan frecuentemente para matrices dinámicas o para modificar la dirección de un puntero dentro de una función.
    

## 4.4 Referencias inteligentes estándar

Introducidas en C++11 y perfeccionadas en versiones posteriores, las _smart pointers_ automatizan la liberación de memoria mediante el conteo de referencias y la gestión de propiedad (_ownership_).

1. **`std::unique_ptr<T>`:** Implementa la propiedad exclusiva. No se puede copiar, solo mover (`std::move`). Libera el recurso automáticamente cuando sale de ámbito.
    
2. **`std::shared_ptr<T>`:** Implementa propiedad compartida. Utiliza un bloque de control con un contador de referencias. El recurso se libera solo cuando el último `shared_ptr` es destruido.
    
3. **`std::weak_ptr<T>`:** Referencia no propietaria a un objeto gestionado por `shared_ptr`. Se utiliza para romper ciclos de referencia que causarían fugas de memoria.
    

> [!example] foto
> 
> Diagrama de un `std::shared_ptr` mostrando el objeto en el _heap_ y el bloque de control asociado que contiene el "Reference Count". Debe ilustrar cómo el contador incrementa al copiar y decrementa al destruir instancias.

## 4.5 Manejo de excepciones

C++ proporciona un mecanismo para gestionar errores en tiempo de ejecución de forma estructurada, separando el flujo principal de la lógica de recuperación.

- **`try`:** Bloque que contiene el código susceptible de generar una anomalía.
    
- **`throw`:** Lanza un objeto (usualmente derivado de `std::exception`) cuando se detecta un error.
    
- **`catch`:** Captura la excepción y ejecuta la lógica de mitigación.
    
- **Garantías de excepción:** Los programas deben aspirar a la "garantía fuerte" (si ocurre una excepción, el estado del sistema vuelve al punto anterior al error) o al menos a la "garantía básica" (no hay fugas de recursos).
    

## 4.6 RAII y gestión de recursos

**RAII (Resource Acquisition Is Initialization)** es el paradigma fundamental de C++ para la gestión de recursos (memoria, _file handles_, _mutexes_, conexiones de red).

El principio establece que:

1. La adquisición de un recurso ocurre durante la construcción de un objeto.
    
2. La liberación del recurso ocurre automáticamente durante la destrucción del objeto.
    

Gracias al determinismo de los destructores en C++ (a diferencia de lenguajes con _Garbage Collection_), RAII garantiza que los recursos se liberen tan pronto como el objeto que los posee sale de ámbito, incluso si ocurre una excepción. Este diseño elimina la necesidad de liberar recursos manualmente, reduciendo drásticamente los errores de programación.

# 5. Biblioteca Estándar y Paradigmas

## 5.1 Contenedores de la STL

La **Standard Template Library (STL)** provee una colección de estructuras de datos altamente optimizadas, categorizadas según su método de organización y acceso:

- **Contenedores de Secuencia:** Mantienen el orden de inserción.
    
    - `std::vector<T>`: Arreglo dinámico con acceso aleatorio $O(1)$ y crecimiento amortizado.
        
    - `std::list<T>`: Lista doblemente enlazada; eficiente para inserciones en cualquier posición $O(1)$, pero acceso secuencial $O(n)$.
        
    - `std::deque<T>`: Cola de doble extremo.
        
- **Contenedores Asociativos:** Organizan datos mediante claves, usualmente implementados como árboles de búsqueda balanceados (Red-Black Trees).
    
    - `std::map<Key, T>`: Almacena pares clave-valor ordenados por la clave.
        
    - `std::set<T>`: Almacena elementos únicos ordenados.
        
- **Contenedores Asociativos no Ordenados:** Basados en tablas hash, ofrecen acceso promedio $O(1)$.
    
    - `std::unordered_map` y `std::unordered_set`.
        

## 5.2 Iteradores y algoritmos

Los **iteradores** actúan como una abstracción que conecta los contenedores con los algoritmos. Funcionan como una generalización de los punteros, permitiendo recorrer cualquier estructura de datos de manera uniforme.

Los **algoritmos** de la STL son funciones genéricas que operan sobre rangos definidos por iteradores (`begin` y `end`). Se clasifican en:

- **No modificadores:** `std::find`, `std::count`, `std::accumulate`.
    
- **Modificadores:** `std::sort`, `std::copy`, `std::transform`, `std::reverse`.
    

Esta separación entre datos (contenedores) y lógica (algoritmos) es el núcleo de la flexibilidad de la STL.

## 5.3 Plantillas y programación genérica

Las **plantillas (templates)** permiten escribir código donde el tipo de dato es un parámetro. Esto habilita la **programación genérica**, permitiendo que una sola implementación funcione para múltiples tipos sin pérdida de eficiencia (polimorfismo en tiempo de compilación).

- **Plantillas de Función:** `template <typename T> T max(T a, T b) { return (a > b) ? a : b; }`
    
- **Plantillas de Clase:** Permiten crear clases contenedoras como `Stack<T>`.
    

El proceso de **instanciación** ocurre cuando el compilador genera el código específico para el tipo utilizado, asegurando que no haya sobrecarga (_overhead_) en tiempo de ejecución.

> [!example] foto
> 
> Diagrama del proceso de especialización de plantillas: desde el código genérico (.h) hasta la generación de código objeto específico para `int`, `double` y clases de usuario durante la compilación.

## 5.4 Expresiones lambda

Introducidas en C++11, las **lambdas** son funciones anónimas definidas directamente en el cuerpo del código. Son objetos de función (_functors_) temporales, extremadamente útiles para pasar lógica personalizada a algoritmos de la STL.

Sintaxis: `[captura](parámetros) -> tipo_retorno { cuerpo; }`

La **cláusula de captura** permite que la lambda acceda a variables del ámbito local, ya sea por valor `[=]` o por referencia `[&]`.

## 5.5 Programación funcional básica

Aunque C++ es predominantemente imperativo y orientado a objetos, las versiones modernas han integrado conceptos de programación funcional:

- **Funciones de orden superior:** Funciones que reciben otras funciones como argumentos (común en algoritmos con predicados).
    
- **Inmutabilidad:** Uso extensivo de `const` y `constexpr`.
    
- **`std::function`:** Un envoltorio polimórfico para cualquier entidad invocable (punteros a función, lambdas, objetos de función).
    
- **Composición de funciones:** Facilitada por la librería `<ranges>` (C++20), que permite encadenar operaciones mediante el operador de tubería (_pipe_) `|`.
    

## 5.6 Entrada y salida avanzada

Más allá de la consola, C++ gestiona el flujo de datos hacia archivos y cadenas de texto mediante jerarquías de clases en `<fstream>` y `<sstream>`.

- **`std::ifstream` / `std::ofstream`:** Flujos para lectura y escritura de archivos en disco. Soporta modos binarios y de texto.
    
- **`std::stringstream`:** Permite tratar una cadena `std::string` como un flujo, facilitando conversiones complejas entre tipos y formateo de texto avanzado.
    
- **Sobrecarga de operadores `<<` y `>>`:** Permite que objetos de clases personalizadas sean enviados directamente a cualquier flujo de salida o entrada.
    

## 5.7 Organización modular del código

Tradicionalmente, C++ se organiza en:

1. **Archivos de cabecera (.h/.hpp):** Contienen declaraciones y prototipos.
    
2. **Archivos de implementación (.cpp):** Contienen la definición de la lógica.
    

**C++20 introdujo los Módulos (`export module`),** que solucionan problemas históricos del modelo de inclusión por preprocesador (`#include`):

- **Tiempos de compilación:** Los módulos se compilan una vez y se importan de forma binaria, evitando la re-exploración de miles de líneas de encabezados.
    
- **Aislamiento:** Evitan la propagación de macros y fugas de nombres internas.
    

> [!example] foto
> 
> Comparativa estructural entre el modelo antiguo de inclusión de archivos de cabecera (jerarquía de dependencias compleja) y el nuevo modelo de módulos de C++20 (unidades de traducción aisladas y pre-compiladas).
