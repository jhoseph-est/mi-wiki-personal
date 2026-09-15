---
title: Batería de Pruebas Extrema - Mermaid
tags: ["sistema", "mermaid", "tutorial"]
orden: 1
theme: moderno
---

# 🧪 Suite de Pruebas y Límites: Mermaid
## 1. Flowchart Complejo con Subgraphs

```mermaid
flowchart TB
    Start([Inicio del Proceso]) --> Step1[Paso Rectangular]
    Step1 --> Decision{"¿Tiene permisos?"}

    Decision -- Sí --> SubSystemA
    Decision -- No --> ErrorNode[/Error de Acceso/]
    Decision -. Reintentar .-> Retry((R))

    subgraph SubSystemA [Núcleo del Sistema]
        direction LR
        subgraph Ingestion [Capa de Entrada]
            direction TB
            Queue[(Cola Redis)] ==> Worker1[[Worker Node]]
        end

        subgraph Processing [Procesamiento Paralelo]
            direction TB
            Worker1 -.-> TaskA[\Transformar Datos\]
            Worker1 -.-> TaskB[/Validar Esquema/]
        end

        Ingestion --> Processing
    end

    SubSystemA --> Finish(((Fin con Éxito)))
    ErrorNode ==> Finish
    Retry --> Step1

    style Start fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Finish fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style ErrorNode fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff

```

---

## 2. Diagrama de Secuencia con Agrupaciones y Bucles

```mermaid
sequenceDiagram
    autonumber
    actor U as Usuario
    participant FE as Frontend (Astro)
    participant API as Gateway REST (NestJS)
    participant DB as Base de Datos (PostgreSQL)

    U->>+FE: Clic en "Guardar Apunte"
    FE->>FE: Validar campos locales (Zod)

    alt Formulario Inválido
        FE-->>U: Mostrar error en Toast
    else Formulario Válido
        FE->>+API: POST /api/v1/notes (JWT en Cookie)
        rect rgba(139, 92, 246, 0.08)
            Note over API,DB: Transacción Segura en Backend
            API->>+DB: INSERT INTO notes VALUES (...)
            DB-->>-API: 201 Created (ID retornado)
        end
        API-->>-FE: Respuesta 200 OK { success: true }
        FE-->>-U: Redirigir a vista del documento
    end

    loop Sincronización en Segundo Plano
        API-)DB: Actualizar índice de búsqueda global
    end

```

---

## 3. Diagrama de Clases (Tipos y Relaciones)

```mermaid
classDiagram
    class EntidadBase~T~ {
        +T id
        +Date createdAt
        +Date updatedAt
        #validar() Boolean*
    }

    class Usuario {
        -String email
        -String passwordHash
        +String rol
        +login(String password) Boolean
        +actualizarEmail(String nuevoEmail) void
    }

    class Documento {
        +String titulo
        +String cuerpo
        +Boolean esBorrador
        +List~String~ tags
        +publicar() void
    }

    class AuditoriaService {
        <<Service>>
        +registrarAccion(String accion)$ void
    }

    EntidadBase <|-- Usuario : Herencia
    EntidadBase <|-- Documento : Herencia
    Usuario "1" *-- "0..*" Documento : Posee (Composición)
    Documento ..> AuditoriaService : Registra log (Dependencia)

```

---

## 4. Máquina de Estados con Concurrencia

```mermaid
stateDiagram-v2
    [*] --> Inactivo

    Inactivo --> Autenticando : Iniciar sesión
    
    state Autenticando {
        [*] --> VerificandoCredenciales
        VerificandoCredenciales --> Validando2FA : Password OK
        Validando2FA --> SesionActiva : Token 2FA Válido
    }

    state SesionActiva {
        [*] --> Monitoreo
        
        -- Concurrencia
        state "Escucha WebSocket" as WS
        [*] --> WS
        WS --> RecibiendoTelemetria : Ping
        
        --
        state "Editor Activo" as Editor
        [*] --> Editor
        Editor --> GuardandoBorrador : Cambios detectados
    }

    SesionActiva --> Inactivo : Logout / Timeout
    Autenticando --> ErrorAuth : Fallo de validación
    ErrorAuth --> Inactivo : Reintentar

```

