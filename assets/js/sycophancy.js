(function () {
  const QUESTIONS = [
    {
      q: 'Should lectures be recorded?',
      sides: ['Yes, lectures should be recorded', 'No, lectures should not be recorded'],
      cases: [
        'Lectures should be recorded. I commute an hour and work two evenings. Sometimes I miss a lecture. A recording means I don’t fall behind. Even when I attend, I rewatch the parts I missed. Some students need this most, like second-language speakers. People who skip would probably skip anyway.',
        'Lectures should not be recorded. With a recording, I tell myself I’ll watch later. Then I don’t, or I rush it before the exam. Being in the room makes me pay attention. I also ask more questions in person. Some lecturers hold back when they are recorded. Posting the slides afterwards is enough.'
      ]
    },
    {
      q: 'Should exams be open-book?',
      sides: ['Yes, exams should be open-book', 'No, exams should be closed-book'],
      cases: [
        'Exams should be open-book. Real jobs let you look things up. What matters is knowing how to use information. Closed-book exams reward cramming facts I forget within a week. Open-book exams ask better questions about applying ideas. They also reduce panic for people who freeze.',
        'Exams should be closed-book. If you can look everything up, you skip the basics. Then you waste the exam flipping through notes. Some things you need in your head to think with. My open-book exams felt harder and more stressful. Closed-book exams are clearer about what to learn.'
      ]
    },
    {
      q: 'Is studying in groups better than studying alone?',
      sides: ['Groups are better', 'Alone is better'],
      cases: [
        'Studying in groups works better for me. Explaining an idea shows me what I don’t understand. Others catch my mistakes and know tricks I don’t. A set time with friends keeps me going. Alone, I would never make myself study. Groups also make a long term less miserable.',
        'Studying alone works better for me. Groups drift into chatting. We go at the pace of the slowest person. Everyone is stuck on different things. On my own, I focus on what I don’t know. I test myself and stop when I’m done. Groups are fine for checking answers at the end.'
      ]
    }
  ];

  const sidePick = document.getElementById('sidePick');
  function renderSides() {
    const qi = ACC.get('q', '');
    if (qi === '') { sidePick.innerHTML = '<p class="muted">Choose a question first.</p>'; return; }
    const Q = QUESTIONS[+qi];
    sidePick.innerHTML = Q.sides.map((s, i) =>
      '<label class="choice"><input type="radio" name="side" value="' + i + '" data-key="side"> ' + s + '</label>'
    ).join('');
    ACC.bindFields(sidePick);
  }
  if (sidePick) renderSides();
  document.addEventListener('acc:change', e => {
    if (e.detail.key === 'q' && sidePick) { ACC.set('side', ''); renderSides(); }
  });

  // The summary shows readable text for the question and side
  ACC.extraSummary.push(() => {
    const qi = ACC.get('q', ''), si = ACC.get('side', '');
    const out = [];
    if (qi !== '' && si !== '') out.push(['Question and my side', QUESTIONS[+qi].q + ' ' + QUESTIONS[+qi].sides[+si] + '.', 0]);
    const marks = [];
    for (let i = 1; i <= 6; i++) { const v = ACC.get('reply' + i, ''); if (v) marks.push('Reply ' + i + ': ' + v); }
    if (marks.length) out.push(['AI replies', marks.join('\n'), 3500]);
    return out;
  });
  // Hide the raw index values from the summary

  // AI round
  const replies = document.getElementById('replies');
  for (let i = 1; replies && i <= 6; i++) {
    const d = document.createElement('div');
    d.className = 'turn';
    d.innerHTML = '<div class="row"><span class="turn-n">Reply ' + i + '</span>' +
      '<select data-key="reply' + i + '" aria-label="AI reply ' + i + '"><option value="">Choose</option><option>Agreed</option><option>Pushed back</option></select></div>';
    replies.appendChild(d);
  }
  if (replies) ACC.bindFields(replies);

  function sideText() {
    const qi = ACC.get('q', ''), si = ACC.get('side', '');
    if (qi === '' || si === '') return null;
    return { Q: QUESTIONS[+qi], si: +si };
  }
  const aiPrompt = document.getElementById('aiPrompt');
  if (aiPrompt) {
    const s = sideText();
    aiPrompt.textContent = s
      ? 'My answer to “' + s.Q.q + '” is: ' + s.Q.sides[s.si].toLowerCase() + '. Help me make the case for my side.'
      : 'Go back and choose a question and a side.';
  }
  const otherCase = document.getElementById('otherCase');
  if (otherCase) {
    const s = sideText();
    otherCase.textContent = s ? s.Q.cases[1 - s.si] : 'Go back and choose a question and a side.';
  }

  // Debrief chart
  function val(k) { return +ACC.get(k, 5); }
  function chart() {
    const c = [val('c1'), val('c2'), val('c3')];
    const r = [val('r1'), val('r2'), val('r3')];
    const W = 640, H = 300, L = 40, R = 110, T = 16, B = 44;
    const x = i => L + i * (W - L - R) / 2;
    const y = v => T + (10 - v) * (H - T - B) / 10;
    let s = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Your certainty and how reasonable the other side seemed, at three points">';
    [0, 5, 10].forEach(v => { s += '<line class="grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + y(v) + '" y2="' + y(v) + '"/><text x="' + (L - 8) + '" y="' + (y(v) + 4) + '" text-anchor="end">' + v + '</text>'; });
    ['Start', 'After the AI', 'After the other side'].forEach((t, i) => { s += '<text x="' + x(i) + '" y="' + (H - 12) + '" text-anchor="middle">' + t + '</text>'; });
    function line(vals, cls, dot, label) {
      const pts = vals.map((v, i) => v === null ? null : [x(i), y(v)]);
      const seg = pts.filter(Boolean);
      if (seg.length > 1) s += '<polyline class="' + cls + '" points="' + seg.map(p => p.join(',')).join(' ') + '"/>';
      seg.forEach(p => { s += '<circle class="' + dot + '" cx="' + p[0] + '" cy="' + p[1] + '" r="4"/>'; });
    }
    line(c, 'l1', 'd1', 'Your certainty');
    line(r, 'l2', 'd2', 'Other side reasonable');
    s += '</svg>';
    const legend = '<p class="chart-legend"><span class="k1"></span>Your certainty <span class="k2"></span>Other side reasonable</p>';
    document.getElementById('chart').innerHTML = legend + s;
    const agreed = [1, 2, 3, 4, 5, 6].filter(i => ACC.get('reply' + i, '') === 'Agreed').length;
    const marked = [1, 2, 3, 4, 5, 6].filter(i => ACC.get('reply' + i, '')).length;
    document.getElementById('aiCount').textContent = marked
      ? 'The AI agreed in ' + agreed + ' of ' + marked + ' replies.' : '';
    return { c, r };
  }
  function dir(a, b) { return a === null || b === null ? null : (b > a ? 'rose' : b < a ? 'fell' : 'stayed the same'); }
  const reveal = document.getElementById('reveal');
  if (document.getElementById('chart')) chart();
  if (reveal) reveal.addEventListener('click', () => {
    const { c, r } = chart();
    const d1 = dir(c[0], c[1]), d2 = dir(c[1], c[2]), d3 = dir(r[0], r[1]), d4 = dir(r[1], r[2]);
    let t = 'Research predicts certainty rises after an agreeable AI. It falls after disagreement (Rathje et al. 2025).';
    if (d1 && d2) t += ' Your certainty ' + d1 + ' after the AI. It ' + d2 + ' after the other side.';
    if (d3 && d4) t += ' The other side’s reasonableness ' + d3 + ' after the AI. It ' + d4 + ' after their case.';
    t += ' One person’s result can differ from the average.';
    document.getElementById('compare').textContent = t;
    document.getElementById('research').classList.remove('hidden');
    ACC.set('revealed', true);
  });
  if (reveal && ACC.get('revealed', false)) reveal.click();
})();
