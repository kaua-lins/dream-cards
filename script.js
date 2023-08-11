let cartas = null

// Função para ordenar as cartas pela habilidade (maior para menor)
function ordenarCartasPorHabilidade() {
  if(!cartas) return null
  cartas.sort((a, b) => b.habilidade - a.habilidade);
}

function filtrarCartasPorPosicao(posicao) {
  if(!cartas) return null
  return cartas.filter(carta => carta.posicao === posicao);
}

const COLECAO_MAP = {
  "Estaduais": "estadual",
  "Libertadores": "libertadores",
  "Sulamericana": "sulamericana",
  "Vilões": "viloes",
  "Heróis": "herois",
  "Copa do Brasil": "cdb",
  "Nostalgic": "nostalgic",
  "Lendas": "legends",
  "Melhores Transferências": "melhorestransferencias",
  "Estrangeiros": "estrangeiros"
}

// Função para exibir as cartas na página
function exibirCartasSecao(secaoContainer, cartas) {
  const cartasContainer = document.createElement("div");
  cartasContainer.classList.add("jogador-informacao");

  // Limpar o conteúdo anterior
  cartasContainer.innerHTML = "";

  for (const carta of cartas) {
    const cartaElemento = document.createElement("div");
    cartaElemento.classList.add("carta-caixa");

    cartaElemento.classList.add(`border-${carta.colecao}`);

    const infoElemento = document.createElement("div");
    infoElemento.classList.add("carta-info");

    const colecaoElemento = document.createElement("div");
    colecaoElemento.classList.add("carta-colecao");
    
    colecaoElemento.classList.add(`texto-${carta.colecao}`)
    infoElemento.appendChild(colecaoElemento);
    colecaoElemento.textContent = `${carta.collection}`;

    const nomeElemento = document.createElement("div");
    nomeElemento.classList.add("carta-nome");
    nomeElemento.textContent = `Nome: ${carta.nome}` ;
    infoElemento.appendChild(nomeElemento);

    const habilidadeElemento = document.createElement("div");
    habilidadeElemento.classList.add("carta-habilidade");
    habilidadeElemento.textContent = `Habilidade: ${carta.habilidade}`;
    infoElemento.appendChild(habilidadeElemento);

    const precoCompraElemento = document.createElement("div");
    precoCompraElemento.classList.add("carta-preco-compra");

    const precoCompraTexto = document.createElement("span")
    precoCompraTexto.textContent = `Compra: R$${carta.precoCompra.toLocaleString()}`
    precoCompraTexto.classList.add("texto-compra");

    precoCompraElemento.appendChild(precoCompraTexto);
    infoElemento.appendChild(precoCompraElemento)

    const precoVendaElemento = document.createElement("div");
    precoVendaElemento.classList.add("carta-preco-venda");

    const precoVendaTexto = document.createElement("span")
    precoVendaTexto.textContent = `Venda: R$${carta.precoVenda.toLocaleString()}`
    precoVendaTexto.classList.add("texto-venda");

    precoVendaElemento.appendChild(precoVendaTexto)
    infoElemento.appendChild(precoVendaElemento);

    cartaElemento.appendChild(infoElemento);
    cartasContainer.appendChild(cartaElemento);

    const imagemElemento = document.createElement("img");
    imagemElemento.src = carta.imagem;
    imagemElemento.classList.add("card-image");
    cartaElemento.appendChild(imagemElemento);
  }

  secaoContainer.appendChild(cartasContainer);
}

const caContainer = document.getElementById("ca-container");
const pdContainer = document.getElementById("pd-container");
const peContainer = document.getElementById("pe-container");
const meiContainer = document.getElementById("mei-container");
const mcContainer = document.getElementById("mc-container");
const volContainer = document.getElementById("vol-container");
const ldContainer = document.getElementById("ld-container");
const leContainer = document.getElementById("le-container");
const zagContainer = document.getElementById("zag-container");
const golContainer = document.getElementById("gol-container");

