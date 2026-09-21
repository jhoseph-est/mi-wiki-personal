---
title: Introducción y ley de Coulomb
---
# Electricidad y electrostática

> Guía de estudio con conceptos, fórmulas en LaTeX y ejemplos paso a paso.

## 1. Breve reseña histórica sobre la electricidad

La electricidad es un fenómeno físico asociado principalmente a la **carga eléctrica** y a sus interacciones.

| Época       | Personaje / acontecimiento  | Aporte                                                                     |
| ----------- | --------------------------- | -------------------------------------------------------------------------- |
| ~600 a. C.  | Tales de Mileto             | Observó que el ámbar frotado podía atraer objetos ligeros.                 |
| 1600        | William Gilbert             | Estudió sistemáticamente la electricidad y el magnetismo.                  |
| 1733        | Charles du Fay              | Propuso la existencia de dos tipos de electricidad.                        |
| 1748        | Benjamin Franklin           | Introdujo las ideas de carga positiva y negativa.                          |
| Siglo XVIII | Charles-Augustin de Coulomb | Determinó experimentalmente la relación entre fuerza y cargas eléctricas.  |
| Siglo XVIII | Henry Cavendish             | Realizó importantes experimentos sobre electricidad y gravitación.         |
| Siglo XIX   | Michael Faraday             | Desarrolló conceptos fundamentales de campo eléctrico y electromagnetismo. |
| Siglo XIX   | James Clerk Maxwell         | Unificó matemáticamente electricidad y magnetismo.                         |

La **electrostática** estudia principalmente las cargas eléctricas en reposo.

---

## 2. Interacción eléctrica

Una carga eléctrica puede ejercer una fuerza sobre otra carga.

- Cargas del **mismo signo** → se repelen.
- Cargas de **signos diferentes** → se atraen.

```text
(+ )  ←──────→  (+ )     Repulsión

(+ )  ──────→  ←──────  (- )     Atracción
```

Esta interacción es una fuerza a distancia: no es necesario que las cargas estén en contacto.

---

## 3. Carga eléctrica

La **carga eléctrica** es una propiedad física de la materia que determina cómo participa una partícula en las interacciones eléctricas.

Existen dos tipos:

- **Positiva (+)**
- **Negativa (-)**

En el átomo:

- Protón → carga positiva.
- Electrón → carga negativa.
- Neutrón → carga neta cero.

La carga se representa mediante $q$ y su unidad S.I. es el **coulomb**:

$$
[q]=C
$$

La carga elemental tiene magnitud:

$$
e=1.602\times10^{-19}\ C
$$

Por tanto:

$$
q_{\text{electrón}}=-e
$$

$$
q_{\text{protón}}=+e
$$

---

## 4. Propiedades de la carga eléctrica

### 4.1 Atracción y repulsión

$$
\boxed{\text{Cargas iguales}\rightarrow\text{repulsión}}
$$

$$
\boxed{\text{Cargas diferentes}\rightarrow\text{atracción}}
$$

### 4.2 Conservación de la carga

La carga eléctrica total de un sistema aislado se conserva.

La carga puede transferirse entre cuerpos, pero no aparece ni desaparece simplemente.

Si inicialmente:

$$
Q_T=+6\,\mu C
$$

después de una transferencia de carga debe continuar cumpliéndose:

$$
\boxed{Q_{T,\text{final}}=+6\,\mu C}
$$

#### Ejemplo

Un cuerpo A tiene:

$$
q_A=+8\,\mu C
$$

y B:

$$
q_B=-2\,\mu C
$$

Entonces:

$$
Q_T=q_A+q_B
$$

$$
Q_T=8-2=6\,\mu C
$$

Por tanto:

$$
\boxed{Q_T=6\,\mu C}
$$

### 4.3 Cuantización

La carga eléctrica aparece en múltiplos enteros de la carga elemental:

$$
\boxed{q=ne}
$$

donde $n$ es un número entero.

#### Ejemplo

Si un cuerpo tiene un exceso de:

$$
n=5\times10^{12}
$$

electrones:

$$
q=-ne
$$

