// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados
const veiculos = [
  {
    id: "61",
    modelo: "TRUCK",
    marca: "FORD",
    ano: 2021,
    cor: "WHITE",
    preco: 35000,
  },
  {
    id: "74",
    modelo: "SUV",
    marca: "TOYOTA",
    ano: 2022,
    cor: "WHITE",
    preco: 20000,
  },
  {
    id: "2",
    modelo: "TRUCK",
    marca: "HONDA",
    ano: 2022,
    cor: "BLUE",
    preco: 35000,
  },
  {
    id: "17",
    modelo: "HATCHBACK",
    marca: "TOYOTA",
    ano: 2022,
    cor: "BLACK",
    preco: 30000,
  },
  {
    id: "27",
    modelo: "TRUCK",
    marca: "FORD",
    ano: 2021,
    cor: "RED",
    preco: 35000,
  },
  {
    id: "12",
    modelo: "TRUCK",
    marca: "CHEVROLET",
    ano: 2021,
    cor: "BLACK",
    preco: 30000,
  },
  {
    id: "76",
    modelo: "HATCHBACK",
    marca: "CHEVROLET",
    ano: 2021,
    cor: "BLUE",
    preco: 25000,
  },
  {
    id: "58",
    modelo: "SUV",
    marca: "FORD",
    ano: 2020,
    cor: "RED",
    preco: 30000,
  },
  {
    id: "78",
    modelo: "TRUCK",
    marca: "TOYOTA",
    ano: 2020,
    cor: "WHITE",
    preco: 200000,
  },
  {
    id: "41",
    modelo: "HATCHBACK",
    marca: "FORD",
    ano: 2022,
    cor: "BLACK",
    preco: 25000,
  },
];
let escolha;
while (escolha != 13) {
  escolha = Number(
    prompt(
      alert(
        `Bem vindo ao Sistema de CRUD de veiculos: \nNo momento, o sistema tem ${veiculos.length} carros cadastrados\nEscolha uma das opções para interagir com o sistema:\n1 - Cadastrar veículo\n2 - Listar todos veículos\n3 - Filtrar veículos por marca\n4 - Filtrar veículos por preço\n5 - Atualizar veículo\n6 - Remover veículo\n7 - Encontrar veiculo mais caro\n8 - Media de valores dos carros\n9 - Listar em forma alfabetica\n10 - Listar por Marcas\n11 - Carros por cores\n12 - Filtro Completo\n13 - Sair`
      )
    )
  );
  switch (escolha) {
    case 1:
      cadastrar();
      break;
    case 2:
      listar(veiculos);
      break;
    case 3:
      filtrar();
      break;
    case 4:
      filtrarPrice();
      break;
    case 5:
      atualizar();
      break;
    case 6:
      remover();
      break;
    case 7:
      encontrarCarroMaisCaro(veiculos);
      break;
    case 8:
      mediaCarros(veiculos);
      break;

    case 9:
      listarAlfabetica(veiculos);
      break;
    case 10:
      listarMarcas(veiculos);
      break;
    case 11:
      carrosCor(veiculos);
      break;
    case 12:
      filtrarTudo();
    default:
      break;
  }
}

// Escolha uma das opções para interagir com o sistema:

function cadastrar() {
  const modelo = prompt("Digite o modelo do carro").toUpperCase();
  const marca = prompt("Digite o marca do carro").toUpperCase();
  const ano = prompt("Digite o ano do carro").toUpperCase();
  const cor = prompt("Digite o cor do carro").toUpperCase();
  const preco = prompt("Digite o preco do carro").toUpperCase();

  const veiculo = {
    id: (Math.random() * 100).toFixed(0),
    modelo,
    marca,
    ano,
    cor,
    preco,
  };
  veiculos.push(veiculo);
  console.log(veiculos);
}
function formatar(veiculo) {
  return (
    "ID: " +
    veiculo.id +
    " | Modelo: " +
    veiculo.modelo +
    " | Marca: " +
    veiculo.marca +
    " | Ano: " +
    veiculo.ano +
    " | Cor: " +
    veiculo.cor +
    " | Preço: R$" +
    veiculo.preco.toLocaleString()
  );
}
function listar(veiculos) {
  veiculos.sort((a, b) => a.preco - b.preco);
  let mensagem = "";
  for (let i = 0; i < veiculos.length; i++) {
    mensagem += formatar(veiculos[i]) + "\n";
  }
  alert(mensagem);
}
function filtrar() {
  let marcaFiltro = prompt("Qual marca gostaria de ver: ").toUpperCase();
  let filtrados = veiculos.filter((x) => x.marca == marcaFiltro);
  listar(filtrados);
}

