(function () {
  const ISSUES = [
    { label: 'Falling behind on coursework and losing sleep',
      prompt: 'I’m a university student. I’ve fallen behind on my coursework. I lie awake worrying about deadlines. What should I do?' },
    { label: 'Feeling lonely after moving for a degree',
      prompt: 'I moved to a new city for my degree. I haven’t made any friends yet. I feel lonely most evenings. What should I do?' },
    { label: 'Feeling like a fraud after harsh feedback',
      prompt: 'My supervisor gave harsh feedback on my draft. Now I feel like I don’t belong in my programme. What should I do?' }
  ];
  const aiPrompt = document.getElementById('aiPrompt');
  function render() {
    if (!aiPrompt) return;
    const i = ACC.get('issue', '');
    aiPrompt.textContent = i === '' ? 'Choose a made-up issue above.' : ISSUES[+i].prompt;
  }
  render();
  document.addEventListener('acc:change', e => { if (e.detail.key === 'issue') render(); });
  ACC.extraSummary.push(() => {
    const i = ACC.get('issue', '');
    return i === '' ? [] : [['Made-up issue', ISSUES[+i].label, 0]];
  });

  const reveal = document.getElementById('reveal');
  if (reveal) {
    reveal.addEventListener('click', () => {
      document.getElementById('research').classList.remove('hidden');
      ACC.set('revealed', true);
    });
    if (ACC.get('revealed', false)) reveal.click();
  }
})();
