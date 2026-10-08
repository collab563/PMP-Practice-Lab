# 🎯 PMP Practice Lab — PMI 2026

Plataforma bilingüe (ES/EN) completa para practicar y aprobar el examen **PMP 2026** del PMI.

## ✨ Características

- **207 preguntas** estilo PMI, todas en español e inglés
- **Simulacro completo**: 180 preguntas (170 puntuables + 10 de prueba) / 240 min / 2 descansos opcionales de 10 min (formato PMI vigente desde julio de 2026)
- **Modo práctica** filtrable por dominio (People/Process/Business Environment), tipo de pregunta y dificultad
- **Todos los tipos de pregunta oficiales**:
  - MCQ (single response)
  - Multi-response (varias correctas)
  - Matching (emparejar)
  - Drag-and-drop (ordenar, categorizar)
  - Point-and-click (hotspot en gráfico)
  - Pull-down list (seleccionar de menú)
  - Case study (3-5 preguntas por escenario)
  - Graphic-based (interpretar gráficos)
- **20+ ejercicios de Python** ejecutables en el navegador (EVM, PERT, EMV, CPM, Monte Carlo, etc.)
- **Teoría completa** en ambos idiomas (basada en PMBOK 8.ª ed.)
- **Glosario** bilingüe de términos PMP
- **Sistema XP, racha diaria, dashboard de progreso** (todo en localStorage)
- **Modo oscuro/claro**
- **8 case studies** basados en escenarios reales
- **Exportar/Importar progreso** (JSON)

## 📂 Estructura

```
pmp-practice/
├── index.html
├── css/
│   ├── main.css        # Estilos principales + dark mode
│   ├── components.css  # Componentes específicos
│   └── themes.css      # Temas extra
├── js/
│   ├── storage.js      # localStorage wrapper
│   ├── i18n.js         # Sistema bilingüe
│   ├── data-glossary.js
│   ├── data-theory.js
│   ├── data-questions.js     # 50 people + special types
│   ├── data-questions-2.js   # 124 process + business + cases
│   ├── data-questions-3.js   # 33 more questions
│   ├── data-python.js
│   ├── theory-gloss.js
│   ├── stats.js        # XP, streak, charts
│   ├── ui.js           # Navigation, toast, modal
│   ├── practice.js     # Practice mode
│   ├── simulator.js    # Full exam simulator
│   ├── python.js       # Pyodide runner
│   ├── vendor/
│   │   ├── chart.umd.min.js
│   │   └── LICENSE.md  # Chart.js (MIT)
│   ├── pyodide/        # Pyodide 0.26.4 para ejecutar Python sin conexión
│   │   ├── pyodide.js
│   │   ├── pyodide.asm.js
│   │   ├── pyodide.asm.wasm
│   │   ├── python_stdlib.zip
│   │   ├── pyodide-lock.json
│   │   └── LICENSE     # Mozilla Public License 2.0
│   └── app.js          # Main initializer
└── README.md
```

## 🚀 Cómo usar

