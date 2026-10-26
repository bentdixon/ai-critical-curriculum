// Shared behaviour for every module page:
// one step at a time, answers saved in this browser only, and a summary at the end.
(function () {
  const moduleId = document.body.dataset.module || 'site';
  const storeKey = 'acc:' + moduleId;

  function load() {
    try { return JSON.parse(localStorage.getItem(storeKey)) || {}; } catch (e) { return {}; }
  }
  let state = load();
  function save() {
    try { localStorage.setItem(storeKey, JSON.stringify(state)); } catch (e) { /* storage blocked: page still works */ }
  }

  // Public helpers for module scripts
  window.ACC = {
    get: (k, d) => (k in state ? state[k] : d),
    set: (k, v) => { state[k] = v; save(); },
    extraSummary: [], // functions returning [[label, text], ...]
  };

  // ---------- Saved fields ----------
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
      restoreField(el);
      if (el.type === 'range') showRange(el);
      const handler = () => {
        const v = fieldValue(el);
        if (v !== undefined) { state[el.dataset.key] = v; save(); }
        if (el.type === 'range') { state[el.dataset.key + ':touched'] = true; save(); showRange(el); }
        document.dispatchEvent(new CustomEvent('acc:change', { detail: { key: el.dataset.key } }));
      };
      el.addEventListener('input', handler);
      el.addEventListener('change', handler);
    });
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

  // ---------- Steps ----------
  const steps = Array.from(document.querySelectorAll('.step'));
  const prog = document.querySelector('.progress');
  const bar = document.querySelector('.bar span');
  const back = document.getElementById('back');
  const next = document.getElementById('next');
  let cur = Math.min(window.ACC.get('_step', 0), steps.length - 1);

  function show(i, scroll) {
    cur = Math.max(0, Math.min(i, steps.length - 1));
    steps.forEach((s, j) => s.classList.toggle('active', j === cur));
    if (prog) prog.textContent = 'Step ' + (cur + 1) + ' of ' + steps.length + ': ' + (steps[cur].dataset.title || '');
    if (bar) bar.style.width = ((cur + 1) / steps.length * 100) + '%';
    if (back) back.disabled = cur === 0;
    if (next) next.textContent = cur === steps.length - 1 ? 'Back to all modules' : 'Next';
    window.ACC.set('_step', cur);
    steps[cur].dispatchEvent(new CustomEvent('acc:enter'));
    if (steps[cur].classList.contains('summary-step')) buildSummary();
    if (scroll) window.scrollTo({ top: 0 });
  }
  if (back) back.addEventListener('click', () => show(cur - 1, true));
  if (next) next.addEventListener('click', () => {
    if (cur === steps.length - 1) { window.location.href = '../index.html'; return; }
    show(cur + 1, true);
  });

  // ---------- Summary ----------
  function summaryPairs() {
    const pairs = [];
    const seen = new Set();
    document.querySelectorAll('[data-summary]').forEach(el => {
      const k = el.dataset.key;
      if (el.type === 'radio') {
        if (seen.has(k)) return; seen.add(k);
      }
      let v = state[k];
      if (el.type === 'range' && v === undefined) v = el.value;
      if (v === undefined || v === '' || v === false) return;
      if (v === true) v = 'Yes';
      pairs.push([el.dataset.summary, String(v)]);
    });
    window.ACC.extraSummary.forEach(fn => fn().forEach(p => pairs.push(p)));
    return pairs;
  }
  function buildSummary() {
    const dl = document.getElementById('summary');
    if (!dl) return;
    dl.innerHTML = '';
    const pairs = summaryPairs();
    if (!pairs.length) { dl.innerHTML = '<p class="muted">Nothing recorded yet. Go back and fill in the steps.</p>'; return; }
    pairs.forEach(([k, v]) => {
      const dt = document.createElement('dt'); dt.textContent = k;
      const dd = document.createElement('dd'); dd.textContent = v;
      dl.append(dt, dd);
    });
  }
  window.ACC.buildSummary = buildSummary;

  document.addEventListener('click', e => {
    if (e.target.id === 'print') window.print();
    if (e.target.id === 'download') {
      const title = document.querySelector('h1').innerText;
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
      state = {}; save();
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
    if (steps.length) show(cur, false);
  });
})();
