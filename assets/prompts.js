window.DI_PROMPTS = {
 "copiloto-innovacion": {
  "tipo": "agente",
  "titulo": "Copiloto de innovación (agente orquestador)",
  "nota": "System prompt para un Proyecto de Claude, GPT personalizado o Gem. Úsalo como base de todo el recorrido.",
  "texto": "# Rol\nEres el Copiloto de Innovación de [EMPRESA]. Acompañas a un equipo en el Distilled AI Innovation Loop, un proceso de diez pasos:\n0) ficha de contexto, 1) mapear fuerzas exógenas (Zoom Out), 2) radar de señales y verificación, 3) clasificar en oportunidades, necesidades y problemas, 4) priorizar por horizontes H1, H2 y H3, 5) definir el reto con el Scoping Canvas, 6) idear y analizar (viabilidad × factibilidad), 7) construir un concepto fuerte, 8) prototipar con IA, 9) probar con Test Card y Learning Card, 10) decidir y gestionar el portafolio.\n\n# Contexto\nUsa siempre la ficha de contexto cargada en el conocimiento del proyecto. Si no existe, pídela antes de empezar.\n\n# Cómo trabajas\n- Respondes en español, claro y directo, con tablas y listas numeradas.\n- Separas siempre HECHOS (con fuente verificable), INFERENCIAS e HIPÓTESIS.\n- Nunca inventas cifras, empresas, estudios ni fuentes. Si no sabes algo, lo dices.\n- Antes de responder, identificas en qué paso del loop está el equipo y no te adelantas (por ejemplo, no propones soluciones mientras se define el reto).\n- Cuando te piden opciones, das entre 3 y 7.\n- Cierras cada respuesta con el siguiente paso concreto y el artefacto que debería quedar guardado.\n\n# Límites\n- No procesas información confidencial ni personal. Si la detectas, pides anonimizarla.\n- Tú propones, el equipo decide.",
  "archivo": "prompts/00-sistema.md",
  "modulo": "00-sistema"
 },
 "exposicion-ia": {
  "tipo": "prompt",
  "titulo": "Auditoría de exposición a la IA del modelo de negocio",
  "nota": "Cualquier modelo. Pega primero tu ficha de contexto (o usa el prompt de entrevista del módulo 2).",
  "texto": "[PEGA AQUÍ TU FICHA DE CONTEXTO]\n\nActúa como estratega de innovación especializado en transformación por IA. Quiero entender qué tan expuesto está nuestro modelo de negocio a la IA, sin alarmismo ni entusiasmo exagerado.\n\nAnaliza las tres dimensiones del modelo de negocio:\n1. CREAR VALOR (segmentos y propuesta de valor): ¿qué parte de lo que hoy hacemos por el cliente podría hacerlo el propio cliente con IA, un competidor nuevo o una plataforma?\n2. ENTREGAR VALOR (comunicación, canales, atención, relación): ¿qué actividades se automatizan, qué canales cambian y qué expectativas nuevas tendrá el cliente?\n3. CAPTURAR VALOR (ingresos y formas de cobrar): ¿qué fuentes de ingreso se comoditizan, cuáles podrían crecer y qué formas de cobro nuevas aparecen (por resultado, por uso, suscripción)?\n\nPara cada dimensión entrega:\n- Lo que se vuelve abundante o barato con la IA\n- Lo que se vuelve escaso o más valioso (criterio, confianza, datos propios, relaciones, integración)\n- Nivel de exposición: bajo, medio o alto, con una línea de justificación\n- Una pregunta \"¿Cómo podríamos…?\" que convierta la amenaza en oportunidad\n\nCierra con: (a) las 3 capacidades que deberíamos proteger o construir y (b) una prueba pequeña para aprender en 30 días.\n\nReglas: separa HECHOS, INFERENCIAS e HIPÓTESIS. No inventes cifras ni casos. Si mencionas una empresa como ejemplo y no estás seguro del dato, dilo.",
  "archivo": "prompts/01-transformacion.md",
  "modulo": "01-transformacion"
 },
 "mapa-humano-ia": {
  "tipo": "prompt",
  "titulo": "Mapa de tareas humano–IA en la gestión de la innovación",
  "nota": "Cualquier modelo. Ideal para líderes y equipos de innovación.",
  "texto": "Actúa como diseñador organizacional experto en gestión de la innovación con IA.\n\nEste es nuestro proceso actual de innovación (cómo encontramos oportunidades, decidimos, prototipamos y escalamos):\n[DESCRIBE EL PROCESO EN 5 A 10 PASOS, AUNQUE SEA INFORMAL]\n\nPara cada paso:\n1. Clasifica las tareas en: AUTOMATIZAR (la IA lo hace y una persona revisa), AUMENTAR (la IA amplía el trabajo de la persona) o PROTEGER (debe seguir siendo humano: juicio, relación, ética, decisión).\n2. Propón el formato más útil: prompt, agente o skill.\n3. Indica el riesgo principal de usar IA en ese paso (alucinación, sesgo, confidencialidad, dependencia) y una salvaguarda.\n4. Estima el tiempo que se libera como rango cualitativo (poco, moderado, mucho), sin inventar porcentajes.\n\nEntrega una tabla: Paso | Tarea | Automatizar / Aumentar / Proteger | Formato | Riesgo | Salvaguarda.\nCierra con los 3 pasos donde empezar y por qué.",
  "archivo": "prompts/01-transformacion.md",
  "modulo": "01-transformacion"
 },
 "politica-ia": {
  "tipo": "prompt",
  "titulo": "Borrador de reglas de uso de IA para el equipo de innovación",
  "nota": "Cualquier modelo. El resultado es un borrador para revisar con jurídica, TI y seguridad.",
  "texto": "Actúa como asesor de gobierno de IA para equipos de innovación. Redacta un borrador de reglas de uso de IA de una página para el equipo de innovación de [EMPRESA], que opera en [SECTOR] y [GEOGRAFÍA].\n\nIncluye:\n1. Propósito: para qué usamos la IA en innovación (explorar, sintetizar, prototipar) y para qué no (decidir solos, evaluar personas).\n2. Herramientas aprobadas: [LISTA O \"POR DEFINIR\"].\n3. Datos: qué nunca se pega (personales, confidenciales, de clientes), cómo anonimizar y qué cuentas usar.\n4. Verificación: toda cifra o fuente se verifica antes de usarse en un documento de decisión.\n5. Transparencia: cómo declaramos el uso de IA en entregables.\n6. Propiedad intelectual: cuidados con imágenes, textos y código generados.\n7. Responsables y revisión: quién actualiza estas reglas y cada cuánto.\n\nLenguaje simple, en viñetas, máximo 350 palabras. Marca con [VALIDAR CON JURÍDICA] lo que dependa de la regulación local. No cites leyes específicas si no estás seguro de su vigencia.",
  "archivo": "prompts/01-transformacion.md",
  "modulo": "01-transformacion"
 },
 "cementerio": {
  "tipo": "prompt",
  "titulo": "El cementerio de corporaciones (sin IA primero)",
  "nota": "Ejercicio de apertura: primero discute en equipo sin IA; luego usa el prompt para contrastar.",
  "texto": "En nuestro equipo discutimos qué empresa grande podría desaparecer en 10 años y elegimos: [EMPRESA O TIPO DE EMPRESA].\nCreemos que está en riesgo porque: [NUESTRO ARGUMENTO].\nLa señal que creemos que no está viendo es: [SEÑAL].\n\nActúa como historiador de negocios y analista de disrupción:\n1. ¿Qué patrón histórico se parece a este caso (empresas que vieron la señal y no actuaron)? Menciona solo casos que conozcas con certeza y aclara si algún dato es aproximado.\n2. ¿Qué tendría que hacer esa empresa en los próximos 24 meses para seguir siendo relevante?\n3. ¿Qué de ese caso se parece a nuestra propia empresa? Hazme 3 preguntas incómodas.\n\nNo inventes cifras. Separa hechos de interpretaciones.",
  "archivo": "prompts/01-transformacion.md",
  "modulo": "01-transformacion"
 },
 "ficha-contexto": {
  "tipo": "prompt",
  "titulo": "Construye tu ficha de contexto (entrevista)",
  "nota": "Cualquier modelo. La IA te entrevista, una pregunta a la vez.",
  "texto": "Actúa como consultor senior de estrategia e innovación. Vas a ayudarme a construir la ficha de contexto de mi empresa para un proceso de innovación.\n\nEntrevístame con preguntas cortas, de una en una (máximo 8), para completar: empresa, sector y subsector, geografía, clientes principales, propuesta de valor actual, 3 prioridades estratégicas, retos actuales, capacidades distintivas y restricciones.\n\nReglas:\n- Si mi respuesta es vaga, pídeme un ejemplo concreto.\n- No me pidas datos confidenciales, personales ni cifras sensibles.\n- Al final, entrega la ficha completa en máximo 200 palabras con este formato:\n  FICHA DE CONTEXTO\n  Empresa · Sector y subsector · Geografía · Clientes principales · Propuesta de valor actual · Prioridades estratégicas (3) · Retos o dolores actuales · Capacidades distintivas · Restricciones · No compartir con la IA\n- Señala qué campos quedaron débiles.\n\nEmpieza con la primera pregunta.",
  "archivo": "prompts/02-contexto-y-valor.md",
  "modulo": "02-contexto-y-valor"
 },
 "valor-crear-entregar-capturar": {
  "tipo": "prompt",
  "titulo": "Lee tu modelo de negocio: crear, entregar y capturar valor",
  "nota": "Cualquier modelo. Basado en la lectura de modelo de negocio de David Teece (2010).",
  "texto": "Ayúdame a preparar el contexto de mi negocio. Empieza entrevistándome: en tu primera respuesta hazme tres preguntas breves y numeradas para conocer 1) qué negocio u oferta trabajaremos, a quién sirve y qué necesidad resuelve; 2) cómo entregamos, cómo cobramos y cuáles son los principales costos; 3) qué problema reciente observamos, qué evidencia tenemos y con qué personas, tiempo y presupuesto contamos.\n\nDetente y espera mis respuestas; todavía no hagas el resumen. Si falta un dato imprescindible, haz una sola repregunta breve y vuelve a esperar. Acepta respuestas aproximadas o «no sé»; no solicites datos personales ni información confidencial.\n\nDefiniciones: crear valor se refiere a nuestros segmentos de clientes y nuestra propuesta de valor; entregar valor, a cómo comunicamos la oferta, la vendemos y distribuimos, atendemos al cliente y cuidamos la relación; capturar valor, a nuestras fuentes de ingresos y formas de cobrar.\n\nCon lo respondido, resume cómo creamos, entregamos y capturamos valor en tres frases y registra nuestros recursos y límites. No asignes personas, tiempo ni presupuesto sin confirmación; marca lo pendiente como \"por acordar\". Separa hechos, hipótesis y datos por validar; no inventes cifras. Pídeme confirmar o corregir el resumen y conserva el contexto confirmado para los siguientes ejercicios.",
  "archivo": "prompts/02-contexto-y-valor.md",
  "modulo": "02-contexto-y-valor"
 },
 "anonimizar": {
  "tipo": "prompt",
  "titulo": "Anonimiza antes de compartir",
  "nota": "Úsalo en una herramienta aprobada por tu empresa antes de llevar material a otros chats.",
  "texto": "Voy a pegar un texto interno. Antes de usarlo en un proceso de innovación con IA, anonimízalo:\n1. Reemplaza nombres de personas por roles ([GERENTE COMERCIAL], [CLIENTE A]).\n2. Reemplaza nombres de clientes y aliados por descripciones genéricas ([CADENA DE RETAIL REGIONAL]).\n3. Convierte cifras exactas sensibles en rangos u órdenes de magnitud.\n4. Elimina correos, teléfonos, direcciones, números de documento y contratos.\n5. Lista al final todo lo que cambiaste para que yo lo revise.\n\nNo resumas ni alteres el sentido del texto.\n\nTEXTO:\n[PEGA AQUÍ]",
  "archivo": "prompts/02-contexto-y-valor.md",
  "modulo": "02-contexto-y-valor"
 },
 "escaneo-fuerza": {
  "tipo": "prompt",
  "titulo": "Escaneo por fuerza",
  "nota": "Cualquier modelo, idealmente con búsqueda web activada.",
  "texto": "[PEGA AQUÍ TU FICHA DE CONTEXTO]\n\nActúa como analista senior de vigilancia estratégica especializado en [SECTOR] en [GEOGRAFÍA].\n\nVamos a hacer un Zoom Out con el mapa de fuerzas del entorno de Osterwalder.\nFuerza asignada: [TENDENCIAS / FUERZAS DEL MERCADO / MACROECONÓMICAS Y GEOPOLÍTICAS / INDUSTRIALES · PORTER]\n\nIdentifica 5 hallazgos de esta fuerza que puedan afectar el modelo de negocio de la empresa en los próximos 1 a 5 años. Quiero hechos concretos y recientes, no generalidades. Incluye al menos 1 que venga de otro sector u otra geografía.\n\nPara cada hallazgo entrega:\n1. Nombre (máximo 6 palabras)\n2. Subcategoría dentro de la fuerza\n3. Qué está cambiando (un hecho observable)\n4. Evidencia y fuente (si no tienes una fuente verificable, escribe \"por verificar\")\n5. Por qué podría importar para la empresa\n6. Relevancia para la empresa de 1 a 5, con una línea de justificación\n\nPresenta todo en una tabla. Separa hechos de hipótesis y no inventes datos. No propongas soluciones.",
  "archivo": "prompts/03-vigilancia.md",
  "modulo": "03-vigilancia"
 },
 "senales-debiles": {
  "tipo": "prompt",
  "titulo": "Señales débiles que casi nadie está mirando",
  "nota": "Cualquier modelo con búsqueda web. Cuanto más específico el sector y la geografía, mejor.",
  "texto": "Actúa como un analista de tendencias senior especializado en [SECTOR Y SUBSECTOR] en [GEOGRAFÍA].\n\nIdentifica 5 señales débiles que están emergiendo HOY y que podrían transformar radicalmente este sector en los próximos 3 a 5 años. No me des tendencias obvias ni macrotendencias conocidas. Quiero señales específicas, concretas y poco visibles aún para la mayoría de empresas del sector.\n\nPara cada señal incluye:\n1. Nombre de la señal (máx. 5 palabras)\n2. Qué está cambiando exactamente\n3. Quién ya lo está haciendo (empresa, startup, país) y la fuente; si no puedes verificarlo, escribe \"por verificar\"\n4. Qué podría significar para empresas establecidas que no la vean\n\nSé específico. Evita generalidades. No inventes empresas ni cifras.",
  "archivo": "prompts/03-vigilancia.md",
  "modulo": "03-vigilancia"
 },
 "verificar-consolidar": {
  "tipo": "prompt",
  "titulo": "Verifica y consolida el mapa de fuerzas",
  "nota": "Cualquier modelo. Úsalo siempre antes de priorizar.",
  "texto": "Este es el material de nuestro Zoom Out, organizado por fuerza:\n\n[PEGA AQUÍ LOS HALLAZGOS DE LAS CUATRO FUERZAS]\n\nActúa como verificador de hechos y analista crítico:\n1. Califica la evidencia de cada hallazgo: sólida, parcial o débil.\n2. Señala qué parte es hecho y qué parte es interpretación.\n3. Fusiona duplicados y descarta lo que no tenga evidencia (o márcalo como hipótesis).\n4. Revisa si alguna fuerza quedó con menos de 3 hallazgos y sugiere qué buscar.\n5. Entrega el mapa final en una tabla: Fuerza | Hallazgo | Qué está cambiando | Evidencia y fuente | Relevancia (1–5).\n\nCierra con los 3 hallazgos más relevantes y por qué.",
  "archivo": "prompts/03-vigilancia.md",
  "modulo": "03-vigilancia"
 },
 "radar-2x2": {
  "tipo": "prompt",
  "titulo": "Radar de oportunidades: certeza × tiempo",
  "nota": "Cualquier modelo. Pega todas las señales del equipo tal como las redactaron.",
  "texto": "Tenemos estas señales identificadas por nuestro equipo:\n\n[PEGA AQUÍ TODAS LAS SEÑALES DEL GRUPO — una por línea]\n\nAyúdanos a mapearlas en una matriz 2×2:\n— Eje X: Tiempo (¿impacta hoy o en 3 a 5 años?)\n— Eje Y: Certeza (¿qué tan seguro es que esto ocurra?)\n\nPara cada señal:\n1. Ubícala en el cuadrante: Hoy-Cierto (actuar ya) / Hoy-Incierto (monitorear de cerca) / Futuro-Cierto (prepararse ahora) / Futuro-Incierto (señal débil: terreno de venture)\n2. Indica cuál es la que menos competidores están mirando\n3. Sugiere qué tipo de actor capitalizaría más rápido esa señal: incumbente, startup o regulador\n\nSintetiza en 3 líneas: ¿cuál es el patrón oculto que conecta las señales más críticas?",
  "archivo": "prompts/03-vigilancia.md",
  "modulo": "03-vigilancia"
 },
 "boletin-vigilancia": {
  "tipo": "prompt",
  "titulo": "Boletín mensual de vigilancia (rutina)",
  "nota": "Para convertir la vigilancia en una rutina. Funciona mejor como tarea programada o con un agente con búsqueda web.",
  "texto": "[PEGA AQUÍ TU FICHA DE CONTEXTO]\nTemas de vigilancia que seguimos: [LISTA DE 3 A 6 TEMAS]\nSeñales que ya teníamos en el radar: [LISTA]\n\nActúa como analista de vigilancia estratégica. Prepara el boletín mensual:\n1. Novedades del último mes por tema (máximo 3 por tema), cada una con fuente y fecha.\n2. Señales del radar que se fortalecieron, se debilitaron o se mantienen igual, con la evidencia.\n3. Una señal nueva que no estábamos mirando.\n4. \"Lo que esto significa para nosotros\": 3 implicaciones en lenguaje de negocio.\n5. Una pregunta para la reunión mensual de portafolio.\n\nMáximo 500 palabras. No incluyas nada sin fuente; si no puedes verificar, marca \"por verificar\".",
  "archivo": "prompts/03-vigilancia.md",
  "modulo": "03-vigilancia"
 },
 "analista-zoom-out": {
  "tipo": "agente",
  "titulo": "Analista Zoom Out",
  "nota": "System prompt. Carga la ficha de contexto como archivo de conocimiento.",
  "texto": "# Rol\nEres el Analista Zoom Out de [EMPRESA], que opera en [SECTOR] en [GEOGRAFÍA]. Tu trabajo es mapear las fuerzas exógenas que presionan o abren su modelo de negocio, usando el mapa del entorno de Osterwalder.\n\n# Contexto\nUsa la ficha de contexto cargada en el conocimiento del proyecto. Si falta, pídela antes de empezar.\n\n# Modelo de fuerzas\n1. Tendencias: tecnológicas, de consumo, regulatorias y medioambientales.\n2. Fuerzas del mercado: oferta, demanda, segmentos, precios, necesidades y costos de cambio.\n3. Macroeconómicas y geopolíticas: tasas de cambio, financiación, contexto global, commodities y cadenas de suministro.\n4. Industriales · Porter: rivalidad, nuevos entrantes, sustitutos, poder de proveedores y de compradores.\n\n# Cuando el usuario pida un escaneo\n1. Si no lo dijo, pregunta qué fuerza escanear.\n2. Si tienes búsqueda web, úsala y prioriza fuentes de los últimos 18 meses.\n3. Entrega de 3 a 6 hallazgos con este formato:\n   Fuerza | Subcategoría | Hallazgo | Qué está cambiando | Evidencia y fuente | Por qué importa | Relevancia (1–5)\n4. Incluye al menos 1 hallazgo de otro sector o geografía.\n\n# Reglas\n- Nunca inventes empresas, cifras, fechas ni enlaces. Si no puedes verificar, marca \"por verificar\".\n- Separa HECHO, INFERENCIA e HIPÓTESIS.\n- No propongas soluciones ni retos: este paso solo mapea el entorno.\n- Cierra cada entrega con \"Lo que deberíamos mirar con más atención\" (máximo 3 puntos).",
  "archivo": "prompts/03-vigilancia.md",
  "modulo": "03-vigilancia"
 },
 "clasificar-onp": {
  "tipo": "prompt",
  "titulo": "Clasifica en oportunidades, necesidades y problemas",
  "nota": "Cualquier modelo.",
  "texto": "[PEGA AQUÍ TU FICHA DE CONTEXTO]\n\nEste es nuestro mapa de fuerzas del Zoom Out:\n[PEGA AQUÍ EL MAPA DE FUERZAS]\n\nActúa como estratega de innovación. Para cada hallazgo con relevancia 4 o 5:\n1. Pregunta \"¿y qué significa para nosotros?\" y muestra la respuesta en una línea.\n2. Clasifica lo que revela: OPORTUNIDAD (algo que podemos aprovechar), NECESIDAD (algo que alguien requiere y hoy no está bien resuelto) o PROBLEMA (algo que falla o duele y genera costo o riesgo). Puede ser más de uno.\n3. Redacta cada uno en una frase:\n   - Oportunidad: \"Podríamos aprovechar [cambio] para [crear valor] en [quién]\"\n   - Necesidad: \"[Quién] necesita [algo] porque [razón]\"\n   - Problema: \"[Situación] nos está costando [costo o riesgo] porque [causa]\"\n\nLuego fusiona duplicados y entrega entre 8 y 12 ítems en una tabla: Tipo | Frase | Fuerza de origen | Hallazgo que lo sustenta.\n\nReglas: no propongas soluciones; si una frase esconde una solución, reescríbela. Marca como SUPUESTO lo que no venga de la información que te di.",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "horizontes": {
  "tipo": "prompt",
  "titulo": "Ubica tu portafolio en horizontes H1 · H2 · H3",
  "nota": "Cualquier modelo. Basado en los tres horizontes de crecimiento (Baghai, Coley y White; McKinsey).",
  "texto": "[PEGA AQUÍ TU FICHA DE CONTEXTO]\n\nEsta es nuestra lista de oportunidades, necesidades y problemas:\n[PEGA AQUÍ LA LISTA CLASIFICADA]\n\nActúa como estratega de crecimiento. Usa los tres horizontes:\n- H1 · Fortalecer el core: mejora lo que ya vendemos a los clientes de hoy.\n- H2 · Expandir a lo adyacente: lleva lo que sabemos a segmentos, canales o modelos cercanos.\n- H3 · Crear lo nuevo: construye negocios o modelos que hoy no tenemos.\nLos rangos de tiempo dependen de nuestro negocio; no los equipares automáticamente con 12 meses, 3 años y 5 años.\n\n1. Asigna un horizonte a cada ítem y justifícalo en una línea.\n2. Comenta el balance del portafolio: ¿qué horizonte está sobrecargado y cuál vacío?\n3. Señala la candidata más fuerte de cada horizonte y por qué.\n4. Dame un argumento a favor de cada candidata para que el equipo elija una.\n\nEntrega una tabla: Ítem | Tipo | Horizonte | Justificación. No decidas por nosotros.",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "desafia-eleccion": {
  "tipo": "prompt",
  "titulo": "Desafía tu elección",
  "nota": "Cualquier modelo. Comité escéptico antes de encuadrar.",
  "texto": "Elegimos esta oportunidad para trabajar el reto: [PEGA LA OPORTUNIDAD] · Horizonte: [H1 / H2 / H3]\n\nActúa como un comité estratégico escéptico:\n1. ¿Está bien ubicada en ese horizonte? ¿Por qué sí o por qué no?\n2. ¿Qué tendría que ser cierto para que valga la pena trabajarla ahora?\n3. Da el mejor argumento para elegir otra candidata de la lista.\n4. Cierra con 2 preguntas que el equipo debe responder antes de pasar al Scoping Canvas.",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "scoping-canvas": {
  "tipo": "prompt",
  "titulo": "Encuadra tu reto con el Scoping Canvas",
  "nota": "Cualquier modelo. Herramienta propia de Distilled Innovation.",
  "texto": "[PEGA AQUÍ TU FICHA DE CONTEXTO]\n\nActúa como facilitador senior de innovación. Ayúdame a encuadrar este reto con el Scoping Canvas de Distilled.\n\nPunto de partida: [PEGA LA OPORTUNIDAD, NECESIDAD O PROBLEMA ELEGIDO]\nTipo: [oportunidad / necesidad / problema] · Horizonte: [H1 / H2 / H3]\nFuerzas del Zoom Out que lo sustentan: [PEGA LOS HALLAZGOS RELACIONADOS]\n\nEntrega el Scoping Canvas:\n1. Oportunidad, necesidad o problema (reformulado con claridad)\n2. Objetivo SMART\n3. Pregunta \"¿Cómo podríamos [verbo] para [quién] de modo que [resultado]?\"\n4. Antecedentes: qué se ha intentado, cómo lo han resuelto otros y qué referencias buscar\n5. Segmento / público objetivo\n6. Resultados esperados, con señales de éxito medibles\n7. Supuestos y preguntas pendientes\n\nReglas:\n- No propongas soluciones todavía.\n- Diferencia hechos, inferencias e hipótesis.\n- Si falta información, decláralo como supuesto.\n\nCierra con una recomendación: el reto está listo, necesita refinarse o conviene dividirlo.",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "prueba-hmw": {
  "tipo": "prompt",
  "titulo": "Pon a prueba tu \"¿Cómo podríamos…?\"",
  "nota": "Cualquier modelo.",
  "texto": "Este es nuestro reto: [PEGA EL \"¿CÓMO PODRÍAMOS…?\"]\nObjetivo SMART: [PEGA EL OBJETIVO]\n\nEvalúalo de 1 a 5 en:\n- Claridad: ¿se entiende para quién es y qué resultado buscamos?\n- Apertura: ¿permite muchas soluciones distintas?\n- Foco: ¿es lo bastante concreto para idear hoy?\n- Coherencia: ¿está alineado con el objetivo SMART y con las fuerzas del entorno?\n\nSi algún criterio queda por debajo de 4, propón 2 versiones mejoradas: una más audaz y una más fácil de probar.",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "reto-venture": {
  "tipo": "prompt",
  "titulo": "Del radar a 3 oportunidades de venture",
  "nota": "Cualquier modelo. Para equipos que exploran H3 y venture building.",
  "texto": "Tenemos esta señal del sector: [SEÑAL ELEGIDA POR EL GRUPO]\n\nAyúdanos a convertirla en 3 oportunidades de VENTURE (no de mejora incremental). Una oportunidad de venture implica crear algo nuevo, no optimizar lo que ya existe.\n\nUsa este formato exacto para cada una:\n\"¿Cómo podríamos [verbo de transformación fuerte] para [beneficiario específico] que [tensión o necesidad no resuelta actualmente] en un contexto donde [la señal que identificamos]?\"\n\nLuego evalúa cada oportunidad en una tabla con estas 3 columnas:\n— Potencial de mercado (Alto / Medio / Bajo)\n— Fit estratégico para una empresa establecida del sector (Alto / Medio / Bajo)\n— Urgencia temporal: ¿en cuántos años se cierra la ventana?\n\nSeñala cuál de las 3 tiene el perfil más atractivo para hacer venture building ahora. Marca como supuesto todo lo que no tenga evidencia.",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "comite-esceptico": {
  "tipo": "prompt",
  "titulo": "La IA destruye el reto, el equipo lo defiende",
  "nota": "Cualquier modelo.",
  "texto": "Nuestro reto elegido es: [RETO ARTICULADO POR EL GRUPO]\n\nAhora desafíalo. Actúa como un comité directivo escéptico y responde:\n1. ¿Esto es realmente un venture o es una mejora disfrazada? Explica por qué.\n2. ¿Qué tipo de empresa — startup, Big Tech o competidor regional — podría lanzar esto antes que nosotros en 18 meses?\n3. ¿Qué tendría que ser verdad sobre el mercado para que valga la pena invertir en esto?\n4. ¿Cómo reformularías el reto para hacerlo más audaz y más concreto al mismo tiempo?\n\nDame la versión mejorada del reto en el mismo formato ¿Cómo podríamos...?",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "definicion-retos": {
  "tipo": "agente",
  "titulo": "Definición de retos (Scoping Canvas)",
  "nota": "System prompt.",
  "texto": "# Rol\nEres el copiloto de definición de retos de [EMPRESA]. Conviertes oportunidades, necesidades o problemas en retos bien encuadrados con el Scoping Canvas de Distilled, listos para idear.\n\n# Contexto\nUsa la ficha de contexto, el mapa de fuerzas y el portafolio por horizontes cargados en el proyecto.\n\n# Las seis preguntas del Scoping Canvas\n1. Oportunidad, necesidad o problema: la situación de partida y por qué vale la pena.\n2. Objetivo SMART: específico, medible, alcanzable, relevante y con plazo.\n3. ¿Cómo podríamos…?: el objetivo reformulado como pregunta abierta.\n4. Antecedentes: contexto, qué se ha intentado y cómo lo han resuelto otros.\n5. Segmento / público objetivo: para quién es y a quién afecta.\n6. Resultados esperados: qué cambia si se resuelve y cómo se nota.\n\n# Cómo trabajas\n1. Pide el punto de partida si no lo tienes.\n2. Completa las seis preguntas en orden y pregunta lo que falte (máximo 3 preguntas).\n3. Evalúa el \"¿Cómo podríamos…?\" en claridad, apertura, foco y coherencia (1 a 5) y mejóralo si es necesario.\n4. Cierra con: listo, refinar o dividir.\n\n# Límites\n- No inventas datos ni propones soluciones o prototipos.\n- Separa HECHOS, INFERENCIAS e HIPÓTESIS.\n- El equipo es dueño del reto.",
  "archivo": "prompts/04-retos.md",
  "modulo": "04-retos"
 },
 "reconectar-reto": {
  "tipo": "prompt",
  "titulo": "Reconecta con el reto",
  "nota": "Cualquier modelo. Úsalo al iniciar cada sesión de trabajo.",
  "texto": "Este es el resumen de lo trabajado hasta ahora:\n\n[PEGA EL RESUMEN: FICHA DE CONTEXTO, OPORTUNIDAD ELEGIDA Y SCOPING CANVAS]\n\n1. Resume en 5 líneas el reto y para quién es.\n2. Recuérdanos los 3 supuestos más importantes que aún no hemos verificado.\n3. Haznos 2 preguntas para confirmar que seguimos de acuerdo con el reto antes de idear.\n\nNo propongas soluciones todavía.",
  "archivo": "prompts/05-ideacion-concepto.md",
  "modulo": "05-ideacion-concepto"
 },
 "ampliar-ideas": {
  "tipo": "prompt",
  "titulo": "Amplía las ideas del equipo",
  "nota": "Cualquier modelo. Primero idea el equipo sin IA (10 minutos, 5 ideas por persona).",
  "texto": "Contexto de la empresa: [PEGA LA FICHA DE CONTEXTO]\nReto: [PEGA EL \"¿CÓMO PODRÍAMOS…?\"]\nIdeas del equipo: [PEGA LA LISTA DE IDEAS]\n\n1. Agrupa nuestras ideas en 4 a 6 temas.\n2. Propón 15 ideas nuevas que no se parezcan a las nuestras, desde estos ángulos:\n   - Otra industria que ya resolvió algo parecido\n   - Una tecnología emergente (incluida la IA)\n   - Un modelo de negocio distinto (suscripción, plataforma, servicio, pago por resultado)\n   - Una versión extrema: 10 veces más barata o 10 veces mejor\n3. Propón 5 combinaciones entre nuestras ideas y las tuyas.\n\nCada idea en una línea: nombre corto + qué es. No evalúes todavía.",
  "archivo": "prompts/05-ideacion-concepto.md",
  "modulo": "05-ideacion-concepto"
 },
 "viabilidad-factibilidad": {
  "tipo": "prompt",
  "titulo": "Analiza viabilidad y factibilidad",
  "nota": "Cualquier modelo. Alimenta la herramienta de matriz del curso.",
  "texto": "Contexto de la empresa: [PEGA LA FICHA DE CONTEXTO]\nReto: [PEGA EL \"¿CÓMO PODRÍAMOS…?\"]\nIdeas: [PEGA LA LISTA DE IDEAS]\n\nEvalúa cada idea de 1 a 5 en:\n- Viabilidad: ¿tiene sentido para el cliente y para el negocio?\n- Factibilidad: ¿podemos construirla con nuestras capacidades actuales o alcanzables?\n\nEntrega una tabla con: idea | viabilidad | factibilidad | cuadrante (Ganadora, Apuesta, Potenciar o Descartar) | justificación en una línea.\n\nReglas:\n- Justifica cada calificación con algo de nuestro contexto, no con generalidades.\n- Si no tienes información para calificar, márcalo como supuesto.\n- Al final, recomienda las 3 a 5 ideas ganadoras. La decisión es nuestra.",
  "archivo": "prompts/05-ideacion-concepto.md",
  "modulo": "05-ideacion-concepto"
 },
 "agrupar-concepto": {
  "tipo": "prompt",
  "titulo": "Agrupa y elige el concepto",
  "nota": "Cualquier modelo.",
  "texto": "Contexto de la empresa: [PEGA LA FICHA DE CONTEXTO]\nReto: [PEGA EL \"¿CÓMO PODRÍAMOS…?\"]\nIdeas ganadoras: [PEGA LAS 3 A 5 IDEAS CON SU CALIFICACIÓN]\n\n1. Propón 2 o 3 conceptos que combinen ideas complementarias. Para cada uno: nombre, qué ideas combina y qué es en una frase.\n2. Evalúa cada concepto de 1 a 5 en viabilidad y factibilidad, con una línea de justificación.\n3. Recomienda uno y explica por qué en 3 líneas.\n\nLa decisión final es nuestra.",
  "archivo": "prompts/05-ideacion-concepto.md",
  "modulo": "05-ideacion-concepto"
 },
 "ficha-concepto": {
  "tipo": "prompt",
  "titulo": "Completa la ficha de concepto",
  "nota": "Cualquier modelo.",
  "texto": "Contexto de la empresa: [PEGA LA FICHA DE CONTEXTO]\nReto: [PEGA EL \"¿CÓMO PODRÍAMOS…?\"]\nConcepto elegido: [DESCRIPCIÓN DEL CONCEPTO]\n\nCompleta la ficha de concepto con estos 9 campos:\n1. Nombre y frase\n2. Para quién\n3. Problema o necesidad\n4. Cómo funciona (3 a 5 pasos)\n5. Valor para el cliente\n6. Valor para la empresa\n7. Por qué ahora (relaciónalo con una fuerza del Zoom Out)\n8. Por qué nosotros\n9. Supuestos críticos (3 a 5, ordenados del más riesgoso al menos riesgoso)\n\nReglas:\n- Máximo 2 líneas por campo.\n- Si un campo depende de información que no tienes, márcalo como supuesto.\n- Al final, señala el campo más débil y cómo fortalecerlo.",
  "archivo": "prompts/05-ideacion-concepto.md",
  "modulo": "05-ideacion-concepto"
 },
 "sparring-creativo": {
  "tipo": "agente",
  "titulo": "Sparring creativo",
  "nota": "System prompt.",
  "texto": "# Rol\nEres el sparring creativo de [EMPRESA]. Ayudas a un equipo a generar y analizar ideas para responder un reto definido con el Scoping Canvas.\n\n# Contexto\nUsa la ficha de contexto y el Scoping Canvas cargados en el proyecto. Si no existen, pídelos antes de empezar.\n\n# Cómo trabajas\n1. Primero pide las ideas del equipo. No generas ideas antes de verlas.\n2. Amplías con ideas nuevas desde otras industrias, tecnologías emergentes, modelos de negocio distintos y versiones extremas.\n3. Separas la generación del análisis: mientras se idea, no juzgas.\n4. Analizas cada idea de 1 a 5 en viabilidad (sentido para cliente y negocio) y factibilidad (capacidad de construirla).\n5. Ubicas las ideas en la matriz: Ganadora, Apuesta, Potenciar o Descartar.\n6. Cierras con las 3 a 5 ideas recomendadas y el siguiente paso.\n\n# Límites\n- No inventas datos, cifras ni casos. Si citas un ejemplo de otra industria y no estás seguro, lo dices.\n- Separa HECHOS, INFERENCIAS e HIPÓTESIS.\n- Tú propones, el equipo decide.",
  "archivo": "prompts/05-ideacion-concepto.md",
  "modulo": "05-ideacion-concepto"
 },
 "arquitecto-conceptos": {
  "tipo": "agente",
  "titulo": "Arquitecto de conceptos",
  "nota": "System prompt.",
  "texto": "# Rol\nEres el arquitecto de conceptos de [EMPRESA]. Conviertes ideas ganadoras en un concepto fuerte, documentado en una ficha de concepto lista para prototipar y probar.\n\n# Contexto\nUsa la ficha de contexto, el mapa de fuerzas, el Scoping Canvas y las ideas analizadas cargadas en el proyecto.\n\n# Cómo trabajas\n1. Agrupas ideas complementarias en 2 o 3 conceptos posibles.\n2. Evalúas cada uno en viabilidad y factibilidad (1 a 5) y recomiendas uno.\n3. Completas la ficha de concepto: nombre y frase, para quién, problema o necesidad, cómo funciona, valor para el cliente, valor para la empresa, por qué ahora, por qué nosotros y supuestos críticos.\n4. Ordenas los supuestos críticos del más riesgoso al menos riesgoso.\n5. Señalas el campo más débil y cómo fortalecerlo.\n\n# Límites\n- No inventas datos de mercado ni cifras. Lo que no sabes es supuesto.\n- Separa HECHOS, INFERENCIAS e HIPÓTESIS.\n- El equipo elige el concepto.",
  "archivo": "prompts/05-ideacion-concepto.md",
  "modulo": "05-ideacion-concepto"
 },
 "supuesto-asesino": {
  "tipo": "prompt",
  "titulo": "Mapa de supuestos: la IA como socio de Venture Capital",
  "nota": "Cualquier modelo. El prompt más poderoso del recorrido.",
  "texto": "Somos un equipo de una empresa establecida y estamos evaluando este reto / concepto:\n\n[RETO O FICHA DE CONCEPTO]\n\nActúa como un socio de un fondo de Venture Capital que tiene que decidir si invertir en esto. Tu trabajo es destruir nuestros supuestos antes de que el mercado lo haga.\n\nIdentifica los 6 supuestos más críticos que tendrían que ser verdad para que esto sea exitoso. Clasifícalos en deseabilidad (¿lo quieren?), viabilidad (¿genera valor para el negocio?) o factibilidad (¿podemos hacerlo?). Para cada supuesto:\n— Nombre del supuesto (máx. 8 palabras)\n— Por qué es crítico: si falla, ¿qué pasa?\n— Nivel de certeza: Evidencia / Supuesto / Desconocido\n— Señala cuál es el SUPUESTO ASESINO: el más crítico Y el menos validado de todos\n\nAl final, dime en una línea: ¿qué es lo primero que harías para validar o descartar esto en menos de 4 semanas y con un presupuesto mínimo?",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "elegir-prototipo": {
  "tipo": "prompt",
  "titulo": "Elige el supuesto y el tipo de prototipo",
  "nota": "Cualquier modelo.",
  "texto": "Ficha de concepto: [PEGA LA FICHA DE CONCEPTO]\n\n1. Ordena los supuestos críticos según dos criterios: qué tan importante es para que el concepto funcione y qué tan poca evidencia tenemos. Recomienda el más riesgoso.\n2. Para ese supuesto, recomienda el tipo de prototipo más simple entre: storyboard, landing page, mockup de pantallas, simulación con IA o Mago de Oz. Explica por qué en 2 líneas.\n3. Describe qué debe incluir el prototipo para probar ese supuesto (máximo 5 elementos).",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "construir-prototipo": {
  "tipo": "prompt",
  "titulo": "Construye el prototipo (landing o app)",
  "nota": "Para Lovable, v0, Gamma, Claude (artifacts) u otra herramienta generativa.",
  "texto": "Crea una [LANDING PAGE / APP DE 3 PANTALLAS] para validar este concepto:\n\nNombre: [NOMBRE]\nQué es: [FRASE DEL CONCEPTO]\nPara quién: [SEGMENTO]\nProblema que resuelve: [PROBLEMA]\nCómo funciona: [3 A 5 PASOS]\nSupuesto que queremos probar: [SUPUESTO]\n\nIncluye:\n- Un titular claro con la propuesta de valor\n- 3 beneficios concretos para el cliente\n- Una explicación visual de cómo funciona\n- Un llamado a la acción que permita medir el interés (ej.: \"Quiero probarlo\", formulario de registro)\n\nEstilo: limpio, profesional, en español. No uses datos ni testimonios inventados.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "storyboard": {
  "tipo": "prompt",
  "titulo": "Crea un storyboard de 6 escenas",
  "nota": "Cualquier modelo con generación de imágenes.",
  "texto": "Ficha de concepto: [PEGA LA FICHA DE CONCEPTO]\n\nCrea un storyboard de 6 escenas que cuente la experiencia de un cliente con este concepto:\n1. Situación inicial y problema\n2. Momento en que descubre la solución\n3. Primer uso\n4. Momento de valor (\"ajá\")\n5. Resultado\n6. Qué hace después (vuelve, recomienda, paga)\n\nPara cada escena: título, descripción de 2 líneas y una instrucción para generar la imagen en estilo ilustración simple.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "simulacion-ia": {
  "tipo": "prompt",
  "titulo": "Simula el servicio con un agente (prototipo conversacional)",
  "nota": "Para un Proyecto de Claude, GPT o Gem que actúa como el servicio.",
  "texto": "Vas a simular el servicio [NOMBRE DEL CONCEPTO] para probarlo con clientes reales en una conversación.\n\nQué es: [FRASE DEL CONCEPTO]\nPara quién: [SEGMENTO]\nQué entrega en cada interacción: [ENTREGABLE: recomendación, diagnóstico, plan…]\n\nReglas de la simulación:\n1. Saluda y explica en 2 líneas qué puedes hacer.\n2. Haz máximo 3 preguntas para entender la situación del usuario.\n3. Entrega el resultado en el formato [FORMATO].\n4. Al final pregunta: \"¿Qué tan útil fue esto de 1 a 5 y qué te faltó?\" y \"¿Pagarías por esto? ¿Cuánto?\".\n5. No prometas resultados, no des asesoría legal, médica ni financiera y aclara que es un prototipo.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "experimentos": {
  "tipo": "prompt",
  "titulo": "Diseña 3 experimentos de menor a mayor esfuerzo",
  "nota": "Cualquier modelo.",
  "texto": "Nuestro supuesto asesino es: [SUPUESTO]\n\nDiseña 3 experimentos posibles para validarlo, de menor a mayor inversión de tiempo y dinero.\n\nPara cada experimento usa este formato:\n— Nombre del experimento\n— Qué hacemos exactamente (acción concreta, no genérica)\n— Con quién (perfil específico de persona o segmento a contactar)\n— En cuánto tiempo es ejecutable desde cero\n— Criterio de éxito: ¿qué resultado confirma que el supuesto ES verdad?\n— Criterio de fracaso: ¿qué resultado nos dice que debemos pivotar o detener?\n\nEl experimento 1 debe ser ejecutable esta semana, sin presupuesto.\nEl experimento 3 puede tomar hasta 4 semanas y un presupuesto acotado: [PRESUPUESTO].\n\nSé muy concreto. Nada de \"hacer entrevistas\": dime exactamente a quién, qué pregunta clave y cómo mido la respuesta. Prioriza medir comportamiento (lo que la gente hace) sobre opinión.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "test-card": {
  "tipo": "prompt",
  "titulo": "Escribe la Test Card",
  "nota": "Cualquier modelo. Formato de Strategyzer.",
  "texto": "Ficha de concepto: [PEGA LA FICHA DE CONCEPTO]\nPrototipo: [DESCRIBE EL PROTOTIPO]\nSupuesto a probar: [SUPUESTO]\n\nEscribe una Test Card:\n- Creemos que… (el supuesto, en una frase concreta)\n- Para verificarlo, vamos a… (el experimento usando el prototipo)\n- Y mediremos… (una métrica observable)\n- Estamos en lo correcto si… (un umbral numérico y un plazo)\n\nAgrega: costo estimado (bajo, medio o alto), tiempo para obtener datos y nivel de confianza de la evidencia (bajo, medio o alto). Todo umbral es provisional y lo aprueba el equipo.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "revisar-test-card": {
  "tipo": "prompt",
  "titulo": "Revisa la Test Card",
  "nota": "Cualquier modelo.",
  "texto": "Esta es nuestra Test Card: [PEGA LA TEST CARD]\n\nRevísala con estas preguntas:\n1. ¿El supuesto es uno solo y es concreto?\n2. ¿El experimento prueba ese supuesto o algo distinto?\n3. ¿La métrica mide comportamiento real (lo que la gente hace) y no solo opinión?\n4. ¿El criterio de éxito tiene número y plazo?\n5. ¿Hay un criterio de fracaso explícito?\n\nPara cada punto débil, propón una versión mejorada.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "learning-card": {
  "tipo": "prompt",
  "titulo": "Completa la Learning Card",
  "nota": "Cualquier modelo, después de la prueba.",
  "texto": "Test Card: [PEGA LA TEST CARD]\nResultados de la prueba: [PEGA DATOS Y OBSERVACIONES]\n\nCompleta la Learning Card:\n- Creíamos que…\n- Observamos…\n- De esto aprendimos que…\n- Por lo tanto, vamos a… (seguir, ajustar o detener, con el siguiente paso)\n\nReglas:\n- Separa lo que muestran los datos de lo que interpretamos.\n- Si la evidencia es débil, dilo y propón la siguiente prueba.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "disenador-experimentos": {
  "tipo": "agente",
  "titulo": "Diseñador de experimentos",
  "nota": "System prompt.",
  "texto": "# Rol\nEres el diseñador de experimentos de [EMPRESA]. Conviertes supuestos críticos en pruebas claras usando la Test Card y la Learning Card.\n\n# Contexto\nUsa la ficha de concepto y la descripción del prototipo cargadas en el proyecto.\n\n# Cómo trabajas\n1. Tomas un supuesto a la vez, empezando por el más riesgoso (supuesto asesino).\n2. Escribes la Test Card: Creemos que… / Para verificarlo, vamos a… / Y mediremos… / Estamos en lo correcto si…\n3. Verificas que la métrica mida comportamiento real y que el criterio tenga número, plazo y criterio de fracaso.\n4. Estimas costo, tiempo y nivel de confianza de la evidencia.\n5. Después de la prueba, completas la Learning Card: Creíamos que… / Observamos… / De esto aprendimos que… / Por lo tanto, vamos a…\n6. Cierras con una decisión recomendada: seguir, ajustar o detener.\n\n# Límites\n- No inventas resultados ni interpretas datos que no existen.\n- Separa HECHOS, INFERENCIAS e HIPÓTESIS.\n- El equipo toma la decisión final.",
  "archivo": "prompts/06-prototipo-experimento.md",
  "modulo": "06-prototipo-experimento"
 },
 "nivel-1": {
  "tipo": "prompt",
  "titulo": "Nivel 1 — Responder y mejorar",
  "nota": "Cualquier modelo. La IA te entrevista primero; responde y luego elige.",
  "texto": "Nivel 1 — Responder y mejorar. Acompáñame con lenguaje sencillo y práctico. Definiciones: crear valor es elegir a qué clientes ayudar y qué ofrecerles; entregar valor incluye comunicación, canales, atención y fidelización; capturar valor se refiere a fuentes de ingresos y formas de cobrar. No confundas ahorrar costos con crear ingresos.\n\nEmpieza con una entrevista breve, no con propuestas. En tu primera respuesta hazme hasta tres preguntas numeradas sobre un problema reciente: qué ocurrió y cuándo, a quién afectó y qué evidencia tengo, y qué hicimos para contener el daño y qué límites (tiempo, personas, presupuesto) debemos respetar. Detente y espera mis respuestas.\n\nDespués distingue contención inmediata de mejora nueva. Propón tres cambios pequeños que reduzcan el impacto sin trasladarlo a otra persona o etapa. Para cada uno indica qué valor protege y una prueba de siete días. Recomienda una opción por impacto y esfuerzo. No llames innovación al simple restablecimiento de lo habitual. Máximo 220 palabras; pídeme elegir y espera.\n\nSolo entonces construye una ficha breve: oportunidad, persona y evidencia, cambio en crear/entregar/capturar valor, hipótesis, prueba, responsable, fechas, límite de recursos, indicador, umbral y riesgo. Marca lo faltante como \"por acordar\" y los umbrales como provisionales. No solicites datos personales ni confidenciales; no inventes cifras.",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "nivel-2": {
  "tipo": "prompt",
  "titulo": "Nivel 2 — Prevenir y rediseñar el sistema",
  "nota": "Cualquier modelo.",
  "texto": "Nivel 2 — Prevenir y rediseñar el sistema. Usa las mismas definiciones de crear, entregar y capturar valor. Empieza entrevistándome: hasta tres preguntas numeradas sobre 1) qué problema se repite, con qué frecuencia y qué evidencia hay; 2) cuáles son los pasos del proceso y dónde aparece; 3) qué reglas, información, capacidad o incentivos podrían influir y qué límites debemos respetar. Detente y espera.\n\nDespués propón hasta tres causas posibles, sin presentarlas como causas raíz demostradas, e indica qué dato permitiría confirmar o refutar cada una. Dibuja en una línea con flechas el ciclo que podría mantener el problema, sin culpar personas. Propón tres intervenciones preventivas y recomienda una prueba de dos semanas con un indicador de recurrencia y otro de efectos negativos en otra etapa. Máximo 250 palabras; pídeme elegir hipótesis e intervención y espera.\n\nLuego prepara la ficha breve (oportunidad, evidencia, cambio de valor, hipótesis, prueba, responsable, fechas, recursos, indicadores, umbral, riesgo). No des la causa por validada por mi elección. Marca vacíos como \"por acordar\".",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "nivel-3": {
  "tipo": "prompt",
  "titulo": "Nivel 3 — Expandir y crear nuevas ofertas",
  "nota": "Cualquier modelo.",
  "texto": "Nivel 3 — Expandir y crear nuevas ofertas. Usa las mismas definiciones de crear, entregar y capturar valor. Comienza con una entrevista: hasta tres preguntas numeradas sobre 1) nuestros activos, capacidades y capacidad disponible; 2) clientes y necesidades poco atendidas que hemos observado; 3) ofertas y canales actuales, disposición a pagar conocida y cuánto tiempo o dinero podemos dedicar a una prueba. Detente y espera; no propongas todavía.\n\nDespués propón tres oportunidades: una mejor oferta al cliente actual, una nueva solución relacionada y una adyacencia de cliente o canal. Explica el beneficio, qué aprovechamos, cómo se entrega y quién pagaría por qué. Distingue innovación de sostenimiento de expansión adyacente. Recomienda una opción y una prueba pequeña de demanda antes de invertir, con costo limitado y una señal observable de compromiso del cliente (pedido, reserva, preventa). Máximo 250 palabras; pídeme elegir y espera.\n\nLuego construye la ficha breve. No inventes demanda ni cifras: marca lo desconocido como \"por validar\".",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "nivel-4": {
  "tipo": "prompt",
  "titulo": "Nivel 4 — Reinventar y explorar potencial disruptivo",
  "nota": "Cualquier modelo.",
  "texto": "Nivel 4 — Reinventar y explorar potencial disruptivo. Usa las mismas definiciones de crear, entregar y capturar valor. Empieza entrevistándome: hasta tres preguntas numeradas para identificar 1) una regla o supuesto del que hoy depende el negocio; 2) personas que no acceden o reciben más de lo que necesitan, sus barreras de costo, habilidad, tiempo o acceso y la evidencia disponible; 3) qué recursos y límites tenemos para explorar sin abandonar el negocio actual. Detente y espera.\n\nDespués propón tres alternativas que cambien al menos dos elementos entre cliente, oferta, entrega e ingresos. Explica qué práctica podría quedar obsoleta, cómo se sostendría y qué capacidad nueva exigiría cada una. Evalúa si hay una posible entrada por no consumo o segmento bajo con más simplicidad, acceso o asequibilidad; sin evidencia suficiente, habla de \"potencial disruptivo por comprobar\", no de disrupción demostrada. Recomienda una exploración de 30 días con entrevistas y una prueba manual segura. Máximo 260 palabras; pídeme elegir y espera.\n\nLuego prepara la ficha breve con riesgo y protección. Marca vacíos como \"por acordar\".",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "hoja-de-ruta": {
  "tipo": "prompt",
  "titulo": "De tus oportunidades a una hoja de ruta 3 · 6 · 12 meses",
  "nota": "Cualquier modelo. Consolida niveles y horizontes.",
  "texto": "Ayúdame a priorizar mis oportunidades de innovación y construir una hoja de ruta realista a 3 meses, 6 meses y 1 año. Trabaja con mis oportunidades, sin generar otras salvo que te lo pida.\n\nMARCO\nLos niveles describen el tipo de cambio: N1 responde a problemas ocurridos; N2 previene su repetición cambiando la forma de trabajar; N3 desarrolla nuevas ofertas, clientes o canales relacionados; N4 explora otra lógica de negocio. Los horizontes describen el papel: H1 fortalece el negocio actual; H2 desarrolla fuentes de crecimiento aún no consolidadas; H3 explora modelos futuros inciertos. No equipares nivel con horizonte ni H1/H2/H3 con 3/6/12 meses.\n\n1. ENTREVÍSTAME (solo tres preguntas): 1) ¿cuáles son las oportunidades de N1 a N4?; 2) ¿cuánto tardamos en vender, probar una oferta y recuperar una inversión?; 3) ¿desde qué fecha empezamos y con qué personas, horas y presupuesto contamos? Detente y espera.\n\n2. CONFIGURA Y PRIORIZA: propón un propósito y un rango temporal orientativo para cada horizonte en mi negocio. Ordena las oportunidades dentro de cada nivel (necesidad, evidencia, urgencia, beneficio, esfuerzo, riesgos, dependencias) con prioridad alta, media o baja. Recomienda máximo tres oportunidades activas; deja las demás en reserva con condición para retomarlas. Pídeme confirmar y espera.\n\n3. CONSOLIDA: tabla con oportunidad / nivel / horizonte; responsable y primera acción en 7 días; hito a 3 meses; hito a 6 meses; resultado y decisión al año; indicador y criterio para seguir, ajustar o detener; límite de horas y dinero. Agrega oportunidades en reserva, un primer paso en 48 horas y una revisión mensual. En H3 mide aprendizaje antes que ventas. Máximo 600 palabras.\n\nNo inventes cifras ni resultados; todo umbral es provisional y sujeto a mi aprobación.",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "revision-portafolio": {
  "tipo": "prompt",
  "titulo": "Revisión mensual del portafolio de innovación",
  "nota": "Cualquier modelo. Úsalo con la herramienta \"Tablero de portafolio\" (Excel) del curso.",
  "texto": "Actúa como secretario técnico del comité de innovación de [EMPRESA]. Este es el estado del portafolio este mes:\n\n[PEGA LA TABLA: iniciativa | horizonte | etapa (exploración, validación, escalamiento) | experimento en curso | evidencia nueva | horas y dinero consumidos | responsable]\n\nPrepara la revisión mensual:\n1. Balance del portafolio por horizonte (cantidad e inversión) y comentario sobre si refleja la estrategia: [PROPORCIÓN OBJETIVO, ej. 70/20/10].\n2. Para cada iniciativa: qué aprendimos, nivel de evidencia (bajo, medio, alto) y decisión sugerida: seguir, ajustar, pivotar, escalar o detener, con una línea de argumento.\n3. Iniciativas sin evidencia nueva en 60 días (alerta de \"zombis\").\n4. Tres decisiones que el comité debe tomar hoy.\n5. Métricas de aprendizaje: experimentos cerrados, tiempo promedio de ciclo y supuestos validados o descartados.\n\nNo inventes datos. Si falta información, señálalo. El comité decide.",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "pitch-60": {
  "tipo": "prompt",
  "titulo": "Arma el pitch de 60 segundos",
  "nota": "Cualquier modelo.",
  "texto": "Ficha de concepto: [PEGA LA FICHA]\nTest Card: [PEGA LA TEST CARD]\n\nEscribe un pitch de 60 segundos con esta estructura:\n1. Fuerza (10 s): qué está cambiando en el entorno\n2. Reto (10 s): el \"¿Cómo podríamos…?\"\n3. Concepto (15 s): qué es y para quién\n4. Prueba (15 s): qué vamos a probar y cómo sabremos si funciona\n5. Pedido (10 s): qué necesitamos (recursos, aliados, permisos)\n\nLenguaje simple, sin tecnicismos. Máximo 150 palabras.",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "plan-30-dias": {
  "tipo": "prompt",
  "titulo": "Plan de 30 días",
  "nota": "Cualquier modelo.",
  "texto": "Test Card: [PEGA LA TEST CARD]\nEquipo y tiempo disponible: [PERSONAS Y HORAS POR SEMANA]\n\nArma un plan de 30 días para correr la prueba:\n- Semana 1: preparar el prototipo y el experimento\n- Semanas 2 y 3: correr la prueba y recoger datos\n- Semana 4: completar la Learning Card y decidir\n\nPara cada semana: tareas, responsable sugerido y entregable. Señala los 3 riesgos principales del plan y cómo mitigarlos.",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 },
 "estratega-horizontes": {
  "tipo": "agente",
  "titulo": "Estratega de horizontes y portafolio",
  "nota": "System prompt.",
  "texto": "# Rol\nEres el Estratega de Portafolio de [EMPRESA]. Ayudas a priorizar oportunidades con los cuatro niveles de innovación y los tres horizontes de crecimiento, y a sostener una hoja de ruta revisada mensualmente.\n\n# Contexto\nUsa la ficha de contexto, la lista de oportunidades y el tablero de portafolio cargados en el proyecto. Si faltan, pídelos.\n\n# Marco\n- Niveles (tipo de cambio): N1 responder y mejorar · N2 prevenir y rediseñar · N3 expandir y crear · N4 reinventar.\n- Horizontes (papel en el futuro): H1 fortalecer el core · H2 expandir a lo adyacente · H3 crear lo nuevo.\n- Un nivel no determina automáticamente un horizonte.\n\n# Proceso\n1. Asigna nivel y horizonte a cada oportunidad con una justificación de una línea.\n2. Revisa el balance y advierte si está cargado a un solo horizonte.\n3. Recomienda máximo tres iniciativas activas según recursos.\n4. Construye hitos a 3, 6 y 12 meses con criterios para seguir, ajustar o detener.\n5. En las revisiones mensuales, compara evidencia nueva contra los criterios y sugiere decisiones.\n\n# Reglas\n- Separa HECHOS, INFERENCIAS y SUPUESTOS. No inventas cifras.\n- En H3 mides aprendizaje antes que ventas.\n- El equipo decide; tú das argumentos.",
  "archivo": "prompts/07-portafolio-y-sistema.md",
  "modulo": "07-portafolio-y-sistema"
 }
};
