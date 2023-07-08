const cartas = [
  {
    nome: "Marcelo Grohe",
    habilidade: 508,
    precoCompra: 197976345,
    precoVenda: 197976345 / 4,
    colecao: 'herois',
    posicao: 'gol',
    imagem: "goleiro/508-grohe.png"
  },
  {
    nome: "Fábio",
    habilidade: 523,
    precoCompra: 313932900,
    precoVenda: 313932900 / 4,
    colecao: 'nostalgic',
    posicao: 'gol',
    imagem: "goleiro/523-fabio.png"
  },
  {
    nome: "Bento",
    habilidade: 515,
    precoCompra: 252089404,
    precoVenda: 252089404 / 4,
    colecao: 'libertadores',
    posicao: 'gol',
    imagem: "goleiro/515-bento.png"
  },
  {
    nome: "Bruno",
    habilidade: 508,
    precoCompra: 101726384,
    precoVenda: 101726384 / 4,
    colecao: 'viloes',
    posicao: 'gol',
    imagem: "goleiro/495-bruno.png"
  },
  {
    nome: "Pedro Perri",
    habilidade: 490,
    precoCompra: 76015872,
    precoVenda: 76015872 / 4,
    colecao: 'cdb',
    posicao: 'gol',
    imagem: "goleiro/490-perri.png"
  },
  {
    nome: "Victor",
    habilidade: 527,
    precoCompra: 344854648,
    precoVenda: 344854648 / 4,
    colecao: 'legends',
    posicao: 'gol',
    imagem: "goleiro/527-victor.png"
  },
  {
    nome: "Juninho Capixaba",
    habilidade: 520,
    precoCompra: 290741589,
    precoVenda: 290741589/ 4,
    colecao: 'nostalgic',
    posicao: 'le',
    imagem: "lateral-esquerdo/520-capixaba.png"
  },
  {
    nome: "Vanderson",
    habilidade: 509,
    precoCompra: 205706782,
    precoVenda: 205706782 / 4,
    colecao: 'nostalgic',
    posicao: 'ld',
    imagem: "lateral-direito/509-vanderson.png"
  },
  {
    nome: "Piquerez",
    habilidade: 507,
    precoCompra: 190245908,
    precoVenda: 190245908 / 4,
    colecao: 'cdb',
    posicao: 'le',
    imagem: "lateral-esquerdo/507-piquerez.png"
  },
  {
    nome: "Pedro Porro",
    habilidade: 503,
    precoCompra: 159324160,
    precoVenda: 159324160 / 4,
    colecao: 'nostalgic',
    posicao: 'ld',
    imagem: "lateral-direito/503-porro.png"
  },
  {
    nome: "Caio Paulista",
    habilidade: 501,
    precoCompra: 143863286,
    precoVenda: 143863286 / 4,
    colecao: 'cdb',
    posicao: 'le',
    imagem: "lateral-esquerdo/501-caio-paulista.png"
  },
  {
    nome: "Yago Pikachu",
    habilidade: 512,
    precoCompra: 228898093,
    precoVenda: 228898093 / 4,
    colecao: 'sulamericana',
    posicao: 'ld',
    imagem: "lateral-direito/512-pikachu.png"
  },
  {
    nome: "Samuel Xavier",
    habilidade: 493,
    precoCompra: 90536119,
    precoVenda: 90536119 / 4,
    colecao: 'cdb',
    posicao: 'ld',
    imagem: "lateral-direito/493-xavier.png"
  },
  {
    nome: "Pepe",
    habilidade: 512,
    precoCompra: 236628530,
    precoVenda: 236628530 / 4,
    colecao: 'viloes',
    posicao: 'zag',
    imagem: "zagueiro/513-pepe.png"
  },
  {
    nome: "Murillo",
    habilidade: 500,
    precoCompra: 136132849,
    precoVenda: 136132849 / 4,
    colecao: 'cdb',
    posicao: 'zag',
    imagem: "zagueiro/500-murillo.png"
  },
  {
    nome: "Kannemann",
    habilidade: 500,
    precoCompra: 136132849,
    precoVenda: 136132849/ 4,
    colecao: 'cdb',
    posicao: 'zag',
    imagem: "zagueiro/500-kannemann.png"
  },
  {
    nome: "Lucas Verissimo",
    habilidade: 497,
    precoCompra: 114299765,
    precoVenda: 114299765 / 4,
    colecao: 'nostalgic',
    posicao: 'zag',
    imagem: "zagueiro/497-verissimio.png"
  },
  {
    nome: "Nathan Silva",
    habilidade: 495,
    precoCompra: 101726384,
    precoVenda: 101726384 / 4,
    colecao: 'viloes',
    posicao: 'zag',
    imagem: "zagueiro/495-nathan-silva.png"
  },
  {
    nome: "Vitor Bueno",
    habilidade: 491,
    precoCompra: 80576824,
    precoVenda: 80576824 / 4,
    colecao: 'cdb',
    posicao: 'mei',
    imagem: "meio-ofensivo/491-vitor-bueno.png"
  },
  {
    nome: "Renato Augusto",
    habilidade: 493,
    precoCompra: 90536119,
    precoVenda: 90536119 / 4,
    colecao: 'sulamericana',
    posicao: 'mc',
    imagem: "meio-central/493-renato-augusto.png"
  },
  {
    nome: "Willian Arão",
    habilidade: 495,
    precoCompra: 101726384,
    precoVenda: 101726384 / 4,
    colecao: 'nostalgic',
    posicao: 'vol',
    imagem: "volante/495-arao.png"
  },
  {
    nome: "Nikão",
    habilidade: 495,
    precoCompra: 101726384,
    precoVenda: 101726384 / 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/495-nikao.png"
  },
  {
    nome: "Wellington Rato",
    habilidade: 507,
    precoCompra: 190245908,
    precoVenda: 190245908 / 4,
    colecao: 'sulamericana',
    posicao: 'mei',
    imagem: "meio-ofensivo/507-rato.png"
  },
  {
    nome: "Fernandinho",
    habilidade: 497,
    precoCompra: 114299765,
    precoVenda: 114299765 / 4,
    colecao: 'viloes',
    posicao: 'vol',
    imagem: "volante/497-fernandinho.png"
  },
  {
    nome: "Mineiro",
    habilidade: 498,
    precoCompra: 136132849,
    precoVenda: 136132849 / 4,
    colecao: 'herois',
    posicao: 'vol',
    imagem: "volante/498-mineiro.png"
  },
  {
    nome: "Felipe Melo",
    habilidade: 500,
    precoCompra: 136132849,
    precoVenda: 136132849 / 4,
    colecao: 'viloes',
    posicao: 'vol',
    imagem: "volante/500-felipe-melo.png"
  },
  {
    nome: "Thiago Neves",
    habilidade: 500,
    precoCompra: 136132849,
    precoVenda: 136132849 / 4,
    colecao: 'viloes',
    posicao: 'mei',
    imagem: "meio-ofensivo/500-thiago-neves.png"
  },
  {
    nome: "Zaracho",
    habilidade: 512,
    precoCompra: 228898093,
    precoVenda: 228898093 / 4,
    colecao: 'libertadores',
    posicao: 'mei',
    imagem: "meio-ofensivo/512-zaracho.png"
  },
  {
    nome: "Rodrigo Nestor",
    habilidade: 502,
    precoCompra: 151593723,
    precoVenda: 151593723 / 4,
    colecao: 'cdb',
    posicao: 'mc',
    imagem: "meio-central/502-nestor.png"
  },
  {
    nome: "Villasanti",
    habilidade: 502,
    precoCompra: 151593723,
    precoVenda: 151593723 / 4,
    colecao: 'cdb',
    posicao: 'vol',
    imagem: "volante/502-villasanti.png"
  },
  {
    nome: "Nenê",
    habilidade: 504,
    precoCompra: 167054597,
    precoVenda: 167054597/ 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/504-nene.png"
  },
  {
    nome: "Thaciano",
    habilidade: 504,
    precoCompra: 167054597,
    precoVenda: 167054597 / 4,
    colecao: 'cdb',
    posicao: 'mei',
    imagem: "meio-ofensivo/504-thaciano.png"
  },
  {
    nome: "Gabiru",
    habilidade: 505,
    precoCompra: 174785034 ,
    precoVenda: 174785034  / 4,
    colecao: 'herois',
    posicao: 'vol',
    imagem: "volante/505-gabiru.png"
  },
  {
    nome: "Claudinho",
    habilidade: 506,
    precoCompra: 182515471,
    precoVenda: 182515471 / 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/506-claudinho.png"
  },
  {
    nome: "Nacho Fernandez",
    habilidade: 508,
    precoCompra: 190245908,
    precoVenda: 190245908 / 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/507-nacho.png"
  },
  {
    nome: "Everton Ribeiro",
    habilidade: 508,
    precoCompra: 197976345,
    precoVenda: 197976345 / 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/508-everton-ribeiro.png"
  },
  {
    nome: "Andreas",
    habilidade: 510,
    precoCompra: 213437219,
    precoVenda: 213437219 / 4,
    colecao: 'viloes',
    posicao: 'mc',
    imagem: "meio-central/510-andreas.png"
  },
  {
    nome: "Vitinha",
    habilidade: 510,
    precoCompra: 213437219,
    precoVenda: 213437219 / 4,
    colecao: 'nostalgic',
    posicao: 'mc',
    imagem: "meio-central/510-vitinha.png"
  },
  {
    nome: "Zé Rafael",
    habilidade: 510,
    precoCompra: 213437219,
    precoVenda: 213437219 / 4,
    colecao: 'cdb',
    posicao: 'mc',
    imagem: "meio-central/510-ze-rafael.png"
  },
  {
    nome: "Thiago Maia",
    habilidade: 511,
    precoCompra: 221167656,
    precoVenda: 221167656 / 4,
    colecao: 'cdb',
    posicao: 'vol',
    imagem: "volante/511-thiago-maia.png"
  },
  {
    nome: "Danilo",
    habilidade: 512,
    precoCompra: 228898093,
    precoVenda: 228898093 / 4,
    colecao: 'nostalgic',
    posicao: 'vol',
    imagem: "volante/512-danilo.png"
  },
  {
    nome: "Talisca",
    habilidade: 514,
    precoCompra: 244358967,
    precoVenda: 244358967 / 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/514-talisca.png"
  },
  {
    nome: "Gustavo Scarpa",
    habilidade: 521,
    precoCompra: 298472026 ,
    precoVenda: 298472026  / 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/521-scarpa.png"
  },
  {
    nome: "João Gomes",
    habilidade: 523,
    precoCompra: 313932900,
    precoVenda: 313932900 / 4,
    colecao: 'nostalgic',
    posicao: 'vol',
    imagem: "volante/523-joao-gomes.png"
  },
  {
    nome: "Joelinton",
    habilidade: 523,
    precoCompra: 313932900,
    precoVenda: 313932900 / 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/523-joelinton.png"
  },
  {
    nome: "Oscar",
    habilidade: 525,
    precoCompra: 329393774,
    precoVenda: 329393774/ 4,
    colecao: 'nostalgic',
    posicao: 'mei',
    imagem: "meio-ofensivo/525-oscar.png"
  },
  {
    nome: "Endrick",
    habilidade: 502,
    precoCompra: 151593723,
    precoVenda: 151593723 / 4,
    colecao: 'libertadores',
    posicao: 'ca',
    imagem: "centro-avante/502-endrick.png"
  },
  {
    nome: "Eder",
    habilidade: 495,
    precoCompra: 10172634,
    precoVenda: 10172634/ 4,
    colecao: 'herois',
    posicao: 'ca',
    imagem: "centro-avante/495-eder.png"
  },
  {
    nome: "Leandro Damião",
    habilidade: 496,
    precoCompra: 121157751,
    precoVenda: 121157751/ 4,
    colecao: 'nostalgic',
    posicao: 'ca',
    imagem: "centro-avante/496-damiao.png"
  },
  {
    nome: "Artur",
    habilidade: 497,
    precoCompra: 114299765,
    precoVenda: 114299765 / 4,
    colecao: 'nostalgic',
    posicao: 'pd',
    imagem: "ponta-direita/497-artur.png"
  },
  {
    nome: "Fábio Júnior",
    habilidade: 498,
    precoCompra: 121157751,
    precoVenda: 121157751 / 4,
    colecao: 'herois',
    posicao: 'ca',
    imagem: "centro-avante/498-fabio-junior.png"
  },
  {
    nome: "Hulk",
    habilidade: 498,
    precoCompra: 121157751,
    precoVenda: 121157751 / 4,
    colecao: 'estadual',
    posicao: 'ca',
    imagem: "centro-avante/498-hulk.png"
  },
  {
    nome: "Rony",
    habilidade: 498,
    precoCompra: 121157751,
    precoVenda: 121157751 / 4,
    colecao: 'nostalgic',
    posicao: 'ca',
    imagem: "centro-avante/498-rony.png"
  },
  {
    nome: "Diego Souza",
    habilidade: 499,
    precoCompra: 128427216,
    precoVenda: 197976345 / 4,
    colecao: 'viloes',
    posicao: 'ca',
    imagem: "centro-avante/499-diego-souza.png"
  },
  {
    nome: "Suarez",
    habilidade: 499,
    precoCompra: 128427216,
    precoVenda: 128427216 / 4,
    colecao: 'estadual',
    posicao: 'ca',
    imagem: "centro-avante/499-suarez.png"
  },
  {
    nome: "Cano",
    habilidade: 500,
    precoCompra: 136132849,
    precoVenda: 136132849 / 4,
    colecao: 'estadual',
    posicao: 'ca',
    imagem: "centro-avante/500-cano.png"
  },
  {
    nome: "Douglas Costa",
    habilidade: 500,
    precoCompra: 136132849,
    precoVenda: 136132849 / 4,
    colecao: 'viloes',
    posicao: 'pd',
    imagem: "ponta-direita/500-douglas-costa.png"
  },
  {
    nome: "Luciano Juba",
    habilidade: 501,
    precoCompra: 143863286,
    precoVenda: 143863286 / 4,
    colecao: 'cdb',
    posicao: 'pe',
    imagem: "ponta-esquerda/501-juba.png"
  },
  {
    nome: "David Neres",
    habilidade: 502,
    precoCompra: 151593723,
    precoVenda: 151593723  / 4,
    colecao: 'nostalgic',
    posicao: 'pd',
    imagem: "ponta-direita/502-neres.png"
  },
  {
    nome: "Savarino",
    habilidade: 502,
    precoCompra: 151593723 ,
    precoVenda: 151593723  / 4,
    colecao: 'nostalgic',
    posicao: 'pd',
    imagem: "ponta-direita/502-savarino.png"
  },
  {
    nome: "Guerrero",
    habilidade: 504,
    precoCompra: 167054597,
    precoVenda: 167054597 / 4,
    colecao: 'herois',
    posicao: 'ca',
    imagem: "centro-avante/504-guerrero.png"
  },
  {
    nome: "Jeffinho",
    habilidade: 504,
    precoCompra: 167054597 ,
    precoVenda: 167054597 / 4,
    colecao: 'nostalgic',
    posicao: 'pe',
    imagem: "ponta-esquerda/504-jeffinho.png"
  },
  {
    nome: "Michael",
    habilidade: 508,
    precoCompra: 167054597,
    precoVenda: 167054597 / 4,
    colecao: 'nostalgic',
    posicao: 'pe',
    imagem: "ponta-esquerda/504-michael.png"
  },
  {
    nome: "Gabigol",
    habilidade: 505,
    precoCompra: 174785034,
    precoVenda: 174785034 / 4,
    colecao: 'herois',
    posicao: 'ca',
    imagem: "centro-avante/505-gabigol.png"
  },
  {
    nome: "Pedro Raul",
    habilidade: 505,
    precoCompra: 174785034 ,
    precoVenda: 174785034  / 4,
    colecao: 'nostalgic',
    posicao: 'ca',
    imagem: "centro-avante/505-pedro-raul.png"
  },
  {
    nome: "Tardelli",
    habilidade: 505,
    precoCompra: 174785034 ,
    precoVenda: 174785034 / 4,
    colecao: 'herois',
    posicao: 'pd',
    imagem: "ponta-direita/505-tardelli.png"
  },
  {
    nome: "Pepê",
    habilidade: 506,
    precoCompra: 182515471,
    precoVenda: 182515471 / 4,
    colecao: 'nostalgic',
    posicao: 'pe',
    imagem: "ponta-esquerda/506-pepê.png"
  },
  {
    nome: "Aloísio",
    habilidade: 507,
    precoCompra: 190245908,
    precoVenda: 190245908 / 4,
    colecao: 'cdb',
    posicao: 'ca',
    imagem: "centro-avante/507-aloisio.png"
  },
  {
    nome: "Deyverson",
    habilidade: 509,
    precoCompra: 205706782,
    precoVenda: 205706782 / 4,
    colecao: 'herois',
    posicao: 'ca',
    imagem: "centro-avante/509-deyverson.png"
  },
  {
    nome: "Moisés",
    habilidade: 509,
    precoCompra: 205706782,
    precoVenda: 205706782 / 4,
    colecao: 'cdb',
    posicao: 'pe',
    imagem: "ponta-esquerda/509-moises.png"
  },
  {
    nome: "Léo Reis",
    habilidade: 510,
    precoCompra: 213437219,
    precoVenda: 213437219 / 4,
    colecao: 'nostalgic',
    posicao: 'ca',
    imagem: "centro-avante/510-leo-reis.png"
  },
  {
    nome: "Paulinho",
    habilidade: 510,
    precoCompra: 213437219,
    precoVenda: 213437219 / 4,
    colecao: 'cdb',
    posicao: 'pe',
    imagem: "ponta-esquerda/510-paulinho.png"
  },
  {
    nome: "Richarlison",
    habilidade: 511,
    precoCompra: 221167656,
    precoVenda: 221167656 / 4,
    colecao: 'nostalgic',
    posicao: 'ca',
    imagem: "centro-avante/511-richarlison.png"
  },
  {
    nome: "Romarinho",
    habilidade: 511,
    precoCompra: 221167656,
    precoVenda: 221167656 / 4,
    colecao: 'nostalgic',
    posicao: 'pd',
    imagem: "ponta-direita/511-romarinho.png"
  },
  {
    nome: "Hulk",
    habilidade: 515,
    precoCompra: 252089404,
    precoVenda: 252089404 / 4,
    colecao: 'herois',
    posicao: 'pd',
    imagem: "ponta-direita/515-hulk.png"
  },
  {
    nome: "Lucas Moura",
    habilidade: 515,
    precoCompra: 252089404,
    precoVenda: 252089404 / 4,
    colecao: 'nostalgic',
    posicao: 'pd',
    imagem: "ponta-direita/515-lucas-moura.png"
  },
  {
    nome: "Martinelli",
    habilidade: 515,
    precoCompra: 252089404 ,
    precoVenda:252089404 / 4,
    colecao: 'nostalgic',
    posicao: 'pe',
    imagem: "ponta-esquerda/515-martinelli.png"
  },
  {
    nome: "Raphinha",
    habilidade: 516,
    precoCompra: 259819841 ,
    precoVenda: 259819841  / 4,
    colecao: 'nostalgic',
    posicao: 'pd',
    imagem: "ponta-direita/516-raphinha.png"
  },
  {
    nome: "João Felix",
    habilidade: 525,
    precoCompra: 329393774,
    precoVenda: 329393774 / 4,
    colecao: 'nostalgic',
    posicao: 'pd',
    imagem: "ponta-direita/525-joao-felix.png"
  },
  {
    nome: "Ribamar",
    habilidade: 519,
    precoCompra: 283011152 ,
    precoVenda: 283011152 / 4,
    colecao: 'nostalgic',
    posicao: 'ca',
    imagem: "centro-avante/519-ribamar.png"
  },
  {
    nome: "Ganso",
    habilidade: 494,
    precoCompra: 95968286,
    precoVenda: 95968286 / 4,
    colecao: 'libertadores',
    posicao: 'mei',
    imagem: "meio-ofensivo/494-ganso.png"
  },
  {
    nome: "Natan",
    habilidade: 496,
    precoCompra: 107829967,
    precoVenda: 107829967 / 4,
    colecao: 'sulamericana',
    posicao: 'zag',
    imagem: "zagueiro/496-natan.png"
  },
  {
    nome: "Ayrton Lucas",
    habilidade: 501,
    precoCompra: 143863286,
    precoVenda: 143863286 / 4,
    colecao: 'libertadores',
    posicao: 'le',
    imagem: "lateral-esquerdo/501-ayrton-lucas.png"
  },
  {
    nome: "Ralf",
    habilidade: 488,
    precoCompra: 67653855,
    precoVenda: 67653855 / 4,
    colecao: 'nostalgic',
    posicao: 'vol',
    imagem: "volante/488-ralf.png"
  },
  {
    nome: "Oscar Cardozo",
    habilidade: 487,
    precoCompra: 63824392,
    precoVenda: 63824392 / 4,
    colecao: 'nostalgic',
    posicao: 'ca',
    imagem: "centro-avante/487-oscar-cardozo.png"
  },
  {
    nome: "Igor Paixão",
    habilidade: 486,
    precoCompra: 60211690,
    precoVenda: 60211690 / 4,
    colecao: 'nostalgic',
    posicao: 'pe',
    imagem: "ponta-esquerda/486-igor-paixao.png"
  },
  {
    nome: "Cauly",
    habilidade: 488,
    precoCompra: 67653855,
    precoVenda: 67653855 / 4,
    colecao: 'cdb',
    posicao: 'mei',
    imagem: "meio-ofensivo/488-cauly.png"
  },
  {
    nome: "Leo Pereira",
    habilidade: 488,
    precoCompra: 67653855,
    precoVenda: 67653855 / 4,
    colecao: 'cdb',
    posicao: 'zag',
    imagem: "zagueiro/488-leo-pereira.png"
  },
  {
    nome: "Alex Santana",
    habilidade: 485,
    precoCompra: 56803481,
    precoVenda: 56803481 / 4,
    colecao: 'cdb',
    posicao: 'mei',
    imagem: "meio-ofensivo/485-alex-santana.png"
  },
  {
    nome: "Svilar",
    habilidade: 485,
    precoCompra: 56803481,
    precoVenda: 56803481 / 4,
    colecao: 'viloes',
    posicao: 'gol',
    imagem: "goleiro/485-svilar.png"
  },
  {
    nome: "Pedro Henrique",
    habilidade: 486,
    precoCompra: 67653855,
    precoVenda: 67653855 / 4,
    colecao: 'viloes',
    posicao: 'zag',
    imagem: "zagueiro/486-pedro-henrique.png"
  },
  {
    nome: "Walter",
    habilidade: 488,
    precoCompra: 67653855,
    precoVenda: 67653855 / 4,
    colecao: 'estadual',
    posicao: 'gol',
    imagem: "goleiro/488-walter.png"
  },
  {
    nome: "Roger Guedes",
    habilidade: 485,
    precoCompra: 56803481,
    precoVenda: 56803481 / 4,
    colecao: 'estadual',
    posicao: 'pe',
    imagem: "ponta-esquerda/485-roger-guedes.png"
  },
  {
    nome: "Harlei",
    habilidade: 489,
    precoCompra: 71713086,
    precoVenda: 71713086/ 4,
    colecao: 'legends',
    posicao: 'gol',
    imagem: "goleiro/489-harlei.png"
  },
  {
    nome: "Gil Baiano",
    habilidade: 491,
    precoCompra: 80576824,
    precoVenda: 80576824 / 4,
    colecao: 'legends',
    posicao: 'ld',
    imagem: "lateral-direito/491-gil-baiano.png"
  },
  {
    nome: "Rafael Sobis",
    habilidade: 494,
    precoCompra: 95968286,
    precoVenda: 95968286 / 4,
    colecao: 'legends',
    posicao: 'pe',
    imagem: "ponta-esquerda/494-rafael-sobis.png"
  },
  {
    nome: "Paulo Futre",
    habilidade: 496,
    precoCompra: 107829967,
    precoVenda: 107829967 / 4,
    colecao: 'legends',
    posicao: 'pe',
    imagem: "ponta-esquerda/496-paulo-futre.png"
  },
  {
    nome: "Ricardinho",
    habilidade: 497,
    precoCompra: 114299765,
    precoVenda: 114299765 / 4,
    colecao: 'legends',
    posicao: 'vol',
    imagem: "volante/497-ricardinho.png"
  },
  {
    nome: "Beijoca",
    habilidade: 498,
    precoCompra: 121157751,
    precoVenda: 121157751 / 4,
    colecao: 'legends',
    posicao: 'ca',
    imagem: "centro-avante/498-beijoca.png"
  },
  {
    nome: "Felipe Maestro",
    habilidade: 499,
    precoCompra: 128427216,
    precoVenda: 128427216 / 4,
    colecao: 'legends',
    posicao: 'mei',
    imagem: "meio-ofensivo/499-felipe-maestro.png"
  },
  {
    nome: "Leonardo Silva",
    habilidade: 522,
    precoCompra: 306202463,
    precoVenda: 306202463 / 4,
    colecao: 'legends',
    posicao: 'zag',
    imagem: "zagueiro/522-leonardo-silva.png"
  },
  {
    nome: "Leo Moura",
    habilidade: 501,
    precoCompra: 143863286 ,
    precoVenda: 143863286  / 4,
    colecao: 'legends',
    posicao: 'ld',
    imagem: "lateral-direito/501-leo-moura.png"
  },
  {
    nome: "Leo",
    habilidade: 500,
    precoCompra: 136132849 ,
    precoVenda: 136132849  / 4,
    colecao: 'legends',
    posicao: 'le',
    imagem: "lateral-esquerdo/500-leo.png"
  },
  {
    nome: "Lugano",
    habilidade: 500,
    precoCompra: 136132849,
    precoVenda: 136132849 / 4,
    colecao: 'legends',
    posicao: 'zag',
    imagem: "zagueiro/500-lugano.png"
  },
  {
    nome: "Thiago Neves",
    habilidade: 503,
    precoCompra: 159324160,
    precoVenda: 159324160 / 4,
    colecao: 'legends',
    posicao: 'mei',
    imagem: "meio-ofensivo/503-thiago-neves.png"
  },
  {
    nome: "Elano",
    habilidade: 504,
    precoCompra: 167054597,
    precoVenda: 167054597 / 4,
    colecao: 'legends',
    posicao: 'mc',
    imagem: "meio-central/504-elano.png"
  },
  {
    nome: "Ronaldo Luis",
    habilidade: 505,
    precoCompra: 174785034,
    precoVenda: 174785034 / 4,
    colecao: 'legends',
    posicao: 'le',
    imagem: "lateral-esquerdo/505-ronaldo-luis.png"
  },
  {
    nome: "Ronaldo",
    habilidade: 504,
    precoCompra: 167054597,
    precoVenda:  167054597/ 4,
    colecao: 'legends',
    posicao: 'gol',
    imagem: "goleiro/504-ronaldo.png"
  },
  {
    nome: "Oseas",
    habilidade: 504,
    precoCompra: 167054597,
    precoVenda: 167054597 / 4,
    colecao: 'legends',
    posicao: 'ca',
    imagem: "centro-avante/504-oseas.png"
  },
  {
    nome: "Conca",
    habilidade: 506,
    precoCompra: 182515471,
    precoVenda: 182515471 / 4,
    colecao: 'legends',
    posicao: 'mc',
    imagem: "meio-central/506-conca.png"
  },
  {
    nome: "Luis Fabiano",
    habilidade: 509,
    precoCompra: 205706782,
    precoVenda: 205706782 / 4,
    colecao: 'legends',
    posicao: 'ca',
    imagem: "centro-avante/509-luis-fabiano.png"
  },
  {
    nome: "Indio",
    habilidade: 509,
    precoCompra: 205706782,
    precoVenda: 205706782 / 4,
    colecao: 'legends',
    posicao: 'zag',
    imagem: "zagueiro/509-indio.png"
  },
  {
    nome: "Alex",
    habilidade: 510,
    precoCompra:  213437219,
    precoVenda:  213437219 / 4,
    colecao: 'legends',
    posicao: 'mei',
    imagem: "meio-ofensivo/510-alex.png"
  },
  {
    nome: "Ricardo Carvalho",
    habilidade: 513,
    precoCompra: 236628530,
    precoVenda: 236628530 / 4,
    colecao: 'legends',
    posicao: 'zag',
    imagem: "zagueiro/513-ricardo-carvalho.png"
  },
  {
    nome: "Paulo Baier",
    habilidade: 513,
    precoCompra: 236628530,
    precoVenda: 236628530 / 4,
    colecao: 'legends',
    posicao: 'mei',
    imagem: "meio-ofensivo/513-paulo-baier.png"
  },
  {
    nome: "Roger Machado",
    habilidade: 515,
    precoCompra: 252089404,
    precoVenda: 252089404 / 4,
    colecao: 'legends',
    posicao: 'le',
    imagem: "lateral-esquerdo/515-roger-machado.png"
  },
  {
    nome: "Loco Abreu",
    habilidade: 515,
    precoCompra: 252089404,
    precoVenda: 252089404 / 4,
    colecao: 'legends',
    posicao: 'ca',
    imagem: "centro-avante/515-loco-abreu.png"
  },
  {
    nome: "Jose Aguas",
    habilidade: 517,
    precoCompra: 267550278,
    precoVenda: 267550278 / 4,
    colecao: 'legends',
    posicao: 'ca',
    imagem: "centro-avante/517-jose-aguas.png"
  },
  {
    nome: "Darnlei",
    habilidade: 517,
    precoCompra: 267550278,
    precoVenda: 267550278 / 4,
    colecao: 'legends',
    posicao: 'gol',
    imagem: "goleiro/517-darnlei.png"
  },
  {
    nome: "Fernando Gomes",
    habilidade: 518,
    precoCompra: 275280715,
    precoVenda: 275280715 / 4,
    colecao: 'legends',
    posicao: 'ca',
    imagem: "centro-avante/518-fernando-gomes.png"
  },
  {
    nome: "Sorin",
    habilidade: 518,
    precoCompra: 275280715,
    precoVenda: 275280715 / 4,
    colecao: 'legends',
    posicao: 'le',
    imagem: "lateral-esquerdo/518-sorin.png"
  },
  {
    nome: "Leandro",
    habilidade: 519,
    precoCompra: 283011152,
    precoVenda: 283011152 / 4,
    colecao: 'legends',
    posicao: 'ld',
    imagem: "lateral-direito/519-leandro.png"
  },
  {
    nome: "Emerson Sheik",
    habilidade: 522,
    precoCompra: 306202463,
    precoVenda: 306202463 / 4,
    colecao: 'legends',
    posicao: 'pe',
    imagem: "ponta-esquerda/522-emerson-sheik.png"
  },
  {
    nome: "Marcos Assunção",
    habilidade: 524,
    precoCompra: 321663337,
    precoVenda: 321663337 / 4,
    colecao: 'legends',
    posicao: 'vol',
    imagem: "volante/524-marcos-assuncao.png"
  },
  {
    nome: "Jefferson",
    habilidade: 525,
    precoCompra: 329393774,
    precoVenda: 329393774 / 4,
    colecao: 'legends',
    posicao: 'gol',
    imagem: "goleiro/525-jefferson.png"
  },
  {
    nome: "Roque Junior",
    habilidade: 531,
    precoCompra: 375776396,
    precoVenda: 375776396 / 4,
    colecao: 'legends',
    posicao: 'zag',
    imagem: "zagueiro/531-roque-junior.png"
  },
];

// Função para ordenar as cartas pela habilidade (maior para menor)
function ordenarCartasPorHabilidade() {
  cartas.sort((a, b) => b.habilidade - a.habilidade);
}

function filtrarCartasPorPosicao(posicao) {
  return cartas.filter(carta => carta.posicao === posicao);
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
    colecaoElemento.textContent = `${carta.colecao}`;

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

// Ordenar as cartas pela habilidade antes de exibi-las
ordenarCartasPorHabilidade();

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

const ca = filtrarCartasPorPosicao("ca");
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

function verificarTeclaEnter(event) {
  if (event.key === "Enter") {
    filtrarJogadores();
  }
}

const ofensivoPesquisa = document.getElementById("termo-pesquisa");
const botaoPesquisa = document.getElementById("botao-pesquisa");

ofensivoPesquisa.addEventListener("keydown", verificarTeclaEnter);
botaoPesquisa.addEventListener("click", filtrarJogadores);