// Exercício 1

// let valor1 = parseFloat(prompt("valor 1"))

// let valor2 = parseFloat(prompt("valor 2"))

// let valor3 = parseFloat(prompt("valor 3"))

// if (valor1 > valor2) {
//   if (valor1 > valor3) {
//     console.log("O valor 1: " + valor1 + " é o maior!")
//   } else {
//     console.log("O valor 3:" + valor3 + " é o maior!")
//   }
// } else if (valor2 > valor3) {
//   console.log("O valor 2: " + valor2 + " é o maior!")
// } else {
//   console.log("O valor 3: " + valor3 + " é o maior!")
// }

// if (valor1 > valor2 && valor1 < valor3 || valor1 < valor2 && valor1 > valor3) {
//   console.log("O valor1: " + valor1 + " é o mediano!")
// } else if (valor2 > valor1 && valor2 < valor3 ||  valor2 < valor1 && valor2 > valor3) {
//   console.log("O valor2:" + valor2 + " é o mediano!")
// } else {
//   console.log("O valor3:" + valor3 + " é o mediano!")
// }

// if (valor1 < valor2 && valor1 < valor3){
//   console.log("O valor 1: " + valor1 + " é o menor!")
// } else if (valor2 < valor3) {
//   console.log("O valor 2: " + valor2 + " é o menor!")
// } else {
//   console.log("O valor 3: " + valor3 + " é o menor!")
// }


// Exercício 2

let valor1 = parseFloat(prompt("valor 1"))
let valor2 = parseFloat(prompt("valor 2"))

if (valor1 == valor2) {
  console.log("Os valores: " + valor1 + " e " + valor2 + " são iguais!")
} else {
  console.log("Os valores: " + valor1 + " e " + valor2 + " não são iguais!")
}