const bodyDom = document.querySelector(`body`)
//------------------------------------------------


let itensNoCarrinho = []

function colocarNoCarrinho(produto){

    for(let i = 0; i < itensNoCarrinho.length; i++){
        if(itensNoCarrinho[i].nome === produto.nome){
            
        }
    }
    itensNoCarrinho.push(produto)
    console.log('itensnocarrinho', itensNoCarrinho.length);

    bodyDom.appendChild(criarAside())   
}


function removerDoCarrinho (produto) {

    for(let i = 0; i < itensNoCarrinho.length; i++){
        if(itensNoCarrinho[i].nome === produto.nome){
            itensNoCarrinho.pop(itensNoCarrinho[i])
        }
    }

    bodyDom.appendChild(criarAside())   
  }


//FUNÇÕES DE FILTRO

function filtrarHortifruti(arrayDeProdutos){
    let result = []

    for (let i = 0; i < arrayDeProdutos.length; i++) {
        const element = arrayDeProdutos[i];

        if(element.secao === 'Hortifruti')
            result.push(element)
    }
    criarLista(result)
    exibirBotaoAtivo(botaoFiltrarHortiFruti)
    return result
}

function filtrarPanificadora(arrayDeProdutos){
    let result = []

    for (let i = 0; i < arrayDeProdutos.length; i++) {
        const element = arrayDeProdutos[i];

        if(element.secao === 'Panificadora')
            result.push(element)
    }
    criarLista(result)
    exibirBotaoAtivo(botaoFiltrarPanificadora)
    return result
}

function filtrarLaticinios(arrayDeProdutos){
    let result = []

    for (let i = 0; i < arrayDeProdutos.length; i++) {
        const element = arrayDeProdutos[i];

        if(element.secao === 'Laticínio')
            result.push(element)
    }
    criarLista(result)
    exibirBotaoAtivo(botaoFiltrarLaticinios)
    return result
}



const botaoMostrarTodos = document.querySelector('.mostrarTodos')
botaoMostrarTodos.addEventListener('click', () => criarLista(produtos))

const botaoFiltrarHortiFruti = document.querySelector('.filtrarHortifruti')
botaoFiltrarHortiFruti.addEventListener('click', () => filtrarHortifruti(produtos))

const botaoFiltrarPanificadora = document.querySelector('.filtrarPanificadora')
botaoFiltrarPanificadora.addEventListener('click', () => filtrarPanificadora(produtos))

const botaoFiltrarLaticinios= document.querySelector('.filtrarLaticinios')
botaoFiltrarLaticinios.addEventListener('click', () => filtrarLaticinios(produtos))


let botaoAtivo = null

function exibirBotaoAtivo(botao) {
    botaoAtivo = botao

    botaoMostrarTodos.classList.remove("active")
    botaoFiltrarHortiFruti.classList.remove("active")
    botaoFiltrarPanificadora.classList.remove("active")
    botaoFiltrarLaticinios.classList.remove("active")

    console.log(botao)
    botao.classList.add("active")
    console.log(botao)
}





//CAMPO DE BUSCA
const input = document.querySelector('.campoBuscaPorNome')
console.log(input);


const botaoinput = document.querySelector('.botaoBuscarPorNome')
botaoinput.addEventListener('click', () => buscarPorProduto(input.value))
console.log(botaoinput);


//FILTRANDO POR NOME, SECÃO E CATEGORIA
// string => array []
function buscarPorProduto(nomeDoProduto){
    console.log('nome: ', nomeDoProduto);
    let result = []

    for (let i = 0; i < produtos.length; i++) {
        const element = produtos[i];

        if(element.nome.toLowerCase() === nomeDoProduto.toLowerCase() || element.secao.toLowerCase() === nomeDoProduto.toLowerCase()
        || element.categoria.toLowerCase() === nomeDoProduto.toLowerCase())
            result.push(element)
    }
    console.log('result: ', result);

    criarLista(result)  // executa quando clica o botao
    return result
}



// funcao recebe (TIPO) => retorna (TIPO)

function criarLista(arrayDeProdutos){

    const main = document.querySelector('main') // portal pro dom

    const mainAntigo = document.getElementById("listProdutos")
    if(mainAntigo !== null){
        main.removeChild(mainAntigo) //acesso pra remover

         exibirBotaoAtivo(botaoMostrarTodos)
    }

    const container = document.createElement("div") // elemento que vai ser substituido
    container.id = "listProdutos"
    container.className = "containerListaProdutos"

    const elementoUlRetornado = document.createElement("ul") // conteudo util

    container.appendChild(elementoUlRetornado) 
    
    for(let i = 0; i < arrayDeProdutos.length; i++){
        const element = arrayDeProdutos[i]

        const elementoLiCard = criarCard(element)
        elementoUlRetornado.appendChild(elementoLiCard)
    }
    console.log('retorno da funcao criar lista', container);
    main.appendChild(container)
    return container
}

