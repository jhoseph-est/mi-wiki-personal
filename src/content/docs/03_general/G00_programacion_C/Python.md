---
title: Python
---

# Python

## 1. Fundamentos del lenguaje

### 1.1 Sintaxis básica y estructura

La sintaxis de Python se distingue por su enfoque en la legibilidad y el uso de la **indentación significativa** para delimitar bloques de código, en contraste con el uso de llaves `{}` o palabras clave `end` presentes en otros lenguajes de programación. Este diseño se fundamenta en la _regla de la fuera de juego_ (off-side rule), donde el nivel de sangría determina la jerarquía lógica de las instrucciones.

Un programa en Python se estructura como una secuencia de sentencias lógicas. Cada línea física suele representar una línea lógica, aunque es posible extender una sentencia en múltiples líneas mediante el carácter de escape de nueva línea `\` o el uso de delimitadores naturales como paréntesis `()`, corchetes `[]` y llaves `{}`. El intérprete de Python procesa el código de manera secuencial, transformando el código fuente en _bytecode_ que se ejecuta en la Python Virtual Machine (PVM).

> [!example] foto
> 
> Diagrama de flujo que ilustra la arquitectura de ejecución de Python: desde el código fuente (.py), pasando por el compilador que genera el bytecode (.pyc), hasta la interpretación final en la Máquina Virtual de Python (PVM).

### 1.2 Tipos de datos primitivos

Python es un lenguaje de **tipado dinámico y fuerte**. Los tipos de datos primitivos son los bloques de construcción fundamentales para la manipulación de información:

- **Integers (`int`):** Representan números enteros de precisión arbitraria. A diferencia de lenguajes como C++, los enteros en Python 3 no tienen un límite de desbordamiento fijo, condicionado únicamente por la memoria disponible del sistema.
    
- **Floating Point (`float`):** Implementados típicamente mediante `double` en C (estándar IEEE 754). Representan números reales con una parte fraccionaria. Se definen mediante la presencia de un punto decimal o notación científica (e.g., $1.5 \times 10^{-3}$ se expresa como `1.5e-3`).
    
- **Booleans (`bool`):** Subtipo de los enteros que solo puede tomar los valores `True` (1) o `False` (0). Son fundamentales en la evaluación de expresiones lógicas.
    
- **Strings (`str`):** Secuencias inmutables de caracteres Unicode. La inmutabilidad implica que cualquier operación de modificación resulta en la creación de un nuevo objeto en memoria.
    

### 1.3 Variables y asignación

En Python, las variables no son contenedores de datos, sino **nombres o etiquetas que apuntan a objetos** en la memoria. Este concepto se conoce como _referencia a objeto_.

La asignación se realiza mediante el operador `=`. Debido al tipado dinámico, una variable puede ser reasignada a un objeto de un tipo diferente durante el tiempo de ejecución.

$$x = 10$$

$$x = "Texto"$$

En el primer caso, `x` apunta a un objeto de tipo `int`. En el segundo, la referencia cambia hacia un objeto `str`. El sistema de gestión de memoria de Python utiliza un **recolector de basura (Garbage Collector)** basado principalmente en el conteo de referencias para liberar la memoria de aquellos objetos que ya no tienen etiquetas vinculadas.

### 1.4 Operadores aritméticos y lógicos

Los operadores permiten realizar transformaciones y evaluaciones sobre los datos primitivos.

**Operadores Aritméticos:**

- Suma: `+`
    
- Resta: `-`
    
- Multiplicación: `*`
    
- División real: `/` (siempre devuelve un `float`).
    
- División entera: `//` (devuelve el cociente truncado).
    
- Módulo: `%` (resto de la división).
    
- Exponenciación: `**` (e.g., $x^n$ se escribe `x ** n`).
    

**Operadores Lógicos:**

Siguen el álgebra de Boole y se evalúan mediante cortocircuito (_short-circuit evaluation_):

