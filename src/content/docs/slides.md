---
title: "Presentación Avanzada"
slides: true
date: 2026-09-05
author: "Admin"
---

<!-- .slide: data-background-color="#1e1e2f" -->
# Presentaciones Multidireccionales
Presiona la **Flecha Abajo** para descender en esta misma sección.

--

<!-- .slide: data-background-gradient="radial-gradient(#283c86, #45a247)" -->
## Diapositiva Vertical 1
¡Acabas de bajar! 
Las diapositivas verticales son geniales para profundizar en un tema sin romper el flujo principal (horizontal).

--

<!-- .slide: data-background-image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853" data-background-opacity="0.3" -->
## Diapositiva Vertical 2: Fondos
Aquí hemos usado una imagen de fondo obtenida de internet con un 30% de opacidad para no tapar el texto.

[Visita la documentación de Reveal.js](https://revealjs.com/) para más trucos.

---

<!-- .slide: data-background-color="#0f172a" -->
## Código con Scroll y Animación
Si el código es muy largo, automáticamente tendrá un _scroll_. Presiona la **Flecha Derecha** para ver cómo se iluminan las líneas:

```javascript [1-2|4-6|8-11|13]
// Inicialización
const sistema = new SistemaCentral();

// Configuración de puertos
sistema.puertos.abrir(8080);
sistema.puertos.abrir(443);

// Este bucle es muy largo y generará scroll 
// si tu pantalla es pequeña
for(let i = 0; i < 15; i++) {
    sistema.conectarDispositivo(`ESP32_NODO_${i}`);
}

for(let i = 0; i < 15; i++) {
    sistema.conectarDispositivo(`ESP32_NODO_${i}`);
}

console.log("¡Todo conectado y funcionando!");
```

---

## Modificadores de Elementos
Puedes aplicar efectos a casi cualquier cosa:

<p class="fragment grow">Este texto crecerá al avanzar.</p>
<p class="fragment shrink">Este texto se encogerá.</p>
<p class="fragment strike">Este texto se tachará.</p>

---

# FIN
Presiona **ESC** para ver el mapa de diapositivas en 2D (arriba, abajo, izquierda, derecha).