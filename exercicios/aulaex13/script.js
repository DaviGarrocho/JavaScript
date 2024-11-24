
function contar(){
    let n = document.getElementById('num')

    let f = document.getElementById('fim')

    let p = document.getElementById('pas')

    let r = document.getElementById('res')

    if(n.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        r.innerHTML = 'Impossivel contar!'
        //alert('[ERROR] faltam dados carai')
    }else{
        r.innerHTML = '<p id="con">Contando... </p> <br>'
        let n= Number(num.value)
        let f= Number(fim.value)
        let p= Number(pas.value)

        if (p <= 0){
            alert('passo inválido! considerando que passo e 1')
            p = 1
        }

        if(n < f){
            //contagem crescente
            for (let i = n; i <= f; i += p){
            r.innerHTML += `${i} \u{1F449}`
            }
            r.innerHTML += `\u{1F3C1}`
        }else{
            //contagem regressiva
            for(let c = n; c>= f; c -=p){
                r.innerHTML += `${c} \u{1F449}`
            }
            r.innerHTML += `\u{1F3C1}`
        }
        

        

    }



    
    
    
    
}


