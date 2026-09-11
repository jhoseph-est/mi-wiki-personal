---
title: Tolerancias, ajustes y acabado superficial
---
# 2. Tolerancias, ajustes y acabado superficial

## Tolerancias dimensionales: numéricas e ISO, cotas máxima, nominal, mínima, desviaciones.

En la fabricación seriada, es físicamente imposible obtener dimensiones exactas debido a la imprecisión inherente a las máquinas-herramienta, el desgaste de los útiles, las vibraciones y las variaciones térmicas. Por ello, se establece la **tolerancia dimensional**, que define el margen de error admisible dentro del cual la pieza es funcional.

### Conceptos fundamentales

Para la definición de una dimensión con tolerancia, se utilizan los siguientes términos técnicos:

- **Cota Nominal ($D_n, d_n$):** Valor teórico que se indica en el plano y que sirve de referencia para las desviaciones. Se utiliza mayúscula para agujeros y minúscula para ejes.
    
- **Cota Máxima ($D_{max}, d_{max}$):** La mayor dimensión admisible de la pieza.
    
- **Cota Mínima ($D_{min}, d_{min}$):** La menor dimensión admisible de la pieza.
    
- **Tolerancia ($IT$):** Diferencia aritmética entre la cota máxima y la cota mínima. Es siempre un valor positivo.
    
    $$IT = D_{max} - D_{min}$$
    
- **Desviación Superior ($E_s, e_s$):** Diferencia algebraica entre la cota máxima y la nominal.
    
    $$E_s = D_{max} - D_n$$
    
- **Desviación Inferior ($E_i, e_i$):** Diferencia algebraica entre la cota mínima y la nominal.
    
    $$E_i = D_{min} - D_n$$
    

### Tolerancias ISO

El sistema ISO de tolerancias clasifica la precisión mediante **Grados de Tolerancia IT** (del IT01 al IT18). Cuanto menor es el número, mayor es la precisión exigida. La posición de la zona de tolerancia respecto a la línea cero (cota nominal) se designa mediante letras:

- **A - Z:** Para agujeros (letras mayúsculas).
    
- **a - z:** Para ejes (letras minúsculas).
    
- **H/h:** Posición donde la desviación fundamental es cero (la zona de tolerancia comienza en la línea nominal).
    

## Ajustes: designación, tolerancia de ajuste, sistemas de ajustes.

El **ajuste** es la relación mecánica resultante entre dos piezas (eje y agujero) que tienen la misma cota nominal y que deben ser ensambladas.

### Tipos de Ajustes

Dependiendo de la posición relativa de las zonas de tolerancia, se clasifican en:

1. **Ajuste con juego ($J$):** El diámetro del agujero es siempre mayor que el del eje. Existe movilidad.
    
    - $J_{max} = D_{max} - d_{min}$
        
    - $J_{min} = D_{min} - d_{max}$
        
2. **Ajuste con aprieto ($A$):** El diámetro del eje es mayor que el del agujero antes del montaje. Requiere fuerza o diferencia térmica para el ensamblaje.
    
    - $A_{max} = d_{max} - D_{min}$
        
    - $A_{min} = d_{min} - D_{max}$
        
3. **Ajuste indeterminado:** Las zonas de tolerancia se solapan. Puede resultar en juego o aprieto según el azar de la fabricación.
    

### Designación y Sistemas

La designación se realiza acoplando la cota nominal seguida de las posiciones de tolerancia del agujero y del eje (ej. $50H7/g6$). Existen dos sistemas normalizados para limitar la variedad de herramientas de corte:

- **Sistema de Agujero Único:** Se fija la posición del agujero en **H** (desviación inferior igual a cero) y se varía la posición del eje para obtener el ajuste deseado. Es el más utilizado por ser más económico mecanizar ejes que agujeros.
    
- **Sistema de Eje Único:** Se fija la posición del eje en **h** (desviación superior igual a cero) y se varía la posición del agujero.
    

## Acabado superficial: definición, símbolos, tablas ISO.

El **acabado superficial** o rugosidad se refiere al conjunto de irregularidades microgeométricas de una superficie, resultantes del proceso de fabricación (torneado, fresado, rectificado, etc.).

### Parámetros de Rugosidad

El parámetro más utilizado es la **Rugosidad Media Aritmética ($R_a$)**, definida como el valor medio de las ordenadas del perfil de rugosidad en valor absoluto a lo largo de una longitud de muestreo $L$:

$$R_a = \frac{1}{L} \int_{0}^{L} |y(x)| \, dx$$

### Simbología Normalizada

Según la norma **ISO 1302**, el símbolo básico es un triángulo abierto con dos ramas desiguales. La información se añade según la posición:

- **Símbolo básico:** Solo indica que se requiere un acabado superficial.
    
- **Triángulo con barra horizontal:** Obliga a la eliminación de material (mecanizado).
    
- **Triángulo con círculo inscrito:** Prohíbe la eliminación de material (forja, fundición, laminación).
    

### Tablas ISO de rugosidad

La norma establece clases de rugosidad (N1 a N12) asociadas a valores específicos de $R_a$ en micrómetros ($\mu m$).

|**Clase**|**Ra​ (μm)**|**Proceso Típico**|
|---|---|---|
|N1-N4|0.025 - 0.2|Lapeado, Superacabado|
|N5-N6|0.4 - 0.8|Rectificado fino|
|N7-N9|1.6 - 6.3|Fresado, Torneado|
|N10-N12|12.5 - 50|Desbastado|

> [!example] foto
> 
> [Diagrama detallado de un símbolo de rugosidad completo mostrando la ubicación de cada parámetro: valor de Ra, proceso de tratamiento (p. ej. cromado), longitud de muestreo y dirección de las huellas de mecanizado (estriado)].