### Opción 1: Doble clic
1. Descomprime el `.zip`
2. Abre `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari)
3. Las secciones de teoría, práctica y simulacro funcionan localmente. Para ejecutar Python, usa un servidor local (opción 2), ya que el navegador bloquea la carga local de WebAssembly al abrir el archivo directamente.

### Opción 2: Servidor local (recomendado)
```bash
cd pmp-practice
python -m http.server 8000
# Abre http://localhost:8000
```

También puedes usar **Go Live** en VS Code. Chart.js y Pyodide están incluidos en la carpeta del proyecto; la aplicación y los ejercicios de Python funcionan sin conexión a Internet. Mantén juntos `index.html`, `css/` y `js/` al copiar o compartir el proyecto. Las licencias de las dependencias están junto a sus archivos.

El formato PMP vigente desde julio de 2026 contempla 180 preguntas (170 puntuables y 10 de prueba, ubicadas al azar) y 240 minutos de tiempo de examen. Incluye dos descansos opcionales de hasta 10 minutos: uno tras la sección de casos prácticos y otro aproximadamente a mitad de las preguntas independientes. Los descansos no descuentan tiempo del examen. Fuente: [PMP Examination Content Outline — July 2026](https://www.pmi.org/-/media/pmi/documents/public/pdf/certifications/new-pmp-examination-content-outline-2026.pdf).

## 📊 Banco de preguntas y distribución del simulacro

Preguntas disponibles en el banco:
- **People**: 63 preguntas (30%)
- **Process**: 89 preguntas (43%)
- **Business Environment**: 55 preguntas (27%)

El simulacro completo selecciona 180 preguntas, distribuidas según los pesos de los dominios del ECO 2026: **59 People (33%)**, **74 Process (41%)** y **47 Business Environment (26%)**. Como las 10 preguntas de prueba se eligen al azar, el reparto final de las 170 preguntas puntuables puede variar ligeramente.

Cantidad de preguntas del banco por tipo:
- MCQ: 173
- Multi-response: 10
- Matching: 2
- Drag-and-drop: 5
- Hotspot: 3
- Pull-down: 2
- Case study: 11
- Graphic: 1

## 🎓 Temas cubiertos (basados en PMBOK 8.ª ed.)

- The Standard for Project Management
- 6 Project Management Principles
- 7 Performance Domains (Governance, Scope, Schedule, Finance, Stakeholders, Resources, Risk)
- 5 Focus Areas (Initiating, Planning, Executing, Monitoring & Controlling, Closing)
- EVM, PERT, CPM, EMV, Decision Trees
- Agile, Scrum, Kanban, SAFe
- PMI Code of Ethics (4 valores)
- Compliance (GDPR, LGPD, SOX, FCPA)
- AI en proyectos (Apéndice X3 PMBOK 8)
- Sustainability, ESG, Change Management
- PMO types, OPM3

## 🐍 Ejercicios de Python (validados automáticamente)

1. EVM básico — CPI y SPI
2. EAC con método CPI
3. TCPI — Eficiencia necesaria
4. PERT — Estimación de 3 valores
5. EMV — Valor monetario esperado
6. Communication Channels
7. Decision Tree
8. CPM — Critical Path Method
9. ROI y NPV simplificado
10. Sprint Velocity y Burndown
11. Six Sigma DPMO
12. ROI acumulativo
13. Monte Carlo (P50, P80)
14. Benefit/Cost Ratio (BCR)
15. Kanban — Throughput y Lead Time
16. Análisis Tornado
17. WBS — Paquetes de trabajo
18. Mitchell Salience Model
19. Float / Slack
20. Project Value Realization Index

## 🏆 Sistema de gamificación

- **XP**: Ganas 10 XP por respuesta correcta, 2 por incorrecta, 20 por ejercicio Python
- **Racha (streak)**: Días consecutivos de estudio
- **Dashboard de progreso** con gráficos por dominio y tipo de pregunta
- **Calendario de actividad** estilo GitHub
- **Celebración con confetti** al alcanzar el 80 % de aciertos en la práctica

## 🛠️ Privacidad

Todos los datos (XP, racha, progreso) se guardan en `localStorage` del navegador. No se envía nada a ningún servidor. Puedes exportar/importar para sincronizar entre dispositivos.

## 📝 Notas legales

Uso educativo. PMBOK®, PMI® y PMP® son marcas registradas de Project Management Institute, Inc. Este proyecto no está afiliado oficialmente con PMI. Las preguntas son de autoría propia y están basadas en la 8.ª edición de PMBOK y en el Examination Content Outline 2026.

## 📚 Fuentes de las preguntas

- **PMBOK Guide, 8.ª edición** (PMI, 2025)
- **PMI Examination Content Outline 2026**
- **Agile Practice Guide** (PMI, 2017)
- **PMI Code of Ethics and Professional Conduct**
- Recursos públicos de práctica (PMI Learning, prep providers)

---

**Hecho con ❤️ para ayudarte a aprobar el PMP al primer intento.**
