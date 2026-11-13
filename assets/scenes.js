/* Escenas 3D del curso · Three.js */
import * as THREE from 'three';

const C = { teal: 0x0F3B49, blue: 0x469DE6, cyan: 0xBCF8FF, mint: 0x00FFCC, yellow: 0xFECB28, white: 0xffffff };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

function glOK() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } }

/* Round, soft sprite for points */
const dotTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(.35, 'rgba(255,255,255,.6)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(c); return t; })();

/* Generic scene factory: resizes to its container, renders only when visible */
function stage(canvasId, { fov = 45, pos = [0, 4, 10], look = [0, 0, 0] } = {}) {
  const canvas = document.getElementById(canvasId); if (!canvas) return null;
  const host = canvas.parentElement;
  if (!glOK()) { host.insertAdjacentHTML('beforeend', '<div class="nogl">Tu navegador no tiene WebGL activo: la visualización 3D no está disponible, pero todo el contenido sigue aquí.</div>'); return null; }
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(fov, 1, .1, 200);
  camera.position.set(...pos); camera.lookAt(...look);
  scene.add(new THREE.AmbientLight(0xffffff, .55));
  const dl = new THREE.DirectionalLight(0xffffff, 1.1); dl.position.set(5, 10, 7); scene.add(dl);
  const pl = new THREE.PointLight(C.mint, 18, 30); pl.position.set(-4, 3, 2); scene.add(pl);
  const labels = [];
  const S = { scene, camera, renderer, host, labels, visible: false, update: null, mouse: { x: 0, y: 0 } };
  const base = new THREE.Vector3(...pos), tgt = new THREE.Vector3(...look);
  const resize = () => { const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return; renderer.setSize(w, h, false); camera.aspect = w / h;
    const k = camera.aspect < 1.25 ? Math.pow(1.25 / camera.aspect, .8) : 1; camera.position.copy(tgt).add(base.clone().sub(tgt).multiplyScalar(k)); camera.lookAt(tgt); camera.updateProjectionMatrix(); };
  new ResizeObserver(resize).observe(host); resize();
  new IntersectionObserver(([e]) => { S.visible = e.isIntersecting; }, { threshold: .02 }).observe(host);
  host.addEventListener('pointermove', e => { const r = host.getBoundingClientRect(); S.mouse.x = (e.clientX - r.left) / r.width * 2 - 1; S.mouse.y = -((e.clientY - r.top) / r.height * 2 - 1); });
  S.label = (text, obj, cls = 'lbl tag') => { const el = document.createElement('div'); el.className = cls; el.innerHTML = text; host.appendChild(el); const L = { el, obj, v: new THREE.Vector3() }; labels.push(L); return L; };
  const clock = new THREE.Clock(); let t = 0;
  const loop = () => {
    requestAnimationFrame(loop);
    if (!S.visible) { clock.getDelta(); return; }
    const dt = Math.min(clock.getDelta(), .05); t += reduce ? dt * .25 : dt;
    S.update && S.update(t, dt);
    renderer.render(scene, camera);
    const w = host.clientWidth, h = host.clientHeight;
    labels.forEach(L => { (L.obj.isVector3 ? L.v.copy(L.obj) : L.obj.getWorldPosition(L.v)); L.v.project(camera); L.el.style.left = ((L.v.x + 1) / 2 * w) + 'px'; L.el.style.top = ((1 - L.v.y) / 2 * h) + 'px'; L.el.style.opacity = L.v.z < 1 ? (L.hide ? 0 : 1) : 0; });
  };
  loop();
  return S;
}
const lerp = (a, b, k) => a + (b - a) * k;
const ICO_PLAY = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3"/></svg>';
const ICO_PAUSE = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>';

/* ============ HERO · partículas que se destilan ============ */
(() => {
  const S = stage('scene-hero', { fov: 50, pos: [0, 0, 14] }); if (!S) return;
  const N = innerWidth < 700 ? 2600 : 5200;
  const shapes = [new Float32Array(N * 3), new Float32Array(N * 3), new Float32Array(N * 3)];
  for (let i = 0; i < N; i++) {
    // 0 · caos: nube dispersa
    const r = 4 + Math.random() * 6, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    shapes[0].set([r * Math.sin(ph) * Math.cos(th) * 1.5, r * Math.cos(ph) * .8, r * Math.sin(ph) * Math.sin(th)], i * 3);
    // 1 · destilación: embudo en espiral
    const u = i / N, a = u * Math.PI * 26, rad = .25 + (1 - u) * 4.6;
    shapes[1].set([Math.cos(a) * rad + (Math.random() - .5) * .25, 5 - u * 10, Math.sin(a) * rad + (Math.random() - .5) * .25], i * 3);
    // 2 · loop: toro (sistema)
    const p = Math.random() * Math.PI * 2, q = Math.random() * Math.PI * 2, R = 4.2, rr = .55 + Math.random() * .35;
    shapes[2].set([(R + rr * Math.cos(q)) * Math.cos(p), rr * Math.sin(q), (R + rr * Math.cos(q)) * Math.sin(p)], i * 3);
  }
  const pos = new Float32Array(shapes[0]); const col = new Float32Array(N * 3);
  const ca = new THREE.Color(C.blue), cb = new THREE.Color(C.mint), cc = new THREE.Color(C.cyan);
  for (let i = 0; i < N; i++) { const k = Math.random(); const c = k < .5 ? ca.clone().lerp(cc, k * 2) : cc.clone().lerp(cb, (k - .5) * 2); col.set([c.r, c.g, c.b], i * 3); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const m = new THREE.PointsMaterial({ size: innerWidth < 700 ? .12 : .16, map: dotTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: .95 });
  const pts = new THREE.Points(g, m); S.scene.add(pts);
  // gota central
  const drop = new THREE.Mesh(new THREE.SphereGeometry(.35, 32, 32), new THREE.MeshStandardMaterial({ color: C.yellow, emissive: C.yellow, emissiveIntensity: .8 }));
  S.scene.add(drop);
  const group = new THREE.Group(); group.add(pts); group.add(drop); S.scene.add(group);
  group.position.x = innerWidth > 980 ? 3.2 : 0;
  let target = 0, last = 0;
  S.update = (t) => {
    const cyc = t % 18, phase = cyc < 4 ? 0 : cyc < 11 ? 1 : 2; if (phase !== last) { target = phase; last = phase; }
    const A = shapes[target]; const k = .025;
    for (let i = 0; i < N * 3; i++) pos[i] += (A[i] - pos[i]) * k;
    g.attributes.position.needsUpdate = true;
    group.rotation.y = t * .08 + S.mouse.x * .35; group.rotation.x = .25 + S.mouse.y * .15;
    drop.position.y = target === 1 ? -5.4 + Math.sin(t * 2) * .1 : Math.sin(t) * .3;
    drop.scale.setScalar(target === 1 ? 1 : .6);
  };
  addEventListener('resize', () => { group.position.x = innerWidth > 980 ? 3.2 : 0; });
})();

/* ============ M1 · el valor se mueve ============ */
(() => {
  const S = stage('scene-shift', { pos: [0, 6.5, 13], look: [0, 1.5, 0] }); if (!S) return;
  const cats = [['Generar ideas', 0, 4.4, .5], ['Sintetizar', 0, 4, .7], ['Prototipar', 0, 5, 1], ['Criterio', 1, 2.2, 4.8], ['Evidencia', 1, 2, 4.5], ['Decisión', 1, 2.5, 5]];
  const floor = new THREE.GridHelper(16, 16, C.blue, 0x1d5b6e); floor.material.opacity = .35; floor.material.transparent = true; S.scene.add(floor);
  const grp = new THREE.Group(); S.scene.add(grp);
  const bars = cats.map(([name, kind, h0, h1], i) => {
    const x = (i - 2.5) * 1.9 + (kind ? .6 : -.6);
    const mat = new THREE.MeshStandardMaterial({ color: kind ? C.yellow : C.blue, emissive: kind ? C.yellow : C.blue, emissiveIntensity: .25, metalness: .2, roughness: .35, transparent: true, opacity: .95 });
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1, 1.1), mat); mesh.position.set(x, .5, 0); grp.add(mesh);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(1.14, .06, 1.14), new THREE.MeshBasicMaterial({ color: kind ? C.white : C.mint })); grp.add(cap);
    const base = new THREE.Object3D(); base.position.set(x, -.45, 1); grp.add(base);
    S.label(name, base, 'lbl');
    return { mesh, cap, h: [h0, h1], cur: h0 };
  });
  const lA = new THREE.Object3D(); lA.position.set(-4.6, 5.4, 0); grp.add(lA); S.label('<span class="sw" style="background:#469DE6"></span> Costo de explorar', lA);
  const lB = new THREE.Object3D(); lB.position.set(4.6, 5.4, 0); grp.add(lB); S.label('<span class="sw" style="background:#FECB28"></span> Valor del juicio humano', lB);
  let state = 0;
  const TXT = [['Antes de la IA', 'Explorar era caro: investigar, sintetizar y prototipar consumía semanas. Las organizaciones innovaban poco porque cada intento costaba mucho.'],
               ['Con IA', 'Generar, sintetizar y prototipar se vuelve casi gratis. El cuello de botella se mueve al criterio, la evidencia y la decisión: ahí está ahora la ventaja competitiva.']];
  S.host.querySelectorAll('.ctrls button').forEach(b => b.onclick = () => { state = +b.dataset.state; S.host.querySelectorAll('.ctrls button').forEach(x => x.classList.toggle('on', x === b)); document.getElementById('shift-panel').innerHTML = `<h4>${TXT[state][0]}</h4>${TXT[state][1]}`; });
  let auto = true; S.host.addEventListener('pointerdown', () => auto = false);
  S.update = (t) => {
    if (auto && !reduce) { const s = Math.floor(t / 5) % 2; if (s !== state) S.host.querySelectorAll('.ctrls button')[s].click(); }
    bars.forEach(b => { b.cur = lerp(b.cur, b.h[state], .06); b.mesh.scale.y = b.cur; b.mesh.position.y = b.cur / 2; b.cap.position.set(b.mesh.position.x, b.cur + .03, 0); });
    grp.rotation.y = Math.sin(t * .25) * .35 + S.mouse.x * .2;
  };
})();

