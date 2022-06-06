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
// Receber dois valores e exibir se eles são iguais ou nao.

// let valor1 = parseFloat(prompt("valor 1"))
// let valor2 = parseFloat(prompt("valor 2"))

// if (valor1 == valor2) {
//   console.log("Os valores: " + valor1 + " e " + valor2 + " são iguais!")
// } else {
//   console.log("Os valores: " + valor1 + " e " + valor2 + " não são iguais!")
// }



// Exercício 3
// Receber um valor, tratá-lo e retomar se ele é par ou impar

// let jogando = true;
// while (jogando) {
// let valor1 = parseFloat(prompt("Digite o valor 1"))

// if (valor1%2 == 0) {
//   console.log("O valor " + valor1 + " é par!")
// } else {
//   console.log("O valor " + valor1 + " é impar!")
// }
// }



// Exercício 4
// Contar de 1 à 20, mostrando se o valor é par ou impar.

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " é par!");
//   } else {
//     console.log(i + " é impar!");
//   }
// }


// Exercício 5
// Receba um valor do usuário. Mostre a tabuada daquele valor

// let valor = parseFloat(prompt("Insira o número da tabuada que deseja saber"))

// for (let i = 1; i <= 10; i++) {
//   console.log(valor + " X " + i + " = " + valor * i )
// }


// Exercício 6
/*Em uma eleição para vereadores, existem quatro candidatos. Os votos são informados
por meio de código. Os códigos utilizados são:

1, 2, 3, 4 - Votos para os respectivos candidatos
(você deve montar a tabela ex: 1 - José/ 2 - João/etc)
5 - Voto Nulo
6 - Voto em Branco

Faça um programa que calcule e mostre:
O total de votos para cada candidato;
O total de votos nulos;
O total de votos em branco;
A porcentagem de votos nulos sobre o total de votos;
A porcentagem de todos os votos branco sobre o total de votos.
Quem venceu a eleição.*/

console.log("### Eleições ###")
console.log("Selecione o seu candidato:")
console.log("1 - José")
console.log("2 - João")
console.log("3 - Pedro")
console.log("4 - Ricardo")
console.log("5 - Voto Nulo.")
console.log("6 - Voto em Branco.")

let opcao = prompt("\nDigite a opção que deseja, e pressione ENTER para continuar")

if (opcao == 1) {
  console.log("Seu voto foi confirmado!")
} else if (opcao == 2) {
  console.log("Seu voto foi confirmado!")
} else if (opcao == 3) {
  console.log("Seu voto foi confirmado!")
} else if (opcao == 4) {
  console.log("Seu voto foi confirmado!")
} else if (opcao == 5) {
  console.log("Seu voto foi confirmado!")
} else if (opcao == 6) {
  console.log("Seu voto foi confirmado!")
}