- `and`: Devuelve `True` si ambos operandos son verdaderos.
    
- `or`: Devuelve `True` si al menos uno de los operandos es verdadero.
    
- `not`: Invierte el valor de verdad.
    

### 1.5 Entrada y salida estándar

La interacción con el usuario o con otros procesos se gestiona a través de los flujos `stdin` y `stdout`.

- **Salida (`print`):** La función `print()` envía representaciones textuales de objetos al flujo de salida estándar. Soporta argumentos como `sep` (separador) y `end` (carácter final, por defecto `\n`).
    
- **Entrada (`input`):** La función `input()` detiene la ejecución para leer una línea desde la entrada estándar, devolviendo siempre un objeto de tipo `str`. Para operaciones aritméticas, es imperativo realizar un _casting_ o conversión de tipo explícita:
    
    $$n = \text{int}(\text{input}(\text{"Ingrese un número: "}))$$
    

### 1.6 Control de flujo condicional

El control de flujo permite la ejecución divergente basada en predicados booleanos. La estructura fundamental es el bloque `if-elif-else`.

Python

```
if condicion_a:
    # Bloque ejecutado si condicion_a es True
elif condicion_b:
    # Bloque ejecutado si condicion_a es False y condicion_b es True
else:
    # Bloque ejecutado si todas las condiciones anteriores son False
```

Es crucial notar que Python evalúa las condiciones de forma secuencial. Una vez que una condición se cumple, se ejecuta su bloque correspondiente y se ignora el resto de la estructura condicional. Las expresiones de comparación utilizadas suelen ser `==`, `!=`, `<`, `>`, `<=`, `>=`.

### 1.7 Bucles y control iterativo

Python implementa dos estructuras principales para la repetición de instrucciones:

- **Bucle `while`:** Ejecuta un bloque de código mientras una condición booleana permanezca verdadera. Es ideal cuando el número de iteraciones no se conoce a priori.
    
- **Bucle `for`:** Es un iterador de colecciones. A diferencia del `for` tradicional en lenguajes como C, en Python se utiliza para recorrer elementos de un objeto iterable (como una lista, un rango o una cadena).
    

**Sentencias de control de bucle:**

1. `break`: Finaliza prematuramente la ejecución del bucle.
    
2. `continue`: Omite el resto del código en la iteración actual y salta a la siguiente evaluación de la condición.
    
3. `else` en bucles: Un bloque opcional que se ejecuta únicamente si el bucle termina de forma natural (es decir, no fue interrumpido por un `break`).
    

> [!example] foto
> 
> Diagrama de flujo comparativo entre un bucle `while` y un bucle `for`, mostrando los puntos de decisión y el flujo de las sentencias `break` y `continue`.


## 2. Estructuras de datos

### 2.1 Listas y operaciones básicas

Las listas en Python son secuencias **mutables** y heterogéneas de objetos. Técnicamente, se implementan como arreglos dinámicos de punteros a objetos, lo que permite un acceso aleatorio de complejidad constante $O(1)$ mediante indexación.

- **Mutabilidad:** A diferencia de las cadenas, los elementos de una lista pueden modificarse _in-situ_ sin necesidad de crear una nueva estructura en memoria.
    
- **Indexación y Slicing:** Python utiliza un sistema de índices basado en cero. El _slicing_ permite extraer subconjuntos mediante la sintaxis `lista[inicio:fin:paso]`, donde `fin` es exclusivo.
    
- **Operaciones Principales:**
    
    - `append(x)`: Agrega un elemento al final ($O(1)$ amortizado).
        
    - `insert(i, x)`: Inserta un elemento en una posición específica ($O(n)$).
        
    - `pop(i)`: Elimina y devuelve el elemento en el índice $i$.
        
    - `sort()`: Ordena la lista utilizando el algoritmo **Timsort**, una combinación de _Merge Sort_ e _Insertion Sort_ con una complejidad de $O(n \log n)$.
        

