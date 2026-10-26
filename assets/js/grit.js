(function () {
  const ANSWERS = { B: 12, C: 1 / 11, D: 1 / 3 };
  const SHOWN = { B: '12', C: '1/11', D: '1/3' };

  function parse(s) {
    s = String(s || '').trim().replace(/\s+/g, '');
    if (!s) return NaN;
    const m = s.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
    if (m) return parseFloat(m[1]) / parseFloat(m[2]);
    if (/%$/.test(s)) return parseFloat(s) / 100;
    return parseFloat(s);
  }
  function correct(p, v) { return !isNaN(v) && Math.abs(v - ANSWERS[p]) < 0.006; }

  document.querySelectorAll('.answer').forEach(box => {
    const p = box.dataset.problem;
    const input = box.querySelector('input');
    const fb = box.querySelector('.feedback');
    function check(record) {
      const v = parse(input.value);
      if (isNaN(v)) { fb.textContent = 'Enter a number or fraction.'; fb.className = 'feedback no'; return; }
      const ok = correct(p, v);
      fb.textContent = ok ? 'Correct.' : 'Not quite. Try again or show the worked answer.';
      fb.className = 'feedback ' + (ok ? 'ok' : 'no');
      if (record) {
        if (ACC.get('first' + p) === undefined) ACC.set('first' + p, ok);
        ACC.set('ok' + p, ok);
      }
    }
    box.querySelector('.check').addEventListener('click', () => check(true));
    document.addEventListener('DOMContentLoaded', () => {
      if (ACC.get('ok' + p) !== undefined && input.value) check(false);
    });
  });

  document.querySelectorAll('.show').forEach(b => {
    const sol = document.getElementById(b.dataset.sol);
    const key = 'shown:' + b.dataset.sol;
    function open() { sol.classList.remove('hidden'); b.classList.add('hidden'); }
    b.addEventListener('click', () => { ACC.set(key, true); open(); });
    if (ACC.get(key, false)) open();
  });

  // Timer and staged hints for Problem C
  const HINTS = [
    'Picture all 36 outcomes as a 6 by 6 grid.',
    'Count the outcomes with no 6 first.',
    'Of the outcomes with a 6, how many show two 6s?'
  ];
  if (document.getElementById('timer')) {
  const timerEl = document.getElementById('timer');
  const timerBtn = document.getElementById('timerBtn');
  const hintBtn = document.getElementById('hintBtn');
  const hintNote = document.getElementById('hintNote');
  const hintsEl = document.getElementById('hints');
  let iv = null;
  function fmt(s) { return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
  function unlock() {
    hintBtn.disabled = ACC.get('hintsShown', 0) >= HINTS.length;
    hintNote.textContent = 'Hints are now available, one at a time.';
    timerEl.textContent = '0:00';
    timerBtn.classList.add('hidden');
  }
  function renderHints() {
    const n = ACC.get('hintsShown', 0);
    hintsEl.innerHTML = HINTS.slice(0, n).map(h => '<li>' + h + '</li>').join('');
    hintsEl.classList.toggle('hidden', n === 0);
    if (n >= HINTS.length) hintBtn.disabled = true;
  }
  function tick() {
    const left = Math.max(0, 300 - Math.floor((Date.now() - ACC.get('timerStart')) / 1000));
    timerEl.textContent = fmt(left);
    if (left === 0) { clearInterval(iv); unlock(); }
  }
  timerBtn.addEventListener('click', () => {
    ACC.set('timerStart', Date.now());
    timerBtn.disabled = true;
    iv = setInterval(tick, 500); tick();
  });
  hintBtn.addEventListener('click', () => { ACC.set('hintsShown', ACC.get('hintsShown', 0) + 1); renderHints(); });
  if (ACC.get('timerStart')) { timerBtn.disabled = true; iv = setInterval(tick, 500); tick(); }
  renderHints();

  }

  // Compare step
  function mark(p) {
    const f = ACC.get('first' + p);
    return f === undefined ? 'Not checked' : f ? 'Right first time' : (ACC.get('ok' + p) ? 'Right after another try' : 'Not solved');
  }
  const scoreTable = document.getElementById('scoreTable');
  if (scoreTable) {
    scoreTable.innerHTML =
      '<table><thead><tr><th>Round</th><th>Follow-up</th><th>Result</th><th>Hints used</th></tr></thead><tbody>' +
      '<tr><td>1. AI first</td><td>B (round table)</td><td>' + mark('B') + '</td><td>Not applicable</td></tr>' +
      '<tr><td>2. Struggle first</td><td>D (two children)</td><td>' + mark('D') + '</td><td>' + ACC.get('hintsShown', 0) + ' on Problem C</td></tr>' +
      '</tbody></table>';
  }
  const reveal = document.getElementById('reveal');
  if (reveal) {
    reveal.addEventListener('click', () => {
      document.getElementById('research').classList.remove('hidden'); ACC.set('revealed', true);
    });
    if (ACC.get('revealed', false)) document.getElementById('research').classList.remove('hidden');
  }

  ACC.extraSummary.push(() => [
    ['Round 1 (AI first), Problem B', mark('B')],
    ['Round 2 (struggle first), Problem D', mark('D') + '; ' + ACC.get('hintsShown', 0) + ' hints used on Problem C']
  ]);
})();
