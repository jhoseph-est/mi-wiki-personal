---
title: Introducción a la teoría de elasticidad
---
## Introducción
La teoría de la elasticidad estudia el comportamiento de los cuerpos deformables ante la aplicación de cargas externas. A diferencia de la mecánica del cuerpo rígido, aquí se reconoce que las fuerzas internas provocan desplazamientos relativos entre las partículas del sólido, alterando su geometría.

---

## Elasticidad

La **elasticidad** es la propiedad mecánica de un material que le permite recuperar su forma y dimensiones originales una vez que cesa la acción de las fuerzas externas que lo deformaban. Si el cuerpo no recupera totalmente su forma, se dice que ha experimentado una **deformación plástica** o permanente.

## Deformaciones elásticas

Una deformación es **elástica** cuando el trabajo realizado por las fuerzas externas se almacena íntegramente como energía potencial interna (energía de deformación). Al retirar la carga, esta energía es liberada para restaurar la configuración inicial del sólido. En materiales metálicos, esto ocurre mediante el desplazamiento reversible de los átomos en la red cristalina.

## Esfuerzo normal: de tensión o tracción y compresión

El **esfuerzo ($\sigma$)** se define como la intensidad de las fuerzas internas que se oponen a la deformación, distribuidas sobre un área determinada. El esfuerzo normal actúa perpendicularmente a la sección transversal del cuerpo.

$$\sigma = \frac{F_{\perp}}{A}$$

- **Tensión o tracción:** Las fuerzas externas tienden a estirar el cuerpo, aumentando su longitud. Por convención, se considera positivo.
    
- **Compresión:** Las fuerzas externas tienden a acortar el cuerpo. Se considera negativo.
    

## Esfuerzo cortante

El **esfuerzo cortante o de cizalladura ($\tau$)** actúa de forma tangencial o paralela a la superficie de la sección transversal. Tiende a hacer que una parte del material deslice sobre la otra.

$$\tau = \frac{F_{\parallel}}{A}$$

Este tipo de esfuerzo es fundamental en el análisis de pernos, remaches y uniones estructurales.

## Deformación longitudinal y deformación unitaria

Cuando una barra de longitud inicial $L_0$ se somete a un esfuerzo normal, su longitud cambia en una cantidad $\Delta L$.

- **Deformación longitudinal ($\delta$):** Es el cambio total en la dimensión, $\delta = \Delta L$.
    
- **Deformación unitaria ($\epsilon$):** Es una magnitud adimensional que representa el cambio de longitud por unidad de longitud original.
    
    $$\epsilon = \frac{\Delta L}{L_0}$$
    

## Ley de Hooke

Para la mayoría de los materiales de ingeniería, existe una relación lineal entre el esfuerzo y la deformación unitaria, siempre que no se exceda el límite de elasticidad. Esta relación se conoce como la **Ley de Hooke**:

$$\sigma = E \cdot \epsilon$$

Donde $E$ es el **Módulo de Young** o módulo de elasticidad longitudinal. Sus unidades en el SI son los Pascales ($Pa$ o $N/m^2$). Representa la rigidez del material.

## Principio de superposición

En el régimen elástico-lineal, el efecto (deformación o esfuerzo) producido por un sistema de cargas es igual a la suma de los efectos producidos por cada carga actuando individualmente. Este principio es válido solo si:

1. El material es linealmente elástico.
    
2. Las deformaciones son lo suficientemente pequeñas como para no alterar significativamente la geometría del sistema.
    

## Curva esfuerzo-deformación unitaria

Es el gráfico resultante de un ensayo de tracción que caracteriza el comportamiento mecánico de un material. Presenta varias regiones críticas:

1. **Límite de proporcionalidad:** Punto hasta donde se cumple la Ley de Hooke.
    
2. **Límite elástico:** Máximo esfuerzo que el material soporta sin sufrir deformación permanente.
    
3. **Zona de fluencia:** El material se deforma considerablemente con poco o ningún aumento de carga.
    
4. **Esfuerzo último:** La máxima resistencia a la tracción del material.
    
5. **Punto de fractura:** Punto donde ocurre la falla física.
    

## Energía potencial elástica

El trabajo realizado para deformar un material elástico se almacena como energía potencial. Para una deformación axial dentro del rango elástico, la energía potencial elástica ($U$) es:

$$U = \frac{1}{2} F \Delta L = \frac{1}{2} k (\Delta L)^2$$

En términos de densidad de energía (energía por unidad de volumen, $u$):

$$u = \frac{1}{2} \sigma \epsilon = \frac{\sigma^2}{2E}$$

> [!example] foto
> 
> [Gráfico de esfuerzo vs deformación unitaria resaltando el área bajo la curva en la región elástica, la cual representa la resiliencia o densidad de energía potencial elástica almacenada].
