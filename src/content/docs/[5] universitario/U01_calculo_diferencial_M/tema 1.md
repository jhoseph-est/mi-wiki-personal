---
title: tema 1
---

# 1. Funciones

## Definición.

Una función $f$ es una relación matemática que asocia a cada elemento de un conjunto de partida $A$, exactamente un elemento de un conjunto de llegada $B$. Se establece una regla de correspondencia unívoca donde la variable independiente determina el valor de la variable dependiente.
-
$$f: A \rightarrow B$$

$$y = f(x)$$

## Dominio, rango y gráfica.

El dominio es el subconjunto de $A$ compuesto por todos los valores de entrada admisibles para los cuales la función está definida matemáticamente.

$$D_f = \{x \in A \mid \exists y \in B, y = f(x)\}$$

El rango es el subconjunto de $B$ conformado por todos los valores de salida reales generados tras evaluar el dominio bajo la regla de correspondencia.

$$R_f = \{y \in B \mid \exists x \in A, y = f(x)\}$$

La gráfica es el lugar geométrico o conjunto de pares ordenados en el plano cartesiano $\mathbb{R}^2$ que representan la relación funcional.

$$G_f = \{(x, y) \in \mathbb{R}^2 \mid x \in D_f, y = f(x)\}$$

## Función máximo entero, función valor absoluto, función signo y función escalón unitario.

- **Función máximo entero:** Asigna a $x$ el mayor número entero que sea menor o igual a dicho valor real. Presenta discontinuidades de salto en cada entero.
    
    $$f(x) = \lfloor x \rfloor = \max \{n \in \mathbb{Z} \mid n \le x\}$$
    
- **Función valor absoluto:** Define la magnitud geométrica o distancia de un número real $x$ respecto al origen coordenado, sin considerar su dirección.
    
    $$f(x) = |x| = \begin{cases} x, & \text{si } x \ge 0 \\ -x, & \text{si } x < 0 \end{cases}$$
    
- **Función signo:** Extrae y representa el signo de un número real, descartando su magnitud.
    
    $$f(x) = \text{sgn}(x) = \begin{cases} 1, & \text{si } x > 0 \\ 0, & \text{si } x = 0 \\ -1, & \text{si } x < 0 \end{cases}$$
    
- **Función escalón unitario (Heaviside):** Modela transiciones instantáneas o interruptores de señales que cambian de estado nulo a unitario en el origen.
    
    $$f(x) = u(x) = \begin{cases} 1, & \text{si } x \ge 0 \\ 0, & \text{si } x < 0 \end{cases}$$
    

## Funciones trascendentes: función exponencial y función logarítmica, funciones hiperbólicas y funciones hiperbólicas inversas.

- **Función exponencial:** Función donde la base es constante y el exponente es la variable, caracterizando procesos de crecimiento o decaimiento de tasa proporcional.
    
    $$f(x) = a^x \quad (a > 0, a \neq 1)$$
    
- **Función logarítmica:** Función inversa de la exponencial, que determina el exponente necesario al que debe elevarse la base para obtener el argumento.
    
    $$f(x) = \log_a(x) \iff a^{f(x)} = x \quad (x > 0, a > 0, a \neq 1)$$
    
- **Funciones hiperbólicas:** Combinaciones algebraicas de funciones exponenciales naturales de base $e$. Describen fenómenos análogos a la trigonometría circular, pero sobre la geometría de una hipérbola.
    
    $$\sinh(x) = \frac{e^x - e^{-x}}{2}$$
    
    $$\cosh(x) = \frac{e^x + e^{-x}}{2}$$
    
    $$\tanh(x) = \frac{\sinh(x)}{\cosh(x)} = \frac{e^x - e^{-x}}{e^x + e^{-x}}$$
    

> [!example] Esquema Técnico
> 
> Gráfico comparativo superpuesto de las parametrizaciones trigonométricas $(\cos t, \sin t)$ sobre un círculo unitario $x^2 + y^2 = 1$, frente a las paramétricas hiperbólicas $(\cosh t, \sinh t)$ sobre la rama derecha de la hipérbola $x^2 - y^2 = 1$.

- **Funciones hiperbólicas inversas:** Inversas de las funciones hiperbólicas, cuyas reglas de correspondencia se expresan estrictamente mediante logaritmos naturales debido a su origen exponencial.
    
    $$\text{arsinh}(x) = \ln(x + \sqrt{x^2 + 1})$$
    
    $$\text{arcosh}(x) = \ln(x + \sqrt{x^2 - 1}) \quad (x \ge 1)$$
    
    $$\text{artanh}(x) = \frac{1}{2} \ln\left(\frac{1+x}{1-x}\right) \quad (|x| < 1)$$
    

---

**Lista de Variables:**

- $f$: Regla de correspondencia de la función matemática.
    
- $A$: Conjunto de partida (dominio base).
    
- $B$: Conjunto de llegada (codominio base).
    
- $x$: Variable independiente o argumento.
    
- $y$: Variable dependiente o imagen.
    
- $D_f$: Dominio efectivo de la función $f$.
    
- $R_f$: Rango efectivo de la función $f$.
    
- $G_f$: Gráfica de la función $f$.
    
- $\mathbb{R}^2$: Plano cartesiano real bidimensional.
    
- $n$: Número entero perteneciente al conjunto $\mathbb{Z}$.
    
- $a$: Base constante positiva (real).
    
- $e$: Número de Euler, base de logaritmos naturales ($\approx 2.71828$).
    
- $t$: Parámetro libre (referenciado en el esquema técnico).