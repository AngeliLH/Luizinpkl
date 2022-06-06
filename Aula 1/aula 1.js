// IF
var precoProduto = prompt("Qual o preço?");
precoProduto = parseFloat(precoProduto);

var valorPago = prompt("Quanto você pagou?");
valorPago = parseFloat(valorPago);

if (valorPago == precoProduto) {
  console.log("Acerto miserável: Não há troco para vc!")
} else if (valorPago > precoProduto) {
  console.log("Há troco para vc!")
} else {
  console.log("Falta dinheiro seu mão de vaca!")
}




  
// string -> Texto
// int/number -> inteiro
// float -> decimal
// object -> objeto
// array -> lista
