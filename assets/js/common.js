// Shared behaviour for module pages: answers saved in this browser only,
// gathered on each module's "Your work" page.
(function () {
  const moduleId = window.ACC_MODULE || 'site';
  const pageOrder = window.ACC_ORDER || 0;
  const storeKey = 'acc:' + moduleId;

  function load() {
    try { return JSON.parse(localStorage.getItem(storeKey)) || {}; } catch (e) { return {}; }
  }
  let state = load();
  if (!state._meta) state._meta = {};
  function save() {
    try { localStorage.setItem(storeKey, JSON.stringify(state)); } catch (e) { /* storage blocked: page still works */ }
  }

  window.ACC = {
    get: (k, d) => (k in state ? state[k] : d),
    set: (k, v) => { state[k] = v; save(); },
    extraSummary: [], // functions returning [[label, text], ...]
  };

  // ---------- Saved fields ----------
  let fieldIndex = 0;
  function fieldValue(el) {
    if (el.type === 'checkbox') return el.checked;
    if (el.type === 'radio') return el.checked ? el.value : undefined;
    return el.value;
  }
  function restoreField(el) {
    const k = el.dataset.key;
    if (!(k in state)) return;
    if (el.type === 'checkbox') el.checked = !!state[k];
    else if (el.type === 'radio') el.checked = state[k] === el.value;
    else el.value = state[k];
  }
  function showRange(el) {
    document.querySelectorAll('.rating-val[data-for="' + el.dataset.key + '"]').forEach(s => { s.textContent = el.value; });
  }
  function bindFields(root) {
    root.querySelectorAll('[data-key]').forEach(el => {
      if (el.dataset.bound) return;
      el.dataset.bound = '1';
      const k = el.dataset.key;
      // Remember the label so the summary page can list it in page order
      if (el.dataset.summary) state._meta[k] = { l: el.dataset.summary, o: pageOrder * 1000 + (fieldIndex++) };
      restoreField(el);
      if (el.type === 'range') {
        if (!(k in state)) state[k] = el.value; // a rating left at the default still counts
        showRange(el);
      }
      const handler = () => {
        const v = fieldValue(el);
        if (v !== undefined) { state[k] = v; save(); }
        if (el.type === 'range') showRange(el);
        document.dispatchEvent(new CustomEvent('acc:change', { detail: { key: k } }));
      };
      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
    });
    save();
  }
  window.ACC.bindFields = bindFields;

  // ---------- Copy buttons ----------
  document.addEventListener('click', e => {
    const b = e.target.closest('.copy');
    if (!b) return;
    const text = b.closest('.prompt').querySelector('.text').innerText.trim();
    const done = () => { const t = b.textContent; b.textContent = 'Copied'; setTimeout(() => { b.textContent = t; }, 1200); };
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, () => {});
  });

  // ---------- Summary ----------
  function summaryPairs() {
    const pairs = Object.keys(state._meta)
      .map(k => ({ k, l: state._meta[k].l, o: state._meta[k].o, v: state[k] }))
      .filter(x => x.v !== undefined && x.v !== '' && x.v !== false)
      .map(x => [x.l, x.v === true ? 'Yes' : String(x.v), x.o]);
    // Module scripts can add items, with an optional sort position
    window.ACC.extraSummary.forEach(fn => fn().forEach(p => pairs.push([p[0], p[1], p[2] === undefined ? Infinity : p[2]])));
    return pairs.sort((a, b) => a[2] - b[2]).map(p => [p[0], p[1]]);
  }
  function buildSummary() {
    const dl = document.getElementById('summary');
    if (!dl) return;
    dl.innerHTML = '';
    const pairs = summaryPairs();
    if (!pairs.length) { dl.innerHTML = '<p>Nothing recorded yet. Go back and fill in the pages.</p>'; return; }
    pairs.forEach(([k, v]) => {
      const dt = document.createElement('dt'); dt.textContent = k;
      const dd = document.createElement('dd'); dd.textContent = v;
      dl.append(dt, dd);
    });
  }

  document.addEventListener('click', e => {
    if (e.target.id === 'print') window.print();
    if (e.target.id === 'download') {
      const title = document.title;
      const lines = [title, ''];
      summaryPairs().forEach(([k, v]) => lines.push(k + ':', v, ''));
      const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = moduleId + '-my-work.txt';
      document.body.appendChild(a); a.click(); a.remove();
    }
    if (e.target.id === 'clear') {
      if (!confirm('Clear all your answers for this module?')) return;
      state = { _meta: {} };
      try { localStorage.removeItem(storeKey); } catch (err) {}
      window.location.reload();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    bindFields(document);
    if (window.katex) {
      document.querySelectorAll('[data-tex]').forEach(el => {
        try { katex.render(el.dataset.tex, el, { displayMode: el.classList.contains('m'), throwOnError: false }); } catch (e) {}
      });
    }
    buildSummary();
  });
})();
