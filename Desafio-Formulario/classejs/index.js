document.addEventListener('DOMContentLoaded', function(){
    let horas = new Date().getHours()
    let horario = new Date().getHours()
    let minuto = new Date().getMinutes()
    window.document.getElementById('horario').innerHTML = `${horario + ":" + minuto}`
    horas = 1
    if(horas >= 0 && horas <= 12){
        window.document.getElementsByTagName('body')[0].style.background = '#00b01a84'
        window.document.getElementsByTagName('div')[0].style.background = '#006c10'
        window.document.getElementById('paisagem').src = '../recursos/imgs/paisagem-manha.jpg';
    }else if(horas > 12 && horas <= 18){
        window.document.getElementsByTagName('body')[0].style.background = '#C48E59'
        window.document.getElementsByTagName('div')[0].style.background = '#CE0000'
        window.document.getElementById('paisagem').src = '../recursos/imgs/paisagem-tarde.jpg';
    }else{
        window.document.getElementsByTagName('body')[0].style.background = '#001964'
        window.document.getElementsByTagName('div')[0].style.background = '#255EAC'
        window.document.getElementById('paisagem').src = '../recursos/imgs/paisagem-noite.jpg';
    }
})

function enviarform(){
    let nome = window.document.getElementById('nome').value;
    let idade = window.document.getElementById('idade').value;
    let email = window.document.getElementById('email').value;
    let senha = window.document.getElementById('senha').value;
    let sexo = window.document.querySelector('.sexo').value;
    let paisorigem = window.document.getElementById('pais-origem').value;
    
    if(nome != "" && Number(idade) != null && email != "" && senha != "" && paisorigem != "" && sexo != ""){              
             window.document.getElementById('resposta').innerHTML = `<div id="estilojs">
                 Olá, ${nome}! Você tem ${idade} de idade, cujo Email é ${email} com a senha
                "<span id="estilo-borrado">${senha}</span>". Seu sexo é ${sexo} com um tipo de nacionalidade ${paisorigem}
             </div>.`;
    }else{
        window.document.getElementById('resposta').innerHTML = `Responda o formulário corretamente`
    }
}