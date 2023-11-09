saldo = "";

function verifSaldo(){
   
    var $result = document.querySelector('.result')
    HTMLtemporario = $result.innerHTML, 
    HTMLnovo = "O seu saldo é R$: " + saldo;  
    HTMLtemporario = HTMLnovo + HTMLtemporario; 
    $result.innerHTML = HTMLtemporario;

} 

function deposito(){
    var novoValor = window.prompt("Qual o valor a depositar ?"); 
    if(novoValor == null || novoValor == ""){
        alert("Operação cancelada") 
    } else{
        var cash = novoValor; 
        saldo =+ cash; 
        alert("O saldo agora é " + saldo) 
    }

} 

function saque(){
    var novoSaque = window.prompt("Digite o valor que gostaria de sacar"); 
        
        if (novoSaque == null || novoSaque == "") {
            alert("Operação Cancelada")
        } else if(novoSaque > saldo){
            alert("Saldo Insuficiente"); 
        } else if(novoSaque <= saldo){
            saldo = saldo - novoSaque; 
            alert("O saldo agora é " + saldo); 
        } else {
            alert("Digite um valor válido")
        }
    
} 

function encerrar(){
    window.location.reload(true);
}
