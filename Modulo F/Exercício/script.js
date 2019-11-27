function testa(){
    let valor = Number(document.getElementById("valor").value)
    if (valor > 0 && valor < 101){
        var vetor = criaLista()
        if (vetor.indexOf(valor) == -1){
            return adicionar()
        } else {
            alert("Valor ja digitado")
        }
        var a = true
    } else if (document.getElementById("valor").value.length == 0) {
        alert("Digite um valor primeiro")
    } else {
        alert("Erro")
    }
}
function adicionar(){
    let valor = document.createElement("option")
    valor.value = Number(document.getElementById("valor").value)
    valor.text = `Valor ${document.getElementById("valor").value} adicionado`
    document.getElementById("dados").appendChild(valor)
    console.log(criaLista())
    console.log(SomaEMedia())
    document.getElementById("div2").innerHTML = null
    document.getElementById("valor").value = null
    document.getElementById("valor").focus()
}
function MenorEMaior(a){
    a.sort()
    return [a[0], a[a.length-1]]
}
function SomaEMedia(arrey){
    var lista = criaLista()
    let soma = 0
    for (cont in lista){
        soma += lista[cont]
    }
    media = soma/lista.length
    return [soma, media]
}
function criaLista(){
    let dados = document.getElementById('dados')
    var arrey = []
    for (i=0; i < dados.length; i++){
        arrey[i] = Number(dados.options[i].value)
    }
    return arrey
}
function finalizar(){
    var lista = criaLista()
    let SomEMed = SomaEMedia(lista)
    let MaiEMen = MenorEMaior(lista)
    let area = document.getElementById("div2")
    if (lista.length > 0){
        area.innerHTML = `Ao todo, ${lista.length} números foram cadastrados.<br>`
        area.innerHTML += `O maior número informado foi ${MaiEMen[1]}.<br>`
        area.innerHTML += `O menor número informado foi ${MaiEMen[0]}.<br>`
        area.innerHTML += `Somando todos os valores temos ${SomEMed[0]}<br>`
        area.innerHTML += `A media dosvalores digitados foi ${SomEMed[1].toFixed(2)}.<br>`
    } else {
        alert("Adicione um valir primeiro!")
    }
}

document.getElementById("valor").focus()