### 2.2 Tuplas y características

Las tuplas son secuencias **inmutables** de longitud fija. Una vez definidas, no es posible añadir, eliminar o modificar sus elementos. Esta inmutabilidad ofrece ventajas en términos de seguridad de datos y rendimiento.

- **Hashabilidad:** Debido a su naturaleza inmutable, una tupla puede ser utilizada como clave en un diccionario o elemento de un conjunto, siempre que los objetos que contenga sean también inmutables.
    
- **Empaquetado y Desempaquetado:** Permiten la asignación múltiple de variables de forma concisa:
    
    $$a, b = (10, 20)$$
    
- **Optimización:** A nivel de implementación en CPython, las tuplas pequeñas se benefician de una gestión de memoria más eficiente que las listas, reduciendo la sobrecarga de asignación.
    

### 2.3 Conjuntos y operaciones

El tipo de dato `set` es una colección **no ordenada** de elementos únicos. Internamente, se implementan mediante una **tabla hash**, lo que garantiza que la verificación de pertenencia (`x in set`) tenga una complejidad promedio de $O(1)$.

- **Restricciones:** Los elementos de un conjunto deben ser _hashables_ (inmutables). No se permiten duplicados; cualquier intento de inserción de un elemento existente es ignorado.
    
- **Operaciones de Álgebra de Conjuntos:**
    
    - Unión ($A \cup B$): `set_a | set_b`
        
    - Intersección ($A \cap B$): `set_a & set_b`
        
    - Diferencia ($A \setminus B$): `set_a - set_b`
        
    - Diferencia simétrica ($A \triangle B$): `set_a ^ set_b`
        

### 2.4 Diccionarios y mapeo clave valor

El diccionario (`dict`) es una estructura asociativa que vincula **claves únicas** con valores. Al igual que los conjuntos, su eficiencia radica en una implementación basada en tablas hash altamente optimizadas.

- **Claves y Valores:** Las claves deben ser objetos inmutables para garantizar que su valor hash no cambie durante la vida del diccionario. Los valores pueden ser de cualquier tipo.
    
- **Acceso y Modificación:** El acceso por clave tiene un costo de $O(1)$ en el caso promedio. Desde Python 3.7+, los diccionarios mantienen el orden de inserción de las claves como una característica del lenguaje.
    
- **Métodos Esenciales:**
    
    - `keys()`, `values()`, `items()`: Devuelven objetos vista que reflejan cambios en el diccionario en tiempo real.
        
    - `get(key, default)`: Permite recuperar un valor evitando excepciones si la clave no existe.
        

> [!example] foto
> 
> Representación esquemática de una Tabla Hash: muestra cómo una función hash transforma una clave en un índice de un arreglo, gestionando colisiones y permitiendo el acceso rápido a los valores asociados.

### 2.5 Comprensiones de colecciones

Las comprensiones (_comprehensions_) proporcionan una sintaxis declarativa y compacta para crear nuevas colecciones a partir de iterables existentes. Son generalmente más eficientes que los bucles `for` tradicionales debido a que la iteración ocurre a nivel de C dentro del intérprete.

- **List Comprehension:** `[f(x) for x in iterable if condicion]`
    
- **Set Comprehension:** `{f(x) for x in iterable if condicion}`
    
- **Dict Comprehension:** `{clave: valor for x in iterable}`
    

Estas estructuras permiten integrar la lógica de transformación y filtrado en una sola línea de código, mejorando la densidad informativa del programa.

### 2.6 Iteradores y generadores

Python utiliza el **Protocolo de Iteración** para recorrer colecciones de manera uniforme.

- **Iterador:** Un objeto que implementa los métodos `__iter__()` y `__next__()`. Mantiene un estado interno para saber qué elemento debe entregar a continuación.
    
