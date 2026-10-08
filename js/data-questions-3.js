/* ==========================================================
   PMP Practice Lab — Question database part 3
   Adds 30+ more questions to reach 200+
   ========================================================== */
(function (global) {
  'use strict';

  const Q = (q) => ({ es: q.es, en: q.en });
  const QUESTIONS = global.QUESTIONS || [];

  function mcq(id, opts) {
    return Object.assign({
      id, type: 'mcq', domain: 'process', difficulty: 'medium',
      approach: 'hybrid', topic: 'general', tags: []
    }, opts);
  }

  // === People domain additional (p-051 to p-060) ===
  QUESTIONS.push(mcq('p-051', {domain: 'people', topic: 'servant', difficulty: 'hard',
    question: Q({es: 'Un equipo se queja de que el PM siempre toma las decisiones técnicas. ¿Qué necesita el PM entender?', en: 'A team complains that the PM always makes technical decisions. What does the PM need to understand?'}),
    options: [
      Q({es: 'Servant leadership: empoderar al equipo y dejar las decisiones técnicas a ellos.', en: 'Servant leadership: empower the team and leave technical decisions to them.'}),
      Q({es: 'El PM debe tomar todas las decisiones.', en: 'The PM must make all decisions.'}),
      Q({es: 'El equipo debe ser despedido.', en: 'The team must be fired.'}),
      Q({es: 'El PM debe ignorar al equipo.', en: 'The PM must ignore the team.'})
    ],
    correct: 0,
    explanation: Q({es: 'Servant leadership: el PM facilita, no controla decisiones técnicas. Empoderar al equipo.', en: 'Servant leadership: PM facilitates, does not control technical decisions. Empower the team.'})
  }));

  QUESTIONS.push(mcq('p-052', {domain: 'people', topic: 'EI', difficulty: 'medium',
    question: Q({es: 'Goleman describe 4 dominios de IE. ¿Cuál es la base sobre la que se construyen los demás?', en: 'Goleman describes 4 EI domains. Which is the foundation for the others?'}),
    options: [
      Q({es: 'Self-awareness (autoconciencia).', en: 'Self-awareness.'}),
      Q({es: 'Self-management.', en: 'Self-management.'}),
      Q({es: 'Social awareness.', en: 'Social awareness.'}),
      Q({es: 'Relationship management.', en: 'Relationship management.'})
    ],
    correct: 0,
    explanation: Q({es: 'Self-awareness es la base: reconocer tus emociones, fortalezas, debilidades.', en: 'Self-awareness is the foundation: recognize your emotions, strengths, weaknesses.'})
  }));

  QUESTIONS.push(mcq('p-053', {domain: 'people', topic: 'leadership', difficulty: 'hard',
    question: Q({es: 'Tuckman describe un equipo que se forma, entra en conflicto, se norma y se desempeña. ¿Qué etapa es la más difícil para el líder?', en: 'Tuckman describes a team that forms, conflicts, norms and performs. Which stage is hardest for the leader?'}),
    options: [
      Q({es: 'Forming.', en: 'Forming.'}),
      Q({es: 'Storming.', en: 'Storming.'}),
      Q({es: 'Norming.', en: 'Norming.'}),
      Q({es: 'Performing.', en: 'Performing.'})
    ],
    correct: 1,
    explanation: Q({es: 'Storming (conflicto) requiere el máximo liderazgo: confrontar, mediar, no evitar.', en: 'Storming (conflict) requires maximum leadership: confront, mediate, do not avoid.'})
  }));

  QUESTIONS.push(mcq('p-054', {domain: 'people', topic: 'stakeholder', difficulty: 'medium',
    question: Q({es: 'Un stakeholder senior dice "este proyecto nunca debió iniciarse". ¿Cómo manejarlo?', en: 'A senior stakeholder says "this project should never have been started". How to handle?'}),
    options: [
      Q({es: 'Ignorarlo.', en: 'Ignore them.'}),
      Q({es: 'Escuchar activamente, entender sus preocupaciones, presentar datos y opciones, y escalar al sponsor si es necesario.', en: 'Actively listen, understand their concerns, present data and options, and escalate to the sponsor if necessary.'}),
      Q({es: 'Cancelar el proyecto.', en: 'Cancel the project.'}),
      Q({es: 'Enfadarte con él.', en: 'Get angry with them.'})
    ],
    correct: 1,
    explanation: Q({es: 'Empatía + datos + escalación. El PM no cancela unilateralmente; el sponsor decide.', en: 'Empathy + data + escalation. PM does not cancel unilaterally; sponsor decides.'})
  }));

  QUESTIONS.push(mcq('p-055', {domain: 'people', topic: 'team', difficulty: 'easy',
    question: Q({es: '¿Qué documento describe cómo el equipo colaborará (normas, conflictos, decisiones)?', en: 'What document describes how the team will collaborate (norms, conflicts, decisions)?'}),
    options: [
      Q({es: 'Team Charter.', en: 'Team Charter.'}),
      Q({es: 'Project Charter.', en: 'Project Charter.'}),
      Q({es: 'Risk Register.', en: 'Risk Register.'}),
      Q({es: 'Issue Log.', en: 'Issue Log.'})
    ],
    correct: 0,
    explanation: Q({es: 'Team Charter (también llamado Team Agreement o Working Agreement) lo crea el equipo.', en: 'Team Charter (also called Team Agreement or Working Agreement) is created by the team.'})
  }));

  // === Process domain additional (pr-061 to pr-080) ===
  QUESTIONS.push(mcq('pr-061', {domain: 'process', topic: 'WBS', difficulty: 'easy',
    question: Q({es: '¿Qué es el WBS (Work Breakdown Structure)?', en: 'What is the WBS (Work Breakdown Structure)?'}),
    options: [
      Q({es: 'Descomposición jerárquica del trabajo total del equipo en paquetes de trabajo.', en: 'Hierarchical decomposition of the total team work into work packages.'}),
      Q({es: 'Un cronograma del proyecto.', en: 'A project schedule.'}),
      Q({es: 'Un presupuesto.', en: 'A budget.'}),
      Q({es: 'Un organigrama.', en: 'An org chart.'})
    ],
    correct: 0,
    explanation: Q({es: 'WBS = descomposición jerárquica entregable-centrada del trabajo.', en: 'WBS = deliverable-oriented hierarchical decomposition of work.'})
  }));

  QUESTIONS.push(mcq('pr-062', {domain: 'process', topic: 'integration', difficulty: 'easy',
    question: Q({es: '¿Qué es el Project Management Plan?', en: 'What is the Project Management Plan?'}),
    options: [
      Q({es: 'Un documento que integra todos los planes subsidiarios y baselines del proyecto.', en: 'A document that integrates all subsidiary plans and baselines of the project.'}),
      Q({es: 'Un reporte de estado.', en: 'A status report.'}),
      Q({es: 'Una lista de tareas.', en: 'A task list.'}),
      Q({es: 'Un análisis de riesgo.', en: 'A risk analysis.'})
    ],
    correct: 0,
    explanation: Q({es: 'El PMP integra todos los planes subsidiarios (alcance, cronograma, costo, calidad, etc.) y los baselines.', en: 'The PMP integrates all subsidiary plans (scope, schedule, cost, quality, etc.) and baselines.'})
  }));

  QUESTIONS.push(mcq('pr-063', {domain: 'process', topic: 'stakeholder', difficulty: 'medium',
    question: Q({es: '¿Cuál es la diferencia entre Stakeholder Register y Stakeholder Engagement Plan?', en: 'What is the difference between Stakeholder Register and Stakeholder Engagement Plan?'}),
    options: [
      Q({es: 'No hay diferencia.', en: 'No difference.'}),
      Q({es: 'Register = lista de stakeholders. Engagement Plan = estrategia para gestionar su engagement.', en: 'Register = list of stakeholders. Engagement Plan = strategy to manage their engagement.'}),
      Q({es: 'El Register es solo para riesgos.', en: 'The Register is only for risks.'}),
      Q({es: 'El Plan es solo para el PM.', en: 'The Plan is only for the PM.'})
    ],
    correct: 1,
    explanation: Q({es: 'Register identifica; Engagement Plan gestiona la relación.', en: 'Register identifies; Engagement Plan manages the relationship.'})
  }));

  QUESTIONS.push(mcq('pr-064', {domain: 'process', topic: 'scope', difficulty: 'medium',
    question: Q({es: '¿Qué es "Requirements Traceability Matrix"?', en: 'What is a "Requirements Traceability Matrix"?'}),
    options: [
      Q({es: 'Una matriz que vincula cada requisito con su origen y los deliverables que lo satisfacen.', en: 'A matrix that links each requirement with its origin and the deliverables that satisfy it.'}),
      Q({es: 'Una lista de stakeholders.', en: 'A list of stakeholders.'}),
      Q({es: 'Un WBS.', en: 'A WBS.'}),
      Q({es: 'Un risk register.', en: 'A risk register.'})
    ],
    correct: 0,
    explanation: Q({es: 'RTM traza cada requisito: origen, derivación, verificación, deliverables.', en: 'RTM traces each requirement: origin, derivation, verification, deliverables.'})
  }));

  QUESTIONS.push(mcq('pr-065', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'En ágil, ¿qué es la "Definition of Done" (DoD)?', en: 'In agile, what is the "Definition of Done" (DoD)?'}),
    options: [
      Q({es: 'Criterios que debe cumplir un incremento para considerarse completo.', en: 'Criteria that an increment must meet to be considered complete.'}),
      Q({es: 'Una lista de tareas pendientes.', en: 'A list of pending tasks.'}),
      Q({es: 'Un plan de pruebas.', en: 'A test plan.'}),
      Q({es: 'Un risk register.', en: 'A risk register.'})
    ],
    correct: 0,
    explanation: Q({es: 'DoD es compartido por el equipo y se aplica a todos los items del Increment.', en: 'DoD is shared by the team and applies to all Increment items.'})
  }));

  QUESTIONS.push(mcq('pr-066', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: '¿Qué es un "User Story"?', en: 'What is a "User Story"?'}),
    options: [
      Q({es: 'Descripción corta de una funcionalidad desde la perspectiva del usuario. Como [rol], quiero [acción], para [beneficio].', en: 'Short description of a feature from the user perspective. As a [role], I want [action], so that [benefit].'}),
      Q({es: 'Un plan de pruebas.', en: 'A test plan.'}),
      Q({es: 'Un cronograma.', en: 'A schedule.'}),
      Q({es: 'Un risk register.', en: 'A risk register.'})
    ],
    correct: 0,
    explanation: Q({es: 'User Story = formato estándar ágil: rol + acción + beneficio. Se complementa con criterios de aceptación.', en: 'User Story = standard agile format: role + action + benefit. Complemented by acceptance criteria.'})
  }));

  QUESTIONS.push(mcq('pr-067', {domain: 'process', topic: 'quality', difficulty: 'medium',
    question: Q({es: '¿Qué dice el Principio de Pareto?', en: 'What does the Pareto Principle say?'}),
    options: [
      Q({es: '80% de los efectos vienen del 20% de las causas.', en: '80% of effects come from 20% of causes.'}),
      Q({es: '50% de los efectos del 50% de las causas.', en: '50% of effects from 50% of causes.'}),
      Q({es: '20% de los efectos del 80% de las causas.', en: '20% of effects from 80% of causes.'}),
      Q({es: '100% de los efectos del 100% de las causas.', en: '100% of effects from 100% of causes.'})
    ],
    correct: 0,
    explanation: Q({es: 'Pareto (80/20): pocos elementos causan la mayoría del impacto. Útil para priorizar.', en: 'Pareto (80/20): few elements cause most of the impact. Useful for prioritization.'})
  }));

  QUESTIONS.push(mcq('pr-068', {domain: 'process', topic: 'agile', difficulty: 'easy',
    question: Q({es: '¿Qué es el "Daily Stand-up"?', en: 'What is the "Daily Stand-up"?'}),
    options: [
      Q({es: 'Reunión diaria de 15 min: qué hice ayer, qué haré hoy, qué impedimentos tengo.', en: 'Daily 15-min meeting: what I did yesterday, what I will do today, what impediments I have.'}),
      Q({es: 'Reunión semanal larga.', en: 'A long weekly meeting.'}),
      Q({es: 'Reporte de fin de sprint.', en: 'End-of-sprint report.'}),
      Q({es: 'Análisis de riesgo.', en: 'Risk analysis.'})
    ],
    correct: 0,
    explanation: Q({es: 'Daily Stand-up: 15 min, 3 preguntas. Es para sincronizar, no para resolver problemas.', en: 'Daily Stand-up: 15 min, 3 questions. It is for syncing, not for solving problems.'})
  }));

  QUESTIONS.push(mcq('pr-069', {domain: 'process', topic: 'risk', difficulty: 'medium',
    question: Q({es: '¿Qué técnica de identificación de riesgos usa un equipo de expertos anónimos?', en: 'What risk identification technique uses a team of anonymous experts?'}),
    options: [
      Q({es: 'Delphi technique.', en: 'Delphi technique.'}),
      Q({es: 'Brainstorming.', en: 'Brainstorming.'}),
      Q({es: 'SWOT analysis.', en: 'SWOT analysis.'}),
      Q({es: 'Ishikawa.', en: 'Ishikawa.'})
    ],
    correct: 0,
    explanation: Q({es: 'Delphi: expertos anónimos iterativos, sin sesgo de grupo. Útil cuando hay politics.', en: 'Delphi: anonymous iterative experts, without group bias. Useful when there is politics.'})
  }));

  QUESTIONS.push(mcq('pr-070', {domain: 'process', topic: 'agile', difficulty: 'hard',
    question: Q({es: 'En SAFe, ¿qué nivel es el "Essential SAFe"?', en: 'In SAFe, what level is the "Essential SAFe"?'}),
    options: [
      Q({es: 'El nivel más básico con un único Agile Release Train (ART).', en: 'The most basic level with a single Agile Release Train (ART).'}),
      Q({es: 'El nivel más avanzado.', en: 'The most advanced level.'}),
      Q({es: 'Solo para una sola persona.', en: 'Only for a single person.'}),
      Q({es: 'No existe.', en: 'Does not exist.'})
    ],
    correct: 0,
    explanation: Q({es: 'SAFe tiene cuatro configuraciones: Essential, Large Solution, Portfolio y Full. Essential es la configuración más básica.', en: 'SAFe has 4 configurations: Essential, Large Solution, Portfolio, Full. Essential = most basic.'})
  }));

  // === Business environment additional (be-041 to be-055) ===
  QUESTIONS.push(mcq('be-041', {domain: 'business', topic: 'portfolio', difficulty: 'medium',
    question: Q({es: 'Una empresa tiene 100 proyectos en su portafolio. ¿Cuál es la mejor métrica para evaluar la salud del portafolio?', en: 'Company has 100 projects in its portfolio. What is the BEST metric to evaluate portfolio health?'}),
    options: [
      Q({es: 'Índice de alineación estratégica (porcentaje de proyectos alineados con los objetivos estratégicos).', en: 'Strategic alignment index (% of projects aligned with strategic objectives).'}),
      Q({es: 'Número total de proyectos.', en: 'Total number of projects.'}),
      Q({es: 'Cantidad de personas en cada proyecto.', en: 'Number of people in each project.'}),
      Q({es: 'Número de líneas de código.', en: 'Number of lines of code.'})
    ],
    correct: 0,
    explanation: Q({es: 'El portafolio se evalúa según su alineación estratégica, el valor que aporta y el equilibrio de riesgos. El número de proyectos no es suficiente para medir su salud.', en: 'Portfolio is measured by strategic alignment, value, risk balance. The number says nothing.'})
  }));

  QUESTIONS.push(mcq('be-042', {domain: 'business', topic: 'governance', difficulty: 'hard',
    question: Q({es: 'Un governance board toma una decisión que el PM considera técnicamente incorrecta. ¿Qué debe hacer el PM?', en: 'A governance board makes a decision that the PM considers technically incorrect. What should the PM do?'}),
    options: [
      Q({es: 'Ignorar la decisión del board.', en: 'Ignore the board\'s decision.'}),
      Q({es: 'Comunicar su preocupación técnica, presentar datos y opciones, y aceptar la decisión final del board.', en: 'Communicate the technical concern, present data and options, and accept the board\'s final decision.'}),
      Q({es: 'Renunciar al proyecto.', en: 'Quit the project.'}),
      Q({es: 'Filtrar la decisión al equipo para invalidarla.', en: 'Leak the decision to the team to invalidate it.'})
    ],
    correct: 1,
    explanation: Q({es: 'El governance board es accountable. El PM presenta su opinión profesional, pero la decisión final la toma el board.', en: 'The governance board is accountable. PM presents professional opinion, but the board makes the final decision.'})
  }));

  QUESTIONS.push(mcq('be-043', {domain: 'business', topic: 'compliance', difficulty: 'medium',
    question: Q({es: '¿Qué es un "Code of Conduct" en una organización?', en: 'What is a "Code of Conduct" in an organization?'}),
    options: [
      Q({es: 'Documento que describe los principios éticos y normas de comportamiento esperados.', en: 'Document that describes expected ethical principles and behavior standards.'}),
      Q({es: 'Un plan de proyecto.', en: 'A project plan.'}),
      Q({es: 'Una herramienta de gestión de tiempo.', en: 'A time management tool.'}),
      Q({es: 'Un framework de pruebas.', en: 'A testing framework.'})
    ],
    correct: 0,
    explanation: Q({es: 'Code of Conduct = código de conducta. Parte de los OPAs.', en: 'Code of Conduct = code of conduct. Part of OPAs.'})
  }));

  QUESTIONS.push(mcq('be-044', {domain: 'business', topic: 'change', difficulty: 'hard',
    question: Q({es: 'Un proyecto introduce una nueva tecnología que cambia la forma de trabajar del equipo. ¿Qué tipo de cambio es?', en: 'A project introduces a new technology that changes how the team works. What type of change is it?'}),
    options: [
      Q({es: 'Cambio técnico.', en: 'Technical change.'}),
      Q({es: 'Cambio organizacional.', en: 'Organizational change.'}),
      Q({es: 'Cambio climático.', en: 'Climate change.'}),
      Q({es: 'No es un cambio.', en: 'It is not a change.'})
    ],
    correct: 1,
    explanation: Q({es: 'Cuando una nueva tecnología cambia cómo trabaja la gente, es un cambio organizacional.', en: 'When new technology changes how people work, it is an organizational change.'})
  }));

  QUESTIONS.push(mcq('be-045', {domain: 'business', topic: 'value', difficulty: 'medium',
    question: Q({es: 'Un proyecto se completa, pero el equipo de operaciones no sabe cómo mantener el sistema entregado. ¿Qué aspecto del valor falla?', en: 'A project completes, but the operations team does not know how to maintain the delivered system. What value aspect fails?'}),
    options: [
      Q({es: 'Knowledge transfer y soporte post-entrega.', en: 'Knowledge transfer and post-delivery support.'}),
      Q({es: 'La calidad del código.', en: 'Code quality.'}),
      Q({es: 'La velocidad de desarrollo.', en: 'Development speed.'}),
      Q({es: 'La documentación técnica.', en: 'Technical documentation.'})
    ],
    correct: 0,
    explanation: Q({es: 'Knowledge transfer y soporte post-entrega son críticos para benefits realization.', en: 'Knowledge transfer and post-delivery support are critical for benefits realization.'})
  }));

  QUESTIONS.push(mcq('be-046', {domain: 'business', topic: 'ai', difficulty: 'medium',
    question: Q({es: 'Un equipo usa IA para generar código automáticamente. ¿Quién es responsable si el código tiene defectos que afectan al cliente?', en: 'A team uses AI to auto-generate code. Who is responsible if the code has defects that affect the customer?'}),
    options: [
      Q({es: 'El equipo de desarrollo y el PM (responsabilidad humana).', en: 'The development team and PM (human responsibility).'}),
      Q({es: 'El proveedor de IA.', en: 'The AI vendor.'}),
      Q({es: 'El algoritmo de IA.', en: 'The AI algorithm.'}),
      Q({es: 'Nadie, es responsabilidad de la máquina.', en: 'No one, it is the machine\'s responsibility.'})
    ],
    correct: 0,
    explanation: Q({es: 'PMI Code: "Responsibility" se aplica. La IA es una herramienta; la responsabilidad final es humana.', en: 'PMI Code: "Responsibility" applies. AI is a tool; final responsibility is human.'})
  }));

  QUESTIONS.push(mcq('be-047', {domain: 'business', topic: 'compliance', difficulty: 'hard',
    question: Q({es: 'Una empresa de software descubre que su producto almacena datos en una región no permitida por GDPR. ¿Qué es esto?', en: 'A software company discovers its product stores data in a region not allowed by GDPR. What is this?'}),
    options: [
      Q({es: 'Un problema de compliance / regulatory non-conformance.', en: 'A compliance / regulatory non-conformance issue.'}),
      Q({es: 'Un riesgo técnico menor.', en: 'A minor technical risk.'}),
      Q({es: 'Una decisión de diseño.', en: 'A design decision.'}),
      Q({es: 'Un problema de performance.', en: 'A performance issue.'})
    ],
    correct: 0,
    explanation: Q({es: 'Violación de GDPR = no-conformidad regulatoria. Requiere acción correctiva inmediata.', en: 'GDPR violation = regulatory non-conformance. Requires immediate corrective action.'})
  }));

  QUESTIONS.push(mcq('be-048', {domain: 'business', topic: 'pmo', difficulty: 'medium',
    question: Q({es: 'Una PMO quiere mejorar la madurez de gestión de proyectos en la organización. ¿Qué modelo se usa típicamente?', en: 'A PMO wants to improve project management maturity in the organization. What model is typically used?'}),
    options: [
      Q({es: 'OPM3 de PMI.', en: 'PMI OPM3.'}),
      Q({es: 'CMMI solo para software.', en: 'CMMI only for software.'}),
      Q({es: 'ITIL solo para TI.', en: 'ITIL only for IT.'}),
      Q({es: 'No hay modelo.', en: 'There is no model.'})
    ],
    correct: 0,
    explanation: Q({es: 'El modelo OPM3 del PMI mide la madurez de la organización en la gestión de proyectos, programas y portafolios. CMMI se enfoca en la mejora de procesos, e ITIL, en la gestión de servicios de TI.', en: 'PMI OPM3 measures maturity in projects, programs, and portfolio. CMMI is for software. ITIL is for IT service management.'})
  }));

  QUESTIONS.push(mcq('be-049', {domain: 'business', topic: 'strategy', difficulty: 'hard',
    question: Q({es: 'Una empresa quiere entrar a un nuevo mercado geográfico. ¿Qué análisis estratégico debe hacer primero?', en: 'A company wants to enter a new geographic market. What strategic analysis should it do first?'}),
    options: [
      Q({es: 'Análisis de mercado (tamaño, competencia, regulación) y SWOT.', en: 'Market analysis (size, competition, regulation) and SWOT.'}),
      Q({es: 'Comprar el primer proyecto disponible.', en: 'Buy the first available project.'}),
      Q({es: 'Contratar más personal.', en: 'Hire more staff.'}),
      Q({es: 'Hacer un plan de proyecto.', en: 'Make a project plan.'})
    ],
    correct: 0,
    explanation: Q({es: 'Antes de un proyecto, la organización hace análisis estratégico. SWOT, market sizing, regulatory analysis son típicos.', en: 'Before a project, the organization does strategic analysis. SWOT, market sizing, regulatory analysis are typical.'})
  }));

  QUESTIONS.push(mcq('be-050', {domain: 'business', topic: 'value', difficulty: 'medium',
    question: Q({es: 'Un proyecto entregable reduce el tiempo de procesamiento de 10 días a 2 días. ¿Qué tipo de valor genera?', en: 'A deliverable project reduces processing time from 10 days to 2 days. What type of value does it generate?'}),
    options: [
      Q({es: 'Time-to-market / eficiencia operacional.', en: 'Time-to-market / operational efficiency.'}),
      Q({es: 'Valor estético.', en: 'Aesthetic value.'}),
      Q({es: 'Valor intangible sin beneficio.', en: 'Intangible value with no benefit.'}),
      Q({es: 'No genera valor.', en: 'Generates no value.'})
    ],
    correct: 0,
    explanation: Q({es: 'Reducir tiempo = eficiencia operacional, ahorro de costos, mejor time-to-market. Valor tangible medible.', en: 'Reducing time = operational efficiency, cost savings, better time-to-market. Tangible, measurable value.'})
  }));

  // === Special: more cases and another drag-drop, matching ===
  QUESTIONS.push({id: 'pr-dnd-003', type: 'dnd', domain: 'process', topic: 'integration', difficulty: 'medium',
    question: Q({es: 'Ordena los grupos de procesos del PMBOK en su orden lógico:', en: 'Order the PMBOK process groups in their logical order:'}),
    items: [
      Q({es: 'Initiating (iniciación)', en: 'Initiating'}),
      Q({es: 'Planning (planificación)', en: 'Planning'}),
      Q({es: 'Executing (ejecución)', en: 'Executing'}),
      Q({es: 'Monitoring and Controlling (monitoreo y control)', en: 'Monitoring and Controlling'}),
      Q({es: 'Closing (cierre)', en: 'Closing'})
    ],
    correctOrder: [0, 1, 2, 3, 4],
    explanation: Q({es: 'PMBOK 5 process groups. En ágil/iterativo, se superponen; en predictivo, son secuenciales.', en: 'PMBOK 5 process groups. In agile/iterative, they overlap; in predictive, they are sequential.'})
  });

  QUESTIONS.push({id: 'pr-dnd-004', type: 'dnd', domain: 'process', topic: 'lifecycle', difficulty: 'medium',
    question: Q({es: 'Ordena los 6 principios del PMBOK 8ª ed (en orden lógico):', en: 'Order the 6 PMBOK 8th ed principles (in logical order):'}),
    items: [
      Q({es: 'Be an Accountable Leader', en: 'Be an Accountable Leader'}),
      Q({es: 'Build an Empowered Culture', en: 'Build an Empowered Culture'}),
      Q({es: 'Adopt a Holistic View', en: 'Adopt a Holistic View'}),
      Q({es: 'Focus on Value', en: 'Focus on Value'}),
      Q({es: 'Embed Quality', en: 'Embed Quality'}),
      Q({es: 'Integrate Sustainability', en: 'Integrate Sustainability'})
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    explanation: Q({es: 'Los 6 principios en el orden del PMBOK 8ª ed. Cualquier orden lógico también es válido.', en: 'The 6 principles in PMBOK 8th ed order. Any logical order is also valid.'})
  });

  QUESTIONS.push({id: 'p-mr-004', type: 'multi', domain: 'people', topic: 'EI', difficulty: 'hard',
    question: Q({es: '¿Cuáles de los siguientes son los 4 dominios de IE de Goleman? (Selecciona 4)', en: 'Which of the following are Goleman\'s 4 EI domains? (Select 4)'}),
    options: [
      Q({es: 'Self-awareness.', en: 'Self-awareness.'}),
      Q({es: 'Self-management.', en: 'Self-management.'}),
      Q({es: 'Social awareness.', en: 'Social awareness.'}),
      Q({es: 'Relationship management.', en: 'Relationship management.'}),
      Q({es: 'Technical intelligence.', en: 'Technical intelligence.'}),
      Q({es: 'Analytical thinking.', en: 'Analytical thinking.'})
    ],
    correct: [0, 1, 2, 3],
    explanation: Q({es: 'Los 4 dominios de Goleman. Technical y Analytical no son parte del modelo.', en: 'Goleman\'s 4 domains. Technical and Analytical are not part of the model.'})
  });

  QUESTIONS.push({id: 'be-mr-002', type: 'multi', domain: 'business', topic: 'pmo', difficulty: 'hard',
    question: Q({es: '¿Cuáles de los siguientes son tipos de PMO según el PMBOK 8ª ed? (Selecciona 3)', en: 'Which of the following are types of PMO per PMBOK 8th ed? (Select 3)'}),
    options: [
      Q({es: 'Supportive.', en: 'Supportive.'}),
      Q({es: 'Controlling.', en: 'Controlling.'}),
      Q({es: 'Directive.', en: 'Directive.'}),
      Q({es: 'Reactive.', en: 'Reactive.'}),
      Q({es: 'Profit-maximizing.', en: 'Profit-maximizing.'}),
      Q({es: 'Auditing-only.', en: 'Auditing-only.'})
    ],
    correct: [0, 1, 2],
    explanation: Q({es: 'Los 3 tipos principales: Supportive, Controlling, Directive. (Strategic es un nivel evolutivo).', en: 'The 3 main types: Supportive, Controlling, Directive. (Strategic is an evolutionary level).'})
  });

  QUESTIONS.push({id: 'pr-pd-002', type: 'pulldown', domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'Completa: "En Scrum, la [1] es responsable de la duración del sprint y el [2] es responsable del alcance del sprint."', en: 'Complete: "In Scrum, the [1] is responsible for the sprint length and the [2] is responsible for the sprint scope."'}),
    blanks: [
      { options: ['Development team', 'Product Owner', 'Scrum Master'], correct: 'Development team' },
      { options: ['Development team', 'Product Owner', 'Scrum Master'], correct: 'Development team' }
    ],
    explanation: Q({es: 'El Development team decide la duración del sprint (con guía del Scrum Master) y se auto-compromete al alcance.', en: 'The Development team decides sprint length (with SM guidance) and self-commits to scope.'})
  });

  // Final case: Crisis management
  QUESTIONS.push({id: 'case-009', type: 'case', domain: 'people', topic: 'crisis', difficulty: 'hard', approach: 'hybrid',
    scenario: Q({es: 'PROJECT: Crisis de Producción\n\nUn sistema crítico para el cliente está caído. El PM lidera un equipo híbrido (3 desarrolladores + 2 ops + 1 vendor). La comunicación con el cliente está tensa. El equipo está trabajando 14 horas. La calidad del código empieza a caer. El sponsor pide un fix "urgente" sin pasar por change control.'}),
    question: Q({es: 'Pregunta 1/3: ¿Qué hacer primero ante la caída del sistema?', en: 'Question 1/3: What to do first when the system goes down?'}),
    options: [
      Q({es: 'Llamar a todos y empezar a hacer cambios.', en: 'Call everyone and start making changes.'}),
      Q({es: 'Activar el plan de respuesta a incidentes, asignar roles claros (incident commander, communications lead), y comunicar al cliente con frecuencia.', en: 'Activate the incident response plan, assign clear roles (incident commander, communications lead), and communicate with the client frequently.'}),
      Q({es: 'Esperar a ver si se resuelve solo.', en: 'Wait to see if it resolves itself.'}),
      Q({es: 'Culpar al equipo.', en: 'Blame the team.'})
    ],
    correct: 1,
    explanation: Q({es: 'Incident response: roles claros, comunicación frecuente, calm. Las organizaciones maduras tienen planes predefinidos.', en: 'Incident response: clear roles, frequent communication, calm. Mature organizations have predefined plans.'})
  });

  QUESTIONS.push({id: 'case-010', type: 'case', domain: 'people', topic: 'team', difficulty: 'hard', approach: 'hybrid',
    scenario: Q({es: '(Continuación Crisis de Producción)'}),
    question: Q({es: 'Pregunta 2/3: El equipo trabaja 14 horas y la calidad cae. ¿Qué decisión tomar?', en: 'Question 2/3: Team works 14 hours and quality drops. What decision to make?'}),
    options: [
      Q({es: 'Hacer que sigan trabajando más horas.', en: 'Have them continue working more hours.'}),
      Q({es: 'Implementar rotación, asegurar descansos, y hacer pairing para mantener calidad.', en: 'Implement rotation, ensure rest, and do pairing to maintain quality.'}),
      Q({es: 'Despedir al equipo.', en: 'Fire the team.'}),
      Q({es: 'No hacer nada.', en: 'Do nothing.'})
    ],
    correct: 1,
    explanation: Q({es: 'Sustainable pace es principio ágil. Rotación + pairing mantienen calidad sin burnout. Servant leader cuida al equipo.', en: 'Sustainable pace is an agile principle. Rotation + pairing maintain quality without burnout. Servant leader cares for the team.'})
  });

  QUESTIONS.push({id: 'case-011', type: 'case', domain: 'process', topic: 'change', difficulty: 'hard',
    scenario: Q({es: '(Continuación)'}),
    question: Q({es: 'Pregunta 3/3: El sponsor pide un fix "urgente" sin pasar por change control. ¿Qué hacer?', en: 'Question 3/3: Sponsor asks for an "urgent" fix without change control. What to do?'}),
    options: [
      Q({es: 'Aceptar siempre, el sponsor tiene la razón.', en: 'Always accept, the sponsor is always right.'}),
      Q({es: 'Rechazar y hacer change control para todos los cambios, incluso urgentes.', en: 'Refuse and do change control for all changes, even urgent ones.'}),
      Q({es: 'Aceptar el fix urgente, pero documentar inmediatamente en el Change Log y hacer una evaluación post-mortem.', en: 'Accept the urgent fix, but document immediately in the Change Log and do a post-mortem assessment.'}),
      Q({es: 'Escalar al CEO.', en: 'Escalate to the CEO.'})
    ],
    correct: 2,
    explanation: Q({es: 'Perform Integrated Change Control aplica a TODOS los cambios. En crisis, el fix puede ser aprobado retroactivamente, pero debe documentarse. Post-mortem es clave para aprender.', en: 'Perform Integrated Change Control applies to ALL changes. In crisis, the fix can be approved retroactively, but must be documented. Post-mortem is key for learning.'})
  });

  // Final answer: reassign global.QUESTIONS to ensure latest
  global.QUESTIONS = QUESTIONS;

  // Recompute counts
  global.QUESTION_DOMAINS = {
    people: QUESTIONS.filter(q => q.domain === 'people').length,
    process: QUESTIONS.filter(q => q.domain === 'process').length,
    business: QUESTIONS.filter(q => q.domain === 'business').length
  };
  global.QUESTION_TYPES = {
    mcq: QUESTIONS.filter(q => q.type === 'mcq').length,
    multi: QUESTIONS.filter(q => q.type === 'multi').length,
    matching: QUESTIONS.filter(q => q.type === 'matching').length,
    dnd: QUESTIONS.filter(q => q.type === 'dnd').length,
    hotspot: QUESTIONS.filter(q => q.type === 'hotspot').length,
    pulldown: QUESTIONS.filter(q => q.type === 'pulldown').length,
    case: QUESTIONS.filter(q => q.type === 'case').length,
    graphic: QUESTIONS.filter(q => q.type === 'graphic').length
  };

  console.log('Total questions after part 3:', QUESTIONS.length);
})(window);
