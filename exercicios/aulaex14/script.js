function calc(){
    let n = Number(document.getElementById('n').value)
    let tab  = document.getElementById('tab')
    

    tab.innerHTML = ''
    for(let c = 1;c<=10;c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item) 
    }


    
}