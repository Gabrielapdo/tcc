document.addEventListener("DOMContentLoaded", () => {
  // Animação de entrada com GSAP
  gsap.to("form input, #entrar", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
  });

  const button = document.querySelector("#entrar");

  button.onclick = function (event) {
    event.preventDefault(); // Impede o envio do formulário
    button.textContent = "Carregando...";
    button.classList.add("loading");

    setTimeout(() => {
      button.textContent = "Entrar";
      button.classList.remove("loading");
    }, 3000); // Simula 3 segundos de carregamento
  };

  button.onmouseover = () => {
    gsap.to(button, {
      scale: 1.1,
      duration: 0.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  };

  button.onmouseout = () => {
    gsap.to(button, { scale: 1, duration: 0.2 });
  };
});
