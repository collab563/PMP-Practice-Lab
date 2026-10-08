/* ==========================================================
   PMP Practice Lab — Stats (XP, streak, charts)
   ========================================================== */
(function (global) {
  'use strict';

  const Stats = {
    // Add XP and update streak
    addXP(amount) {
      Store.state.user.xp += amount;
      Store.save();
      this.updateHeader();
    },
    // Mark today as activity day
    markTodayActivity() {
      const today = new Date().toISOString().slice(0, 10);
      const log = Store.state.progress.activityLog || {};
      log[today] = (log[today] || 0) + 1;
      Store.state.progress.activityLog = log;
      // Update streak
      this.updateStreak();
      Store.save();
    },
    updateStreak() {
      const log = Store.state.progress.activityLog || {};
      const today = new Date();
      today.setHours(0,0,0,0);
      // Get all days sorted desc
      const days = Object.keys(log).sort().reverse();
      if (days.length === 0) { Store.state.user.streak = 0; return; }
      // Check if today or yesterday is the latest
      const lastDay = new Date(days[0]);
      lastDay.setHours(0,0,0,0);
      const diffDays = Math.round((today - lastDay) / 86400000);
      if (diffDays > 1) {
        Store.state.user.streak = 0;
        return;
      }
      // Count consecutive days
      let streak = 1;
      for (let i = 1; i < days.length; i++) {
        const d1 = new Date(days[i-1]); d1.setHours(0,0,0,0);
        const d2 = new Date(days[i]); d2.setHours(0,0,0,0);
        const diff = Math.round((d1 - d2) / 86400000);
        if (diff === 1) streak++;
        else break;
      }
      Store.state.user.streak = streak;
    },
    recordAnswer(domain, type, correct) {
      const p = Store.state.progress;
      p.answered = (p.answered || 0) + 1;
      if (correct) p.correct = (p.correct || 0) + 1;
      if (!p.byDomain[domain]) p.byDomain[domain] = {a:0,c:0};
      p.byDomain[domain].a += 1;
      if (correct) p.byDomain[domain].c += 1;
      if (!p.byType[type]) p.byType[type] = {a:0,c:0};
      p.byType[type].a += 1;
      if (correct) p.byType[type].c += 1;
      // XP
      const xpGain = correct ? 10 : 2;
      this.addXP(xpGain);
      this.markTodayActivity();
      Store.save();
    },
    updateHeader() {
      const xp = Store.state.user.xp || 0;
      const streak = Store.state.user.streak || 0;
      const s = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      s('statStreak', streak);
      s('statXP', xp);
    },
    renderStatsPage() {
      const p = Store.state.progress;
      const u = Store.state.user;
      // Big cards
      const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      set('bigXP', u.xp || 0);
      set('bigStreak', u.streak || 0);
      set('bigAnswered', p.answered || 0);
      const acc = p.answered ? Math.round((p.correct / p.answered) * 100) : 0;
      set('bigAccuracy', acc + '%');

      // Charts
      this.renderDomainChart();
      this.renderTypeChart();
      this.renderCalendar();
    },
    renderDomainChart() {
      const p = Store.state.progress;
      const ctx = document.getElementById('chartByDomain');
      if (!ctx) return;
      const domains = ['people', 'process', 'business'];
      const labels = domains.map(d => I18n.t('common.' + d));
      const data = domains.map(d => {
        const x = p.byDomain[d] || {a:0,c:0};
        return x.a ? Math.round((x.c / x.a) * 100) : 0;
      });
      const attempted = domains.map(d => (p.byDomain[d] || {a:0}).a);
      const datasetLabels = [
        I18n.t('common.correct') + ' (%)',
        I18n.t('common.wrong') + (I18n.current === 'es' ? ' (intentos)' : ' (attempts)')
      ];
      if (global.Chart && !ctx._chart) {
        ctx._chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              { label: datasetLabels[0], data, backgroundColor: '#2E86AB' },
              { label: datasetLabels[1], data: attempted.map((a,i)=>a-data[i]), backgroundColor: '#BCCCDC' }
            ]
          },
          options: { responsive: true, scales: { y: { beginAtZero: true, max: 100 } } }
        });
      } else if (global.Chart) {
        ctx._chart.data.labels = labels;
        ctx._chart.data.datasets[0].label = datasetLabels[0];
        ctx._chart.data.datasets[1].label = datasetLabels[1];
        ctx._chart.data.datasets[0].data = data;
        ctx._chart.data.datasets[1].data = attempted.map((a,i)=>a-data[i]);
        ctx._chart.update();
      }
    },
    renderTypeChart() {
      const p = Store.state.progress;
      const ctx = document.getElementById('chartByType');
      if (!ctx) return;
      const types = Object.keys(p.byType);
      const labels = types.map(type => I18n.t('questionType.' + type));
      const correct = types.map(t => p.byType[t].c);
      const wrong = types.map(t => p.byType[t].a - p.byType[t].c);
      const datasetLabels = [I18n.t('common.correct'), I18n.t('common.wrong')];
      if (global.Chart && !ctx._chart) {
        ctx._chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              { label: datasetLabels[0], data: correct, backgroundColor: '#1B9E77' },
              { label: datasetLabels[1], data: wrong, backgroundColor: '#D7263D' }
            ]
          },
          options: { responsive: true, scales: { y: { beginAtZero: true } } }
        });
      } else if (global.Chart) {
        ctx._chart.data.labels = labels;
        ctx._chart.data.datasets[0].label = datasetLabels[0];
        ctx._chart.data.datasets[1].label = datasetLabels[1];
        ctx._chart.data.datasets[0].data = correct;
        ctx._chart.data.datasets[1].data = wrong;
        ctx._chart.update();
      }
    },
    renderCalendar() {
      const cal = document.getElementById('activityCalendar');
      if (!cal) return;
      cal.innerHTML = '';
      const log = Store.state.progress.activityLog || {};
      // Last 26 weeks (182 days)
      const today = new Date(); today.setHours(0,0,0,0);
      for (let i = 181; i >= 0; i--) {
        const d = new Date(today); d.setDate(d.getDate() - i);
        const k = d.toISOString().slice(0, 10);
        const c = log[k] || 0;
        const lvl = c === 0 ? 0 : c < 5 ? 1 : c < 15 ? 2 : c < 30 ? 3 : 4;
        const div = document.createElement('div');
        div.className = 'activity-day';
        div.dataset.level = lvl;
        div.title = `${k}: ${c} ${I18n.current === 'es' ? 'actividades' : 'activities'}`;
        cal.appendChild(div);
      }
    },
    celebrate() {
      const c = document.createElement('div'); c.className = 'celebrate';
      const colors = ['#2E86AB', '#4FB3D9', '#F0B237', '#1B9E77', '#D7263D'];
      for (let i = 0; i < 30; i++) {
        const d = document.createElement('div'); d.className = 'conf';
        d.style.left = Math.random() * 100 + '%';
        d.style.background = colors[i % colors.length];
        d.style.animationDelay = (Math.random() * 0.3) + 's';
        c.appendChild(d);
      }
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 2000);
    }
  };

  global.Stats = Stats;
})(window);
