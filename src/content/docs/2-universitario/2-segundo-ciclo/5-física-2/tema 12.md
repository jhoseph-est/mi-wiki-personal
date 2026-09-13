---
title: tema 12
---

# 12. Máquinas Térmicas

## Máquina térmica

Una máquina térmica es un dispositivo cíclico que extrae energía térmica de un depósito a alta temperatura, convierte una fracción de esta energía en trabajo mecánico macroscópico útil y rechaza el calor residual hacia un sumidero a menor temperatura. Operando en estado estacionario, el trabajo neto entregado por ciclo obedece al balance energético de la Primera Ley de la Termodinámica.

$$W_{neto} = Q_H - |Q_L|$$

El rendimiento o eficiencia térmica de la máquina se define como la razón adimensional entre el trabajo mecánico neto obtenido y el calor total suministrado por la fuente de alta temperatura.

$$\eta = \frac{W_{neto}}{Q_H} = 1 - \frac{|Q_L|}{Q_H}$$

## Ciclo termodinámico de Carnot

Es un ciclo termodinámico ideal y mecánicamente reversible que establece el límite físico superior de conversión de calor en trabajo. Se compone estrictamente de cuatro procesos reversibles alternos: dos expansiones (una isotérmica y una adiabática) seguidas de dos compresiones (una isotérmica y una adiabática).

+1

$$\oint \frac{dQ_{rev}}{T} = 0$$

> [!example] Esquema Técnico
> 
> Diagrama de presión-volumen ($P-V$) del ciclo reversible de Carnot, delimitado por dos isotermas correspondientes a las temperaturas de los depósitos, interseccionadas transversalmente por dos curvas adiabáticas.

## Máquina térmica de Carnot

Es una máquina térmica teórica que opera ejecutando el ciclo de Carnot continuo entre dos depósitos térmicos. El teorema de Carnot postula que ninguna máquina real, operando de forma irreversible, puede superar la eficiencia térmica de una máquina de Carnot sujeta a los mismos límites de temperatura.

$$\eta_{real} \le \eta_{Carnot}$$

En este régimen ideal reversible, la razón entre el calor rechazado y el calor absorbido es matemáticamente equivalente a la razón de las temperaturas absolutas de los depósitos térmicos correspondientes. Por consiguiente, la eficiencia máxima teórica es función exclusiva de dichas temperaturas absolutas.

$$\frac{|Q_L|}{Q_H} = \frac{T_L}{T_H}$$

$$\eta_{Carnot} = 1 - \frac{T_L}{T_H}$$

**Definición de variables:**

- $W_{neto}$: Trabajo mecánico útil neto producido por el ciclo [$\text{J}$]
- $Q_H$: Calor total absorbido desde la fuente térmica a alta temperatura [$\text{J}$]
- $Q_L$: Calor residual rechazado hacia el sumidero térmico a baja temperatura [$\text{J}$]
- $\eta$: Eficiencia térmica o rendimiento de la máquina real [Adimensional]
- $Q_{rev}$: Calor transferido en un proceso internamente reversible [$\text{J}$]
- $T$: Temperatura absoluta de la frontera geométrica durante la transferencia de calor [$\text{K}$]
- $\eta_{real}$: Eficiencia térmica de un ciclo irreversible [Adimensional]
- $\eta_{Carnot}$: Eficiencia térmica máxima teórica del ciclo reversible [Adimensional]
- $T_H$: Temperatura termodinámica absoluta del depósito caliente [$\text{K}$]
- $T_L$: Temperatura termodinámica absoluta del depósito frío [$\text{K}$]