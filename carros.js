// Example values for the properties
const modelos = ["Sedan", "SUV", "Hatchback", "Truck"];
const marcas = ["Toyota", "Ford", "Honda", "Chevrolet"];
const anos = [2020, 2021, 2022];
const cores = ["Red", "Blue", "Black", "White"];
const precos = [20000, 25000, 30000, 35000];

// Function to create a random veiculo object
const createRandomVeiculo = () => {
  const modelo = modelos[Math.floor(Math.random() * modelos.length)];
  const marca = marcas[Math.floor(Math.random() * marcas.length)];
  const ano = anos[Math.floor(Math.random() * anos.length)];
  const cor = cores[Math.floor(Math.random() * cores.length)];
  const preco = precos[Math.floor(Math.random() * precos.length)];

  return {
    id: (Math.random() * 100).toFixed(0),
    modelo,
    marca,
    ano,
    cor,
    preco,
  };
};

// Create 10 veiculo objects
const veiculos = Array.from({ length: 10 }, createRandomVeiculo);

// Log the array of veiculos
console.log(veiculos);
