const bodyDom = document.querySelector('body')
const header = criarHeader()
const divProdutos = criarListaDeProdutos(produtos)


bodyDom.appendChild(header)
bodyDom.appendChild(divProdutos)

//------------------------------------------------


//FUNÇÕES DE FILTRO

function filtrarHortifruti(arrayDeProdutos){
    let result = []

    for (let i = 0; i < arrayDeProdutos.length; i++) {
        const element = arrayDeProdutos[i];

        if(element.secao === 'Hortifruti')
            result.push(element)
    }
    criarListaDeProdutos(result)
    return result
}

function filtrarPanificadora(arrayDeProdutos){
    let result = []

    for (let i = 0; i < arrayDeProdutos.length; i++) {
        const element = arrayDeProdutos[i];

        if(element.secao === 'Panificadora')
            result.push(element)
    }
    criarListaDeProdutos(result)
    return result
}

function filtrarLaticinios(arrayDeProdutos){
    let result = []

    for (let i = 0; i < arrayDeProdutos.length; i++) {
        const element = arrayDeProdutos[i];

        if(element.secao === 'Laticínio')
            result.push(element)
    }
    criarListaDeProdutos(result)
    return result
}



const botaoMostrarTodos = document.querySelector('.mostrarTodos')
botaoMostrarTodos.addEventListener('click', () => criarListaDeProdutos(produtos))

const botaoFiltrarHortiFruti = document.querySelector('.filtrarHortifruti')
botaoFiltrarHortiFruti.addEventListener('click', () => filtrarHortifruti(produtos))

const botaoFiltrarPanificadora = document.querySelector('.filtrarPanificadora')
botaoFiltrarPanificadora.addEventListener('click', () => filtrarPanificadora(produtos))

const botaoFiltrarLaticinios= document.querySelector('.filtrarLaticinios')
botaoFiltrarLaticinios.addEventListener('click', () => filtrarLaticinios(produtos))


//FUNÇÃO DE BUSCA POR NOME

const input = document.querySelector('.CampoBuscaPorNome')
console.log(input);

const botaoinput = document.querySelector('.botaoBuscaPorNome')
botaoinput.addEventListener('click', () => buscarPorProduto(input.value))
console.log(botaoinput);



function buscarPorProduto(nomeDoProduto){
    let result = []

    for (let i = 0; i < produtos.length; i++) {
        const element = produtos[i];

        if(element.nome.toLowerCase() === nomeDoProduto.toLowerCase())
            result.push(element)
    }

    criarListaDeProdutos(result)
    return result
}




function criarHeader() {

    const header = document.createElement("header")
    const shopNow = document.createElement("div")
    shopNow.className = "nomePrincipal"
    const shopNowNome = document.createElement("p")
    shopNowNome.innerText = `Shop now`

    const divFiltros = document.createElement("div")
    divFiltros.id = "filters"
    divFiltros.className = "filtersContainer"

    shopNow.append(shopNowNome)
    header.append(shopNow)
    header.append(divFiltros)

    const botaoTodos = document.createElement("button")
    botaoTodos.className = "mostrarTodos"
    botaoTodos.innerText = `Mostrar Todos`

    const botaoHortifruti = document.createElement("button")
    botaoHortifruti.className = "filtrarHortifruti"
    botaoHortifruti.innerText = `Hortifruti`

    const botaoPanificadora = document.createElement("button")
    botaoPanificadora.className = "filtrarPanificadora"
    botaoPanificadora.innerText = `Panificadora`

    const botaoLaticinios = document.createElement("button")
    botaoLaticinios.className = "filtrarLaticinios"
    botaoLaticinios.innerText = `Laticinios`

    divFiltros.append(botaoTodos, botaoHortifruti, botaoPanificadora, botaoLaticinios)

    const divBuscaPorNome = document.createElement("div")
    divBuscaPorNome.className = "containerBuscaPorNome"

    header.append(divBuscaPorNome)

    const campoDeBusca = document.createElement("input")
    campoDeBusca.type = "text"
    campoDeBusca.placeholder = "Nome do produto"
    campoDeBusca.className = "CampoBuscaPorNome"

    divBuscaPorNome.append(campoDeBusca)

    const botaoBuscar = document.createElement("button")
    botaoBuscar.className = "botaoBuscaPorNome"
    const icone = document.createElement("img")
    icone.src = 'src/img/Vector.png'

    botaoBuscar.append(icone)
    divBuscaPorNome.append(botaoBuscar)

    return header
}



function criarListaDeProdutos(arrayDeProdutos) {

    const bodyDom = document.querySelector('body')

    const mainAntigo = document.getElementById("listProdutos")
    if(mainAntigo !== null){
        bodyDom.removeChild(mainAntigo)
    }


    const container = document.createElement("main")
    container.id = "listProdutos"
    container.className = "containerListaProdutos"

    const lista = document.createElement('ul')

    container.appendChild(lista)

    let total = 0

    for (let i = 0; i < arrayDeProdutos.length; i++) {
        element = arrayDeProdutos[i]

        total += element.preco
        const divPrecoTotal = document.querySelector(".containerPrecoTotal")
        const precoTotal = document.getElementById("precoTotal")
        precoTotal.innerHTML = `R$ ${total}`

        const card = criarCard(element)
        lista.appendChild(card)
        divPrecoTotal.appendChild(precoTotal)

    }
    console.log(total);
    bodyDom.appendChild(container)
    return container
}
criarListaDeProdutos(produtos)



function criarCard (item){

    const infoDoProduto = document.createElement("li")

    const imagem = document.createElement("img")
    imagem.src = item.img

    const nome = document.createElement("h2")
    nome.innerText = item.nome

    const secao = document.createElement("h3")
    secao.innerHTML = item.secao

    const preco = document.createElement("h4")
    preco.innerHTML = `R$ ${item.preco}`

    infoDoProduto.appendChild(imagem)
    infoDoProduto.appendChild(nome)
    infoDoProduto.appendChild(secao)
    infoDoProduto.appendChild(preco)

    return infoDoProduto
}
