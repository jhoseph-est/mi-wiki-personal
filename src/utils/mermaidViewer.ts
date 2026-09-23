import mermaid, { type MermaidConfig } from 'mermaid';

function getMermaidConfig(): MermaidConfig {
  const isDark = document.documentElement.getAttribute('data-modo') === 'oscuro';
  return {
    startOnLoad: false,
    look: 'classic',
    theme: isDark ? 'dark' : 'default',
    themeVariables: {
      background: 'transparent',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: '14px',
      primaryColor: isDark ? '#1e293b' : '#f1f5f9',
      primaryTextColor: isDark ? '#f8fafc' : '#0f172a',
      primaryBorderColor: isDark ? '#38bdf8' : '#6366f1',
      lineColor: isDark ? '#94a3b8' : '#64748b',
      textColor: isDark ? '#f8fafc' : '#0f172a',
      actorTextColor: isDark ? '#f8fafc' : '#0f172a',
      actorLineColor: isDark ? '#38bdf8' : '#6366f1',
      signalColor: isDark ? '#f8fafc' : '#0f172a',
      signalTextColor: isDark ? '#f8fafc' : '#0f172a',
      labelBoxBkgColor: isDark ? '#1e293b' : '#f8fafc',
      labelBoxBorderColor: isDark ? '#38bdf8' : '#6366f1',
      labelTextColor: isDark ? '#f8fafc' : '#0f172a',
      loopTextColor: isDark ? '#f8fafc' : '#0f172a',
      noteBorderColor: isDark ? '#f59e0b' : '#d97706',
      noteBkgColor: isDark ? '#78350f' : '#fef3c7',
      noteTextColor: isDark ? '#fef3c7' : '#78350f',
      taskBorderColor: isDark ? '#38bdf8' : '#6366f1',
      taskBkgColor: isDark ? '#1e293b' : '#e2e8f0',
      taskTextColor: isDark ? '#f8fafc' : '#0f172a',
      taskTextOutsideColor: isDark ? '#f8fafc' : '#0f172a',
      activeTaskBorderColor: isDark ? '#818cf8' : '#4f46e5',
      activeTaskBkgColor: isDark ? '#312e81' : '#c7d2fe',
      gridColor: isDark ? '#334155' : '#cbd5e1',
      sectionBkgColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
      altSectionBkgColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
    },
    flowchart: {
      htmlLabels: true,
      padding: 10,
      nodeSpacing: 35,
      rankSpacing: 35,
      curve: 'linear'
    },
    gantt: {
      useWidth: 1500,
      useMaxWidth: false,
      leftPadding: 160,
      barHeight: 28,
      barGap: 8,
      topPadding: 50,
      titleTopMargin: 25,
      gridLineStartPadding: 35,
      fontSize: 12,
      sectionFontSize: 14,
      numberSectionStyles: 4,
      axisFormat: '%d/%m'
    }
  };
}

function buildWrapperStructure(innerContent: string): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mermaid-wrapper';
  wrapper.innerHTML = `
    <div class="mermaid-toolbar">
      <button class="mermaid-tool-btn btn-zoom-in" title="Acercar">+</button>
      <button class="mermaid-tool-btn btn-zoom-out" title="Alejar">-</button>
      <button class="mermaid-tool-btn btn-zoom-reset" title="Restablecer">1:1</button>
      <button class="mermaid-tool-btn btn-fullscreen-diagram" title="Ver en Pantalla Completa">⛶</button>
      <button class="mermaid-tool-btn btn-download-svg" title="Descargar como SVG">SVG</button>
      <button class="mermaid-tool-btn btn-copy-code" title="Copiar sintaxis fuente">Copiar</button>
    </div>
    <div class="mermaid-viewport">${innerContent}</div>
  `;
  return wrapper;
}

