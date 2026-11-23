# Bikcraft

Site institucional e catálogo da **Bikcraft**, uma marca fictícia de bicicletas elétricas feitas sob medida.

## Tema

O site apresenta a marca Bikcraft e os seus produtos: bicicletas elétricas personalizadas (cores, componentes e medidas ajustadas ao corpo do cliente) e planos de seguro para essas bicicletas.

A finalidade é **gerar contatos e pedidos de orçamento**. O site não vende direto: o visitante conhece os modelos e os seguros e termina em um formulário de orçamento ou de contato.

## Público-alvo

- Pessoas que usam ou querem usar a bicicleta no dia a dia na cidade, para o trabalho e para o lazer.
- Ciclistas que buscam uma bicicleta elétrica premium, com motor, rastreador e quadro de carbono, e estão dispostos a investir entre R$ 2.499 e R$ 4.999.
- Clientes que valorizam personalização e segurança, por isso o site oferece bicicletas sob medida e planos de seguro (Prata e Ouro).
- Moradores do Rio de Janeiro e de São Paulo, onde ficam as lojas físicas, e clientes de todo o Brasil pela loja online.

O site precisa funcionar bem no celular, já que boa parte desse público pesquisa pelo smartphone.

## Páginas planejadas

| Página | Arquivo | Conteúdo |
| --- | --- | --- |
| Home | `index.html` | Apresentação da marca, destaque dos 3 modelos, tecnologia, parceiros, depoimento e planos de seguro |
| Bicicletas | `bicicletas.html` | Lista dos modelos com resumo, preço e principais características |
| Nimbus Stark | `bicicletas/nimbus.html` | Página do produto: fotos, descrição, informações, ficha técnica e chamada para compra |
| Magic Might | `bicicletas/magic.html` | Página do produto (mesma estrutura) |
| Nebula Cosmic | `bicicletas/nebula.html` | Página do produto (mesma estrutura) |
| Seguros | `seguros.html` | Planos Prata e Ouro, vantagens e perguntas frequentes |
| Contato | `contato.html` | Dados de contato, formulário de mensagem e lojas físicas (RJ e SP) |
| Orçamento | `orcamento.html` | Formulário para escolher bicicleta ou seguro e enviar os dados pessoais e de entrega |
| Termos | `termos.html` | Termos e condições de uso |

Navegação: o menu principal leva a **Bicicletas**, **Seguros** e **Contato**. O rodapé repete esses links e adiciona **Termos e Condições**. As páginas de produto e de seguros levam ao **Orçamento**.

### Estrutura de pastas

```
bikcraft/
├── index.html, bicicletas.html, seguros.html, contato.html, orcamento.html, termos.html
├── bicicletas/          # páginas de cada modelo
├── css/
│   ├── style.css        # importa todos os arquivos abaixo
│   ├── global/          # reset, header e footer
│   ├── utilidades/      # cores, tipografia, componentes e formulário
│   └── home/ bicicletas/ bicicleta/ seguros/ contato/ orcamento/ termos/
├── js/
│   └── menu.js          # menu hambúrguer
└── img/                 # fotos, ícones, logos de parceiros e redes sociais
```

## Framework

**Nenhum framework: HTML5, CSS3 e um JavaScript mínimo**, sem etapa de build. O único script (`js/menu.js`, cerca de 40 linhas) controla o menu hambúrguer. Sem JavaScript, o menu continua aparecendo aberto.

Por que essa escolha:

- **O site é estático e pequeno.** São 9 páginas de conteúdo, sem login, carrinho ou dados que mudam a cada acesso. Um framework como React ou Vue traria peso e complexidade sem resolver nenhum problema real aqui.
- **Desempenho.** Quase não há JavaScript para baixar e executar, então as páginas abrem rápido mesmo em conexões móveis, o que importa para o público que pesquisa pelo celular.
- **SEO e acessibilidade.** O HTML chega pronto ao navegador e aos buscadores, usando tags semânticas (`header`, `nav`, `main`, `article`, `details`).
- **Hospedagem simples e gratuita.** Os arquivos podem ir direto para GitHub Pages, Netlify ou Vercel.
- **Fácil de manter e de aprender.** Qualquer pessoa que conheça HTML e CSS consegue editar o projeto, sem instalar dependências.

Recursos de CSS usados no lugar de um framework de estilo:

- **Variáveis CSS** (`--cor-*`) para a paleta de cores.
- **Classes utilitárias** de tipografia (`font-1-*`, `font-2-*`) e de cor (`cor-*`).
- **Mobile first:** o CSS base é o do celular, e os pontos de quebra (`min-width` em 400, 600, 800 e 1200px) acrescentam o layout de telas maiores.
- **CSS Grid e Flexbox** para o layout.
- Interações sem JavaScript: o formulário de orçamento usa `:checked` e o FAQ usa `<details>`.
- **Acessibilidade:** link "Pular para o conteúdo", menu com `aria-expanded` que fecha com Esc, página atual marcada com `aria-current` e títulos em ordem (h1 → h2 → h3).

Fontes: Poppins, Roboto e Merriweather, carregadas do Google Fonts.

## Como rodar

Não precisa instalar nada. Abra o `index.html` no navegador ou use um servidor local:

```bash
python3 -m http.server 5500
```

Depois acesse `http://localhost:5500`. No VS Code, a extensão Live Server também funciona (porta 5501, configurada em `.vscode/settings.json`).
