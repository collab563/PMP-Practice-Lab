/* ==========================================================
   PMP Practice Lab — Theory content
   Bilingual study notes based on PMBOK 8th ed
   ========================================================== */
(function (global) {
  'use strict';

  const SECTIONS = [
    {
      id: 'standard',
      title: { es: '1. The Standard for Project Management', en: '1. The Standard for Project Management' },
      subsections: [
        {
          id: 'what-is-project',
          title: { es: '¿Qué es un proyecto?', en: 'What is a project?' },
          body: {
            es: `
              <p>Un <strong>proyecto</strong> es un <em>esfuerzo temporal</em> para crear un <em>producto, servicio o resultado único</em>. Tiene tres características clave:</p>
              <ul>
                <li><strong>Temporal</strong>: tiene inicio y fin definidos. No son operaciones continuas.</li>
                <li><strong>Único</strong>: produce algo distinto a cualquier otro. Aunque haya similitudes, cada proyecto tiene contexto propio.</li>
                <li><strong>Generador de valor</strong>: existe para crear valor (financiero, estratégico, social, etc.).</li>
              </ul>
              <div class="callout callout--success">
                <h4>Diferencia clave</h4>
                <p>Las <strong>operaciones</strong> son continuas y repetitivas. Los <strong>proyectos</strong> son temporales y únicos. Una empresa puede hacer ambos: mantenimiento diario (ops) + nuevo producto (proyecto).</p>
              </div>
            `,
            en: `
              <p>A <strong>project</strong> is a <em>temporary effort</em> to create a <em>unique product, service, or result</em>. It has three key characteristics:</p>
              <ul>
                <li><strong>Temporary</strong>: has a defined start and end. Not continuous operations.</li>
                <li><strong>Unique</strong>: produces something distinct from anything else. Even with similarities, each project has its own context.</li>
                <li><strong>Value-generating</strong>: exists to create value (financial, strategic, social, etc.).</li>
              </ul>
              <div class="callout callout--success">
                <h4>Key difference</h4>
                <p><strong>Operations</strong> are continuous and repetitive. <strong>Projects</strong> are temporary and unique. A company can do both: daily maintenance (ops) + new product (project).</p>
              </div>
            `
          }
        },
        {
          id: 'value-delivery',
          title: { es: 'Sistema de entrega de valor', en: 'Value delivery system' },
          body: {
            es: `
              <p>El <strong>sistema de entrega de valor</strong> es la red de actividades estratégicas que la organización usa para crear valor: portafolios, programas, proyectos, productos y operaciones.</p>
              <p>El PM debe entender dónde encaja su proyecto en este sistema. <strong>Un proyecto que entrega outputs pero no outcomes fracasa en valor</strong>.</p>
              <ul>
                <li><strong>Outputs</strong>: entregables (código, documentos, hardware).</li>
                <li><strong>Outcomes</strong>: resultados del uso de los outputs (más ventas, menos costos, mejor experiencia).</li>
                <li><strong>Benefits</strong>: efectos positivos materializados (ROI, market share).</li>
              </ul>
            `,
            en: `
              <p>The <strong>value delivery system</strong> is the network of strategic activities the organization uses to create value: portfolio + programs + projects + products + operations.</p>
              <p>The PM must understand where their project fits in this system. <strong>A project that delivers outputs but not outcomes fails on value</strong>.</p>
              <ul>
                <li><strong>Outputs</strong>: deliverables (code, documents, hardware).</li>
                <li><strong>Outcomes</strong>: results of using the outputs (more sales, lower costs, better experience).</li>
                <li><strong>Benefits</strong>: materialized positive effects (ROI, market share).</li>
              </ul>
            `
          }
        },
        {
          id: 'portfolio-program',
          title: { es: 'Portafolio, Programa y Proyecto', en: 'Portfolio, Program, and Project' },
          body: {
            es: `
              <table>
                <thead><tr><th>Nivel</th><th>Foco</th><th>Accountable</th></tr></thead>
                <tbody>
                  <tr><td><strong>Portafolio</strong></td><td>Alineación estratégica y valor total</td><td>Director de portafolio / patrocinador ejecutivo</td></tr>
                  <tr><td><strong>Programa</strong></td><td>Beneficios coordinados entre proyectos</td><td>Program Manager</td></tr>
                  <tr><td><strong>Proyecto</strong></td><td>Entrega de outputs/outcomes específicos</td><td>Project Manager</td></tr>
                </tbody>
              </table>
              <p>Los tres niveles se conectan. Un proyecto individual aporta a un programa, que aporta a un portafolio, que aporta a la estrategia organizacional.</p>
            `,
            en: `
              <table>
                <thead><tr><th>Level</th><th>Focus</th><th>Accountable</th></tr></thead>
                <tbody>
                  <tr><td><strong>Portfolio</strong></td><td>Strategic alignment and total value</td><td>Portfolio Manager / Executive Sponsor</td></tr>
                  <tr><td><strong>Program</strong></td><td>Coordinated benefits across projects</td><td>Program Manager</td></tr>
                  <tr><td><strong>Project</strong></td><td>Specific outputs/outcomes delivery</td><td>Project Manager</td></tr>
                </tbody>
              </table>
              <p>The three levels connect. An individual project contributes to a program, which contributes to a portfolio, which contributes to organizational strategy.</p>
            `
          }
        }
      ]
    },
    {
      id: 'principles',
      title: { es: '2. Project Management Principles', en: '2. Project Management Principles' },
      subsections: [
        {
          id: 'principle-list',
          title: { es: 'Los 6 principios del PMBOK 8.ª ed', en: 'The 6 PMBOK 8th ed principles' },
          body: {
            es: `
              <p>PMI consolidó los 12 principios de la 7.ª edición en <strong>6 principios accionables</strong>:</p>
              <ol>
                <li><strong>Adopt a Holistic View</strong> — Ver el sistema completo, no solo tu proyecto.</li>
                <li><strong>Focus on Value</strong> — El valor guía cada decisión.</li>
                <li><strong>Embed Quality</strong> — Calidad integrada, no añadida al final.</li>
                <li><strong>Be an Accountable Leader</strong> — Liderar con responsabilidad y ejemplo.</li>
                <li><strong>Integrate Sustainability</strong> — Impacto ambiental, social y económico.</li>
                <li><strong>Build an Empowered Culture</strong> — Equipos seguros y empoderados.</li>
              </ol>
              <div class="callout">
                <h4>💡 Para el examen</h4>
                <p>El examen 2026 pregunta mucho sobre <em>"el PM debería hacer..."</em> con opciones alineadas o en tensión con estos principios. Si una opción viola el principio, es probablemente incorrecta.</p>
              </div>
            `,
            en: `
              <p>PMI consolidated the 7th edition's 12 principles into <strong>6 actionable principles</strong>:</p>
              <ol>
                <li><strong>Adopt a Holistic View</strong> — See the whole system, not just your project.</li>
                <li><strong>Focus on Value</strong> — Value guides every decision.</li>
                <li><strong>Embed Quality</strong> — Quality integrated, not added at the end.</li>
                <li><strong>Be an Accountable Leader</strong> — Lead with responsibility and example.</li>
                <li><strong>Integrate Sustainability</strong> — Environmental, social, and economic impact.</li>
                <li><strong>Build an Empowered Culture</strong> — Safe and empowered teams.</li>
              </ol>
              <div class="callout">
                <h4>💡 For the exam</h4>
                <p>The 2026 exam asks a lot about <em>"the PM should..."</em> with options aligned or in tension with these principles. If an option violates the principle, it is likely incorrect.</p>
              </div>
            `
          }
        }
      ]
    },
    {
      id: 'domains',
      title: { es: '3. Performance Domains (8.ª ed)', en: '3. Performance Domains (8th ed)' },
      subsections: [
        {
          id: 'domains-list',
          title: { es: 'Los 7 Performance Domains', en: 'The 7 Performance Domains' },
          body: {
            es: `
              <p>PMBOK 8.ª edición agrupa 40 procesos en <strong>7 Performance Domains</strong>:</p>
              <ul>
                <li><strong>1. Governance</strong> — Políticas, roles, decisión, value delivery.</li>
                <li><strong>2. Scope</strong> — Requisitos, WBS, entregables, control.</li>
                <li><strong>3. Schedule</strong> — Actividades, secuencias, ruta crítica, baseline.</li>
                <li><strong>4. Finance</strong> — Presupuesto, costos, financiación, ROI.</li>
                <li><strong>5. Stakeholders</strong> — Identificación, análisis, engagement, comunicación.</li>
                <li><strong>6. Resources</strong> — Adquisición, desarrollo, liderazgo de equipo, RACI.</li>
                <li><strong>7. Risk</strong> — Identificación, análisis cualitativo/cuantitativo, respuestas, monitor.</li>
              </ul>
              <div class="callout callout--warning">
                <h4>⚠️ Importante</h4>
                <p>El <strong>examen 2026</strong> NO se estructura por estos 7 domains. Se estructura por <strong>3 dominios ECO</strong>: People (33%), Process (41%), Business Environment (26%).</p>
              </div>
            `,
            en: `
              <p>PMBOK 8th edition groups 40 processes into <strong>7 Performance Domains</strong>:</p>
              <ul>
                <li><strong>1. Governance</strong> — Policies, roles, decisions, value delivery.</li>
                <li><strong>2. Scope</strong> — Requirements, WBS, deliverables, control.</li>
                <li><strong>3. Schedule</strong> — Activities, sequences, critical path, baseline.</li>
                <li><strong>4. Finance</strong> — Budget, costs, funding, ROI.</li>
                <li><strong>5. Stakeholders</strong> — Identification, analysis, engagement, communication.</li>
                <li><strong>6. Resources</strong> — Acquisition, development, team leadership, RACI.</li>
                <li><strong>7. Risk</strong> — Identification, qualitative/quantitative analysis, responses, monitor.</li>
              </ul>
              <div class="callout callout--warning">
                <h4>⚠️ Important</h4>
                <p>The <strong>2026 exam</strong> is NOT structured by these 7 domains. It is structured by <strong>3 ECO domains</strong>: People (33%), Process (41%), Business Environment (26%).</p>
              </div>
            `
          }
        }
      ]
    },
    {
      id: 'eco-2026',
      title: { es: '4. Exam Structure (ECO 2026)', en: '4. Exam Structure (ECO 2026)' },
      subsections: [
        {
          id: 'eco-overview',
          title: { es: 'Estructura del examen PMP 2026', en: 'PMP 2026 exam structure' },
          body: {
            es: `
              <table>
                <thead><tr><th>Característica</th><th>Valor</th></tr></thead>
                <tbody>
                  <tr><td>Total de preguntas</td><td>180 (170 puntuables y 10 de prueba, no puntuables)</td></tr>
                  <tr><td>Duración</td><td>240 minutos</td></tr>
                  <tr><td>Descansos</td><td>Dos descansos de 10 minutos: el primero después de la sección de casos prácticos y el segundo, aproximadamente a mitad de las preguntas independientes. No cuentan dentro de los 240 minutos.</td></tr>
                  <tr><td>Dominio de Personas</td><td>33%</td></tr>
                  <tr><td>Dominio de Procesos</td><td>41%</td></tr>
                  <tr><td>Dominio del Entorno Empresarial</td><td>26%</td></tr>
                  <tr><td>Enfoque de desarrollo</td><td>~40% predictivo, ~60% ágil/híbrido</td></tr>
                </tbody>
              </table>
              <h3>Tipos de pregunta</h3>
              <ul>
                <li>Opción múltiple (una respuesta)</li>
                <li>Respuesta múltiple (varias respuestas correctas)</li>
                <li>Emparejamiento</li>
                <li>Arrastrar y soltar (ordenar o categorizar)</li>
                <li>Selección en una imagen (hotspot)</li>
                <li>Menú desplegable</li>
                <li>Casos o escenarios (de 3 a 5 preguntas por escenario)</li>
                <li>Preguntas basadas en gráficos</li>
              </ul>
            `,
            en: `
              <table>
                <thead><tr><th>Feature</th><th>Value</th></tr></thead>
                <tbody>
                  <tr><td>Total questions</td><td>180 (170 scored + 10 unscored pretest)</td></tr>
                  <tr><td>Duration</td><td>240 minutes</td></tr>
                  <tr><td>Breaks</td><td>Two 10-minute breaks: the first after the case-study section, and the second approximately halfway through the independent questions. They are not included in the 240 minutes.</td></tr>
                  <tr><td>People domain</td><td>33%</td></tr>
                  <tr><td>Process domain</td><td>41%</td></tr>
                  <tr><td>Business Environment domain</td><td>26%</td></tr>
                  <tr><td>Approach distribution</td><td>~40% predictive, ~60% agile/hybrid</td></tr>
                </tbody>
              </table>
              <h3>Question types</h3>
              <ul>
                <li>Multiple choice (single response)</li>
                <li>Multiple response (multiple correct)</li>
                <li>Matching</li>
                <li>Drag-and-drop (order, categorize)</li>
                <li>Point-and-click (hotspot on image)</li>
                <li>Pull-down list (select from menu)</li>
                <li>Case / scenario sets (3-5 questions based on one scenario)</li>
                <li>Graphic-based (interpret chart)</li>
              </ul>
            `
          }
        }
      ]
    },
    {
      id: 'agile',
      title: { es: '5. Agile, Hybrid, Predictive', en: '5. Agile, Hybrid, Predictive' },
      subsections: [
        {
          id: 'approaches',
          title: { es: 'Selección del enfoque de desarrollo', en: 'Selecting the development approach' },
          body: {
            es: `
              <p>PMBOK 8.ª ed presenta un <strong>espectro de enfoques</strong> (no blanco/negro):</p>
              <ul>
                <li><strong>Predictive</strong> (cascada): requisitos estables, cambios mínimos. Útil para hardware, regulación, construcción.</li>
                <li><strong>Adaptive</strong> (ágil): requisitos emergentes, cambios frecuentes. Útil para software con incertidumbre.</li>
                <li><strong>Hybrid</strong>: combinación. Lo más común en la práctica (40% predictive + 60% agile en el examen).</li>
              </ul>
              <h3>Criterios de selección</h3>
              <ol>
                <li><strong>Entregables</strong>: ¿son estables o cambiantes?</li>
                <li><strong>Proyecto</strong>: ¿qué tan complejo? ¿Qué tan incierto?</li>
                <li><strong>Organización</strong>: ¿qué tan ágil es la cultura? ¿Hay soporte?</li>
              </ol>
              <div class="callout">
                <h4>💡 Para el examen</h4>
                <p>El examen favorece <strong>respuestas adaptativas</strong> cuando hay incertidumbre. Pero el predictivo sigue siendo válido para proyectos regulados o con requisitos fijos. La respuesta correcta depende del contexto.</p>
              </div>
            `,
            en: `
              <p>PMBOK 8th ed presents a <strong>spectrum of approaches</strong> (not black/white):</p>
              <ul>
                <li><strong>Predictive</strong> (waterfall): stable requirements, minimal changes. Useful for hardware, regulation, construction.</li>
                <li><strong>Adaptive</strong> (agile): emerging requirements, frequent changes. Useful for software with uncertainty.</li>
                <li><strong>Hybrid</strong>: combination. Most common in practice (40% predictive + 60% agile in the exam).</li>
              </ul>
              <h3>Selection criteria</h3>
              <ol>
                <li><strong>Deliverables</strong>: are they stable or changing?</li>
                <li><strong>Project</strong>: how complex? How uncertain?</li>
                <li><strong>Organization</strong>: how agile is the culture? Is there support?</li>
              </ol>
              <div class="callout">
                <h4>💡 For the exam</h4>
                <p>The exam favors <strong>adaptive responses</strong> when there is uncertainty. But predictive is still valid for regulated projects or fixed requirements. The correct answer depends on context.</p>
              </div>
            `
          }
        }
      ]
    },
    {
      id: 'evm',
      title: { es: '6. Earned Value Management', en: '6. Earned Value Management' },
      subsections: [
        {
          id: 'evm-formulas',
          title: { es: 'Fórmulas EVM clave', en: 'Key EVM formulas' },
          body: {
            es: `
              <table>
                <thead><tr><th>Métrica</th><th>Fórmula</th><th>Interpretación</th></tr></thead>
                <tbody>
                  <tr><td>PV (Planned Value)</td><td>—</td><td>Lo que deberías haber hecho</td></tr>
                  <tr><td>EV (Earned Value)</td><td>—</td><td>Lo que realmente hiciste</td></tr>
                  <tr><td>AC (Actual Cost)</td><td>—</td><td>Lo que realmente gastaste</td></tr>
                  <tr><td>CV (Cost Variance)</td><td>EV - AC</td><td>+ bajo presupuesto / - sobrecosto</td></tr>
                  <tr><td>SV (Schedule Variance)</td><td>EV - PV</td><td>+ adelantado / - retrasado</td></tr>
                  <tr><td>CPI (Cost Performance Index)</td><td>EV / AC</td><td>&gt;1 bajo presupuesto, &lt;1 sobrecosto</td></tr>
                  <tr><td>SPI (Schedule Performance Index)</td><td>EV / PV</td><td>&gt;1 adelantado, &lt;1 retrasado</td></tr>
                  <tr><td>EAC (Estimate at Completion)</td><td>BAC / CPI</td><td>Costo total esperado</td></tr>
                  <tr><td>ETC (Estimate to Complete)</td><td>EAC - AC</td><td>Costo restante estimado</td></tr>
                  <tr><td>VAC (Variance at Completion)</td><td>BAC - EAC</td><td>Diferencia final esperada</td></tr>
                  <tr><td>TCPI (To-Complete Performance Index)</td><td>(BAC - EV) / (BAC - AC)</td><td>Eficiencia necesaria para terminar</td></tr>
                </tbody>
              </table>
              <div class="callout callout--warning">
                <h4>⚠️ Truco para memorizar</h4>
                <p><strong>CV/SV</strong> = diferencia (resta). <strong>CPI/SPI</strong> = ratio (división). Si &gt; 0 o &gt; 1, todo va bien.</p>
              </div>
            `,
            en: `
              <table>
                <thead><tr><th>Metric</th><th>Formula</th><th>Interpretation</th></tr></thead>
                <tbody>
                  <tr><td>PV (Planned Value)</td><td>—</td><td>What you should have done</td></tr>
                  <tr><td>EV (Earned Value)</td><td>—</td><td>What you actually did</td></tr>
                  <tr><td>AC (Actual Cost)</td><td>—</td><td>What you actually spent</td></tr>
                  <tr><td>CV (Cost Variance)</td><td>EV - AC</td><td>+ under budget / - over budget</td></tr>
                  <tr><td>SV (Schedule Variance)</td><td>EV - PV</td><td>+ ahead / - behind</td></tr>
                  <tr><td>CPI (Cost Performance Index)</td><td>EV / AC</td><td>&gt;1 under budget, &lt;1 over</td></tr>
                  <tr><td>SPI (Schedule Performance Index)</td><td>EV / PV</td><td>&gt;1 ahead, &lt;1 behind</td></tr>
                  <tr><td>EAC (Estimate at Completion)</td><td>BAC / CPI</td><td>Total expected cost</td></tr>
                  <tr><td>ETC (Estimate to Complete)</td><td>EAC - AC</td><td>Remaining cost estimate</td></tr>
                  <tr><td>VAC (Variance at Completion)</td><td>BAC - EAC</td><td>Final expected difference</td></tr>
                  <tr><td>TCPI (To-Complete Performance Index)</td><td>(BAC - EV) / (BAC - AC)</td><td>Efficiency needed to finish</td></tr>
                </tbody>
              </table>
              <div class="callout callout--warning">
                <h4>⚠️ Memory trick</h4>
                <p><strong>CV/SV</strong> = difference (subtract). <strong>CPI/SPI</strong> = ratio (divide). If &gt; 0 or &gt; 1, all is well.</p>
              </div>
            `
          }
        }
      ]
    },
    {
      id: 'risk',
      title: { es: '7. Risk Management', en: '7. Risk Management' },
      subsections: [
        {
          id: 'risk-strategies',
          title: { es: 'Estrategias de respuesta al riesgo', en: 'Risk response strategies' },
          body: {
            es: `
              <h3>Para riesgos NEGATIVOS (amenazas):</h3>
              <ul>
                <li><strong>Avoid</strong>: eliminar la amenaza (cambiar plan, ampliar alcance, etc.).</li>
                <li><strong>Mitigate</strong>: reducir probabilidad o impacto.</li>
                <li><strong>Transfer</strong>: pasar a un tercero (seguro, outsourcing).</li>
                <li><strong>Accept</strong>: reconocer y crear contingencia.</li>
                <li><strong>Escalate</strong>: subir a un nivel superior (programa, portafolio).</li>
              </ul>
              <h3>Para riesgos POSITIVOS (oportunidades):</h3>
              <ul>
                <li><strong>Exploit</strong>: asegurar que ocurra.</li>
                <li><strong>Enhance</strong>: aumentar probabilidad o impacto.</li>
                <li><strong>Share</strong>: compartir con un tercero capaz de capturarla.</li>
                <li><strong>Accept</strong>: aprovechar si se materializa.</li>
              </ul>
              <h3>Análisis cuantitativo</h3>
              <ul>
                <li><strong>EMV</strong> (Expected Monetary Value) = Probabilidad × Impacto.</li>
                <li><strong>Decision Tree</strong>: ramifica decisiones con sus probabilidades y valores esperados.</li>
                <li><strong>Monte Carlo Simulation</strong>: corre miles de escenarios para predecir la distribución de fechas y costos.</li>
              </ul>
            `,
            en: `
              <h3>For NEGATIVE risks (threats):</h3>
              <ul>
                <li><strong>Avoid</strong>: eliminate the threat (change plan, expand scope, etc.).</li>
                <li><strong>Mitigate</strong>: reduce probability or impact.</li>
                <li><strong>Transfer</strong>: pass to a third party (insurance, outsourcing).</li>
                <li><strong>Accept</strong>: acknowledge and create contingency.</li>
                <li><strong>Escalate</strong>: raise to a higher level (program, portfolio).</li>
              </ul>
              <h3>For POSITIVE risks (opportunities):</h3>
              <ul>
                <li><strong>Exploit</strong>: ensure it happens.</li>
                <li><strong>Enhance</strong>: increase probability or impact.</li>
                <li><strong>Share</strong>: share with a third party capable of capturing it.</li>
                <li><strong>Accept</strong>: take advantage if it materializes.</li>
              </ul>
              <h3>Quantitative analysis</h3>
              <ul>
                <li><strong>EMV</strong> (Expected Monetary Value) = Probability × Impact.</li>
                <li><strong>Decision Tree</strong>: branches decisions with their probabilities and expected values.</li>
                <li><strong>Monte Carlo Simulation</strong>: runs thousands of scenarios to predict the distribution of dates and costs.</li>
              </ul>
            `
          }
        }
      ]
    },
    {
      id: 'leadership',
      title: { es: '8. Leadership & Soft Skills', en: '8. Leadership & Soft Skills' },
      subsections: [
        {
          id: 'emotional-intelligence',
          title: { es: 'Inteligencia emocional (Goleman)', en: 'Emotional intelligence (Goleman)' },
          body: {
            es: `
              <p>El PMI reconoce 4 dominios de IE:</p>
              <ol>
                <li><strong>Self-Awareness</strong> (autoconciencia): reconocer tus emociones, fortalezas, debilidades.</li>
                <li><strong>Self-Management</strong> (autorregulación): gestionar emociones, mantener calma, adaptarse.</li>
                <li><strong>Social Awareness</strong> (conciencia social): empatía, servicio al cliente, awareness organizacional.</li>
                <li><strong>Relationship Management</strong> (habilidades de relación): influencia, comunicación, conflicto, liderazgo.</li>
              </ol>
              <p>El examen pregunta MUCHO sobre cómo aplicar IE en escenarios (conflictos, feedback, motivación).</p>
            `,
            en: `
              <p>PMI recognizes 4 EI domains:</p>
              <ol>
                <li><strong>Self-Awareness</strong>: recognize your emotions, strengths, weaknesses.</li>
                <li><strong>Self-Management</strong>: manage emotions, stay calm, adapt.</li>
                <li><strong>Social Awareness</strong>: empathy, customer service, organizational awareness.</li>
                <li><strong>Relationship Management</strong>: influence, communication, conflict, leadership.</li>
              </ol>
              <p>The exam asks A LOT about how to apply EI in scenarios (conflict, feedback, motivation).</p>
            `
          }
        },
        {
          id: 'conflict',
          title: { es: 'Técnicas de resolución de conflictos', en: 'Conflict resolution techniques' },
          body: {
            es: `
              <p>PMI lista 5 técnicas, ordenadas de menos a más efectivas:</p>
              <ol>
                <li><strong>Withdraw / Avoid</strong>: retirarse del conflicto. A veces necesario, generalmente no resuelve.</li>
                <li><strong>Smooth / Accommodate</strong>: enfatizar acuerdos, minimizar diferencias. Bueno para relaciones.</li>
                <li><strong>Compromise / Reconcile</strong>: cada parte cede algo. Solución intermedia.</li>
                <li><strong>Force / Direct</strong>: imponer una posición. Útil en emergencias.</li>
                <li><strong>Collaborate / Problem Solve</strong>: confrontar el problema, buscar win-win. <strong>La MEJOR a largo plazo</strong>.</li>
              </ol>
              <div class="callout callout--success">
                <h4>💡 Para el examen</h4>
                <p>Si la opción "Collaborate / Problem Solve" está disponible y no es arriesgada, suele ser la correcta.</p>
              </div>
            `,
            en: `
              <p>PMI lists 5 techniques, ordered from least to most effective:</p>
              <ol>
                <li><strong>Withdraw / Avoid</strong>: withdraw from the conflict. Sometimes necessary, usually does not resolve.</li>
                <li><strong>Smooth / Accommodate</strong>: emphasize agreements, minimize differences. Good for relationships.</li>
                <li><strong>Compromise / Reconcile</strong>: each side gives something. Intermediate solution.</li>
                <li><strong>Force / Direct</strong>: impose a position. Useful in emergencies.</li>
                <li><strong>Collaborate / Problem Solve</strong>: confront the problem, seek win-win. <strong>The BEST long-term</strong>.</li>
              </ol>
              <div class="callout callout--success">
                <h4>💡 For the exam</h4>
                <p>If "Collaborate / Problem Solve" is available and not risky, it is usually correct.</p>
              </div>
            `
          }
        }
      ]
    }
  ];

  global.THEORY = SECTIONS;
})(window);
