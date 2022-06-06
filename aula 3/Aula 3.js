// for (let i = 1; i <= 10; i++){
//   console.log("Olá, pela " + i + "ª vez!");
// }

// let a = 0;
// let b = 1;

// while (a + b < 1000){
// let c = b;
// b = a +b;
// a = c;
// console.log(b);
// }



let segredo = Math.floor(Math.random() * 10);
let jogando = true;

while (jogando) {
  let palpite = prompt("Qual o seu palpite?");
  palpite = parseInt(palpite);
  
  if (palpite == segredo) {
    console.log("Parábens, vc acertou!");
    jogando = false;
  } else if (palpite > segredo){
    console.log("Diminua o seu palpite.")
  } else {
    console.log("Aumente o seu palpite.")
  }
}