function atualizar() {
  listar(veiculos);
  let idzinho = Number(prompt("Digite o ID do carro: "));
  if (veiculos.some((x) => x.id == idzinho)) {
    let veiculoId = veiculos.findIndex((x) => x.id == idzinho);
    console.log(veiculoId);
    veiculos[veiculoId].cor = prompt("Digite a nova cor: ");
    veiculos[veiculoId].preco = Number(prompt("Digite o novo preço: "));
  } else {
    console.log("Veículo, não encontrado.");
  }
}
function remover() {
  listar(veiculos);
  let idzinho = Number(prompt("Digite o ID do carro: "));
  if (veiculos.some((x) => x.id == idzinho)) {
    let indexParaRemover = veiculos.findIndex((x) => x.id == idzinho);
    veiculos.splice(indexParaRemover, 1);
    alert("Veiculo removido");
  } else {
    alert("Veículo, não encontrado.");
  }
}
// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

// 6 - Sair do sistema

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco

// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

// Filtrar Carros por Faixa de Preço: Crie uma função que recebe dois argumentos, preço mínimo e preço máximo, e retorna todos os carros cujo valor está dentro desta faixa.
function filtrarPrice(pricemin, pricemax) {
  listar(veiculos);
  pricemin = Number(prompt("Qual valor minimo gostaria de ver: "));
  pricemax = Number(prompt("Qual valor maximo gostaria de ver: "));

  let filtrados = veiculos.filter(
    (x) => x.preco <= pricemax && x.preco >= pricemin
  );
  listar(filtrados);
}
// Encontrar o Carro Mais Caro: Utilize métodos de array para encontrar o carro mais caro do array.
function encontrarCarroMaisCaro(veiculos) {
  veiculos.sort((a, b) => b.preco - a.preco);
  let mensagem = "";

  mensagem += formatar(veiculos[0]) + "\n";

  alert(mensagem);
}
// Agrupar Carros por Marca: Escreva uma função que agrupe carros por marca e retorne um objeto cujas chaves são os nomes das marcas e os valores são arrays de carros dessa marca.
function listarMarcas(veiculos) {
  veiculos.sort((a, b) => a.marca.localeCompare(b.marca));
  let mensagem = "";
  for (let i = 0; i < veiculos.length; i++) {
    mensagem += formatar(veiculos[i]) + "\n";
  }
  alert(mensagem);
}
// Calcular a Média de Preço dos Carros: Implemente uma função que calcule e retorne a média de preço de todos os carros da lista.
function mediaCarros(veiculos) {
  let soma = 0;
  for (let index = 0; index < veiculos.length; index++) {
    soma += veiculos[index].preco;
  }
  alert(
    "A soma da media dos carros é R$" +
      (soma / veiculos.length).toLocaleString()
  );
}
// Listar Carros por Ordem Alfabética: Desenvolva uma função que retorne os carros ordenados alfabeticamente por modelo.
function listarAlfabetica(veiculos) {
  veiculos.sort((a, b) => a.modelo.localeCompare(b.modelo));
  let mensagem = "";
  for (let i = 0; i < veiculos.length; i++) {
    mensagem += formatar(veiculos[i]) + "\n";
  }
  alert(mensagem);
}
// Contar Carros por Cor: Elabore uma função que conte quantos carros de cada cor existem na lista e retorne um objeto com esta contagem.
function carrosCor(veiculos) {
  let contagem = {};
  let mensagem = "";
  for (let i = 0; i < veiculos.length; i++) {
    let carro = veiculos[i];
    if (carro.cor in contagem) {
      contagem[carro.cor]++;
    } else {
      contagem[carro.cor] = 1;
    }
  }
  for (let cores in contagem) {
    mensagem += `Cor: ${cores}, Quantidade: ${contagem[cores]}\n`;
  }
  alert(mensagem);
}
// Converter Array para String: Crie uma função que converte o array de carros em uma string formatada, listando os detalhes de cada carro.
// Já existe Listar()
// Buscar Carros por Características Específicas: Implemente uma função que permite buscar carros por múltiplos critérios, como cor, marca, ano, etc. Como se fosse uma barra de pesquisa.
function filtrarTudo() {
  let filtro;
  let filtrados = veiculos.slice(); 

  while (filtro !== 5) {
    filtro = Number(
      prompt(
        "Selecione os filtros que quer usar\n1- Cor\n2- Marca\n3- Ano\n4- Preço\nPara finalizar, digite 5"
      )
    );

    switch (filtro) {
      case 1:
        let corFiltro = prompt("Qual cor gostaria de ver: ").toUpperCase();
        filtrados = filtrados.filter((x) => x.cor === corFiltro);
        break;

      case 2:
        let marcaFiltro = prompt("Qual marca gostaria de ver: ").toUpperCase();
        filtrados = filtrados.filter((x) => x.marca === marcaFiltro);
        break;

      case 3:
        let anoFiltro = prompt("Qual Ano gostaria de ver: ").toUpperCase();
        filtrados = filtrados.filter((x) => x.ano == anoFiltro);
        break;

      case 4:
        let precoFiltro = prompt("Qual cor gostaria de ver: ").toUpperCase();
        filtrados = filtrados.filter((x) => x.preco == precoFiltro);
        break;

      case 5:
        break;

      default:
        alert("Opção inválida. Tente novamente.");
        break;
    }
  }

  listar(filtrados);
}
