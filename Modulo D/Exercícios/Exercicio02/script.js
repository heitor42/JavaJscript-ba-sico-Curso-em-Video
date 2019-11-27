//Faz com que ao apertar enter o programa execute 
document.getElementById("area").addEventListener("keypress", enter)
function enter(e){
    if (e.code == 'Enter'){
        verificar()
    }
}
function verificar(){
    var res = document.querySelector('div#res')
    const anop = new Date().getFullYear()
    const anod = Number(document.getElementById('ano').value)
    if (anop < anod || anod == 0){
        alert('[Erro]-Prencha novamente')
    } else {
        const sex = document.getElementsByName('sex')
        var idade = (anop - anod)
        var img = document.createElement('img')
        img.setAttribute("id", 'foto')
        var genero = ''
        res.innerHTML = `Sua idade é: ${idade}`
        if (sex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute("src", "Banco de imagens/bebeh.jpg")
            } else if (idade < 13) {
                //criaça
                img.setAttribute("src", "Banco de imagens/criançah.jpg")
            } else if (idade < 20) {
                //adolescente
                img.setAttribute("src", "Banco de imagens/adolescenteh.jpg")    
            } else if (idade < 60) {
                //adulto
                img.setAttribute("src", "Banco de imagens/adultoh.jpg")
            } else {
                //idoso
                img.setAttribute("src", "Banco de imagens/idosoh.jpg")
            }
        } else if (sex[1].checked) {
            genero = 'Mulher'
            if (idade < 3){
                //bebe
                img.setAttribute("src", "Banco de imagens/bebem.jpg")
            }else if (idade <13){
                //criaça
                img.setAttribute("src", "Banco de imagens/criançam.jpg")
            }else if(idade<20){
                //adolescente
                img.setAttribute("src", "Banco de imagens/adolescentem.jpg")
            }else if (idade<60){
                //adulto
                img.setAttribute("src", "Banco de imagens/adultom.jpg")
            }else{
                //idoso
                img.setAttribute("src", "Banco de imagens/idosom.jpg")
            }
        }
        res.appendChild(img)
    }
}
