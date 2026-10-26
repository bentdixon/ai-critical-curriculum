(function () {
  // Turns: rows added on demand, up to ten
  const turnsEl = document.getElementById('turns');
  const addBtn = document.getElementById('addTurn');
  function addRow(n) {
    const div = document.createElement('div');
    div.className = 'turn';
    div.innerHTML =
      '<div class="row"><span class="turn-n">Turn ' + n + '</span>' +
      '<select data-key="t' + n + 'r" aria-label="LLM response at turn ' + n + '">' +
      '<option value="">The LLM\'s response</option><option>Held firm</option><option>Partly gave in</option><option>Agreed</option></select></div>' +
      '<input type="text" data-key="t' + n + 's" placeholder="What you said" aria-label="What you said at turn ' + n + '">';
    turnsEl.appendChild(div);
    ACC.bindFields(div);
  }
  function render() {
    turnsEl.innerHTML = '';
    const n = ACC.get('turnCount', 3);
    for (let i = 1; i <= n; i++) addRow(i);
    addBtn.disabled = n >= 10;
  }
  if (turnsEl) {
    addBtn.addEventListener('click', () => { ACC.set('turnCount', Math.min(10, ACC.get('turnCount', 3) + 1)); render(); });
    render();
  }

  // Sources: three blocks
  const srcEl = document.getElementById('sources');
  for (let i = 1; srcEl && i <= 3; i++) {
    const d = document.createElement('div');
    d.className = 'ruled';
    d.innerHTML =
      '<h3>Source ' + i + '</h3>' +
      '<label>Reference given by the LLM</label><textarea data-key="s' + i + 'ref"></textarea>' +
      '<label>Does it exist?</label><select data-key="s' + i + 'exists"><option value="">Choose</option><option>Yes</option><option>No</option><option>Not sure</option></select>' +
      '<label>Does it say what the LLM claims?</label><select data-key="s' + i + 'says"><option value="">Choose</option><option>Yes</option><option>No</option><option>Partly</option><option>Not applicable</option></select>' +
      '<label>Your evidence: what you searched and found</label><textarea data-key="s' + i + 'ev"></textarea>';
    srcEl.appendChild(d);
  }
  if (srcEl) ACC.bindFields(srcEl);

  ACC.extraSummary.push(() => {
    const out = [];
    const lines = [];
    for (let i = 1; i <= ACC.get('turnCount', 3); i++) {
      const r = ACC.get('t' + i + 'r', ''), s = ACC.get('t' + i + 's', '');
      if (r || s) lines.push('Turn ' + i + ': ' + (s || '(no note)') + (r ? ' — ' + r : ''));
    }
    if (lines.length) out.push(['Turns', lines.join('\n'), 3999]);
    for (let i = 1; i <= 3; i++) {
      const ref = ACC.get('s' + i + 'ref', '');
      if (!ref) continue;
      out.push(['Source ' + i, ref +
        '\nExists: ' + (ACC.get('s' + i + 'exists', '') || '?') +
        '\nSays what the LLM claims: ' + (ACC.get('s' + i + 'says', '') || '?') +
        (ACC.get('s' + i + 'ev', '') ? '\nEvidence: ' + ACC.get('s' + i + 'ev', '') : ''), 5000 + i]);
    }
    return out;
  });

  // Research reveal, with the learner's own count
  const reveal = document.getElementById('reveal');
  if (reveal) reveal.addEventListener('click', () => {
    const g = parseInt(ACC.get('gaveIn', ''), 10);
    document.getElementById('yourResult').textContent = isNaN(g)
      ? 'Your LLM did not give in. That is less common than the research suggests.'
      : 'Your LLM gave in at turn ' + g + '.';
    document.getElementById('research').classList.remove('hidden');
    ACC.set('revealed', true);
  });
  if (reveal && ACC.get('revealed', false)) reveal.click();
})();
