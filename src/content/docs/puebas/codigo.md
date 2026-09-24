---
title: "Archivo de Prueba y Estabilidad"
date: 2026-09-23
author: "Admin"
tags: ["prueba", "sistema"]
theme: "moderno"
---

# Documento de Validación del Sistema

Este documento contiene una estructura limpia y validada para comprobar que el parser de Markdown, KaTeX y el TOC funcionan sin interrupciones.

---

## 1. Sección de Textos y Formatos Básicos
Aquí evaluamos la estabilidad de los párrafos normales y los estilos de tipografía.

* Elemento de lista número uno con **negrita**.
* Elemento de lista número dos con *cursiva*.

> [!info] Nota de Verificación
> Los callouts deben renderizarse como tarjetas limpias con su respectivo borde lateral sin alterar la altura del documento.

---

## 2. Bloques de Código Seguros (Cerrados Correctamente)
A diferencia de los archivos que daban error, aquí los bloques de código abren y cierran de forma estricta.

```python
# Código Python de prueba
def calcular_velocidad(distancia: float, tiempo: float) -> float:
    if tiempo <= 0:
        raise ValueError("El tiempo debe ser mayor a cero")
    return distancia / tiempo

print("Resultado:", calcular_velocidad(100, 5))

```

```cpp
// Código C++ de prueba
#include <iostream>
using namespace std;

int main() {
    cout << "Sistema estable y sin errores de sintaxis." << endl;
    return 0;
}

```

```yaml
---
title: "Título de tu Apunte"
date: 2026-09-03
author: "Tu Nombre"
tags: ["etiqueta1", "etiqueta2"]
orden: 2
theme: "academico" # Opcional: moderno, minimalista, academico, oscuro
---
```

---

## 3. Fórmulas Matemáticas con KaTeX

Verificamos expresiones en línea y en bloque debidamente delimitadas.

### 3.1 Ecuaciones Inline

La constante gravitacional y la velocidad se representan como .

### 3.2 Ecuaciones en Bloque



---

## 4. Conclusión

Si al navegar a este archivo desde el menú lateral el índice (TOC) marca correctamente cada sección y el scroll responde de forma fluida, sabrás que el núcleo del sistema procesa el contenido a la perfección y que el único detalle a cuidar en tus futuros apuntes es **cerrar siempre los bloques de código (`````)** y los delimitadores de LaTeX.