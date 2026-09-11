---
title: tema 10
---

# 10. Cambios de Fase y Transferencia de Calor

## Cambios de fase de una sustancia

Un cambio de fase es una transición termodinámica irreversible entre estados de agregación de la materia isotrópica, producida a presión y temperatura estrictamente constantes. Durante este proceso isotérmico, la entalpía del sistema varía debido a la absorción o liberación de energía térmica requerida para reconfigurar la estructura intermolecular.

$$Q = m L$$

## Transferencia o propagación del calor

La propagación térmica es el tránsito cinético de energía impulsado por un gradiente espacial de temperatura para satisfacer el segundo principio de la termodinámica. Los mecanismos fundamentales y concurrentes de disipación son la difusión por conducción, la advección macroscópica por convección y la propagación electromagnética por radiación.

$$\dot{Q}_{total} = \dot{Q}_{cond} + \dot{Q}_{conv} + \dot{Q}_{rad}$$

## Conducción del calor: paredes planas compuestas, esfera hueca, cilindro

La conducción es el transporte de energía térmica inducido por colisiones elásticas a nivel fonónico y electrónico, gobernado por la ley de Fourier para medios continuos.

$$\dot{Q}_{cond} = -k A \frac{dT}{dx}$$

El análisis unidimensional estacionario emplea la analogía eléctrica de redes de resistencias térmicas en serie o paralelo. Para sistemas multicapa de paredes planas, la resistencia térmica equivalente es la suma de los cocientes entre el espesor y la conductividad de cada capa.

$$\dot{Q}_{cond} = \frac{\Delta T}{\sum R_{th}} \implies R_{th,plana} = \frac{L}{k A}$$

En geometrías radiales con flujo unidimensional estacionario, el área de transferencia es función del radio geométrico, modificando la integral analítica de la resistencia térmica.

$$R_{th,cilindro} = \frac{\ln(r_2/r_1)}{2\pi k L}$$

$$R_{th,esfera} = \frac{r_2 - r_1}{4\pi k r_1 r_2}$$

> [!example] Esquema Técnico
> 
> Circuito de resistencias térmicas equivalentes para una pared plana multicapa, ilustrando los nodos de temperatura interfacial y el flujo de calor constante unidimensional.

## Convección del calor

La convección acopla el mecanismo de conducción térmica en la capa límite del fluido con el transporte advectivo macroscópico del volumen de control. La ley de enfriamiento de Newton modela empíricamente esta transferencia interfacial sólida-fluida mediante el coeficiente de película convectiva.

$$\dot{Q}_{conv} = h A_s (T_s - T_\infty)$$

## Radiación del calor

La radiación térmica es la emisión espontánea de fotones originada por transiciones electrónicas en la materia que se encuentra a una temperatura absoluta superior al cero Kelvin. No requiere un medio físico de acoplamiento, propagándose en el vacío a la velocidad de la luz, y su magnitud de emisión máxima teórica es descrita por la ley de Stefan-Boltzmann.

$$\dot{Q}_{emi} = \varepsilon \sigma A_s T_s^4$$

$$\dot{Q}_{neta} = \varepsilon \sigma A_s (T_s^4 - T_{alred}^4)$$

## Radiación del cuerpo negro

Un cuerpo negro es un modelo termodinámico idealizado que actúa como un absorbente electromagnético perfecto y emite la máxima densidad de flujo radiante espectral permitida por la mecánica cuántica ($\varepsilon = 1$).

$$\dot{Q}_{cuerpo\_negro} = \sigma A_s T_s^4$$

La ley de desplazamiento de Wien determina que la longitud de onda correspondiente a la radiancia espectral máxima es inversamente proporcional a la temperatura absoluta del emisor ideal.

$$\lambda_{max} T = b$$

> [!example] Esquema Técnico
> 
> Curvas de densidad espectral de emitancia frente a la longitud de onda para varios estados térmicos absolutos (Ley de Planck), evidenciando el desplazamiento del pico espectral según la Ley de Wien.

**Definición de variables:**

- $Q$: Energía térmica latente transferida [$\text{J}$]
- $m$: Masa de la sustancia que cambia de fase [$\text{kg}$]
- $L$: Calor latente específico de transición de fase [$\text{J/kg}$]
- $\dot{Q}_{total}$: Tasa total de transferencia de calor térmica [$\text{W}$]
- $\dot{Q}_{cond}, \dot{Q}_{conv}, \dot{Q}_{rad}$: Tasas de transferencia por conducción, convección y radiación [$\text{W}$]
- $k$: Conductividad térmica intrínseca del material [$\text{W/(m}\cdot\text{K)}$]
- $A$: Área de sección transversal ortogonal al flujo térmico [$\text{m}^2$]
- $dT/dx$: Gradiente termodinámico direccional [$\text{K/m}$]
- $\Delta T$: Diferencial global de temperatura absoluta [$\text{K}$]
- $R_{th}$: Resistencia térmica geométrica unidimensional [$\text{K/W}$]
- $r_1, r_2$: Radios geométricos interno y externo de la capa [$\text{m}$]
- $h$: Coeficiente convectivo promedio empírico de la película [$\text{W/(m}^2\cdot\text{K)}$]
- $A_s$: Área superficial interfacial expuesta al fluido o radiación [$\text{m}^2$]
- $T_s$: Temperatura absoluta termodinámica de la superficie [$\text{K}$]
- $T_\infty$: Temperatura absoluta macroscópica de la corriente libre del fluido [$\text{K}$]
- $\varepsilon$: Emisividad radiativa hemisférica total de la superficie [Adimensional]
- $\sigma$: Constante física de Stefan-Boltzmann ($5.67 \times 10^{-8} \text{ W/(m}^2\cdot\text{K}^4)$) [$\text{W/(m}^2\cdot\text{K}^4)$]
- $T_{alred}$: Temperatura absoluta efectiva de los alrededores geométricos [$\text{K}$]
- $\lambda_{max}$: Longitud de onda electromagnética de máxima densidad de emisión [$\text{m}$]
- $b$: Constante empírica de desplazamiento de Wien ($2.898 \times 10^{-3} \text{ m}\cdot\text{K}$) [$\text{m}\cdot\text{K}$]