function attachMermaidControls(wrapper: HTMLElement, code: string) {
  const svg = wrapper.querySelector('svg') as SVGElement | null;
  const viewport = wrapper.querySelector('.mermaid-viewport') as HTMLElement | null;
  if (viewport) {
    viewport.addEventListener('wheel', (e) => {
      e.stopPropagation();
      if (viewport.scrollHeight <= viewport.clientHeight && viewport.scrollWidth <= viewport.clientWidth) {
        e.preventDefault();
      }
    }, { passive: false });
    viewport.addEventListener('touchmove', (e) => {
      e.stopPropagation();
    }, { passive: true });
  }
  if (!svg || !viewport) return;

  let currentScale = 1;
  const scaleStep = 0.15;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;

  function updateTransform() {
    if (!svg) return;
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentScale})`;
  }

  wrapper.querySelector('.btn-zoom-in')?.addEventListener('click', () => {
    currentScale = Math.min(currentScale + scaleStep, 3);
    updateTransform();
  });

  wrapper.querySelector('.btn-zoom-out')?.addEventListener('click', () => {
    currentScale = Math.max(currentScale - scaleStep, 0.4);
    updateTransform();
  });

  wrapper.querySelector('.btn-zoom-reset')?.addEventListener('click', () => {
    currentScale = 1;
    translateX = 0;
    translateY = 0;
    if (svg) svg.style.transform = 'none';
  });

  viewport.addEventListener('mousedown', (e) => {
    if (currentScale === 1 && !wrapper.classList.contains('has-custom-width') && !wrapper.classList.contains('is-gantt')) return;
    isDragging = true;
    viewport.style.cursor = 'grabbing';
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
  });

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    updateTransform();
  };

  const onMouseUp = () => {
    isDragging = false;
    if (viewport) viewport.style.cursor = 'default';
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  wrapper.querySelector('.btn-copy-code')?.addEventListener('click', async (e) => {
    const btn = e.currentTarget as HTMLElement;
    await navigator.clipboard.writeText(code);
    const prevText = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => (btn.textContent = prevText), 1500);
  });

  wrapper.querySelector('.btn-download-svg')?.addEventListener('click', () => {
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `diagrama-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Integración limpia con el modal global unificado
  wrapper.querySelector('.btn-fullscreen-diagram')?.addEventListener('click', () => {
    const clonedSvg = svg.cloneNode(true) as SVGElement;
    
    clonedSvg.style.transform = 'none';
    clonedSvg.removeAttribute('width');
    clonedSvg.removeAttribute('height');
    clonedSvg.style.removeProperty('width');
    clonedSvg.style.removeProperty('height');
    clonedSvg.style.removeProperty('max-width');
    clonedSvg.style.removeProperty('min-width');

    const diagramLayout = wrapper.dataset.layout || 'fit';

    const modalBodyContainer = document.createElement('div');
    modalBodyContainer.className = `mermaid-modal-body modal-layout-${diagramLayout}`;
    modalBodyContainer.appendChild(clonedSvg);

    window.dispatchEvent(new CustomEvent('open-global-modal', {
      detail: {
        title: 'Diagrama de Mermaid',
        subtitle: 'Vista ampliada del flujo de trabajo',
        contentHTML: modalBodyContainer
      }
    }));
  });
}

