/* ==========================================================
   PMP Practice Lab — Main app initializer
   ========================================================== */
(function (global) {
  'use strict';

  // Apply I18n on dynamic content
  global.applyI18n = function() {
    I18n.applyDOM();
    UI.setHeroCounters();
  };

  // Initialize on load
  document.addEventListener('DOMContentLoaded', () => {
    // Load saved lang
    const lang = Store.state.settings.lang || 'es';
    I18n.current = lang;
    document.documentElement.setAttribute('lang', lang);
    // Apply theme
    const theme = Store.state.settings.theme || 'light';
    document.documentElement.setAttribute('data-theme', theme);
    // Apply I18n to static DOM
    I18n.applyDOM();
    // Update header stats
    Stats.updateHeader();
    // Set hero counters
    UI.setHeroCounters();
    // Bind nav
    UI.bindNav();
    // Bind theme toggle
    UI.bindThemeToggle();
    // Bind lang switch
    UI.bindLangSwitch();
    // Render the initial page based on hash
    const hash = location.hash.replace('#', '') || 'home';
    UI.navigate(hash);
    // Setup stat actions
    const exportBtn = document.getElementById('exportDataBtn');
    if (exportBtn) {
      exportBtn.onclick = () => {
        const blob = new Blob([Store.exportJSON()], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pmp-practice-lab-${new Date().toISOString().slice(0,10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        UI.toast('📤 Progreso exportado');
      };
    }
    const importInput = document.getElementById('importDataInput');
    if (importInput) {
      importInput.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const ok = Store.importJSON(ev.target.result);
          if (ok) { UI.toast('📥 Progreso importado'); location.reload(); }
          else UI.toast('❌ Archivo inválido');
        };
        reader.readAsText(file);
      };
    }
    const resetBtn = document.getElementById('resetDataBtn');
    if (resetBtn) {
      resetBtn.onclick = async () => {
        const ok = await UI.confirm(I18n.t('stats.reset'), I18n.t('stats.confirmReset'));
        if (ok) {
          Store.reset();
          location.reload();
        }
      };
    }
    // Welcome
    console.log('%c🎯 PMP Practice Lab', 'font-size:18px;font-weight:bold;color:#2E86AB');
    console.log('%cBilingual ES/EN platform for the PMI 2026 exam.', 'color:#627D98');
    console.log('Total questions loaded:', QUESTIONS.length, '| Python exercises:', (PY_EXERCISES || []).length);
  });
})(window);
