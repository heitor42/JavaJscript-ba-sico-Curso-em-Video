var agora = new Date()
var horario = agora.getHours()
console.log(`Agora são exatamente ${horario} horas`)
if (horario<=5){
    console.log('Boa madrugada')
} else if (horario < 12) {
    console.log('Bom dia')
} else if (horario < 18) {
    console.log('Boa tarde')
}else{
    console.log('Boa noite')
}