/* ============ M2 · anillos de valor ============ */
(() => {
  const S = stage('scene-value', { pos: [0, 1.5, 11] }); if (!S) return;
  const core = new THREE.Mesh(new THREE.IcosahedronGeometry(.9, 2), new THREE.MeshStandardMaterial({ color: C.mint, emissive: C.mint, emissiveIntensity: .5, flatShading: true })); S.scene.add(core);
  const defs = [['Crear valor', C.blue, 3.2, [0, 0, 0]], ['Entregar valor', C.cyan, 2.6, [Math.PI / 2, 0, 0]], ['Capturar valor', C.yellow, 2.0, [0, Math.PI / 2, Math.PI / 4]]];
  const rings = defs.map(([n, c, r, rot], i) => {
    const piv = new THREE.Group(); piv.rotation.set(...rot); S.scene.add(piv);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, .09, 24, 160), new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: .35, metalness: .4, roughness: .3 }));
    piv.add(ring);
    const bead = new THREE.Mesh(new THREE.SphereGeometry(.22, 24, 24), new THREE.MeshBasicMaterial({ color: C.white })); bead.position.set(r, 0, 0); ring.add(bead);
    S.label(n, bead); return { piv, ring, sp: [.4, .55, .7][i] };
  });
  const stars = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(Array.from({ length: 900 }, () => (Math.random() - .5) * 30), 3)), new THREE.PointsMaterial({ size: .06, map: dotTex, color: C.cyan, transparent: true, depthWrite: false, opacity: .5 }));
  S.scene.add(stars);
  S.update = (t) => {
    rings.forEach((R, i) => { R.ring.rotation.z = t * R.sp; R.piv.rotation.y += .002 * (i + 1); });
    core.rotation.y = t * .4; core.rotation.x = t * .2; core.scale.setScalar(1 + Math.sin(t * 2) * .04);
    S.scene.rotation.y = S.mouse.x * .3; S.scene.rotation.x = S.mouse.y * .15;
  };
})();

