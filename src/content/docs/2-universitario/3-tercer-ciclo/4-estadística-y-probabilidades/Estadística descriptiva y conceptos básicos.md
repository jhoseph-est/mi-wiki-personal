---
title: "Estadística Descriptiva y Conceptos Básicos"
tags: ["estadistica", "matematicas", "probabilidad"]
theme: moderno
ciclo: 1
---
# Estadística descriptiva y conceptos básicos
## ¿Qué hace la estadística?

```mermaid
flowchart TB
A[recolección de datos]
B[Clasificación y organización de datos]
C[Procesamiento]
D[Resultados]
E[Anúlisis y resultados]

A --> B
B --> C
C --> D
D --> E
```
## ramas de la estadística

```mermaid
%%layout: pan-x%%
graph TB
A[Estadistica]
B[Descriptiva]
C[Inferencial]

A --> B
A --> C
```












# Estadística Descriptiva y Conceptos Básicos

## ¿Qué hace la estadística?
La estadística es la ciencia que proporciona métodos para transformar datos brutos en información útil para la toma de decisiones.

```mermaid
flowchart LR
    A["Recolección de datos"] --> B["Organización y limpieza"]
    B --> C["Procesamiento y cálculo"]
    C --> D["Presentación (Tablas/Gráficos)"]
    D --> E["Análisis e interpretación"]
    E --> F["Toma de decisiones"]

    style A fill:#0284c7,stroke:#0369a1,color:#fff
    style F fill:#16a34a,stroke:#15803d,color:#fff

```

> [!info] Definición
> La **Estadística Descriptiva** se enfoca en las etapas de recolección hasta la presentación, mientras que la **Estadística Inferencial** abarca la interpretación y toma de decisiones sobre una población a partir de una muestra.

---

## Ramas de la estadística

```mermaid
flowchart TB
    Root["Estadística"]
    
    subgraph D["Descriptiva"]
        direction TB
        D1["Resume y organiza datos"]
        D2["Medidas de tendencia central y dispersión"]
        D3["Tablas de frecuencias y gráficos"]
    end

    subgraph I["Inferencial"]
        direction TB
        I1["Modela y proyecta"]
        I2["Estimación y prueba de hipótesis"]
        I3["Generaliza de la muestra a la población"]
    end

    Root --> D
    Root --> I

```

> [!tip] Regla rápida
> * Si describe lo que **ya pasó** en el conjunto de datos $\to$ **Descriptiva**.
> * Si concluye sobre lo que **no se ha medido directamente** con cierto margen de error $\to$ **Inferencial**. ${}\frac{1}{b}{}$
> $$
> \begin{aligned}
> p \land ( q \lor r ) &\equiv ( p \land q ) \lor r \\
> p \lor ( q \land r ) &\equiv ( p \lor q ) \land r
> \end{aligned}
> $$



${}\frac{1}{b}{}$
