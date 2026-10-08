/* ==========================================================
   PMP Practice Lab — Python exercises
   Hands-on practice with EVM, CPM/PERT, risk analysis, etc.
   Runs in the browser via Pyodide
   ========================================================== */
(function (global) {
  'use strict';

  const EXERCISES = [
    {
      id: 'ev-001',
      title: { es: '1. EVM Básico — CPI y SPI', en: '1. Basic EVM — CPI and SPI' },
      difficulty: 'easy',
      topic: 'evm',
      description: {
        es: 'Calcula el CPI (Cost Performance Index) y SPI (Schedule Performance Index) dados PV, EV y AC. Recuerda: CPI = EV/AC, SPI = EV/PV. Si CPI > 1 estás bajo presupuesto; si SPI > 1 vas adelantado.',
        en: 'Calculate CPI (Cost Performance Index) and SPI (Schedule Performance Index) given PV, EV and AC. Remember: CPI = EV/AC, SPI = EV/PV. If CPI > 1 you are under budget; if SPI > 1 you are ahead of schedule.'
      },
      starter: `# EVM calculation
PV = 100000  # Planned Value
EV = 80000   # Earned Value
AC = 90000   # Actual Cost

# Calculate CPI and SPI
cpi = None
spi = None

print(f"CPI = {cpi}")
print(f"SPI = {spi}")
print(f"Bajo presupuesto: {cpi > 1}")
print(f"Adelantado: {spi > 1}")
`,
      validation: {
        type: 'variables',
        checks: {
          cpi: { value: 0.8889, tolerance: 0.01 },
          spi: { value: 0.8, tolerance: 0.01 }
        }
      },
      solution: `PV = 100000
EV = 80000
AC = 90000
cpi = EV / AC   # = 0.8889
spi = EV / PV   # = 0.8`,
      hint: {
        es: 'CPI = EV/AC. SPI = EV/PV. ¡Multiplica y divide!',
        en: 'CPI = EV/AC. SPI = EV/PV. Just multiply and divide!'
      }
    },
    {
      id: 'ev-002',
      title: { es: '2. EAC con método CPI', en: '2. EAC with CPI method' },
      difficulty: 'easy',
      topic: 'evm',
      description: {
        es: 'Calcula EAC (Estimate at Completion) usando EAC = BAC / CPI.',
        en: 'Calculate EAC (Estimate at Completion) using EAC = BAC / CPI.'
      },
      starter: `# EAC with CPI
BAC = 200000  # Budget at Completion
EV = 80000    # Earned Value
AC = 90000    # Actual Cost

cpi = EV / AC
eac = None

print(f"EAC = \${eac}")
`,
      validation: {
        type: 'variables',
        checks: {
          eac: { value: 225000, tolerance: 100 }
        }
      },
      solution: `BAC = 200000
EV = 80000
AC = 90000
cpi = EV / AC
eac = BAC / cpi  # = 225,000`,
      hint: {
        es: 'EAC = BAC / CPI. CPI ya está calculado arriba.',
        en: 'EAC = BAC / CPI. CPI is already calculated above.'
      }
    },
    {
      id: 'ev-003',
      title: { es: '3. TCPI — Eficiencia necesaria', en: '3. TCPI — Required efficiency' },
      difficulty: 'medium',
      topic: 'evm',
      description: {
        es: 'Calcula el TCPI (To-Complete Performance Index) = (BAC - EV) / (BAC - AC). Este valor indica la eficiencia necesaria para terminar el proyecto dentro del presupuesto.',
        en: 'Calculate the TCPI (To-Complete Performance Index) = (BAC - EV) / (BAC - AC). This indicates the efficiency needed to finish the project within budget.'
      },
      starter: `# TCPI calculation
BAC = 500000
EV = 200000
AC = 250000

# Calculate TCPI
tcpi = None

print(f"TCPI = {tcpi:.4f}")
print(f"¿Necesario ser más eficiente que CPI actual? {tcpi > (EV/AC)}")
`,
      validation: {
        type: 'variables',
        checks: {
          tcpi: { value: 1.0, tolerance: 0.01 }
        }
      },
      solution: `BAC = 500000
EV = 200000
AC = 250000
tcpi = (BAC - EV) / (BAC - AC)  # = (500000-200000)/(500000-250000) = 300000/300000 = 1.0`,
      hint: {
        es: 'TCPI = (BAC - EV) / (BAC - AC). Resta primero, luego divide.',
        en: 'TCPI = (BAC - EV) / (BAC - AC). Subtract first, then divide.'
      }
    },
    {
      id: 'ev-004',
      title: { es: '4. PERT — Estimación de 3 valores', en: '4. PERT — Three-point estimation' },
      difficulty: 'medium',
      topic: 'estimation',
      description: {
        es: 'Calcula la estimación PERT usando la fórmula Beta = (P + 4M + O) / 6, donde P = pesimista, M = más probable, O = optimista. Para la desviación estándar: σ = (P - O) / 6.',
        en: 'Calculate the PERT estimate using the Beta formula = (P + 4M + O) / 6, where P = pessimistic, M = most likely, O = optimistic. For standard deviation: σ = (P - O) / 6.'
      },
      starter: `# PERT calculation
P = 28  # Pessimistic
M = 14  # Most likely
O = 8   # Optimistic

# Calculate PERT estimate and standard deviation
beta = None
sigma = None

print(f"PERT (Beta) = {beta}")
print(f"Sigma = {sigma:.2f}")
print(f"Rango 1-sigma: {beta-sigma:.2f} a {beta+sigma:.2f}")
`,
      validation: {
        type: 'variables',
        checks: {
          beta: { value: 15.333, tolerance: 0.5 },
          sigma: { value: 3.333, tolerance: 0.1 }
        }
      },
      solution: `P = 28
M = 14
O = 8
beta = (P + 4*M + O) / 6  # = (28 + 56 + 8) / 6 = 92/6 = 15.33
sigma = (P - O) / 6  # = 20/6 = 3.33`,
      hint: {
        es: 'Beta = (P + 4*M + O) / 6. Sigma = (P - O) / 6. ¡Atención al orden!',
        en: 'Beta = (P + 4*M + O) / 6. Sigma = (P - O) / 6. Pay attention to order!'
      }
    },
    {
      id: 'ev-005',
      title: { es: '5. EMV — Valor monetario esperado', en: '5. EMV — Expected Monetary Value' },
      difficulty: 'easy',
      topic: 'risk',
      description: {
        es: 'Calcula el EMV (Expected Monetary Value) de un riesgo = Probabilidad × Impacto. Compara el EMV sin mitigación vs con mitigación y decide si la mitigación vale la pena.',
        en: 'Calculate the EMV (Expected Monetary Value) of a risk = Probability × Impact. Compare EMV without mitigation vs with mitigation and decide if mitigation is worthwhile.'
      },
      starter: `# EMV analysis
# Risk: server vendor goes bankrupt
prob_no_mit = 0.20   # 20% without mitigation
impact_no_mit = 300000

prob_mit = 0.05     # 5% with mitigation (pre-qualify backup vendor)
impact_mit = 300000
mit_cost = 25000    # Cost of mitigation

# EMV = Probability * Impact
emv_no = None
emv_mit = None
decision = None     # "MITIGATE" or "ACCEPT"

print(f"EMV sin mitigación: \${emv_no}")
print(f"EMV con mitigación (incluye costo): \${emv_mit}")
print(f"Decisión: {decision}")
print(f"Ahorro esperado: \${emv_no - emv_mit}")
`,
      validation: {
        type: 'variables',
        checks: {
          emv_no: { value: 60000, tolerance: 100 },
          emv_mit: { value: 40000, tolerance: 100 },
          decision: { value: 'MITIGATE', type: 'string' }
        }
      },
      solution: `emv_no = prob_no_mit * impact_no_mit  # = 0.20 * 300000 = 60000
emv_mit = prob_mit * impact_mit + mit_cost  # = 0.05 * 300000 + 25000 = 15000 + 25000 = 40000
decision = "MITIGATE"  # because 40000 < 60000`,
      hint: {
        es: 'EMV = prob * impact. La mitigación vale la pena si su EMV total (incluyendo costo) es menor.',
        en: 'EMV = prob * impact. Mitigation is worthwhile if its total EMV (including cost) is lower.'
      }
    },
    {
      id: 'ev-006',
      title: { es: '6. Communication Channels', en: '6. Communication Channels' },
      difficulty: 'easy',
      topic: 'stakeholder',
      description: {
        es: 'Calcula el número de canales de comunicación = n(n-1)/2, donde n es el número de stakeholders.',
        en: 'Calculate the number of communication channels = n(n-1)/2, where n is the number of stakeholders.'
      },
      starter: `# Communication channels
n = 12  # number of stakeholders

channels = None

print(f"Con {n} stakeholders hay {channels} canales de comunicación")
`,
      validation: {
        type: 'variables',
        checks: {
          channels: { value: 66, tolerance: 0 }
        }
      },
      solution: `n = 12
channels = n * (n - 1) // 2  # = 12*11/2 = 66`,
      hint: {
        es: 'n(n-1)/2. La comunicación crece cuadráticamente.',
        en: 'n(n-1)/2. Communication grows quadratically.'
      }
    },
    {
      id: 'ev-007',
      title: { es: '7. Decision Tree', en: '7. Decision Tree' },
      difficulty: 'hard',
      topic: 'risk',
      description: {
        es: 'Calcula el EMV de un decision tree. Tienes 2 opciones: "Build" (60% éxito con revenue $500K, 40% fracaso con costo $200K) o "Buy" (éxito seguro de $250K). ¿Cuál tiene mejor EMV?',
        en: 'Calculate the EMV of a decision tree. You have 2 options: "Build" (60% success with revenue $500K, 40% failure with cost $200K) or "Buy" (certain success of $250K). Which has better EMV?'
      },
      starter: `# Decision tree analysis
# Option 1: Build
prob_success = 0.6
revenue_success = 500000
cost_failure = 200000
emv_build = None

# Option 2: Buy
emv_buy = 250000  # guaranteed

print(f"EMV Build: \${emv_build}")
print(f"EMV Buy: \${emv_buy}")
print(f"Mejor opción: {'Build' if emv_build > emv_buy else 'Buy'}")
`,
      validation: {
        type: 'variables',
        checks: {
          emv_build: { value: 220000, tolerance: 100 }
        }
      },
      solution: `prob_success = 0.6
revenue_success = 500000
cost_failure = 200000
# EMV = success_revenue * prob_success - cost_failure * prob_failure
# = 500000 * 0.6 - 200000 * 0.4 = 300000 - 80000 = 220000
emv_build = prob_success * revenue_success - (1 - prob_success) * cost_failure`,
      hint: {
        es: 'EMV Build = (revenue × prob) - (cost × (1-prob)). No olvides restar la pérdida en caso de fracaso.',
        en: 'EMV Build = (revenue × prob) - (cost × (1-prob)). Do not forget to subtract the loss in case of failure.'
      }
    },
    {
      id: 'ev-008',
      title: { es: '8. Critical Path Method (CPM)', en: '8. Critical Path Method (CPM)' },
      difficulty: 'hard',
      topic: 'schedule',
      description: {
        es: 'Dadas 4 actividades con dependencias y duraciones, calcula la duración total del proyecto. Actividades: A (3d, inicio), B (4d, depende de A), C (2d, depende de A), D (5d, depende de B y C). La duración es la ruta más larga.',
        en: 'Given 4 activities with dependencies and durations, calculate the total project duration. Activities: A (3d, start), B (4d, depends on A), C (2d, depends on A), D (5d, depends on B and C). Duration is the longest path.'
      },
      starter: `# CPM calculation
A = 3  # days, no dependency
B = 4  # days, depends on A
C = 2  # days, depends on A
D = 5  # days, depends on B and C

# Two paths:
# Path 1: A -> B -> D = A + B + D
# Path 2: A -> C -> D = A + C + D
path1 = None
path2 = None
critical_path = None
project_duration = None

print(f"Path A-B-D: {path1} days")
print(f"Path A-C-D: {path2} days")
print(f"Critical path: {critical_path} ({project_duration} days)")
`,
      validation: {
        type: 'variables',
        checks: {
          path1: { value: 12, tolerance: 0 },
          path2: { value: 10, tolerance: 0 },
          project_duration: { value: 12, tolerance: 0 }
        }
      },
      solution: `A = 3; B = 4; C = 2; D = 5
path1 = A + B + D  # = 3 + 4 + 5 = 12
path2 = A + C + D  # = 3 + 2 + 5 = 10
project_duration = max(path1, path2)  # = 12
critical_path = "A-B-D"`,
      hint: {
        es: 'Hay dos rutas. La más larga es la crítica. max(path1, path2).',
        en: 'There are two paths. The longest is critical. max(path1, path2).'
      }
    },
    {
      id: 'ev-009',
      title: { es: '9. ROI y NPV simplificado', en: '9. ROI and simplified NPV' },
      difficulty: 'medium',
      topic: 'finance',
      description: {
        es: 'Calcula ROI = (Beneficio neto / Inversión) × 100. Y NPV = Σ(CF_t / (1+r)^t) - Inversión inicial. Para un proyecto con inversión $100K, retornos $40K/año por 3 años, tasa 10%.',
        en: 'Calculate ROI = (Net benefit / Investment) × 100. And NPV = Σ(CF_t / (1+r)^t) - Initial investment. For a project with $100K investment, $40K/year returns for 3 years, 10% rate.'
      },
      starter: `# ROI and NPV
investment = 100000
returns = [40000, 40000, 40000]  # 3 years
rate = 0.10

# ROI
total_return = sum(returns)
net_benefit = total_return - investment
roi = None  # percentage

# NPV
npv = -investment
for t, cf in enumerate(returns, 1):
    npv += cf / ((1 + rate) ** t)

print(f"Total return: \${total_return}")
print(f"Net benefit: \${net_benefit}")
print(f"ROI: {roi:.1f}%")
print(f"NPV: \${npv}")
`,
      validation: {
        type: 'variables',
        checks: {
          roi: { value: 20.0, tolerance: 0.5 },
          npv: { value: -5724.66, tolerance: 50 }
        }
      },
      solution: `investment = 100000
returns = [40000, 40000, 40000]
rate = 0.10

total_return = sum(returns)  # 120000
net_benefit = total_return - investment  # 20000
roi = (net_benefit / investment) * 100  # 20%

npv = -investment
for t, cf in enumerate(returns, 1):
    npv += cf / ((1 + rate) ** t)
# npv = -100000 + 40000/1.1 + 40000/1.21 + 40000/1.331
# = -100000 + 36363.6 + 33057.9 + 30053.5
# = -5724.6`,
      hint: {
        es: 'ROI = (beneficio neto / inversión) × 100. NPV descuenta cada cash flow al presente.',
        en: 'ROI = (net benefit / investment) × 100. NPV discounts each cash flow to present.'
      }
    },
    {
      id: 'ev-010',
      title: { es: '10. Sprint Velocity y Burndown', en: '10. Sprint Velocity and Burndown' },
      difficulty: 'medium',
      topic: 'agile',
      description: {
        es: 'Calcula la velocidad promedio de un equipo y predice cuántos sprints necesita. Velocidades: 28, 32, 30, 35, 31. Backlog: 220 SP. ¿Cuántos sprints?',
        en: 'Calculate the average velocity of a team and predict how many sprints it needs. Velocities: 28, 32, 30, 35, 31. Backlog: 220 SP. How many sprints?'
      },
      starter: `# Velocity prediction
velocities = [28, 32, 30, 35, 31]
backlog = 220  # story points remaining

# Average velocity
avg_velocity = None
# Required sprints
required_sprints = None

print(f"Velocidad promedio: {avg_velocity:.1f} SP/sprint")
print(f"Sprints necesarios: {required_sprints}")
`,
      validation: {
        type: 'variables',
        checks: {
          avg_velocity: { value: 31.2, tolerance: 0.5 },
          required_sprints: { value: 8, tolerance: 0 }
        }
      },
      solution: `velocities = [28, 32, 30, 35, 31]
backlog = 220
avg_velocity = sum(velocities) / len(velocities)  # = 31.2
# ceil(220 / 31.2) = ceil(7.05) = 8
import math
required_sprints = math.ceil(backlog / avg_velocity)`,
      hint: {
        es: 'Promedio = sum/len. Sprints = ceil(backlog / promedio).',
        en: 'Average = sum/len. Sprints = ceil(backlog / average).'
      }
    },
    {
      id: 'ev-011',
      title: { es: '11. Six Sigma DPMO', en: '11. Six Sigma DPMO' },
      difficulty: 'medium',
      topic: 'quality',
      description: {
        es: 'Calcula DPMO (Defects Per Million Opportunities). Si en 1000 unidades con 5 oportunidades cada una se encontraron 25 defectos, ¿cuál es el DPMO?',
        en: 'Calculate DPMO (Defects Per Million Opportunities). If in 1000 units with 5 opportunities each 25 defects were found, what is the DPMO?'
      },
      starter: `# DPMO calculation
units = 1000
opportunities_per_unit = 5
defects = 25

total_opportunities = units * opportunities_per_unit
dpmo = None  # defects per million opportunities

print(f"Total opportunities: {total_opportunities}")
print(f"DPMO: {dpmo:,.0f}")
print(f"Six Sigma target: 3.4 DPMO")
`,
      validation: {
        type: 'variables',
        checks: {
          dpmo: { value: 5000, tolerance: 100 }
        }
      },
      solution: `units = 1000
opportunities_per_unit = 5
defects = 25
total_opportunities = units * opportunities_per_unit  # 5000
dpmo = (defects / total_opportunities) * 1_000_000  # = 25/5000 * 1M = 5000`,
      hint: {
        es: 'DPMO = (defectos / total_oportunidades) × 1,000,000. ¡Multiplica por millón!',
        en: 'DPMO = (defects / total_opportunities) × 1,000,000. Multiply by a million!'
      }
    },
    {
      id: 'ev-012',
      title: { es: '12. ROI acumulativo (compounding)', en: '12. Cumulative ROI (compounding)' },
      difficulty: 'medium',
      topic: 'finance',
      description: {
        es: 'Un proyecto tiene un costo inicial de $50K y ahorros mensuales de $5K durante 12 meses. ¿Cuál es el ROI? ¿Cuántos meses para recuperar la inversión (payback period)?',
        en: 'A project has an initial cost of $50K and monthly savings of $5K for 12 months. What is the ROI? How many months to recover the investment (payback period)?'
      },
      starter: `# ROI and payback
initial_cost = 50000
monthly_savings = 5000
months = 12

total_savings = monthly_savings * months
net_benefit = total_savings - initial_cost
roi = None
# Payback: how many months to recover 50K?
payback_months = None

print(f"Total savings: \${total_savings}")
print(f"Net benefit: \${net_benefit}")
print(f"ROI: {roi:.1f}%")
print(f"Payback: {payback_months} months")
`,
      validation: {
        type: 'variables',
        checks: {
          roi: { value: 20.0, tolerance: 0.5 },
          payback_months: { value: 10, tolerance: 0 }
        }
      },
      solution: `initial_cost = 50000
monthly_savings = 5000
months = 12
total_savings = monthly_savings * months  # 60000
net_benefit = total_savings - initial_cost  # 10000
roi = (net_benefit / initial_cost) * 100  # 20%
payback_months = initial_cost / monthly_savings  # 10`,
      hint: {
        es: 'ROI = (ahorros - costo) / costo × 100. Payback = costo / ahorro_mensual.',
        en: 'ROI = (savings - cost) / cost × 100. Payback = cost / monthly_savings.'
      }
    },
    {
      id: 'ev-013',
      title: { es: '13. Monte Carlo simple (P50, P80)', en: '13. Simple Monte Carlo (P50, P80)' },
      difficulty: 'hard',
      topic: 'risk',
      description: {
        es: 'Simula 10000 escenarios de duración del proyecto. Cada actividad tiene distribución triangular (optimista, más probable, pesimista). Calcula P50 y P80 (percentiles 50 y 80).',
        en: 'Simulate 10,000 project duration scenarios. Each activity has a triangular distribution (optimistic, most likely, pessimistic). Calculate P50 and P80 (50th and 80th percentiles).'
      },
      starter: `# Monte Carlo simulation
import random
random.seed(42)

# Activities: (optimistic, most_likely, pessimistic) in days
activities = [
    (3, 5, 8),    # A
    (5, 7, 12),   # B (depends on A)
    (4, 6, 10),   # C (depends on A)
    (2, 4, 6),    # D (depends on B and C)
]

N = 10000
durations = []

for _ in range(N):
    # Sample each activity duration
    a = random.triangular(*activities[0])
    b = random.triangular(*activities[1])
    c = random.triangular(*activities[2])
    d = random.triangular(*activities[3])
    # Project duration = max(A + B + D, A + C + D) = A + D + max(B, C)
    total = a + d + max(b, c)
    durations.append(total)

durations.sort()
p50 = durations[int(N * 0.5)]
p80 = durations[int(N * 0.8)]

print(f"P50 (mediana): {p50} días")
print(f"P80: {p80} días")
`,
      validation: {
        type: 'output',
        contains: ['P50', 'P80'],
        numbersInRange: [
          { label: 'P50', min: 14, max: 20 },
          { label: 'P80', min: 17, max: 23 }
        ]
      },
      solution: `import random
random.seed(42)
activities = [(3, 5, 8), (5, 7, 12), (4, 6, 10), (2, 4, 6)]
N = 10000
durations = []
for _ in range(N):
    a = random.triangular(*activities[0])
    b = random.triangular(*activities[1])
    c = random.triangular(*activities[2])
    d = random.triangular(*activities[3])
    durations.append(a + d + max(b, c))
durations.sort()
p50 = durations[int(N * 0.5)]
p80 = durations[int(N * 0.8)]`,
      hint: {
        es: 'random.triangular(low, high, mode) hace la simulación. La duración es la ruta más larga en cada escenario.',
        en: 'random.triangular(low, high, mode) does the simulation. Duration is the longest path in each scenario.'
      }
    },
    {
      id: 'ev-014',
      title: { es: '14. Beneficio/Costo (BCR)', en: '14. Benefit/Cost Ratio (BCR)' },
      difficulty: 'easy',
      topic: 'finance',
      description: {
        es: 'Calcula el Benefit/Cost Ratio (BCR) = Beneficio total descontado / Costo total descontado. Si BCR > 1, el proyecto es viable.',
        en: 'Calculate the Benefit/Cost Ratio (BCR) = Total discounted benefit / Total discounted cost. If BCR > 1, the project is viable.'
      },
      starter: `# BCR calculation
rate = 0.10
# Costs (negative)
costs = [-100000]  # initial investment
# Benefits (positive)
benefits = [30000, 40000, 50000]  # 3 years

# Discount each one
pv_costs = sum(cf / (1 + rate) ** t for t, cf in enumerate(costs))
pv_benefits = sum(cf / (1 + rate) ** t for t, cf in enumerate(benefits, 1))
bcr = None

print(f"PV Costs: \${-pv_costs}")
print(f"PV Benefits: \${pv_benefits}")
print(f"BCR: {bcr:.2f}")
print(f"¿Viable? {bcr > 1}")
`,
      validation: {
        type: 'variables',
        checks: {
          bcr: { value: 0.966, tolerance: 0.05 }
        }
      },
      solution: `rate = 0.10
costs = [-100000]
benefits = [30000, 40000, 50000]
pv_costs = sum(cf / (1 + rate) ** t for t, cf in enumerate(costs))  # -100000
pv_benefits = sum(cf / (1 + rate) ** t for t, cf in enumerate(benefits, 1))
# pv_benefits = 30000/1.1 + 40000/1.21 + 50000/1.331 = 27272.7 + 33057.9 + 37565.7 = 97896.3
bcr = pv_benefits / abs(pv_costs)  # ~0.98 < 1, not viable at 10%`,
      hint: {
        es: 'PV = CF / (1+r)^t. BCR = total_pv_benefits / total_pv_costs.',
        en: 'PV = CF / (1+r)^t. BCR = total_pv_benefits / total_pv_costs.'
      }
    },
    {
      id: 'ev-015',
      title: { es: '15. Throughput y Lead Time (Kanban)', en: '15. Throughput and Lead Time (Kanban)' },
      difficulty: 'medium',
      topic: 'agile',
      description: {
        es: 'Calcula el throughput (items/sprint) y lead time (días promedio desde inicio hasta entrega) de un equipo Kanban con 10 items completados en 5 sprints de 2 semanas, con tiempos de ciclo 5, 7, 4, 6, 8, 5, 7, 6, 4, 5 días.',
        en: 'Calculate the throughput (items/sprint) and lead time (average days from start to delivery) of a Kanban team with 10 items completed in 5 two-week sprints, with cycle times 5, 7, 4, 6, 8, 5, 7, 6, 4, 5 days.'
      },
      starter: `# Kanban metrics
items = 10
sprints = 5
sprint_length_days = 14  # 2 weeks
cycle_times = [5, 7, 4, 6, 8, 5, 7, 6, 4, 5]

throughput = None
avg_lead_time = None

print(f"Throughput: {throughput} items/sprint")
print(f"Average lead time: {avg_lead_time:.1f} days")
`,
      validation: {
        type: 'variables',
        checks: {
          throughput: { value: 2.0, tolerance: 0.1 },
          avg_lead_time: { value: 5.7, tolerance: 0.3 }
        }
      },
      solution: `items = 10
sprints = 5
cycle_times = [5, 7, 4, 6, 8, 5, 7, 6, 4, 5]
throughput = items / sprints  # 2.0 items/sprint
avg_lead_time = sum(cycle_times) / len(cycle_times)  # 5.7 days`,
      hint: {
        es: 'Throughput = items / sprints. Lead time = promedio de cycle times.',
        en: 'Throughput = items / sprints. Lead time = average of cycle times.'
      }
    },
    {
      id: 'ev-016',
      title: { es: '16. Análisis de sensibilidad (Tornado)', en: '16. Sensitivity analysis (Tornado)' },
      difficulty: 'hard',
      topic: 'risk',
      description: {
        es: 'Un proyecto tiene costo base $500K. Calcula cómo cambia el costo si cada variable cambia ±20%. Variables: A) Hardware ±$80K, B) Software ±$50K, C) Consultoría ±$30K, D) Contingencia ±$20K. Ordena por impacto (tornado).',
        en: 'A project has a base cost of $500K. Calculate how the cost changes if each variable changes ±20%. Variables: A) Hardware ±$80K, B) Software ±$50K, C) Consulting ±$30K, D) Contingency ±$20K. Order by impact (tornado).'
      },
      starter: `# Tornado analysis
base_cost = 500000
variables = [
    ("Hardware", 80000),
    ("Software", 50000),
    ("Consultoria", 30000),
    ("Contingencia", 20000)
]

# Calculate impact of +20% change in each
impacts = []
for name, variance in variables:
    impact = variance * 0.20
    impacts.append((name, impact))

# Sort by impact descending (tornado shape)
impacts.sort(key=lambda x: x[1], reverse=True)

print("Tornado (mayor a menor impacto):")
for name, impact in impacts:
    print(f"  {name}: ±\${impact}")
`,
      validation: {
        type: 'output',
        contains: ['Hardware', 'Software', 'Tornado'],
        // First item must be Hardware
        firstItems: ['Hardware']
      },
      solution: `base_cost = 500000
variables = [("Hardware", 80000), ("Software", 50000), ("Consultoria", 30000), ("Contingencia", 20000)]
impacts = []
for name, variance in variables:
    impact = variance * 0.20
    impacts.append((name, impact))
impacts.sort(key=lambda x: x[1], reverse=True)`,
      hint: {
        es: 'Multiplica la varianza por 0.20. Ordena de mayor a menor impacto.',
        en: 'Multiply variance by 0.20. Sort from highest to lowest impact.'
      }
    },
    {
      id: 'ev-017',
      title: { es: '17. WBS — Paquetes de trabajo', en: '17. WBS — Work packages' },
      difficulty: 'easy',
      topic: 'scope',
      description: {
        es: 'Calcula el número de paquetes de trabajo en un WBS. Si un proyecto tiene 4 entregables principales, y cada uno se divide en 3 sub-entregables, ¿cuántos paquetes de trabajo hay?',
        en: 'Calculate the number of work packages in a WBS. If a project has 4 main deliverables, and each is divided into 3 sub-deliverables, how many work packages are there?'
      },
      starter: `# WBS structure
main_deliverables = 4
sub_deliverables_each = 3
work_packages = None

print(f"Work packages: {work_packages}")
print(f"El WBS es 4 × 3 = {main_deliverables * sub_deliverables_each}")
`,
      validation: {
        type: 'variables',
        checks: {
          work_packages: { value: 12, tolerance: 0 }
        }
      },
      solution: `main_deliverables = 4
sub_deliverables_each = 3
work_packages = main_deliverables * sub_deliverables_each  # 12`,
      hint: {
        es: 'Multiplicación simple: 4 × 3.',
        en: 'Simple multiplication: 4 × 3.'
      }
    },
    {
      id: 'ev-018',
      title: { es: '18. Stakeholder Salience (Mitchell)', en: '18. Stakeholder Salience (Mitchell)' },
      difficulty: 'hard',
      topic: 'stakeholder',
      description: {
        es: 'Clasifica stakeholders según el modelo Mitchell (Poder × Legitimidad × Urgencia). Para cada stakeholder, devuelve "Definitivo", "Peligroso", "Dependiente", "Latente" o "Inactivo".',
        en: 'Classify stakeholders according to the Mitchell model (Power × Legitimacy × Urgency). For each stakeholder, return "Definitivo", "Peligroso", "Dependiente", "Latente" or "Inactivo".'
      },
      starter: `# Mitchell salience model
# (Poder, Legitimidad, Urgencia)
stakeholders = [
    ("Sponsor", 1, 1, 1),
    ("Proveedor insatisfecho", 1, 0, 1),
    ("ONG de la comunidad", 0, 1, 1),
    ("Empleado preocupado", 0, 0, 1),
    ("Inversionista silencioso", 1, 0, 0),
]

def classify(p, l, u):
    if p and l and u: return "Definitivo"
    if p and u: return "Peligroso"
    if l and u: return "Dependiente"
    if p or l: return "Latente (Dominante o Sumiso)"
    return "Inactivo"

for name, p, l, u in stakeholders:
    print(f"{name}: {classify(p, l, u)}")
`,
      validation: {
        type: 'output',
        contains: ['Sponsor', 'Definitivo', 'Peligroso', 'Dependiente']
      },
      solution: `def classify(p, l, u):
    if p and l and u: return "Definitivo"
    if p and u: return "Peligroso"
    if l and u: return "Dependiente"
    if p or l: return "Latente"
    return "Inactivo"`,
      hint: {
        es: 'Las 3 = definitivo. 2 atributos: depende de cuáles (peligroso si P+U, dependiente si L+U). 1 o 0 = latente o inactivo.',
        en: 'All 3 = definitive. 2 attributes: depends on which (dangerous if P+U, dependent if L+U). 1 or 0 = latent or inactive.'
      }
    },
    {
      id: 'ev-019',
      title: { es: '19. Float / Slack de actividad', en: '19. Activity Float / Slack' },
      difficulty: 'medium',
      topic: 'schedule',
      description: {
        es: 'Calcula el Total Float de una actividad = LS - ES (o LF - EF). Si LS=10, ES=7, LF=14, EF=11, ¿cuál es el float?',
        en: 'Calculate the Total Float of an activity = LS - ES (or LF - EF). If LS=10, ES=7, LF=14, EF=11, what is the float?'
      },
      starter: `# Float calculation
ES = 7  # Early Start
EF = 11  # Early Finish
LS = 10  # Late Start
LF = 14  # Late Finish

# Total Float = LS - ES
total_float = None
free_float = None  # usually 0 if there's a successor, or LS - ES of next activity

print(f"Total Float: {total_float} days")
print(f"¿Actividad crítica? {total_float == 0}")
`,
      validation: {
        type: 'variables',
        checks: {
          total_float: { value: 3, tolerance: 0 }
        }
      },
      solution: `ES = 7; EF = 11; LS = 10; LF = 14
total_float = LS - ES  # = 10 - 7 = 3
# Also = LF - EF = 14 - 11 = 3`,
      hint: {
        es: 'Total Float = LS - ES = LF - EF. Las dos restas deben dar lo mismo.',
        en: 'Total Float = LS - ES = LF - EF. Both subtractions should give the same result.'
      }
    },
    {
      id: 'ev-020',
      title: { es: '20. Project Value Realization Index', en: '20. Project Value Realization Index' },
      difficulty: 'hard',
      topic: 'benefits',
      description: {
        es: 'Calcula un Project Value Realization Index = Outcomes / Inputs. Si el proyecto costó $200K, tomó 6 meses, y generó $400K en revenue incremental, ¿cuál es el índice? ¿Y si también mejoró el NPS en 20 puntos?',
        en: 'Calculate a Project Value Realization Index = Outcomes / Inputs. If the project cost $200K, took 6 months, and generated $400K in incremental revenue, what is the index? What if it also improved NPS by 20 points?'
      },
      starter: `# Project Value Realization
cost = 200000
duration_months = 6
revenue = 400000
nps_improvement = 20  # points

# Basic financial ROI
roi = (revenue - cost) / cost * 100

# Composite value index (financial + qualitative)
# Weight: 70% financial, 30% NPS
financial_score = (revenue / cost)  # 2.0
qualitative_score = nps_improvement / 50  # normalize NPS (max ~50)
value_index = (0.7 * financial_score) + (0.3 * qualitative_score)

print(f"ROI financiero: {roi:.1f}%")
print(f"Value index compuesto: {value_index:.2f}")
print(f"Por cada $1 invertido se generaron \${financial_score} de revenue")
`,
      validation: {
        type: 'variables',
        checks: {
          roi: { value: 100.0, tolerance: 5 },
          value_index: { value: 1.52, tolerance: 0.05 }
        }
      },
      solution: `cost = 200000
revenue = 400000
nps_improvement = 20
roi = (revenue - cost) / cost * 100  # 100%
financial_score = revenue / cost  # 2.0
qualitative_score = nps_improvement / 50  # 0.4
value_index = (0.7 * financial_score) + (0.3 * qualitative_score)  # 1.4 + 0.12 = 1.52`,
      hint: {
        es: 'ROI = (rev - cost) / cost × 100. Value index = combinación ponderada de score financiero y cualitativo.',
        en: 'ROI = (rev - cost) / cost × 100. Value index = weighted combination of financial and qualitative score.'
      }
    }
  ];

  global.PY_EXERCISES = EXERCISES;
})(window);
