function enter(){

}

function calculart(){
 let fator = Number(document.getElementById('fator').value)
 let tabuada = document.getElementById('tabuada')
 if (document.getElementById('fator').value.length != 0){
  tabuada.innerHTML = `<option>tabuada de ${fator}</option>`
  for (var fator2 = 0; fator2 < 11; fator2++){
   tabuada.innerHTML += `<option>${fator2} X ${fator} = ${(fator*fator2)}</option>`
  }
 } else {
  alert ('Digite um número.')
 }
}