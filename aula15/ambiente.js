let num = [5, 8, 2, 9, 3]
num[5] = 10 //desse jeito, serve pra você por um número onde quiser.
num.push(22) //push serve pra por o número no final.
console.log(`Nosso vetor é o ${num}`)
console.log(`O tamanho desse vetor é de ${num.length} números.`) //num.length serve pra medir o tamanho.
/*console.log(`Esse vetor em ordem crescente fica assim: ${num.sort()}`)//num.sort serve pra por em ordem crescente. */
console.log(`O primeiro valor é o ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`O valor 3 está na posição ${pos}`)
}
