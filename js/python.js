/* ==========================================================
   PMP Practice Lab — Python exercises runner
   Uses Pyodide to run real Python in the browser
   ========================================================== */
(function (global) {
  'use strict';

  let pyodideInstance = null;
  let pyodideLoading = null;

  async function loadPyodide() {
    if (pyodideInstance) return pyodideInstance;
    if (pyodideLoading) return pyodideLoading;
    const pyodideURL = new URL('js/pyodide/pyodide.js', document.baseURI);
    const indexURL = new URL('js/pyodide/', document.baseURI).href;
    pyodideLoading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = pyodideURL.href;
      script.onload = async () => {
        try {
          pyodideInstance = await global.loadPyodide({ indexURL });
          resolve(pyodideInstance);
        } catch (error) {
          pyodideLoading = null;
          reject(error);
        }
      };
      script.onerror = () => {
        pyodideLoading = null;
        reject(new Error(`No se pudo cargar Pyodide desde ${pyodideURL.href}`));
      };
      document.head.appendChild(script);
    });
    return pyodideLoading;
  }

  const Py = {
    async render() {
      const list = document.getElementById('pyList');
      if (!list) return;
      list.innerHTML = PY_EXERCISES.map(ex => {
        const diff = ex.difficulty;
        return `
          <div class="py-card" data-id="${ex.id}">
            <div class="py-card__head">
              <div class="py-card__title">${ex.title[I18n.current]}</div>
              <div class="py-card__badge ${diff}">${I18n.t('common.' + diff)}</div>
            </div>
            <div class="py-card__desc">${ex.description[I18n.current]}</div>
            <div class="py-card__footer">
              <button class="btn btn--primary" data-open="${ex.id}">▶ ${I18n.t('python.run')}</button>
            </div>
          </div>
        `;
      }).join('');
      // Wire open
      list.querySelectorAll('[data-open]').forEach(b => {
        b.addEventListener('click', () => this.open(b.dataset.open));
      });
    },

    open(id) {
      const ex = PY_EXERCISES.find(x => x.id === id);
      if (!ex) return;
      const lang = I18n.current;
      const modal = document.createElement('div');
      modal.className = 'py-modal';
      modal.innerHTML = `
        <div class="py-modal__box">
          <h2>${ex.title[lang]}</h2>
          <p>${ex.description[lang]}</p>
          ${ex.hint ? `<div class="py-hint">${I18n.t('python.hint')}: ${ex.hint[lang]}</div>` : ''}
          <h3 style="margin-top:14px">📝 ${lang === 'es' ? 'Tu código' : 'Your code'}</h3>
          <textarea class="py-input" id="pyCode">${ex.starter.replace(/</g, '&lt;')}</textarea>
          <div class="py-status pending" id="pyStatus">⏳ ${I18n.t('python.loading')}...</div>
          <pre class="py-console" id="pyConsole">${lang === 'es' ? 'La salida aparecerá aquí' : 'Output will appear here'}</pre>
          <div class="py-card__footer" style="margin-top:12px">
            <button class="btn py-run-btn" id="pyRun">▶ ${I18n.t('python.run')}</button>
            <button class="btn" id="pyReset">↺ ${I18n.t('python.reset')}</button>
            <button class="btn" id="pySolution">💡 ${I18n.t('python.solution')}</button>
            <button class="btn" id="pyClose" style="margin-left:auto">✕ ${lang === 'es' ? 'Cerrar' : 'Close'}</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('#pyClose').onclick = () => modal.remove();
      modal.querySelector('#pyReset').onclick = () => {
        modal.querySelector('#pyCode').value = ex.starter;
        modal.querySelector('#pyConsole').textContent = lang === 'es' ? 'La salida aparecerá aquí' : 'Output will appear here';
        modal.querySelector('#pyStatus').className = 'py-status pending';
        modal.querySelector('#pyStatus').textContent = '↺ Reset';
      };
      modal.querySelector('#pySolution').onclick = () => {
        modal.querySelector('#pyCode').value = ex.solution;
      };
      modal.querySelector('#pyRun').onclick = () => this.run(ex, modal);
      // Start loading Pyodide
      this._initPyodide(modal);
    },

    async _initPyodide(modal) {
      const status = modal.querySelector('#pyStatus');
      try {
        status.textContent = '⏳ ' + I18n.t('python.loading');
        await loadPyodide();
        status.className = 'py-status ok';
        status.textContent = '✅ ' + I18n.t('python.ready');
      } catch (e) {
        status.className = 'py-status err';
        status.textContent = '❌ Error cargando Python: ' + e.message;
      }
    },

    async run(ex, modal) {
      const code = modal.querySelector('#pyCode').value;
      const status = modal.querySelector('#pyStatus');
      const consoleEl = modal.querySelector('#pyConsole');
      if (!pyodideInstance) {
        status.className = 'py-status err';
        status.textContent = '⏳ ' + I18n.t('python.loading') + '... Espera un momento.';
        return;
      }
      status.className = 'py-status pending';
      status.textContent = '▶ Ejecutando...';
      let out = '';
      pyodideInstance.setStdout({ batched: (s) => { out += s + '\n'; } });
      pyodideInstance.setStderr({ batched: (s) => { out += '⚠ ' + s + '\n'; } });
      let error = null;
      try {
        await pyodideInstance.runPythonAsync(code);
      } catch (e) {
        error = e;
      }
      consoleEl.textContent = out || (error ? error.message : '(sin salida)');
      if (error) {
        status.className = 'py-status err';
        status.textContent = '❌ ' + I18n.t('python.error');
        return;
      }
      // Validate
      try {
        const result = await this.validate(ex, pyodideInstance, out);
        if (result.ok) {
          status.className = 'py-status ok';
          status.textContent = '✅ ' + I18n.t('python.pass');
          Stats.addXP(20);
          Stats.markTodayActivity();
        } else {
          status.className = 'py-status err';
          status.textContent = '❌ ' + I18n.t('python.fail') + (result.reason ? ` (${result.reason})` : '');
        }
      } catch (e) {
        status.className = 'py-status err';
        status.textContent = '❌ Validation error: ' + e.message;
      }
    },

    async validate(ex, py, output) {
      const v = ex.validation;
      if (v.type === 'variables') {
        for (const [name, spec] of Object.entries(v.checks)) {
          let val;
          try {
            val = await py.globals.get(name);
            if (val && val.toJs) val = val.toJs();
          } catch (e) {
            return { ok: false, reason: `Variable ${name} no definida` };
          }
          if (spec.type === 'string') {
            if (typeof val !== 'string' || val.toUpperCase() !== spec.value.toUpperCase()) {
              return { ok: false, reason: `Esperado ${spec.value}, obtenido ${val}` };
            }
          } else {
            const numVal = parseFloat(val);
            if (isNaN(numVal) || Math.abs(numVal - spec.value) > spec.tolerance) {
              return { ok: false, reason: `Esperado ~${spec.value} (±${spec.tolerance}), obtenido ${val}` };
            }
          }
        }
        return { ok: true };
      } else if (v.type === 'output') {
        for (const s of v.contains || []) {
          if (!output.includes(s)) return { ok: false, reason: `Falta "${s}" en salida` };
        }
        for (const nr of v.numbersInRange || []) {
          const re = new RegExp(`${nr.label}[^\\d]*([\\d.]+)`);
          const m = output.match(re);
          if (!m) return { ok: false, reason: `No se encontró ${nr.label}` };
          const v = parseFloat(m[1]);
          if (v < nr.min || v > nr.max) {
            return { ok: false, reason: `${nr.label}=${v} fuera de rango [${nr.min}, ${nr.max}]` };
          }
        }
        if (v.firstItems) {
          for (let i = 0; i < v.firstItems.length; i++) {
            if (!output.includes(v.firstItems[i])) {
              return { ok: false, reason: `Falta ${v.firstItems[i]}` };
            }
          }
        }
        return { ok: true };
      }
      return { ok: true };
    }
  };

  global.Py = Py;
})(window);