/* ============ M2 · horizontes ============ */
(() => {
  const S = stage('scene-horizons', { pos: [0, 7, 12], look: [0, -.5, 0] }); if (!S) return;
  const core = new THREE.Mesh(new THREE.SphereGeometry(.8, 32, 32), new THREE.MeshStandardMaterial({ color: C.yellow, emissive: C.yellow, emissiveIntensity: .6 })); S.scene.add(core);
  S.label('Negocio actual', core, 'lbl');
  const H = [['H1 · Fortalecer el core', 2.2, 1.1, 6, C.blue, 0.05], ['H2 · Expandir a lo adyacente', 3.7, .6, 5, C.cyan, -.12], ['H3 · Crear lo nuevo', 5.3, .3, 4, C.mint, .2]];
  const orbs = H.map(([n, r, sp, k, c, tilt]) => {
    const g = new THREE.Group(); g.rotation.x = tilt; g.rotation.z = tilt * .6; S.scene.add(g);
    const ringMat = new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: .55 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(r, .025, 12, 200), ringMat); ring.rotation.x = Math.PI / 2; g.add(ring);
    const sats = []; const sm = new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: .5, transparent: true });
    for (let i = 0; i < k; i++) { const s = new THREE.Mesh(new THREE.SphereGeometry(.16 + Math.random() * .14, 20, 20), sm); s.userData.a = i / k * Math.PI * 2 + Math.random() * .4; g.add(s); sats.push(s); }
    const tag = new THREE.Object3D(); tag.position.set(r, 0, 0); g.add(tag); S.label(n, tag);
    return { g, r, sp, sats, ringMat, sm };
  });
  let focus = 0;
  const TX = [['Un portafolio, tres órbitas', 'Cada esfera es una iniciativa. Las de H1 giran rápido y cerca del núcleo; las de H3, lejos y despacio: son más inciertas y tardan más en dar fruto.'],
    ['H1 · Fortalecer el core', 'Mejora lo que ya vendemos a los clientes de hoy. Resultados relativamente rápidos con capacidades actuales. Métrica: eficiencia, satisfacción, margen.'],
    ['H2 · Expandir a lo adyacente', 'Segmentos, canales o modelos cercanos. Requiere algunas capacidades nuevas. Métrica: tracción y crecimiento de nuevas fuentes.'],
    ['H3 · Crear lo nuevo', 'Negocios o modelos que hoy no existen. Más preguntas que certezas. Métrica: aprendizaje validado antes que ventas.']];
  S.host.querySelectorAll('.ctrls button').forEach(b => b.onclick = () => { focus = +b.dataset.h; S.host.querySelectorAll('.ctrls button').forEach(x => x.classList.toggle('on', x === b)); document.getElementById('h-panel').innerHTML = `<h4>${TX[focus][0]}</h4>${TX[focus][1]}`; });
  S.update = (t) => {
    orbs.forEach((o, i) => {
      const on = !focus || focus === i + 1;
      o.ringMat.opacity = lerp(o.ringMat.opacity, on ? .6 : .08, .08); o.sm.opacity = lerp(o.sm.opacity, on ? 1 : .15, .08);
      o.sats.forEach(s => { const a = s.userData.a + t * o.sp * .5; s.position.set(Math.cos(a) * o.r, Math.sin(a * 3) * .08, Math.sin(a) * o.r); });
    });
    S.scene.rotation.y = S.mouse.x * .25; core.scale.setScalar(1 + Math.sin(t * 1.6) * .05);
  };
})();

