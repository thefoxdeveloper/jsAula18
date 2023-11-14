// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados
const veiculos = [];
let escolha;
while (escolha != 6) {
  escolha = Number(
    prompt(
      alert(
        `Bem vindo ao Sistema de CRUD de veiculos: \nNo momento, o sistema tem ${veiculos.length} carros cadastrados\nEscolha uma das opções para interagir com o sistema:\n1 - Cadastrar veículo\n2 - Listar todos veículos\n3 - Filtrar veículos por marca\n4 - Atualizar veículo\n5 - Remover veículo\n6 - Sair do sistema`
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
      atualizar();
      break;
    case 5:
      remover();
      break;
    default:
      break;
  }
}

// Escolha uma das opções para interagir com o sistema:

function cadastrar() {
  const modelo = prompt("Digite o modelo do carro");
  const marca = prompt("Digite o marca do carro");
  const ano = prompt("Digite o ano do carro");
  const cor = prompt("Digite o cor do carro");
  const preco = prompt("Digite o preco do carro");

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
  let marcaFiltro = prompt("Qual marca gostaria de ver: ");
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
