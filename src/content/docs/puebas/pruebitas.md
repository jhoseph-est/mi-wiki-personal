---
title: pruebitas
---

# 15. Ley de Coulomb para distribuciones continuas

Una distribución continua aparece cuando la carga está distribuida sobre:

- una línea o barra;
- una superficie;
- un volumen.

En vez de considerar cargas individuales, utilizamos un elemento infinitesimal:

$$
dq
$$

La suma:

$$
\sum
$$

se reemplaza por una integral:

$$
\boxed{\sum\rightarrow\int}
$$

La fuerza infinitesimal es:

$$
d\vec F=
k\frac{q\,dq}{r^2}\hat r
$$

Por tanto:

$$
\boxed{
\vec F=
k\int
\frac{q\,dq}{r^2}\hat r
}
$$

---

## 15.1 Densidad lineal

Para una carga distribuida a lo largo de una línea:

$$
\boxed{
\lambda=\frac{dq}{dl}
}
$$

por lo tanto:

$$
\boxed{
dq=\lambda\,dl
}
$$

Unidad:

$$
[\lambda]=C/m
$$

Entonces:

$$
\boxed{
\vec F=
k\int
\frac{q\lambda\,dl}{r^2}\hat r
}
$$

---

## 15.2 Densidad superficial

Para una carga distribuida sobre una superficie:

$$
\boxed{
\sigma=\frac{dq}{dA}
}
$$

por lo tanto:

$$
\boxed{
dq=\sigma\,dA
}
$$

Unidad:

$$
[\sigma]=C/m^2
$$

Entonces:

$$
\boxed{
\vec F=
k\int
\frac{q\sigma\,dA}{r^2}\hat r
}
$$

---

## 15.3 Densidad volumétrica

Para una carga distribuida dentro de un volumen:

$$
\boxed{
\rho=\frac{dq}{dV}
}
$$

por lo tanto:

$$
\boxed{
dq=\rho\,dV
}
$$

Unidad:

$$
[\rho]=C/m^3
$$

Entonces:

$$
\boxed{
\vec F=
k\int
\frac{q\rho\,dV}{r^2}\hat r
}
$$

---

# 16. Ejemplo de distribución continua

Supongamos una barra cargada uniformemente con:

$$
Q=10\,\mu C
$$

y:

$$
L=2\,m
$$

### Paso 1: densidad lineal

$$
\lambda=\frac{Q}{L}
$$

$$
\lambda=
\frac{10\times10^{-6}}{2}
$$

$$
\boxed{
\lambda=5\times10^{-6}\ C/m
}
$$

### Paso 2: elemento de carga

Un pequeño segmento $dx$ contiene:

$$
\boxed{
dq=\lambda\,dx
}
$$

### Paso 3: fuerza diferencial

Sobre una carga $q$:

$$
dF=
k\frac{q\,dq}{r^2}
$$

Sustituyendo:

$$
dF=
k\frac{q\lambda\,dx}{r^2}
$$

### Paso 4: fuerza total

Integramos sobre toda la barra:

$$
\boxed{
F=
kq\lambda
\int
\frac{dx}{r^2}
}
$$

Los límites y la expresión de $r$ dependen de la geometría del problema.

---

# 17. Diferencia entre distribución discreta y continua

| Distribución discreta | Distribución continua |
|---|---|
| Cargas puntuales | Carga distribuida |
| $q_1,q_2,q_3,\ldots$ | $dq$ |
| Se utiliza $\sum$ | Se utiliza $\int$ |
| Cada carga se analiza individualmente | Se divide la distribución en elementos infinitesimales |
| $\vec F=\sum\vec F_i$ | $\vec F=\int d\vec F$ |

La idea matemática fundamental es:

$$
\boxed{
\text{muchas cargas pequeñas}
\longrightarrow
\text{integral}
}
$$

---

# 18. Resumen de fórmulas

### Cuantización

$$
\boxed{q=ne}
$$

### Ley de Coulomb

$$
\boxed{
F=k\frac{|q_1q_2|}{r^2}
}
$$

### Constante de Coulomb

$$
\boxed{
k=\frac{1}{4\pi\varepsilon_0}
}
$$

$$
\boxed{
k\approx8.99\times10^9\frac{N\,m^2}{C^2}
}
$$

### Superposición

$$
\boxed{
\vec F_T=\sum_i\vec F_i
}
$$

### Densidad lineal

$$
\boxed{
\lambda=\frac{dq}{dl}
}
$$

### Densidad superficial

$$
\boxed{
\sigma=\frac{dq}{dA}
}
$$

### Densidad volumétrica

$$
\boxed{
\rho=\frac{dq}{dV}
}
$$

### Distribución continua

$$
\boxed{
\vec F=
k\int
\frac{q\,dq}{r^2}\hat r
}
$$

---

# 19. Mapa conceptual

```text
                         ELECTRICIDAD
                              │
                ┌─────────────┴─────────────┐
                │                           │
          CARGA ELÉCTRICA              INTERACCIÓN
                │                           │
       ┌────────┼────────┐            Fuerza eléctrica
       │        │        │                   │
   Positiva  Negativa  Propiedades      Ley de Coulomb
                         │                    │
              ┌──────────┼──────────┐         │
              │          │          │         │
          Atracción  Conservación Cuantización │
          Repulsión       │          │         │
                          │        q = ne       │
                          │                    │
                  ELECTRIZACIÓN                │
                          │                    │
            ┌─────────────┼─────────────┐      │
            │             │             │      │
         Frotación    Conducción    Inducción  │
                                                │
                              ┌─────────────────┘
                              │
                       SUPERPOSICIÓN
                              │
                    ┌─────────┴─────────┐
                    │                   │
                 Discreta            Continua
                    │                   │
                   Σ                   ∫
                    │                   │
              q₁,q₂,q₃...          λ, σ, ρ
```

---

# 20. Ideas fundamentales para estudiar

El tema completo puede organizarse alrededor de estas ideas:

$$
\boxed{q=ne}
$$

La carga está cuantizada.

$$
\boxed{
F=k\frac{|q_1q_2|}{r^2}
}
$$

Dos cargas interactúan mediante la Ley de Coulomb.

$$
\boxed{
\vec F_T=\sum_i\vec F_i
}
$$

Varias cargas producen una fuerza total que se obtiene mediante superposición.

Finalmente, cuando la carga está distribuida continuamente:

$$
\boxed{
\sum\rightarrow\int
}
$$

y se pasa de una suma de fuerzas a una integral.

> **Ruta de estudio recomendada:** carga eléctrica → propiedades → electrización → conductores y aislantes → tierra → Ley de Coulomb → unidades → alcance → balanza de torsión → superposición → distribuciones discretas → distribuciones continuas.
