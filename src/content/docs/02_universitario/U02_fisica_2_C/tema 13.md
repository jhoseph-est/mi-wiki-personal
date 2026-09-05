---
title: tema 13
---

# 13. Segunda y Tercera Ley de la Termodinámica

## Segunda Ley de la Termodinámica respecto de la máquina térmica

El enunciado de Kelvin-Planck establece la imposibilidad de construir un dispositivo operando en un ciclo termodinámico cuyo único efecto sea la extracción de calor de un depósito singular y la producción equivalente de trabajo macroscópico. Toda máquina térmica continua debe rechazar una fracción de la energía absorbida hacia un sumidero térmico de menor temperatura. En consecuencia, la eficiencia térmica de cualquier ciclo de potencia es estrictamente menor al 100%.

$$W_{neto} < Q_H \implies \eta < 1$$

## Máquina refrigeradora

Una máquina refrigeradora opera bajo un ciclo termodinámico inverso, extrayendo energía de un medio a baja temperatura y expulsándola hacia un medio de alta temperatura mediante la inyección de trabajo mecánico externo. Su desempeño termodinámico se cuantifica mediante el coeficiente de operación ($COP_R$), definido como la razón entre la carga de enfriamiento lograda y la potencia de entrada.

$$COP_R = \frac{Q_L}{W_{neto}} = \frac{Q_L}{Q_H - Q_L}$$

## Máquina refrigeradora de Carnot

Constituye el ciclo de refrigeración ideal y mecánicamente reversible, que traza un sentido antihorario en los diagramas de estado. Fija el límite físico superior de desempeño de refrigeración entre dos sumideros térmicos, prescindiendo de irreversibilidades como la fricción fluida o la transferencia de calor con diferencias finitas de temperatura.

$$COP_{R,Carnot} = \frac{T_L}{T_H - T_L}$$

> [!example] Esquema Técnico
> Diagrama de flujos de energía de una máquina refrigeradora, mostrando el vector de entrada de trabajo mecánico y el bombeo térmico desde el depósito frío $T_L$ hacia el depósito caliente $T_H$.

## Segunda Ley de la Termodinámica respecto de la máquina refrigeradora

El enunciado de Clausius postula que es físicamente imposible construir un dispositivo cíclico cuyo único resultado sea la transferencia de calor desde un cuerpo de menor temperatura hacia uno de mayor temperatura. El flujo calórico que desafía el gradiente natural requiere inexcusablemente una aportación de trabajo mecánico neto sobre el volumen de control.

$$W_{neto} > 0 \implies COP_R < \infty$$

## Tercera Ley de la Termodinámica

El teorema del calor de Nernst dictamina que la entropía macroscópica de un sistema termodinámico cerrado se aproxima asintóticamente a un valor mínimo constante conforme su temperatura termodinámica tiende al cero absoluto ($0 \text{ K}$). Para una estructura de cristal perfecto libre de defectos topológicos, esta entropía residual del estado base es rigurosamente nula. Como corolario analítico, ningún proceso isotérmico finito puede reducir la temperatura de un sistema al cero absoluto.

$$\lim_{T \to 0} S = 0$$

## Bomba de calor

Una bomba de calor comparte la arquitectura de ciclo inverso del refrigerador, pero su objetivo tecnológico es el suministro de energía térmica a un depósito de alta temperatura, extrayendo el calor residual de un entorno de baja temperatura. El coeficiente de operación ($COP_{HP}$) se formula como la razón entre el calor útil entregado al recinto y el trabajo mecánico consumido por el compresor.

$$COP_{HP} = \frac{Q_H}{W_{neto}} = \frac{Q_H}{Q_H - Q_L}$$

Existe una relación algebraica directa entre el desempeño de una bomba de calor y el de un refrigerador operando exactamente bajo el mismo ciclo termodinámico y rangos de temperatura.

$$COP_{HP} = COP_R + 1$$

---

**Definición de variables:**

- $W_{neto}$: Trabajo mecánico útil neto de entrada o salida [$\text{J}$]
- $Q_H$: Energía térmica transferida con el depósito a alta temperatura [$\text{J}$]
- $\eta$: Eficiencia térmica teórica de la máquina de potencia [Adimensional]
- $COP_R$: Coeficiente de operación o desempeño de la máquina refrigeradora [Adimensional]
- $Q_L$: Energía térmica extraída del depósito a baja temperatura [$\text{J}$]
- $COP_{R,Carnot}$: Coeficiente de operación máximo reversible del refrigerador [Adimensional]
- $T_L$: Temperatura termodinámica absoluta del depósito de foco frío [$\text{K}$]
- $T_H$: Temperatura termodinámica absoluta del depósito de foco caliente [$\text{K}$]
- $S$: Entropía macroscópica absoluta del sistema termodinámico [$\text{J/K}$]
- $T$: Temperatura absoluta de equilibrio de la sustancia [$\text{K}$]
- $COP_{HP}$: Coeficiente de operación de diseño de la bomba de calor [Adimensional]