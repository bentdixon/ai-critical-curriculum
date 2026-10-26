// Fills the learner's topic into prompts, and reveals the example uses.
document.addEventListener('DOMContentLoaded', () => {
  function fillTopic() {
    const topic = (ACC.get('topic', '') || '').trim();
    document.querySelectorAll('.topic').forEach(s => { s.textContent = topic || '[your topic]'; });
  }
  fillTopic();
  document.addEventListener('acc:change', e => { if (e.detail.key === 'topic') fillTopic(); });

  const reveal = document.getElementById('reveal');
  const box = document.getElementById('examples');
  if (reveal && box) {
    const show = () => { box.classList.remove('hidden'); ACC.set('revealed', true); };
    reveal.addEventListener('click', show);
    if (ACC.get('revealed', false)) show();
  }
});
