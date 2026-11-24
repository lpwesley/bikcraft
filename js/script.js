// Scripts gerais do site. Carregado com "defer" em todas as páginas.
// O menu hambúrguer fica em menu.js.

// Orçamento: marca o produto que veio na URL
// Ex.: orcamento.html?tipo=seguro&produto=ouro marca "Seguro" e "Ouro".
const orcamento = document.querySelector("form.orcamento");

if (orcamento) {
  const parametros = new URLSearchParams(location.search);

  parametros.forEach((valor, nome) => {
    // Só marca inputs de rádio do próprio formulário, com nome e valor exatos.
    const seletor = `input[type="radio"][name="${CSS.escape(nome)}"][value="${CSS.escape(valor)}"]`;
    const opcao = orcamento.querySelector(seletor);
    if (opcao) {
      opcao.checked = true;
    }
  });
}

// Galeria das bicicletas: no desktop, a imagem clicada vai para o destaque
const galeria = document.querySelector(".bicicleta-imagens");

if (galeria) {
  const desktop = window.matchMedia("(min-width: 800px)");

  galeria.addEventListener("click", (event) => {
    const imagem = event.target.closest("img");
    if (imagem && desktop.matches) {
      galeria.prepend(imagem);
    }
  });
}

// Animações de entrada (plugin simple-anime, só nas páginas que o carregam)
if (window.SimpleAnime) {
  new SimpleAnime();
}
