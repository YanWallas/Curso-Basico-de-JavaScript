let num = [5,8,2,9,3]
num.push(1) // coloca mais uma variavel no final(criando outro vetor)
num.sort() // coloca em ordem (crescente)
console.log(`Nosso vetor é o ${num}`)// mostra todos as variaveis
console.log(`O vetor tem ${num.length} posições`) // mostra quantas variaveis tem
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra a variavel da posição 
console.log(num[0]) // mostra apenas o vetor selecionado

for(let pos=0;pos<num.length;pos++) { // repetição sem ter que escrever varias linha para mostrar varios vetores
    console.log(num[pos])
}

let pos = num.indexOf(8) // mostra em qual posição esta o numero 8
if (pos == -1){
    console.log(`O valor não foi encontrado!`)
} else {
console.log(`O valor 8 está na posição ${pos}`)
}

/*let pos = num.indexOf(7) // mostra -1 para indicar que nao tem o vetor 7 na variavel
console.log(`O valor 8 está na posição ${pos}`)*/