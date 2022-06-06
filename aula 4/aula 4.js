Exercício 1

// let valor1 = parseFloat(prompt("valor 1"))

// let valor2 = parseFloat(prompt("valor 2"))

// let valor3 = parseFloat(prompt("valor 3"))

// if(valor1 > valor2){
// if (valor1 > valor3){
//   console.log ("O valor 1 é o maior!")
// } else {
//   console.log ("O valor 3 é o maior!")
//  }
// } else if (valor2 > valor3){
//   console.log ("O valor 2 é o maior!")
// } else {
//   console.log ("O valor 3 é o maior!")
// }

let valor1 = parseFloat(prompt("valor 1"))

let valor2 = parseFloat(prompt("valor 2"))

let valor3 = parseFloat(prompt("valor 3"))

if (valor1 > valor2) {
  if (valor1 > valor3) {
    console.log("O valor 1: " + valor1 + " é o maior!")
  } else {
    console.log("O valor 3 é o maior!")
  }
} else if (valor2 > valor3) {
  console.log("O valor 2 é o maior!")
} else {
  console.log("O valor 3 é o maior!")
}

Exercício 2

let respondendo = true
while (respondendo) {

  let turno = prompt("Olá! Em qual turno vc estuda?")

  if (turno == "manha") {
    console.log("Bom dia! Seja muito bem vindo(a).")
    respondendo = false
  }

  else if (turno == "tarde") {
    console.log("Boa tarde! Seja muito bem vindo(a).")
    respondendo = false
  }

  else if (turno == "noite") {
    console.log("Boa noite! Seja muito bem vindo(a).")
    respondendo = false
  } else {
    console.log("Turno inválido, tente novamente.")
  }
}
