---
title: Sistemas de transmisión de potencia - engranajes
---
# 4. Sistemas de transmisión de potencia - engranajes

## Engranajes cilíndricos rectos y helicoidales: nomenclatura, dimensiones ISO.

Los engranajes son mecanismos de transmisión de potencia por contacto directo entre dientes tallados en cuerpos cilíndricos o cónicos. La normativa **ISO 6336** regula el cálculo de la capacidad de carga y las dimensiones geométricas de estos elementos para garantizar la intercambiabilidad y el rendimiento mecánico.

### Nomenclatura técnica

La geometría del diente se basa principalmente en la curva **evolvente de círculo**, que permite mantener una relación de transmisión constante.

- **Módulo ($m$):** Es la magnitud fundamental de diseño en el sistema métrico. Se define como la relación entre el diámetro primitivo y el número de dientes. Todas las dimensiones del diente están en función del módulo.
    
    $$m = \frac{d}{z}$$
    
    Donde $d$ es el diámetro primitivo y $z$ es el número de dientes.
    
- **Diámetro primitivo ($d$):** Diámetro de la circunferencia teórica sobre la cual se realiza el contacto de rodadura pura.
    
- **Paso circular ($p$):** Distancia medida sobre la circunferencia primitiva entre puntos homólogos de dientes consecutivos.
    
    $$p = \pi \cdot m$$
    
- **Adendo ($h_a$):** Distancia radial desde la circunferencia primitiva hasta la cresta del diente. Según ISO, $h_a = m$.
    
- **Dedendo ($h_f$):** Distancia radial desde la circunferencia primitiva hasta el fondo del diente. Según ISO, $h_f = 1.25 \cdot m$.
    
- **Altura total ($h$):** Suma del adendo y el dedendo ($h = 2.25 \cdot m$).
    

### Engranajes helicoidales

A diferencia de los rectos, los dientes están inclinados respecto al eje de rotación un ángulo de hélice ($\beta$). Esto permite un contacto gradual, mayor capacidad de carga y menor ruido.

- **Módulo normal ($m_n$):** Módulo medido en el plano normal al diente. Es el valor normalizado para herramientas de corte.
    
- **Módulo transversal ($m_t$):** Módulo medido en el plano de rotación del engranaje.
    
    $$m_t = \frac{m_n}{\cos \beta}$$
    

## Engranajes cónicos: representación, fórmulas para dimensiones principales.

Se utilizan para transmitir movimiento entre ejes que se interceptan, generalmente a $90^{\circ}$. Su geometría se inscribe en un tronco de cono.

### Representación técnica

En dibujo técnico, los engranajes cónicos se representan mediante sus conos primitivos. En vistas seccionadas, se dibujan los contornos de los dientes en los extremos de mayor diámetro (diámetro primitivo exterior), mientras que las líneas de fondo y cresta convergen en el vértice del cono ($V$).

### Fórmulas para dimensiones principales

Las dimensiones se calculan en el círculo mayor (extremo exterior) del engranaje:

- **Diámetro primitivo ($d$):**
    
    $$d = m \cdot z$$
    
- **Ángulo del cono primitivo ($\delta$):** Para ejes a $90^{\circ}$, se calcula en función de la relación de transmisión ($u = z_2 / z_1$):
    
    $$\tan \delta_1 = \frac{z_1}{z_2}$$
    
    $$\delta_2 = 90^{\circ} - \delta_1$$
    
- **Generatriz del cono ($R$):** Distancia del vértice al círculo primitivo exterior.
    
    $$R = \frac{d}{2 \cdot \sin \delta}$$
    
- **Ángulo de adendo ($\theta_a$) y dedendo ($\theta_f$):**
    
    $$\tan \theta_a = \frac{h_a}{R} = \frac{m}{R}$$
    
    $$\tan \theta_f = \frac{h_f}{R} = \frac{1.25 \cdot m}{R}$$
    
- **Ángulo del cono de cabeza ($\delta_a$):**
    
    $$\delta_a = \delta + \theta_a$$
    

> [!example] foto
> 
> [Diagrama de un engranaje cónico en corte que muestre claramente el vértice del cono, el ángulo del cono primitivo y cómo las líneas de la cabeza y raíz del diente convergen en el punto de intersección de los ejes].
