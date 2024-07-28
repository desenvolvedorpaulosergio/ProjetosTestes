var ativado = 1
function acaoEquiv(){
    let estiloEquiv = window.document.getElementById('estiloEquiv')
    let lista = window.document.querySelectorAll('li')
    if(ativado == 1){
        lista.forEach(function(lista){
            lista.style.display = `block`
        })
        ativado++
    }else if(ativado == 2){
        lista.forEach(function(lista){
            lista.style.display = `none`
        })
        ativado--
    }      
}
