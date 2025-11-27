function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
  const btn = document.querySelector('.toggle-btn');
  if (btn.textContent.includes('Ativar')) {
    btn.textContent = 'Desativar Alto Contraste';
  } else {
    btn.textContent = 'Ativar Alto Contraste';
  }
}
function readText(elementId) {
  const text = document.getElementById(elementId).innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR'; // Português do Brasil
  speechSynthesis.cancel(); // para evitar sobreposição de falas
  speechSynthesis.speak(utterance);
}