function lonelyinteger(a) {
  let antiga = [...a];
  for (let i = 0; i <= antiga.length; i++) {
    let count = 0;

    let verificador = antiga[i];

    antiga.splice(i, 1);
    console.log("antiga ", antiga);

    for (let n = 0; n <= a.length; n++) {
      if (verificador == a[n]) {
        count++;
        console.log("achei");
      }
    }
    if (count == 0) {
      console.log(verificador);
    }
  }
}
let arr = [0, 0, 1, 2, 1];
lonelyinteger(arr);
