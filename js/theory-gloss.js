/* ==========================================================
   PMP Practice Lab — Theory & Glossary renderers
   ========================================================== */
(function (global) {
  'use strict';

  // ===== Theory =====
  const Theory = {
    render() {
      const nav = document.getElementById('theoryNav');
      const content = document.getElementById('theoryContent');
      if (!nav || !content) return;
      // Sidebar
      nav.innerHTML = THEORY.map(s =>
        `<a href="#${s.id}">${s.title[I18n.current]}</a>` +
        s.subsections.map(sub => `<a href="#${sub.id}" style="padding-left:20px;font-size:.85em">· ${sub.title[I18n.current]}</a>`).join('')
      ).join('');
      // Smooth scroll
      nav.querySelectorAll('a').forEach(a => {
        a.onclick = (e) => {
          e.preventDefault();
          nav.querySelectorAll('a').forEach(x => x.classList.remove('is-active'));
          a.classList.add('is-active');
          const t = document.getElementById(a.getAttribute('href').slice(1));
          if (t) t.scrollIntoView({ behavior: 'smooth' });
        };
      });
      // Content
      content.innerHTML = THEORY.map(s => `
        <section id="${s.id}">
          <h2>${s.title[I18n.current]}</h2>
          ${s.subsections.map(sub => `
            <div id="${sub.id}">
              <h3>${sub.title[I18n.current]}</h3>
              ${sub.body[I18n.current]}
            </div>
          `).join('')}
        </section>
      `).join('');
      // Search filter
      const search = document.getElementById('theorySearch');
      if (search && !search._wired) {
        search._wired = true;
        search.addEventListener('input', () => {
          const q = search.value.toLowerCase();
          content.querySelectorAll('h3, h2, p, li').forEach(el => {
            const text = el.textContent.toLowerCase();
            el.style.display = (q === '' || text.includes(q)) ? '' : 'none';
          });
        });
      }
    }
  };

  // ===== Glossary =====
  const Gloss = {
    filter: 'all',
    render() {
      const list = document.getElementById('glossList');
      if (!list) return;
      const search = (document.getElementById('glossSearch')?.value || '').toLowerCase();
      const filtered = GLOSSARY.filter(t => {
        if (this.filter !== 'all' && t.category !== this.filter) return false;
        if (search === '') return true;
        return t.term.es.toLowerCase().includes(search)
          || t.term.en.toLowerCase().includes(search)
          || t.def.es.toLowerCase().includes(search)
          || t.def.en.toLowerCase().includes(search);
      });
      list.innerHTML = filtered.map(t => `
        <div class="gloss-item">
          <div class="gloss-item__term">${t.term[I18n.current]} <small>${t.term[I18n.current === 'es' ? 'en' : 'es']}</small></div>
          <div class="gloss-item__def">${t.def[I18n.current]}</div>
          <small>${I18n.t('glossary.' + t.category) || t.category}</small>
        </div>
      `).join('') || `<p style="color:var(--fg-mute)">${I18n.current === 'es' ? 'Sin resultados.' : 'No results.'}</p>`;
      // Wire up
      const s = document.getElementById('glossSearch');
      if (s && !s._wired) {
        s._wired = true;
        s.addEventListener('input', () => this.render());
      }
      const f = document.getElementById('glossFilter');
      if (f && !f._wired) {
        f._wired = true;
        f.value = this.filter;
        f.addEventListener('change', () => { this.filter = f.value; this.render(); });
      }
    }
  };

  global.Theory = Theory;
  global.Gloss = Gloss;
})(window);
