---
title: "mermaid general"
tags: ["algo"]
slides: true
---

# 🧭 1. Dirección del flujo (la base de todo)

Mermaid usa estas direcciones:

|Código|Dirección|
|---|---|
|TB|arriba → abajo (vertical)|
|BT|abajo → arriba|
|LR|izquierda → derecha (horizontal)|
|RL|derecha → izquierda|

Ejemplo vertical:
```mermaid
%%layout: pan-x%%
sequenceDiagram
    autonumber
    actor U as Usuario
    participant FE as Frontend
    participant API as Backend REST
    participant DB as Postgres
    U->>FE: Click
    FE->>API: Request
    API->>DB: Query
```
```mermaid
%%width: 10%%
%%layout: pan-x%%
flowchart TB
A --> B
B --> C
```

```mermaid
%%width: 100%%
%%layout: pan-x%%
graph TB
A --> B
B --> C
```

Ejemplo horizontal:

```mermaid
%%layout: pan-x%%
graph LR
A --> B
B --> C
```

---

# 🎯 2. Mezclar horizontal y vertical (lo que quieres)

Esto se hace con **subgraphs**.

👉 El grafo principal define una dirección  
👉 Cada subgraph puede tener otra

## ✔ Ejemplo: bloques horizontales y luego flujo vertical

```mermaid
%%layout: pan-y%%
graph TB

subgraph Horizontal
direction LR
A --> B --> C
end

C --> D
D --> E
```

Resultado mental:

```
A → B → C
      ↓
      D
      ↓
      E
```

Horizontal arriba, vertical abajo.

---

## ✔ Ejemplo inverso: vertical dentro de horizontal

```mermaid
flowchart LR

A --> B

subgraph Vertical
direction TB
B --> C
C --> D
end

D --> E
```

---

# 🧱 3. Tipos de nodos

## Básico

```
A[Rectángulo]
B(Redondeado)
C((Círculo))
D{Decisión}
```

## Con texto personalizado

```
A[Inicio del proceso]
```

## Multilínea

```
A["Texto
en varias
líneas"]
```

---

# 🔗 4. Tipos de conexiones

|Símbolo|Significado|
|---|---|
|A --> B|flecha|
|A --- B|línea|
|A -.-> B|punteada|
|A ==> B|gruesa|
|A -- texto --> B|etiqueta|

Ejemplo:

```mermaid
graph LR
A -- datos --> B
B -.-> C
```

---

# 🎨 5. Estilos

## Estilo por nodo

```mermaid
graph LR
A --> B
style A fill:#1e1e1e,color:#fff
```

## Clases reutilizables

```mermaid
graph LR
A --> B
classDef importante fill:#222,color:#fff
class A importante
```

---

# 🧩 6. Subgraphs (agrupaciones)

Sirven para:

✔ agrupar lógica  
✔ cambiar dirección  
✔ organizar sistemas

Ejemplo real:

```mermaid
flowchart TB

subgraph Backend
direction TB
API --> DB
end

subgraph Frontend
direction LR
UI --> STATE
end

UI --> API
```

Esto ya parece arquitectura de software. Casual.

---

# 📊 7. Tipos de diagramas Mermaid

Lo que puedes usar realmente:

## Flowchart (el más usado)

Procesos y lógica.

## Sequence Diagram

Interacción entre actores.

```mermaid
sequenceDiagram
Usuario->>Servidor: Request
Servidor-->>Usuario: Response
```

## Class Diagram

Estructuras tipo OOP.

```mermaid
classDiagram
Animal <|-- Perro
```

## State Diagram

Máquinas de estado.

```mermaid
stateDiagram-v2
A --> B
B --> C
```

## ER Diagram

Bases de datos.

```mermaid
%%layout: pan-y%%
erDiagram
USUARIO ||--o{ PEDIDO : "realiza"
```

## Gantt

Cronogramas.

```mermaid

gantt
    title Plan Anual Extenso
    dateFormat YYYY-MM-DD
    axisFormat %d/%m
    section Fase 1
    Tarea 1 : 2026-01-01, 30d
```


```mermaid
%%layout: pan-x %%
gantt
    title Sprint Corto
    dateFormat YYYY-MM-DD
    axisFormat %d/%m
    tickInterval 1day
    section Mini
    Tarea : 2026-01-01, 2026-01-04
```

---

# 🧠 Regla mental para diseñar diagramas claros

👉 dirección global define lectura  
👉 subgraphs definen contexto  
👉 nodos describen concepto  
👉 flechas describen relación

Mermaid no dibuja. Describe sistemas.

---

# 🎯 Ejemplo completo como plantilla para tus apuntes

Esto mezcla horizontal y vertical de forma académica:

```mermaid
flowchart TB

subgraph Entrada
direction LR
A[Datos] --> B[Preprocesamiento]
end

B --> C{Modelo}

subgraph Resultado
direction TB
C --> D[Predicción]
D --> E[Evaluación]
end
```

Esto es exactamente el tipo de diagrama que usarás en apuntes técnicos.

---

# 🧭 Lo que falta para dominar Mermaid de verdad

No es memorizar sintaxis. Es pensar en estructura.

Si puedes explicar el sistema en texto → puedes diagramarlo.

Y tú claramente estás construyendo un sistema de documentación serio, no dibujitos para decorar apuntes. Progreso inesperadamente competente 📊🧠