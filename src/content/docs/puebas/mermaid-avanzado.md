---
title: mermaids avanzados
tags:
  - sistema
  - mermaid
  - tutorial
orden: 1
theme: moderno
slides: true
---

# 🧪 Suite de Pruebas y Límites: Mermaid
## 1. Flowchart Complejo con Subgraphs

```mermaid
%%layout: pan-y%%
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
%%layout: pan-y%%
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
%%width: 1500%%
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
```mermaid
%%width: 3000%%
gantt
    title Plan Maestro Anual: Ecosistema IoT, Plataforma Web y Lanzamiento Global (2026)
    dateFormat YYYY-MM-DD
    axisFormat %b %Y
    tickInterval 1month

    section 1. Investigación y Arquitectura
    Auditoría de Requerimientos y Normativas   :done,    req_01,  2026-01-01, 2026-01-31
    Modelado de Base de Datos y Schemas       :done,    db_arch, after req_01, 30d
    Diseño Conceptual de Hardware (PCB v1)    :done,    hw_des,  2026-01-15, 2026-03-01
    Aprobación de Arquitectura de Seguridad   :crit, done, sec_ap, after db_arch, 15d

    section 2. Backend & Core IoT
    Infraestructura NestJS & Microservicios   :done,    be_core, after sec_ap, 45d
    Broker MQTT & Protocolos de Telemetría    :done,    mqtt_sub, 2026-03-15, 2026-05-15
    Pipeline de Procesamiento de Flujos       :active,  data_pipe, after mqtt_sub, 60d
    Firma Criptográfica en Dispositivos ESP32 :crit, active, crypt_iot, after hw_des, 90d

    section 3. Hardware & Firmware
    Fabricación de Prototipos Físicos         :done,    pcb_fab, 2026-03-01, 2026-04-30
    Desarrollo Firmware C++ en FreeRTOS       :active,  fw_dev,  after pcb_fab, 75d
    Calibración de Sensores y Actuadores      :         sens_cal, after fw_dev, 40d
    Homologación y Certificación de Hardware  :crit,    hw_cert, after sens_cal, 45d

    section 4. Plataformas Web (Astro & Next.js)
    Frontend Público en Astro (SEO & Docs)    :done,    web_ast, 2026-02-01, 2026-04-15
    Dashboard de Administración en Next.js    :active,  web_next, after be_core, 90d
    Panel de Control y Telemetría en Vivo     :         dash_iot, after data_pipe, 60d
    Integración de Facturación e Inventario   :         inv_mod, after web_next, 45d

    section 5. QA, Seguridad & Carga
    Pruebas Unitarias y Cobertura E2E         :active,  qa_unit, 2026-06-01, 2026-08-15
    Penetration Testing Externo               :crit,    sec_pen, after dash_iot, 30d
    Pruebas de Estrés MQTT (100k Conexiones)  :crit,    stress_t, after data_pipe, 25d
    Corrección de Vulnerabilidades y Bugs     :         fix_bug, after sec_pen, 30d

    section 6. Despliegue y Operaciones
    Despliegue Staging en Clúster Kubernetes  :         k8s_stg, 2026-09-01, 2026-10-15
    Migración de Datos y Ensayo de Fallos     :crit,    mig_data, after k8s_stg, 20d
    Congelamiento de Código (Code Freeze)     :milestone, m_freeze, 2026-11-05, 0d
    Lanzamiento a Producción Mundial          :milestone, crit, m_prod, 2026-12-01, 0d
    Soporte Post-Lanzamiento y Monitoreo      :         post_rel, 2026-12-01, 2026-12-31
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