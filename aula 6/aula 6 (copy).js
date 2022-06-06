console.log("### Calculadora ###")
console.log("Selecione uma opção abaixo:")
console.log("1 - Soma.")
console.log("2 - Subtração.")
console.log("3 - Multiplicação.")
console.log("4 - Divisão.")
console.log("5 - Sair.")



let opcao = prompt("\nOpção")
if (opcao == 5) {
  console.log("Calculadora fechada!")
}

let valor1 = parseFloat(prompt("Insira o valo 1"))
let valor2 = parseFloat(prompt("Insira o valor 2"))


if (opcao == 1) {
  console.log(soma(valor1, valor2))
} else if (opcao == 2) {
  console.log(subtracao(valor1, valor2))
} else if (opcao == 3) {
  console.log(multiplicacao(valor1, valor2))
} else if (opcao == 4) {
  console.log(divisao(valor1, valor2))
}

function soma(a, b) {
  let soma = a + b
  return soma;
}

function subtracao(a, b) {
  let subtracao = a - b
  return subtracao
}

function multiplicacao(a, b) {
  let multiplicacao = a * b
  return multiplicacao
}

function divisao(a, b) {
  let divisao = a / b
  return divisao
}
