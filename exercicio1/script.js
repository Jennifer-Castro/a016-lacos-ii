const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

/*
# Exercício 1

Um analista quer conseguir ver quantos gols cada um de seus 5 atacantes marcou nas últimas 5 temporadas, e quer que você construa um código que mostre isso.

Crie um laco `for` que itere pelo array deixado no arquivo `script.js`, e em sequência itere pelo array que existe dentro do primeiro array. Você deve imprimir a temporada, e o número de gols, como no exemplo abaixo:

```bash
Jogador 1: 13, 15, 25, 34, 35
Jogador 2: 30, 48, 30, 12, 47
*/

for(let a = 0; a < array.length; a++){
        for (let b = 0; b < array[a].length; b++)
        console.log(`Jogador ${a+1}\nGols de cada temporada:${array[b]}`)
   }


// if(array === 4){
//     for(let a in array) {
//         for(let b of array[a])
//         console.log(`Jogador ${a+1}\ngols:${array[b]}`)
//     }


// if (megaSena.length === 4) {
//     for (let i = 0; i < megaSena.length; i++) {
//       let sorteio = `Sorteio ${i + 1}: `
//       for (let j = 0; j < megaSena[i].length; j++) {
//               sorteio += `${megaSena[i][j]} `
//       }
//       console.log(sorteio)
//     }
//   } else {
//     console.log('É necessário alterar o número de itens do array')