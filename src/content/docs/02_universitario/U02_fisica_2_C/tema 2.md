---
title: tema 2
---

# 2. Movimiento Oscilatorio Amortiguado

El movimiento oscilatorio amortiguado experimenta una pérdida gradual de energía mecánica debido a fuerzas disipativas, habitualmente proporcionales a la velocidad. La ecuación diferencial que rige este sistema incluye un término de amortiguamiento viscoso.

$$\frac{d^2x}{dt^2} + \frac{b}{m} \frac{dx}{dt} + \frac{k}{m} x = 0$$

## Casos de movimiento oscilatorio amortiguado

La naturaleza del movimiento depende de la relación entre el coeficiente de amortiguamiento y la frecuencia natural del sistema no amortiguado. Se definen el parámetro de amortiguamiento $\gamma$ y la frecuencia natural $\omega_0$.

$$\gamma = \frac{b}{2m}$$

$$\omega_0 = \sqrt{\frac{k}{m}}$$

Las raíces de la ecuación característica determinan tres regímenes dinámicos: subamortiguado ($\gamma < \omega_0$), críticamente amortiguado ($\gamma = \omega_0$) y sobreamortiguado ($\gamma > \omega_0$).

> [!example] Esquema Técnico
> 
> Comparativa de las curvas de posición frente al tiempo para los tres regímenes de amortiguamiento desde un mismo desplazamiento inicial.

## Movimiento oscilatorio subamortiguado – Decremento logarítmico

Ocurre cuando $\gamma < \omega_0$, resultando en una oscilación con una amplitud que decae exponencialmente en el tiempo. El sistema oscila con una frecuencia angular amortiguada $\omega_d$ inferior a su frecuencia natural.

$$x(t) = A_0 e^{-\gamma t} \cos(\omega_d t + \phi)$$

$$\omega_d = \sqrt{\omega_0^2 - \gamma^2}$$

El decremento logarítmico $\delta$ cuantifica la tasa de decaimiento de la amplitud. Se define como el logaritmo neperiano del cociente de dos amplitudes sucesivas separadas por un periodo amortiguado $T_d$.

$$\delta = \ln\left(\frac{x(t)}{x(t + T_d)}\right) = \gamma T_d$$

## Movimiento oscilatorio críticamente amortiguado

Se presenta cuando $\gamma = \omega_0$, condición que define la constante de amortiguamiento crítico $b_c$. El sistema retorna a su posición de equilibrio en el menor tiempo posible sin sobrepasarla ni oscilar.

$$b_c = 2\sqrt{km} = 2m\omega_0$$

La solución a la ecuación diferencial es la suma de una función exponencial y una función lineal multiplicada por una exponencial. Las constantes se determinan por las condiciones iniciales.

$$x(t) = (C_1 + C_2 t) e^{-\gamma t}$$

## Movimiento oscilatorio sobreamortiguado

Surge cuando $\gamma > \omega_0$, indicando una alta disipación de energía por fuerzas viscosas. El sistema regresa asintóticamente al equilibrio sin cruzarlo, de forma más lenta que en el caso crítico.

$$x(t) = C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t}$$

Los exponentes característicos $\lambda_1$ y $\lambda_2$ son reales y negativos.

$$\lambda_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$$

## Movimiento oscilatorio forzado

Un sistema forzado está sometido a una fuerza externa periódica que compensa la disipación de energía. La ecuación de movimiento incorpora la fuerza impulsora armónica $F(t) = F_0 \cos(\omega t)$.

$$\frac{d^2x}{dt^2} + \frac{b}{m} \frac{dx}{dt} + \omega_0^2 x = \frac{F_0}{m} \cos(\omega t)$$

La solución en estado estacionario es una oscilación armónica con la frecuencia de la fuerza externa. La amplitud de estado estacionario $A$ depende de la frecuencia impulsora.

$$A = \frac{F_0}{\sqrt{m^2(\omega_0^2 - \omega^2)^2 + b^2\omega^2}}$$

## Resonancia

La resonancia ocurre cuando la frecuencia de la fuerza externa $\omega$ se aproxima a la frecuencia natural del sistema $\omega_0$. En este estado, el sistema absorbe la máxima cantidad de energía y la amplitud de oscilación alcanza su valor pico.

La frecuencia de resonancia en amplitud $\omega_r$ para un sistema amortiguado es ligeramente inferior a $\omega_0$.

$$\omega_r = \sqrt{\omega_0^2 - 2\gamma^2}$$

> [!example] Esquema Técnico 
> Espectro de amplitud $A$ en función de la frecuencia impulsora $\omega$, mostrando picos de resonancia más pronunciados para valores menores de $b$.

**Definición de variables:**

- $x$: Posición o desplazamiento lineal [$\text{m}$]
- $t$: Tiempo [$\text{s}$]
- $b$: Coeficiente de amortiguamiento viscoso [$\text{kg/s}$]
- $m$: Masa del oscilador [$\text{kg}$]
- $k$: Constante elástica del sistema [$\text{N/m}$]
- $\gamma$: Parámetro de amortiguamiento [$\text{rad/s}$]
- $\omega_0$: Frecuencia angular natural no amortiguada [$\text{rad/s}$]
- $A_0$: Amplitud inicial [$\text{m}$]
- $\omega_d$: Frecuencia angular amortiguada [$\text{rad/s}$]
- $\phi$: Constante de fase [$\text{rad}$]
- $\delta$: Decremento logarítmico [Adimensional]
- $T_d$: Periodo de oscilación amortiguada [$\text{s}$]
- $b_c$: Constante de amortiguamiento crítico [$\text{kg/s}$]
- $C_1, C_2$: Constantes de integración [Variables según el caso]
- $\lambda_1, \lambda_2$: Raíces de la ecuación característica [$\text{s}^{-1}$]
- $F_0$: Amplitud de la fuerza externa [$\text{N}$]
- $\omega$: Frecuencia angular de la fuerza externa [$\text{rad/s}$]
- $A$: Amplitud en estado estacionario [$\text{m}$]
- $\omega_r$: Frecuencia angular de resonancia [$\text{rad/s}$]