---
title: git
---

# Git y GitHub: explicación completa y clara

## 1. ¿Qué es Git?

**Git** es un sistema de *control de versiones*. Esto significa que sirve para **guardar, organizar y controlar los cambios** que se hacen en archivos, normalmente en proyectos de programación, aunque también puede usarse con otros tipos de archivos.

En palabras simples:

- Git recuerda **qué cambiaste**
- **cuándo** lo cambiaste
- y te permite **volver atrás** si algo sale mal

### Ejemplo sencillo

Imagina que estás haciendo un trabajo en Word:

- Guardas versión 1
- Luego haces cambios y guardas versión 2
- Después versión 3

Git hace esto automáticamente, pero de forma mucho más ordenada y profesional.

---

## 2. ¿Por qué existe Git?

Antes de Git, la gente hacía cosas como:

- proyecto_final.doc
- proyecto_final_v2.doc
- proyecto_final_ahora_si.doc

Eso causa confusión.

Git se creó para:

- Evitar perder trabajo
- Trabajar en equipo sin pisar el trabajo de otros
- Tener un historial claro de cambios

---

## 3. Conceptos básicos de Git (muy importantes)

### 3.1 Repositorio

Un **repositorio** es el lugar donde vive tu proyecto con Git.

Es básicamente:

- Una carpeta
- Que Git está vigilando

Puede estar:

- En tu computadora (repositorio local)
- En internet (repositorio remoto)

---

### 3.2 Versiones y commits

Un **commit** es como una _foto_ del estado de tu proyecto en un momento específico.

Cada commit:

- Guarda los cambios
- Tiene un mensaje explicando qué se hizo

Ejemplo de mensaje de commit:

> "Agregué el formulario de login"

---

### 3.3 Historial

Git guarda **todos los commits** en orden.

Gracias a eso puedes:

- Ver qué cambió
- Quién lo cambió
- Volver a una versión anterior

---

## 4. ¿Cómo funciona Git internamente? (idea general)

Git trabaja en **tres áreas**:

### 4.1 Working Directory (directorio de trabajo)

Es donde editas los archivos normalmente.

### 4.2 Staging Area

Es una zona intermedia.

Aquí le dices a Git:

> "estos cambios sí quiero guardarlos"

### 4.3 Repositorio

Aquí Git guarda definitivamente los cambios con un commit.

Flujo normal:

1. Editas archivos
2. Los agregas a staging
3. Haces un commit

---

## 5. Comandos básicos de Git

### 5.1 git init

Crea un repositorio Git en una carpeta.

### 5.2 git status

Muestra:

- Qué archivos cambiaron
- Cuáles están listos para guardar

### 5.3 git add

Agrega archivos al _staging area_.

### 5.4 git commit

Guarda los cambios definitivamente.

### 5.5 git log

Muestra el historial de commits.

---

## 6. Ramas (branches)

Una **rama** es una línea de trabajo independiente.

La rama principal suele llamarse:

- main
- o master

### ¿Para qué sirven las ramas?

Sirven para:

- Probar cosas nuevas
- Arreglar errores
- Trabajar sin romper lo que ya funciona

Cuando todo está bien, se unen las ramas.

---

## 7. Merge (unir ramas)

**Merge** significa unir una rama con otra.

Ejemplo:

- Rama main → versión estable
- Rama nueva → nueva funcionalidad

Cuando todo funciona:

- Se hace merge

---

## 8. Conflictos

Un **conflicto** ocurre cuando:

- Dos personas modifican la misma parte del mismo archivo
    

Git no sabe cuál cambio elegir y te pide ayuda.

No es algo malo, es normal en trabajo en equipo.

---

## 9. Repositorios remotos

Un repositorio remoto es un repositorio que está en internet.

Sirve para:

- Guardar copia de seguridad
    
- Compartir código
    
- Trabajar en equipo
    

Aquí es donde entra **GitHub**.

---

# GitHub

## 10. ¿Qué es GitHub?

**GitHub** es una plataforma en internet que:

- Aloja repositorios Git
    
- Permite colaborar con otras personas
    
- Muestra el historial del proyecto
    

Importante:

- **Git** es la herramienta
    
- **GitHub** es el lugar donde se guardan los repositorios
    

Git puede existir sin GitHub.  
GitHub no existe sin Git.

---

## 11. ¿Para qué sirve GitHub?

GitHub sirve para:

- Guardar proyectos en la nube
    
- Trabajar en equipo
    
- Mostrar tus proyectos (portafolio)
    
- Contribuir a proyectos de otros
    

---

## 12. Conceptos importantes de GitHub

### 12.1 Clone

**Clonar** es copiar un repositorio de GitHub a tu computadora.

### 12.2 Push

**Push** envía tus commits al repositorio remoto.

### 12.3 Pull

**Pull** trae los cambios del repositorio remoto a tu computadora.

---

## 13. Trabajo en equipo con GitHub

Flujo típico:

1. Clonas el repositorio
    
2. Creas una rama
    
3. Haces cambios
    
4. Haces commits
    
5. Haces push
    
6. Creas un Pull Request
    

---

## 14. Pull Request

Un **Pull Request** es una solicitud para:

> "quiero unir mis cambios a la rama principal"

Sirve para:

- Revisar código
    
- Comentar
    
- Evitar errores
    

---

## 15. Issues

Los **Issues** son como tareas o problemas.

Se usan para:

- Reportar errores
    
- Proponer mejoras
    
- Organizar el trabajo
    

---

## 16. GitHub en la vida real

Git y GitHub se usan en:

- Empresas
    
- Universidades
    
- Proyectos personales
    
- Software libre
    

Saber Git es casi obligatorio en programación.

---

## 17. Resumen rápido

- Git controla versiones
    
- Commit = guardar cambios
    
- Rama = línea de trabajo
    
- GitHub = plataforma para compartir repositorios
    

---

Si quieres, en el siguiente paso puedo:

- Explicarte Git con ejemplos prácticos
    
- Enseñarte un flujo real paso a paso
    
- Explicarlo orientado a tu lenguaje de programación