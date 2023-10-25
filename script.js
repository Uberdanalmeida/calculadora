function testar(calcular) {
    var numero = document.getElementById('current-operation').innerHTML;
    document.getElementById('current-operation').innerHTML = numero + calcular
 }
 
 function limpou() {
     document.getElementById('current-operation').innerHTML = "";
 }
 
 function back() {
     var resultado = document.getElementById('current-operation').innerHTML;
     document.getElementById('current-operation').innerHTML = resultado.substring(0, resultado.length -1) 
 }
 
 function calcular() {
     var conta = document.getElementById('current-operation').innerHTML;
     if(conta) {
         document.getElementById('current-operation').innerHTML = eval(conta);
     }
 }