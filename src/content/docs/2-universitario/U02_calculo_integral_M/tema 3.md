---
title: tema 3
---

# 3. Integrales impropias

## Fundamento de las integrales impropias

### Definición

Una integral es impropia cuando el intervalo de integración es infinito o cuando la función integrando $f(x)$ presenta una discontinuidad infinita (asíntota vertical) en dicho intervalo. Se evalúan mediante el paso al límite de integrales definidas en subintervalos compactos.

$$\int_{a}^{\infty} f(x) dx = \lim_{b \to \infty} \int_{a}^{b} f(x) dx$$

---

## Clasificación de las integrales impropias

### Tipos de integrales impropias: primera, segunda y tercera especie

- **Primera especie:** El intervalo de integración es no acotado (infinito).
    
    - Ejemplo: $\int_{a}^{\infty} f(x) dx$, $\int_{-\infty}^{b} f(x) dx$ o $\int_{-\infty}^{\infty} f(x) dx$.
        
- **Segunda especie:** El integrando $f(x)$ no está acotado en uno o más puntos del intervalo $[a, b]$.
    
    - Ejemplo: $\int_{0}^{1} \frac{1}{\sqrt{x}} dx$, donde $f(x) \to \infty$ cuando $x \to 0^+$.
        
- **Tercera especie:** Combinación de ambas condiciones; intervalo infinito y presencia de discontinuidades infinitas dentro del mismo.
    

> [!example] Esquema Técnico

---

## Tratamientos especiales de convergencia

### Valor principal de las integrales impropias de tercera especie

El Valor Principal de Cauchy ($VP$) se utiliza cuando una integral de una función con una singularidad en $c \in (a, b)$ no converge de forma independiente por límites laterales, pero sí mediante una aproximación simétrica:

$$VP \int_{a}^{b} f(x) dx = \lim_{\epsilon \to 0^+} \left[ \int_{a}^{c-\epsilon} f(x) dx + \int_{c+\epsilon}^{b} f(x) dx \right]$$

---

## Funciones especiales relacionadas

### Propiedades de las funciones Gamma y Beta

- **Función Gamma ($\Gamma$):** Generalización del factorial para números reales y complejos ($\text{Re}(z) > 0$).
    
    $$\Gamma(z) = \int_{0}^{\infty} t^{z-1} e^{-t} dt$$
    
    - Propiedad: $\Gamma(z+1) = z\Gamma(z)$; $\Gamma(n+1) = n!$ para $n \in \mathbb{N}$.
        
- **Función Beta ($B$):** Relacionada con la función Gamma mediante productos.
    
    $$B(x, y) = \int_{0}^{1} t^{x-1} (1-t)^{y-1} dt = \frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}$$
    

---

## Aplicaciones

### Aplicaciones de apoyo a diversas disciplinas

- **Estadística:** Cálculo de probabilidades en distribuciones normales y exponenciales sobre rangos infinitos.
    
- **Física:** Potencial eléctrico y energía gravitatoria de cuerpos extendidos en el espacio.
    
- **Procesamiento de Señales:** Definición de la Transformada de Laplace y de Fourier mediante integrales de primera especie.
    
    $$\mathcal{L}\{f(t)\} = \int_{0}^{\infty} e^{-st} f(t) dt$$
    

---

**Lista de variables:**

- $a, b$: Límites de integración.
- $f(x)$: Función integrando.
- $\epsilon$: Incremento infinitesimal para el límite de convergencia.
- $z, x, y$: Parámetros reales o complejos de las funciones Gamma y Beta.
- $t$: Variable muda de integración.
- $s$: Variable compleja en la Transformada de Laplace.
- $VP$: Valor Principal de Cauchy.
