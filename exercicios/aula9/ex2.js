var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log('Bom Dia!')
}else if(hora <= 17){
    console.log('Boa Tarde!')

}else{
    console.log('Boa Noite!')
}