/* ==========================================================
   PMP Practice Lab — UI helpers (toast, modal, navigation)
   ========================================================== */
(function (global) {
  'use strict';

  const UI = {
    toast(message, duration = 3000) {
      const t = document.getElementById('toast');
      if (!t) return;
      t.textContent = message;
      t.hidden = false;
      clearTimeout(this._toastTimeout);
      this._toastTimeout = setTimeout(() => { t.hidden = true; }, duration);
    },
    confirm(title, body) {
      return new Promise(resolve => {
        const m = document.getElementById('modal');
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalBody').textContent = body;
        m.hidden = false;
        const ok = document.getElementById('modalOk');
        const cancel = document.getElementById('modalCancel');
        const close = (v) => { m.hidden = true; ok.onclick = null; cancel.onclick = null; resolve(v); };
        ok.onclick = () => close(true);
        cancel.onclick = () => close(false);
      });
    },
    navigate(section) {
      // Hide all pages
      document.querySelectorAll('.page').forEach(p => p.hidden = (p.id !== 'page-' + section));
      // Update nav
      document.querySelectorAll('.nav-link').forEach(a => a.classList.toggle('active', a.dataset.nav === section));
      // Close mobile menu
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.remove('open');
      // Scroll top
      window.scrollTo(0, 0);
      // Run page-specific render
      const handlers = {
        theory: () => global.Theory && global.Theory.render(),
        practice: () => global.Practice && global.Practice.render(),
        exam: () => global.Simulator && global.Simulator.render(),
        python: () => global.Py && global.Py.render(),
        glossary: () => global.Gloss && global.Gloss.render(),
        stats: () => global.Stats && global.Stats.renderStatsPage()
      };
      if (handlers[section]) handlers[section]();
      // Update hash without scroll
      history.replaceState(null, '', '#' + section);
    },
    bindNav() {
      document.querySelectorAll('[data-nav]').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          this.navigate(a.dataset.nav);
        });
      });
      document.querySelectorAll('[data-go]').forEach(b => {
        b.addEventListener('click', () => this.navigate(b.dataset.go));
      });
      // Mobile menu
      const hb = document.getElementById('hamburgerBtn');
      if (hb) {
        hb.addEventListener('click', () => {
          const nav = document.getElementById('mainNav');
          if (nav) nav.classList.toggle('open');
        });
      }
    },
    bindThemeToggle() {
      const btn = document.getElementById('themeToggle');
      if (!btn) return;
      btn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme') || 'light';
        const next = cur === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        Store.state.settings.theme = next;
        Store.save();
        btn.textContent = next === 'dark' ? '☀️' : '🌙';
      });
      // Initial
      const t = Store.state.settings.theme || 'light';
      document.documentElement.setAttribute('data-theme', t);
      btn.textContent = t === 'dark' ? '☀️' : '🌙';
    },
    bindLangSwitch() {
      const sel = document.getElementById('langSwitch');
      if (!sel) return;
      sel.value = I18n.current;
      sel.addEventListener('change', () => {
        I18n.setLang(sel.value);
        this.refreshDynamicContent();
      });
    },
    refreshDynamicContent() {
      // Re-render current page
      const hash = location.hash.replace('#', '') || 'home';
      this.navigate(hash);
    },
    setHeroCounters() {
      // Update question counts
      const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
      const qd = global.QUESTION_DOMAINS || {};
      const qt = global.QUESTION_TYPES || {};
      const total = (qd.people||0) + (qd.process||0) + (qd.business||0);
      set('hlQuestions', total);
      // Python count
      const py = (global.PY_EXERCISES || []).length;
      set('hlPython', py + '+');
    }
  };

  global.UI = UI;
})(window);
