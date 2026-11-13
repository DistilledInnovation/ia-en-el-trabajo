/* Gestión de la innovación con IA · Distilled Innovation — lógica del curso */
(function () {
  const GH = 'https://github.com/abondainer/di-innovacion-ia';
  const ghUrl = p => !p ? GH : (p.endsWith('.md') || p.includes('.') ? `${GH}/blob/main/${p}` : `${GH}/tree/main/${p}`);
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const P = window.DI_PROMPTS || {};
  const I = (n, c = '') => `<i data-lucide="${n}" class="li${c ? ' ' + c : ''}"></i>`;
  const icons = () => window.lucide && window.lucide.createIcons();
  window.DI_ICONS = icons;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const store = { get: (k, d) => { try { return JSON.parse(localStorage.getItem('di.' + k)) ?? d; } catch { return d; } }, set: (k, v) => localStorage.setItem('di.' + k, JSON.stringify(v)) };

  /* ---------- Loop data (shared with scenes.js) ---------- */
  window.DI_STAGES = [
    { k: 'explorar', n: 1, t: 'Explorar', q: '¿Qué está cambiando a nuestro alrededor?', c: '#00FFCC', hex: 0x00FFCC, m: 'm3', out: 'Señales verificadas en un radar' },
    { k: 'enfocar', n: 2, t: 'Enfocar', q: '¿Qué reto vale la pena resolver?', c: '#469DE6', hex: 0x469DE6, m: 'm4', out: 'Un reto encuadrado' },
    { k: 'crear', n: 3, t: 'Crear', q: '¿Qué respuesta podemos diseñar?', c: '#FECB28', hex: 0xFECB28, m: 'm5', out: 'Un concepto con supuestos' },
    { k: 'validar', n: 4, t: 'Validar y decidir', q: '¿Qué aprendimos y qué hacemos ahora?', c: '#BCF8FF', hex: 0xBCF8FF, m: 'm6', out: 'Evidencia y una decisión' }
  ];
  window.DI_LOOP = [
    { n: '0', e: 'explorar', t: 'Contexto', d: 'Ficha de contexto y lectura de cómo creas, entregas y capturas valor.', a: 'Ficha de contexto', m: 'm2', s: 'di-ficha-contexto' },
    { n: '1', e: 'explorar', t: 'Zoom Out', d: 'Mapa de las cuatro fuerzas exógenas con hallazgos verificados.', a: 'Mapa de fuerzas', m: 'm3', s: 'di-zoom-out' },
    { n: '2', e: 'explorar', t: 'Radar', d: 'Señales ubicadas por certeza × tiempo; la más crítica y menos observada.', a: 'Radar de señales', m: 'm3', s: 'di-zoom-out' },
    { n: '3', e: 'enfocar', t: 'Clasificar', d: 'Hallazgos traducidos en oportunidades, necesidades y problemas.', a: 'Lista O/N/P', m: 'm4', s: 'di-retos' },
    { n: '4', e: 'enfocar', t: 'Priorizar', d: 'Portafolio en H1 · H2 · H3 y una oportunidad elegida.', a: 'Portafolio por horizontes', m: 'm4', s: 'di-retos' },
    { n: '5', e: 'enfocar', t: 'Encuadrar', d: 'Reto definido con el Scoping Canvas y su "¿Cómo podríamos…?".', a: 'Scoping Canvas', m: 'm4', s: 'di-retos' },
    { n: '6', e: 'crear', t: 'Idear', d: 'Ideas del equipo ampliadas con IA y ubicadas en viabilidad × factibilidad.', a: 'Matriz de ideas', m: 'm5', s: 'di-ideacion-concepto' },
    { n: '7', e: 'crear', t: 'Concepto', d: 'Ideas ganadoras combinadas en un concepto fuerte con supuestos críticos.', a: 'Ficha de concepto', m: 'm5', s: 'di-ideacion-concepto' },
    { n: '8', e: 'validar', t: 'Prototipar', d: 'Supuesto asesino y el prototipo más simple, construido con IA.', a: 'Prototipo', m: 'm6', s: 'di-experimentos' },
    { n: '9', e: 'validar', t: 'Probar', d: 'Test Card antes de probar y Learning Card después.', a: 'Test y Learning Card', m: 'm6', s: 'di-experimentos' },
    { n: '10', e: 'validar', t: 'Decidir', d: 'Hoja de ruta 3 · 6 · 12 meses y revisión mensual del portafolio.', a: 'Hoja de ruta', m: 'm7', s: 'di-hoja-de-ruta' }
  ];

  const SKILLS = {
    'di-innovation-loop': ['repeat', 'Orquesta el Distilled AI Innovation Loop completo: diagnostica en qué paso está el equipo, ejecuta el método y define el siguiente artefacto.'],
    'di-ficha-contexto': ['clipboard-list', 'Entrevista corta que produce la ficha de contexto y la lectura crear · entregar · capturar valor.'],
    'di-exposicion-ia': ['waves', 'Evalúa cómo la IA transforma tu modelo de negocio, mapea tareas humano–IA y ubica tu nivel de madurez.'],
    'di-zoom-out': ['satellite', 'Vigilancia estratégica: cuatro fuerzas exógenas, señales débiles, verificación, radar certeza × tiempo y boletín mensual.'],
    'di-retos': ['target', 'Clasifica en oportunidades, necesidades y problemas, prioriza por horizontes y encuadra con el Scoping Canvas.'],
    'di-ideacion-concepto': ['lightbulb', 'Ideación estructurada, matriz viabilidad × factibilidad y ficha de concepto de 9 campos.'],
    'di-experimentos': ['flask-conical', 'Supuesto asesino, prototipo más simple con IA, tres experimentos, Test Card y Learning Card.'],
    'di-hoja-de-ruta': ['map', 'Cuatro niveles × tres horizontes, máximo tres iniciativas activas, hoja de ruta 3·6·12 y revisión mensual.']
  };

  /* ---------- Toast ---------- */
  const toast = msg => { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2200); };
  const copy = async txt => { try { await navigator.clipboard.writeText(txt); } catch { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); } };

  /* ---------- Ficha de contexto ---------- */
  const FICHA_TPL = `FICHA DE CONTEXTO
Empresa: [nombre o descripción anonimizada]
Sector y subsector:
Geografía:
Clientes principales:
Propuesta de valor actual:
Prioridades estratégicas (3):
Retos o dolores actuales:
Capacidades distintivas:
Restricciones:
Recursos para innovar:
No compartir con la IA:

CÓMO CREAMOS, ENTREGAMOS Y CAPTURAMOS VALOR
Crear:
Entregar:
Capturar:`;
  const ficha = () => store.get('ficha', '');
  const withFicha = txt => {
    const f = ficha().trim();
    if (!f) return txt;
    return txt.replace(/\[PEGA AQUÍ TU FICHA DE CONTEXTO\]|\[PEGA LA FICHA DE CONTEXTO\]/g, f);
  };
  const sb = $('.sidebar'), mb = $('#menu-btn');
  const closeMenu = () => { sb.classList.remove('open'); document.body.classList.remove('menu-open'); mb.setAttribute('aria-expanded', 'false'); };
  mb.onclick = () => { const o = !sb.classList.contains('open'); sb.classList.toggle('open', o); document.body.classList.toggle('menu-open', o); mb.setAttribute('aria-expanded', String(o)); };
  $('#scrim').onclick = closeMenu;
  addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  const drawer = $('#drawer');
  $$('.ficha-open').forEach(b => b.onclick = () => { $('#ficha-txt').value = ficha(); drawer.classList.add('open'); closeMenu(); });
  $('#drawer-x').onclick = () => drawer.classList.remove('open');
  $('#ficha-save').onclick = () => { store.set('ficha', $('#ficha-txt').value); toast('Ficha guardada en este navegador'); updateFab(); };
  $('#ficha-tpl').onclick = () => { if (!$('#ficha-txt').value.trim()) $('#ficha-txt').value = FICHA_TPL; };
  $('#ficha-del').onclick = () => { store.set('ficha', ''); $('#ficha-txt').value = ''; toast('Ficha borrada'); updateFab(); };
  const updateFab = () => { const on = !!ficha().trim(); $('#ficha-side').classList.toggle('on', on); $('.tb-ficha').classList.toggle('on', on); $('#ficha-side span').textContent = on ? 'Ficha de contexto activa' : 'Mi ficha de contexto'; };
  updateFab();

  /* ---------- Prompt cards ---------- */
  function promptCard(id, openFirst) {
    const p = P[id]; if (!p) return '';
    const kind = p.tipo === 'agente' ? `${I('bot')} Agente` : `${I('message-square')} Prompt`;
    const needsFicha = /FICHA DE CONTEXTO\]/.test(p.texto);
    return `<details class="prompt ${p.tipo}" data-id="${id}" ${openFirst ? 'open' : ''}>
      <summary><span class="chev">${I('chevron-right')}</span><span class="t">${esc(p.titulo)}</span><span class="k">${kind}</span></summary>
      <div class="body">${p.nota ? `<div class="note">${esc(p.nota)}${needsFicha ? ' · <b>Inserta tu ficha automáticamente.</b>' : ''}</div>` : ''}
      <pre>${esc(p.texto)}</pre>
      <div class="acts"><button class="btn blue sm" data-copy="${id}">Copiar ${p.tipo === 'agente' ? 'system prompt' : 'prompt'}</button>
      <a class="btn line sm" href="https://claude.ai/new" target="_blank" rel="noopener">Abrir Claude ↗</a>
      <a class="btn line sm" href="${ghUrl(p.archivo)}" target="_blank" rel="noopener">Ver en GitHub</a><span class="ok">¡Copiado!</span></div></div>
    </details>`;
  }
  $$('.prompts').forEach(el => { el.innerHTML = el.dataset.ids.split(',').map(s => promptCard(s.trim())).join(''); });
  document.addEventListener('click', async e => {
    const b = e.target.closest('[data-copy]'); if (!b) return;
    await copy(withFicha(P[b.dataset.copy].texto));
    const ok = b.parentElement.querySelector('.ok'); ok.classList.add('show'); setTimeout(() => ok.classList.remove('show'), 1600);
    toast(ficha().trim() && /FICHA DE CONTEXTO\]/.test(P[b.dataset.copy].texto) ? 'Copiado con tu ficha de contexto' : 'Copiado al portapapeles');
  });

  /* ---------- Skills ---------- */
  const skillCard = n => { const [ic, d] = SKILLS[n]; return `<div class="skill"><div class="ic">${I(ic)}</div><div><div class="pill m" style="margin-bottom:6px">${I('puzzle')} Skill de Claude</div><h4>${n}</h4><p>${d}</p>
    <div class="acts"><a class="btn yellow sm" href="${ghUrl('skills/' + n + '/SKILL.md')}" target="_blank" rel="noopener">Ver SKILL.md en GitHub</a><a class="btn ghost sm" href="${GH}/tree/main/skills/${n}" target="_blank" rel="noopener">Carpeta</a></div></div></div>`; };
  $$('.skill-slot').forEach(el => el.innerHTML = skillCard(el.dataset.skill));
  $('#skills-all').innerHTML = `<div class="grid g2">${Object.keys(SKILLS).map(skillCard).join('')}</div>`;
  $$('[data-gh]').forEach(a => { a.href = ghUrl(a.dataset.gh); a.target = '_blank'; a.rel = 'noopener'; });

  /* ---------- Toolkit ---------- */
  const MODS = { '00-sistema': 'Sistema', '01-transformacion': 'Transformación', '02-contexto-y-valor': 'Contexto', '03-vigilancia': 'Vigilancia', '04-retos': 'Retos', '05-ideacion-concepto': 'Ideación', '06-prototipo-experimento': 'Experimentos', '07-portafolio-y-sistema': 'Portafolio' };
  let filt = 'all';
  $('#kit-filters').innerHTML = `<button class="on" data-f="all">Todos</button><button data-f="agente">Solo agentes</button>` + Object.entries(MODS).map(([k, v]) => `<button data-f="${k}">${v}</button>`).join('');
  const renderKit = () => {
    const q = $('#kit-search').value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
    const ids = Object.keys(P).filter(id => {
      const p = P[id]; const hay = (p.titulo + ' ' + p.texto + ' ' + id).toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
      return (!q || hay.includes(q)) && (filt === 'all' || p.modulo === filt || p.tipo === filt);
    });
    $('#kit-list').innerHTML = ids.length ? ids.map(id => promptCard(id)).join('') : '<p class="muted">Sin resultados.</p>';
  };
  $('#kit-search').oninput = renderKit;
  $('#kit-filters').onclick = e => { const b = e.target.closest('button'); if (!b) return; filt = b.dataset.f; $$('#kit-filters button').forEach(x => x.classList.toggle('on', x === b)); renderKit(); };
  renderKit();
  $('#nprompts').textContent = Object.keys(P).length;
  const FILES = [
    ['file-spreadsheet', 'Tablero de portafolio (Excel)', 'herramientas/tablero-portafolio-innovacion.xlsx', 'Señales, oportunidades, portafolio, experimentos y tablero', true],
    ['printer', 'Canvas imprimibles (PDF)', 'plantillas/canvas-imprimibles.html', 'Scoping Canvas, radar, matrices, ficha, Test/Learning Card, hoja de ruta', true],
    ['clipboard-list', 'Ficha de contexto', 'plantillas/01-ficha-de-contexto.md'], ['satellite', 'Mapa de fuerzas', 'plantillas/02-mapa-de-fuerzas.md'], ['radar', 'Radar de señales', 'plantillas/03-radar-de-senales.md'],
    ['list-checks', 'Oportunidades, necesidades y problemas', 'plantillas/04-oportunidades-necesidades-problemas.md'], ['target', 'Scoping Canvas', 'plantillas/05-scoping-canvas.md'], ['lightbulb', 'Matriz de ideas', 'plantillas/06-matriz-ideas.md'],
    ['blocks', 'Ficha de concepto', 'plantillas/07-ficha-de-concepto.md'], ['crosshair', 'Mapa de supuestos', 'plantillas/08-mapa-de-supuestos.md'], ['flask-conical', 'Test Card', 'plantillas/09-test-card.md'],
    ['book-open', 'Learning Card', 'plantillas/10-learning-card.md'], ['map', 'Hoja de ruta 3·6·12', 'plantillas/11-hoja-de-ruta.md'], ['mic', 'Pitch de 60 segundos', 'plantillas/12-pitch-60.md']
  ];
  $('#kit-files').innerHTML = FILES.map(([ic, t, p, d, local]) => `<a href="${local ? p : ghUrl(p)}" target="_blank" rel="noopener" ${p.endsWith('.xlsx') ? 'download' : ''}><span class="file-ic">${I(ic)}</span><span>${t}<small>${d || 'Plantilla en Markdown · GitHub'}</small></span></a>`).join('');

  /* ---------- Progress & nav ---------- */
  const done = new Set(store.get('done', []));
  const total = $$('.mark').length;
  const paint = () => {
    $('#pfill').style.width = (done.size / total * 100) + '%';
    $('#ptext').textContent = `${done.size} de ${total} módulos completados`;
    $$('#nav a[data-mod]').forEach(a => a.classList.toggle('done', done.has(a.dataset.mod)));
    $$('.mark').forEach(b => { const d = done.has(b.dataset.mod); b.classList.toggle('done', d); b.textContent = d ? 'Módulo completado ✓' : 'Marcar módulo como completado ✓'; });
  };
  $$('.mark').forEach(b => b.onclick = () => { done.has(b.dataset.mod) ? done.delete(b.dataset.mod) : done.add(b.dataset.mod); store.set('done', [...done]); paint(); if (done.has(b.dataset.mod)) toast('¡Bien! Módulo completado'); });
  paint();
  /* ---------- Loop: 4 etapas ---------- */
  const STG = window.DI_STAGES, LOOP = window.DI_LOOP;
  const stg = k => STG.find(x => x.k === k);
  $('#loop-stages').innerHTML = STG.map(e => `<button class="stg" data-e="${e.k}" style="--c:${e.c}">
    <span class="stg-n">Etapa ${e.n}</span><b>${e.t}</b><span class="stg-q">${e.q}</span>
    <ol>${LOOP.filter(s => s.e === e.k).map(s => `<li><i>${s.n}</i>${s.t}</li>`).join('')}</ol>
    <span class="stg-out">Sale con: ${e.out}</span></button>`).join('');
  $$('#loop-stages .stg').forEach(b => b.onclick = () => { const i = LOOP.findIndex(s => s.e === b.dataset.e); window.DI_LOOP_SHOW && window.DI_LOOP_SHOW(i); $('#stage-loop').scrollIntoView({ behavior: 'smooth', block: 'center' }); });
  window.DI_LOOP_ACTIVE = i => $$('#loop-stages .stg').forEach(b => b.classList.toggle('on', b.dataset.e === LOOP[i].e));

  /* ---------- Casos: análisis del método en la práctica ---------- */
  const CASES = window.DI_CASES || [];
  const GROUPS = [...STG.map(e => ({ k: e.k, t: `Etapa ${e.n} · ${e.t}`, q: e.q, c: e.c, m: e.m })), { k: 'ia', t: 'Capacidad con IA', q: '¿Cómo se instala la IA para que se quede?', c: '#0F3B49', m: 'kit' }];
  const grp = k => GROUPS.find(g => g.k === k);
  const caseCard = (c, withId) => `<article class="case ${c.origen}" ${withId ? `id="caso-${c.id}"` : ''} style="--c:${grp(c.etapa).c}">
    <header><span class="case-orig">${c.origen === 'distilled' ? '<img src="assets/brand/monogram-navy.png" alt="">Distilled Innovation' : 'América Latina · fuente pública'}</span>
    <h4>${esc(c.org)} <small>${esc(c.anio)}</small></h4><span class="case-pasos">${esc(c.pasos)}</span></header>
    <div class="case-b"><h5>${c.origen === 'distilled' ? 'Qué hicimos' : 'Qué hicieron'}</h5><p>${esc(c.hicimos)}</p>
    <h5>Evidencia</h5><ul>${c.evidencia.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
    <div class="case-so"><h5>Qué sustenta del método</h5><p>${esc(c.demuestra)}</p>
    <div class="case-tools">${c.herramientas.map(([t, h]) => `<a href="${h}">${I('arrow-right')}${esc(t)}</a>`).join('')}</div>
    ${c.fuentes ? `<div class="case-src">Fuentes: ${c.fuentes.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener">${esc(t)}</a>`).join(' · ')}</div>` : ''}</div>
  </article>`;
  $('#case-groups').innerHTML = GROUPS.map(g => { const cs = CASES.filter(c => c.etapa === g.k); return cs.length ? `<section class="case-group" style="--c:${g.c}">
    <div class="cg-head"><span class="cg-bar"></span><div><h3>${g.t}</h3><p>${g.q}</p></div></div>
    <div class="grid g2">${cs.map(c => caseCard(c, true)).join('')}</div></section>` : ''; }).join('');
  if ($('#ncasos')) $('#ncasos').textContent = CASES.length;
  $$('.rel-cases').forEach(el => { const cs = el.dataset.cases.split(',').map(id => CASES.find(c => c.id === id)).filter(Boolean); el.innerHTML = `<h3>${I('briefcase', 'h')}${el.dataset.title || 'En la práctica'}</h3><div class="grid g2">${cs.map(c => caseCard(c)).join('')}</div><a class="more" href="#casos">Ver el análisis de casos por etapa →</a>`; });
  if ($('#m8-proof')) $('#m8-proof').innerHTML = `<h3 style="margin-top:44px">Experiencia que respalda el método</h3><div class="grid g3 proof-grid">${['summa', 'argos', 'epm'].map(id => CASES.find(c => c.id === id)).filter(Boolean).map(c => `<a class="proof-card" href="#caso-${c.id}"><b>${esc(c.org)}</b><span>${esc(c.evidencia[0])}</span><small>${esc(c.pasos)}</small></a>`).join('')}</div>`;

  /* ---------- Navegación por secciones ---------- */
  const pages = $$('main > section, main > header');
  const order = $$('#nav a').map(a => a.getAttribute('href').slice(1)).filter(id => document.getElementById(id));
  const label = id => { const a = $(`#nav a[href="#${id}"]`); return a ? a.lastChild.textContent.trim() : id; };
  const shortLabel = label;
  pages.forEach(pg => {
    const i = order.indexOf(pg.id); if (i < 0) return;
    const prev = order[i - 1], next = order[i + 1];
    const nav = document.createElement('nav'); nav.className = 'pager'; nav.setAttribute('aria-label', 'Navegación entre secciones');
    nav.innerHTML = `${prev ? `<a class="pv" href="#${prev}"><small>← Anterior</small><b>${shortLabel(prev)}</b></a>` : '<span></span>'}<span class="pg-n">${i + 1} / ${order.length}</span>${next ? `<a class="nx" href="#${next}"><small>Siguiente →</small><b>${shortLabel(next)}</b></a>` : '<span></span>'}`;
    if (pg.id === 'inicio') return;
    (pg.querySelector('.wrap') || pg).appendChild(nav);
  });
  let lastPage = 'inicio';
  const route = () => {
    let id = decodeURIComponent(location.hash.slice(1)) || 'inicio';
    const el = document.getElementById(id) || document.getElementById('inicio');
    const pg = el.closest('main > section, main > header') || pages[0];
    showPage(pg.id);
    if (el !== pg) setTimeout(() => el.scrollIntoView({ block: 'start' }), 30);
  };
  const showPage = id => {
    const changed = lastPage !== id || !document.body.classList.contains('paged');
    document.body.classList.add('paged');
    pages.forEach(p => { p.hidden = p.id !== id; });
    lastPage = id;
    $$('#nav a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    $$(`#${id} .reveal`).forEach(r => r.classList.add('in'));
    document.title = (id === 'inicio' ? '' : label(id) + ' · ') + 'Gestión de la innovación con IA · Distilled Innovation';
    $('#tb-title').textContent = id === 'inicio' ? 'Gestión de la innovación con IA' : label(id);
    if (changed) { scrollTo({ top: 0, behavior: 'instant' }); dispatchEvent(new Event('resize')); }
  };
  addEventListener('hashchange', route);
  $$('#nav a').forEach(a => a.addEventListener('click', closeMenu));
  addEventListener('keydown', e => {
    if (e.target.closest('input, textarea, select, [contenteditable], dialog') || e.metaKey || e.ctrlKey || e.altKey) return;
    const i = order.indexOf(lastPage);
    if (e.key === 'ArrowRight' && order[i + 1]) location.hash = order[i + 1];
    if (e.key === 'ArrowLeft' && order[i - 1]) location.hash = order[i - 1];
  });
  const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target); } }), { threshold: .12 });
  $$('.card, .svc').forEach(el => { el.classList.add('reveal'); rv.observe(el); });
  route();
  icons();
  let iconT; new MutationObserver(() => { clearTimeout(iconT); iconT = setTimeout(() => { if (document.querySelector('i[data-lucide]')) icons(); }, 0); }).observe(document.body, { childList: true, subtree: true });

  /* ---------- Diagnóstico ---------- */
  const DQ = [
    ['Reglas', '¿Existen reglas claras sobre qué datos se pueden usar con IA?', ['No', 'Informales', 'Escritas', 'Escritas y aplicadas']],
    ['Contexto', '¿Los equipos usan un contexto común de la empresa al trabajar con IA?', ['No', 'A veces', 'Sí, una ficha', 'Sí, en agentes y proyectos']],
    ['Vigilancia', '¿Cada cuánto leen el entorno de forma estructurada?', ['Casi nunca', 'Por proyecto', 'Trimestral', 'Continua, con boletines']],
    ['Método', '¿Tienen un método común para pasar de la señal al reto y a la idea?', ['No', 'Cada equipo el suyo', 'Uno común', 'Uno común y asistido por IA']],
    ['Prototipos', '¿Cuánto tarda un equipo de negocio en tener un prototipo para mostrar?', ['Meses', 'Semanas', 'Días', 'Horas']],
    ['Evidencia', '¿Las decisiones de innovación se toman con criterios de éxito definidos antes?', ['Nunca', 'Rara vez', 'A menudo', 'Siempre']],
    ['Portafolio', '¿Gestionan un portafolio balanceado por horizontes con revisión periódica?', ['No', 'Lista de proyectos', 'Portafolio sin cadencia', 'Portafolio con comité mensual']],
    ['Capacidad', '¿El método vive en activos reutilizables (prompts, agentes, skills, plantillas)?', ['No', 'Algunos documentos', 'Biblioteca compartida', 'Skills y agentes en uso']]
  ];
  const ans = store.get('diag', {});
  $('#diag-qs').innerHTML = DQ.map(([k, q, o], i) => `<div class="q-item"><p>${i + 1}. ${q}</p><div class="opts" data-q="${i}">${o.map((t, j) => `<button data-v="${j}" class="${ans[i] === j ? 'sel' : ''}">${t}</button>`).join('')}</div></div>`).join('');
  $('#diag-qs').onclick = e => { const b = e.target.closest('button'); if (!b) return; const q = +b.parentElement.dataset.q; ans[q] = +b.dataset.v; store.set('diag', ans); $$('button', b.parentElement).forEach(x => x.classList.toggle('sel', x === b)); diagResult(); };
  const LV = [
    ['1 · Uso individual', 'La IA se usa de forma aislada y sin reglas. El primer paso es proteger la información y darle contexto a la herramienta.', 'Ruta sugerida: taller “Innovar para seguir siendo relevantes” + reglas de uso de IA (prompt del módulo 1).'],
    ['2 · Uso de equipo', 'Hay prácticas compartidas, pero falta un método común que convierta ideas en decisiones.', 'Ruta sugerida: taller “IA para la gestión de la innovación” (8 h) para instalar el loop completo.'],
    ['3 · Proceso asistido', 'El método existe y la IA lo acelera. El reto es que los pilotos se conviertan en portafolio.', 'Ruta sugerida: Venture Building Estratégico para H3 + diseño de portafolio y cadencias.'],
    ['4 · Sistema', 'La innovación funciona como sistema. La ventaja vendrá de datos propios y aprendizaje acumulado.', 'Ruta sugerida: diseño del sistema o centro de innovación + agentes y skills a la medida.'],
    ['5 · Ventaja', 'La IA habilita nuevos modelos y aprendes más rápido que el mercado. Cuida la exploración continua.', 'Ruta sugerida: agentes y skills a la medida conectados a tus herramientas y gobierno de la IA.']
  ];
  function diagResult() {
    const n = Object.keys(ans).length; if (n < DQ.length) { $('#diag-res').hidden = true; return; }
    const vals = DQ.map((_, i) => ans[i]); const avg = vals.reduce((a, b) => a + b, 0) / vals.length; // 0..3
    const lvl = Math.min(4, Math.round(avg / 3 * 4));
    $('#diag-res').hidden = false; $('#diag-level').textContent = 'Nivel ' + LV[lvl][0];
    $('#diag-text').textContent = LV[lvl][1]; $('#diag-reco').textContent = LV[lvl][2];
    drawRadar($('#diag-radar'), DQ.map(d => d[0]), vals.map(v => v / 3));
  }
  function drawRadar(c, labels, vals) {
    const x = c.getContext('2d'), W = c.width, H = c.height, cx = W / 2, cy = H / 2, R = W * .34, N = labels.length;
    x.clearRect(0, 0, W, H); x.font = '600 11px Montserrat, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    const pt = (i, r) => [cx + Math.cos(-Math.PI / 2 + i * 2 * Math.PI / N) * r, cy + Math.sin(-Math.PI / 2 + i * 2 * Math.PI / N) * r];
    for (let k = 1; k <= 4; k++) { x.beginPath(); for (let i = 0; i <= N; i++) { const [a, b] = pt(i % N, R * k / 4); i ? x.lineTo(a, b) : x.moveTo(a, b); } x.strokeStyle = '#d8e3e7'; x.stroke(); }
    for (let i = 0; i < N; i++) { const [a, b] = pt(i, R); x.beginPath(); x.moveTo(cx, cy); x.lineTo(a, b); x.strokeStyle = '#e6edf0'; x.stroke(); const [la, lb] = pt(i, R + 26); x.fillStyle = '#0F3B49'; x.fillText(labels[i], la, lb); }
    x.beginPath(); vals.forEach((v, i) => { const [a, b] = pt(i, R * Math.max(.04, v)); i ? x.lineTo(a, b) : x.moveTo(a, b); }); x.closePath();
    x.fillStyle = 'rgba(70,157,230,.28)'; x.fill(); x.strokeStyle = '#469DE6'; x.lineWidth = 2.5; x.stroke(); x.lineWidth = 1;
    vals.forEach((v, i) => { const [a, b] = pt(i, R * Math.max(.04, v)); x.beginPath(); x.arc(a, b, 4, 0, 7); x.fillStyle = '#0F3B49'; x.fill(); });
  }
  diagResult();

  /* ---------- HMW builder ---------- */
  const hmw = () => {
    const v = $('#hmw-v').value.trim(), o = $('#hmw-o').value.trim(), q = $('#hmw-q').value.trim(), r = $('#hmw-r').value.trim();
    const txt = `¿Cómo podríamos ${v || '[verbo]'} ${o || '[qué]'} para ${q || '[quién]'} de modo que ${r || '[resultado]'}?`;
    $('#hmw-out').textContent = txt;
    const all = (v + o + r).toLowerCase();
    const checks = [
      [q.split(' ').length >= 2, 'Para quién es específico (más de una palabra)'],
      [!!r, 'Tiene un resultado esperado'],
      [!/\b(app|aplicaci[oó]n|plataforma|chatbot|software|web)\b/.test(all), 'No menciona una solución (app, plataforma, chatbot…)'],
      [!/^innovar$/.test(v.toLowerCase()) && v.length > 2, 'El verbo es concreto (no “innovar”)']
    ];
    $('#hmw-checks').innerHTML = checks.map(([ok, t]) => `<div class="chk ${ok ? 'ok' : 'warn'}">${I(ok ? 'circle-check' : 'triangle-alert')}<span>${t}</span></div>`).join('');
    return txt;
  };
  $$('#hmw input').forEach(i => i.oninput = hmw); hmw();
  $('#hmw-copy').onclick = async () => { await copy(P['prueba-hmw'].texto.replace('[PEGA EL "¿CÓMO PODRÍAMOS…?"]', hmw())); toast('Reto copiado dentro del prompt de prueba'); };

  /* ---------- Generic matrix ---------- */
  function matrix(cfg) {
    const items = store.get(cfg.key, cfg.seed);
    const draw = () => {
      $$('.dot', $(cfg.m)).forEach(d => d.remove());
      items.forEach((it, i) => {
        const d = document.createElement('div'); d.className = 'dot ' + cfg.cls(it);
        d.style.left = ((it.x - 1) / 4 * 86 + 7) + '%'; d.style.top = (100 - ((it.y - 1) / 4 * 82 + 9)) + '%';
        d.textContent = it.n; d.title = `${it.n} (${it.x}, ${it.y})`; $(cfg.m).appendChild(d);
      });
      if (cfg.list) $(cfg.list).innerHTML = items.map((it, i) => `<li><span><b>${esc(it.n)}</b> · ${cfg.lx} ${it.y} · ${cfg.ly} ${it.x} · ${cfg.q(it)}</span><button data-i="${i}" title="Quitar" aria-label="Quitar">${I('x')}</button></li>`).join('');
      if (cfg.after) cfg.after(items);
      store.set(cfg.key, items);
    };
    [[cfg.ix, cfg.ixv], [cfg.iy, cfg.iyv]].forEach(([a, b]) => $(a).oninput = () => $(b).textContent = $(a).value);
    $(cfg.add).onclick = () => { const n = $(cfg.name).value.trim(); if (!n) { toast('Escribe un nombre'); return; } items.push({ n, x: +$(cfg.ix).value, y: +$(cfg.iy).value }); $(cfg.name).value = ''; draw(); };
    $(cfg.name).onkeydown = e => { if (e.key === 'Enter') $(cfg.add).click(); };
    $(cfg.clear).onclick = () => { items.length = 0; draw(); };
    if (cfg.list) $(cfg.list).onclick = e => { const b = e.target.closest('button'); if (b) { items.splice(+b.dataset.i, 1); draw(); } };
    draw(); return items;
  }
  const vfq = it => it.y >= 3.5 && it.x >= 3.5 ? 'Ganadora' : it.y >= 3.5 ? 'Apuesta' : it.x >= 3.5 ? 'Potenciar' : 'Descartar';
  const vfItems = matrix({ key: 'vf', m: '#vf-m', name: '#vf-name', ix: '#vf-f', ixv: '#vf-fv', iy: '#vf-v', iyv: '#vf-vv', add: '#vf-add', clear: '#vf-clear', list: '#vf-list', lx: 'viabilidad', ly: 'factibilidad', q: vfq, cls: it => vfq(it) === 'Ganadora' ? 'win' : '',
    seed: [{ n: 'Ejemplo: reporte automático de precios', x: 4, y: 4.5 }, { n: 'Ejemplo: marketplace regional', x: 2, y: 4 }] });
  $('#vf-export').onclick = async () => { await copy('Idea | Viabilidad | Factibilidad | Cuadrante\n' + vfItems.map(i => `${i.n} | ${i.y} | ${i.x} | ${vfq(i)}`).join('\n')); toast('Tabla copiada'); };
  matrix({ key: 'sa', m: '#sa-m', name: '#sa-name', ix: '#sa-u', ixv: '#sa-uv', iy: '#sa-c', iyv: '#sa-cv', add: '#sa-add', clear: '#sa-clear', cls: it => it.x >= 3.5 && it.y >= 3.5 ? 'kill' : '', q: () => '', lx: '', ly: '',
    seed: [{ n: 'Ejemplo: pagarían una suscripción', x: 4.5, y: 5 }, { n: 'Ejemplo: podemos integrar los datos', x: 2, y: 3.5 }],
    after: items => {
      if (!items.length) { $('#sa-out').textContent = 'Agrega supuestos para encontrar el asesino.'; return; }
      const k = [...items].sort((a, b) => (b.x * b.y) - (a.x * a.y))[0];
      $('#sa-out').textContent = `Supuesto asesino: “${k.n}”\nCriticidad ${k.y} · Incertidumbre ${k.x}\n\nSiguiente paso: diseña 3 experimentos (prompt “Diseña 3 experimentos”) empezando por uno ejecutable esta semana, sin presupuesto.`;
    } });

  /* ---------- Test card ---------- */
  const tc = () => {
    const g = i => $('#tc-' + i).value.trim();
    const t = `TEST CARD\nCreemos que… ${g(1) || '[supuesto]'}\nPara verificarlo, vamos a… ${g(2) || '[experimento]'}\nY mediremos… ${g(3) || '[métrica]'}\nEstamos en lo correcto si… ${g(4) || '[umbral]'} en ${g(5) || '[plazo]'}\nFracaso si… ${g(6) || '[criterio de fracaso]'}`;
    $('#tc-out').textContent = t;
    const checks = [[/\d/.test(g(4)), 'El umbral tiene un número'], [!!g(5), 'Tiene plazo'], [!!g(6), 'Tiene criterio de fracaso'],
      [!/(opini|gust|encuesta de satisf)/i.test(g(3)), 'Mide comportamiento, no solo opinión'], [!/\by\b.*\by\b/.test(g(1)) || g(1).length < 140, 'Prueba un solo supuesto']];
    $('#tc-checks').innerHTML = checks.map(([ok, x]) => `<div class="chk ${ok ? 'ok' : 'warn'}">${I(ok ? 'circle-check' : 'triangle-alert')}<span>${x}</span></div>`).join('');
    return t;
  };
  $$('#tc input, #tc textarea').forEach(i => i.oninput = tc); tc();
  $('#tc-copy').onclick = async () => { await copy(tc()); toast('Test Card copiada'); };
})();