fetch("https://cdn.dreamteam.futbol/cards/ll6wg0mi.csv")
  .then(res => res.text())
  .then(csv => {
    const lines = csv.split("\n")
    const headers = lines.shift().split(",")
    cartas = []
    for(let i = 0;i < lines.length;i++) {
      const values = lines[i].split(",")
      const obj = {}
      for(let j = 0;j < headers.length;j++) {
        const h = headers[j]
        const v = h === "habilidade" || h === "price" ? Number(values[j]) : values[j]
        obj[h] = v
      }
      cartas.push({
        nome: obj.name,
        habilidade: obj.habilidade,
        precoCompra: obj.price,
        precoVenda: Math.floor(0.25 * obj.price),
        colecao: COLECAO_MAP[obj.collection],
        collection: obj.collection,
        posicao: obj.posicao.toLowerCase(),
        imagem: `https://cdn.dreamteam.futbol/cards/dream-cards/${obj.card}.webp`
      })
    }
    console.log(`Loaded ${cartas.length} cards!`)
    // Ordenar as cartas pela habilidade antes de exibi-las
    ordenarCartasPorHabilidade();

    const ca = filtrarCartasPorPosicao("ca");
    console.log(ca)
    exibirCartasSecao(caContainer, ca);

    const pd = filtrarCartasPorPosicao("pd");
    exibirCartasSecao(pdContainer, pd);

    const pe = filtrarCartasPorPosicao("pe");
    exibirCartasSecao(peContainer, pe);

    const mei = filtrarCartasPorPosicao("mei");
    exibirCartasSecao(meiContainer, mei);

    const mc = filtrarCartasPorPosicao("mc");
    exibirCartasSecao(mcContainer, mc);

    const vol = filtrarCartasPorPosicao("vol");
    exibirCartasSecao(volContainer, vol);

    const ld = filtrarCartasPorPosicao("ld");
    exibirCartasSecao(ldContainer, ld);

    const le = filtrarCartasPorPosicao("le");
    exibirCartasSecao(leContainer, le);

    const zag = filtrarCartasPorPosicao("zag");
    exibirCartasSecao(zagContainer, zag);

    const gol = filtrarCartasPorPosicao("gol");
    exibirCartasSecao(golContainer, gol);
    buscarJogador();
  })

/* Menu Hamburguer */
class MobileNavBar {
  constructor(mobileMenu, navList, navLinks) {
   this.mobileMenu = document.querySelector(mobileMenu)
   this.navList = document.querySelector(navList)
   this.navLinks = document.querySelectorAll(navLinks)
   this.activeClass = 'active';
   
   this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
      this.navLinks.forEach((link, index) => {
          link.style.animation
              ? (link.style.animation = '')
              : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      })
  }

  handleClick() {
      this.navList.classList.toggle(this.activeClass)
      this.mobileMenu.classList.toggle(this.activeClass)
      this.animateLinks();
  }

  addClickEvent() {
      this.mobileMenu.addEventListener('click', this.handleClick);
  }
  
  init() {
      if (this.mobileMenu) {
          this.addClickEvent();
      }

      return this;
  }
}

const mobileNavbar = new MobileNavBar (
  '.mobile-menu',
  '.lista-nav',
  '.lista-nav li',
);

mobileNavbar.init();

/* Filtrar jogadores na pesquisa */

function filtrarJogadores() {
  const termoPesquisa = document.getElementById("termo-pesquisa").value.toLowerCase();
  const jogadores = document.getElementsByClassName("carta-nome");

  for (const jogador of jogadores) {
    const nomeJogador = jogador.textContent.toLowerCase();

    if (nomeJogador.includes(termoPesquisa)) {
      jogador.parentElement.scrollIntoView({ behavior: "smooth" });
      break; // Para a busca após encontrar o jogador correspondente
    }
  }
}

/* Validar envio com "enter" */

function verificarTeclaEnter(event) {
  if (event.key === "Enter") {
    filtrarJogadores();
  }
}

