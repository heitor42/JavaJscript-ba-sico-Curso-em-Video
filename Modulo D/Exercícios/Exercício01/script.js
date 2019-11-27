function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('ima')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas e ${new Date().getMinutes()} minutos`
    if (hora < 12) {
        //bom dia
        img.src = 'Banco de imagens/fotomanha2.png'
        window.document.body.style.background = '#D69B59'
    } else if (hora < 18) {
        //boa tarde
        img.src = 'Banco de imagens/fototarde2.png'
        window.document.body.style.background = '#F3AD8C'
    } else {
        //boa noite
        img.src = 'Banco de imagens/fotonoite2.png'
        window.document.body.style.background = '#0A191C'
    }
}
