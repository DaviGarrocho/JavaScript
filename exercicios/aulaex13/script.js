
function contar(){
    var n = Number(document.getElementById('num'))

    var f = Number(document.getElementById('fim'))

    var p = Number(document.getElementById('pas'))

var r = document.getElementById('res')

    
    r.innerHTML = '<p>Contando: </p> <br>'
    for (var i = n.value; i <= f.value; i += p.value){
       r.innerHTML = `${i} `
    }
    
}


