const botao1 = document.createElement('button')
const botao2 = document.createElement('button')
const botao3 = document.createElement('button')


// .active {
    // background-color: laranjado;
// }

let botaoativo = null



botao1.onclick(() => exibeBotaoAtivo(botao1))

function exibeBotaoAtivo (botao){
    botaoativo = botao

    botao1.classList.remove('active')
    botao2.classList.remove('active')
    botao3.classList.remove('active')
    
    botao.classList.add('active')


}