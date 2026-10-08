/* ==========================================================
   PMP Practice Lab — Storage (localStorage wrapper)
   ========================================================== */
(function (global) {
  'use strict';
  const KEY = 'pmp_practice_lab_v1';

  const defaultState = {
    settings: { theme: 'light', lang: 'es' },
    user: { xp: 0, streak: 0, lastStudyDate: null },
    progress: {
      answered: 0,
      correct: 0,
      byDomain: { people: {a:0,c:0}, process: {a:0,c:0}, business: {a:0,c:0} },
      byType:   { mcq: {a:0,c:0}, multi: {a:0,c:0}, matching: {a:0,c:0}, dnd: {a:0,c:0}, hotspot: {a:0,c:0}, pulldown: {a:0,c:0}, case: {a:0,c:0}, graphic: {a:0,c:0} },
      activityLog: {} // { 'YYYY-MM-DD': count }
    },
    history: [],     // [{ date, type, score, total, domain, questions:[ids] }]
    bookmarks: [],   // [questionId]
    examDraft: null  // saves in-progress exam state
  };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return JSON.parse(JSON.stringify(defaultState));
      const parsed = JSON.parse(raw);
      // shallow merge to ensure new fields default in
      return Object.assign(JSON.parse(JSON.stringify(defaultState)), parsed);
    } catch (e) {
      console.warn('storage load error', e);
      return JSON.parse(JSON.stringify(defaultState));
    }
  }
  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('storage save error', e);
    }
  }
  function reset() {
    localStorage.removeItem(KEY);
  }

  const Store = {
    state: load(),
    save() { save(this.state); },
    reset() { reset(); this.state = load(); },
    exportJSON() { return JSON.stringify(this.state, null, 2); },
    importJSON(text) {
      try {
        const parsed = JSON.parse(text);
        this.state = Object.assign(JSON.parse(JSON.stringify(defaultState)), parsed);
        this.save();
        return true;
      } catch (e) {
        console.warn('import failed', e);
        return false;
      }
    }
  };

  global.Store = Store;
})(window);
