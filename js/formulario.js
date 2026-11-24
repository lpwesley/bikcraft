// Envio dos formulários (contato e orçamento) sem recarregar a página.
// Sem JavaScript, o formulário continua funcionando pelo envio normal do HTML.
// O endereço de envio vem do atributo "action" do próprio <form>.

const formulario = document.querySelector("form[data-formulario]");

function mostrarResposta(sucesso) {
  const resposta = document.createElement("p");
  resposta.className = "form-resposta font-2-l";
  resposta.setAttribute("role", "status");

  if (sucesso) {
    resposta.innerHTML =
      "<span class='form-sucesso'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.";
  } else {
    resposta.innerHTML =
      "<span class='form-erro'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: <a href='mailto:contato@bikcraft.com'>contato@bikcraft.com</a>";
  }

  formulario.replaceChildren(resposta);
}

async function enviarFormulario(event) {
  event.preventDefault();

  const botao = formulario.querySelector("button[type='submit']");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  try {
    const resposta = await fetch(formulario.action, {
      method: "POST",
      body: new FormData(formulario),
    });
    mostrarResposta(resposta.ok);
  } catch {
    // Sem internet ou servidor fora do ar
    mostrarResposta(false);
  }
}

if (formulario) {
  formulario.addEventListener("submit", enviarFormulario);
}
