---
title: C01_Logica

---

## Lógica y lógica proposicional

- Lógica:
	Es la parte de la filosofía y las matemáticas que estudia cómo razonar correctamente. Básicamente, te enseña a distinguir cuándo un argumento tiene sentido y cuando no.

- Lógica proposicional:
	Es una rama de la lógica que trabaja con **proposiciones** (oraciones que pueden ser verdaderas o falsas) y las conecta usando operadores.

---

## Proposiciones y conectivos lógicos

- Proposiciones lógicas:
	- Afirma algo acerca de un sujeto
	- Tiene o puede asignársele un valor de verdad esto es, puede ser verdadero (V) o falso (F), uno y solo uno de ellos.
- Conectivos lógicos:
	que unen dos o mas proposiciones, formando así una nueva proposición lógica.

> [!info] Conceptos adicionales
> **Proposición simple**
> - Proposiciones sin ningún tipo de conectivos lógicos.
> 
> **Proposiciones compuestas**
> -Proposiciones con uno o mas conectivos lógicos.


---

## tablas de verdad

1. negación $(\lnot)$

| $p$ | $\lnot p$ |
| --- | -------- |
| $V$ | $F$      |
| $V$ | $F$      |
| $F$ | $V$      |
| $F$ | $V$      |

1. conjunción $(\land)$

| $p$ | $q$ | $p \land q$ |
| --- | --- | ----------- |
| $V$ | $V$ | $V$         |
| $V$ | $F$ | $F$         |
| $F$ | $V$ | $F$         |
| $F$ | $F$ | $F$         |

2. disyunción $(\lor)$

| $p$ | $q$ | $p \lor q$ |
| --- | --- | ----------- |
| $V$ | $V$ | $V$         |
| $V$ | $F$ | $V$         |
| $F$ | $V$ | $V$         |
| $F$ | $F$ | $F$         |

2. condicional $(\rightarrow)$

| $p$ | $q$ | $p \rightarrow q$ |
| --- | --- | ----------- |
| $V$ | $V$ | $V$         |
| $V$ | $F$ | $F$         |
| $F$ | $V$ | $V$         |
| $F$ | $F$ | $V$         |

2. bicondicional $(\leftrightarrow)$

| $p$ | $q$ | $p \leftrightarrow q$ |
| --- | --- | --------------------- |
| $V$ | $V$ | $V$                   |
| $V$ | $F$ | $F$                   |
| $F$ | $V$ | $F$                   |
| $F$ | $F$ | $V$                   |

2. disyunción fuerte $(\bigtriangleup)$

| $p$ | $q$ | $p \bigtriangleup q$ |
| --- | --- | ----------- |
| $V$ | $V$ | $F$         |
| $V$ | $F$ | $V$         |
| $F$ | $V$ | $V$         |
| $F$ | $F$ | $F$         |

---

## Algebra proposicional

1. Ley de Morgan

$$
    \begin{align}
		\lnot (p \lor q) &\equiv \lnot p \land \lnot q \\
		\lnot (p \land q) &\equiv \lnot p \lor \lnot q
	\end{align}
$$

2. Ley de absorción

$$
    \begin{align}
		p \lor (p \land q) &\equiv p \\
		p \land (p \lor q) &\equiv p
	\end{align}
$$

3.  Ley de falsa absorción

$$
    \begin{align}
		p \lor (p \land q) &\equiv p \\
		p \land (p \lor q) &\equiv p
	\end{align}
$$

4. Definición de condicional

$$
	p \rightarrow q \equiv \lnot p \lor q
$$

5. Definición de bicondicional

$$
	p \leftrightarrow q \equiv ( p \rightarrow q ) \land ( q \rightarrow p )
$$

4. Doble negación

$$
	\lnot ( \lnot p) \equiv p
$$

4. Definición de disyunción fuerte

$$
	p \bigtriangleup q \equiv \lnot ( p \leftrightarrow q )
$$

5. Distributividad

$$
    \begin{align}
        p \land ( q \lor r ) &\equiv ( p \land q ) \lor ( p \land r ) \\
	    p \lor ( q \land r ) &\equiv ( p \lor q ) \land ( p \lor r )
	\end{align}
$$

6. Conmutatividad

$$
	\begin{align}
		p \land ( q \lor r ) &\equiv ( p \land q ) \lor r \\
		p \lor ( q \land r ) &\equiv ( p \lor q ) \land r
	\end{align}
$$
