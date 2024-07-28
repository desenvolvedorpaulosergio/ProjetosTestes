function acaoEquiv(){
    if(document.getElementById('configNav').style.display == "block"){
        window.document.getElementById('configNav').style.display = 'none'
    }else{
        window.document.getElementById('configNav').style.display = 'block'
    }
}

//<body onresize="tamanhoBody()"> Disparará uma ação dependente do Width do Body
function tamanhoBody(){
    if(window.innerWidth > 760){
        window.document.getElementById('configNav').style.display = `block`
    }else{
        window.document.getElementById('configNav').style.display = `none`
    }
}