var agora = new Date()
var diaDaSema = agora.getDay()
switch (diaDaSema){
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda-feira')
        break;
    case 2:
        console.log('Trça-feira')
        break;
    case 3:
        console.log('Quarta-feira')
        break;
    case 4:
        console.log('Quinta-feira')
        break;
    case 5:
        console.log('Sexta-feira')
        break;
    default:
        console.log('Sabado')
        break;
}

console.log(diaDaSema)