/* 
# Exercício 3

Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:


**Utilize o for...of para resolver**
```jsx
//entrada
const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

//saída
"1 - Rússia"
"2 - Canadá"
"3 - China"
"4 - EUA"
"5 - Brasil"
*/

const arrayIdadePets = ['Teka', 'Luna', 'Minerva', 'Luísa Mel', 'MinnieMae', 'Pequena', 'Aurora', 'Madalena']
for(let a in arrayIdadePets){
     let ranking = `${Number(a) + 1}º - `
    for(idadePets of arrayIdadePets){
        console.log(`${ranking}${arrayIdadePets[a]}`)
      
}

}
 