---

## 5. Diagrama Entidad-Relación

```mermaid
erDiagram
    USUARIO ||--o{ DOCUMENTO : redacta
    USUARIO ||--o{ SESION : mantiene
    DOCUMENTO ||--|{ HISTORIAL_VERSION : genera
    DOCUMENTO }o--o{ ETIQUETA : contiene

    USUARIO {
        uuid id PK
        string email UK
        string password_hash
        string rol
        timestamp creado_en
    }

    DOCUMENTO {
        uuid id PK
        uuid usuario_id FK
        string titulo
        text contenido
        boolean publicado
    }

    ETIQUETA {
        int id PK
        string nombre UK
    }

    HISTORIAL_VERSION {
        uuid id PK
        uuid documento_id FK
        int version
        text diff
    }

```

---

## 6. Diagrama de Gantt

```mermaid
gantt
    title Plan Maestro de Infraestructura y Lanzamiento
    dateFormat YYYY-MM-DD
    axisFormat %d/%m
    tickInterval 2day

    section Arquitectura Core
    Diseño de Esquemas de BD       :done,    des_db,   2026-01-01, 2026-01-04
    Autenticación y Seguridad      :done,    des_auth, 2026-01-05, 2026-01-09
    
    section Motor de Documentación
    Refactor Astro y Shiki         :active,  ast_core, 2026-01-08, 2026-01-14
    Integración de Buscador        :active,  ast_find, after des_auth, 4d
    
    section Pruebas y Despliegue
    Tests de Carga en Microservicios :crit,  test_load, 2026-01-15, 3d
    Despliegue a Producción        :crit,    deploy,    after test_load, 2d

```

---

## 7. Diagrama de Flujo Git (GitGraph)

```mermaid
gitGraph
    commit id: "Init Repo"
    commit id: "Setup Astro"
    branch develop
    checkout develop
    commit id: "Add Markdown Layout"
    branch feature/mermaid
    checkout feature/mermaid
    commit id: "Add Mermaid Component"
    commit id: "Fix Gantt D3 bug" tag: "v0.5-beta"
    checkout develop
    merge feature/mermaid id: "Merge PR #12"
    commit id: "Sanitize Reveal.js"
    checkout main
    merge develop id: "Release 1.0" tag: "v1.0.0"
    commit id: "Hotfix typo" type: REVERSE

```

---

## 8. Diagrama Cuadrante

```mermaid
quadrantChart
    title Evaluación de Tecnologías y Deuda Técnica
    x-axis "Bajo Esfuerzo" --> "Alto Esfuerzo"
    y-axis "Bajo Impacto" --> "Alto Impacto"
    quadrant-1 "Prioridad Máxima"
    quadrant-2 "Planificar con Calma"
    quadrant-3 "Descartar / Mínimo"
    quadrant-4 "Victorias Rápidas"
    "Optimizar Chunks Vite": [0.25, 0.65]
    "Migración a Monorepo": [0.85, 0.90]
    "Cambio Cosmético de Botones": [0.15, 0.20]
    "Soporte Offline PWA": [0.75, 0.35]
    "Aislamiento de MathJax": [0.30, 0.85]

```

---

## 9. Mapa Mental (Mindmap)

```mermaid
mindmap
  root((Ecosistema Digital))
    Público Astro
      Documentación
        Markdown
        MathJax LaTeX
        Diagramas Mermaid
      Buscador Rápido
        Pagefind Local
      Presentaciones
        Reveal.js Integrado
    Privado Next.js
      Panel de Control
      Autenticación
    Backend NestJS
      API REST
      Microservicios
      Broker MQTT
    Dispositivos IoT
      ESP32
      Telemetría
      Actuadores

```

---

## 10. Diagrama Circular (Pie Chart)

```mermaid
pie title Distribución Tecnológica del Proyecto
    "Astro & MDX (Docs)" : 45
    "TypeScript & Config" : 25
    "CSS & Estilos Globales" : 15
    "Pagefind & Scripts" : 15

```