- **Generador:** Es una función especial que utiliza la palabra clave `yield`. En lugar de devolver un valor y finalizar, el generador suspende su ejecución, preservando su estado local, y devuelve un valor al llamador.
    
    - **Evaluación Perezosa (Lazy Evaluation):** Los generadores no almacenan todos los elementos en memoria simultáneamente; los producen bajo demanda. Esto es crucial para procesar flujos de datos masivos o infinitos donde una lista causaría un desbordamiento de memoria (Memory Error).
        
- **Expresiones Generadoras:** Similares a las comprensiones de lista pero delimitadas por paréntesis `()`, retornando un objeto generador en lugar de una colección completa en memoria.



## 3. Programación modular y funciones

### 3.1 Definición y llamada de funciones

Las funciones en Python son **objetos de primera clase** (_first-class objects_), lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones y devueltas como valores. La definición se realiza mediante la palabra clave `def`, seguida del identificador y los paréntesis de parámetros.

La ejecución de una función crea un nuevo **marco de pila** (_stack frame_) en el intérprete, donde se gestionan las variables locales. La sintaxis fundamental es:

Python

```
def nombre_funcion(parametro1, parametro2):
    # Cuerpo de la función
    return resultado
```

Al invocar la función, el flujo de control se transfiere al bloque interno hasta encontrar una sentencia `return` o alcanzar el final del bloque (en cuyo caso devuelve `None` por defecto).

### 3.2 Parámetros y valores de retorno

Python ofrece una flexibilidad extrema en la definición de firmas de funciones, permitiendo diversos mecanismos de paso de argumentos:

- **Argumentos Posicionales:** Se asignan a los parámetros en el orden en que se declaran.
    
- **Argumentos de Palabra Clave (Keywords):** Se especifican mediante `nombre=valor` al llamar a la función, permitiendo alterar el orden.
    
- **Parámetros por Defecto:** Permiten definir valores predeterminados. **Nota técnica:** Los valores por defecto se evalúan una sola vez en el momento de la definición, no en cada llamada. Evite usar objetos mutables (como listas) como valores por defecto.
    
- **Empaquetado de Argumentos (`*args` y `**kwargs`):**
    
    - `*args`: Recoge un número arbitrario de argumentos posicionales en una tupla.
        
    - `**kwargs`: Recoge argumentos de palabra clave en un diccionario.
        

En cuanto al retorno, Python permite devolver múltiples valores separados por comas, lo cual técnicamente resulta en la devolución de una única **tupla** que luego puede ser desempaquetada por el llamador.

### 3.3 Ámbito de variables

El ámbito (_scope_) determina la visibilidad y vida de una variable. Python sigue la regla **LEGB** para la resolución de nombres:

1. **Local (L):** Definidas dentro de la función actual.
    
2. **Enclosing (E):** Definidas en funciones anidadas (clausuras o _closures_).
    
3. **Global (G):** Definidas al nivel superior del módulo.
    
4. **Built-in (B):** Nombres predefinidos en el lenguaje (e.g., `len`, `range`).
    

Para modificar una variable global dentro de una función, se debe declarar explícitamente con `global`. Para modificar variables de un ámbito superior en funciones anidadas, se utiliza `nonlocal`.

> [!example] foto
> 
> Diagrama de la regla LEGB que ilustra la jerarquía de búsqueda de nombres de variables desde el nivel más interno (Local) hacia el más externo (Built-in), mostrando cómo el intérprete resuelve las referencias.

### 3.4 Documentación y anotaciones

La claridad técnica se garantiza mediante el uso de **Docstrings** y **Type Hints**.

- **Docstrings:** Literales de cadena (usualmente triples comillas `"""`) situados inmediatamente después de la definición de la función. Son accesibles mediante el atributo `__doc__` o la función `help()`.
    
- **Anotaciones de Tipo (Type Hinting):** Introducidas en el PEP 484, permiten especificar los tipos esperados de los parámetros y el tipo de retorno. Aunque el intérprete no las impone en tiempo de ejecución, son fundamentales para herramientas de análisis estático como `mypy`.
    
    $$f(x: \text{int}, y: \text{int}) \rightarrow \text{int}$$
    

