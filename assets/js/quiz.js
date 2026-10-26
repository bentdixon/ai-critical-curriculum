// Multiple-choice checks: a .quiz block with data-answer, radio inputs, and a .feedback line.
(function () {
  document.querySelectorAll('.quiz').forEach((q, i) => {
    const key = 'quiz' + i;
    const fb = q.querySelector('.feedback');
    function check(v) {
      if (!v) return;
      const ok = v === q.dataset.answer;
      fb.textContent = ok ? fb.dataset.ok : fb.dataset.no;
      fb.className = 'feedback ' + (ok ? 'ok' : 'no');
    }
    q.querySelectorAll('input[type=radio]').forEach(r => {
      if (ACC.get(key) === r.value) { r.checked = true; }
      r.addEventListener('change', () => { ACC.set(key, r.value); check(r.value); });
    });
    check(ACC.get(key));
  });
})();