$$
q=-(5\times10^{12})(1.602\times10^{-19})
$$

$$
\boxed{q=-8.01\times10^{-7}\ C=-0.801\,\mu C}
$$

---

## 5. Formas de electrización

Los tres métodos principales son:

1. Frotación.
2. Conducción.
3. Inducción.

### 5.1 Por frotación

Al frotar dos materiales diferentes, algunos electrones pueden transferirse de uno al otro.

```text
Antes:

A: neutro       B: neutro

Después:

A: negativo     B: positivo
     ← electrones transferidos
```

No se crean cargas nuevas; existe transferencia de electrones.

#### Ejemplo

Inicialmente:

$$
Q_A=0,\qquad Q_B=0
$$

Después del frotamiento:

$$
Q_A=-5\,\mu C
$$

Por conservación:

$$
Q_B=+5\,\mu C
$$

porque:

$$
Q_T=(-5)+(5)=0
$$

---

### 5.2 Por conducción

La conducción ocurre cuando un cuerpo cargado entra en contacto con otro cuerpo conductor.

#### Ejemplo

Una esfera A tiene:

$$
q_A=+10\,\mu C
$$

y una esfera B:

$$
q_B=0
$$

Si son esferas conductoras idénticas y se ponen en contacto:

$$
Q_T=10\,\mu C
$$

Como son idénticas:

$$
q_A=q_B=\frac{10}{2}=5\,\mu C
$$

Resultado:

$$
\boxed{q_A=q_B=+5\,\mu C}
$$

**Idea clave:** en la conducción existe contacto físico.

---

### 5.3 Por inducción

La inducción permite electrizar un conductor **sin tocarlo** directamente con el cuerpo cargado.

Proceso:

1. Se acerca un cuerpo cargado.
2. Las cargas del conductor se redistribuyen.
3. Se conecta el conductor a tierra.
4. Se desconecta la tierra.
5. Se retira el cuerpo cargado.
6. El conductor queda cargado.

```text
Carga negativa cercana:

(- - -)       conductor
             + + + | - - -

               ↓
             tierra
               ↓

       redistribución de carga
```

**Idea clave:**

$$
\boxed{\text{En la inducción no hay contacto directo}}
$$

---

## 6. El electroscopio

El **electroscopio** es un dispositivo utilizado para detectar la presencia de carga eléctrica.

Un electroscopio clásico posee:

- una esfera o terminal metálico;
- una varilla conductora;
- dos láminas metálicas.

Cuando está descargado, las láminas permanecen próximas.

Cuando adquiere carga, ambas láminas adquieren cargas del mismo signo y se repelen:

```text
Sin carga:          Con carga:

    O                   O
    |                   |
    |                  / \
    |                 /   \
    |                /     \
```

### Ejemplo conceptual

Si se lleva una carga negativa al terminal, los electrones se redistribuyen dentro del conductor. Las láminas terminan con cargas del mismo signo y:

$$
\boxed{\text{las láminas se separan}}
$$

El electroscopio demuestra que existe carga eléctrica y puede ayudar a determinar su signo si se dispone de una carga de referencia conocida.

---

## 7. Concepto de tierra

En electrostática, la **tierra** puede considerarse un enorme reservorio de carga eléctrica.

Debido a su enorme tamaño, puede recibir o suministrar electrones sin que su potencial cambie apreciablemente.

Cuando un conductor se conecta a tierra, los electrones pueden:

- salir del conductor hacia tierra;
- entrar desde tierra al conductor.

Depende de la situación eléctrica.

### Ejemplo

Si un conductor tiene exceso de electrones:

$$
\text{Conductor }(-)
$$

al conectarlo a tierra, algunos electrones pueden desplazarse:

$$
\text{Conductor}\rightarrow\text{Tierra}
$$

y el conductor puede quedar neutro.

> **Importante:** "tierra" no significa necesariamente que el objeto deba estar enterrado. En electricidad puede representar un referente de potencial y/o un gran reservorio de carga.

---

## 8. Conductores y aislantes

### Conductores

Son materiales en los que las cargas eléctricas pueden desplazarse con relativa facilidad.

