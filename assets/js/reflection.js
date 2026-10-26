// Live word count for the essay box.
document.addEventListener('DOMContentLoaded', () => {
  const box = document.getElementById('essay');
  const out = document.getElementById('wordCount');
  if (!box || !out) return;
  const count = () => { out.textContent = (box.value.trim().match(/\S+/g) || []).length; };
  box.addEventListener('input', count);
  setTimeout(count, 0); // after saved text is restored
});