### 3.5 Manejo de errores y excepciones

Python utiliza el manejo de excepciones para gestionar errores de flujo de forma estructurada, siguiendo la filosofía **EAFP** (_Easier to Ask for Forgiveness than Permission_).

La estructura `try-except-else-finally` permite capturar anomalías sin interrumpir la ejecución del programa:

- `try`: Bloque donde se espera que ocurra un error.
    
- `except`: Captura excepciones específicas (e.g., `ValueError`, `KeyError`).
    
- `else`: Se ejecuta si no se lanzó ninguna excepción en el bloque `try`.
    
- `finally`: Bloque de limpieza que se ejecuta siempre, independientemente de si hubo error o no (ideal para cerrar conexiones o archivos).
    

La jerarquía de excepciones en Python deriva de la clase base `BaseException`.

### 3.6 Módulos y paquetes

La modularidad facilita la reutilización y organización del código en proyectos de gran escala.

- **Módulo:** Cualquier archivo `.py` que contiene definiciones y sentencias. Se incorpora mediante la sentencia `import`.
    
- **Paquete:** Es un directorio que contiene múltiples módulos y, tradicionalmente, un archivo `__init__.py` (aunque este último es opcional en versiones recientes para paquetes de espacio de nombres).
    
- **Sistema de Importación:** Cuando se importa un módulo, Python lo busca en las rutas definidas en `sys.path`. Para evitar colisiones, se recomienda el uso de rutas absolutas o relativas dentro de la estructura del paquete.


## 4. Programación orientada a objetos

### 4.1 Clases y objetos

La Programación Orientada a Objetos (POO) en Python se basa en el paradigma de que todo es un objeto. Una **clase** es un plano o plantilla (_blueprint_) que define la estructura y el comportamiento de los objetos creados a partir de ella. Un **objeto** es una instancia específica de esa clase, con su propio estado interno alojado en memoria.

En Python, las clases se definen con la palabra clave `class`. Al instanciar una clase, se invoca implícitamente el método constructor `__init__`, el cual inicializa el estado del objeto. Cada instancia mantiene un diccionario interno (`__dict__`) donde se almacenan sus atributos de instancia, permitiendo una flexibilidad que incluye la adición dinámica de atributos en tiempo de ejecución.

### 4.2 Atributos y métodos

Los componentes fundamentales de una clase son sus datos y sus funciones:

- **Atributos de Instancia:** Variables vinculadas a una instancia específica mediante el parámetro `self`. Representan el estado del objeto.
    
- **Atributos de Clase:** Variables compartidas por todas las instancias de la clase. Se definen directamente en el cuerpo de la clase, fuera de cualquier método.
    
- **Métodos de Instancia:** Funciones que operan sobre la instancia y requieren `self` como primer argumento para acceder a los atributos del objeto.
    
- **Métodos de Clase (`@classmethod`):** Reciben la clase (`cls`) como primer argumento. Se utilizan a menudo como constructores alternativos.
    
- **Métodos Estáticos (`@staticmethod`):** No reciben ni la instancia ni la clase. Son funciones de utilidad que residen en el espacio de nombres de la clase por razones de organización lógica.
    

### 4.3 Encapsulamiento y propiedades

A diferencia de lenguajes como Java o C++, Python no posee modificadores de acceso estrictos (`private`, `protected`). El encapsulamiento se gestiona mediante convenciones de nomenclatura y el uso de **propiedades**:

1. **Convención de Privacidad:** Un guion bajo inicial (`_variable`) indica que un atributo es de uso interno. Dos guiones bajos (`__variable`) activan el _name mangling_, transformando el nombre del atributo para evitar colisiones accidentales en la herencia.
    
2. **Decorador `@property`:** Permite definir métodos que se comportan como atributos. Esto facilita la validación de datos y la implementación de lógica de solo lectura o cálculo bajo demanda sin romper la interfaz pública de la clase.
    

