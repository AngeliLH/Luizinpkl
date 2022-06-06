function Invert(vetor) {
  let vetorInvertido = []
for (let i = 1; i <= vetor.length; i++){
  vetorInvertido.push(vetor[vetor.length - i])
}
  return vetorInvertido
}

let test = ["Maria" , "joana" , "Lúcia"]
let a = inverte(test)

test = ["Maria" , "Joana" , "Lúcia" , "Marcia"]
Inverte(test)