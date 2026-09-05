---
title: tema 8
---

# 8. Hidrodinámica

La hidrodinámica estudia el comportamiento cinemático y dinámico de los fluidos macroscópicos en movimiento. Se fundamenta en las leyes de conservación de masa, momento lineal y energía, aplicando los enfoques euleriano (volumen de control) o lagrangiano (sistema de masa).

## Análisis y tipos de flujos

El análisis de flujo se clasifica según la variación espacial y temporal de las propiedades del fluido y la topología del campo de velocidades. Un flujo es permanente o estacionario si las propiedades en cualquier punto espacial son invariantes en el tiempo ($\partial/\partial t = 0$), y uniforme si el vector velocidad es constante a lo largo de cualquier línea de corriente espacial ($\partial\vec{v}/\partial s = 0$).

Dependiendo de la dominancia de las fuerzas inerciales sobre las fuerzas viscosas, cuantificada por el número de Reynolds adimensional $Re$, el flujo se categoriza dinámicamente. Resulta laminar para $Re < 2100$ (líneas de corriente paralelas y ordenadas), y turbulento para $Re > 4000$ (fluctuaciones caóticas y transferencia de momento macroscópica).

$$Re = \frac{\rho v D}{\mu}$$

> [!example] Esquema Técnico
> 
> Comparativa visual de los perfiles de velocidad transversal y las trayectorias de partículas para regímenes de flujo laminar (perfil parabólico) y turbulento (perfil aplanado).

## Ecuación de continuidad

Expresa el principio físico de conservación de masa aplicado a un volumen de control de fluido. Para un tubo de corriente con flujo estacionario unidimensional, el flujo másico neto a través de las secciones transversales es estrictamente constante.

$$\dot{m} = \rho_1 A_1 v_1 = \rho_2 A_2 v_2 = \text{constante}$$

Si el campo de flujo se aproxima termodinámicamente como incompresible ($\rho = \text{constante}$), la divergencia del campo de velocidades es nula. La ecuación se simplifica a la conservación del caudal volumétrico $Q$ a lo largo de la conducción.

$$Q = A_1 v_1 = A_2 v_2 = \text{constante}$$

## Ecuación de Bernoulli

Deriva de la integración de la ecuación diferencial de Euler a lo largo de una línea de corriente, constituyendo el principio de conservación de la energía mecánica por unidad de volumen. Su aplicación es rigurosamente válida solo para campos de flujo estacionarios, incompresibles, invíscidos (sin disipación por fricción) e irrotacionales.

$$P + \frac{1}{2}\rho v^2 + \rho g z = \text{constante}$$

Los términos aditivos representan la densidad de energía de presión (presión estática), la densidad de energía cinética (presión dinámica) y la densidad de energía potencial gravitatoria (presión hidrostática de elevación), respectivamente.

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g z_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g z_2$$

## Aplicaciones

**Tubo de Venturi:** Caudalímetro diferencial que basa su operación en la caída de presión estática inducida por una restricción de área transversal (estrangulamiento). Acopla algebraicamente la ecuación de continuidad y la ecuación de Bernoulli.

$$v_1 = \sqrt{\frac{2(P_1 - P_2)}{\rho \left[ \left(\frac{A_1}{A_2}\right)^2 - 1 \right]}}$$

**Tubo de Pitot:** Sonda aerodinámica diseñada para determinar la velocidad local de un flujo midiendo el gradiente de presión. Relaciona la presión de estancamiento $P_{est}$ (punto de velocidad nula) y la presión estática libre $P_{estat}$.

$$v = \sqrt{\frac{2(P_{est} - P_{estat})}{\rho}}$$

**Teorema de Torricelli:** Modela la velocidad de eflujo de un líquido incompresible a través de un orificio de pared delgada abierto a la atmósfera. Bajo la acción exclusiva de la gravedad, la celeridad de salida es cinemáticamente equivalente a la de caída libre desde la superficie libre del líquido.

$$v = \sqrt{2gh}$$

> [!example] Esquema Técnico
> Diagrama transversal de un tubo de Venturi operando horizontalmente, evidenciando la depresión estática en la garganta mediante tubos piezométricos o manómetros en $U$.

---

**Definición de variables:**

- $t$: Tiempo [$\text{s}$]
- $s$: Coordenada intrínseca a lo largo de la línea de corriente [$\text{m}$]
- $\vec{v}$: Vector velocidad del fluido [$\text{m/s}$]
- $Re$: Número de Reynolds [Adimensional]
- $\rho$: Densidad volumétrica del fluido [$\text{kg/m}^3$]
- $v$: Velocidad media de la sección o velocidad local [$\text{m/s}$]
- $D$: Diámetro interno de la tubería o longitud característica [$\text{m}$]
- $\mu$: Viscosidad dinámica o absoluta del fluido [$\text{Pa}\cdot\text{s}$]
- $\dot{m}$: Flujo másico o gasto másico [$\text{kg/s}$]
- $A_1, A_2$: Áreas de las secciones transversales de control [$\text{m}^2$]
- $v_1, v_2$: Velocidades medias en las secciones correspondientes [$\text{m/s}$]
- $Q$: Caudal volumétrico o gasto volumétrico [$\text{m}^3\text{/s}$]
- $P$: Presión estática absoluta del fluido [$\text{Pa}$]
- $g$: Aceleración local de la gravedad [$\text{m/s}^2$]
- $z$: Cota de elevación geométrica respecto a un datum [$\text{m}$]
- $P_1, P_2$: Presiones estáticas en las secciones 1 y 2 [$\text{Pa}$]
- $z_1, z_2$: Elevaciones de las secciones 1 y 2 [$\text{m}$]
- $P_{est}$: Presión total o de estancamiento [$\text{Pa}$]
- $P_{estat}$: Presión estática libre [$\text{Pa}$]
- $h$: Carga hidráulica o carga de posición respecto al orificio [$\text{m}$]