/* ============ M2 · Distilled AI Innovation Loop ============ */
(() => {
  const S = stage('scene-loop', { pos: [0, 5.2, 10.5], look: [0, -2.0, 0] }); if (!S) return;
  const L = window.DI_LOOP || []; const N = L.length, R = 4.2;
  const ring = new THREE.Group(); S.scene.add(ring);
  const ST = window.DI_STAGES || []; const stHex = k => (ST.find(x => x.k === k) || {}).hex || C.cyan;
  // un arco por etapa (4 grandes etapas que agrupan los 11 pasos)
  const arcs = ST.map(e => {
    const idx = L.map((s, i) => s.e === e.k ? i : -1).filter(i => i >= 0); if (!idx.length) return null;
    const step = Math.PI * 2 / N, a0 = idx[0] * step - step * .42, a1 = idx[idx.length - 1] * step + step * .42;
    const tor = new THREE.Mesh(new THREE.TorusGeometry(R, .11, 12, 80, a1 - a0), new THREE.MeshBasicMaterial({ color: e.hex, transparent: true, opacity: .55 }));
    tor.rotation.x = Math.PI / 2; tor.rotation.z = Math.PI / 2 - a1; ring.add(tor);
    return { e, tor };
  }).filter(Boolean);
  // flujo de partículas
  const FN = 420, fp = new Float32Array(FN * 3), fa = Array.from({ length: FN }, () => Math.random() * Math.PI * 2);
  const flow = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(fp, 3)), new THREE.PointsMaterial({ size: .12, map: dotTex, color: C.mint, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
  ring.add(flow);
  const nodes = L.map((s, i) => {
    const a = i / N * Math.PI * 2;
    const m = new THREE.Mesh(new THREE.SphereGeometry(.34, 32, 32), new THREE.MeshStandardMaterial({ color: stHex(s.e), emissive: stHex(s.e), emissiveIntensity: .25, metalness: .3, roughness: .3 }));
    m.position.set(Math.sin(a) * R, 0, Math.cos(a) * R); m.userData.i = i; ring.add(m);
    const lb = S.label(`<b>${s.n}</b> · ${s.t}`, m); return { m, lb, a };
  });
  const center = new THREE.Mesh(new THREE.OctahedronGeometry(.8, 0), new THREE.MeshStandardMaterial({ color: C.yellow, emissive: C.yellow, emissiveIntensity: .4, flatShading: true })); S.scene.add(center);
  let act = 0, playing = !reduce, lastSwitch = 0, rotT = 0;
  const panel = document.getElementById('loop-panel');
  const hud = S.host.querySelector('.hud'); if (hud && ST.length) hud.insertAdjacentHTML('beforeend', `<div class="legend">${ST.map(e => `<span style="--c:${e.c}">${e.n} · ${e.t}</span>`).join('')}</div>`);
  const show = i => {
    act = (i + N) % N; const s = L[act];
    const e = ST.find(x => x.k === s.e) || {};
    panel.innerHTML = `<span class="pnl-stg" style="--c:${e.c}">Etapa ${e.n} · ${e.t}</span><h4>Paso ${s.n} · ${s.t}</h4>${s.d}<div style="margin-top:8px;font-size:12.5px;color:#BCF8FF">Artefacto: <b>${s.a}</b> · Skill: <code style="background:rgba(255,255,255,.1);color:#fff">${s.s}</code> · <a href="#${s.m}" style="color:#FECB28">Ir al módulo →</a></div>`;
    window.DI_LOOP_ACTIVE && window.DI_LOOP_ACTIVE(act);
    rotT = -nodes[act].a;
  };
  show(0);
  window.DI_LOOP_SHOW = i => { show(i); playing = false; pb.innerHTML = ICO_PLAY; pb.classList.remove('on'); };
  document.getElementById('loop-prev').onclick = () => { show(act - 1); lastSwitch = performance.now(); };
  document.getElementById('loop-next').onclick = () => { show(act + 1); lastSwitch = performance.now(); };
  const pb = document.getElementById('loop-play'); pb.classList.toggle('on', playing); pb.innerHTML = playing ? ICO_PAUSE : ICO_PLAY;
  pb.onclick = () => { playing = !playing; pb.innerHTML = playing ? ICO_PAUSE : ICO_PLAY; pb.classList.toggle('on', playing); };
  const ray = new THREE.Raycaster(), v2 = new THREE.Vector2();
  S.host.addEventListener('click', e => {
    if (e.target.closest('.ctrls, .panel')) return;
    const r = S.host.getBoundingClientRect(); v2.set((e.clientX - r.left) / r.width * 2 - 1, -((e.clientY - r.top) / r.height * 2 - 1));
    ray.setFromCamera(v2, S.camera); const hit = ray.intersectObjects(nodes.map(n => n.m))[0];
    if (hit) { show(hit.object.userData.i); playing = false; pb.innerHTML = ICO_PLAY; pb.classList.remove('on'); }
  });
  S.host.style.cursor = 'pointer';
  let t0 = 0;
  S.update = (t) => {
    if (playing && t - t0 > 3.6) { t0 = t; show(act + 1); }
    let d = rotT - ring.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); ring.rotation.y += d * .06;
    nodes.forEach((n, i) => { const on = i === act; const s = lerp(n.m.scale.x, on ? 1.7 : 1, .12); n.m.scale.setScalar(s); n.m.material.emissiveIntensity = on ? .9 : .22; n.lb.el.style.fontSize = on ? '14px' : '11px'; n.lb.el.style.borderColor = on ? '#FECB28' : ''; });
    for (let i = 0; i < FN; i++) { const a = fa[i] + t * .35; const w = Math.sin(i * 12.9) * .12; fp.set([Math.sin(a) * (R + w), Math.cos(i * 7.3 + t) * .08, Math.cos(a) * (R + w)], i * 3); }
    flow.geometry.attributes.position.needsUpdate = true;
    center.rotation.y = t * .6; center.rotation.x = t * .3;
    const ae = L[act] && L[act].e; arcs.forEach(a => { const on = a.e.k === ae; a.tor.material.opacity = lerp(a.tor.material.opacity, on ? .95 : .35, .1); });
  };
})();

