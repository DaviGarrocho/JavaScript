function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    var img = document.createElement('img') 
    img.setAttribute('id', 'foto')
    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
        window.alert('[ERROR] Verifique se a idade esta correta')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        if(fsex[0].checked){
            gen = 'homem'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'foto/bebem.jpg')
            }else if(idade < 21){
                img.setAttribute('src','foto/menino.jpg');
            }else if(idade < 50){
                 img.setAttribute('src','foto/adulto.jpg');
            }else{
                img.setAttribute('src','foto/idoso.jpg');
            }

        }else{
            gen = 'mulher'

            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'foto/bebef.jpg')
            }else if(idade < 21){
                img.setAttribute('src','foto/menina.jpg');
            }else if(idade < 50){
                 img.setAttribute('src','foto/adulta.jpg');
            }else{
                img.setAttribute('src','foto/idosa.jpg');
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}