### 4.4 Herencia y polimorfismo

La herencia permite que una clase (subclase) herede atributos y métodos de otra (superclase), promoviendo la reutilización de código.

- **Herencia Múltiple:** Python soporta la herencia de múltiples clases. La resolución de conflictos de nombres se gestiona mediante el **MRO (Method Resolution Order)**, que utiliza el algoritmo **C3 Linearization**.
    
- **Función `super()`:** Proporciona una forma delegada de llamar a métodos de la superclase, respetando el orden establecido por el MRO.
    
- **Polimorfismo y Duck Typing:** "Si camina como un pato y grazna como un pato, entonces es un pato". El polimorfismo en Python no depende de la jerarquía de tipos formal, sino de la presencia de métodos o comportamientos específicos en los objetos.
    

> [!example] foto
> 
> Diagrama de jerarquía de clases que ilustra la herencia múltiple y el orden de resolución de métodos (MRO), mostrando cómo Python navega por las clases padre para encontrar un método específico.

### 4.5 Métodos especiales

Los métodos especiales, también conocidos como **métodos dunder** (double underscore), permiten que los objetos personalizados se integren con la sintaxis nativa de Python. Algunos de los más relevantes incluyen:

- `__str__(self)` y `__repr__(self)`: Definen la representación textual del objeto para usuarios y desarrolladores, respectivamente.
    
- `__len__(self)`: Permite el uso de la función integrada `len()`.
    
- `__getitem__(self, key)`: Permite el acceso mediante corchetes (indexación).
    
- **Operaciones Aritméticas:** Métodos como `__add__`, `__sub__` o `__mul__` permiten sobrecargar operadores como `+`, `-` y `*`.
    
    $$\text{Objeto}_A + \text{Objeto}_B \implies \text{Objeto}_A.\_\_add\_\_(\text{Objeto}_B)$$
    

### 4.6 Composición y agregación

Estos conceptos representan relaciones de "tiene un" (_has-a_) entre objetos, a menudo preferibles sobre la herencia ("es un").

- **Composición:** Una relación fuerte donde el objeto contenido no tiene ciclo de vida independiente del objeto contenedor. Si el contenedor se destruye, el contenido también.
    
- **Agregación:** Una relación más débil donde el objeto contenido puede existir independientemente del contenedor.
    

La composición permite construir sistemas complejos ensamblando objetos más simples, lo que reduce el acoplamiento y facilita el mantenimiento y la escalabilidad del software.

> [!example] foto
> 
> Diagrama de clases UML comparativo entre Herencia (is-a) y Composición (has-a), destacando las diferencias en el acoplamiento y la propiedad de los objetos.




## 5. Bibliotecas y aplicaciones

### 5.1 Biblioteca estándar esencial

Python se define bajo la filosofía de **"Baterías incluidas"**, lo que implica que su biblioteca estándar es vasta y robusta, permitiendo realizar tareas complejas sin recurrir a dependencias externas.

- **`sys` y `os`:** Proporcionan una interfaz para interactuar con el intérprete y el sistema operativo, permitiendo la manipulación de rutas, variables de entorno y parámetros de ejecución.
    
- **`math` y `statistics`:** Implementan funciones matemáticas de alta precisión y herramientas de análisis estadístico básico.
    
- **`datetime`:** Gestión de fechas, tiempos y zonas horarias, esencial para el registro de eventos y la manipulación de series temporales.
    
- **`json`:** Codificación y decodificación del formato de intercambio de datos JSON, fundamental en el desarrollo web y la persistencia de configuraciones.
    
- **`collections`:** Ofrece tipos de datos especializados como `namedtuple`, `deque` y `Counter`, optimizados para casos de uso específicos que exceden las capacidades de las estructuras primitivas.
    

### 5.2 Manejo de archivos

