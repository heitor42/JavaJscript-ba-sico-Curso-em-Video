//Teste por conta propria
var produto = 'carne'
switch (produto) {
    case 'carne':
        console.log(`A carne esta R$3,20 o quilo`)
        break;

    case 'leite':
            console.log(`A carne esta R$1,20 o litro`)

        break;
    case 'ovo':
            console.log(`A carne esta R$3,20 o meia duzia`)
        break;
    case 'nutela':
            console.log(`A carne esta R$11,20 a unidade`)
        break;

    default:
        console.log("Não temos o produto em estoque")
        break;
}