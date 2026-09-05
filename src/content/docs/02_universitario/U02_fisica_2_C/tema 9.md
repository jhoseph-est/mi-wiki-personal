---
title: tema 9
---

# 9. Flujo Viscoso y Calor

## Flujo laminar viscoso en tuberías

El régimen laminar en conductos cilíndricos cerrados se caracteriza por líneas de corriente concéntricas y ordenadas, dominadas por fuerzas de fricción viscosa frente a las inerciales ($Re < 2100$). La condición de no deslizamiento geométrica en las fronteras sólidas impone un perfil de velocidades transversal estrictamente parabólico.

$$v(r) = v_{max} \left(1 - \frac{r^2}{R^2}\right)$$

> [!example] Esquema Técnico
> Perfil de velocidades transversal de un flujo laminar completamente desarrollado, evidenciando el gradiente de velocidad desde el eje longitudinal (máximo) hasta la pared de la tubería (nulo).

## Ley de Poiseuille

Cuantifica la caída de presión estática longitudinal requerida para superar la disipación por fricción viscosa en un flujo laminar, estacionario e incompresible dentro de un conducto cilíndrico. El caudal volumétrico resultante es directamente proporcional al gradiente de presión y a la cuarta potencia del radio, e inversamente proporcional a la viscosidad dinámica de la sustancia.

$$Q = \frac{\pi R^4 \Delta P}{8 \mu L}$$

## Ecuación de Bernoulli con pérdidas

Generaliza el principio de conservación de la energía mecánica para flujos incompresibles reales, incorporando un término sumidero que modela la disipación termodinámica irreversible debido a la fricción interna y la turbulencia. La pérdida de carga total $h_L$ suma algebraicamente las pérdidas mayores continuas y las pérdidas menores localizadas en singularidades geométricas del conducto.

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2 + \rho g h_L$$

## Temperatura y la Ley Cero de la Termodinámica

La temperatura es una variable de estado termodinámica intensiva escalar que cuantifica macroscópicamente la energía cinética traslacional promedio de los grados de libertad de las partículas del sistema. La Ley Cero postula que la relación de equilibrio térmico es transitiva, fundamentando teóricamente la construcción de termómetros estandarizados empíricos.

$$T_A = T_B \land T_B = T_C \implies T_A = T_C$$

## Dilatación térmica

Constituye la respuesta de distorsión geométrica espacial de un medio material masivo ante perturbaciones en su campo de temperatura interno, originada por la variación en la amplitud media de la vibración de su red molecular. Para sólidos isotrópicos sometidos a pequeños gradientes térmicos, los cambios relativos de longitud, área o volumen responden a un modelo constitutivo estrictamente lineal.

$$\Delta L = \alpha L_0 \Delta T$$

$$\Delta V = \beta V_0 \Delta T$$

## Esfuerzo térmico

El esfuerzo térmico es el tensor de tensión mecánica axial inducido en el interior de un elemento elástico sólido cuando se restringe físicamente, ya sea total o parcialmente, su dilatación o contracción térmica libre. Aplicando la Ley de Hooke generalizada para un estado de tensión uniaxial homogéneo, la magnitud de esta carga interna depende directamente de las propiedades elastotérmicas del material.

$$\sigma_T = E \alpha \Delta T$$

## Calor

El calor denota el fenómeno transitorio de transferencia de energía térmica cuantificada a través de las fronteras de control de un sistema termodinámico abierto o cerrado. Este vector de densidad de flujo de energía térmica es impulsado exclusivamente por la existencia de un gradiente espacial negativo de temperatura (Ley de Fourier) y no es una función analítica de estado.

## Capacidad calorífica

Representa la derivada parcial del intercambio de calor respecto al cambio de temperatura inducido en el sistema material global. Al tratarse de una magnitud termodinámica extensiva, la inercia térmica total depende tanto de la matriz estequiométrica del componente como de su masa volumétrica agregada.

$$C = \frac{dQ}{dT}$$

## Calor específico

Es la métrica intensiva normalizada de la capacidad calorífica evaluada por unidad de masa inercial de la sustancia isotrópica. La dinámica de transferencia en gases exige la distinción analítica rigurosa entre el calor específico isobárico ($c_p$) y el calor específico isocórico ($c_v$), dependientes de la trayectoria politrópica del proceso.

$$c = \frac{1}{m} \frac{dQ}{dT}$$

$$Q = m c \Delta T$$

---

**Definición de variables:**

- $v(r)$: Campo de velocidad longitudinal local en la coordenada radial $r$ [$\text{m/s}$]
- $v_{max}$: Velocidad cinemática máxima en el eje centroidal [$\text{m/s}$]
- $r$: Coordenada espacial radial respecto al eje transversal [$\text{m}$]
- $R$: Radio diametral interno estático de la tubería [$\text{m}$]
- $Re$: Número adimensional de Reynolds fluido dinámico [Adimensional]
- $Q$: Gasto o caudal volumétrico estacionario [$\text{m}^3\text{/s}$]
- $\Delta P$: Caída neta de presión hidrodinámica o fuerza motriz estática [$\text{Pa}$]
- $\mu$: Viscosidad dinámica, absoluta o de cizalla del fluido [$\text{Pa}\cdot\text{s}$]
- $L$: Distancia geométrica de recorrido longitudinal del tubo [$\text{m}$]
- $P_1, P_2$: Carga de presiones estáticas absolutas de las secciones [$\text{Pa}$]
- $\rho$: Densidad volumétrica uniforme o masa específica [$\text{kg/m}^3$]
- $v_1, v_2$: Velocidades promedio de flujo espacial volumétrico [$\text{m/s}$]
- $g$: Aceleración normalizada de la gravedad terrestre [$\text{m/s}^2$]
- $z_1, z_2$: Elevación piezométrica o cota geométrica conservativa [$\text{m}$]
- $h_L$: Carga hidráulica irreversible disipada o pérdida de altura [$\text{m}$]
- $T_A, T_B, T_C$: Estados de temperatura termodinámica locales isotrópicos [$\text{K}$]
- $\Delta L$: Variación lineal o desplazamiento de elongación [$\text{m}$]
- $L_0$: Medida longitudinal original o en estado frío [$\text{m}$]
- $\Delta T$: Diferencial temporal del gradiente térmico de estado [$\text{K}$]
- $\alpha$: Módulo constante empírico de expansión isotrópica lineal [$\text{K}^{-1}$]
- $\Delta V$: Incremento volumétrico o dilatación cúbica volumétrica [$\text{m}^3$]
- $V_0$: Capacidad del volumen inicial confinado físico [$\text{m}^3$]
- $\beta$: Coeficiente constitutivo volumétrico macroscópico ($\beta \approx 3\alpha$) [$\text{K}^{-1}$]
- $\sigma_T$: Tensor normal o esfuerzo elástico longitudinal inducido [$\text{Pa}$]
- $E$: Módulo constitutivo elástico longitudinal de Young de la matriz [$\text{Pa}$]
- $C$: Calorimetría integral extensiva volumétrica [$\text{J/K}$]
- $Q$: Energía transferida en transición (calor sensible latente) [$\text{J}$]
- $c$: Valor calorífico termodinámico mássico e intensivo [$\text{J/(kg}\cdot\text{K)}$]
- $m$: Magnitud física escalar inercial del sistema termodinámico [$\text{kg}$]
- $c_p, c_v$: Valores caloríficos intensivos a presión isobárica o isocórica [$\text{J/(kg}\cdot\text{K)}$]