
// Exercício 02
let valor1 = parseFloat(prompt("valor 1"))

let valor2 = parseFloat(prompt("valor 2"))

let valor3 = parseFloat(prompt("valor 3"))

let valor4 = parseFloat(prompt("valor 4"))

let valor5 = parseFloat(prompt("valor 5"))

if (valor1 < valor2 && valor1 < valor3 && valor1 < valor4 && valor1 < valor5) {
  console.log("O valor 1 é o menor de todos!")

} else if (valor2 < valor3 && valor2 < valor4 && valor2 < valor5) {
  console.log("O valor 2 é o menor de todos!")
} else if (valor3 < valor4 && valor3 < valor5) {
  console.log("O valor 3 é o menor de todos!")
} else if (valor4 < valor5) {
  console.log("O valor 4 é o menor de todos!")
} else {
  console.log("O valor 5 é o menor de todos!")
}



let minimoValor = parseFloat(prompt("Insira o valor 1"))
for (let i = 2; i <= 5; i++) {
  let novoValor = parseFloat(prompt("Insira um valor " + i))
  if (novoValor < minimoValor) {
    minimoValor = novoValor
  }
}
console.log("O menor valor é o " + minimoValor)



 // let valor1 = parseFloat(prompt("valor 1"))

// let valor2 = parseFloat(prompt("valor 2"))

// let valor3 = parseFloat(prompt("valor 3"))

// let valor4 = parseFloat(prompt("valor 4"))

// let valor5 = parseFloat(prompt("valor 5"))

// if (valor1 < valor2 && valor1 < valor3 && valor1 < valor4 && valor1 < valor5) {
//   console.log("O valor 1 é o menor de todos!")

// } else if (valor2 < valor3 && valor2 < valor4 && valor2 < valor5) {
//   console.log("O valor 2 é o menor de todos!")
// } else if (valor3 < valor4 && valor3 < valor5) {
//   console.log("O valor 3 é o menor de todos!")
// } else if (valor4 < valor5) {
//   console.log("O valor 4 é o menor de todos!")
// } else {
//   console.log("O valor 5 é o menor de todos!")
// }



let minimoValor = parseFloat(prompt("Insira o valor 1"))
for (let i = 2; i <= 5; i++) {
  let novoValor = parseFloat(prompt("Insira um valor " + i))
  if (novoValor < minimoValor) {
    minimoValor = novoValor
  }
}
console.log("O menor valor é o " + minimoValor)