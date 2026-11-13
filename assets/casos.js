/* Casos del curso: pocos, elegidos para ilustrar el método.
   Cada caso responde: qué hicimos, qué paso o herramienta del loop sustenta y con qué evidencia.
   - origen "distilled": registro de casos de éxito y actas de cierre de Distilled Innovation.
   - origen "latam": información pública; cifras reportadas por la propia empresa (ver fuentes).
   etapa: explorar · enfocar · crear · validar · ia (capacidad con IA)
*/
window.DI_CASES = [
/* ---------- Etapa 1 · Explorar ---------- */
{ id:'ccb-moda', origen:'distilled', etapa:'explorar', org:'Cámara de Comercio de Bogotá · Clúster de Moda', anio:'2026',
  pasos:'Pasos 1–2 · Zoom Out y Radar',
  herramientas:[['Mapa de fuerzas','#m3'],['Radar de señales','#m3']],
  hicimos:'Antes de sofisticar la oferta de 40 MiPymes de moda, analizamos la demanda de Estados Unidos y México en seis categorías y la tradujimos en tendencias, referentes y requisitos de acceso para cada empresa.',
  evidencia:['40 MiPymes con ruta individual de al menos 10 horas','Productos con potencial seleccionados a partir de la lectura del mercado destino'],
  demuestra:'El Zoom Out no es un informe de contexto: es lo que convierte "queremos exportar" en una apuesta concreta. La fuerza de mercado (demanda, competidores, requisitos) decidió qué producto sofisticar.' },

{ id:'valorem', origen:'distilled', etapa:'explorar', org:'Grupo Valorem', anio:'2018',
  pasos:'Pasos 2 y 4 · Radar y Priorizar',
  herramientas:[['Radar de señales','#m3'],['Portafolio por horizontes','#m4']],
  hicimos:'Hicimos vigilancia estratégica alrededor de los Objetivos de Desarrollo Sostenible, priorizamos las señales y las convertimos en una estrategia con OKR y un portafolio de iniciativas.',
  evidencia:['Estrategia de impacto enmarcada en los ODS','Portafolio de iniciativas de alto impacto con métricas y OKR'],
  demuestra:'La vigilancia solo vale si alimenta decisiones: aquí el radar terminó en un portafolio con métricas, no en una lista de tendencias.' },

{ id:'notco', origen:'latam', etapa:'explorar', org:'NotCo · Chile', anio:'2025–2026',
  pasos:'Etapa 1 · leer el propio modelo de valor',
  herramientas:[['Ficha de contexto','#m2'],['4 niveles de innovación','#m2']],
  hicimos:'Al ver que vender alimentos no le daba rentabilidad, NotCo empezó a licenciar a otras marcas su algoritmo Giuseppe, la capacidad con la que creaba sus productos.',
  evidencia:['Según La Tercera, cerca de la mitad de su facturación vendría ya de su división de IA','La empresa sigue en pérdidas: el giro está en curso'],
  demuestra:'Explorar también es mirar hacia adentro: a veces el activo más valioso no es el producto, sino la capacidad con la que lo creas (innovación de nivel 4).',
  fuentes:[['La Tercera','https://www.latercera.com/pulso/noticia/notco-por-que-ya-not/'],['FoodNavigator-LATAM','https://www.foodnavigator-latam.com/Article/2025/04/09/notco-leverages-ai-to-help-cpg-brands-innovate-more-quickly-and-accurately']] },

/* ---------- Etapa 2 · Enfocar ---------- */
{ id:'sura', origen:'distilled', etapa:'enfocar', org:'Sura · Vicepresidencia Financiera', anio:'2018–2019',
  pasos:'Paso 5 · Encuadrar',
  herramientas:[['Scoping Canvas','#m4'],['¿Cómo podríamos…?','#hmw']],
  hicimos:'Con design sprints, encuadramos retos concretos de la Vicepresidencia Financiera y prototipamos soluciones en semanas, no en meses.',
  evidencia:['2 soluciones prototipadas','Una de ellas organizó y aceleró el cierre contable','El débito automático se posicionó como forma de pago preferida'],
  demuestra:'Un reto bien encuadrado funciona también fuera de producto: "cerrar el mes más rápido" es un problema con dueño, métrica y usuario, igual que uno de mercado.' },

{ id:'ccb-deporte', origen:'distilled', etapa:'enfocar', org:'Cámara de Comercio de Bogotá · Clúster de Deporte', anio:'2024',
  pasos:'Pasos 3–5 · Clasificar, Priorizar y Encuadrar',
  herramientas:[['Lista O/N/P','#m4'],['Scoping Canvas','#m4']],
  hicimos:'Diseñamos una ruta de 40 horas para que empresas del sector deporte identificaran oportunidades a partir de los retos de atletas, fanáticos, equipos y organizaciones, y las formularan como iniciativas.',
  evidencia:['150 empresas y emprendimientos formados','50 organizaciones acompañadas a profundidad'],
  demuestra:'Separar oportunidades, necesidades y problemas antes de idear evita la trampa de llegar con la solución: el reto se define desde el usuario.' },

/* ---------- Etapa 3 · Crear ---------- */
{ id:'marranitos', origen:'distilled', etapa:'crear', org:'Marranitos', anio:'2025',
  pasos:'Pasos 6–8 · Idear, Concepto y Prototipar',
  herramientas:[['Matriz viabilidad × factibilidad','#vf'],['Ficha de concepto','#m5'],['Supuesto asesino','#sa']],
  hicimos:'Co-creamos y prototipamos tres conceptos para entrar a canales institucionales y los validamos con compradores y maquilas antes de invertir en maquinaria o empaques.',
  evidencia:['Producto insignia definido: marrano relleno estandarizado de 70 g','Tres conceptos descartados antes de inversiones relevantes'],
  demuestra:'El concepto fuerte sale de comparar y descartar con criterio. Descartar tres ideas antes de comprar maquinaria es un resultado, no un fracaso.' },

{ id:'gamma', origen:'distilled', etapa:'crear', org:'Gamma', anio:'2015',
  pasos:'Paso 6 · Idear (con capacidades externas)',
  herramientas:[['Ideación ampliada','#m5']],
  hicimos:'Para rediseñar aisladores eléctricos, abrimos el reto a solucionadores externos y co-creamos en un bootcamp tres prototipos de solución.',
  evidencia:['3 prototipos diseñados con capacidades externas','Más de 10× de retorno sobre la inversión'],
  demuestra:'Ampliar el espacio de ideas es el mismo principio que hoy hace la IA en el paso 6: traer opciones que el equipo solo no habría visto, y luego filtrar.' },

/* ---------- Etapa 4 · Validar y decidir ---------- */
{ id:'teamfoods', origen:'distilled', etapa:'validar', org:'Team Foods', anio:'2017',
  pasos:'Pasos 8–9 · Prototipar y Probar',
  herramientas:[['Prototipo más simple','#m6'],['Test Card','#tc']],
  hicimos:'Para crear una economía circular del aceite de cocina usado, probamos prototipos de recolección diseñados con solucionadores externos en lugar de lanzar otro piloto largo.',
  evidencia:['Los prototipos recogieron más aceite en 2 semanas que pilotos anteriores en 6 meses','Más de 10× de retorno sobre la inversión'],
  demuestra:'Un experimento bien diseñado aprende en semanas lo que un piloto tradicional tarda meses en mostrar. Esa es la razón de la Test Card: definir antes qué cuenta como éxito.' },

{ id:'icono', origen:'distilled', etapa:'validar', org:'Inversiones ICONO-INFO', anio:'2024',
  pasos:'Pasos 8–10 · Prototipar, Probar y Decidir',
  herramientas:[['Supuesto asesino','#sa'],['Learning Card','#m6'],['Hoja de ruta 3·6·12','#m7']],
  hicimos:'Recorrimos el ciclo completo en su plataforma de reclutamiento: diagnóstico, ideación, MVP, pruebas con clientes internos y externos y una hoja de ruta de producto.',
  evidencia:['Time to market de 3 a 1,9 meses (−36,7 %)','Costo por cliente nuevo de COP 5,67 M a 2,8 M (−50,6 %)'],
  demuestra:'Cuando las pruebas terminan en una decisión escrita (seguir, ajustar o detener), el aprendizaje se nota en el time to market.' },

{ id:'epm', origen:'distilled', etapa:'validar', org:'Grupo EPM', anio:'2026',
  pasos:'Paso 10 · Decidir, convertido en sistema',
  herramientas:[['Revisión de portafolio','#m7'],['Cadencias del sistema','#m7']],
  hicimos:'Diseñamos la propuesta del Sistema de innovación de Grupo: ciclos recurrentes, filtros de pertinencia estratégica y viabilidad económica en tres niveles de decisión, pilotos en sandboxes y métricas de flujo, negocio y cultura.',
  evidencia:['Marco del sistema y hoja de ruta por fases (90 días, 12 meses, 2–3 años)','Taller de diseño del plan operativo con los actores del grupo'],
  demuestra:'El paso Decidir escala cuando tiene reglas: quién decide qué, con qué criterios y cada cuánto. Es el módulo 7 aplicado a un grupo empresarial.' },

{ id:'rappi', origen:'latam', etapa:'validar', org:'Rappi · Colombia y región', anio:'2025',
  pasos:'Paso 9 · Probar con criterio de fracaso',
  herramientas:[['Test Card','#tc']],
  hicimos:'Rappi automatizó con agentes de IA buena parte de la atención: reclamos, reembolsos y consultas.',
  evidencia:['Según la empresa, en Perú los casos resueltos con IA pasaron de 76 % a más del 90 %','En Colombia, la SIC lo sancionó, entre otras razones, por barreras para hablar con un agente humano; Rappi anunció que recurriría'],
  demuestra:'Medir solo la eficiencia es medir la mitad. Una Test Card completa incluye el criterio de fracaso: aquí habría sido la confianza del cliente y el acceso a una persona.',
  fuentes:[['Ecosistema Startup','https://ecosistemastartup.com/?p=118611'],['Portafolio · sanción de la SIC','https://www.portafolio.co/negocios/empresas/sic-sanciona-a-rappi-con-mas-de-4-000-millones-por-vulnerar-los-derechos-al-consumidor-y-fallas-reiteradas-491557']] },

/* ---------- Capacidad con IA ---------- */
{ id:'summa', origen:'distilled', etapa:'ia', org:'SUMMA (Grupo Argos)', anio:'2026',
  pasos:'Todo el loop · IA sobre un método común',
  herramientas:[['Copiloto y prompts','#kit']],
  hicimos:'En 16 horas de formación experiencial, los equipos gestionaron proyectos simulados con herramientas comunes (charter, WBS, riesgos, tablero) e IA aplicada a planeación, análisis de riesgos y reportes.',
  evidencia:['46 personas certificadas','92,4 % de score promedio y 96 % de retención'],
  demuestra:'La IA rinde cuando se monta sobre un lenguaje común. Por eso el curso empieza por la ficha de contexto y las plantillas, y después pone los prompts.' },

{ id:'argos', origen:'distilled', etapa:'ia', org:'Argos (con Academia Argos)', anio:'2026',
  pasos:'Madurez · liderazgo para decidir con IA',
  herramientas:[['Diagnóstico de madurez','#diag']],
  hicimos:'Con Academia Argos, diseñamos una experiencia para futuros líderes que combinó mapeo sistémico, prospectiva, análisis de datos, simulaciones y demostraciones de herramientas de IA aplicadas a decisiones reales del negocio.',
  evidencia:['53 líderes certificados','Ruta de aprendizaje con retos transferibles al trabajo'],
  demuestra:'La madurez en IA empieza por quien decide: si el liderazgo no entiende qué puede y qué no puede hacer la herramienta, la organización no pasa del nivel 2.' }
];