export async function renderMermaid(forceReRender = false) {
  const codeBlocks = Array.from(
    document.querySelectorAll('pre[data-language="mermaid"], pre:has(code.language-mermaid)')
  );

  codeBlocks.forEach((preNode) => {
    const pre = preNode as HTMLElement;
    if (pre.dataset.mermaidRegistered === 'true') return;

    const codeEl = pre.querySelector('code');
    const rawCode = (codeEl?.textContent || pre.textContent || '').trim();
    if (!rawCode) return;

    const container = document.createElement('div');
    container.className = 'mermaid-native';
    container.dataset.sourceCode = rawCode;

    pre.after(container);
    pre.style.display = 'none';
    pre.dataset.mermaidRegistered = 'true';
  });

  mermaid.initialize(getMermaidConfig());

  const containers = Array.from(document.querySelectorAll<HTMLElement>('.mermaid-native, .mermaid-wrapper'));
  
  interface NodeItem {
    el: HTMLElement;
    layout: 'fit' | 'pan-x' | 'pan-y';
    width: string | null;
    maxWidth: string | null;
    height: string | null;
    rawCode: string;
  }
  const standardNodes: NodeItem[] = [];

  for (const [index, item] of containers.entries()) {
    const code = item.dataset.sourceCode;
    if (!code) continue;

    if (item.dataset.renderedMode && !forceReRender) continue;

    const layoutMatch = code.match(/%%layout:\s*(fit|pan-x|pan-y)\s*%%/i);
    const widthMatch = code.match(/%%width:\s*(\d+(?:px|%)?)\s*%%/i);
    const maxWidthMatch = code.match(/%%max-width:\s*(\d+(?:px|%)?)\s*%%/i);
    const heightMatch = code.match(/%%height:\s*(\d+(?:px|%)?)\s*%%/i);

    const parseUnit = (val: string | null) => {
      if (!val) return null;
      return val.endsWith('%') || val.endsWith('px') ? val : `${val}px`;
    };

    const parsedLayout = (layoutMatch ? layoutMatch[1].toLowerCase() : 'fit') as 'fit' | 'pan-x' | 'pan-y';
    const parsedWidth = parseUnit(widthMatch ? widthMatch[1] : null);
    const parsedMaxWidth = parseUnit(maxWidthMatch ? maxWidthMatch[1] : null);
    const parsedHeight = parseUnit(heightMatch ? heightMatch[1] : null);

    const cleanCode = code
      .replace(/%%layout:.*?%%/gi, '')
      .replace(/%%width:.*?%%/gi, '')
      .replace(/%%max-width:.*?%%/gi, '')
      .replace(/%%height:.*?%%/gi, '')
      .trim();

    const isGantt = cleanCode.replace(/%%[\s\S]*?%%/g, '').trim().startsWith('gantt');

    if (isGantt) {
      const numericWidth = widthMatch ? parseInt(widthMatch[1], 10) : 1200;
      const ganttCode = `%%{init: { 'gantt': { 'useWidth': ${numericWidth} } } }%%\n` + cleanCode;
      const renderId = `mermaid-gantt-${Date.now()}-${index}`;

      try {
        const { svg } = await mermaid.render(renderId, ganttCode);
        const wrapper = buildWrapperStructure(svg);
        wrapper.classList.add('is-gantt');
        wrapper.dataset.sourceCode = code;
        wrapper.dataset.layout = parsedLayout;

        const svgEl = wrapper.querySelector('svg') as SVGElement | null;
        if (svgEl) {
          if (parsedWidth) svgEl.style.setProperty('width', parsedWidth, 'important');
          if (parsedMaxWidth) svgEl.style.setProperty('max-width', parsedMaxWidth, 'important');
        }

        item.replaceWith(wrapper);
        attachMermaidControls(wrapper, code);
        wrapper.dataset.renderedMode = document.documentElement.getAttribute('data-modo') || 'oscuro';
      } catch (err) {
        console.error('Error renderizando Gantt:', err);
      }
    } else {
      const tempDiv = document.createElement('div');
      tempDiv.className = 'mermaid-native';
      tempDiv.textContent = cleanCode;
      tempDiv.dataset.sourceCode = code;

      item.replaceWith(tempDiv);
      standardNodes.push({ 
        el: tempDiv, 
        layout: parsedLayout, 
        width: parsedWidth, 
        maxWidth: parsedMaxWidth, 
        height: parsedHeight, 
        rawCode: code 
      });
    }
  }

  if (standardNodes.length > 0) {
    try {
      await mermaid.run({ nodes: standardNodes.map((n) => n.el) });
      const currentMode = document.documentElement.getAttribute('data-modo') || 'oscuro';

      standardNodes.forEach(({ el, layout, width, maxWidth, height, rawCode }) => {
        const svgEl = el.querySelector('svg') as SVGElement | null;
        
        if (svgEl) {
          if (width) svgEl.style.setProperty('width', width, 'important');
          if (maxWidth) svgEl.style.setProperty('max-width', maxWidth, 'important');
          if (height) svgEl.style.setProperty('max-height', height, 'important');
        }

        const wrapper = buildWrapperStructure(svgEl ? svgEl.outerHTML : '');
        wrapper.dataset.sourceCode = rawCode;
        wrapper.dataset.layout = layout;

        if (width || maxWidth || height) {
          wrapper.classList.add('has-custom-width');
        }

        el.replaceWith(wrapper);
        attachMermaidControls(wrapper, rawCode);
        wrapper.dataset.renderedMode = currentMode;
      });
    } catch (error) {
      console.error('Error en mermaid.run():', error);
    }
  }
}