/* ============ M3 · radar de señales ============ */
(() => {
  const S = stage('scene-radar', { pos: [0, 8.5, 9.5], look: [0, 0, .4] }); if (!S) return;
  const R = 5;
  const disc = new THREE.Mesh(new THREE.CircleGeometry(R, 96), new THREE.MeshBasicMaterial({ color: 0x0b3442, transparent: true, opacity: .85 })); disc.rotation.x = -Math.PI / 2; S.scene.add(disc);
  for (let k = 1; k <= 4; k++) { const c = new THREE.Mesh(new THREE.RingGeometry(R * k / 4 - .015, R * k / 4 + .015, 128), new THREE.MeshBasicMaterial({ color: C.blue, transparent: true, opacity: .45, side: THREE.DoubleSide })); c.rotation.x = -Math.PI / 2; c.position.y = .01; S.scene.add(c); }
  const lineMat = new THREE.LineBasicMaterial({ color: C.cyan, transparent: true, opacity: .6 });
  [[[-R, .02, 0], [R, .02, 0]], [[0, .02, -R], [0, .02, R]]].forEach(p => S.scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(p.map(a => new THREE.Vector3(...a))), lineMat)));
  // futuro-incierto highlight (x>0, z>0 → derecha-abajo en pantalla = futuro + baja certeza)
  const q = new THREE.Mesh(new THREE.CircleGeometry(R, 48, -Math.PI / 2, Math.PI / 2), new THREE.MeshBasicMaterial({ color: C.mint, transparent: true, opacity: .07, side: THREE.DoubleSide })); q.rotation.x = -Math.PI / 2; q.position.y = .015; S.scene.add(q);
  // beam
  const beam = new THREE.Mesh(new THREE.CircleGeometry(R, 32, 0, .55), new THREE.MeshBasicMaterial({ color: C.mint, transparent: true, opacity: .22, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
  beam.rotation.x = -Math.PI / 2; const bp = new THREE.Group(); bp.add(beam); bp.position.y = .03; S.scene.add(bp);
  // señales
  const sig = [];
  const sm = (c) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: .3 });
  for (let i = 0; i < 20; i++) {
    const x = (Math.random() * 2 - 1) * R * .8, z = (Math.random() * 2 - 1) * R * .8; if (Math.hypot(x, z) > R * .9) { i--; continue; }
    const h = .3 + Math.random() * 2.2; const weak = x > 0 && z > 0;
    const col = weak ? C.mint : (h > 1.8 ? C.yellow : C.blue);
    const m = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, h, 12), sm(col)); m.position.set(x, h / 2, z); S.scene.add(m);
    const top = new THREE.Mesh(new THREE.SphereGeometry(.17, 16, 16), new THREE.MeshBasicMaterial({ color: col, transparent: true })); top.position.set(x, h, z); S.scene.add(top);
    sig.push({ m, top, ang: Math.atan2(-z, x), glow: 0 });
  }
  const mk = (txt, x, z) => { const o = new THREE.Vector3(x, .1, z); S.label(txt, o); };
  mk('HOY · CIERTO<br><small style="font-weight:400">Actuar ya</small>', -R * .55, -R * .62);
  mk('FUTURO · CIERTO<br><small style="font-weight:400">Prepararse</small>', R * .55, -R * .62);
  mk('HOY · INCIERTO<br><small style="font-weight:400">Monitorear</small>', -R * .55, R * .62);
  mk('<span style="color:#00FFCC">FUTURO · INCIERTO</span><br><small style="font-weight:400">Señales débiles · venture</small>', R * .55, R * .62);
  S.label('← Hoy', new THREE.Vector3(-R - .5, 0, 0), 'lbl'); S.label('3–5 años →', new THREE.Vector3(R + .7, 0, 0), 'lbl');
  S.label('Alta certeza', new THREE.Vector3(0, 0, -R - .45), 'lbl'); S.label('Baja certeza', new THREE.Vector3(0, 0, R + .5), 'lbl');
  S.update = (t, dt) => {
    const a = (t * 1.1) % (Math.PI * 2); bp.rotation.y = a;
    sig.forEach(s => { let d = a + .27 - ((s.ang + Math.PI * 2) % (Math.PI * 2)); d = Math.atan2(Math.sin(d), Math.cos(d)); if (Math.abs(d) < .25) s.glow = 1; s.glow *= .97; s.top.scale.setScalar(1 + s.glow * 1.3); s.m.material.emissiveIntensity = .3 + s.glow * 1.2; });
    S.scene.rotation.y = S.mouse.x * .2;
  };
})();
