// Menu hambúrguer acessível.
// Sem JavaScript o menu continua visível (o CSS só esconde quando <html> tem a classe "js").

const botao = document.querySelector("[data-menu='botao']");
const menu = botao && document.getElementById(botao.getAttribute("aria-controls"));

if (botao && menu) {
  const desktop = window.matchMedia("(min-width: 800px)");

  function alternarMenu(abrir) {
    botao.setAttribute("aria-expanded", String(abrir));
    menu.classList.toggle("ativo", abrir);
  }

  function menuAberto() {
    return botao.getAttribute("aria-expanded") === "true";
  }

  botao.addEventListener("click", () => alternarMenu(!menuAberto()));

  // Esc fecha o menu e devolve o foco para o botão
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuAberto()) {
      alternarMenu(false);
      botao.focus();
    }
  });

  // Clique fora do header fecha o menu
  document.addEventListener("click", (event) => {
    if (menuAberto() && !event.target.closest(".header")) {
      alternarMenu(false);
    }
  });

  // Ao passar para o desktop, volta ao estado fechado
  desktop.addEventListener("change", () => alternarMenu(false));
}