const ofensivoPesquisa = document.getElementById("termo-pesquisa");

ofensivoPesquisa.addEventListener("keydown", verificarTeclaEnter);

/* Compra e venda de jogadores */

function buscarJogador() {
  const nomeJogador = document.getElementById("nome-jogador").value.toLowerCase();
  let precoCompra = 0;
  let precoVenda = 0;
  let precoCompraTotal = obterPrecoCompraTotal(); // Inicializar com o valor armazenado
  let precoVendaTotal = obterPrecoVendaTotal();

  for (const carta of cartas) {
    if (carta.nome.toLowerCase() === nomeJogador) {
      // Atualizar as informações de preço de compra e venda na tela]

      const nomeCarta = document.getElementById("nome-carta")
      nomeCarta.textContent = `Nome: ${carta.nome}`

      const habilidadeCarta = document.getElementById("habilidade-carta")
      habilidadeCarta.textContent = `Habilidade: ${carta.habilidade}`
      
      const precoCompraElemento = document.getElementById("preco-compra");
      precoCompraElemento.textContent = `Preço de Compra: R$${carta.precoCompra.toLocaleString()}`;

      const precoVendaElemento = document.getElementById("preco-venda");
      precoVendaElemento.textContent = `Preço de Venda: R$${carta.precoVenda.toLocaleString()}`;

      const fotoJogador = document.getElementById("foto-jogador");
      fotoJogador.src = carta.imagem;

      // Armazenar o preço da carta atual
      precoCompra = Number(carta.precoCompra);
      precoVenda = Number(carta.precoVenda);
      break;
    }
  }

  // Atualizar o preço total acumulado
  precoCompraTotal += precoCompra;
  const precoCompraTotalElemento = document.getElementById("preco-compra-total");
  precoCompraTotalElemento.textContent = `Preço de Compra Total: R$${precoCompraTotal.toLocaleString()}`;

  precoVendaTotal += precoVenda;
  const precoVendaTotalElemento = document.getElementById("preco-venda-total");
  precoVendaTotalElemento.textContent = `Preço de Venda Total: R$${precoVendaTotal.toLocaleString()}`;

  // Armazenar o novo valor de precoCompraTotal no armazenamento local
  armazenarPrecoCompraTotal(precoCompraTotal);
  armazenarPrecoVendaTotal(precoVendaTotal);
}

// Função para obter o valor armazenado de precoCompraTotal do armazenamento local
function obterPrecoCompraTotal() {
  const precoCompraTotalArmazenado = localStorage.getItem("precoCompraTotal");
  return precoCompraTotalArmazenado ? parseFloat(precoCompraTotalArmazenado) : 0;
}

function obterPrecoVendaTotal() {
  const precoVendaTotalArmazenado = localStorage.getItem("precoVendaTotal");
  return precoVendaTotalArmazenado ? parseFloat(precoVendaTotalArmazenado) : 0;
}

// Função para armazenar o novo valor de precoCompraTotal no armazenamento local
function armazenarPrecoCompraTotal(valor) {
  localStorage.setItem("precoCompraTotal", valor);
}

function armazenarPrecoVendaTotal(valor) {
  localStorage.setItem("precoVendaTotal", valor);
}

function limparPrecoTotal() {
  localStorage.removeItem("precoCompraTotal");
  localStorage.removeItem("precoVendaTotal");
  alert("O valor de preço de compra e venda total foi limpo.");

  // Atualizar os valores exibidos na página
  const precoCompraTotalElemento = document.getElementById("preco-compra-total");
  precoCompraTotalElemento.textContent = `Preço de Compra Total: R$0`;

  const precoVendaTotalElemento = document.getElementById("preco-venda-total");
  precoVendaTotalElemento.textContent = `Preço de Venda Total: R$0`;
}

// Exemplo de uso:
const inputJogador = document.getElementById("nome-jogador");
inputJogador.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    buscarJogador();
  }
});