La interacción con el sistema de archivos se realiza primordialmente mediante la función integrada `open()`, la cual devuelve un objeto de archivo (_file object_).

Es una práctica estándar el uso de la sentencia **`with` (Gestor de Contexto)** para la manipulación de archivos. El protocolo del gestor de contexto asegura que los recursos se liberen (el archivo se cierre) de forma determinista, incluso si ocurre una excepción durante el procesamiento.

Python

```
with open('archivo.txt', 'r', encoding='utf-8') as f:
    contenido = f.read()
```

Los modos de apertura más comunes incluyen `'r'` (lectura), `'w'` (escritura con truncamiento), `'a'` (anexado) y `'b'` (modo binario para archivos no textuales).

### 5.3 Procesamiento de datos básicos

El procesamiento de datos en Python puro se apoya en el uso de iteradores y estructuras de datos optimizadas para transformar información cruda en conocimiento estructurado.

- **Serialización:** Además de JSON, Python ofrece `pickle` para la serialización de objetos de Python en formato binario, permitiendo persistir estados complejos de objetos.
    
- **CSV:** El módulo `csv` facilita la lectura y escritura de archivos tabulares, gestionando automáticamente delimitadores y dialectos específicos.
    
- **Análisis de cadenas:** El uso de métodos de cadena (`split`, `join`, `strip`) junto con el módulo `re` (Expresiones Regulares) permite realizar limpiezas y extracciones de datos con rigor técnico.
    

### 5.4 Interfaces de línea de comandos

Las interfaces de línea de comandos (CLI) son esenciales para herramientas de automatización y administración de sistemas. Python facilita la creación de estas interfaces mediante:

- **`sys.argv`:** Una lista que contiene los argumentos pasados al script desde la consola.
    
- **`argparse`:** Biblioteca estándar para diseñar interfaces profesionales. Permite definir argumentos posicionales, opcionales, tipos de datos, valores por defecto y la generación automática de mensajes de ayuda (`--help`).
    

> [!example] foto
> 
> Diagrama que muestra el flujo de procesamiento de argumentos en una CLI: desde la entrada del usuario en la terminal, pasando por el motor de análisis de `argparse`, hasta la ejecución de la lógica interna del script.

### 5.5 Entornos virtuales y dependencias

La gestión de proyectos en Python requiere el aislamiento de las bibliotecas para evitar conflictos de versiones (el denominado "infierno de dependencias").

- **`venv`:** Módulo estándar para crear entornos virtuales. Cada entorno tiene su propio binario de Python y su propio directorio de instalación de paquetes.
    
- **`pip`:** El sistema de gestión de paquetes estándar para instalar y administrar bibliotecas desde el Python Package Index (PyPI).
    
- **`requirements.txt`:** Archivo de texto que lista todas las dependencias y versiones de un proyecto, permitiendo la replicabilidad del entorno mediante el comando `pip install -r requirements.txt`.
    

### 5.6 Introducción a pruebas automatizadas

La integridad técnica del código se valida mediante el desarrollo de pruebas. Python provee herramientas nativas y de terceros para asegurar que el comportamiento del software sea el esperado.

- **`unittest`:** El framework de pruebas unitarias inspirado en JUnit. Utiliza una arquitectura orientada a objetos donde las pruebas se definen en clases que heredan de `unittest.TestCase`.
    
- **`assert`:** Palabra clave utilizada para verificar condiciones internas. Si la condición es falsa, se lanza una excepción `AssertionError`.
    
- **`pytest`:** (Biblioteca externa líder) Permite escribir pruebas de forma más concisa mediante funciones simples y potentes mecanismos de _fixtures_ para la gestión de estados previos a las pruebas.
    

> [!example] foto
> 
> Ciclo de vida del Desarrollo Guiado por Pruebas (TDD): representación del ciclo Red-Green-Refactor (Fallo-Éxito-Refactorización) aplicado al flujo de trabajo de pruebas en Python.


