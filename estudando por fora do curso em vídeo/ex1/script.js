function calc(){
let opr = document.getElementById('ope').value
let n1 = document.getElementById('nu')
let n2 = document.getElementById('nd')
let res = document.getElementById('res')



if(opr == '+'){
    res.innerHTML = (Number(n1.value)+Number(n2.value)) 

}
else if(opr == '-'){
    res.innerHTML = (Number(n1.value)-Number(n2.value))
    
}
else if(opr == '*'){
    res.innerHTML = (Number(n1.value)*Number(n2.value))
   
}
else if(opr == '/'){
    res.innerHTML = (Number(n1.value)/Number(n2.value))
    
}else{
    res.innerHTML = ('safado, para de adicionar coisas no site e nao consigurar direito')
    
}


    
}


