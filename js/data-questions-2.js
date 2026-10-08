/* ==========================================================
   PMP Practice Lab — Question database part 2
   Adds 150+ more questions to global.QUESTIONS
   ========================================================== */
(function (global) {
  'use strict';

  const Q = (q) => ({ es: q.es, en: q.en });
  const QUESTIONS = global.__PARTIAL_QUESTIONS__ || [];

  function mcq(id, opts) {
    return Object.assign({
      id, type: 'mcq', domain: 'process', difficulty: 'medium',
      approach: 'hybrid', topic: 'general', tags: []
    }, opts);
  }

  // ========== PROCESS DOMAIN (41% of exam) ==========

  QUESTIONS.push(mcq('pr-001', {domain: 'process', topic: 'lifecycle', difficulty: 'medium',
    question: Q({es: 'Una empresa de dispositivos médicos tiene hardware con requisitos fijos y una app que requiere feedback de clínicos. ¿Qué enfoque?', en: 'A medical device company has hardware with fixed requirements and an app that needs clinician feedback. What approach?'}),
    options: [
      Q({es: 'Totalmente predictivo.', en: 'Fully predictive.'}),
      Q({es: 'Híbrido: predictivo para hardware, iterativo para app.', en: 'Hybrid: predictive for hardware, iterative for app.'}),
      Q({es: 'Totalmente ágil.', en: 'Fully agile.'}),
      Q({es: 'Totalmente adaptativo sin plan.', en: 'Fully adaptive with no plan.'})
    ],
    correct: 1,
    explanation: Q({es: 'Hardware regulatorio = predictivo. App con feedback = iterativo. Híbrido es la respuesta correcta.', en: 'Regulatory hardware = predictive. App with feedback = iterative. Hybrid is correct.'})
  }));

  QUESTIONS.push(mcq('pr-002', {domain: 'process', topic: 'risk', difficulty: 'hard',
    question: Q({es: 'Riesgo: probabilidad 40%, impacto $200K (EMV=$80K). Mitigación cuesta $25K y reduce prob a 15%. ¿Qué decisión?', en: 'Risk: probability 40%, impact $200K (EMV=$80K). Mitigation costs $25K and reduces prob to 15%. What decision?'}),
    options: [
      Q({es: 'No hacer nada.', en: 'Do nothing.'}),
      Q({es: 'Implementar mitigación: nuevo EMV=$30K + costo $25K = $55K. Ahorro = $25K.', en: 'Implement mitigation: new EMV=$30K + cost $25K = $55K. Savings = $25K.'}),
      Q({es: 'Transferir con seguro de $50K.', en: 'Transfer with $50K insurance.'}),
      Q({es: 'Aceptar con contingencia de $10K.', en: 'Accept with $10K contingency.'})
    ],
    correct: 1,
    explanation: Q({es: 'EMV original = $80K. EMV con mitigación = $30K + $25K = $55K. Ahorro = $25K. Mitigación rentable.', en: 'Original EMV = $80K. With mitigation = $30K + $25K = $55K. Savings = $25K.'})
  }));

  QUESTIONS.push(mcq('pr-003', {domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'PV=$100K, EV=$80K, AC=$90K, BAC=$200K. ¿EAC con método CPI (EAC = BAC/CPI)?', en: 'PV=$100K, EV=$80K, AC=$90K, BAC=$200K. EAC with CPI method (EAC = BAC/CPI)?'}),
    options: [
      Q({es: '$222,222', en: '$222,222'}),
      Q({es: '$225,000', en: '$225,000'}),
      Q({es: '$250,000', en: '$250,000'}),
      Q({es: '$200,000', en: '$200,000'})
    ],
    correct: 1,
    explanation: Q({es: 'CPI = EV/AC = 80/90 = 0.8889. EAC = 200/0.8889 = $225K.', en: 'CPI = EV/AC = 80/90 = 0.8889. EAC = 200/0.8889 = $225K.'})
  }));

  QUESTIONS.push(mcq('pr-004', {domain: 'process', topic: 'evm', difficulty: 'medium',
    question: Q({es: 'Si SPI < 1, significa que:', en: 'If SPI < 1, it means:'}),
    options: [
      Q({es: 'El proyecto está adelantado en cronograma.', en: 'The project is ahead of schedule.'}),
      Q({es: 'El proyecto está retrasado en cronograma.', en: 'The project is behind schedule.'}),
      Q({es: 'El proyecto está por encima del presupuesto.', en: 'The project is over budget.'}),
      Q({es: 'El proyecto está dentro del presupuesto.', en: 'The project is on budget.'})
    ],
    correct: 1,
    explanation: Q({es: 'SPI = EV/PV. Si <1, retraso. CPI = EV/AC. Si <1, sobrecosto.', en: 'SPI = EV/PV. If <1, behind. CPI = EV/AC. If <1, cost overrun.'})
  }));

  QUESTIONS.push(mcq('pr-005', {domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'PV=$50K, EV=$40K, AC=$55K. ¿CV y SV? ¿Qué indica?', en: 'PV=$50K, EV=$40K, AC=$55K. CV and SV? What do they indicate?'}),
    options: [
      Q({es: 'CV=-$15K (sobrecosto), SV=-$10K (retraso).', en: 'CV=-$15K (over budget), SV=-$10K (behind).'}),
      Q({es: 'CV=$5K (bajo presupuesto), SV=-$10K (retraso).', en: 'CV=$5K (under budget), SV=-$10K (behind).'}),
      Q({es: 'CV=+$5K, SV=+$10K.', en: 'CV=+$5K, SV=+$10K.'}),
      Q({es: 'CV=0, SV=0.', en: 'CV=0, SV=0.'})
    ],
    correct: 0,
    explanation: Q({es: 'CV = EV - AC = 40 - 55 = -15. SV = EV - PV = 40 - 50 = -10.', en: 'CV = EV - AC = 40 - 55 = -15. SV = EV - PV = 40 - 50 = -10.'})
  }));

  QUESTIONS.push(mcq('pr-006', {domain: 'process', topic: 'cpm', difficulty: 'hard',
    question: Q({es: 'Actividad con ES=5, EF=10, LS=8, LF=13. ¿Tipo y slack?', en: 'Activity with ES=5, EF=10, LS=8, LF=13. Type and slack?'}),
    options: [
      Q({es: 'No crítica, slack=3.', en: 'Non-critical, slack=3.'}),
      Q({es: 'Crítica, slack=0.', en: 'Critical, slack=0.'}),
      Q({es: 'No crítica, slack=8.', en: 'Non-critical, slack=8.'}),
      Q({es: 'Crítica, slack=5.', en: 'Critical, slack=5.'})
    ],
    correct: 0,
    explanation: Q({es: 'Slack = LS - ES = 8 - 5 = 3. Slack > 0 = no crítica.', en: 'Slack = LS - ES = 8 - 5 = 3. Slack > 0 = non-critical.'})
  }));

  QUESTIONS.push(mcq('pr-007', {domain: 'process', topic: 'estimation', difficulty: 'medium',
    question: Q({es: '¿Qué técnica usa la fórmula Beta = (P + 4M + O) / 6?', en: 'What technique uses the formula Beta = (P + 4M + O) / 6?'}),
    options: [
      Q({es: 'Estimación análoga.', en: 'Analogous estimation.'}),
      Q({es: 'PERT (tres valores).', en: 'PERT (three-point).'}),
      Q({es: 'Bottom-up.', en: 'Bottom-up.'}),
      Q({es: 'Paramétrica.', en: 'Parametric.'})
    ],
    correct: 1,
    explanation: Q({es: 'PERT usa P, M, O con distribución Beta. (P + 4M + O) / 6 = estimación ponderada.', en: 'PERT uses P, M, O with Beta distribution. (P + 4M + O) / 6 = weighted estimate.'})
  }));

  QUESTIONS.push(mcq('pr-008', {domain: 'process', topic: 'agile', difficulty: 'easy',
    question: Q({es: '¿Qué técnica usa Story Points y Fibonacci (1, 2, 3, 5, 8, 13…)?', en: 'What technique uses Story Points and Fibonacci (1, 2, 3, 5, 8, 13…)?'}),
    options: [
      Q({es: 'Planning Poker.', en: 'Planning Poker.'}),
      Q({es: 'Estimación análoga.', en: 'Analogous estimation.'}),
      Q({es: 'Earned Value.', en: 'Earned Value.'}),
      Q({es: 'Critical Path Method.', en: 'Critical Path Method.'})
    ],
    correct: 1,
    explanation: Q({es: 'Planning Poker usa cartas Fibonacci para estimar Story Points. La incertidumbre crece con el tamaño.', en: 'Planning Poker uses Fibonacci cards to estimate Story Points. Uncertainty grows with size.'})
  }));

  // Continue with pr-009 to pr-040
  QUESTIONS.push(mcq('pr-009', {domain: 'process', topic: 'risk', difficulty: 'hard',
    question: Q({es: 'Una empresa descubre una nueva regulación que afecta el proyecto. ¿Qué hacer?', en: 'A company discovers a new regulation affecting the project. What to do?'}),
    options: [
      Q({es: 'Aceptar.', en: 'Accept.'}),
      Q({es: 'Transferir con seguro.', en: 'Transfer with insurance.'}),
      Q({es: 'Evitar cambiando el alcance.', en: 'Avoid by changing scope.'}),
      Q({es: 'Escalar fuera del proyecto.', en: 'Escalate outside the project.'})
    ],
    correct: 3,
    explanation: Q({es: 'Una regulación nueva no es gestionable por el PM; debe escalar al portafolio, al programa o a la organización.', en: 'A new regulation is not manageable by the PM; must escalate to portfolio/program/organization.'})
  }));

  QUESTIONS.push(mcq('pr-010', {domain: 'process', topic: 'quality', difficulty: 'medium',
    question: Q({es: 'Un equipo ágil detecta que el 25% de las historias tienen defectos en producción. ¿Qué herramienta de calidad aplicar primero?', en: 'Agile team finds 25% of stories have production defects. Which quality tool apply first?'}),
    options: [
      Q({es: 'Diagrama de Ishikawa.', en: 'Ishikawa diagram.'}),
      Q({es: 'Retrospectiva + análisis de causa raíz (5 Whys).', en: 'Retrospective + root cause analysis (5 Whys).'}),
      Q({es: 'Control chart de Shewhart.', en: 'Shewhart control chart.'}),
      Q({es: 'Diagrama de Pareto.', en: 'Pareto chart.'})
    ],
    correct: 1,
    explanation: Q({es: 'En ágil, retrospectiva + 5 Whys es la primera línea para descubrir causa raíz.', en: 'In agile, retrospective + 5 Whys is the first line to find root cause.'})
  }));

  QUESTIONS.push(mcq('pr-011', {domain: 'process', topic: 'scope', difficulty: 'medium',
    question: Q({es: 'Un cliente pide agregar 5 features al final del proyecto. ¿Qué hacer?', en: 'A client asks to add 5 features at the end of the project. What to do?'}),
    options: [
      Q({es: 'Aceptar todo, el cliente tiene la razón.', en: 'Accept everything, the client is always right.'}),
      Q({es: 'Rechazar todo.', en: 'Reject everything.'}),
      Q({es: 'Evaluar el impacto en cronograma, costo y valor, y presentar opciones al equipo de gobierno.', en: 'Assess impact on schedule, cost, and value, and present options to the governance team.'}),
      Q({es: 'Mover al backlog y olvidarse.', en: 'Move to backlog and forget.'})
    ],
    correct: 2,
    explanation: Q({es: 'Cualquier cambio de alcance debe pasar por integrated change control. Triple impacto evaluado con governance.', en: 'Any scope change must go through integrated change control. Triple impact assessed with governance.'})
  }));

  QUESTIONS.push(mcq('pr-012', {domain: 'process', topic: 'procurement', difficulty: 'hard',
    question: Q({es: 'Un contrato Fixed Price (FP) tiene más riesgo financiero para:', en: 'A Fixed Price (FP) contract has more financial risk for:'}),
    options: [
      Q({es: 'El comprador.', en: 'The buyer.'}),
      Q({es: 'El vendedor.', en: 'The seller.'}),
      Q({es: 'Ambos por igual.', en: 'Both equally.'}),
      Q({es: 'El sponsor.', en: 'The sponsor.'})
    ],
    correct: 1,
    explanation: Q({es: 'FP = riesgo para el vendedor (asume sobrecosto). CPFF/T&M = riesgo para el comprador.', en: 'FP = risk for the seller (assumes cost overrun). CPFF/T&M = risk for the buyer.'})
  }));

  QUESTIONS.push(mcq('pr-013', {domain: 'process', topic: 'integration', difficulty: 'medium',
    question: Q({es: '¿Qué documento autoriza formalmente al PM a iniciar el proyecto?', en: 'What document formally authorizes the PM to start the project?'}),
    options: [
      Q({es: 'Project Management Plan.', en: 'Project Management Plan.'}),
      Q({es: 'Project Charter.', en: 'Project Charter.'}),
      Q({es: 'Statement of Work.', en: 'Statement of Work.'}),
      Q({es: 'Business Case.', en: 'Business Case.'})
    ],
    correct: 1,
    explanation: Q({es: 'El Project Charter autoriza formalmente al PM y le da autoridad sobre los recursos.', en: 'The Project Charter formally authorizes the PM and gives them authority over resources.'})
  }));

  QUESTIONS.push(mcq('pr-014', {domain: 'process', topic: 'integration', difficulty: 'hard',
    question: Q({es: 'Un cambio aprobado en el CCB implica:', en: 'A change approved by the CCB implies:'}),
    options: [
      Q({es: 'Solo actualizar el cronograma.', en: 'Update only the schedule.'}),
      Q({es: 'Actualizar todos los baselines y documentos afectados.', en: 'Update all affected baselines and documents.'}),
      Q({es: 'Comunicar sin actualizar documentos.', en: 'Communicate without updating documents.'}),
      Q({es: 'Anular el cambio.', en: 'Void the change.'})
    ],
    correct: 1,
    explanation: Q({es: 'Perform Integrated Change Control: si se aprueba, se actualizan todos los baselines, planes y documentos afectados.', en: 'Perform Integrated Change Control: if approved, all affected baselines, plans, and documents are updated.'})
  }));

  QUESTIONS.push(mcq('pr-015', {domain: 'process', topic: 'schedule', difficulty: 'medium',
    question: Q({es: '¿Diferencia entre fast-tracking y crashing?', en: 'Difference between fast-tracking and crashing?'}),
    options: [
      Q({es: 'No hay diferencia, son sinónimos.', en: 'No difference, they are synonyms.'}),
      Q({es: 'Fast-tracking = paralelizar actividades en serie. Crashing = agregar más recursos a la crítica.', en: 'Fast-tracking = parallelize activities in series. Crashing = add more resources to critical.'}),
      Q({es: 'Fast-tracking = agregar más gente. Crashing = reducir el alcance.', en: 'Fast-tracking = add more people. Crashing = reduce scope.'}),
      Q({es: 'Fast-tracking es solo para ágil.', en: 'Fast-tracking is only for agile.'})
    ],
    correct: 1,
    explanation: Q({es: 'Fast-tracking asume más riesgo de retrabajo. Crashing tiene costo extra. Ambos cambian la ruta crítica.', en: 'Fast-tracking assumes more rework risk. Crashing has extra cost. Both change the critical path.'})
  }));

  QUESTIONS.push(mcq('pr-016', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'En Scrum, ¿qué artefacto contiene la lista priorizada de trabajo del producto?', en: 'In Scrum, what artifact contains the prioritized list of product work?'}),
    options: [
      Q({es: 'Sprint Backlog.', en: 'Sprint Backlog.'}),
      Q({es: 'Product Backlog.', en: 'Product Backlog.'}),
      Q({es: 'Burndown Chart.', en: 'Burndown Chart.'}),
      Q({es: 'Definition of Done.', en: 'Definition of Done.'})
    ],
    correct: 1,
    explanation: Q({es: 'Product Backlog = lista priorizada del Product Owner. Sprint Backlog = subset del sprint.', en: 'Product Backlog = prioritized list by Product Owner. Sprint Backlog = sprint subset.'})
  }));

  QUESTIONS.push(mcq('pr-017', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'Equipo Scrum con velocidad 30 SP/sprint. Quedan 8 sprints, 290 SP en backlog. ¿Cumple el release plan?', en: 'Scrum team with velocity 30 SP/sprint. 8 sprints remain, 290 SP in backlog. Meets release plan?'}),
    options: [
      Q({es: 'Sí, 30*8=240 < 290 necesitan 10 sprints más.', en: 'Yes, 30*8=240 < 290 they need 10 more sprints.'}),
      Q({es: 'No. 30*8=240 < 290 no alcanzan en 8 sprints.', en: 'No. 30*8=240 < 290 cannot make it in 8 sprints.'}),
      Q({es: 'Sí, ajustando el DoD.', en: 'Yes, adjusting the DoD.'}),
      Q({es: 'Sí, eliminando al Scrum Master.', en: 'Yes, removing the Scrum Master.'})
    ],
    correct: 1,
    explanation: Q({es: '30*8=240 < 290. Faltan 50 SP ≈ 2 sprints. Ajustar velocity requiere varios sprints de datos.', en: '30*8=240 < 290. Missing 50 SP ≈ 2 sprints. Adjusting velocity requires several sprints of data.'})
  }));

  QUESTIONS.push(mcq('pr-018', {domain: 'process', topic: 'agile', difficulty: 'hard',
    question: Q({es: '¿Qué ceremonia ágil se enfoca en la inspección y adaptación del PROCESO del equipo?', en: 'Which agile ceremony focuses on inspection and adaptation of the team\'s PROCESS?'}),
    options: [
      Q({es: 'Daily Stand-up.', en: 'Daily Stand-up.'}),
      Q({es: 'Sprint Review.', en: 'Sprint Review.'}),
      Q({es: 'Sprint Retrospective.', en: 'Sprint Retrospective.'}),
      Q({es: 'Sprint Planning.', en: 'Sprint Planning.'})
    ],
    correct: 2,
    explanation: Q({es: 'Retrospectiva = proceso del equipo. Review = producto. Planning = compromiso. Stand-up = sincronización.', en: 'Retrospective = team process. Review = product. Planning = commitment. Stand-up = sync.'})
  }));

  QUESTIONS.push(mcq('pr-019', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: '¿Qué hacer cuando un equipo Scrum reporta un impedimento que no se puede resolver internamente?', en: 'What to do when a Scrum team reports an impediment that cannot be resolved internally?'}),
    options: [
      Q({es: 'Ignorarlo y continuar.', en: 'Ignore it and continue.'}),
      Q({es: 'El Scrum Master escala y trabaja con otros departamentos / sponsor.', en: 'The Scrum Master escalates and works with other departments / sponsor.'}),
      Q({es: 'El equipo trabaja horas extra.', en: 'The team works overtime.'}),
      Q({es: 'Se cancela el sprint.', en: 'Cancel the sprint.'})
    ],
    correct: 1,
    explanation: Q({es: 'El Scrum Master es responsable de eliminar impedimentos. Si están fuera del equipo, escala a la organización.', en: 'The Scrum Master is responsible for removing impediments. If outside the team, escalates to the organization.'})
  }));

  QUESTIONS.push(mcq('pr-020', {domain: 'process', topic: 'agile', difficulty: 'easy',
    question: Q({es: 'En Kanban, ¿qué representa el WIP limit?', en: 'In Kanban, what does the WIP limit represent?'}),
    options: [
      Q({es: 'El número de personas en el equipo.', en: 'The number of people on the team.'}),
      Q({es: 'El número máximo de tareas en una columna del tablero (Work In Progress).', en: 'The maximum number of tasks in a board column (Work In Progress).'}),
      Q({es: 'El número de sprints del proyecto.', en: 'The number of sprints in the project.'}),
      Q({es: 'El número de historias en el product backlog.', en: 'The number of stories in the product backlog.'})
    ],
    correct: 1,
    explanation: Q({es: 'WIP limit restringe tareas simultáneas en una etapa. Reduce lead time y expone cuellos de botella.', en: 'WIP limit restricts simultaneous tasks in a stage. Reduces lead time and exposes bottlenecks.'})
  }));

  // pr-021 to pr-040
  QUESTIONS.push(mcq('pr-021', {domain: 'process', topic: 'finance', difficulty: 'hard',
    question: Q({es: 'Proyecto con ROI 15%, NPV +$250K, payback 3 años. ¿Viable financieramente?', en: 'Project with 15% ROI, +$250K NPV, 3-year payback. Financially viable?'}),
    options: [
      Q({es: 'No, esperar al cierre.', en: 'No, wait until close.'}),
      Q({es: 'Sí, los tres indicadores son positivos.', en: 'Yes, all three indicators are positive.'}),
      Q({es: 'No, el NPV debe ser negativo.', en: 'No, NPV must be negative.'}),
      Q({es: 'No, el payback debe ser mayor a 5 años.', en: 'No, payback must be greater than 5 years.'})
    ],
    correct: 1,
    explanation: Q({es: 'ROI > WACC, NPV > 0, payback razonable = viabilidad financiera.', en: 'ROI > WACC, NPV > 0, reasonable payback = financial viability.'})
  }));

  QUESTIONS.push(mcq('pr-022', {domain: 'process', topic: 'finance', difficulty: 'medium',
    question: Q({es: '¿Qué es el "sunk cost" fallacy?', en: 'What is the "sunk cost" fallacy?'}),
    options: [
      Q({es: 'Invertir más en un proyecto que ya falló porque "ya invertimos mucho".', en: 'Investing more in a failed project because "we already invested a lot".'}),
      Q({es: 'Invertir en proyectos nuevos.', en: 'Investing in new projects.'}),
      Q({es: 'Cerrar un proyecto sin terminar.', en: 'Closing an unfinished project.'}),
      Q({es: 'Reducir el alcance de un proyecto.', en: 'Reducing project scope.'})
    ],
    correct: 0,
    explanation: Q({es: 'Sunk cost fallacy: continuar en mala decisión porque ya gastamos. La correcta se basa en costos/beneficios futuros.', en: 'Sunk cost fallacy: continue in a bad decision because we already spent. Correct decision is based on future cost/benefit.'})
  }));

  QUESTIONS.push(mcq('pr-023', {domain: 'process', topic: 'risk', difficulty: 'hard',
    question: Q({es: 'Empresa identifica riesgo de que un proveedor clave no entregue. ¿MEJOR estrategia para amenaza?', en: 'Company identifies risk that a key vendor will not deliver. BEST strategy for threat?'}),
    options: [
      Q({es: 'Accept.', en: 'Accept.'}),
      Q({es: 'Mitigate: pre-calificar un proveedor secundario y firmar contrato de respaldo.', en: 'Mitigate: pre-qualify a secondary vendor and sign a backup contract.'}),
      Q({es: 'Exploit.', en: 'Exploit.'}),
      Q({es: 'Share.', en: 'Share.'})
    ],
    correct: 1,
    explanation: Q({es: 'Mitigate reduce probabilidad o impacto. Pre-calificar un proveedor secundario reduce probabilidad. Exploit/Share son para oportunidades.', en: 'Mitigate reduces probability or impact. Pre-qualifying a secondary vendor reduces probability. Exploit/Share are for opportunities.'})
  }));

  QUESTIONS.push(mcq('pr-024', {domain: 'process', topic: 'risk', difficulty: 'medium',
    question: Q({es: 'Riesgo POSITIVO (oportunidad) con estrategia "asegurar que ocurra". ¿Nombre?', en: 'POSITIVE risk (opportunity) with strategy to "ensure it happens". Name?'}),
    options: [
      Q({es: 'Mitigate.', en: 'Mitigate.'}),
      Q({es: 'Avoid.', en: 'Avoid.'}),
      Q({es: 'Exploit.', en: 'Exploit.'}),
      Q({es: 'Transfer.', en: 'Transfer.'})
    ],
    correct: 2,
    explanation: Q({es: 'Para oportunidades: Exploit (asegurar), Enhance (aumentar), Share (compartir), Accept.', en: 'For opportunities: Exploit (ensure), Enhance (increase), Share (share), Accept.'})
  }));

  QUESTIONS.push(mcq('pr-025', {domain: 'process', topic: 'procurement', difficulty: 'hard',
    question: Q({es: 'En T&M (Time & Materials), el riesgo financiero es del:', en: 'In T&M (Time & Materials), financial risk is with the:'}),
    options: [
      Q({es: 'Vendedor.', en: 'Seller.'}),
      Q({es: 'Comprador.', en: 'Buyer.'}),
      Q({es: 'Sponsor.', en: 'Sponsor.'}),
      Q({es: 'El PMO.', en: 'The PMO.'})
    ],
    correct: 1,
    explanation: Q({es: 'T&M paga por horas/materiales; el comprador puede terminar pagando más. Útil para alcance ambiguo.', en: 'T&M pays for hours/materials; the buyer may end up paying more. Useful for ambiguous scope.'})
  }));

  QUESTIONS.push(mcq('pr-026', {domain: 'process', topic: 'quality', difficulty: 'medium',
    question: Q({es: 'En Seis Sigma, DMAIC significa:', en: 'In Six Sigma, DMAIC stands for:'}),
    options: [
      Q({es: 'Define, Measure, Analyze, Improve, Control.', en: 'Define, Measure, Analyze, Improve, Control.'}),
      Q({es: 'Design, Make, Accept, Iterate, Close.', en: 'Design, Make, Accept, Iterate, Close.'}),
      Q({es: 'Document, Map, Approve, Implement, Close.', en: 'Document, Map, Approve, Implement, Close.'}),
      Q({es: 'Direct, Manage, Act, Inspect, Correct.', en: 'Direct, Manage, Act, Inspect, Correct.'})
    ],
    correct: 0,
    explanation: Q({es: 'DMAIC: Define (problema), Measure (datos), Analyze (causa raíz), Improve (soluciones), Control (mantener). DMADV es para nuevos procesos.', en: 'DMAIC: Define, Measure, Analyze, Improve, Control. DMADV is for new processes.'})
  }));

  QUESTIONS.push(mcq('pr-027', {domain: 'process', topic: 'risk', difficulty: 'easy',
    question: Q({es: '¿Qué herramienta sirve para visualizar la causa raíz identificando categorías 6M (Método, Mano de obra, Máquina, Material, Medición, Medio ambiente)?', en: 'What tool visualizes root cause by identifying 6M categories (Method, Manpower, Machine, Material, Measurement, Environment)?'}),
    options: [
      Q({es: 'Diagrama de Ishikawa (espina de pescado).', en: 'Ishikawa (fishbone) diagram.'}),
      Q({es: 'Burndown chart.', en: 'Burndown chart.'}),
      Q({es: 'RACI.', en: 'RACI.'}),
      Q({es: 'Gantt chart.', en: 'Gantt chart.'})
    ],
    correct: 0,
    explanation: Q({es: 'Ishikawa categoriza causas en 6M u 8P/4S. Ideal para análisis de causa raíz en retrospectivas.', en: 'Ishikawa categorizes causes into 6M or 8P/4S. Ideal for root cause analysis in retrospectives.'})
  }));

  QUESTIONS.push(mcq('pr-028', {domain: 'process', topic: 'agile', difficulty: 'hard',
    question: Q({es: '¿Qué técnica SAFe pondera valor de negocio, urgencia crítica, reducción de riesgo y tamaño?', en: 'Which SAFe technique weights business value, time criticality, risk reduction, and job size?'}),
    options: [
      Q({es: 'MoSCoW.', en: 'MoSCoW.'}),
      Q({es: 'Kano Model.', en: 'Kano Model.'}),
      Q({es: 'WSJF (Weighted Shortest Job First).', en: 'WSJF (Weighted Shortest Job First).'}),
      Q({es: 'Buy a Feature.', en: 'Buy a Feature.'})
    ],
    correct: 2,
    explanation: Q({es: 'WSJF = (BV + TC + RR) / JS. SAFe lo usa para ordenar el Program Backlog.', en: 'WSJF = (BV + TC + RR) / JS. SAFe uses it to order the Program Backlog.'})
  }));

  QUESTIONS.push(mcq('pr-029', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'En Release Planning en Scrum, ¿qué artefacto muestra el trabajo restante en el tiempo?', en: 'In Release Planning in Scrum, what artifact shows remaining work over time?'}),
    options: [
      Q({es: 'Velocity chart.', en: 'Velocity chart.'}),
      Q({es: 'Burndown chart.', en: 'Burndown chart.'}),
      Q({es: 'Pie chart.', en: 'Pie chart.'}),
      Q({es: 'Pareto chart.', en: 'Pareto chart.'})
    ],
    correct: 1,
    explanation: Q({es: 'Burndown = trabajo restante vs tiempo (descendente). Burnup = trabajo completado (ascendente).', en: 'Burndown = remaining work over time (descending). Burnup = completed work (ascending).'})
  }));

  QUESTIONS.push(mcq('pr-030', {domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'CPI=1.1, SPI=0.9. ¿Qué significa?', en: 'CPI=1.1, SPI=0.9. What does it mean?'}),
    options: [
      Q({es: 'Bajo presupuesto pero retrasado.', en: 'Under budget but behind schedule.'}),
      Q({es: 'Sobrecosto y adelantado.', en: 'Over budget and ahead of schedule.'}),
      Q({es: 'Bajo presupuesto y adelantado.', en: 'Under budget and ahead of schedule.'}),
      Q({es: 'Sobrecosto y retrasado.', en: 'Over budget and behind schedule.'})
    ],
    correct: 0,
    explanation: Q({es: 'CPI>1 = bajo presupuesto. SPI<1 = retrasado.', en: 'CPI>1 = under budget. SPI<1 = behind schedule.'})
  }));

  // pr-031 to pr-050 (more process)
  QUESTIONS.push(mcq('pr-031', {domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'CPI=0.7, SPI=0.6. ¿Situación y medida?', en: 'CPI=0.7, SPI=0.6. Situation and measure?'}),
    options: [
      Q({es: 'Crítica: retraso y sobrecosto significativos. Análisis de causa raíz, reevaluar EAC, acciones correctivas urgentes.', en: 'Critical: significant delay and cost overrun. Root cause analysis, re-evaluate EAC, urgent corrective actions.'}),
      Q({es: 'Proyecto normal, no hacer nada.', en: 'Normal project, do nothing.'}),
      Q({es: 'Cancelar inmediatamente sin análisis.', en: 'Cancel immediately without analysis.'}),
      Q({es: 'Aceptar y continuar sin cambios.', en: 'Accept and continue without changes.'})
    ],
    correct: 0,
    explanation: Q({es: 'CPI<1 y SPI<1 = problemas serios. Acción urgente basada en análisis.', en: 'CPI<1 and SPI<1 = serious problems. Urgent action based on analysis.'})
  }));

  QUESTIONS.push(mcq('pr-032', {domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'BAC=$500K, EV=$200K, AC=$220K. ¿EAC con método BAC/CPI y "as if just started"?', en: 'BAC=$500K, EV=$200K, AC=$220K. EAC with BAC/CPI and "as if just started"?'}),
    options: [
      Q({es: 'EAC1 = $550K, EAC2 = $520K.', en: 'EAC1 = $550K, EAC2 = $520K.'}),
      Q({es: 'EAC1 = $500K, EAC2 = $500K.', en: 'EAC1 = $500K, EAC2 = $500K.'}),
      Q({es: 'EAC1 = $220K, EAC2 = $300K.', en: 'EAC1 = $220K, EAC2 = $300K.'}),
      Q({es: 'EAC1 = $0, EAC2 = $0.', en: 'EAC1 = $0, EAC2 = $0.'})
    ],
    correct: 0,
    explanation: Q({es: 'CPI = 200/220 = 0.909. EAC1 = 500/0.909 = $550K. EAC2 = 220 + (500-200) = $520K.', en: 'CPI = 200/220 = 0.909. EAC1 = 500/0.909 = $550K. EAC2 = 220 + (500-200) = $520K.'})
  }));

  QUESTIONS.push(mcq('pr-033', {domain: 'process', topic: 'risk', difficulty: 'hard',
    question: Q({es: 'Empresa identifica riesgo de que nueva regulación ambiental entre en vigor antes de lo previsto. ¿Qué hacer?', en: 'Company identifies risk that new environmental regulations take effect earlier. What to do?'}),
    options: [
      Q({es: 'Esperar a que entre en vigor.', en: 'Wait for it to take effect.'}),
      Q({es: 'Documentar, monitorear fuentes legislativas, y tener plan de contingencia listo.', en: 'Document, monitor legislative sources, and have a contingency plan ready.'}),
      Q({es: 'Cancelar el proyecto.', en: 'Cancel the project.'}),
      Q({es: 'Ignorar el riesgo.', en: 'Ignore the risk.'})
    ],
    correct: 1,
    explanation: Q({es: 'Identificar + monitorear + plan de contingencia = gestión de riesgo.', en: 'Identify + monitor + contingency plan = risk management.'})
  }));

  QUESTIONS.push(mcq('pr-034', {domain: 'process', topic: 'procurement', difficulty: 'hard',
    question: Q({es: '¿Qué contrato paga todos los costos reembolsables + fee que se ajusta según resultado final?', en: 'What contract pays all reimbursable costs + fee adjusted based on final result?'}),
    options: [
      Q({es: 'CPIF (Cost Plus Incentive Fee).', en: 'CPIF (Cost Plus Incentive Fee).'}),
      Q({es: 'FFP (Firm Fixed Price).', en: 'FFP (Firm Fixed Price).'}),
      Q({es: 'CPFF (Cost Plus Fixed Fee).', en: 'CPFF (Cost Plus Fixed Fee).'}),
      Q({es: 'T&M (Time & Materials).', en: 'T&M (Time & Materials).'})
    ],
    correct: 0,
    explanation: Q({es: 'CPIF: costos + fee variable según performance. CPFF: fee fijo. FPIF: precio fijo + incentivo.', en: 'CPIF: costs + variable fee. CPFF: fixed fee. FPIF: fixed price + incentive.'})
  }));

  QUESTIONS.push(mcq('pr-035', {domain: 'process', topic: 'scope', difficulty: 'medium',
    question: Q({es: 'Un cliente sigue agregando "small changes" sin pasar por change control. ¿Qué técnica aplicar?', en: 'A client keeps adding "small changes" without change control. What technique to apply?'}),
    options: [
      Q({es: 'Aceptar todo para mantener la relación.', en: 'Accept everything to keep the relationship.'}),
      Q({es: 'Implementar un CCB y documentar formalmente cualquier cambio, sin importar el tamaño.', en: 'Implement a CCB and formally document any change, regardless of size.'}),
      Q({es: 'Renunciar al proyecto.', en: 'Quit the project.'}),
      Q({es: 'Cobrar extra sin avisar.', en: 'Charge extra without notice.'})
    ],
    correct: 1,
    explanation: Q({es: 'Gold plating y scope creep se controlan con change control formal, sin excepciones por tamaño.', en: 'Gold plating and scope creep are controlled with formal change control, without exceptions for size.'})
  }));

  QUESTIONS.push(mcq('pr-036', {domain: 'process', topic: 'agile', difficulty: 'hard',
    question: Q({es: 'Equipo Scrum con 6 personas, 5 SP/persona/sprint. ¿Capacity por sprint?', en: 'Scrum team with 6 people, 5 SP/person/sprint. Capacity per sprint?'}),
    options: [
      Q({es: '30 SP/sprint.', en: '30 SP/sprint.'}),
      Q({es: '6 SP/sprint.', en: '6 SP/sprint.'}),
      Q({es: '5 SP/sprint.', en: '5 SP/sprint.'}),
      Q({es: '11 SP/sprint.', en: '11 SP/sprint.'})
    ],
    correct: 0,
    explanation: Q({es: 'Capacity = personas × SP/persona = 6 × 5 = 30. La velocity real viene de sprints anteriores.', en: 'Capacity = people × SP/person = 6 × 5 = 30. Real velocity comes from previous sprints.'})
  }));

  QUESTIONS.push(mcq('pr-037', {domain: 'process', topic: 'cpm', difficulty: 'hard',
    question: Q({es: 'Actividad con duración 5 días, ES=10. ¿EF?', en: 'Activity with duration 5 days, ES=10. EF?'}),
    options: [
      Q({es: '15.', en: '15.'}),
      Q({es: '5.', en: '5.'}),
      Q({es: '10.', en: '10.'}),
      Q({es: '20.', en: '20.'})
    ],
    correct: 0,
    explanation: Q({es: 'EF = ES + duración = 10 + 5 = 15. Forward pass.', en: 'EF = ES + duration = 10 + 5 = 15. Forward pass.'})
  }));

  QUESTIONS.push(mcq('pr-038', {domain: 'process', topic: 'quality', difficulty: 'medium',
    question: Q({es: 'Equipo quiere reducir defectos en producción. ¿Qué métrica de calidad es MÁS útil?', en: 'Team wants to reduce production defects. Which quality metric is MOST useful?'}),
    options: [
      Q({es: 'Defect Density (defectos por KLOC o por punto de función).', en: 'Defect Density (defects per KLOC or per function point).'}),
      Q({es: 'SPI.', en: 'SPI.'}),
      Q({es: 'CPI.', en: 'CPI.'}),
      Q({es: 'ROI.', en: 'ROI.'})
    ],
    correct: 0,
    explanation: Q({es: 'Defect Density mide defectos por tamaño, ideal para tracking de calidad.', en: 'Defect Density measures defects per size, ideal for quality tracking.'})
  }));

  QUESTIONS.push(mcq('pr-039', {domain: 'process', topic: 'estimation', difficulty: 'hard',
    question: Q({es: '¿Qué técnica usa la fórmula (P + 4M + O) / 6 y es útil con poca información histórica?', en: 'What technique uses (P + 4M + O) / 6 and is useful with little historical information?'}),
    options: [
      Q({es: 'Estimación por 3 valores (PERT).', en: 'Three-point estimation (PERT).'}),
      Q({es: 'Bottom-up.', en: 'Bottom-up.'}),
      Q({es: 'Análoga.', en: 'Analogous.'}),
      Q({es: 'Paramétrica.', en: 'Parametric.'})
    ],
    correct: 0,
    explanation: Q({es: 'PERT (3 valores) usa distribución Beta. Análoga usa proyectos similares; paramétrica usa modelos.', en: 'PERT (3 values) uses Beta distribution. Analogous uses similar projects; parametric uses models.'})
  }));

  QUESTIONS.push(mcq('pr-040', {domain: 'process', topic: 'cpm', difficulty: 'medium',
    question: Q({es: '¿Cuál es la ruta crítica?', en: 'What is the critical path?'}),
    options: [
      Q({es: 'La secuencia más larga de actividades dependientes; determina la duración mínima del proyecto.', en: 'The longest sequence of dependent activities; determines the minimum project duration.'}),
      Q({es: 'La secuencia más corta de actividades.', en: 'The shortest sequence of activities.'}),
      Q({es: 'El camino más caro.', en: 'The most expensive path.'}),
      Q({es: 'Una lista de stakeholders.', en: 'A list of stakeholders.'})
    ],
    correct: 0,
    explanation: Q({es: 'Critical Path = la ruta más larga (no más corta) de actividades dependientes.', en: 'Critical Path = the longest (not shortest) sequence of dependent activities.'})
  }));

  // pr-041 to pr-050
  QUESTIONS.push(mcq('pr-041', {domain: 'process', topic: 'wbs', difficulty: 'hard',
    question: Q({es: 'Un proyecto tiene 12 entregables principales y 50 sub-entregables. ¿Cuántos paquetes de trabajo tiene?', en: 'A project has 12 main deliverables and 50 sub-deliverables. How many work packages?'}),
    options: [
      Q({es: '50 paquetes de trabajo.', en: '50 work packages.'}),
      Q({es: '12.', en: '12.'}),
      Q({es: '62.', en: '62.'}),
      Q({es: '600.', en: '600.'})
    ],
    correct: 0,
    explanation: Q({es: 'Los paquetes de trabajo están en el nivel más bajo del WBS. 50 sub-entregables = 50 work packages.', en: 'Work packages are at the lowest WBS level. 50 sub-deliverables = 50 work packages.'})
  }));

  QUESTIONS.push(mcq('pr-042', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'En Scrum, ¿quién es responsable de mantener el Sprint Backlog actualizado?', en: 'In Scrum, who is responsible for keeping the Sprint Backlog updated?'}),
    options: [
      Q({es: 'El equipo de desarrollo.', en: 'The development team.'}),
      Q({es: 'El Product Owner.', en: 'The Product Owner.'}),
      Q({es: 'El Scrum Master.', en: 'The Scrum Master.'}),
      Q({es: 'El cliente.', en: 'The customer.'})
    ],
    correct: 0,
    explanation: Q({es: 'El Sprint Backlog es del equipo de desarrollo. Lo actualizan a medida que avanzan.', en: 'The Sprint Backlog belongs to the development team. They update it as they progress.'})
  }));

  QUESTIONS.push(mcq('pr-043', {domain: 'process', topic: 'quality', difficulty: 'hard',
    question: Q({es: 'Equipo reporta 20% del tiempo en retrabajo. ¿Qué técnica de calidad es MEJOR?', en: 'Team reports 20% of time on rework. What quality technique is BEST?'}),
    options: [
      Q({es: 'Análisis de causa raíz (5 Whys, Ishikawa) + prevención (shift-left testing, code reviews).', en: 'Root cause analysis (5 Whys, Ishikawa) + prevention (shift-left testing, code reviews).'}),
      Q({es: 'Trabajar más horas.', en: 'Work more hours.'}),
      Q({es: 'Reasignar el equipo.', en: 'Reassign the team.'}),
      Q({es: 'Reducir el alcance.', en: 'Reduce scope.'})
    ],
    correct: 0,
    explanation: Q({es: 'Retrabajo = problema de calidad. Causa raíz + prevención es la solución.', en: 'Rework = quality problem. Root cause + prevention is the solution.'})
  }));

  QUESTIONS.push(mcq('pr-044', {domain: 'process', topic: 'risk', difficulty: 'hard',
    question: Q({es: '3 riesgos independientes con prob 0.2, 0.3, 0.4. ¿Probabilidad de que NINGUNO ocurra?', en: '3 independent risks with prob 0.2, 0.3, 0.4. Probability that NONE occurs?'}),
    options: [
      Q({es: '0.336 (= 0.8*0.7*0.6).', en: '0.336 (= 0.8*0.7*0.6).'}),
      Q({es: '0.9.', en: '0.9.'}),
      Q({es: '0.024.', en: '0.024.'}),
      Q({es: '0.5.', en: '0.5.'})
    ],
    correct: 0,
    explanation: Q({es: 'P(A and B) = P(A) × P(B). P(ninguno) = 0.8 × 0.7 × 0.6 = 0.336.', en: 'P(A and B) = P(A) × P(B). P(none) = 0.8 × 0.7 × 0.6 = 0.336.'})
  }));

  QUESTIONS.push(mcq('pr-045', {domain: 'process', topic: 'scope', difficulty: 'medium',
    question: Q({es: 'PM identifica que el equipo trabaja en features NO en el Scope Statement. ¿Qué hacer?', en: 'PM identifies the team is working on features NOT in the Scope Statement. What to do?'}),
    options: [
      Q({es: 'Detener el trabajo, documentar como gold plating o scope creep, y pasar por change control.', en: 'Stop the work, document as gold plating or scope creep, and go through change control.'}),
      Q({es: 'Permitir que continúe.', en: 'Allow it to continue.'}),
      Q({es: 'Cancelar el proyecto.', en: 'Cancel the project.'}),
      Q({es: 'Culpar al equipo.', en: 'Blame the team.'})
    ],
    correct: 0,
    explanation: Q({es: 'Gold plating y scope creep se controlan con change control.', en: 'Gold plating and scope creep are controlled with change control.'})
  }));

  QUESTIONS.push(mcq('pr-046', {domain: 'process', topic: 'finance', difficulty: 'hard',
    question: Q({es: 'Proyecto con EAC = $600K, AC = $300K. ¿Cuánto falta gastar (ETC)?', en: 'Project with EAC = $600K, AC = $300K. How much remains (ETC)?'}),
    options: [
      Q({es: '$300K (ETC = EAC - AC).', en: '$300K (ETC = EAC - AC).'}),
      Q({es: '$100K.', en: '$100K.'}),
      Q({es: '$600K.', en: '$600K.'}),
      Q({es: '$0.', en: '$0.'})
    ],
    correct: 0,
    explanation: Q({es: 'ETC = EAC - AC = 600 - 300 = 300. Costo restante para terminar.', en: 'ETC = EAC - AC = 600 - 300 = 300. Remaining cost to finish.'})
  }));

  QUESTIONS.push(mcq('pr-047', {domain: 'process', topic: 'safe', difficulty: 'hard',
    question: Q({es: 'En SAFe, ¿diferencia entre PI Planning y Sprint Planning?', en: 'In SAFe, difference between PI Planning and Sprint Planning?'}),
    options: [
      Q({es: 'PI Planning coordina múltiples equipos en 8-12 semanas. Sprint Planning es dentro de un equipo para 2 semanas.', en: 'PI Planning coordinates multiple teams in 8-12 weeks. Sprint Planning is within a team for 2 weeks.'}),
      Q({es: 'No hay diferencia.', en: 'No difference.'}),
      Q({es: 'PI Planning es solo para el PMO.', en: 'PI Planning is only for the PMO.'}),
      Q({es: 'Sprint Planning es de 1 año.', en: 'Sprint Planning is 1 year.'})
    ],
    correct: 0,
    explanation: Q({es: 'PI Planning: 2 días, múltiples ARTs, 8-12 semanas. Sprint Planning: 4-8 horas, 1 equipo, 2 semanas.', en: 'PI Planning: 2 days, multiple ARTs, 8-12 weeks. Sprint Planning: 4-8 hours, 1 team, 2 weeks.'})
  }));

  QUESTIONS.push(mcq('pr-048', {domain: 'process', topic: 'quality', difficulty: 'medium',
    question: Q({es: '¿Cuál de los siguientes NO es una práctica de mejora de calidad?', en: 'Which is NOT a quality improvement practice?'}),
    options: [
      Q({es: 'Code reviews.', en: 'Code reviews.'}),
      Q({es: 'Test-Driven Development (TDD).', en: 'Test-Driven Development (TDD).'}),
      Q({es: 'Pair programming.', en: 'Pair programming.'}),
      Q({es: 'Contratar sin verificar skills.', en: 'Hiring without verifying skills.'})
    ],
    correct: 3,
    explanation: Q({es: 'Code reviews, TDD, pair programming son prácticas. Contratar sin verificar no.', en: 'Code reviews, TDD, pair programming are practices. Hiring without verifying is not.'})
  }));

  QUESTIONS.push(mcq('pr-049', {domain: 'process', topic: 'risk', difficulty: 'medium',
    question: Q({es: '¿Qué es un "residual risk"?', en: 'What is a "residual risk"?'}),
    options: [
      Q({es: 'El riesgo que queda DESPUÉS de aplicar las respuestas de riesgo.', en: 'The risk that remains AFTER applying risk responses.'}),
      Q({es: 'El riesgo original antes de cualquier respuesta.', en: 'The original risk before any response.'}),
      Q({es: 'Un riesgo secundario.', en: 'A secondary risk.'}),
      Q({es: 'Un riesgo aceptado.', en: 'An accepted risk.'})
    ],
    correct: 0,
    explanation: Q({es: 'Residual = lo que queda. Secondary = riesgo causado por la respuesta. Accepted = decisión explícita.', en: 'Residual = what remains. Secondary = risk caused by response. Accepted = explicit decision.'})
  }));

  QUESTIONS.push(mcq('pr-050', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'Un equipo ágil mide "cycle time". ¿Qué indica?', en: 'Agile team measures "cycle time". What does it indicate?'}),
    options: [
      Q({es: 'Tiempo desde que un item empieza a trabajarse hasta que se completa.', en: 'Time from when an item starts being worked on until it is completed.'}),
      Q({es: 'Tiempo total de un sprint.', en: 'Total sprint time.'}),
      Q({es: 'Velocidad del equipo.', en: 'Team velocity.'}),
      Q({es: 'Cantidad de historias completadas.', en: 'Number of stories completed.'})
    ],
    correct: 0,
    explanation: Q({es: 'Cycle time = tiempo de procesamiento. Lead time = desde solicitud hasta entrega.', en: 'Cycle time = processing time. Lead time = from request to delivery.'})
  }));

  // ========== BUSINESS ENVIRONMENT (26% of exam) ==========

  QUESTIONS.push(mcq('be-001', {domain: 'business', topic: 'value', difficulty: 'medium',
    question: Q({es: 'Proyecto entrega a tiempo y en presupuesto, pero el ROI es negativo. ¿Qué indica?', en: 'Project delivers on time and on budget, but ROI is negative. What does it indicate?'}),
    options: [
      Q({es: 'Éxito porque cumplió restricciones.', en: 'Success because it met constraints.'}),
      Q({es: 'Fracaso en valor de negocio; entregó outputs pero no outcomes.', en: 'Business value failure; delivered outputs but not outcomes.'}),
      Q({es: 'El sponsor no es competente.', en: 'The sponsor is not competent.'}),
      Q({es: 'El equipo necesita capacitación.', en: 'The team needs training.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMI 2026 separa project success de value success. Outputs ≠ outcomes.', en: 'PMI 2026 separates project success from value success. Outputs ≠ outcomes.'})
  }));

  QUESTIONS.push(mcq('be-002', {domain: 'business', topic: 'compliance', difficulty: 'hard',
    question: Q({es: 'Una nueva ley de protección de datos entra en vigor en 6 meses. El proyecto almacena datos en formato no compliant. ¿Qué hacer?', en: 'A new data protection law takes effect in 6 months. Project stores data in non-compliant format. What to do?'}),
    options: [
      Q({es: 'Ignorar la ley hasta que entre en vigor.', en: 'Ignore the law until it takes effect.'}),
      Q({es: 'Documentar el riesgo, evaluar impacto y presentar plan de remediación al comité de gobernanza.', en: 'Document the risk, assess impact, and present remediation plan to the governance committee.'}),
      Q({es: 'Cancelar el proyecto inmediatamente.', en: 'Cancel the project immediately.'}),
      Q({es: 'Pedir al equipo que ignore la ley.', en: 'Ask the team to ignore the law.'})
    ],
    correct: 1,
    explanation: Q({es: 'El PM debe gestionar el riesgo de compliance: documentar, evaluar, escalar. Ignorancia deliberada es violación ética.', en: 'PM must manage compliance risk: document, assess, escalate. Willful ignorance is an ethical violation.'})
  }));

  QUESTIONS.push(mcq('be-003', {domain: 'business', topic: 'benefits', difficulty: 'medium',
    question: Q({es: '¿Qué rol es el principal responsable de la realización de beneficios?', en: 'Which role is primarily responsible for benefits realization?'}),
    options: [
      Q({es: 'Project Manager.', en: 'Project Manager.'}),
      Q({es: 'Product Owner.', en: 'Product Owner.'}),
      Q({es: 'Sponsor / Business Owner.', en: 'Sponsor / Business Owner.'}),
      Q({es: 'Scrum Master.', en: 'Scrum Master.'})
    ],
    correct: 2,
    explanation: Q({es: 'El sponsor es el "custodio del valor" y responsable de benefits realization post-entrega.', en: 'The sponsor is the "value custodian" responsible for post-delivery benefits realization.'})
  }));

  QUESTIONS.push(mcq('be-004', {domain: 'business', topic: 'ethics', difficulty: 'easy',
    question: Q({es: '¿Cuáles son los valores centrales del PMI Code of Ethics?', en: 'What are the core values of the PMI Code of Ethics?'}),
    options: [
      Q({es: 'Responsabilidad, Respeto, Equidad, Honestidad.', en: 'Responsibility, Respect, Fairness, Honesty.'}),
      Q({es: 'Velocidad, Costo, Calidad, Alcance.', en: 'Speed, Cost, Quality, Scope.'}),
      Q({es: 'Innovación, Competitividad, Rentabilidad.', en: 'Innovation, Competitiveness, Profitability.'}),
      Q({es: 'Liderazgo, Estrategia, Cultura, Personas.', en: 'Leadership, Strategy, Culture, People.'})
    ],
    correct: 0,
    explanation: Q({es: 'PMI Code: Responsibility, Respect, Fairness, Honesty.', en: 'PMI Code: Responsibility, Respect, Fairness, Honesty.'})
  }));

  QUESTIONS.push(mcq('be-005', {domain: 'business', topic: 'strategy', difficulty: 'hard',
    question: Q({es: 'Empresa con proyecto alineado con transformación digital. ¿Cómo se mide el valor de negocio?', en: 'Company with a project aligned with digital transformation. How is business value measured?'}),
    options: [
      Q({es: 'Por el número de líneas de código entregadas.', en: 'By the number of lines of code delivered.'}),
      Q({es: 'Por métricas de outcomes: NPS, revenue incremental, market share, time-to-market.', en: 'By outcome metrics: NPS, incremental revenue, market share, time-to-market.'}),
      Q({es: 'Por la cantidad de horas trabajadas.', en: 'By the amount of hours worked.'}),
      Q({es: 'Por el número de historias completadas.', en: 'By the number of stories completed.'})
    ],
    correct: 1,
    explanation: Q({es: 'Business value se mide con outcomes. Outputs (líneas, horas) no son outcomes.', en: 'Business value is measured with outcomes. Outputs (lines, hours) are not outcomes.'})
  }));

  QUESTIONS.push(mcq('be-006', {domain: 'business', topic: 'ethics', difficulty: 'medium',
    question: Q({es: 'PM descubre que un miembro del equipo falsifica reportes de progreso. ¿Qué debe hacer?', en: 'PM discovers a team member is falsifying progress reports. What to do?'}),
    options: [
      Q({es: 'Ignorarlo para mantener la moral del equipo.', en: 'Ignore it to maintain team morale.'}),
      Q({es: 'Reportar al sponsor, documentar el incidente y tomar acción correctiva.', en: 'Report to the sponsor, document the incident, and take corrective action.'}),
      Q({es: 'Cubrir al miembro del equipo porque es su amigo.', en: 'Cover the team member because they are a friend.'}),
      Q({es: 'Publicar en redes sociales.', en: 'Publish on social media.'})
    ],
    correct: 1,
    explanation: Q({es: 'Honesty es uno de los 4 valores del PMI Code. Falsificar reportes es violación ética grave.', en: 'Honesty is one of the 4 PMI Code values. Falsifying reports is a serious ethical violation.'})
  }));

  QUESTIONS.push(mcq('be-007', {domain: 'business', topic: 'pmo', difficulty: 'medium',
    question: Q({es: 'Una PMO de tipo "Controlling" se enfoca en:', en: 'A "Controlling" PMO focuses on:'}),
    options: [
      Q({es: 'Controlar el cumplimiento de estándares, frameworks y procesos a través de auditorías y métricas.', en: 'Control compliance with standards, frameworks, and processes through audits and metrics.'}),
      Q({es: 'Solo dar soporte a los PMs con plantillas y herramientas.', en: 'Only support PMs with templates and tools.'}),
      Q({es: 'Tomar control directo de los proyectos.', en: 'Take direct control of projects.'}),
      Q({es: 'Auditar finanzas solamente.', en: 'Audit only finances.'})
    ],
    correct: 0,
    explanation: Q({es: 'Controlling PMO: bajo control, alta compliance. Supportive: bajo control, alto soporte. Directive: alto control.', en: 'Controlling PMO: low control, high compliance. Supportive: low control, high support. Directive: high control.'})
  }));

  QUESTIONS.push(mcq('be-008', {domain: 'business', topic: 'program', difficulty: 'hard',
    question: Q({es: 'Un proyecto individual es parte de un programa que lanza una nueva línea de productos. ¿Quién es accountable del éxito del programa?', en: 'An individual project is part of a program launching a new product line. Who is accountable for program success?'}),
    options: [
      Q({es: 'El PM del proyecto individual.', en: 'The PM of the individual project.'}),
      Q({es: 'El Program Manager.', en: 'The Program Manager.'}),
      Q({es: 'El equipo.', en: 'The team.'}),
      Q({es: 'El Scrum Master.', en: 'The Scrum Master.'})
    ],
    correct: 1,
    explanation: Q({es: 'Program Manager: accountable de la entrega de beneficios del programa.', en: 'Program Manager: accountable for program benefits delivery.'})
  }));

  QUESTIONS.push(mcq('be-009', {domain: 'business', topic: 'compliance', difficulty: 'medium',
    question: Q({es: '¿Qué es un "compliance audit"?', en: 'What is a "compliance audit"?'}),
    options: [
      Q({es: 'Una revisión para verificar que el proyecto cumple con políticas, regulaciones y estándares aplicables.', en: 'A review to verify the project complies with applicable policies, regulations, and standards.'}),
      Q({es: 'Un análisis de causa raíz.', en: 'A root cause analysis.'}),
      Q({es: 'Un retrospective.', en: 'A retrospective.'}),
      Q({es: 'Un análisis de riesgo cuantitativo.', en: 'A quantitative risk analysis.'})
    ],
    correct: 0,
    explanation: Q({es: 'Compliance audit: revisión formal para asegurar cumplimiento con leyes, regulaciones, políticas y estándares (PMBOK 8ª ed).', en: 'Compliance audit: formal review to ensure compliance with laws, regulations, policies, and standards (PMBOK 8th ed).'})
  }));

  QUESTIONS.push(mcq('be-010', {domain: 'business', topic: 'ai', difficulty: 'medium',
    question: Q({es: 'Empresa quiere usar IA generativa para redactar documentos de proyecto. ¿Principal riesgo ético?', en: 'Company wants to use generative AI to draft project documents. Main ethical risk?'}),
    options: [
      Q({es: 'El costo de la licencia.', en: 'The license cost.'}),
      Q({es: 'Sesgos en los datos, propiedad intelectual, privacidad y verificación de la información.', en: 'Biases in data, intellectual property, privacy, and verification of generated information.'}),
      Q({es: 'El color de la interfaz.', en: 'The interface color.'}),
      Q({es: 'La velocidad de generación.', en: 'The generation speed.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMBOK 8ª ed Apéndice X3 sobre IA destaca riesgos éticos: sesgos, IP, privacidad, alucinaciones.', en: 'PMBOK 8th ed Appendix X3 on AI highlights ethical risks: biases, IP, privacy, hallucinations.'})
  }));

  // be-011 to be-030
  QUESTIONS.push(mcq('be-011', {domain: 'business', topic: 'portfolio', difficulty: 'hard',
    question: Q({es: 'Una empresa tiene 30 proyectos activos. El director del portafolio decide cuáles cancelar. ¿Qué criterios debe usar principalmente?', en: 'Company has 30 active projects. Portfolio manager decides which to cancel. What criteria PRIMARY?'}),
    options: [
      Q({es: 'Antigüedad.', en: 'Age.'}),
      Q({es: 'Alineación estratégica, valor de negocio y dependencias.', en: 'Strategic alignment, business value, and dependencies.'}),
      Q({es: 'El PM que lidera cada uno.', en: 'The PM leading each.'}),
      Q({es: 'El tamaño del equipo.', en: 'The team size.'})
    ],
    correct: 1,
    explanation: Q({es: 'Portafolio: alineación estratégica, valor y dependencias. El PMI destaca la alineación estratégica y la generación de valor.', en: 'Portfolio: strategic alignment, value, dependencies. PMI: strategic alignment and value delivery.'})
  }));

  QUESTIONS.push(mcq('be-012', {domain: 'business', topic: 'compliance', difficulty: 'easy',
    question: Q({es: 'Empresa global opera en países con GDPR (EU), LGPD (Brasil), CCPA (California). El PM debe:', en: 'Global company operates with GDPR (EU), LGPD (Brazil), CCPA (California). PM must:'}),
    options: [
      Q({es: 'Aplicar solo la regulación más estricta.', en: 'Apply only the strictest regulation.'}),
      Q({es: 'Identificar todas las regulaciones aplicables, evaluar impacto y aplicar las más estrictas en cada jurisdicción.', en: 'Identify all applicable regulations, assess impact, and apply the strictest in each jurisdiction.'}),
      Q({es: 'Ignorar hasta que aparezca un problema.', en: 'Ignore until a problem appears.'}),
      Q({es: 'Aplicar solo GDPR.', en: 'Apply only GDPR.'})
    ],
    correct: 1,
    explanation: Q({es: 'Un proyecto global debe cumplir con TODAS las regulaciones aplicables en CADA jurisdicción.', en: 'A global project must comply with ALL applicable regulations in EACH jurisdiction.'})
  }));

  QUESTIONS.push(mcq('be-013', {domain: 'business', topic: 'value', difficulty: 'medium',
    question: Q({es: 'Proyecto entrega un sistema nuevo. ¿Cuándo se considera exitoso en términos de valor?', en: 'Project delivers a new system. When is it considered successful in value terms?'}),
    options: [
      Q({es: 'Cuando se firma el acta de cierre.', en: 'When the closure document is signed.'}),
      Q({es: 'Cuando se entrega el sistema y el sponsor acepta.', en: 'When the system is delivered and sponsor accepts.'}),
      Q({es: 'Cuando los outcomes se materializan, lo cual puede ocurrir meses o años después.', en: 'When the outcomes are realized, which can happen months or years later.'}),
      Q({es: 'Cuando el equipo celebra.', en: 'When the team celebrates.'})
    ],
    correct: 2,
    explanation: Q({es: 'PMI 2026: el valor se mide a lo largo del tiempo. Outcomes pueden ocurrir durante, inmediatamente, o a largo plazo.', en: 'PMI 2026: value is measured over time. Outcomes can occur during, immediately, or in the long term.'})
  }));

  QUESTIONS.push(mcq('be-014', {domain: 'business', topic: 'pmo', difficulty: 'hard',
    question: Q({es: 'Un PMO estratégico (Strategic PMO) se diferencia de uno Directive en que:', en: 'A Strategic PMO differs from a Directive PMO in that:'}),
    options: [
      Q({es: 'Solo gestiona un proyecto.', en: 'Manages only one project.'}),
      Q({es: 'Participa en decisiones estratégicas y alinea proyectos con la estrategia corporativa.', en: 'Participates in strategic decisions and aligns projects with corporate strategy.'}),
      Q({es: 'Solo audita finanzas.', en: 'Audits only finances.'}),
      Q({es: 'No tiene autoridad.', en: 'Has no authority.'})
    ],
    correct: 1,
    explanation: Q({es: 'La PMO estratégica es el nivel más alto. Participa en las decisiones del portafolio y alinea los proyectos con la estrategia.', en: 'Strategic PMO: highest level. Participates in portfolio decisions, aligns projects with strategy.'})
  }));

  QUESTIONS.push(mcq('be-015', {domain: 'business', topic: 'change', difficulty: 'medium',
    question: Q({es: 'Organización adopta prácticas ágiles a nivel empresa. ¿Qué cambio organizacional es necesario?', en: 'Organization adopts agile practices at enterprise level. What organizational change is needed?'}),
    options: [
      Q({es: 'Contratar más consultores externos.', en: 'Hire more external consultants.'}),
      Q({es: 'Cambiar cultura, estructura, liderazgo y métricas para apoyar la agilidad a escala.', en: 'Change culture, structure, leadership, and metrics to support agility at scale.'}),
      Q({es: 'Reemplazar a todos los gerentes funcionales.', en: 'Replace all functional managers.'}),
      Q({es: 'Comprar nuevas herramientas.', en: 'Buy new tools.'})
    ],
    correct: 1,
    explanation: Q({es: 'Enterprise agile es un cambio cultural y organizacional completo.', en: 'Enterprise agile is a complete cultural and organizational change.'})
  }));

  QUESTIONS.push(mcq('be-016', {domain: 'business', topic: 'success', difficulty: 'hard',
    question: Q({es: 'Proyecto completado con éxito, pero el mercado cambió y el producto ya no es viable. ¿Tipo de éxito?', en: 'Project completed successfully, but the market changed and the product is no longer viable. Type of success?'}),
    options: [
      Q({es: 'Éxito total.', en: 'Total success.'}),
      Q({es: 'Éxito parcial / cuestionable.', en: 'Partial / questionable success.'}),
      Q({es: 'Fracaso total.', en: 'Total failure.'}),
      Q({es: 'Éxito operativo pero fracaso de mercado.', en: 'Operational success but market failure.'})
    ],
    correct: 3,
    explanation: Q({es: 'PMI: 1) Total success, 2) Total failure, 3) Partial, 4) Project success but business failure.', en: 'PMI: 1) Total success, 2) Total failure, 3) Partial, 4) Project success but business failure.'})
  }));

  QUESTIONS.push(mcq('be-017', {domain: 'business', topic: 'ethics', difficulty: 'medium',
    question: Q({es: 'PM sospecha que un proveedor está sobornando a un oficial del gobierno local. ¿Qué hacer?', en: 'PM suspects a vendor is bribing a local government official. What to do?'}),
    options: [
      Q({es: 'No hacer nada porque no tiene pruebas.', en: 'Do nothing because no proof.'}),
      Q({es: 'Reportar la sospecha al oficial de cumplimiento y al equipo legal, conforme al FCPA.', en: 'Report the suspicion to the compliance officer and legal team, per the FCPA.'}),
      Q({es: 'Confrontar al proveedor directamente.', en: 'Confront the vendor directly.'}),
      Q({es: 'Publicar en redes sociales.', en: 'Publish on social media.'})
    ],
    correct: 1,
    explanation: Q({es: 'Honesty + Responsibility del PMI Code. FCPA prohíbe soborno. Las sospechas son suficientes para reportar.', en: 'Honesty + Responsibility from the PMI Code. FCPA prohibits bribery. Suspicions are enough to report.'})
  }));

  QUESTIONS.push(mcq('be-018', {domain: 'business', topic: 'risk', difficulty: 'medium',
    question: Q({es: 'Empresa con proyecto en zona de alta inestabilidad política agrega plan de evacuación y seguro de personas. ¿Estrategia?', en: 'Company with project in politically unstable area adds evacuation plan and personal insurance. Strategy?'}),
    options: [
      Q({es: 'Accept.', en: 'Accept.'}),
      Q({es: 'Avoid.', en: 'Avoid.'}),
      Q({es: 'Mitigate (reducir impacto).', en: 'Mitigate (reduce impact).'}),
      Q({es: 'Transfer (comprar seguro).', en: 'Transfer (buy insurance).'})
    ],
    correct: 2,
    explanation: Q({es: 'Plan de evacuación + seguro = Mitigate (reducir impacto). Transfer puro sería solo seguro. Accept sería no hacer nada.', en: 'Evacuation plan + insurance = Mitigate. Pure transfer would be only insurance. Accept would be doing nothing.'})
  }));

  QUESTIONS.push(mcq('be-019', {domain: 'business', topic: 'pmo', difficulty: 'easy',
    question: Q({es: '¿Cuál es el valor principal de un PMO para una organización?', en: 'What is the main value of a PMO to an organization?'}),
    options: [
      Q({es: 'Aumentar la burocracia.', en: 'Increase bureaucracy.'}),
      Q({es: 'Estandarizar prácticas, mejorar la entrega de valor, desarrollar capacidades y reducir riesgos.', en: 'Standardize practices, improve value delivery, develop capabilities, and reduce risks.'}),
      Q({es: 'Reemplazar a los project managers.', en: 'Replace project managers.'}),
      Q({es: 'Solo archivar documentos.', en: 'Only archive documents.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMO aporta valor: estandarización, métricas, mentoring, reducción de riesgo.', en: 'PMO brings value: standardization, metrics, mentoring, risk reduction.'})
  }));

  QUESTIONS.push(mcq('be-020', {domain: 'business', topic: 'ai', difficulty: 'hard',
    question: Q({es: '¿Cuál NO es un caso de uso principal de IA en gestión de proyectos, según PMBOK 8ª ed?', en: 'Which is NOT a main AI use case in project management, per PMBOK 8th ed?'}),
    options: [
      Q({es: 'Automatización de reportes de estado.', en: 'Status report automation.'}),
      Q({es: 'Predicción de riesgos con ML.', en: 'Risk prediction with ML.'}),
      Q({es: 'Reemplazar completamente al equipo sin supervisión humana.', en: 'Completely replace the team without human oversight.'}),
      Q({es: 'Optimización de cronogramas.', en: 'Schedule optimization.'})
    ],
    correct: 2,
    explanation: Q({es: 'PMBOK 8ª ed X3: la IA AUGMENTA, no reemplaza. Human-in-the-loop es obligatorio.', en: 'PMBOK 8th ed X3: AI AUGMENTS, does not replace. Human-in-the-loop is mandatory.'})
  }));

  // be-021 to be-040
  QUESTIONS.push(mcq('be-021', {domain: 'business', topic: 'sustainability', difficulty: 'medium',
    question: Q({es: '¿Cuál es un ejemplo de integrar sostenibilidad en un proyecto?', en: 'What is an example of integrating sustainability in a project?'}),
    options: [
      Q({es: 'Reducir el waste de materiales y elegir proveedores con certificaciones ambientales.', en: 'Reduce material waste and choose suppliers with environmental certifications.'}),
      Q({es: 'Maximizar la velocidad de entrega sin importar el impacto.', en: 'Maximize delivery speed regardless of impact.'}),
      Q({es: 'Reducir el equipo para reducir costos.', en: 'Reduce the team to cut costs.'}),
      Q({es: 'Ignorar el impacto social del proyecto.', en: 'Ignore the social impact of the project.'})
    ],
    correct: 0,
    explanation: Q({es: 'PMBOK 8ª ed: "Integrate Sustainability Within All Project Areas" como principio.', en: 'PMBOK 8th ed: "Integrate Sustainability Within All Project Areas" as a principle.'})
  }));

  QUESTIONS.push(mcq('be-022', {domain: 'business', topic: 'change', difficulty: 'hard',
    question: Q({es: '¿Qué modelo de cambio de 8 pasos es usado para preparar a la organización y construir urgencia?', en: 'What 8-step change model is used to prepare the organization and build urgency?'}),
    options: [
      Q({es: 'ADKAR.', en: 'ADKAR.'}),
      Q({es: 'Kotter.', en: 'Kotter.'}),
      Q({es: 'Lewin.', en: 'Lewin.'}),
      Q({es: 'Bridges.', en: 'Bridges.'})
    ],
    correct: 1,
    explanation: Q({es: 'Kotter 8 pasos. ADKAR (Prosci) es individual: Awareness, Desire, Knowledge, Ability, Reinforcement.', en: 'Kotter 8 steps. ADKAR (Prosci) is individual: Awareness, Desire, Knowledge, Ability, Reinforcement.'})
  }));

  QUESTIONS.push(mcq('be-023', {domain: 'business', topic: 'portfolio', difficulty: 'medium',
    question: Q({es: '¿Cuál es el objetivo de un portafolio de proyectos?', en: 'A project portfolio aims to:'}),
    options: [
      Q({es: 'Entregar un único proyecto a tiempo.', en: 'Deliver a single project on time.'}),
      Q({es: 'Agrupar proyectos y programas para optimizar valor estratégico, balancear riesgo y alinear con objetivos.', en: 'Group projects and programs to optimize strategic value, balance risk, and align with business objectives.'}),
      Q({es: 'Reducir el número de empleados.', en: 'Reduce the number of employees.'}),
      Q({es: 'Auditar la calidad del código.', en: 'Audit code quality.'})
    ],
    correct: 1,
    explanation: Q({es: 'Un portafolio es una colección de proyectos y programas gestionados para alcanzar objetivos estratégicos.', en: 'Portfolio = collection of projects/programs for strategic objectives.'})
  }));

  QUESTIONS.push(mcq('be-024', {domain: 'business', topic: 'strategy', difficulty: 'medium',
    question: Q({es: 'Balanced Scorecard mide la performance desde 4 perspectivas. ¿Cuáles?', en: 'Balanced Scorecard measures performance from 4 perspectives. Which ones?'}),
    options: [
      Q({es: 'Financiera, Cliente, Procesos Internos, Aprendizaje y Crecimiento.', en: 'Financial, Customer, Internal Processes, Learning and Growth.'}),
      Q({es: 'Velocidad, Costo, Calidad, Alcance.', en: 'Speed, Cost, Quality, Scope.'}),
      Q({es: 'Personas, Procesos, Tecnología, Finanzas.', en: 'People, Processes, Technology, Finance.'}),
      Q({es: 'Inicio, Planificación, Ejecución, Cierre.', en: 'Initiation, Planning, Execution, Closing.'})
    ],
    correct: 0,
    explanation: Q({es: 'Kaplan y Norton Balanced Scorecard: Financiera, Cliente, Procesos Internos, Aprendizaje y Crecimiento.', en: 'Kaplan and Norton Balanced Scorecard: Financial, Customer, Internal Processes, Learning and Growth.'})
  }));

  QUESTIONS.push(mcq('be-025', {domain: 'business', topic: 'compliance', difficulty: 'medium',
    question: Q({es: 'El PM debe conocer las leyes aplicables. ¿Cuál es una ley de protección de datos en Europa?', en: 'PM must know applicable laws. Which is a European data protection law?'}),
    options: [
      Q({es: 'GDPR.', en: 'GDPR.'}),
      Q({es: 'HIPAA.', en: 'HIPAA.'}),
      Q({es: 'SOX.', en: 'SOX.'}),
      Q({es: 'FCPA.', en: 'FCPA.'})
    ],
    correct: 0,
    explanation: Q({es: 'GDPR es la ley europea de protección de datos (2018). HIPAA es salud en USA. SOX es financiero. FCPA es anti-soborno.', en: 'GDPR is the European data protection law (2018). HIPAA is health in USA. SOX is financial. FCPA is anti-bribery.'})
  }));

  QUESTIONS.push(mcq('be-026', {domain: 'business', topic: 'value', difficulty: 'medium',
    question: Q({es: '¿Qué tipo de valor NO se considera generalmente "valor de negocio"?', en: 'What type of value is NOT generally considered "business value"?'}),
    options: [
      Q({es: 'ROI financiero.', en: 'Financial ROI.'}),
      Q({es: 'Satisfacción del cliente (NPS).', en: 'Customer satisfaction (NPS).'}),
      Q({es: 'Cantidad de horas extras del equipo.', en: 'Amount of team overtime.'}),
      Q({es: 'Time-to-market mejorado.', en: 'Improved time-to-market.'})
    ],
    correct: 2,
    explanation: Q({es: 'Business value = outcomes (ROI, NPS, market share). Horas extras son input, no outcome.', en: 'Business value = outcomes (ROI, NPS, market share). Overtime is input, not outcome.'})
  }));

  QUESTIONS.push(mcq('be-027', {domain: 'business', topic: 'change', difficulty: 'hard',
    question: Q({es: 'ADKAR (Prosci) tiene 5 elementos. ¿Cuáles son?', en: 'ADKAR (Prosci) has 5 elements. What are they?'}),
    options: [
      Q({es: 'Awareness, Desire, Knowledge, Ability, Reinforcement.', en: 'Awareness, Desire, Knowledge, Ability, Reinforcement.'}),
      Q({es: 'Analysis, Design, Development, Implementation, Review.', en: 'Analysis, Design, Development, Implementation, Review.'}),
      Q({es: 'Assess, Decide, Document, Approve, Release.', en: 'Assess, Decide, Document, Approve, Release.'}),
      Q({es: 'Acquire, Develop, Deploy, Audit, Retire.', en: 'Acquire, Develop, Deploy, Audit, Retire.'})
    ],
    correct: 0,
    explanation: Q({es: 'ADKAR: Awareness, Desire, Knowledge, Ability, Reinforcement.', en: 'ADKAR: Awareness, Desire, Knowledge, Ability, Reinforcement.'})
  }));

  QUESTIONS.push(mcq('be-028', {domain: 'business', topic: 'risk', difficulty: 'medium',
    question: Q({es: 'Una empresa pierde su CEO y la nueva dirección quiere revisar todos los proyectos. ¿Qué artefacto se necesita?', en: 'Company loses its CEO and new leadership wants to review all projects. What artifact is needed?'}),
    options: [
      Q({es: 'Burndown charts.', en: 'Burndown charts.'}),
      Q({es: 'Un panel del portafolio con el caso de negocio, el valor, los riesgos y las dependencias de cada proyecto.', en: 'Portfolio dashboard with business case, value, risks, and dependencies of each project.'}),
      Q({es: 'Lista de los nombres de los PMs.', en: 'List of PMs\' names.'}),
      Q({es: 'Solo el charter del proyecto más grande.', en: 'Only the largest project charter.'})
    ],
    correct: 1,
    explanation: Q({es: 'Para tomar decisiones sobre el portafolio, se necesita una visión completa del caso de negocio, el valor, los riesgos y las dependencias.', en: 'For portfolio decisions, you need full visibility: business case, value, risks, and dependencies.'})
  }));

  QUESTIONS.push(mcq('be-029', {domain: 'business', topic: 'ethics', difficulty: 'easy',
    question: Q({es: 'El PM recibe un regalo caro de un proveedor durante la negociación. Debe:', en: 'PM receives an expensive gift from a vendor during negotiation. Must:'}),
    options: [
      Q({es: 'Aceptar y continuar la negociación.', en: 'Accept and continue.'}),
      Q({es: 'Rechazar y reportar conforme a la política de conflictos de interés.', en: 'Reject and report per the conflict of interest policy.'}),
      Q({es: 'Aceptar pero no reportar.', en: 'Accept but not report.'}),
      Q({es: 'Regalar al equipo.', en: 'Give to the team.'})
    ],
    correct: 1,
    explanation: Q({es: 'Honesty + Fairness. Regalos que pueden influenciar decisiones son conflictos de interés.', en: 'Honesty + Fairness. Gifts that can influence decisions are conflicts of interest.'})
  }));

  QUESTIONS.push(mcq('be-030', {domain: 'business', topic: 'portfolio', difficulty: 'hard',
    question: Q({es: 'Hay tres proyectos: A (alta alineación y bajo valor), B (alta alineación y alto valor) y C (baja alineación y alto valor). ¿Cuál debe priorizarse?', en: '3 projects: A (high alignment, low value), B (high alignment, high value), C (low alignment, high value). Which to prioritize?'}),
    options: [
      Q({es: 'A.', en: 'A.'}),
      Q({es: 'B.', en: 'B.'}),
      Q({es: 'C.', en: 'C.'}),
      Q({es: 'Igual los tres.', en: 'All equally.'})
    ],
    correct: 1,
    explanation: Q({es: 'El proyecto B tiene alta alineación y alto valor, por lo que es prioritario. El proyecto C, al no estar alineado, podría cancelarse. El proyecto A está alineado, pero aporta poco valor.', en: 'B has high alignment AND high value: priority. C without alignment is a candidate to cancel.'})
  }));

  QUESTIONS.push(mcq('be-031', {domain: 'business', topic: 'pmo', difficulty: 'medium',
    question: Q({es: 'PMO en transición de Supportive a Controlling. ¿Qué cambio principal implica?', en: 'PMO transitioning from Supportive to Controlling. What main change?'}),
    options: [
      Q({es: 'Reducir el número de proyectos.', en: 'Reduce the number of projects.'}),
      Q({es: 'Aumentar la compliance mediante estándares, métricas y auditorías; los PMs tienen menor autonomía.', en: 'Increase compliance through standards, metrics, and audits; PMs have less autonomy.'}),
      Q({es: 'Aumentar el presupuesto.', en: 'Increase the budget.'}),
      Q({es: 'Cerrar la PMO.', en: 'Close the PMO.'})
    ],
    correct: 1,
    explanation: Q({es: 'Controlling introduce compliance, métricas, auditorías; menor autonomía de PMs pero mayor alineación.', en: 'Controlling introduces compliance, metrics, audits; less PM autonomy but higher alignment.'})
  }));

  QUESTIONS.push(mcq('be-032', {domain: 'business', topic: 'ai', difficulty: 'hard',
    question: Q({es: '¿Qué es el sesgo (bias) en modelos de IA y por qué importa en proyectos?', en: 'What is bias in AI models and why does it matter in projects?'}),
    options: [
      Q({es: 'El color de la interfaz del modelo.', en: 'The color of the model interface.'}),
      Q({es: 'Decisiones sistemáticamente injustas que reflejan sesgos históricos de los datos de entrenamiento.', en: 'Systematically unfair decisions that reflect historical biases in training data.'}),
      Q({es: 'La velocidad de entrenamiento.', en: 'The training speed.'}),
      Q({es: 'El costo de la API.', en: 'The API cost.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMBOK 8ª ed: el sesgo en IA causa discriminación (género, raza, etc.) y debe ser evaluado y mitigado.', en: 'PMBOK 8th ed: bias in AI causes discrimination (gender, race, etc.) and must be evaluated and mitigated.'})
  }));

  QUESTIONS.push(mcq('be-033', {domain: 'business', topic: 'sustainability', difficulty: 'medium',
    question: Q({es: 'El "triple bottom line" en sostenibilidad mide:', en: 'The "triple bottom line" in sustainability measures:'}),
    options: [
      Q({es: 'Personas, Planeta, Beneficio.', en: 'People, Planet, Profit.'}),
      Q({es: 'Inicio, Planificación, Cierre.', en: 'Initiation, Planning, Closing.'}),
      Q({es: 'Costo, Tiempo, Alcance.', en: 'Cost, Time, Scope.'}),
      Q({es: 'Agile, Predictivo, Híbrido.', en: 'Agile, Predictive, Hybrid.'})
    ],
    correct: 0,
    explanation: Q({es: 'Triple bottom line (Elkington): social, ambiental, financiera.', en: 'Triple bottom line (Elkington): social, environmental, financial.'})
  }));

  QUESTIONS.push(mcq('be-034', {domain: 'business', topic: 'change', difficulty: 'easy',
    question: Q({es: 'Una empresa adquiere otra y debe integrar 5000 empleados y 200 proyectos. ¿Tipo de cambio?', en: 'Company acquires another and must integrate 5000 employees and 200 projects. Type of change?'}),
    options: [
      Q({es: 'Cambio menor (incremental).', en: 'Minor (incremental) change.'}),
      Q({es: 'Cambio transformacional.', en: 'Transformational change.'}),
      Q({es: 'No es un cambio.', en: 'It is not a change.'}),
      Q({es: 'Cambio personal.', en: 'Personal change.'})
    ],
    correct: 1,
    explanation: Q({es: 'Adquisición de 5000 personas y 200 proyectos es claramente transformacional.', en: 'Acquisition of 5000 people and 200 projects is clearly transformational.'})
  }));

  QUESTIONS.push(mcq('be-035', {domain: 'business', topic: 'risk', difficulty: 'hard',
    question: Q({es: 'Un proveedor de software clave es adquirido por un competidor. ¿Tipo de riesgo y qué hacer primero?', en: 'A key software vendor is acquired by a competitor. What type of risk and what to do first?'}),
    options: [
      Q({es: 'Riesgo técnico. Ignorar.', en: 'Technical risk. Ignore.'}),
      Q({es: 'Riesgo de procurement. Evaluar impacto, contrato actual, y plan de contingencia.', en: 'Procurement risk. Assess impact, current contract, and contingency plan.'}),
      Q({es: 'Riesgo financiero. Cancelar todo.', en: 'Financial risk. Cancel everything.'}),
      Q({es: 'No es un riesgo.', en: 'It is not a risk.'})
    ],
    correct: 1,
    explanation: Q({es: 'Adquisición de proveedor = procurement/supply chain risk. Evaluar impacto, condiciones, plan B.', en: 'Vendor acquisition = procurement/supply chain risk. Assess impact, conditions, plan B.'})
  }));

  QUESTIONS.push(mcq('be-036', {domain: 'business', topic: 'ethics', difficulty: 'medium',
    question: Q({es: 'PMI Code of Ethics obliga al PM a reportar conductas no éticas. Si no hay canal interno, ¿qué hacer?', en: 'PMI Code requires PMs to report unethical conduct. If no internal channel, what to do?'}),
    options: [
      Q({es: 'No reportar, no es su problema.', en: 'Do not report, not their problem.'}),
      Q({es: 'Reportar al PMI Ethics Office y a las autoridades reguladoras si es necesario.', en: 'Report to the PMI Ethics Office and to regulatory authorities if necessary.'}),
      Q({es: 'Publicar en redes sociales.', en: 'Publish on social media.'}),
      Q({es: 'Esperar a que alguien más lo haga.', en: 'Wait for someone else.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMI Ethics Review Process permite reportar violaciones. Si la organización no actúa, PMI puede intervenir.', en: 'PMI Ethics Review Process allows reporting violations. If organization does not act, PMI can intervene.'})
  }));

  QUESTIONS.push(mcq('be-037', {domain: 'business', topic: 'strategy', difficulty: 'hard',
    question: Q({es: 'Estrategia "Customer Intimacy" (Treacy & Wiersema). ¿Qué proyectos priorizar?', en: '"Customer Intimacy" strategy. What projects to prioritize?'}),
    options: [
      Q({es: 'Reducción de costos y eficiencia operativa.', en: 'Cost reduction and operational efficiency.'}),
      Q({es: 'Innovación disruptiva en producto.', en: 'Disruptive product innovation.'}),
      Q({es: 'CRM, personalización, experiencia del cliente, fidelización.', en: 'CRM, personalization, customer experience, loyalty.'}),
      Q({es: 'Procesos internos automatizados.', en: 'Automated internal processes.'})
    ],
    correct: 2,
    explanation: Q({es: 'Treacy & Wiersema: 3 estrategias. Customer Intimacy = experiencia. Operational Excellence = eficiencia. Product Leadership = innovación.', en: 'Treacy & Wiersema: 3 strategies. Customer Intimacy = experience. Operational Excellence = efficiency. Product Leadership = innovation.'})
  }));

  QUESTIONS.push(mcq('be-038', {domain: 'business', topic: 'benefits', difficulty: 'medium',
    question: Q({es: 'El benefits realization plan debe ser monitoreado:', en: 'The benefits realization plan must be monitored:'}),
    options: [
      Q({es: 'Solo al cierre del proyecto.', en: 'Only at project close.'}),
      Q({es: 'Continuamente, incluso después del cierre del proyecto, hasta que el valor se materialice.', en: 'Continuously, even after project close, until value is realized.'}),
      Q({es: 'Una vez al año.', en: 'Once a year.'}),
      Q({es: 'Nunca.', en: 'Never.'})
    ],
    correct: 1,
    explanation: Q({es: 'Benefits realization es continua. El PM entrega, el sponsor mide valor post-entrega.', en: 'Benefits realization is continuous. PM delivers, sponsor measures post-delivery value.'})
  }));

  QUESTIONS.push(mcq('be-039', {domain: 'business', topic: 'compliance', difficulty: 'hard',
    question: Q({es: 'Proyecto en Brasil debe cumplir con LGPD. Un PM europeo aplica GDPR. ¿Es suficiente?', en: 'Project in Brazil must comply with LGPD. European PM applies GDPR. Is it enough?'}),
    options: [
      Q({es: 'Sí, GDPR es el estándar global.', en: 'Yes, GDPR is global standard.'}),
      Q({es: 'No, hay que cumplir con LGPD y GDPR si hay datos europeos. Las regulaciones se acumulan.', en: 'No, you must comply with LGPD and GDPR if there is European data. Regulations stack.'}),
      Q({es: 'No, solo LGPD aplica.', en: 'No, only LGPD applies.'}),
      Q({es: 'Da igual, son lo mismo.', en: 'It does not matter; they are the same.'})
    ],
    correct: 1,
    explanation: Q({es: 'Las regulaciones se acumulan. Si hay datos europeos, GDPR aplica además de LGPD.', en: 'Regulations stack. If there is European data, GDPR applies in addition to LGPD.'})
  }));

  QUESTIONS.push(mcq('be-040', {domain: 'business', topic: 'ESG', difficulty: 'medium',
    question: Q({es: 'Una empresa incluye objetivos ESG en sus KPIs. ¿Cómo impacta a los proyectos?', en: 'Company includes ESG objectives in its KPIs. How does it impact projects?'}),
    options: [
      Q({es: 'No impacta, ESG es marketing.', en: 'No impact; ESG is marketing.'}),
      Q({es: 'Los proyectos deben medir su impacto ESG: huella de carbono, diversidad, compliance.', en: 'Projects must measure their ESG impact: carbon footprint, diversity, compliance.'}),
      Q({es: 'Solo impacta a proyectos ambientales.', en: 'Only environmental projects are impacted.'}),
      Q({es: 'Solo impacta a la alta dirección.', en: 'Only senior management is impacted.'})
    ],
    correct: 1,
    explanation: Q({es: 'ESG se ha vuelto estándar. Los proyectos deben medir impacto ambiental, social, governance.', en: 'ESG has become standard. Projects must measure environmental, social, governance impact.'})
  }));

  // ========== More process questions (pr-051 to pr-060) ==========
  QUESTIONS.push(mcq('pr-051', {domain: 'process', topic: 'integrate', difficulty: 'hard',
    question: Q({es: 'Un proyecto tiene CPI=1.2, SPI=0.8. ¿Significa que…', en: 'A project has CPI=1.2, SPI=0.8. Means…'}),
    options: [
      Q({es: 'Bajo presupuesto, retrasado.', en: 'Under budget, behind schedule.'}),
      Q({es: 'Sobrecosto, adelantado.', en: 'Over budget, ahead of schedule.'}),
      Q({es: 'Bajo presupuesto, adelantado.', en: 'Under budget, ahead of schedule.'}),
      Q({es: 'Sobrecosto, retrasado.', en: 'Over budget, behind schedule.'})
    ],
    correct: 0,
    explanation: Q({es: 'CPI>1 = bajo presupuesto. SPI<1 = retrasado.', en: 'CPI>1 = under budget. SPI<1 = behind schedule.'})
  }));

  QUESTIONS.push(mcq('pr-052', {domain: 'process', topic: 'risk', difficulty: 'medium',
    question: Q({es: '¿Qué es un "issue log"?', en: 'What is an "issue log"?'}),
    options: [
      Q({es: 'Una lista de riesgos identificados.', en: 'A list of identified risks.'}),
      Q({es: 'Un registro de problemas que han ocurrido (riesgos materializados).', en: 'A log of issues that have occurred (materialized risks).'}),
      Q({es: 'Un plan de proyecto.', en: 'A project plan.'}),
      Q({es: 'Un calendario de reuniones.', en: 'A meeting calendar.'})
    ],
    correct: 1,
    explanation: Q({es: 'Issue log = problemas que YA ocurrieron. Risk register = riesgos potenciales futuros.', en: 'Issue log = problems that have ALREADY occurred. Risk register = potential future risks.'})
  }));

  QUESTIONS.push(mcq('pr-053', {domain: 'process', topic: 'estimation', difficulty: 'easy',
    question: Q({es: '¿Cuál técnica usa datos de proyectos similares para estimar?', en: 'What technique uses data from similar projects to estimate?'}),
    options: [
      Q({es: 'Estimación análoga (top-down).', en: 'Analogous estimation (top-down).'}),
      Q({es: 'Bottom-up.', en: 'Bottom-up.'}),
      Q({es: 'Paramétrica.', en: 'Parametric.'}),
      Q({es: 'PERT.', en: 'PERT.'})
    ],
    correct: 0,
    explanation: Q({es: 'Análoga (top-down) usa proyectos similares. Menos precisa pero más rápida.', en: 'Analogous (top-down) uses similar projects. Less accurate but faster.'})
  }));

  QUESTIONS.push(mcq('pr-054', {domain: 'process', topic: 'schedule', difficulty: 'hard',
    question: Q({es: 'En CPM, una actividad tiene Early Start=0, duración=5, depende de dos predecesoras. ¿Cuál es su Early Finish?', en: 'In CPM, an activity has ES=0, duration=5, depends on two predecessors. What is its EF?'}),
    options: [
      Q({es: '5.', en: '5.'}),
      Q({es: '10.', en: '10.'}),
      Q({es: '0.', en: '0.'}),
      Q({es: 'Depende de las predecesoras.', en: 'Depends on the predecessors.'})
    ],
    correct: 3,
    explanation: Q({es: 'EF = ES + duration, pero ES depende de los EF de las predecesoras (max). Sin esos datos, depende de ellas.', en: 'EF = ES + duration, but ES depends on predecessors\' EF (max). Without those, depends on them.'})
  }));

  QUESTIONS.push(mcq('pr-055', {domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'Si TCPI = 1.10, ¿qué significa?', en: 'If TCPI = 1.10, what does it mean?'}),
    options: [
      Q({es: 'Necesitas ser 10% más eficiente para terminar en presupuesto.', en: 'You need to be 10% more efficient to finish on budget.'}),
      Q({es: 'Estás 10% bajo presupuesto.', en: 'You are 10% under budget.'}),
      Q({es: 'Estás 10% adelantado.', en: 'You are 10% ahead.'}),
      Q({es: 'No es un valor válido.', en: 'It is not a valid value.'})
    ],
    correct: 0,
    explanation: Q({es: 'TCPI > 1 indica que se necesita más eficiencia que la actual para terminar en presupuesto.', en: 'TCPI > 1 indicates more efficiency than current is needed to finish on budget.'})
  }));

  QUESTIONS.push(mcq('pr-056', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: '¿Qué artefacto Scrum muestra el trabajo restante en el sprint?', en: 'What Scrum artifact shows remaining work in the sprint?'}),
    options: [
      Q({es: 'Burndown chart del sprint.', en: 'Sprint burndown chart.'}),
      Q({es: 'Product Backlog.', en: 'Product Backlog.'}),
      Q({es: 'Definition of Done.', en: 'Definition of Done.'}),
      Q({es: 'Increment.', en: 'Increment.'})
    ],
    correct: 0,
    explanation: Q({es: 'Sprint Burndown = trabajo restante del sprint. Release Burndown = total del release.', en: 'Sprint Burndown = sprint remaining work. Release Burndown = total release.'})
  }));

  QUESTIONS.push(mcq('pr-057', {domain: 'process', topic: 'quality', difficulty: 'hard',
    question: Q({es: '¿Qué es "TQM" (Total Quality Management)?', en: 'What is "TQM" (Total Quality Management)?'}),
    options: [
      Q({es: 'Filosofía de gestión centrada en la calidad, satisfacción del cliente y mejora continua.', en: 'Management philosophy focused on quality, customer satisfaction, and continuous improvement.'}),
      Q({es: 'Un framework ágil.', en: 'An agile framework.'}),
      Q({es: 'Un tipo de contrato.', en: 'A type of contract.'}),
      Q({es: 'Un tipo de estimación.', en: 'A type of estimation.'})
    ],
    correct: 0,
    explanation: Q({es: 'TQM es filosofía de Deming y Juran. Enfoque en cliente, mejora continua, participación total.', en: 'TQM is Deming and Juran philosophy. Customer focus, continuous improvement, total participation.'})
  }));

  QUESTIONS.push(mcq('pr-058', {domain: 'process', topic: 'risk', difficulty: 'hard',
    question: Q({es: '¿Cuál es la diferencia entre riesgo y assumption?', en: 'What is the difference between risk and assumption?'}),
    options: [
      Q({es: 'Riesgo = incierto. Assumption = se cree verdadero sin prueba, pero puede no serlo.', en: 'Risk = uncertain. Assumption = believed true without proof, but may not be.'}),
      Q({es: 'No hay diferencia.', en: 'No difference.'}),
      Q({es: 'Assumption es un riesgo ya ocurrido.', en: 'Assumption is a risk that has occurred.'}),
      Q({es: 'Riesgo es un Assumption documentado.', en: 'Risk is a documented Assumption.'})
    ],
    correct: 0,
    explanation: Q({es: 'Riesgo = futuro incierto. Assumption = factor considerado verdadero; si resulta falso, se convierte en riesgo.', en: 'Risk = future uncertain. Assumption = factor considered true; if proven false, it becomes a risk.'})
  }));

  QUESTIONS.push(mcq('pr-059', {domain: 'process', topic: 'integration', difficulty: 'medium',
    question: Q({es: '¿Qué proceso genera el Project Charter?', en: 'What process generates the Project Charter?'}),
    options: [
      Q({es: 'Develop Project Charter (iniciación).', en: 'Develop Project Charter (initiating).'}),
      Q({es: 'Direct and Manage Project Work.', en: 'Direct and Manage Project Work.'}),
      Q({es: 'Plan Scope Management.', en: 'Plan Scope Management.'}),
      Q({es: 'Close Project or Phase.', en: 'Close Project or Phase.'})
    ],
    correct: 0,
    explanation: Q({es: 'Develop Project Charter es el primer proceso de iniciación. Lo emite el sponsor.', en: 'Develop Project Charter is the first initiating process. Sponsor issues it.'})
  }));

  QUESTIONS.push(mcq('pr-060', {domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'En Kanban, ¿qué clase de métricas ayudan a mejorar el flujo?', en: 'In Kanban, what kind of metrics help improve flow?'}),
    options: [
      Q({es: 'Lead time, cycle time, throughput, WIP.', en: 'Lead time, cycle time, throughput, WIP.'}),
      Q({es: 'Solo velocidad (velocity).', en: 'Only velocity.'}),
      Q({es: 'Solo CPI y SPI.', en: 'Only CPI and SPI.'}),
      Q({es: 'Solo story points.', en: 'Only story points.'})
    ],
    correct: 0,
    explanation: Q({es: 'Kanban mide el flujo: lead time (petición a entrega), cycle time (inicio a fin), throughput (items/tiempo), WIP (trabajo en progreso).', en: 'Kanban measures flow: lead time, cycle time, throughput, WIP.'})
  }));

  // ========== Multi-response, drag-drop, matching, hotspot, case, graphic ==========

  QUESTIONS.push({id: 'p-mr-002', type: 'multi', domain: 'people', topic: 'leadership', difficulty: 'hard',
    question: Q({es: '¿Cuáles de los siguientes son ejemplos de liderazgo transformacional? (Selecciona 3)', en: 'Which of the following are examples of transformational leadership? (Select 3)'}),
    options: [
      Q({es: 'Inspirar a través de una visión compartida.', en: 'Inspire through a shared vision.'}),
      Q({es: 'Estimular intelectualmente al equipo.', en: 'Stimulate the team intellectually.'}),
      Q({es: 'Reconocer logros individualmente.', en: 'Recognize achievements individually.'}),
      Q({es: 'Imponer reglas sin explicar.', en: 'Impose rules without explaining.'}),
      Q({es: 'Microgestionar cada tarea.', en: 'Micromanage every task.'}),
      Q({es: 'Desarrollar confianza y respeto.', en: 'Develop trust and respect.'})
    ],
    correct: [0, 1, 5],
    explanation: Q({es: 'Transformacional: influencia idealizada, motivación inspiracional, estimulación intelectual, consideración individualizada.', en: 'Transformational: idealized influence, inspirational motivation, intellectual stimulation, individualized consideration.'})
  });

  QUESTIONS.push({id: 'pr-mr-001', type: 'multi', domain: 'process', topic: 'integration', difficulty: 'hard', approach: 'hybrid',
    question: Q({es: 'Un PM identifica 5 cambios potenciales al alcance durante la ejecución. ¿Cuáles acciones debe tomar como parte de Perform Integrated Change Control? (Selecciona 3)', en: 'A PM identifies 5 potential scope changes during execution. Which actions should they take as part of Perform Integrated Change Control? (Select 3)'}),
    options: [
      Q({es: 'Documentar cada cambio solicitado en el Change Log.', en: 'Document each requested change in the Change Log.'}),
      Q({es: 'Evaluar el impacto en costo, tiempo, alcance, riesgo y valor.', en: 'Assess impact on cost, time, scope, risk, and value.'}),
      Q({es: 'Aprobar todos los cambios para mantener al cliente feliz.', en: 'Approve all changes to keep the client happy.'}),
      Q({es: 'Decidir unilateralmente sin consultar al CCB.', en: 'Decide unilaterally without consulting the CCB.'}),
      Q({es: 'Comunicar la decisión a los stakeholders afectados.', en: 'Communicate the decision to affected stakeholders.'}),
      Q({es: 'Ocultar cambios al sponsor.', en: 'Hide changes from the sponsor.'})
    ],
    correct: [0, 1, 4],
    explanation: Q({es: 'Perform Integrated Change Control: documentar en Change Log, evaluar impacto, comunicar. NO aprobar todo, NO decidir solo, NO ocultar.', en: 'Perform Integrated Change Control: document in Change Log, assess impact, communicate. Do NOT approve all, decide alone, or hide.'})
  });

  QUESTIONS.push({id: 'pr-mr-002', type: 'multi', domain: 'process', topic: 'risk', difficulty: 'hard',
    question: Q({es: '¿Cuáles de los siguientes son procesos del Risk Performance Domain? (Selecciona 3)', en: 'Which of the following are processes of the Risk Performance Domain? (Select 3)'}),
    options: [
      Q({es: 'Plan Risk Management.', en: 'Plan Risk Management.'}),
      Q({es: 'Identify Risks.', en: 'Identify Risks.'}),
      Q({es: 'Perform Qualitative Risk Analysis.', en: 'Perform Qualitative Risk Analysis.'}),
      Q({es: 'Develop Schedule.', en: 'Develop Schedule.'}),
      Q({es: 'Manage Stakeholder Engagement.', en: 'Manage Stakeholder Engagement.'}),
      Q({es: 'Plan Risk Responses.', en: 'Plan Risk Responses.'})
    ],
    correct: [0, 1, 5],
    explanation: Q({es: 'Risk domain: Plan, Identify, Analyze (Qual/Quant), Plan Responses, Implement Responses, Monitor Risks.', en: 'Risk domain: Plan, Identify, Analyze (Qual/Quant), Plan Responses, Implement Responses, Monitor Risks.'})
  });

  QUESTIONS.push({id: 'pr-mr-003', type: 'multi', domain: 'process', topic: 'integration', difficulty: 'hard',
    question: Q({es: '¿Cuáles de los siguientes son documentos del Project Management Plan? (Selecciona 3)', en: 'Which of the following are Project Management Plan documents? (Select 3)'}),
    options: [
      Q({es: 'Scope Management Plan.', en: 'Scope Management Plan.'}),
      Q({es: 'Schedule Management Plan.', en: 'Schedule Management Plan.'}),
      Q({es: 'Risk Register.', en: 'Risk Register.'}),
      Q({es: 'Cost Management Plan.', en: 'Cost Management Plan.'}),
      Q({es: 'Issue Log.', en: 'Issue Log.'}),
      Q({es: 'Team Charter.', en: 'Team Charter.'})
    ],
    correct: [0, 1, 3],
    explanation: Q({es: 'Los 3 son planes subsidiarios del PMP. Risk Register, Issue Log, Team Charter son documentos del proyecto.', en: 'All 3 are subsidiary plans of the PMP. Risk Register, Issue Log, Team Charter are project documents.'})
  });

  QUESTIONS.push({id: 'pr-mr-004', type: 'multi', domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'Si SPI < 1, ¿cuáles son acciones válidas? (Selecciona 3)', en: 'If SPI < 1, which are valid actions? (Select 3)'}),
    options: [
      Q({es: 'Crash (agregar recursos a la ruta crítica).', en: 'Crash (add resources to the critical path).'}),
      Q({es: 'Fast-track (paralelizar actividades).', en: 'Fast-track (parallelize activities).'}),
      Q({es: 'Reducir alcance (scope reduction).', en: 'Reduce scope.'}),
      Q({es: 'Esperar y no hacer nada.', en: 'Wait and do nothing.'}),
      Q({es: 'Negociar nuevo deadline con el sponsor.', en: 'Negotiate new deadline with the sponsor.'}),
      Q({es: 'Agregar más personas al equipo sin análisis.', en: 'Add more people to the team without analysis.'})
    ],
    correct: [0, 1, 4],
    explanation: Q({es: 'Crashing, fast-tracking, renegociar son válidos. Reducir alcance es último recurso.', en: 'Crashing, fast-tracking, renegotiating are valid. Scope reduction is a last resort.'})
  });

  QUESTIONS.push({id: 'be-mr-001', type: 'multi', domain: 'business', topic: 'ethics', difficulty: 'hard',
    question: Q({es: '¿Cuáles son valores del PMI Code of Ethics? (Selecciona 4)', en: 'Which are PMI Code of Ethics values? (Select 4)'}),
    options: [
      Q({es: 'Responsibility.', en: 'Responsibility.'}),
      Q({es: 'Respect.', en: 'Respect.'}),
      Q({es: 'Profit.', en: 'Profit.'}),
      Q({es: 'Fairness.', en: 'Fairness.'}),
      Q({es: 'Honesty.', en: 'Honesty.'}),
      Q({es: 'Speed.', en: 'Speed.'})
    ],
    correct: [0, 1, 3, 4],
    explanation: Q({es: 'PMI Code: Responsibility, Respect, Fairness, Honesty. Profit y Speed NO son valores del código.', en: 'PMI Code: Responsibility, Respect, Fairness, Honesty. Profit and Speed are NOT code values.'})
  });

  QUESTIONS.push({id: 'p-mr-003', type: 'multi', domain: 'people', topic: 'stakeholder', difficulty: 'hard',
    question: Q({es: '¿Cuáles de los siguientes son métodos para analizar stakeholders? (Selecciona 3)', en: 'Which of the following are methods to analyze stakeholders? (Select 3)'}),
    options: [
      Q({es: 'Power/Interest Grid.', en: 'Power/Interest Grid.'}),
      Q({es: 'Mitchell Salience Model.', en: 'Mitchell Salience Model.'}),
      Q({es: 'Stakeholder Engagement Assessment Matrix.', en: 'Stakeholder Engagement Assessment Matrix.'}),
      Q({es: 'Gantt chart.', en: 'Gantt chart.'}),
      Q({es: 'Burndown chart.', en: 'Burndown chart.'}),
      Q({es: 'Critical Path Method.', en: 'Critical Path Method.'})
    ],
    correct: [0, 1, 2],
    explanation: Q({es: 'Power/Interest, Mitchell Salience, Engagement Assessment son análisis de stakeholders.', en: 'Power/Interest, Mitchell Salience, Engagement Assessment are stakeholder analyses.'})
  });

  // Pull-down
  QUESTIONS.push({id: 'pr-pd-001', type: 'pulldown', domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'Completa el enunciado con la palabra correcta: "En Scrum, el [1] es responsable de maximizar el valor del producto, gestionando el [2] de manera priorizada."', en: 'Complete the statement: "In Scrum, the [1] is responsible for maximizing product value, managing the [2] in a prioritized manner."'}),
    blanks: [
      { options: ['Product Owner', 'Scrum Master', 'Developer'], correct: 'Product Owner' },
      { options: ['Product Backlog', 'Sprint Backlog', 'Burndown Chart'], correct: 'Product Backlog' }
    ],
    explanation: Q({es: 'Product Owner = accountable de maximizar valor. Product Backlog = lista priorizada.', en: 'Product Owner = accountable for maximizing value. Product Backlog = prioritized list.'})
  });

  // Matching
  QUESTIONS.push({id: 'pr-mt-001', type: 'matching', domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'Empareja cada fórmula EVM con su nombre:', en: 'Match each EVM formula with its name:'}),
    left: [
      Q({es: 'EV - AC', en: 'EV - AC'}),
      Q({es: 'EV - PV', en: 'EV - PV'}),
      Q({es: 'EV / AC', en: 'EV / AC'}),
      Q({es: 'EV / PV', en: 'EV / PV'})
    ],
    right: [
      Q({es: 'CPI (Cost Performance Index)', en: 'CPI (Cost Performance Index)'}),
      Q({es: 'SPI (Schedule Performance Index)', en: 'SPI (Schedule Performance Index)'}),
      Q({es: 'CV (Cost Variance)', en: 'CV (Cost Variance)'}),
      Q({es: 'SV (Schedule Variance)', en: 'SV (Schedule Variance)'})
    ],
    correct: [
      {left: 0, right: 2},
      {left: 1, right: 3},
      {left: 2, right: 0},
      {left: 3, right: 1}
    ],
    explanation: Q({es: 'CV = EV - AC, SV = EV - PV, CPI = EV/AC, SPI = EV/PV.', en: 'CV = EV - AC, SV = EV - PV, CPI = EV/AC, SPI = EV/PV.'})
  });

  QUESTIONS.push({id: 'pr-mt-002', type: 'matching', domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'Empareja cada artefacto Scrum con su propósito:', en: 'Match each Scrum artifact with its purpose:'}),
    left: [
      Q({es: 'Product Backlog', en: 'Product Backlog'}),
      Q({es: 'Sprint Backlog', en: 'Sprint Backlog'}),
      Q({es: 'Increment', en: 'Increment'}),
      Q({es: 'Burndown Chart', en: 'Burndown Chart'})
    ],
    right: [
      Q({es: 'Lista priorizada del producto.', en: 'Prioritized list of the product.'}),
      Q({es: 'Subconjunto del Product Backlog para el sprint actual.', en: 'Subset of the Product Backlog for the current sprint.'}),
      Q({es: 'Resultado del sprint que cumple DoD.', en: 'Sprint result that meets the DoD.'}),
      Q({es: 'Visualización del trabajo restante en el sprint.', en: 'Visualization of remaining work in the sprint.'})
    ],
    correct: [
      {left: 0, right: 0},
      {left: 1, right: 1},
      {left: 2, right: 2},
      {left: 3, right: 3}
    ],
    explanation: Q({es: 'Cada artefacto Scrum tiene un rol en inspección y adaptación.', en: 'Each Scrum artifact has a role in inspection and adaptation.'})
  });

  // Drag and drop
  QUESTIONS.push({id: 'pr-dnd-001', type: 'dnd', domain: 'process', topic: 'lifecycle', difficulty: 'medium',
    question: Q({es: 'Ordena las fases del ciclo de vida predictivo (cascada):', en: 'Order the phases of the predictive (waterfall) lifecycle:'}),
    items: [
      Q({es: 'Requirements / Análisis', en: 'Requirements / Analysis'}),
      Q({es: 'Design / Diseño', en: 'Design'}),
      Q({es: 'Implementation / Implementación', en: 'Implementation'}),
      Q({es: 'Verification / Pruebas', en: 'Verification / Testing'}),
      Q({es: 'Deployment / Despliegue', en: 'Deployment'})
    ],
    correctOrder: [0, 1, 2, 3, 4],
    explanation: Q({es: 'Cascada: Análisis → Diseño → Implementación → Pruebas → Despliegue.', en: 'Waterfall: Analysis → Design → Implementation → Testing → Deployment.'})
  });

  QUESTIONS.push({id: 'pr-dnd-002', type: 'dnd', domain: 'process', topic: 'risk', difficulty: 'medium',
    question: Q({es: 'Ordena los procesos de Risk Management:', en: 'Order the Risk Management processes:'}),
    items: [
      Q({es: 'Plan Risk Management', en: 'Plan Risk Management'}),
      Q({es: 'Identify Risks', en: 'Identify Risks'}),
      Q({es: 'Perform Qualitative Risk Analysis', en: 'Perform Qualitative Risk Analysis'}),
      Q({es: 'Plan Risk Responses', en: 'Plan Risk Responses'}),
      Q({es: 'Implement Risk Responses', en: 'Implement Risk Responses'}),
      Q({es: 'Monitor Risks', en: 'Monitor Risks'})
    ],
    correctOrder: [0, 1, 2, 3, 4, 5],
    explanation: Q({es: 'Plan → Identify → Analyze → Plan Responses → Implement → Monitor.', en: 'Plan → Identify → Analyze → Plan Responses → Implement → Monitor.'})
  });

  // Hotspot
  QUESTIONS.push({id: 'pr-hs-001', type: 'hotspot', domain: 'process', topic: 'agile', difficulty: 'medium',
    question: Q({es: 'En el burndown chart, haz clic en la zona que indica "sprint a tiempo" (on track).', en: 'In the burndown chart, click the zone that indicates "on-track sprint".'}),
    image: 'burndown',
    hotspots: [
      {x: 50, y: 30, correct: true, label: 'Ideal line / on track'},
      {x: 80, y: 50, correct: false, label: 'Behind schedule'},
      {x: 20, y: 50, correct: false, label: 'Ahead of schedule'}
    ],
    explanation: Q({es: 'Burndown ideal: la línea real sigue la línea ideal descendente.', en: 'Ideal burndown: the actual line follows the descending ideal line.'})
  });

  QUESTIONS.push({id: 'p-hs-001', type: 'hotspot', domain: 'people', topic: 'stakeholder', difficulty: 'medium',
    question: Q({es: 'En la matriz Poder/Interés, haz clic en el cuadrante donde se ubica un stakeholder con ALTO poder y BAJO interés.', en: 'In the Power/Interest matrix, click the quadrant where a stakeholder with HIGH power and LOW interest is located.'}),
    image: 'power-interest',
    hotspots: [
      {x: 25, y: 25, correct: false, label: 'Bajo poder, alto interés (Keep informed)'},
      {x: 75, y: 25, correct: false, label: 'Alto poder, alto interés (Manage closely)'},
      {x: 25, y: 75, correct: false, label: 'Bajo poder, bajo interés (Monitor)'},
      {x: 75, y: 75, correct: true, label: 'Alto poder, bajo interés (Keep satisfied)'}
    ],
    explanation: Q({es: 'Alto poder + bajo interés = "Keep satisfied" (cuadrante inferior derecho).', en: 'High power + low interest = "Keep satisfied" (lower right quadrant).'})
  });

  QUESTIONS.push({id: 'pr-hs-002', type: 'hotspot', domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'En el chart EVM, haz clic en la zona que indica CPI > 1 (bajo presupuesto) y SPI < 1 (retrasado).', en: 'In the EVM chart, click the zone that indicates CPI > 1 (under budget) and SPI < 1 (behind schedule).'}),
    image: 'evm-chart',
    hotspots: [
      {x: 30, y: 30, correct: false, label: 'CPI<1, SPI<1 (peor caso)'},
      {x: 70, y: 30, correct: false, label: 'CPI>1, SPI>1 (mejor caso)'},
      {x: 30, y: 70, correct: true, label: 'CPI>1, SPI<1 (bajo presupuesto, retrasado)'},
      {x: 70, y: 70, correct: false, label: 'CPI<1, SPI>1 (sobrecosto, adelantado)'}
    ],
    explanation: Q({es: 'CPI>1 (bajo presupuesto) en Y menor, SPI<1 (retrasado) en X mayor. Zona inferior derecha.', en: 'CPI>1 (under budget) at lower Y, SPI<1 (behind) at higher X. Lower right zone.'})
  });

  // Case study (Patient Records Modernization)
  QUESTIONS.push({id: 'case-001', type: 'case', domain: 'process', topic: 'integration', difficulty: 'hard', approach: 'hybrid',
    scenario: Q({es: 'PROJECT: Modernización del Sistema de Registros de Pacientes\n\nPM lidera proyecto de $4.5M para una red de hospitales usando enfoque híbrido. Objetivo: actualizar el sistema legacy de registros de pacientes para cumplir nuevas regulaciones federales. Deadline fijo: 1 de noviembre (multas si no cumple).\n\nTrabajo en dos streams:\n- Stream Software (Ágil): UI y migración de BD, sprints de 2 semanas.\n- Stream Hardware (Predictivo): instalación física de servidores, gestión predictiva por reglas sindicales.\n\nTres problemas:\n1. Proveedor de hardware retrasó envío 2 semanas.\n2. Stakeholder regional pide features fuera del backlog.\n3. Nueva política corporativa de residencia de datos requiere que los datos permanezcan en su región de origen.\n\nExhibits:\n- Status al 31 de agosto: 40% complete, SPI 0.9, CPI 0.85.\n- Email del CMO pidiendo acelerar.\n- Risk register con 3 riesgos.'}),
    question: Q({es: 'Pregunta 1/5: Con base en SPI 0.9 y CPI 0.85, ¿MEJOR interpretación y PRIMERA acción?', en: 'Question 1/5: Based on SPI 0.9 and CPI 0.85, BEST interpretation and FIRST action?'}),
    options: [
      Q({es: 'Ligeramente retrasado y por encima del presupuesto. Reevaluar causa raíz, revisar plan, aplicar controles correctivos antes de acciones drásticas.', en: 'Slightly behind schedule and over budget. Re-evaluate root cause, review plan, apply corrective controls before drastic action.'}),
      Q({es: 'El proyecto está bien.', en: 'The project is fine.'}),
      Q({es: 'Cancelar el proyecto inmediatamente.', en: 'Cancel the project immediately.'}),
      Q({es: 'Cortar el alcance del software.', en: 'Cut the software scope.'})
    ],
    correct: 0,
    explanation: Q({es: 'SPI 0.9 = 10% retraso. CPI 0.85 = 15% sobrecosto. Señales de alerta que requieren análisis, no pánico.', en: 'SPI 0.9 = 10% delay. CPI 0.85 = 15% cost overrun. Warning signs requiring analysis, not panic.'})
  });

  QUESTIONS.push({id: 'case-002', type: 'case', domain: 'process', topic: 'risk', difficulty: 'hard', approach: 'hybrid',
    scenario: Q({es: '(Continuación del caso)'}),
    question: Q({es: 'Pregunta 2/5: El proveedor de hardware confirma un retraso de 2 semanas. ¿Qué debe hacer el PM?', en: 'Question 2/5: Hardware vendor confirms a 2-week delay. What should the PM do?'}),
    options: [
      Q({es: 'Absorber el retraso sin acción.', en: 'Absorb the delay without action.'}),
      Q({es: 'Actualizar el cronograma vía change control formal, evaluar impacto en workstreams dependientes, y ejecutar el plan de contingencia ($100K).', en: 'Update the schedule via formal change control, assess impact on dependent workstreams, and execute the contingency plan ($100K).'}),
      Q({es: 'Cancelar al proveedor.', en: 'Cancel the vendor.'}),
      Q({es: 'Culpar al proveedor públicamente.', en: 'Publicly blame the vendor.'})
    ],
    correct: 1,
    explanation: Q({es: 'Perform Integrated Change Control + Risk Response. El risk register ya tenía contingency reserve.', en: 'Perform Integrated Change Control + Risk Response. The risk register already had contingency reserve.'})
  });

  QUESTIONS.push({id: 'case-003', type: 'case', domain: 'people', topic: 'stakeholder', difficulty: 'hard',
    scenario: Q({es: '(Continuación)'}),
    question: Q({es: 'Pregunta 3/5: Stakeholder regional pide features fuera del backlog. ¿Qué hacer?', en: 'Question 3/5: Regional stakeholder requests features outside the backlog. What to do?'}),
    options: [
      Q({es: 'Rechazar inmediatamente.', en: 'Reject immediately.'}),
      Q({es: 'Documentar, evaluar valor vs. costo, y derivar al Product Owner para priorización.', en: 'Document, assess value vs. cost, and route to the Product Owner for prioritization.'}),
      Q({es: 'Aceptar todo para evitar conflicto.', en: 'Accept everything to avoid conflict.'}),
      Q({es: 'Escalar al CMO.', en: 'Escalate to the CMO.'})
    ],
    correct: 1,
    explanation: Q({es: 'Las nuevas features entran por el Product Owner. En híbrido, podría requerir change control si afecta el alcance original.', en: 'New features enter through the Product Owner. In hybrid, may require change control if it affects the original scope.'})
  });

  QUESTIONS.push({id: 'case-004', type: 'case', domain: 'business', topic: 'compliance', difficulty: 'hard',
    scenario: Q({es: '(Continuación)'}),
    question: Q({es: 'Pregunta 4/5: Nueva política de residencia de datos requiere que los datos permanezcan en su región. ¿Cómo impacta?', en: 'Question 4/5: New data residency policy requires data to remain in their region. How does it impact?'}),
    options: [
      Q({es: 'No impacta, es tema de IT.', en: 'No impact, it is an IT issue.'}),
      Q({es: 'Es un cambio significativo: afecta la arquitectura, posiblemente el alcance, y debe ser evaluado formalmente. Escalar al governance board.', en: 'It is a significant change: affects architecture, possibly scope, must be formally evaluated. Escalate to governance board.'}),
      Q({es: 'Ignorar hasta el cierre.', en: 'Ignore until close.'}),
      Q({es: 'Mover todo a una región.', en: 'Move everything to one region.'})
    ],
    correct: 1,
    explanation: Q({es: 'Cambios de compliance que afectan la arquitectura requieren Perform Integrated Change Control.', en: 'Compliance changes affecting architecture require Perform Integrated Change Control.'})
  });

  QUESTIONS.push({id: 'case-005', type: 'case', domain: 'business', topic: 'value', difficulty: 'hard',
    scenario: Q({es: '(Continuación)'}),
    question: Q({es: 'Pregunta 5/5: Sistema entregado a tiempo, pero 3 meses después la adopción es solo 30%. ¿Cómo se evalúa?', en: 'Question 5/5: System delivered on time, but 3 months later adoption is only 30%. How is success evaluated?'}),
    options: [
      Q({es: 'Éxito total porque se entregó a tiempo.', en: 'Total success because delivered on time.'}),
      Q({es: 'Éxito operativo pero con problemas de valor. La baja adopción afecta outcomes; el sponsor debe abordar change management y training.', en: 'Operational success but with business value issues. Low adoption affects expected outcomes; sponsor must address change management and training.'}),
      Q({es: 'Fracaso total.', en: 'Total failure.'}),
      Q({es: 'No se puede evaluar.', en: 'Cannot be evaluated.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMI: project success (cumplió objetivos) vs value success (outcomes se materializan). Adopción baja = outcomes no realizados.', en: 'PMI: project success (met objectives) vs value success (outcomes realized). Low adoption = outcomes not realized.'})
  });

  // Case 2: Agile Transformation
  QUESTIONS.push({id: 'case-006', type: 'case', domain: 'people', topic: 'leadership', difficulty: 'hard', approach: 'agile',
    scenario: Q({es: 'PROJECT: Transformación Ágil\n\nEmpresa de software tradicional adopta Scrum. Equipo actual (8 personas) con 5 años de experiencia en cascada desconfía de la agilidad. PM certificado PMP asignado. Quejas del equipo: "Las ceremonias son pérdida de tiempo", "No tenemos suficiente documentación", "El Product Owner no nos da requisitos claros". CEO pide 4 releases/año (vs 2 con cascada).'}),
    question: Q({es: 'Pregunta 1/3: ¿Qué hacer con las quejas sobre las ceremonias?', en: 'Question 1/3: What to do with complaints about ceremonies?'}),
    options: [
      Q({es: 'Eliminar todas las ceremonias inmediatamente.', en: 'Eliminate all ceremonies immediately.'}),
      Q({es: 'Trabajar con el equipo en una retrospectiva para entender las quejas, adaptar el framework ("Scrum-but"), y mantener inspección y adaptación como valores.', en: 'Work with the team in a retrospective to understand the complaints, tailor the framework ("Scrum-but"), and keep inspection and adaptation as values.'}),
      Q({es: 'Imponer Scrum estricto sin cambios.', en: 'Impose strict Scrum without changes.'}),
      Q({es: 'Cambiar a Kanban.', en: 'Switch to Kanban.'})
    ],
    correct: 1,
    explanation: Q({es: 'Servant leadership + retrospectiva. Adaptar el framework al equipo, pero no eliminar inspección y adaptación.', en: 'Servant leadership + retrospective. Adapt the framework to the team, but do not eliminate inspection and adaptation.'})
  });

  QUESTIONS.push({id: 'case-007', type: 'case', domain: 'process', topic: 'integration', difficulty: 'hard',
    scenario: Q({es: '(Continuación Agile Transformation)'}),
    question: Q({es: 'Pregunta 2/3: El equipo entrega menos de lo prometido en cada sprint. ¿Qué hacer?', en: 'Question 2/3: Team delivers less than promised in each sprint. What to do?'}),
    options: [
      Q({es: 'Aumentar la duración del sprint a 4 semanas.', en: 'Increase sprint length to 4 weeks.'}),
      Q({es: 'Analizar velocity histórica, reducir el commitment del siguiente sprint, identificar impedimentos y aplicar retrospectiva.', en: 'Analyze historical velocity, reduce the next sprint commitment, identify impediments, and apply retrospective.'}),
      Q({es: 'Reemplazar al equipo.', en: 'Replace the team.'}),
      Q({es: 'Cancelar la transformación ágil.', en: 'Cancel the agile transformation.'})
    ],
    correct: 1,
    explanation: Q({es: 'Servant leader: analiza datos (velocity), ayuda al equipo a comprometerse con lo realista, elimina impedimentos.', en: 'Servant leader: analyze data (velocity), help the team commit to what is realistic, remove impediments.'})
  });

  QUESTIONS.push({id: 'case-008', type: 'case', domain: 'business', topic: 'value', difficulty: 'hard',
    scenario: Q({es: '(Continuación)'}),
    question: Q({es: 'Pregunta 3/3: Después de 6 meses, el equipo duplica entregas pero el CEO dice "el NPS no mejoró". ¿Qué significa?', en: 'Question 3/3: After 6 months, the team doubles deliveries but the CEO says "NPS did not improve". What does it mean?'}),
    options: [
      Q({es: 'Los outcomes no se materializan. Hay que medir value success, no project success.', en: 'Outcomes are not realized. We must measure value success, not project success.'}),
      Q({es: 'El proyecto fue un fracaso total.', en: 'The project was a total failure.'}),
      Q({es: 'Hay que duplicar el equipo.', en: 'We need to double the team.'}),
      Q({es: 'Hay que volver a cascada.', en: 'We need to go back to waterfall.'})
    ],
    correct: 1,
    explanation: Q({es: 'PMI 2026 separa project success y value success. NPS = outcome. Si no mejora, gap entre output y outcome.', en: 'PMI 2026 separates project success and value success. NPS = outcome. If it does not improve, gap between output and outcome.'})
  });

  // Graphic-based
  QUESTIONS.push({id: 'pr-gra-001', type: 'graphic', domain: 'process', topic: 'evm', difficulty: 'hard',
    question: Q({es: 'Observa el burndown chart del último sprint. ¿Cuál es la tendencia y qué indica?', en: 'Observe the burndown chart from the last sprint. What is the trend and what does it indicate?'}),
    image: 'sprint-burndown',
    chart: {
      type: 'line',
      data: {
        labels: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
        datasets: [
          { label: 'Ideal', data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10], borderColor: '#BCCCDC', borderDash: [4, 4], fill: false },
          { label: 'Actual', data: [100, 95, 92, 88, 85, 80, 60, 40, 20, 5], borderColor: '#2E86AB', backgroundColor: 'rgba(46,134,171,0.1)', fill: true }
        ]
      }
    },
    options: [
      Q({es: 'El equipo empezó lento pero aceleró al final y completó el sprint con éxito.', en: 'The team started slow but accelerated at the end and completed the sprint successfully.'}),
      Q({es: 'El equipo falló el sprint.', en: 'The team failed the sprint.'}),
      Q({es: 'Los datos son insuficientes.', en: 'Insufficient data.'}),
      Q({es: 'El equipo nunca trabajó.', en: 'The team never worked.'})
    ],
    correct: 0,
    explanation: Q({es: 'La línea "Actual" terminó cerca de cero (= completado) a pesar de empezar lento. Indica aceleración y éxito al final.', en: 'The "Actual" line finished near zero (= completed) despite starting slow. Indicates acceleration and success at the end.'})
  });

  // Export final
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

  console.log('Total questions loaded:', QUESTIONS.length);
})(window);
