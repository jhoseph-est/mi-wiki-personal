---
title: "Documento de ciencia 2"
theme: "moderno"
---

# Probando el TOC

Este es un texto introductorio.

## Sección 1
El menú de arriba (En este documento) debería detectar este subtítulo.

## Sección 2
Y este también. Astro extrae los `#` del Markdown de forma nativa.

<svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 2rem auto; background: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">

  <!-- Anillos de fondo -->
  <circle cx="100" cy="100" r="60" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
  <circle cx="100" cy="100" r="80" fill="none" stroke="#8b5cf6" stroke-width="1.5" opacity="0.2"/>
  
  <!-- Núcleo central pulsante (Usa <animate> para cambiar el radio) -->
  <circle cx="100" cy="100" r="15" fill="#3b82f6">
    <animate attributeName="r" values="13; 17; 13" dur="1.5s" repeatCount="indefinite" />
  </circle>
  
  <!-- Electrón 1: Órbita normal (Usa <animateTransform> para rotar) -->
  <g>
    <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="4s" repeatCount="indefinite" />
    <circle cx="100" cy="40" r="6" fill="#60a5fa" />
  </g>

  <!-- Electrón 2: Órbita inversa (Rota al revés) -->
  <g>
    <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="7s" repeatCount="indefinite" />
    <circle cx="100" cy="20" r="4" fill="#a78bfa" />
  </g>

</svg>





<div style="overflow-x: auto; margin: 2rem 0;">
  <table style="width: 100%; border-collapse: collapse; text-align: center;">
    <thead>
      <tr style="background-color: rgba(0,0,0,0.05);">
        <th style="border: 1px solid var(--border-color); padding: 12px;" rowspan="2">Área del Proyecto</th>
        <th style="border: 1px solid var(--border-color); padding: 12px;" colspan="3">Métricas de Rendimiento 2026</th>
      </tr>
      <tr style="background-color: rgba(0,0,0,0.02);">
        <th style="border: 1px solid var(--border-color); padding: 12px;">Trimestre 1</th>
        <th style="border: 1px solid var(--border-color); padding: 12px;">Trimestre 2</th>
        <th style="border: 1px solid var(--border-color); padding: 12px;">Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid var(--border-color); padding: 12px; font-weight: bold; text-align: left;">Desarrollo Backend</td>
        <td style="border: 1px solid var(--border-color); padding: 12px;">85%</td>
        <td style="border: 1px solid var(--border-color); padding: 12px;">95%</td>
        <td style="border: 1px solid var(--border-color); padding: 12px; color: #10b981; font-weight: bold;">+10% ↗</td>
      </tr>
      <tr>
        <td style="border: 1px solid var(--border-color); padding: 12px; font-weight: bold; text-align: left;">Diseño UI/UX</td>
        <td style="border: 1px solid var(--border-color); padding: 12px;">78%</td>
        <td style="border: 1px solid var(--border-color); padding: 12px;">75%</td>
        <td style="border: 1px solid var(--border-color); padding: 12px; color: #ef4444; font-weight: bold;">-3% ↘</td>
      </tr>
    </tbody>
  </table>
</div>