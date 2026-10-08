/* ==========================================================
   PMP Practice Lab — Practice mode
   Filter by domain/type/difficulty, run through questions with feedback
   ========================================================== */
(function (global) {
  'use strict';

  const Practice = {
    config: {
      domain: 'all',
      type: 'all',
      difficulty: 'all',
      qty: 10
    },
    queue: [],
    index: 0,
    answers: {},

    render() {
      // Render setup screen with chips
      const domChips = document.getElementById('domainChips');
      const typeChips = document.getElementById('typeChips');
      const diffChips = document.getElementById('diffChips');
      if (!domChips) return;
      // Domains
      const domains = [
        {k: 'all', label: I18n.t('common.filterAll'), num: ''},
        {k: 'people', label: I18n.t('common.people'), num: QUESTION_DOMAINS.people || 0},
        {k: 'process', label: I18n.t('common.process'), num: QUESTION_DOMAINS.process || 0},
        {k: 'business', label: I18n.t('common.business'), num: QUESTION_DOMAINS.business || 0}
      ];
      domChips.innerHTML = domains.map(d =>
        `<button class="chip ${d.k === Practice.config.domain ? 'is-active' : ''}" data-domain="${d.k}">
          ${d.label} ${d.num !== '' ? `<span class="chip__num">${d.num}</span>` : ''}
        </button>`).join('');
      domChips.querySelectorAll('.chip').forEach(c => {
        c.addEventListener('click', () => {
          Practice.config.domain = c.dataset.domain;
          Practice.render();
        });
      });
      // Types
      const types = [
        {k: 'all', label: I18n.t('common.filterAllTypes')},
        {k: 'mcq', label: I18n.t('questionType.mcq'), num: QUESTION_TYPES.mcq || 0},
        {k: 'multi', label: I18n.t('questionType.multi'), num: QUESTION_TYPES.multi || 0},
        {k: 'matching', label: I18n.t('questionType.matching'), num: QUESTION_TYPES.matching || 0},
        {k: 'dnd', label: I18n.t('questionType.dnd'), num: QUESTION_TYPES.dnd || 0},
        {k: 'hotspot', label: I18n.t('questionType.hotspot'), num: QUESTION_TYPES.hotspot || 0},
        {k: 'pulldown', label: I18n.t('questionType.pulldown'), num: QUESTION_TYPES.pulldown || 0},
        {k: 'case', label: I18n.t('questionType.case'), num: QUESTION_TYPES.case || 0},
        {k: 'graphic', label: I18n.t('questionType.graphic'), num: QUESTION_TYPES.graphic || 0}
      ];
      typeChips.innerHTML = types.map(t =>
        `<button class="chip ${t.k === Practice.config.type ? 'is-active' : ''}" data-type="${t.k}">
          ${t.label} ${t.num !== undefined ? `<span class="chip__num">${t.num}</span>` : ''}
        </button>`).join('');
      typeChips.querySelectorAll('.chip').forEach(c => {
        c.addEventListener('click', () => {
          Practice.config.type = c.dataset.type;
          Practice.render();
        });
      });
      // Difficulty
      const diffs = [
        {k: 'all', label: I18n.t('common.filterAllDiff')},
        {k: 'easy', label: I18n.t('common.easy')},
        {k: 'medium', label: I18n.t('common.medium')},
        {k: 'hard', label: I18n.t('common.hard')}
      ];
      diffChips.innerHTML = diffs.map(d =>
        `<button class="chip ${d.k === Practice.config.difficulty ? 'is-active' : ''}" data-diff="${d.k}">${d.label}</button>`).join('');
      diffChips.querySelectorAll('.chip').forEach(c => {
        c.addEventListener('click', () => {
          Practice.config.difficulty = c.dataset.diff;
          Practice.render();
        });
      });
      // Qty slider
      const range = document.getElementById('qtyRange');
      const val = document.getElementById('qtyValue');
      if (range) {
        range.value = Practice.config.qty;
        val.textContent = Practice.config.qty;
        range.oninput = () => {
          Practice.config.qty = parseInt(range.value, 10);
          val.textContent = Practice.config.qty;
        };
      }
      // Start button
      const start = document.getElementById('startPracticeBtn');
      if (start) start.onclick = () => Practice.start();
      // Show setup
      document.getElementById('practiceSetup').hidden = false;
      document.getElementById('practiceRunner').hidden = true;
      document.getElementById('practiceResult').hidden = true;
    },

    filterPool() {
      return QUESTIONS.filter(q => {
        if (Practice.config.domain !== 'all' && q.domain !== Practice.config.domain) return false;
        if (Practice.config.type !== 'all' && q.type !== Practice.config.type) return false;
        if (Practice.config.difficulty !== 'all' && q.difficulty !== Practice.config.difficulty) return false;
        return true;
      });
    },

    start() {
      const pool = this.filterPool();
      if (pool.length === 0) {
        UI.toast(I18n.t('practice.empty'));
        return;
      }
      // Shuffle
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      this.queue = shuffled.slice(0, Math.min(this.config.qty, pool.length));
      this.index = 0;
      this.answers = {};
      this.renderCurrent();
      document.getElementById('practiceSetup').hidden = true;
      document.getElementById('practiceRunner').hidden = false;
    },

    renderCurrent() {
      const q = this.queue[this.index];
      const r = document.getElementById('practiceRunner');
      r.innerHTML = '';

      // Header
      const head = document.createElement('div');
      head.className = 'runner__head';
      head.innerHTML = `
        <div class="runner__progress">
          <div class="runner__progress-text">
            <span>${I18n.t('common.q')} ${this.index + 1} ${I18n.t('common.of')} ${this.queue.length}</span>
            <span>${Math.round(((this.index) / this.queue.length) * 100)}%</span>
          </div>
          <div class="progress-bar"><div class="progress-bar__fill" style="width:${((this.index) / this.queue.length) * 100}%"></div></div>
        </div>
        <div class="runner__timer" id="questionTimer">⏱ <span>0:00</span></div>
      `;
      r.appendChild(head);

      // Question block
      const qb = document.createElement('div');
      qb.className = 'runner__question';
      qb.innerHTML = `
        <div class="runner__qtag">
          <span class="t-domain">${I18n.t('common.' + q.domain)}</span>
          <span class="t-diff-${q.difficulty}">${I18n.t('common.' + q.difficulty)}</span>
          <span>${(q.topic || '').toUpperCase()}</span>
          <span>${(q.approach || '').toUpperCase()}</span>
        </div>
        ${q.scenario ? `<div class="runner__scenario"><strong>${I18n.t('practice.scenario') || 'Escenario'}</strong>${q.scenario[I18n.current]}</div>` : ''}
        <div class="runner__prompt">${q.question[I18n.current]}</div>
        <div id="questionBody"></div>
        <div id="feedbackArea"></div>
      `;
      r.appendChild(qb);

      // Actions
      const actions = document.createElement('div');
      actions.className = 'runner__actions';
      actions.innerHTML = `
        <button class="btn" id="checkBtn">${I18n.t('practice.check')}</button>
        <button class="btn btn--primary" id="nextBtn" disabled>${I18n.t('practice.next')} →</button>
      `;
      r.appendChild(actions);

      // Render after adding actions because question renderers enable or disable the check button.
      const body = qb.querySelector('#questionBody');
      this.renderQuestionBody(q, body);

      actions.querySelector('#checkBtn').onclick = () => this.check();
      actions.querySelector('#nextBtn').onclick = () => this.next();

      // Reset timer for question
      this.qStart = Date.now();
      this.timerInterval = setInterval(() => {
        const t = document.querySelector('#questionTimer span');
        if (!t) return clearInterval(this.timerInterval);
        const s = Math.floor((Date.now() - this.qStart) / 1000);
        t.textContent = `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
      }, 1000);
    },

    renderQuestionBody(q, body) {
      const lang = I18n.current;
      const checkButton = body.closest('.runner').querySelector('#checkBtn');
      switch (q.type) {
        case 'mcq':
          body.innerHTML = `<div class="options" id="opts"></div>`;
          const opts = body.querySelector('#opts');
          q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option';
            btn.innerHTML = `<span class="option__letter">${String.fromCharCode(65+i)}</span><span class="option__text">${opt[lang]}</span>`;
            btn.onclick = () => {
              opts.querySelectorAll('.option').forEach(o => o.classList.remove('is-selected'));
              btn.classList.add('is-selected');
              this.answers[q.id] = i;
              checkButton.disabled = false;
            };
            opts.appendChild(btn);
          });
          break;
        case 'multi':
          body.innerHTML = `<p class="option__multi-hint">⚠ ${I18n.current === 'es' ? 'Selecciona TODAS las que apliquen' : 'Select ALL that apply'}</p><div class="options" id="opts"></div>`;
          const opts2 = body.querySelector('#opts');
          q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option';
            btn.innerHTML = `<span class="option__letter">${String.fromCharCode(65+i)}</span><span class="option__text">${opt[lang]}</span>`;
            btn.onclick = () => {
              btn.classList.toggle('is-selected');
              const sel = [...opts2.querySelectorAll('.option')].map((o, idx) => o.classList.contains('is-selected') ? idx : -1).filter(x => x >= 0);
              this.answers[q.id] = sel.sort();
              checkButton.disabled = sel.length === 0;
            };
            opts2.appendChild(btn);
          });
          break;
        case 'dnd':
          body.innerHTML = `<p>${I18n.current === 'es' ? 'Arrastra para reordenar (de arriba hacia abajo = orden correcto)' : 'Drag to reorder (top to bottom = correct order)'}</p><div class="dnd-list" id="dndList"></div>`;
          const dndList = body.querySelector('#dndList');
          // Shuffle
          const shuffled = q.items.map((it, i) => ({it, i})).sort(() => Math.random() - 0.5);
          shuffled.forEach(o => {
            const div = document.createElement('div');
            div.className = 'dnd-item';
            div.draggable = true;
            div.dataset.idx = o.i;
            div.textContent = o.it[lang];
            div.addEventListener('dragstart', (e) => {
              e.dataTransfer.setData('text/plain', o.i);
              div.classList.add('is-dragging');
            });
            div.addEventListener('dragend', () => div.classList.remove('is-dragging'));
            div.addEventListener('dragover', (e) => e.preventDefault());
            div.addEventListener('drop', (e) => {
              e.preventDefault();
              const fromIdx = e.dataTransfer.getData('text/plain');
              const fromEl = dndList.querySelector(`[data-idx="${fromIdx}"]`);
              if (!fromEl || fromEl === div) return;
              const rect = div.getBoundingClientRect();
              const after = (e.clientY - rect.top) > rect.height / 2;
              if (after) div.after(fromEl); else div.before(fromEl);
            });
            dndList.appendChild(div);
          });
          this.answers[q.id] = 'dnd-pending';
          checkButton.disabled = false;
          break;
        case 'matching':
          body.innerHTML = `<p>${I18n.current === 'es' ? 'Empareja cada elemento de la izquierda con uno de la derecha' : 'Match each item on the left with the right'}</p>
            <div class="matching-grid">
              <div class="matching-col" id="matchLeft"></div>
              <div class="matching-col" id="matchRight"></div>
            </div>
            <div id="matchResult"></div>`;
          this.renderMatching(q, body);
          checkButton.disabled = false;
          break;
        case 'hotspot':
          body.innerHTML = `<p>${I18n.current === 'es' ? 'Haz clic en el área correcta' : 'Click on the correct area'}</p>
            <div class="hotspot-wrap" id="hotspot">
              ${this.getHotspotSVG(q.image)}
              <div id="hotspots"></div>
            </div>`;
          this.renderHotspot(q, body);
          checkButton.disabled = true;
          break;
        case 'pulldown':
          body.innerHTML = `<div id="pulldownBody"></div>`;
          this.renderPulldown(q, body);
          checkButton.disabled = false;
          break;
        case 'case':
        case 'graphic':
        default:
          // For case and graphic, render as MCQ (or for graphic, show image)
          if (q.chart) {
            body.innerHTML = `<canvas id="qChart" height="180"></canvas>
              <div class="options" id="opts"></div>`;
            setTimeout(() => {
              const ctx = body.querySelector('#qChart');
              if (ctx && global.Chart) {
                new Chart(ctx, q.chart);
              }
            }, 50);
          } else {
            body.innerHTML = `<div class="options" id="opts"></div>`;
          }
          const opts3 = body.querySelector('#opts');
          q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option';
            btn.innerHTML = `<span class="option__letter">${String.fromCharCode(65+i)}</span><span class="option__text">${opt[lang]}</span>`;
            btn.onclick = () => {
              opts3.querySelectorAll('.option').forEach(o => o.classList.remove('is-selected'));
              btn.classList.add('is-selected');
              this.answers[q.id] = i;
              checkButton.disabled = false;
            };
            opts3.appendChild(btn);
          });
          break;
      }
    },

    getHotspotSVG(type) {
      if (type === 'burndown') {
        return `<svg class="hotspot-img" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="20" width="340" height="140" fill="#F8FAFC" stroke="#BCCCDC"/>
          <line x1="40" y1="20" x2="40" y2="160" stroke="#334E68" stroke-width="2"/>
          <line x1="40" y1="160" x2="380" y2="160" stroke="#334E68" stroke-width="2"/>
          <polyline points="60,30 100,55 140,80 180,100 220,125 260,145 300,155 340,160" stroke="#4FB3D9" stroke-dasharray="4 4" fill="none" stroke-width="2"/>
          <polyline points="60,40 100,90 140,120 180,145 220,155 260,160 300,160 340,160" stroke="#D7263D" fill="none" stroke-width="3"/>
          <text x="200" y="180" text-anchor="middle" font-size="10" fill="#627D98">Burndown Chart</text>
          <text x="10" y="100" text-anchor="middle" font-size="9" fill="#627D98" transform="rotate(-90 10 100)">Story Points</text>
          <text x="210" y="195" text-anchor="middle" font-size="9" fill="#627D98">Days</text>
        </svg>`;
      } else if (type === 'power-interest') {
        return `<svg class="hotspot-img" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <rect x="60" y="20" width="320" height="160" fill="#F8FAFC" stroke="#BCCCDC"/>
          <line x1="220" y1="20" x2="220" y2="180" stroke="#BCCCDC" stroke-dasharray="2 2"/>
          <line x1="60" y1="100" x2="380" y2="100" stroke="#BCCCDC" stroke-dasharray="2 2"/>
          <text x="140" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#1B9E77">Keep Informed</text>
          <text x="140" y="195" text-anchor="middle" font-size="12" font-weight="700" fill="#627D98">Monitor</text>
          <text x="300" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#D7263D">Manage Closely</text>
          <text x="300" y="195" text-anchor="middle" font-size="12" font-weight="700" fill="#F0B237">Keep Satisfied</text>
          <text x="220" y="13" text-anchor="middle" font-size="11" font-weight="700" fill="#0A2540">Power / Interest Matrix</text>
          <text x="20" y="100" text-anchor="middle" font-size="10" fill="#627D98" transform="rotate(-90 20 100)">Power</text>
          <text x="220" y="218" text-anchor="middle" font-size="10" fill="#627D98">Interest →</text>
        </svg>`;
      }
      return '';
    },

    renderHotspot(q, body) {
      const wrap = body.querySelector('#hotspots');
      const checkButton = body.closest('.runner').querySelector('#checkBtn');
      q.hotspots.forEach((hs, i) => {
        const t = document.createElement('button');
        t.className = 'hotspot-target';
        t.style.left = hs.x + '%';
        t.style.top = hs.y + '%';
        t.title = hs.label;
        t.onclick = () => {
          wrap.querySelectorAll('.hotspot-target').forEach(x => x.classList.remove('is-selected'));
          t.classList.add('is-selected');
          this.answers[q.id] = i;
          checkButton.disabled = false;
        };
        wrap.appendChild(t);
      });
    },

    renderPulldown(q, body) {
      const lang = I18n.current;
      let html = '';
      let p = q.question[lang];
      q.blanks.forEach((b, i) => {
        p = p.replace(`[${i+1}]`,
          `<select class="pulldown-blank" data-blank="${i}">
            <option value="">—</option>
            ${b.options.map(o => `<option value="${o}">${o}</option>`).join('')}
          </select>`);
      });
      html += `<div class="pulldown-row">${p}</div>`;
      body.innerHTML = html;
      const select = (e) => {
        const v = [];
        body.querySelectorAll('.pulldown-blank').forEach(s => v.push(s.value));
        this.answers[q.id] = v;
      };
      body.querySelectorAll('.pulldown-blank').forEach(s => s.onchange = select);
    },

    renderMatching(q, body) {
      const lang = I18n.current;
      const left = body.querySelector('#matchLeft');
      const right = body.querySelector('#matchRight');
      left.innerHTML = '<h4>' + (lang === 'es' ? 'Pregunta' : 'Question') + '</h4>';
      right.innerHTML = '<h4>' + (lang === 'es' ? 'Respuesta' : 'Answer') + '</h4>';
      // Shuffle right
      const rightOrder = q.right.map((r, i) => ({r, i})).sort(() => Math.random() - 0.5);
      this.matchSelect = { left: null, right: null, pairs: [] };
      q.left.forEach((l, i) => {
        const d = document.createElement('div');
        d.className = 'matching-item';
        d.dataset.left = i;
        d.textContent = l[lang];
        d.onclick = () => {
          left.querySelectorAll('.matching-item').forEach(x => x.classList.remove('is-selected'));
          d.classList.add('is-selected');
          this.matchSelect.left = i;
          this.tryMatch(body);
        };
        left.appendChild(d);
      });
      rightOrder.forEach(o => {
        const d = document.createElement('div');
        d.className = 'matching-item';
        d.dataset.right = o.i;
        d.textContent = o.r[lang];
        d.onclick = () => {
          right.querySelectorAll('.matching-item').forEach(x => x.classList.remove('is-selected'));
          d.classList.add('is-selected');
          this.matchSelect.right = o.i;
          this.tryMatch(body);
        };
        right.appendChild(d);
      });
    },

    tryMatch(body) {
      const {left, right, pairs} = this.matchSelect;
      if (left === null || right === null) return;
      // Add pair
      this.matchSelect.pairs.push({left, right});
      // Mark as paired
      body.querySelector(`[data-left="${left}"]`).classList.add('is-correct');
      body.querySelector(`[data-right="${right}"]`).classList.add('is-correct');
      body.querySelector(`[data-left="${left}"]`).style.pointerEvents = 'none';
      body.querySelector(`[data-right="${right}"]`).style.pointerEvents = 'none';
      this.matchSelect.left = null;
      this.matchSelect.right = null;
      this.answers[this.queue[this.index].id] = pairs.map(p => ({l: p.left, r: p.right}));
    },

    check(options = {}) {
      const q = this.queue[this.index];
      const fb = document.getElementById('feedbackArea');
      let correct = false;
      let userAns = this.answers[q.id];

      switch (q.type) {
        case 'mcq':
        case 'case':
        case 'graphic':
          if (typeof userAns === 'number') {
            correct = userAns === q.correct;
            // Mark options
            document.querySelectorAll('#opts .option').forEach((b, i) => {
              if (i === q.correct) b.classList.add('is-correct');
              if (i === userAns && userAns !== q.correct) b.classList.add('is-wrong');
            });
          }
          break;
        case 'multi':
          if (Array.isArray(userAns)) {
            const corr = [...q.correct].sort();
            const usr = [...userAns].sort();
            correct = JSON.stringify(corr) === JSON.stringify(usr);
            document.querySelectorAll('#opts .option').forEach((b, i) => {
              if (q.correct.includes(i)) b.classList.add('is-correct');
              if (userAns.includes(i) && !q.correct.includes(i)) b.classList.add('is-wrong');
            });
          }
          break;
        case 'dnd':
          const items = [...document.querySelectorAll('#dndList .dnd-item')];
          const userOrder = items.map(el => parseInt(el.dataset.idx, 10));
          correct = JSON.stringify(userOrder) === JSON.stringify(q.correctOrder);
          items.forEach((it, i) => {
            if (parseInt(it.dataset.idx, 10) === q.correctOrder[i]) it.classList.add('correct');
            else it.classList.add('wrong');
          });
          break;
        case 'matching':
          const pairs = this.answers[q.id] || [];
          if (pairs.length === q.correct.length) {
            correct = pairs.every(p => {
              const c = q.correct.find(x => x.left === p.l);
              return c && c.right === p.r;
            });
          }
          break;
        case 'hotspot':
          if (typeof userAns === 'number') {
            correct = q.hotspots[userAns].correct;
            document.querySelectorAll('.hotspot-target').forEach((t, i) => {
              if (q.hotspots[i].correct) t.classList.add('is-correct');
              if (i === userAns && !correct) t.classList.add('is-wrong');
            });
          }
          break;
        case 'pulldown':
          if (Array.isArray(userAns)) {
            correct = userAns.every((v, i) => v === q.blanks[i].correct);
          }
          break;
      }

      // Show feedback
      const title = correct ? `✅ ${I18n.t('practice.correct')}` : `❌ ${I18n.t('practice.wrong')}`;
      fb.outerHTML = `<div class="runner__feedback ${correct ? 'is-correct' : 'is-wrong'}" id="feedbackArea">
        <h4>${title}</h4>
        <p>${q.explanation[I18n.current]}</p>
      </div>`;
      // Disable check, enable next
      document.getElementById('checkBtn').disabled = true;
      document.getElementById('nextBtn').disabled = false;
      // Save
      if (options.recordStats !== false) Stats.recordAnswer(q.domain, q.type, correct);
      return correct;
    },

    next() {
      clearInterval(this.timerInterval);
      this.index++;
      if (this.index >= this.queue.length) {
        this.showResult();
      } else {
        this.renderCurrent();
      }
    },

    showResult() {
      const r = document.getElementById('practiceResult');
      r.hidden = false;
      document.getElementById('practiceRunner').hidden = true;
      // Count
      let correct = 0;
      this.queue.forEach(q => {
        // Re-evaluate (best effort)
        const a = this.answers[q.id];
        if (q.type === 'mcq' || q.type === 'case' || q.type === 'graphic') {
          if (a === q.correct) correct++;
        } else if (q.type === 'multi') {
          if (Array.isArray(a) && JSON.stringify([...a].sort()) === JSON.stringify([...q.correct].sort())) correct++;
        } else {
          // we recorded in Stats already
        }
      });
      const total = this.queue.length;
      const pct = total ? Math.round((correct / total) * 100) : 0;
      r.innerHTML = `
        <div class="result__head">
          <div class="result__score">${pct}%</div>
          <div class="result__verdict ${pct >= 70 ? 'pass' : 'fail'}">${correct} / ${total} ${I18n.current === 'es' ? 'correctas' : 'correct'}</div>
        </div>
        <div class="result__breakdown">
          <div class="bd"><b>${total}</b>${I18n.current === 'es' ? 'Preguntas respondidas' : 'Questions answered'}</div>
          <div class="bd"><b>${correct}</b>${I18n.current === 'es' ? 'Correctas' : 'Correct'}</div>
          <div class="bd"><b>+${correct * 10 + (total - correct) * 2}</b>XP ${I18n.current === 'es' ? 'ganados' : 'earned'}</div>
        </div>
        <div class="result__review">
          <h3>${I18n.t('practice.review')}</h3>
          ${this.queue.map((q, i) => {
            let ok = false, userAns = this.answers[q.id];
            if (q.type === 'mcq' || q.type === 'case' || q.type === 'graphic') ok = userAns === q.correct;
            else if (q.type === 'multi') ok = Array.isArray(userAns) && JSON.stringify([...userAns].sort()) === JSON.stringify([...q.correct].sort());
            return `<div class="review-item ${ok ? 'correct' : 'wrong'}">
              <h4>Q${i+1}: ${q.question[I18n.current]}</h4>
              <div class="review-explain">${q.explanation[I18n.current]}</div>
            </div>`;
          }).join('')}
        </div>
        <div class="runner__actions" style="margin-top:18px">
          <button class="btn" id="againBtn">${I18n.t('practice.again')}</button>
          <button class="btn btn--primary" id="backBtn">${I18n.t('practice.backToSetup')}</button>
        </div>
      `;
      r.querySelector('#againBtn').onclick = () => this.start();
      r.querySelector('#backBtn').onclick = () => this.render();
      if (pct >= 80) Stats.celebrate();
    }
  };

  global.Practice = Practice;
})(window);
