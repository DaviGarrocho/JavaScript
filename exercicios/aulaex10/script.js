function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`;

if(hora >= 0 && hora < 12){
    img.style.backgroundImage = 'url(estilos/imagens/manha.jpg)';
    document.body.style.backgroundColor = '#c09d6e';
}else if(hora >= 12 && hora < 18){
    img.style.backgroundImage = 'url(estilos/imagens/tarde.jpg)';
    document.body.style.backgroundColor = '#cf6339';
    
}else{
    img.style.backgroundImage = 'url(estilos/imagens/noite.jpg)';
    document.body.style.backgroundColor = '#071047';
}

}

