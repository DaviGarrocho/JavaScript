let num = [5, 8, 2, 9, 3]
num.sort()//organiza da forma crescente o vetor.

console.log(`Nosso vetor e o ${num}`)
num.push(6) //push e para adiconar uma casa no vetor
console.log(`AGORA E ${num}`)
console.log(num.length + ' e o numero de casas')//length e o numero de casas

console.log(num[0])//pra monstrar so um deles, o zero e o começo
console.log('////////////////////////////////////////////')

//pode colocar o while tambem pra repetir todas 

//pra isso e so mudar o indice com o while

for(let pos=0; pos<num.length; pos++){
    console.log(num[pos]) /*pronto, agora o pos e o indice e vai subir toda hora que repetir, com isso, meu amigo.... da pra fazer tudo*/
}

 console.log('////////////////////////////////////////////')
//o JavaScript tem uma coisa mais facil ainda.
    num.sort()
for(let pos in num){ //para cada posição em "num"
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //vou mostrar o "num" pos
}

console.log('////////////////////////////////////////////')


//pra buscar valores no vetor
let n = 9
if(num.indexOf(n) == -1){
    console.log('o valor nao foi encontrado')
}else{
console.log(`O valor ${n} esta na posição ${num.indexOf(n)}`) //oia o "O" maisculo do "Of", ele vai responder onde ta o valor, se nao tiver e -1
}
