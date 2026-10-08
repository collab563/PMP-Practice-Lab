/* ==========================================================
   PMP Practice Lab — Question database
   200+ bilingual PMP-style questions
   Domains: people, process, business
   Types: mcq, multi, matching, dnd, hotspot, pulldown, case, graphic
   Aligned with PMBOK 8th ed and PMI ECO 2026
   ========================================================== */
(function (global) {
  'use strict';

  const Q = (q) => ({ es: q.es, en: q.en });

  const QUESTIONS = [];

  function mcq(id, opts) {
    return Object.assign({
      id, type: 'mcq', domain: 'process', difficulty: 'medium',
      approach: 'hybrid', topic: 'general', tags: []
    }, opts);
  }

  // ========== PEOPLE DOMAIN (33% of exam) ==========
  // Topics: leadership, conflict, emotional intelligence, team building,
  // communication, collaboration, stakeholder engagement

  QUESTIONS.push(mcq('p-001', {
    domain: 'people', topic: 'leadership', difficulty: 'medium',
    question: Q({
      es: 'Un director de proyecto adopta un estilo laissez-faire con un equipo nuevo con poca experiencia ágil. Tras 3 sprints, la calidad es baja y se pierden fechas. ¿Qué debe hacer?',
      en: 'A PM adopts a laissez-faire style with a new team with little agile experience. After 3 sprints, quality is low and sprint dates are missed. What should the PM do?'
    }),
    options: [
      Q({es: 'Mantener laissez-faire y dar más tiempo.', en: 'Keep laissez-faire and give more time.'}),
      Q({es: 'Cambiar a líder servidor: eliminar impedimentos y entrenar.', en: 'Switch to servant leader: remove impediments and coach.'}),
      Q({es: 'Tomar control total del trabajo técnico.', en: 'Take full control of technical work.'}),
      Q({es: 'Reportar al sponsor que el equipo no es competente.', en: 'Report to sponsor that team is not competent.'})
    ],
    correct: 1,
    explanation: Q({es: 'Laissez-faire requiere equipos maduros. Con equipos nuevos, el PM es líder servidor: elimina impedimentos y entrena.', en: 'Laissez-faire requires mature teams. With new teams, PM is servant leader: remove impediments and coach.'})
  }));

  QUESTIONS.push(mcq('p-002', {
    domain: 'people', topic: 'leadership', difficulty: 'medium',
    question: Q({
      es: 'Un miembro senior domina las daily standups. ¿Qué técnica de facilitación aplicar?',
      en: 'A senior member dominates daily standups. Which facilitation technique to apply?'
    }),
    options: [
      Q({es: 'Pedirle que se calle.', en: 'Ask them to be quiet.'}),
      Q({es: 'Round-robin o speaking token para igualar participación.', en: 'Round-robin or speaking token to equalize participation.'}),
      Q({es: 'Eliminarlo de las reuniones.', en: 'Remove them from meetings.'}),
      Q({es: 'Aumentar la duración de las reuniones.', en: 'Increase meeting duration.'})
    ],
    correct: 1,
    explanation: Q({es: 'La facilitación efectiva promueve participación equitativa.', en: 'Effective facilitation promotes equitable participation.'})
  }));

  QUESTIONS.push(mcq('p-003', {
    domain: 'people', topic: 'servant-leadership', difficulty: 'hard',
    question: Q({
      es: 'Un equipo ágil no puede correr pruebas de integración porque la solicitud de un ambiente compartido lleva 6 semanas en adquisiciones. ¿Qué hacer?',
      en: 'Agile team cannot run integration tests because a shared environment request has been in procurement for 6 weeks. What to do?'
    }),
    options: [
      Q({es: 'Pedir al equipo que construya un ambiente temporal sin autorización.', en: 'Ask the team to build a temp environment without authorization.'}),
      Q({es: 'Trabajar con adquisiciones para desbloquear la solicitud y reportar al equipo.', en: 'Work with procurement to clear the request and report to team.'}),
      Q({es: 'Recordar al equipo que debe auto-resolver sus impedimentos.', en: 'Remind the team they must self-resolve impediments.'}),
      Q({es: 'Escalar al sponsor para reducir el sprint.', en: 'Escalate to sponsor to reduce sprint.'})
    ],
    correct: 1,
    explanation: Q({es: 'Servant leadership: representar la voz del equipo y resolver problemas que ellos no pueden. Opción A viola políticas, C es evasión, D no aborda causa raíz.', en: 'Servant leadership: represent the team voice and solve problems they cannot. A violates policies, C is evasion, D does not address root cause.'})
  }));

  QUESTIONS.push(mcq('p-004', {
    domain: 'people', topic: 'conflict', difficulty: 'medium',
    question: Q({
      es: 'Dos ingenieros senior discuten públicamente sobre el enfoque técnico. El conflicto afecta la moral. ¿Qué hacer primero?',
      en: 'Two senior engineers publicly argue about technical approach. Conflict affects morale. What to do first?'
    }),
    options: [
      Q({es: 'Dejar que el equipo resuelva porque son los expertos.', en: 'Let the team resolve it since they are the experts.'}),
      Q({es: 'Escalar a los gerentes funcionales.', en: 'Escalate to functional managers.'}),
      Q({es: 'Reunirse en privado con ambos para entender la fuente del conflicto.', en: 'Meet privately with both to understand the source.'}),
      Q({es: 'Tomar la decisión técnica para terminar el conflicto.', en: 'Make the technical decision to end the conflict.'})
    ],
    correct: 2,
    explanation: Q({es: 'PMI recomienda confrontar el problema. La primera acción es entender la causa raíz en privado.', en: 'PMI recommends confronting the problem. First action is to understand root cause privately.'})
  }));

  QUESTIONS.push(mcq('p-005', {
    domain: 'people', topic: 'motivation', difficulty: 'medium',
    question: Q({
      es: 'Según la Teoría de la Autodeterminación (SDT), ¿cuáles son los motivadores intrínsecos?',
      en: 'According to Self-Determination Theory, what are the intrinsic motivators?'
    }),
    options: [
      Q({es: 'Pago, bono, promoción.', en: 'Pay, bonus, promotion.'}),
      Q({es: 'Autonomía, dominio, propósito.', en: 'Autonomy, mastery, purpose.'}),
      Q({es: 'Poder, afiliación, logro.', en: 'Power, affiliation, achievement.'}),
      Q({es: 'Necesidad, deseo, expectativa.', en: 'Need, desire, expectation.'})
    ],
    correct: 1,
    explanation: Q({es: 'SDT (Deci y Ryan): autonomía, competencia/dominio, relación/propósito. La tríada de Daniel Pink (Drive) la popularizó.', en: 'SDT (Deci and Ryan): autonomy, competence/mastery, relatedness/purpose. Daniel Pink\'s triad (Drive) popularized it.'})
  }));

  QUESTIONS.push(mcq('p-006', {
    domain: 'people', topic: 'team-development', difficulty: 'easy',
    question: Q({
      es: 'Tuckman: ¿qué etapa viene ANTES de performing?',
      en: 'Tuckman: which stage comes BEFORE performing?'
    }),
    options: [
      Q({es: 'Forming → Storming → Norming → Performing', en: 'Forming → Storming → Norming → Performing'}),
      Q({es: 'Forming → Norming → Storming → Performing', en: 'Forming → Norming → Storming → Performing'}),
      Q({es: 'Adjourning → Forming → Performing', en: 'Adjourning → Forming → Performing'}),
      Q({es: 'Storming → Forming → Norming → Performing', en: 'Storming → Forming → Norming → Performing'})
    ],
    correct: 0,
    explanation: Q({es: 'Tuckman clásico. Adjourning se agregó después para el cierre.', en: 'Classic Tuckman. Adjourning was added later for closure.'})
  }));

  QUESTIONS.push(mcq('p-007', {
    domain: 'people', topic: 'emotional-intelligence', difficulty: 'medium',
    question: Q({
      es: 'Un miembro evita conversaciones 1-a-1 pero es colaborativo en grupo. ¿Qué dimensión de IE desarrollar primero?',
      en: 'A member avoids 1-on-1 conversations but is collaborative in groups. Which EI dimension to develop first?'
    }),
    options: [
      Q({es: 'Autoconciencia (self-awareness).', en: 'Self-awareness.'}),
      Q({es: 'Autorregulación.', en: 'Self-management.'}),
      Q({es: 'Conciencia social.', en: 'Social awareness.'}),
      Q({es: 'Habilidades de relación.', en: 'Relationship management.'})
    ],
    correct: 0,
    explanation: Q({es: 'Goleman: la autoconciencia es la base de las otras. Empezar por self-awareness es la práctica correcta.', en: 'Goleman: self-awareness is the foundation of others. Starting with self-awareness is the correct practice.'})
  }));

  QUESTIONS.push(mcq('p-008', {
    domain: 'people', topic: 'communication', difficulty: 'medium',
    question: Q({
      es: 'Un proyecto tiene 14 stakeholders clave. ¿Cuántos canales de comunicación potenciales hay?',
      en: 'A project has 14 key stakeholders. How many potential communication channels?'
    }),
    options: [
      Q({es: '91', en: '91'}), Q({es: '105', en: '105'}),
      Q({es: '182', en: '182'}), Q({es: '196', en: '196'})
    ],
    correct: 0,
    explanation: Q({es: 'Fórmula n(n-1)/2 = 14*13/2 = 91.', en: 'Formula n(n-1)/2 = 14*13/2 = 91.'})
  }));

  QUESTIONS.push(mcq('p-009', {
    domain: 'people', topic: 'collaboration', difficulty: 'medium',
    question: Q({
      es: 'Equipo distribuido en 4 países: cada región quiere features para su mercado local. ¿Qué técnica de colaboración aplicar?',
      en: 'Team distributed across 4 countries: each region wants features for its local market. Which collaboration technique to apply?'
    }),
    options: [
      Q({es: 'Establecer un Product Owner único.', en: 'Establish a single Product Owner.'}),
      Q({es: 'Working Agreements y WSJF con representación equitativa.', en: 'Working Agreements and WSJF with equitable representation.'}),
      Q({es: 'Cada región prioriza su propio backlog local.', en: 'Each region prioritizes its own local backlog.'}),
      Q({es: 'Votar democráticamente.', en: 'Vote democratically.'})
    ],
    correct: 1,
    explanation: Q({es: 'Working Agreements definen la colaboración. WSJF (SAFe) pondera valor, urgencia, riesgo y tamaño.', en: 'Working Agreements define collaboration. WSJF (SAFe) weights value, urgency, risk, and size.'})
  }));

  QUESTIONS.push(mcq('p-010', {
    domain: 'people', topic: 'servant-leadership', difficulty: 'hard',
    question: Q({
      es: 'En retrospectiva, alguien dice "esta reunión no sirve para nada". El PM no está de acuerdo pero quiere mantener un ambiente seguro. ¿Mejor respuesta?',
      en: 'In retrospective, someone says "this meeting is useless". PM disagrees but wants a safe environment. Best response?'
    }),
    options: [
      Q({es: '"No estoy de acuerdo, pero escucho tu frustración. ¿Qué te haría sentir que la reunión es útil?"', en: '"I disagree, but I hear your frustration. What would make the meeting useful to you?"'}),
      Q({es: '"Tienes razón, cancelemos las retrospectivas."', en: '"You\'re right, let\'s cancel retrospectives."'}),
      Q({es: '"Tu opinión no representa al equipo, avancemos."', en: '"Your opinion does not represent the team, let\'s move on."'}),
      Q({es: 'No decir nada y esperar.', en: 'Say nothing and wait.'})
    ],
    correct: 0,
    explanation: Q({es: 'Servant leadership: reconocer sentimiento, hacer preguntas abiertas, no juzgar.', en: 'Servant leadership: acknowledge feeling, ask open questions, do not judge.'})
  }));

  // p-011 to p-020
  QUESTIONS.push(mcq('p-011', {domain: 'people', topic: 'stakeholder', difficulty: 'medium',
    question: Q({es: 'Un stakeholder con ALTO poder y ALTA legitimidad se queja de que el proyecto no entrega valor. ¿Estrategia según Mitchell-Agle-Salle?', en: 'A stakeholder with HIGH power and HIGH legitimacy complains the project delivers no value. Strategy per Mitchell-Agle-Salle?'}),
    options: [
      Q({es: 'Monitorear de cerca (keep satisfied).', en: 'Monitor closely (keep satisfied).'}),
      Q({es: 'Gestionar de cerca (manage closely).', en: 'Manage closely.'}),
      Q({es: 'Mantener informado (keep informed).', en: 'Keep informed.'}),
      Q({es: 'Esfuerzo mínimo.', en: 'Minimum effort.'})
    ],
    correct: 1,
    explanation: Q({es: 'Poder + Legitimidad = stakeholder definitivo. Requiere gestión activa. Mitchell et al. 1997.', en: 'Power + Legitimacy = definitive stakeholder. Requires active management. Mitchell et al. 1997.'})
  }));

  QUESTIONS.push(mcq('p-012', {domain: 'people', topic: 'negotiation', difficulty: 'hard',
    question: Q({es: 'Negocias con un proveedor sobre un cambio de alcance que impacta costos. ¿Qué principio de negociación aplicar?', en: 'You negotiate with a vendor about a scope change that impacts cost. What negotiation principle to apply?'}),
    options: [
      Q({es: 'Negociación posicional.', en: 'Positional negotiation.'}),
      Q({es: 'Negociación basada en principios (Fisher-Ury): separar personas, intereses, opciones, criterios objetivos.', en: 'Principled negotiation (Fisher-Ury): separate people, interests, options, objective criteria.'}),
      Q({es: 'Aceptar la posición del proveedor para no dañar la relación.', en: 'Accept vendor position to preserve relationship.'}),
      Q({es: 'Ceder inmediatamente.', en: 'Concede immediately.'})
    ],
    correct: 1,
    explanation: Q({es: 'Fisher & Ury (Harvard): negociación por principios gana a largo plazo. Posicional crea win-lose.', en: 'Fisher & Ury (Harvard): principled negotiation wins in the long run. Positional creates win-lose.'})
  }));

  QUESTIONS.push(mcq('p-013', {domain: 'people', topic: 'leadership', difficulty: 'medium',
    question: Q({es: '¿Cuál NO es un estilo de liderazgo del PMBOK 8ª ed?', en: 'Which is NOT a PMBOK 8th ed leadership style?'}),
    options: [
      Q({es: 'Directive (directivo).', en: 'Directive.'}),
      Q({es: 'Visionary (visionario).', en: 'Visionary.'}),
      Q({es: 'Laissez-faire.', en: 'Laissez-faire.'}),
      Q({es: 'Coercive (coercitivo).', en: 'Coercive.'})
    ],
    correct: 0,
    explanation: Q({es: 'PMBOK 8ª ed: coercive, visionary/authoritative, affiliative, democratic, pacesetting, coaching, laissez-faire, servant, transactional, transformational, charismatic, interactional. "Directive" no es término único (sí "coercive").', en: 'PMBOK 8th ed: coercive, visionary/authoritative, affiliative, democratic, pacesetting, coaching, laissez-faire, servant, transactional, transformational, charismatic, interactional. "Directive" alone is not a term.'})
  }));

  QUESTIONS.push(mcq('p-014', {domain: 'people', topic: 'power', difficulty: 'hard',
    question: Q({es: 'Un equipo respeta mucho al ingeniero senior. ¿Qué tipo de poder tiene?', en: 'A team respects a senior engineer highly. What type of power does the engineer have?'}),
    options: [
      Q({es: 'Poder formal (legitimate).', en: 'Formal (legitimate) power.'}),
      Q({es: 'Poder coercitivo.', en: 'Coercive power.'}),
      Q({es: 'Poder referente (referent).', en: 'Referent power.'}),
      Q({es: 'Poder de experto.', en: 'Expert power.'})
    ],
    correct: 2,
    explanation: Q({es: 'Poder referente: carisma personal, admiración, afinidad. Si fuera por conocimiento sería "expert"; por cargo "legitimate".', en: 'Referent power: personal charisma, admiration, affinity. If it were knowledge, "expert"; if role, "legitimate".'})
  }));

  QUESTIONS.push(mcq('p-015', {domain: 'people', topic: 'team-building', difficulty: 'medium',
    question: Q({es: 'En un proyecto ágil, el equipo quiere auto-organizarse. ¿Cuál es la MEJOR acción del líder servidor?', en: 'In an agile project, the team wants to self-organize. What is the BEST servant leader action?'}),
    options: [
      Q({es: 'Asignar tareas específicas según habilidades.', en: 'Assign specific tasks by skills.'}),
      Q({es: 'Definir el objetivo del sprint y dejar que el equipo decida cómo alcanzarlo.', en: 'Define the sprint goal and let the team decide how to achieve it.'}),
      Q({es: 'Hacer seguimiento diario del trabajo.', en: 'Daily tracking of each person\'s work.'}),
      Q({es: 'Aprobar cada decisión técnica.', en: 'Approve every technical decision.'})
    ],
    correct: 1,
    explanation: Q({es: 'Auto-organización ≠ sin objetivos. El líder servidor define el "qué" y deja el "cómo" al equipo.', en: 'Self-organization ≠ no goals. Servant leader defines the "what" and leaves the "how" to the team.'})
  }));

  // p-016 to p-030
  QUESTIONS.push({id: 'p-016', type: 'multi', domain: 'people', topic: 'team-building', difficulty: 'hard', approach: 'agile',
    question: Q({es: 'Un PM nuevo evalúa tres factores para construir un equipo de alto rendimiento. ¿Cuáles? (Selecciona 3)', en: 'A new PM evaluates three factors to build a high-performing team. Which three? (Select 3)'}),
    options: [
      Q({es: 'Capacidades del equipo y skill sets.', en: 'Team capabilities and skill sets.'}),
      Q({es: 'Presupuesto disponible.', en: 'Budget available.'}),
      Q({es: 'Motivadores y desmotivadores.', en: 'Motivators and demotivators.'}),
      Q({es: 'Stock price de la empresa.', en: 'Company stock price.'}),
      Q({es: 'Ubicación geográfica y zonas horarias.', en: 'Geographic location and time zones.'}),
      Q({es: 'Tamaño del equipo necesario.', en: 'Required team size.'})
    ],
    correct: [0, 2, 4],
    explanation: Q({es: 'Capacidades, motivadores, ubicación son factores del equipo. Presupuesto/stock son organizacionales. Tamaño es derivado.', en: 'Capabilities, motivators, location are team factors. Budget/stock are organizational. Size is derived.'})
  });

  QUESTIONS.push({id: 'p-017', type: 'dnd', domain: 'people', topic: 'stages', difficulty: 'medium',
    question: Q({es: 'Ordena las etapas de Tuckman en su secuencia correcta.', en: 'Order the Tuckman stages in their correct sequence.'}),
    items: [
      Q({es: 'Forming — orientación y presentaciones.', en: 'Forming — orientation and introductions.'}),
      Q({es: 'Storming — conflicto y confrontación.', en: 'Storming — conflict and confrontation.'}),
      Q({es: 'Norming — cohesión y normas grupales.', en: 'Norming — cohesion and group norms.'}),
      Q({es: 'Performing — alta productividad.', en: 'Performing — high productivity.'}),
      Q({es: 'Adjourning — cierre y despedida.', en: 'Adjourning — closure and farewell.'})
    ],
    correctOrder: [0, 1, 2, 3, 4],
    explanation: Q({es: 'Tuckman (1965) + Adjourning (1977).', en: 'Tuckman (1965) + Adjourning (1977).'})
  });

  QUESTIONS.push(mcq('p-018', {domain: 'people', topic: 'communication', difficulty: 'easy',
    question: Q({es: '¿Cuáles son los dos canales de comunicación principales del PMBOK 8ª ed?', en: 'What are the two main communication channels in PMBOK 8th ed?'}),
    options: [
      Q({es: 'Verbal y escrita.', en: 'Verbal and written.'}),
      Q({es: 'Push y pull (más interactiva).', en: 'Push and pull (plus interactive).'}),
      Q({es: 'Formal e informal.', en: 'Formal and informal.'}),
      Q({es: 'Sincrónica y asincrónica.', en: 'Synchronous and asynchronous.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMI: push (emails), pull (intranet), interactiva (reuniones).', en: 'PMI: push (emails), pull (intranet), interactive (meetings).'})
  }));

  QUESTIONS.push(mcq('p-019', {domain: 'people', topic: 'leadership', difficulty: 'medium',
    question: Q({es: 'Un PM con equipo multicultural. ¿Qué hacer PRIMERO para gestionar la diversidad?', en: 'PM with multicultural team. What to do FIRST to manage diversity?'}),
    options: [
      Q({es: 'Establecer una cultura única y obligatoria.', en: 'Establish a single mandatory culture.'}),
      Q({es: 'Fomentar la conciencia cultural, construir confianza y crear acuerdos de trabajo.', en: 'Foster cultural awareness, build trust, and create working agreements.'}),
      Q({es: 'Asignar tareas según nacionalidad.', en: 'Assign tasks by nationality.'}),
      Q({es: 'Trabajar solo con un subgrupo que comparta cultura.', en: 'Work only with a subgroup sharing culture.'})
    ],
    correct: 1,
    explanation: Q({es: 'La gestión de diversidad empieza por conciencia cultural, confianza y acuerdos.', en: 'Diversity management starts with cultural awareness, trust, and agreements.'})
  }));

  QUESTIONS.push(mcq('p-020', {domain: 'people', topic: 'conflict', difficulty: 'hard',
    question: Q({es: 'PMI recomienda 5 técnicas de conflicto. ¿Cuál es MEJOR para conflictos de alto impacto en el equipo?', en: 'PMI recommends 5 conflict techniques. Which is BEST for high-impact team conflicts?'}),
    options: [
      Q({es: 'Withdraw / Avoid.', en: 'Withdraw / Avoid.'}),
      Q({es: 'Smooth / Accommodate.', en: 'Smooth / Accommodate.'}),
      Q({es: 'Compromise / Reconcile.', en: 'Compromise / Reconcile.'}),
      Q({es: 'Collaborate / Problem Solve.', en: 'Collaborate / Problem Solve.'})
    ],
    correct: 3,
    explanation: Q({es: 'Collaborate/Problem Solve es la técnica más efectiva a largo plazo.', en: 'Collaborate/Problem Solve is the most effective long-term technique.'})
  }));

  // Continue with 20 more people questions (p-021 to p-040)
  QUESTIONS.push(mcq('p-021', {domain: 'people', topic: 'EI', difficulty: 'medium',
    question: Q({es: 'Un PM recibe feedback de que "siempre cancela reuniones a última hora". ¿Qué dimensión de IE aplicar?', en: 'PM receives feedback that "they always cancel meetings last minute". Which EI dimension to apply?'}),
    options: [
      Q({es: 'Conciencia social.', en: 'Social awareness.'}),
      Q({es: 'Autorregulación.', en: 'Self-management.'}),
      Q({es: 'Habilidades de relación.', en: 'Relationship management.'}),
      Q({es: 'Autoconciencia.', en: 'Self-awareness.'})
    ],
    correct: 1,
    explanation: Q({es: 'Cancelar reuniones impacta la confianza; requiere autorregulación.', en: 'Cancelling meetings impacts trust; it requires self-management.'})
  }));

  QUESTIONS.push(mcq('p-022', {domain: 'people', topic: 'servant', difficulty: 'medium',
    question: Q({es: '¿Cuál es un ejemplo de comportamiento de líder servidor?', en: 'Which is an example of servant leader behavior?'}),
    options: [
      Q({es: 'Asignar tareas sin consultar.', en: 'Assign tasks without consulting.'}),
      Q({es: 'Eliminar impedimentos que bloquean al equipo.', en: 'Remove impediments blocking the team.'}),
      Q({es: 'Aprobar todas las decisiones técnicas.', en: 'Approve all technical decisions.'}),
      Q({es: 'Reportar solo lo positivo al sponsor.', en: 'Report only positives to sponsor.'})
    ],
    correct: 1,
    explanation: Q({es: 'Servant: eliminar impedimentos, empoderar, transparencia.', en: 'Servant: remove impediments, empower, be transparent.'})
  }));

  QUESTIONS.push(mcq('p-023', {domain: 'people', topic: 'team', difficulty: 'medium',
    question: Q({es: '¿Qué actividad es la MEJOR para construir confianza en un equipo distribuido nuevo?', en: 'What activity is BEST to build trust in a new distributed team?'}),
    options: [
      Q({es: 'Talleres compartidos (presenciales o virtuales).', en: 'Shared workshops (in-person or virtual).'}),
      Q({es: 'Más reportes diarios.', en: 'More daily reports.'}),
      Q({es: 'Reasignar a los miembros con más antigüedad.', en: 'Reassign senior members.'}),
      Q({es: 'Reducir el alcance.', en: 'Reduce scope.'})
    ],
    correct: 0,
    explanation: Q({es: 'Talleres compartidos construyen confianza rápidamente. PMBOK 8ª ed: team building activities.', en: 'Shared workshops build trust quickly. PMBOK 8th ed: team building activities.'})
  }));

  QUESTIONS.push(mcq('p-024', {domain: 'people', topic: 'motivation', difficulty: 'hard',
    question: Q({es: 'La Teoría de los Dos Factores de Herzberg distingue entre:', en: 'Herzberg\'s Two-Factor Theory distinguishes between:'}),
    options: [
      Q({es: 'Necesidades primarias y secundarias.', en: 'Primary and secondary needs.'}),
      Q({es: 'Factores de higiene (extrínsecos) y motivadores (intrínsecos).', en: 'Hygiene factors (extrinsic) and motivators (intrinsic).'}),
      Q({es: 'Poder y afiliación.', en: 'Power and affiliation.'}),
      Q({es: 'Logro y pertenencia.', en: 'Achievement and belonging.'})
    ],
    correct: 1,
    explanation: Q({es: 'Herzberg: higiene (salario) no motiva pero su ausencia desmotiva; motivadores (logro) sí generan satisfacción.', en: 'Herzberg: hygiene (salary) does not motivate but its absence demotivates; motivators (achievement) generate satisfaction.'})
  }));

  QUESTIONS.push(mcq('p-025', {domain: 'people', topic: 'hybrid', difficulty: 'medium',
    question: Q({es: 'En híbrido, ágil quiere demos semanales y predictivo entrega al final de fase. ¿Qué hacer?', en: 'In hybrid, agile wants weekly demos and predictive only delivers at phase end. What to do?'}),
    options: [
      Q({es: 'Forzar al equipo predictivo a hacer demos semanales.', en: 'Force predictive team to do weekly demos.'}),
      Q({es: 'Definir una cadencia de sincronización entre ambos equipos.', en: 'Define a sync cadence between both teams.'}),
      Q({es: 'Dejar que cada equipo trabaje aislado.', en: 'Let each team work in isolation.'}),
      Q({es: 'Cambiar todo a predictivo.', en: 'Switch everything to predictive.'})
    ],
    correct: 1,
    explanation: Q({es: 'En híbrido se debe definir cómo se sincronizan ambos enfoques.', en: 'In hybrid, you must define how both approaches sync.'})
  }));

  QUESTIONS.push(mcq('p-026', {domain: 'people', topic: 'stakeholder', difficulty: 'easy',
    question: Q({es: 'En Power/Interest Grid, un stakeholder con alto poder y bajo interés se clasifica como:', en: 'In Power/Interest Grid, a stakeholder with high power and low interest is classified as:'}),
    options: [
      Q({es: 'Manage closely.', en: 'Manage closely.'}),
      Q({es: 'Keep satisfied.', en: 'Keep satisfied.'}),
      Q({es: 'Keep informed.', en: 'Keep informed.'}),
      Q({es: 'Monitor with minimum effort.', en: 'Monitor with minimum effort.'})
    ],
    correct: 1,
    explanation: Q({es: 'Alto poder + bajo interés = Keep satisfied.', en: 'High power + low interest = Keep satisfied.'})
  }));

  QUESTIONS.push(mcq('p-027', {domain: 'people', topic: 'leadership', difficulty: 'hard',
    question: Q({es: 'Un equipo de 3 personas con conflictos frecuentes. Cada uno cree que el otro no aporta. ¿Qué estilo aplicar PRIMERO?', en: 'A 3-person team with frequent conflicts. Each thinks the other does not contribute. What style to apply FIRST?'}),
    options: [
      Q({es: 'Coercitivo.', en: 'Coercive.'}),
      Q({es: 'Democrático para escuchar y alinear.', en: 'Democratic to listen and align.'}),
      Q({es: 'Pacesetting.', en: 'Pacesetting.'}),
      Q({es: 'Laissez-faire.', en: 'Laissez-faire.'})
    ],
    correct: 1,
    explanation: Q({es: 'El democrático crea consenso y participación; útil en conflictos. Coercitivo empeora el clima.', en: 'Democratic creates consensus and participation; useful in conflict. Coercive worsens climate.'})
  }));

  QUESTIONS.push(mcq('p-028', {domain: 'people', topic: 'collab', difficulty: 'medium',
    question: Q({es: 'Equipo ágil remoto y asincrónico. ¿Qué práctica es MÁS importante?', en: 'Agile team works remote and async. What practice is MOST important?'}),
    options: [
      Q({es: 'Reuniones diarias obligatorias por cámara.', en: 'Mandatory daily video calls.'}),
      Q({es: 'Documentación escrita clara y acuerdos de trabajo explícitos.', en: 'Clear written documentation and explicit working agreements.'}),
      Q({es: 'Horas extra nocturnas.', en: 'Overtime at night.'}),
      Q({es: 'Reuniones semanales de 4 horas.', en: '4-hour weekly meetings.'})
    ],
    correct: 1,
    explanation: Q({es: 'Trabajo asincrónico requiere documentación escrita y acuerdos explícitos.', en: 'Async work requires written documentation and explicit agreements.'})
  }));

  QUESTIONS.push(mcq('p-029', {domain: 'people', topic: 'comm', difficulty: 'easy',
    question: Q({es: '¿Qué porcentaje de tiempo dedica un PM a comunicación (estudios citados por PMI)?', en: 'What percentage of time does a PM spend on communication (PMI-cited studies)?'}),
    options: [
      Q({es: '50%', en: '50%'}),
      Q({es: '70%', en: '70%'}),
      Q({es: '80-90%', en: '80-90%'}),
      Q({es: '95%', en: '95%'})
    ],
    correct: 2,
    explanation: Q({es: 'PMI/PMBOK cita estudios: 80-90%. Por eso las soft skills son críticas.', en: 'PMI/PMBOK cites studies: 80-90%. Soft skills are critical.'})
  }));

  QUESTIONS.push(mcq('p-030', {domain: 'people', topic: 'team', difficulty: 'medium',
    question: Q({es: '¿Diferencia principal entre un equipo (team) y un grupo (group)?', en: 'Main difference between a team and a group?'}),
    options: [
      Q({es: 'El equipo tiene al menos 5 personas.', en: 'A team has at least 5 people.'}),
      Q({es: 'El equipo comparte un objetivo común e interdependencia; el grupo solo comparte un director.', en: 'A team shares a common goal and interdependency; a group only shares a manager.'}),
      Q({es: 'No hay diferencia.', en: 'No difference.'}),
      Q({es: 'El grupo siempre trabaja remoto.', en: 'The group always works remote.'})
    ],
    correct: 1,
    explanation: Q({es: 'Un equipo tiene objetivo común e interdependencia. Un grupo solo comparte un área.', en: 'A team shares a common goal and interdependency. A group only shares an area.'})
  }));

  // p-031 to p-050 (more people)
  QUESTIONS.push(mcq('p-031', {domain: 'people', topic: 'motivation', difficulty: 'medium',
    question: Q({es: 'Un miembro entrega trabajo de baja calidad tras negársele un aumento. ¿Qué motivador extrínseco falla?', en: 'A member delivers low-quality work after being denied a raise. Which extrinsic motivator is failing?'}),
    options: [
      Q({es: 'Salario.', en: 'Pay.'}),
      Q({es: 'Autonomía.', en: 'Autonomy.'}),
      Q({es: 'Propósito.', en: 'Purpose.'}),
      Q({es: 'Maestría.', en: 'Mastery.'})
    ],
    correct: 0,
    explanation: Q({es: 'El salario es extrínseco (higiénico en Herzberg). Los otros son intrínsecos.', en: 'Salary is extrinsic (hygienic per Herzberg). The others are intrinsic.'})
  }));

  QUESTIONS.push(mcq('p-032', {domain: 'people', topic: 'remote', difficulty: 'medium',
    question: Q({es: 'Equipo distribuido en 5 husos horarios. ¿Qué es MÁS efectivo para mejorar la comunicación?', en: 'Team distributed across 5 time zones. What is MOST effective to improve communication?'}),
    options: [
      Q({es: 'Daily meetings a las 9 a. m. en un huso horario.', en: 'Daily 9 AM meetings in one time zone.'}),
      Q({es: 'Documentación clara, acuerdos de trabajo, 1-2 reuniones sincrónicas por semana.', en: 'Clear documentation, working agreements, 1-2 sync meetings per week.'}),
      Q({es: 'Chat todo el día.', en: 'Chat all day.'}),
      Q({es: 'Solo asincrónico sin reuniones.', en: 'Async only with no meetings.'})
    ],
    correct: 1,
    explanation: Q({es: 'Distribución: docs + acuerdos + pocas sincrónicas. Fórmula probada.', en: 'Distributed: docs + agreements + few sync. Proven formula.'})
  }));

  QUESTIONS.push(mcq('p-033', {domain: 'people', topic: 'coaching', difficulty: 'hard',
    question: Q({es: 'Un PM con equipo de bajo rendimiento en proyecto crítico decide aplicar coaching. ¿Qué significa?', en: 'PM with low-performing team on critical project decides to apply coaching. What does it mean?'}),
    options: [
      Q({es: 'Asumir control total y hacer el trabajo del equipo.', en: 'Take full control and do the team\'s work.'}),
      Q({es: 'Trabajar con cada miembro para identificar fortalezas, debilidades y planes de desarrollo.', en: 'Work with each member to identify strengths, weaknesses, and development plans.'}),
      Q({es: 'Amenazar con despido.', en: 'Threaten with firing.'}),
      Q({es: 'Ignorar el bajo rendimiento.', en: 'Ignore low performance.'})
    ],
    correct: 1,
    explanation: Q({es: 'Coaching (Goleman / PMBOK 8) desarrolla personas, no controla.', en: 'Coaching (Goleman / PMBOK 8) develops people, not control.'})
  }));

  QUESTIONS.push(mcq('p-034', {domain: 'people', topic: 'stakeholder', difficulty: 'medium',
    question: Q({es: 'Un stakeholder senior exige reportes diarios personalizados. PM con 12 stakeholders no puede escalar. ¿Qué hacer?', en: 'Senior stakeholder demands personalized daily reports. PM has 12 stakeholders and cannot scale. What to do?'}),
    options: [
      Q({es: 'Hacer el reporte diario solo para él.', en: 'Make the daily report only for them.'}),
      Q({es: 'Enviar el mismo reporte a todos y personalizar formato con push/pull.', en: 'Send same report to all and tailor format with push/pull.'}),
      Q({es: 'Pedirle que lea el backlog.', en: 'Ask them to read the backlog.'}),
      Q({es: 'Ignorarlo.', en: 'Ignore them.'})
    ],
    correct: 1,
    explanation: Q({es: 'Plan Communications Management: usar mix push/pull/interactive. Personalizar formato pero automatizar contenido.', en: 'Plan Communications Management: use mix push/pull/interactive. Tailor format but automate content.'})
  }));

  QUESTIONS.push(mcq('p-035', {domain: 'people', topic: 'team', difficulty: 'easy',
    question: Q({es: 'Tuckman + Adjourning: 5 etapas son:', en: 'Tuckman + Adjourning: 5 stages are:'}),
    options: [
      Q({es: 'Forming, Storming, Norming, Performing, Adjourning.', en: 'Forming, Storming, Norming, Performing, Adjourning.'}),
      Q({es: 'Plan, Do, Check, Act, Close.', en: 'Plan, Do, Check, Act, Close.'}),
      Q({es: 'Initiating, Planning, Executing, Monitoring, Closing.', en: 'Initiating, Planning, Executing, Monitoring, Closing.'}),
      Q({es: 'Directing, Supporting, Coaching, Delegating, Empowering.', en: 'Directing, Supporting, Coaching, Delegating, Empowering.'})
    ],
    correct: 0,
    explanation: Q({es: 'Modelo de 5 etapas de Tuckman.', en: 'Tuckman\'s 5-stage model.'})
  }));

  QUESTIONS.push(mcq('p-036', {domain: 'people', topic: 'stakeholder', difficulty: 'medium',
    question: Q({es: 'Dos stakeholders senior en desacuerdo sobre prioridad. No se puede resolver a nivel del equipo. ¿Qué hacer?', en: 'Two senior stakeholders disagree on priority. Cannot resolve at team level. What to do?'}),
    options: [
      Q({es: 'Forzar una decisión sin consultar al sponsor.', en: 'Force a decision without consulting the sponsor.'}),
      Q({es: 'Escalar al sponsor o governance board.', en: 'Escalate to sponsor or governance board.'}),
      Q({es: 'Cancelar el proyecto.', en: 'Cancel the project.'}),
      Q({es: 'Pedir al equipo que vote.', en: 'Ask the team to vote.'})
    ],
    correct: 1,
    explanation: Q({es: 'Conflicto entre stakeholders senior = escalar. El PM no tiene autoridad para forzar.', en: 'Conflict between senior stakeholders = escalate. PM does not have authority to force.'})
  }));

  QUESTIONS.push(mcq('p-037', {domain: 'people', topic: 'leadership', difficulty: 'hard',
    question: Q({es: 'Diferencia entre "Influence" y "Authority" en el PMBOK 8ª ed:', en: 'Difference between "Influence" and "Authority" in PMBOK 8th ed:'}),
    options: [
      Q({es: 'No hay diferencia.', en: 'No difference.'}),
      Q({es: 'Authority es el poder formal del cargo. Influence es la capacidad de lograr que otros se sumen sin autoridad directa.', en: 'Authority is the formal power of the role. Influence is the ability to get others to align without direct authority.'}),
      Q({es: 'Influence es solo para el sponsor.', en: 'Influence is only for the sponsor.'}),
      Q({es: 'Authority es solo para el equipo.', en: 'Authority is only for the team.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMI separa ambos. El PM tiene authority limitada y usa influence. Se construye con competencia, relaciones, resultados.', en: 'PMI separates both. PM has limited authority and uses influence. Built with competence, relationships, results.'})
  }));

  QUESTIONS.push(mcq('p-038', {domain: 'people', topic: 'EI', difficulty: 'medium',
    question: Q({es: 'Un PM nota que su equipo está desmotivado pero no sabe por qué. ¿Qué dimensión de IE aplicar PRIMERO?', en: 'PM notices the team is demotivated but does not know why. Which EI dimension FIRST?'}),
    options: [
      Q({es: 'Conciencia social (escuchar al equipo).', en: 'Social awareness (listen to the team).'}),
      Q({es: 'Habilidades de relación (motivar).', en: 'Relationship management (motivate).'}),
      Q({es: 'Autorregulación.', en: 'Self-management.'}),
      Q({es: 'Autoconciencia.', en: 'Self-awareness.'})
    ],
    correct: 0,
    explanation: Q({es: 'Si no sabes POR qué están desmotivados, primero escucha: conciencia social.', en: 'If you do not know WHY they are demotivated, first listen: social awareness.'})
  }));

  QUESTIONS.push(mcq('p-039', {domain: 'people', topic: 'stakeholder', difficulty: 'hard',
    question: Q({es: '¿Qué técnica de análisis de stakeholders combina poder, legitimidad y urgencia?', en: 'Which stakeholder analysis technique combines power, legitimacy, and urgency?'}),
    options: [
      Q({es: 'Power/Interest Grid.', en: 'Power/Interest Grid.'}),
      Q({es: 'Mitchell-Agle-Salle Salience Model.', en: 'Mitchell-Agle-Salle Salience Model.'}),
      Q({es: 'RACI.', en: 'RACI.'}),
      Q({es: 'RACI-VS.', en: 'RACI-VS.'})
    ],
    correct: 1,
    explanation: Q({es: 'Mitchell et al. (1997): Salience Model. 7 tipos: Latente, Expectant, Definitivo.', en: 'Mitchell et al. (1997): Salience Model. 7 types: Latent, Expectant, Definitive.'})
  }));

  QUESTIONS.push(mcq('p-040', {domain: 'people', topic: 'pair', difficulty: 'medium',
    question: Q({es: 'En ágil, el equipo quiere adoptar pair programming. ¿Qué facilitar?', en: 'In agile, the team wants to adopt pair programming. What to facilitate?'}),
    options: [
      Q({es: 'Estaciones dobles, reglas de rotación, espacio para colaborar.', en: 'Dual workstations, rotation rules, space to collaborate.'}),
      Q({es: 'Asientos individuales separados.', en: 'Individual separated seats.'}),
      Q({es: 'Más reuniones de planificación.', en: 'More planning meetings.'}),
      Q({es: 'Documentación detallada de cada par.', en: 'Detailed documentation of each pair.'})
    ],
    correct: 0,
    explanation: Q({es: 'Pair programming: setup físico, reglas, cultura de feedback. El PM facilita impedimentos.', en: 'Pair programming: physical setup, rules, feedback culture. PM facilitates impediments.'})
  }));

  // p-041 to p-050
  QUESTIONS.push(mcq('p-041', {domain: 'people', topic: 'leadership', difficulty: 'medium',
    question: Q({es: '¿En qué etapa se encuentra un equipo de alto rendimiento según Tuckman?', en: 'Tuckman describes a high-performing team in which stage?'}),
    options: [
      Q({es: 'Performing.', en: 'Performing.'}),
      Q({es: 'Norming.', en: 'Norming.'}),
      Q({es: 'Storming.', en: 'Storming.'}),
      Q({es: 'Forming.', en: 'Forming.'})
    ],
    correct: 0,
    explanation: Q({es: 'Performing = alta productividad y cohesión.', en: 'Performing = high productivity and cohesion.'})
  }));

  QUESTIONS.push(mcq('p-042', {domain: 'people', topic: 'EI', difficulty: 'hard',
    question: Q({es: '¿Cuál de los siguientes NO es uno de los 4 dominios de IE de Goleman?', en: 'Which of the following is NOT one of Goleman\'s 4 EI domains?'}),
    options: [
      Q({es: 'Self-awareness.', en: 'Self-awareness.'}),
      Q({es: 'Self-management.', en: 'Self-management.'}),
      Q({es: 'Cognitive intelligence.', en: 'Cognitive intelligence.'}),
      Q({es: 'Relationship management.', en: 'Relationship management.'})
    ],
    correct: 2,
    explanation: Q({es: 'Los 4 dominios de Goleman: Self-awareness, Self-management, Social awareness, Relationship management.', en: 'Goleman\'s 4 domains: Self-awareness, Self-management, Social awareness, Relationship management.'})
  }));

  QUESTIONS.push(mcq('p-043', {domain: 'people', topic: 'stakeholder', difficulty: 'medium',
    question: Q({es: 'Stakeholder con alto poder, baja legitimidad y alta urgencia. ¿Cómo clasifica Mitchell?', en: 'Stakeholder with high power, low legitimacy, high urgency. How does Mitchell classify?'}),
    options: [
      Q({es: 'Peligroso (dangerous).', en: 'Dangerous.'}),
      Q({es: 'Definitivo (definitive).', en: 'Definitive.'}),
      Q({es: 'Dependiente (dependent).', en: 'Dependent.'}),
      Q({es: 'Latente (dormant).', en: 'Latent (dormant).'})
    ],
    correct: 0,
    explanation: Q({es: 'Poder + Urgencia = Peligroso. Mitchell et al. 1997. Estrategia: keep satisfied.', en: 'Power + Urgency = Dangerous. Mitchell et al. 1997. Strategy: keep satisfied.'})
  }));

  QUESTIONS.push(mcq('p-044', {domain: 'people', topic: 'team', difficulty: 'hard',
    question: Q({es: 'PMI describe "forming-storming-norming-performing-adjourning". ¿Qué etapa puede tener sub-fases?', en: 'PMI describes forming-storming-norming-performing-adjourning. Which stage can have sub-phases?'}),
    options: [
      Q({es: 'Storming.', en: 'Storming.'}),
      Q({es: 'Forming.', en: 'Forming.'}),
      Q({es: 'Norming.', en: 'Norming.'}),
      Q({es: 'Performing.', en: 'Performing.'})
    ],
    correct: 0,
    explanation: Q({es: 'Storming es la etapa más conflictiva, con varias sub-fases de confrontación. Performing es la más estable.', en: 'Storming is the most conflictual stage, with several confrontation sub-phases. Performing is the most stable.'})
  }));

  QUESTIONS.push(mcq('p-045', {domain: 'people', topic: 'EI', difficulty: 'medium',
    question: Q({es: '¿Qué es la "Theory X" vs "Theory Y" de McGregor?', en: 'What is McGregor\'s "Theory X" vs "Theory Y"?'}),
    options: [
      Q({es: 'Theory X: personas perezosas, necesitan control. Theory Y: personas motivadas, autodirigidas.', en: 'Theory X: people are lazy, need control. Theory Y: people are motivated, self-directed.'}),
      Q({es: 'Dos frameworks de testing.', en: 'Two testing frameworks.'}),
      Q({es: 'Dos tipos de contratos.', en: 'Two types of contracts.'}),
      Q({es: 'Dos estilos de liderazgo del PMI.', en: 'Two PMI leadership styles.'})
    ],
    correct: 0,
    explanation: Q({es: 'McGregor: X (control) vs Y (empoderamiento). El PMBOK 8ª ed lo referencia al hablar de motivación.', en: 'McGregor: X (control) vs Y (empowerment). PMBOK 8th ed references it when discussing motivation.'})
  }));

  QUESTIONS.push(mcq('p-046', {domain: 'people', topic: 'stakeholder', difficulty: 'easy',
    question: Q({es: 'Un stakeholder se opone activamente al proyecto, pero su oposición se reduce con comunicación. ¿Qué nivel de la Engagement Matrix le asignas?', en: 'A stakeholder actively opposes the project but their opposition reduces with communication. What Engagement Matrix level?'}),
    options: [
      Q({es: 'Resistant → Supportive.', en: 'Resistant → Supportive.'}),
      Q({es: 'Unaware.', en: 'Unaware.'}),
      Q({es: 'Neutral.', en: 'Neutral.'}),
      Q({es: 'Leading.', en: 'Leading.'})
    ],
    correct: 0,
    explanation: Q({es: 'Resistant → Supportive es un avance positivo en el engagement.', en: 'Resistant → Supportive is a positive engagement advance.'})
  }));

  QUESTIONS.push(mcq('p-047', {domain: 'people', topic: 'comm', difficulty: 'hard',
    question: Q({es: 'Un PM tiene 20 stakeholders. Calcula el número de canales de comunicación si añade 10 más.', en: 'PM has 20 stakeholders. Calculate communication channels if adding 10 more.'}),
    options: [
      Q({es: '30*29/2 = 435.', en: '30*29/2 = 435.'}),
      Q({es: '20*19/2 = 190.', en: '20*19/2 = 190.'}),
      Q({es: '50 canales.', en: '50 channels.'}),
      Q({es: '10 canales.', en: '10 channels.'})
    ],
    correct: 0,
    explanation: Q({es: 'n(n-1)/2 con n=30 = 435. Crecimiento cuadrático, por eso gestionar stakeholders es crítico.', en: 'n(n-1)/2 with n=30 = 435. Quadratic growth, hence stakeholder management is critical.'})
  }));

  QUESTIONS.push(mcq('p-048', {domain: 'people', topic: 'negotiation', difficulty: 'medium',
    question: Q({es: 'PMI describe 5 técnicas de conflicto. ¿Cuál es la MÁS efectiva a largo plazo?', en: 'PMI describes 5 conflict techniques. Which is MOST effective long-term?'}),
    options: [
      Q({es: 'Collaborate / Problem Solve.', en: 'Collaborate / Problem Solve.'}),
      Q({es: 'Smooth / Accommodate.', en: 'Smooth / Accommodate.'}),
      Q({es: 'Compromise / Reconcile.', en: 'Compromise / Reconcile.'}),
      Q({es: 'Force / Direct.', en: 'Force / Direct.'})
    ],
    correct: 0,
    explanation: Q({es: 'Collaborate/Problem Solve: confronta el problema, busca win-win. La mejor para relaciones a largo plazo.', en: 'Collaborate/Problem Solve: confront the problem, seek win-win. Best for long-term relationships.'})
  }));

  QUESTIONS.push(mcq('p-049', {domain: 'people', topic: 'leadership', difficulty: 'hard',
    question: Q({es: '¿Cuál de los siguientes NO es un estilo de manejo de conflictos del PMBOK?', en: 'Which of the following is NOT a PMBOK conflict management style?'}),
    options: [
      Q({es: 'Withdraw / Avoid.', en: 'Withdraw / Avoid.'}),
      Q({es: 'Smooth / Accommodate.', en: 'Smooth / Accommodate.'}),
      Q({es: 'Negotiate / Bargain.', en: 'Negotiate / Bargain.'}),
      Q({es: 'Force / Direct.', en: 'Force / Direct.'})
    ],
    correct: 2,
    explanation: Q({es: 'Los 5 del PMBOK: Withdraw, Smooth, Compromise, Force, Collaborate. Negotiate/Bargain no es uno de ellos.', en: 'PMBOK\'s 5: Withdraw, Smooth, Compromise, Force, Collaborate. Negotiate/Bargain is not one of them.'})
  }));

  QUESTIONS.push(mcq('p-050', {domain: 'people', topic: 'team', difficulty: 'medium',
    question: Q({es: 'Cuando un equipo ágil llega a performing, ¿qué necesita para seguir mejorando?', en: 'When an agile team reaches performing, what does it need to keep improving?'}),
    options: [
      Q({es: 'Retrospectivas y experimentación continua.', en: 'Retrospectives and continuous experimentation.'}),
      Q({es: 'Dejarlo en paz.', en: 'Leave it alone.'}),
      Q({es: 'Más controles del PM.', en: 'More PM controls.'}),
      Q({es: 'Reestructurar el equipo.', en: 'Restructure the team.'})
    ],
    correct: 0,
    explanation: Q({es: 'Kaizen: mejora continua. Las retrospectivas y experimentación mantienen al equipo en alto rendimiento.', en: 'Kaizen: continuous improvement. Retrospectives and experimentation keep the team at high performance.'})
  }));

  // Export QUESTIONS reference for use in next file chunks
  global.__PARTIAL_QUESTIONS__ = QUESTIONS;
  global.__mcq__ = mcq;
  global.__Q__ = Q;
  // Also expose QUESTIONS so data-questions-2.js can pick it up
  if (!global.QUESTIONS) {
    global.QUESTIONS = QUESTIONS;
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
  }
})(window);