function criarCard(objetoParametro){

    const elementoLiRetornado = document.createElement("li")

    const imagemDoProduto = document.createElement("img")
    imagemDoProduto.src = objetoParametro.img
    elementoLiRetornado.appendChild(imagemDoProduto)

    const paragrafoNome = document.createElement("p")
    paragrafoNome.innerHTML = objetoParametro.nome
    elementoLiRetornado.appendChild(paragrafoNome)

    const paragrafoSecao = document.createElement("p")
    paragrafoSecao.innerHTML = objetoParametro.secao
    elementoLiRetornado.appendChild(paragrafoSecao)

    const paragrafoComponentes = document.createElement("p")
    paragrafoComponentes.innerHTML = objetoParametro.componentes[0]
    elementoLiRetornado.appendChild(paragrafoComponentes)

    const paragrafoComponentes2 = document.createElement("p")
    paragrafoComponentes2.innerHTML = objetoParametro.componentes[1]
    elementoLiRetornado.appendChild(paragrafoComponentes2)

    const paragrafoComponentes3 = document.createElement("p")
    paragrafoComponentes3.innerHTML = objetoParametro.componentes[2]
    elementoLiRetornado.appendChild(paragrafoComponentes3)


    const paragrafoPreco = document.createElement("p")
    paragrafoPreco.className = "paragrafoDePreco"
    paragrafoPreco.innerHTML = `R$ ${objetoParametro.preco}`

    const botaoAddAoCarrinho = document.createElement("button")
    botaoAddAoCarrinho.className = "botaoAddAoCarrinho"
    botaoAddAoCarrinho.innerHTML = `Comprar`

    botaoAddAoCarrinho.addEventListener("click", () => colocarNoCarrinho(objetoParametro))
    
    paragrafoPreco.appendChild(botaoAddAoCarrinho)
    elementoLiRetornado.appendChild(paragrafoPreco)    

    return elementoLiRetornado
}



function criarAside (){
    let soma = 0
 
    const asideAntigo = document.getElementById("aside")
    if(asideAntigo !== null){
        bodyDom.removeChild(asideAntigo) //acesso pra remover

        // exibirBotaoAtivo(botaoMostrarTodos)
    }

     const aside = document.createElement("aside")
     aside.id = 'aside'
 
     const caixaDeTitulo = document.createElement("div")
     caixaDeTitulo.className = "caixaDeTitulo"

     const nomeDoCarrinho = document.createElement("h2")
     const imagemDoCarrinho = document.createElement("img")

     const carrinhoDeCompras = document.createElement("div")
     carrinhoDeCompras.className = "carrinho-de-produtos"

     const listaCompras = document.createElement("div")
 
     for(let i = 0; i < itensNoCarrinho.length; i++){  
         soma += itensNoCarrinho[i].preco

         const produtosComprados = document.createElement("div")
 
         const imagemDosProdutosComprados = document.createElement("img")
         const novaLista2 = document.createElement("h2")
         const novaLista3 = document.createElement("h3")
         const novaLista4 = document.createElement("h4")
 
         produtosComprados.appendChild(imagemDosProdutosComprados)
         produtosComprados.appendChild(novaLista2)
         produtosComprados.appendChild(novaLista3)
         produtosComprados.appendChild(novaLista4)
 
         produtosComprados.className = "adicionados"
         imagemDosProdutosComprados.src = itensNoCarrinho[i].img
         novaLista2.innerHTML = itensNoCarrinho[i].nome
         novaLista3.innerHTML = itensNoCarrinho[i].secao
        //  itensNocarrinho[i] = produto
        // produto.nome
        // itensNocar = [{  }, {}]
         novaLista4.innerHTML = `R$${itensNoCarrinho[i].preco}` 
 
         const botaoRemover = document.createElement('button')
         botaoRemover.className = "botao-remover"
         botaoRemover.src = "src/img/trash.jpg"
         
         produtosComprados.appendChild(botaoRemover)
         botaoRemover.addEventListener('click', () => removerDoCarrinho(itensNoCarrinho[i]))
         listaCompras.appendChild(produtosComprados)
         
 
     }
 
     carrinhoDeCompras.appendChild(listaCompras)
     nomeDoCarrinho.className = "nomeDoCarrinho"
     nomeDoCarrinho.innerHTML = `Carrinho`

     imagemDoCarrinho.className = "imagemDoCarrinho"
     imagemDoCarrinho.src = "src/img/carrinho.png"
 
     caixaDeTitulo.appendChild(imagemDoCarrinho)
     caixaDeTitulo.appendChild(nomeDoCarrinho)
     aside.appendChild(caixaDeTitulo)
     aside.appendChild(carrinhoDeCompras)
 
     const quantidade = document.createElement("h2")
     quantidade.id = "quantidade"
     quantidade.innerHTML = `Quantidade: ${itensNoCarrinho.length}`
 
     const total = document.createElement("h3")
     total.className = "total"
     total.innerHTML = `Total: R$ ${soma}`
 
     aside.appendChild(quantidade)
     quantidade.appendChild(total)
 

     return aside
 }

const listaPraColocarNoDom = criarLista(produtos) // primeira execucao, cria a lista

const meuBody = document.querySelector('body')

const meuMain = document.querySelector('main')

const aside = criarAside() // primeira execucao, cria o aside

meuMain.appendChild(listaPraColocarNoDom)  // poe na tela
meuBody.appendChild(meuMain)
meuBody.appendChild(aside)   // poe na tela

