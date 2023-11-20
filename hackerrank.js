function fib() {
  let count = 1;
  let anterior = 1;
  let soma = 0;

  while (count < 100) {
    console.log(anterior);
    soma += anterior;
    console.log(soma);
    anterior = soma + anterior;
    count++;
  }
}
fib();
