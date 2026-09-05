---
title: tema 14
---

# 14. Entropía

## Procesos reversibles e irreversibles

Un proceso reversible es una transición termodinámica idealizada, cuasiestática y libre de efectos disipativos, que permite al sistema y su entorno retornar simultáneamente a sus estados iniciales sin alterar el universo termodinámico. Los procesos reales son inherentemente irreversibles, impulsados por gradientes finitos (térmicos, de presión o químicos) y caracterizados por la disipación irreversible de energía de alto grado en calor a baja temperatura.


## Entropía

La entropía es una función de estado termodinámica extensiva que cuantifica el grado de dispersión espacial y energética de un sistema macroscópico. En la formulación de la mecánica estadística, se define a través de la ecuación de Boltzmann, vinculando el estado macroscópico con el logaritmo natural del número de microestados microscópicos compatibles y accesibles.

$$S = k_B \ln(\Omega)$$

## Cambio de entropía en un proceso

El cambio de entropía macroscópico entre dos estados de equilibrio se postula clásicamente mediante la integral de Clausius evaluada a lo largo de cualquier trayectoria internamente reversible que los conecte. Al ser una propiedad de estado exacta, su variación neta es estrictamente independiente de la trayectoria real del proceso operado.

$$\Delta S = S_2 - S_1 = \int_{1}^{2} \frac{dQ_{rev}}{T}$$

Para un gas ideal sometido a una transición de estado, la variación entrópica se determina integrando la ecuación de Gibbs, resultando en una función analítica dependiente de las variables de estado volumétricas y térmicas.

$$\Delta S = n C_v \ln\left(\frac{T_2}{T_1}\right) + n R \ln\left(\frac{V_2}{V_1}\right)$$

> [!example] Esquema Técnico
> 
> Diagrama de temperatura-entropía ($T-S$) ilustrando una trayectoria reversible, donde el área integral subtendida bajo la curva representa analíticamente la cantidad de calor transferido $Q_{rev}$.

## Segunda Ley de la Termodinámica respecto de la entropía

El principio de incremento de entropía establece que la entropía total de un sistema aislado, o del universo termodinámico en su conjunto, es una función monótonamente creciente en el tiempo para procesos físicos reales. La variación entrópica universal permanece nula exclusivamente para transformaciones estrictamente reversibles y aumenta ineludiblemente en presencia de cualquier irreversibilidad.

$$\Delta S_{universo} = \Delta S_{sistema} + \Delta S_{entorno} \ge 0$$

La forma diferencial generalizada descompone el cambio entrópico del sistema en la transferencia bidireccional por flujo de calor a través de la frontera y el término de fuente positiva de generación de entropía intrínseca.

$$dS = \frac{dQ}{T} + \delta S_{gen} \quad ; \quad \delta S_{gen} \ge 0$$

---

**Definición de variables:**

- $S$: Entropía absoluta del sistema macroscópico [$\text{J/K}$]
- $k_B$: Constante física fundamental de Boltzmann ($1.38 \times 10^{-23} \text{ J/K}$) [$\text{J/K}$]
- $\Omega$: Número de microestados termodinámicos accesibles (multiplicidad) [Adimensional]
- $\Delta S$: Variación de entropía macroscópica [$\text{J/K}$]
- $S_1, S_2$: Entropías absolutas en los estados inicial y final [$\text{J/K}$]
- $dQ_{rev}$: Diferencial inexacto de calor transferido en un proceso reversible [$\text{J}$]
- $T$: Temperatura termodinámica absoluta de la frontera interfacial [$\text{K}$]
- $n$: Cantidad de sustancia [$\text{mol}$]
- $C_v$: Capacidad calorífica molar a volumen constante [$\text{J/(mol}\cdot\text{K)}$]
- $T_1, T_2$: Temperaturas absolutas en los estados inicial y final [$\text{K}$]
- $R$: Constante universal de los gases ideales [$\text{J/(mol}\cdot\text{K)}$]
- $V_1, V_2$: Volúmenes espaciales en los estados inicial y final [$\text{m}^3$]
- $\Delta S_{universo}$: Variación de entropía neta del universo termodinámico [$\text{J/K}$]
- $\Delta S_{sistema}, \Delta S_{entorno}$: Variaciones de entropía del volumen de control y su medio exterior [$\text{J/K}$]
- $dQ$: Diferencial inexacto de calor real transferido [$\text{J}$]
- $dS$: Diferencial exacto de entropía del sistema [$\text{J/K}$]
- $\delta S_{gen}$: Término de generación de entropía intrínseca irreversible [$\text{J/K}$]