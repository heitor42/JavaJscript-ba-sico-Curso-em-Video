/*
//par ou impar
function parOrimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}
console.log(parOrimp(9))
*/
//Fatorial
/*
function fatorial(n){
    if (n == 0); n = 1;
    var f = n
    while (n >1){
        f *= (n-1)
        n --
    }
    return f
}
*/
//recurciva
function fatorial(n){
    if (n==0 || n==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))