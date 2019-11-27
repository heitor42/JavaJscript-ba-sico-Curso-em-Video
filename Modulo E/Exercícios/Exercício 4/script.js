function contar(){
 var inicio = Number(window.document.getElementById("primeiro").value)
 var fim = Number(window.document.getElementById("ultimo").value)
 var passo = Number(window.document.getElementById("passo").value)
 var resposta = document.getElementById("div2")
 resposta.innerHTML = ''
 if (document.getElementById('primeiro').value.length == 0 || document.getElementById("ultimo").value.length == 0){
  resposta.innerHTML += "Impossivel contar ..."
 }else{
  if (passo <= 0){
   alert('Passo invalido considerarei passo 1')
   passo = 1
  }  
  for (inicio, fim, passo; inicio<=fim; inicio += passo){
   resposta.innerHTML += ` ${inicio} 👉`    
  }
  for (inicio, fim, passo; inicio>=fim; inicio -= passo){
   //emoji \u{codico do emoji}
   resposta.innerHTML += ` ${inicio} \u{1F449}`  
  }
 resposta.innerHTML += `\u{1F3C1}`
 }
}