Ejemplos:

- cobre;
- aluminio;
- plata;
- hierro;
- otros metales.

En equilibrio electrostático, el exceso de carga de un conductor se distribuye sobre su superficie.

### Aislantes

Son materiales en los que las cargas no pueden desplazarse libremente por todo el material.

Ejemplos:

- plástico;
- vidrio;
- goma;
- cerámica seca;
- madera seca.

| Característica | Conductor | Aislante |
|---|---|---|
| Movimiento de electrones | Fácil | Difícil |
| Redistribución de carga | Fácil | Limitada |
| Ejemplo | Cobre | Plástico |

---

# 9. Ley de Coulomb

La Ley de Coulomb determina la magnitud de la fuerza eléctrica entre dos cargas puntuales:

$$
\boxed{
F=k\frac{|q_1q_2|}{r^2}
}
$$

donde:

- $F$ = magnitud de la fuerza eléctrica.
- $q_1,q_2$ = cargas.
- $r$ = distancia entre las cargas.
- $k$ = constante de Coulomb.

En el vacío:

$$
\boxed{
k\approx8.99\times10^9\frac{N\,m^2}{C^2}
}
$$

También:

$$
\boxed{
k=\frac{1}{4\pi\varepsilon_0}
}
$$

con:

$$
\varepsilon_0=8.854\times10^{-12}\frac{C^2}{N\,m^2}
$$

### Interpretación

La fuerza:

- aumenta si aumentan las cargas;
- disminuye con el cuadrado de la distancia.

Si:

$$
r\rightarrow2r
$$

entonces:

$$
F\rightarrow\frac{F}{4}
$$

Por tanto:

$$
\boxed{\text{duplicar la distancia reduce la fuerza a la cuarta parte}}
$$

### Ejemplo

Sean:

$$
q_1=2\,\mu C,\qquad q_2=-3\,\mu C
$$

$$
r=0.50\,m
$$

#### Paso 1: convertir unidades

$$
q_1=2\times10^{-6}C
$$

$$
q_2=-3\times10^{-6}C
$$

#### Paso 2: aplicar Coulomb

$$
F=(8.99\times10^9)
\frac{(2\times10^{-6})(3\times10^{-6})}{(0.50)^2}
$$

#### Paso 3: resultado

$$
\boxed{F\approx0.216\,N}
$$

Como las cargas tienen signos diferentes:

$$
\boxed{\text{la fuerza es atractiva}}
$$

---

# 10. Unidades en el Sistema Internacional (S.I.)

| Magnitud | Símbolo | Unidad S.I. |
|---|---:|---|
| Carga | $q$ | Coulomb (C) |
| Fuerza | $F$ | Newton (N) |
| Distancia | $r$ | Metro (m) |
| Constante de Coulomb | $k$ | $N\,m^2/C^2$ |
| Permitividad del vacío | $\varepsilon_0$ | $C^2/(N\,m^2)$ |

Prefijos frecuentes:

$$
1\,\mu C=10^{-6}C
$$

$$
1\,nC=10^{-9}C
$$

$$
1\,pC=10^{-12}C
$$

### Ejemplo

Si:

$$
q=5\,\mu C
$$

entonces:

$$
\boxed{q=5\times10^{-6}C}
$$

---

# 11. Alcance de la Ley de Coulomb

La Ley de Coulomb se aplica directamente a **cargas puntuales** o a cuerpos cuya distribución de carga pueda aproximarse como puntual.

La expresión:

$$
F=k\frac{|q_1q_2|}{r^2}
$$

describe la interacción electrostática en el caso ideal de cargas en reposo.

### Aproximación de carga puntual

Un objeto puede tratarse como carga puntual cuando sus dimensiones son pequeñas comparadas con las distancias relevantes.

Por ejemplo, una esfera de radio:

$$
R=1\,cm
$$

observada desde:

$$
r=2\,m
$$

puede aproximarse como una carga puntual en determinadas situaciones.

Si, en cambio:

$$
r \approx R
$$

la distribución real de carga puede ser importante.

---

