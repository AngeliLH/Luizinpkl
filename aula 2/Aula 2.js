// Definição de variáveis
// var copo = "cafézinho";

// const pi = 3.144565546321
// console.log(pi)


// {
  // let copo = "cafézinho";
  // console.log(copo);
// }

// Laço de repetição

// let idade = 15;
// console.log(idade);
// idade = idade + 1;
// console.log(idade);

// for (let passo = 0; passo < 5; passo ++) {
//   console.log("De um passo para o leste");
// }

// var respostaDoUsuario

// let respostaDoUsuario;
// for (let numero = 3; numero > 0; numero--) {
//   respostaDoUsuario = prompt("Qual o dobro de " + numero + "?");
// }
// console.log(respostaDoUsuario);


// Exercício 1
// var nota1 = parseInt(prompt("nota 1"))

// var nota2 = parseInt(prompt("nota 2"))

// var nota3 = parseInt(prompt("nota 3"))

// var nota4 = parseInt(prompt("nota 4"))

// let soma = nota1 + nota2 + nota3 + nota4
// console.log(soma)
// let media = soma/4
// console.log(media);

// Exercício 2
let quilo = parseInt(prompt("Quantos quilos de peixe deu?"));
if (quilo > 50){
  console.log(prompt("Você terá que pagar multa por excesso de peso, aperte a tecla ENTER para proseguir."))
  let pesoExcesso = quilo - 50
  console.log(" A multa será de: " + pesoExcesso*4 + " reais.")
} else {
  console.log("Você nao terá que pagar multa por excesso de peso.")
}
