/* ==========================================================
   PMP Practice Lab — Exam simulator (180 questions / 240 min)
   ========================================================== */
(function (global) {
  'use strict';

  function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function isCorrect(q, answer) {
    switch (q.type) {
      case 'mcq':
      case 'case':
      case 'graphic':
        return answer === q.correct;
      case 'multi':
        return Array.isArray(answer) && JSON.stringify([...answer].sort()) === JSON.stringify([...q.correct].sort());
      case 'dnd':
        return Array.isArray(answer) && JSON.stringify(answer) === JSON.stringify(q.correctOrder);
      case 'matching':
        return Array.isArray(answer) && answer.length === q.correct.length
          && answer.every(pair => {
            const correctPair = q.correct.find(item => item.left === pair.l);
            return correctPair && correctPair.right === pair.r;
          });
      case 'hotspot':
        return typeof answer === 'number' && !!q.hotspots[answer]?.correct;
      case 'pulldown':
        return Array.isArray(answer) && answer.length === q.blanks.length
          && answer.every((value, index) => value === q.blanks[index].correct);
      default:
        return false;
    }
  }

  const Simulator = {
    mode: 'full', // 'full' (180/240) or 'quick' (20/30)
    state: null,

    render() {
      const lobby = document.getElementById('examLobby');
      if (lobby) lobby.hidden = false;
      document.getElementById('examRunner').hidden = true;
      document.getElementById('examResult').hidden = true;
      // Domain bars
      const dom = QUESTION_DOMAINS;
      const total = (dom.people || 0) + (dom.process || 0) + (dom.business || 0);
      const wrap = document.getElementById('examDomainBars');
      if (wrap && total) {
        wrap.innerHTML = [
          {n: I18n.t('common.people'), nq: dom.people, pct: 33},
          {n: I18n.t('common.process'), nq: dom.process, pct: 41},
          {n: I18n.t('common.business'), nq: dom.business, pct: 26}
        ].map(d => `
          <div class="domain-bar">
            <div class="domain-bar__name">${d.n} (${d.pct}%)</div>
            <div class="domain-bar__track"><div class="domain-bar__fill" style="width:${d.pct}%"></div></div>
            <div class="domain-bar__num">~${Math.round(180 * d.pct / 100)}q</div>
          </div>
        `).join('');
      }
      // Buttons
      const startBtn = document.getElementById('startExamBtn');
      const quickBtn = document.getElementById('quickExamBtn');
      if (startBtn) startBtn.onclick = () => { this.mode = 'full'; this.start(); };
      if (quickBtn) quickBtn.onclick = () => { this.mode = 'quick'; this.start(); };
    },

    start() {
      const isQuick = this.mode === 'quick';
      const TOTAL_Q = isQuick ? 20 : 180;
      const TOTAL_TIME = isQuick ? 30 * 60 : 240 * 60;
      // Build queue: distribute by domain (33% People, 41% Process, 26% Business)
      const dom = QUESTION_DOMAINS;
      const byDom = {
        people: QUESTIONS.filter(q => q.domain === 'people'),
        process: QUESTIONS.filter(q => q.domain === 'process'),
        business: QUESTIONS.filter(q => q.domain === 'business')
      };
      const counts = {
        people: Math.round(TOTAL_Q * 0.33),
        process: Math.round(TOTAL_Q * 0.41),
        business: Math.round(TOTAL_Q * 0.26)
      };
      const caseGroups = [];
      let currentCaseGroup = null;
      QUESTIONS.filter(q => q.type === 'case').forEach(q => {
        if (!currentCaseGroup || /^Question\s+1\//i.test(q.question.en)) {
          currentCaseGroup = [];
          caseGroups.push(currentCaseGroup);
        }
        currentCaseGroup.push(q);
      });
      const caseGroupsForQueue = isQuick
        ? shuffle(caseGroups.filter(group => group.length <= 3)).slice(0, 1)
        : shuffle(caseGroups);
      const caseQuestions = caseGroupsForQueue.flat();
      const independentQuestions = [];
      const caseCounts = {
        people: caseQuestions.filter(q => q.domain === 'people').length,
        process: caseQuestions.filter(q => q.domain === 'process').length,
        business: caseQuestions.filter(q => q.domain === 'business').length
      };
      Object.keys(counts).forEach(d => {
        const independentCount = counts[d] - caseCounts[d];
        if (independentCount < 0) {
          throw new Error(`The case-study questions exceed the ${d} domain quota.`);
        }
        const independents = shuffle(byDom[d].filter(q => q.type !== 'case')).slice(0, independentCount);
        independentQuestions.push(...independents);
      });
      const queue = [...caseQuestions, ...shuffle(independentQuestions)];
      if (queue.length !== TOTAL_Q) {
        throw new Error(`Expected ${TOTAL_Q} unique exam questions, but selected ${queue.length}.`);
      }
      const pretestIndices = isQuick
        ? []
        : shuffle(Array.from({length: TOTAL_Q}, (_, index) => index)).slice(0, 10);
      const caseStudyCount = caseQuestions.length;
      const independentCount = TOTAL_Q - caseStudyCount;
      // Set up state
      this.state = {
        queue,
        pretestIndices,
        caseStudyCount,
        breakPoints: isQuick ? [] : [
          caseStudyCount,
          caseStudyCount + Math.floor(independentCount / 2)
        ],
        index: 0,
        answers: {},
        timeLeft: TOTAL_TIME,
        timeLimit: TOTAL_TIME,
        total: TOTAL_Q,
        isQuick,
        section: 1,
        breakUsed: [false, false],
        onBreak: false
      };
      // Save for resume
      Store.state.examDraft = this.state;
      Store.save();
      // Switch to runner
      document.getElementById('examLobby').hidden = true;
      document.getElementById('examRunner').hidden = false;
      document.getElementById('examResult').hidden = true;
      this.renderCurrent();
      // Start timer
      clearInterval(this._timer);
      this._timer = setInterval(() => this.tick(), 1000);
    },

    tick() {
      if (!this.state) return;
      this.state.timeLeft--;
      // Update timer display
      const t = document.getElementById('examTimerVal');
      if (t) {
        const m = Math.floor(this.state.timeLeft / 60);
        const s = this.state.timeLeft % 60;
        t.textContent = `${m}:${String(s).padStart(2, '0')}`;
      }
      const tWrap = document.getElementById('examTimer');
      if (tWrap && this.state.timeLeft < 60) tWrap.classList.add('warn');
      if (this.state.timeLeft <= 0) {
        clearInterval(this._timer);
        this.finish();
      }
      // Auto-save every 10 seconds
      if (this.state.timeLeft % 10 === 0) {
        Store.state.examDraft = this.state;
        Store.save();
      }
    },

    renderCurrent() {
      const q = this.state.queue[this.state.index];
      const r = document.getElementById('examRunner');
      r.innerHTML = '';

      // Header
      const head = document.createElement('div');
      head.className = 'runner__head';
      const progress = Math.round((this.state.index / this.state.total) * 100);
      const mins = Math.floor(this.state.timeLeft / 60);
      const secs = this.state.timeLeft % 60;
      head.innerHTML = `
        <div class="runner__progress">
          <div class="runner__progress-text">
            <span>${I18n.t('common.q')} ${this.state.index + 1} ${I18n.t('common.of')} ${this.state.total} · ${I18n.t(this.state.index < this.state.caseStudyCount ? 'exam.section1' : 'exam.section2')}</span>
            <span>${progress}%</span>
          </div>
          <div class="progress-bar"><div class="progress-bar__fill" style="width:${progress}%"></div></div>
        </div>
        <div class="runner__timer" id="examTimer">⏱ <span id="examTimerVal">${mins}:${String(secs).padStart(2,'0')}</span></div>
      `;
      r.appendChild(head);

      // Question block (same as practice but with extra actions)
      const qb = document.createElement('div');
      qb.className = 'runner__question';
      qb.innerHTML = `
        <div class="runner__qtag">
          <span class="t-domain">${I18n.t('common.' + q.domain)}</span>
          <span class="t-diff-${q.difficulty}">${I18n.t('common.' + q.difficulty)}</span>
        </div>
        ${q.scenario ? `<div class="runner__scenario"><strong>${I18n.current === 'es' ? 'Escenario' : 'Scenario'}</strong>${q.scenario[I18n.current]}</div>` : ''}
        <div class="runner__prompt">${q.question[I18n.current]}</div>
        <div id="questionBody"></div>
        <div id="feedbackArea"></div>
      `;
      r.appendChild(qb);

      const actions = document.createElement('div');
      actions.className = 'runner__actions';
      actions.innerHTML = `
        <div>
          <button class="btn" id="markBtn">🚩 ${I18n.t('common.mark')}</button>
          <button class="btn" id="skipBtn">${I18n.t('common.skip')}</button>
        </div>
        <div>
          <button class="btn" id="checkBtn">${I18n.t('practice.check')}</button>
          <button class="btn btn--primary" id="nextBtn" disabled>${I18n.t('practice.next')} →</button>
        </div>
      `;
      r.appendChild(actions);

      // Render body
      const body = qb.querySelector('#questionBody');
      // For simulator, we use a simplified MCQ-style body for all question types
      // (since we want speed)
      // BUT, for the case studies and special types, we render them
      if (q.type === 'mcq' || q.type === 'case' || q.type === 'graphic' || q.type === 'pulldown' || q.type === 'multi' || q.type === 'dnd' || q.type === 'matching' || q.type === 'hotspot') {
        // Reuse practice's body rendering
        if (global.Practice) {
          global.Practice.queue = [q];
          global.Practice.index = 0;
          global.Practice.answers = this.state.answers;
          global.Practice.renderQuestionBody(q, body);
        }
      }

      // Wire up
      const onCheck = () => {
        // Delegate to practice.check
        if (global.Practice) {
          global.Practice.queue = [q];
          global.Practice.index = 0;
          global.Practice.answers = this.state.answers;
          if (q.type === 'dnd') {
            this.state.answers[q.id] = [...qb.querySelectorAll('#dndList .dnd-item')]
              .map(item => parseInt(item.dataset.idx, 10));
          }
          const isPretest = this.state.pretestIndices.includes(this.state.index);
          global.Practice.check({ recordStats: !isPretest });
          // Save the answer
          this.state.answers[q.id] = global.Practice.answers[q.id];
        }
        document.getElementById('checkBtn').disabled = true;
        document.getElementById('nextBtn').disabled = false;
      };
      const onNext = () => {
        this.state.index++;
        if (this.state.index >= this.state.total) {
          this.finish();
        } else {
          const breakIndex = this.state.breakPoints.indexOf(this.state.index);
          if (!this.state.isQuick && breakIndex !== -1 && !this.state.breakUsed[breakIndex]) {
            this.takeBreak(breakIndex);
          } else {
            this.renderCurrent();
          }
        }
        Store.state.examDraft = this.state;
        Store.save();
      };
      actions.querySelector('#checkBtn').onclick = onCheck;
      actions.querySelector('#nextBtn').onclick = onNext;
      actions.querySelector('#markBtn').onclick = () => UI.toast(I18n.current === 'es' ? 'Pregunta marcada (próximamente: revisión)' : 'Question marked (review coming soon)');
      actions.querySelector('#skipBtn').onclick = onNext;
    },

    takeBreak(breakIndex) {
      clearInterval(this._timer);
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.id = 'examBreakModal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.innerHTML = `
        <div class="modal__box">
          <h3>${I18n.t('exam.breakBtn')}</h3>
          <p>${I18n.t(breakIndex === 0 ? 'exam.breakFirstNotice' : 'exam.breakSecondNotice')}</p>
          <p id="examBreakStatus" hidden>${I18n.t('exam.breakInProgress')}</p>
          <h3 id="examBreakTimer" hidden>10:00</h3>
          <div class="modal__actions">
            <button class="btn" id="skipExamBreak">${I18n.t('exam.skipBreak')}</button>
            <button class="btn btn--primary" id="startExamBreak">${I18n.t('exam.takeBreak')}</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      const resume = () => {
        clearInterval(this._breakTimer);
        modal.remove();
        this.state.onBreak = false;
        this.renderCurrent();
        this._timer = setInterval(() => this.tick(), 1000);
        Store.state.examDraft = this.state;
        Store.save();
      };
      const skipBtn = modal.querySelector('#skipExamBreak');
      const startBtn = modal.querySelector('#startExamBreak');
      const status = modal.querySelector('#examBreakStatus');
      const clock = modal.querySelector('#examBreakTimer');
      skipBtn.onclick = () => {
        this.state.breakUsed[breakIndex] = true;
        resume();
      };
      startBtn.onclick = () => {
        this.state.breakUsed[breakIndex] = true;
        this.state.onBreak = true;
        status.hidden = false;
        clock.hidden = false;
        skipBtn.hidden = true;
        startBtn.textContent = I18n.t('exam.endBreak');
        let secondsLeft = 10 * 60;
        startBtn.onclick = resume;
        this._breakTimer = setInterval(() => {
          secondsLeft--;
          clock.textContent = `${Math.floor(secondsLeft / 60)}:${String(secondsLeft % 60).padStart(2, '0')}`;
          if (secondsLeft <= 0) resume();
        }, 1000);
      };
    },

    async finish() {
      clearInterval(this._timer);
      clearInterval(this._breakTimer);
      document.getElementById('examBreakModal')?.remove();
      if (!await UI.confirm(I18n.t('exam.end'), I18n.t('exam.confirmEnd'))) {
        this._timer = setInterval(() => this.tick(), 1000);
        return;
      }
      // Compute results
      const r = document.getElementById('examResult');
      r.hidden = false;
      document.getElementById('examRunner').hidden = true;
      // Count
      const scoredQuestions = this.state.queue.filter((q, index) => !this.state.pretestIndices.includes(index));
      const correct = scoredQuestions.filter(q => isCorrect(q, this.state.answers[q.id])).length;
      const total = scoredQuestions.length;
      const pct = total ? Math.round((correct / total) * 100) : 0;
      // Record history
      Store.state.history.push({
        date: new Date().toISOString(),
        type: 'simulator',
        score: correct,
        total: total,
        examTotal: this.state.total,
        mode: this.state.isQuick ? 'quick' : 'full'
      });
      Store.save();
      r.innerHTML = `
        <div class="result__head">
          <h1>${I18n.current === 'es' ? '🎓 Simulacro finalizado' : '🎓 Mock exam complete'}</h1>
          <div class="result__score">${pct}%</div>
          <div class="result__verdict ${pct >= 70 ? 'pass' : 'fail'}">${correct} / ${total} ${I18n.t('exam.scoredResult')}</div>
          ${this.state.isQuick ? '' : `<p>${this.state.total} ${I18n.current === 'es' ? 'preguntas en total; 10 de prueba no puntuables.' : 'total questions; 10 unscored pretest questions.'}</p>`}
          <p style="color:var(--fg-mute);font-size:.85rem;margin-top:8px">${I18n.t('exam.warnBody')}</p>
        </div>
        <div class="runner__actions" style="margin-top:18px">
          <button class="btn" id="backLobby">${I18n.current === 'es' ? '← Volver al lobby' : '← Back to lobby'}</button>
          <button class="btn btn--primary" id="goPractice">${I18n.t('practice.title')}</button>
        </div>
      `;
      r.querySelector('#backLobby').onclick = () => this.render();
      r.querySelector('#goPractice').onclick = () => UI.navigate('practice');
      if (pct >= 75) Stats.celebrate();
      // Clear draft
      Store.state.examDraft = null;
      Store.save();
    }
  };

  global.Simulator = Simulator;
})(window);