# 12. Balanza de torsión de Coulomb y Cavendish

### Aclaración histórica

La balanza de torsión utilizada para estudiar experimentalmente la fuerza electrostática fue desarrollada por **Charles-Augustin de Coulomb**.

**Henry Cavendish** también utilizó una balanza de torsión, pero en experimentos relacionados con la gravitación y la determinación de la constante gravitacional $G$.

Por ello, para la Ley de Coulomb, el nombre correcto es:

$$
\boxed{\text{Balanza de torsión de Coulomb}}
$$

## Funcionamiento

Una pequeña esfera cargada está unida a una varilla suspendida mediante un hilo.

Cuando otra carga ejerce una fuerza eléctrica sobre ella, la varilla gira.

El hilo se opone mediante un momento de torsión.

En equilibrio:

$$
\boxed{
\tau_{\text{eléctrico}}
=
\tau_{\text{torsión}}
}
$$

La torsión del hilo puede expresarse como:

$$
\tau=-\kappa\theta
$$

donde:

- $\tau$ = momento de torsión;
- $\kappa$ = constante de torsión;
- $\theta$ = ángulo de giro.

Además:

$$
\tau=Fr
$$

De esta forma se puede relacionar el giro con la fuerza eléctrica.

El experimento permitió comprobar que:

$$
F\propto q_1q_2
$$

y:

$$
F\propto\frac{1}{r^2}
$$

por lo que:

$$
\boxed{
F\propto\frac{q_1q_2}{r^2}
}
$$

---

# 13. Principio de superposición de fuerzas

Cuando hay varias cargas, cada una ejerce una fuerza sobre la carga que estamos analizando.

La fuerza total es la **suma vectorial** de todas las fuerzas:

$$
\boxed{
\vec F_{\text{total}}
=
\vec F_1+\vec F_2+\vec F_3+\cdots
}
$$

o:

$$
\boxed{
\vec F_{\text{total}}
=
\sum_i\vec F_i
}
$$

La suma es vectorial, por lo que debemos considerar:

- magnitud;
- dirección;
- sentido.

### Ejemplo conceptual

Si sobre una carga actúan dos fuerzas en la misma dirección:

$$
F_1=4\,N
$$

$$
F_2=3\,N
$$

entonces:

$$
F_T=F_1+F_2
$$

$$
\boxed{F_T=7\,N}
$$

Si actúan en sentidos opuestos:

$$
F_T=F_1-F_2
$$

$$
F_T=4-3
$$

$$
\boxed{F_T=1\,N}
$$

---

# 14. Ley de Coulomb para distribuciones discretas

Una distribución **discreta** contiene un número finito de cargas:

$$
q_1,q_2,q_3,\ldots,q_n
$$

La fuerza total sobre una carga $q$ es:

$$
\boxed{
\vec F=
\sum_{i=1}^{n}\vec F_i
}
$$

Cada fuerza puede calcularse mediante:

$$
\vec F_i=
k\frac{q q_i}{r_i^2}\hat r_i
$$

donde $\hat r_i$ indica la dirección.

### Ejemplo

Si una carga $q$ está sometida a tres cargas:

$$
q_1,\quad q_2,\quad q_3
$$

calculamos:

$$
\vec F_1=
k\frac{q q_1}{r_1^2}\hat r_1
$$

$$
\vec F_2=
k\frac{q q_2}{r_2^2}\hat r_2
$$

$$
\vec F_3=
k\frac{q q_3}{r_3^2}\hat r_3
$$

y finalmente:

$$
\boxed{
\vec F_T=\vec F_1+\vec F_2+\vec F_3
}
$$

En dos dimensiones:

$$
F_{Tx}=F_{1x}+F_{2x}+F_{3x}
$$

$$
F_{Ty}=F_{1y}+F_{2y}+F_{3y}
$$

La magnitud:

$$
\boxed{
F_T=\sqrt{F_{Tx}^2+F_{Ty}^2}
}
$$

y la dirección:

$$
\boxed{
\theta=
\tan^{-1}
\left(
\frac{F_{Ty}}{F_{Tx}}
\right)
}
$$

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
