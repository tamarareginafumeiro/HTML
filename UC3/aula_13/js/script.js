// Add some interactivity to the website

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var botao = document.getElementById("botao");

function mostrarInformacao() {
    var aux = "";
    var nomes = [];
    var emails = [];
    
    nomes.push(nome.value)
    emails.push(email.value)
   
    nome.value = ""
    email.value = ""
    

   for (var cont = 0; cont < nomes.length; cont++) {

        aux += "<p>Nome completo: " + nomes[cont] + "</p>"
            + "<p>Email: " + emails[cont] + "</p>"
         
    }
    
}