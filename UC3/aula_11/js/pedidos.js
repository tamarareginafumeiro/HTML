let historico_pedidos = [{
    nome_cliente: "Mykoll",
    cpf: 12312312341,
    data_nasc:"11/11/1988"
}]

let pedidos = [
    {
    id_pedido: 1,
    total: 100.00,
    status:"Pago",
    item: 2
},
{
    id_pedido: 2,
    total: 120.00,
    status:"Pendente",
    item: 1
}
]

historico_pedidos.map(dados_cliente => {
    //mostrar o nome do cliente no HTML
    document.getElementById("nome").innerHTML = dados_cliente.nome_cliente
    //mostrar o CPF no HTML
    document.getElementById("cpf").innerHTML = dados_cliente.cpf
    //mostrar o data de nascimento no HTML
    document.getElementById("data-nasc").innerHTML = dados_cliente.data_nasc
})

let divHistorico = document.getElementById("historico");
let aux = "";

pedidos.map(item => {
    
     aux += "<p>ID Pedido: " + item.id_pedido + "</p>"
     aux += "<p>Status: " + item.status + "</p>"
     aux += "<p>Valor total: " + item.total + "</p>"
     aux += "<p>Qts (itens): " + item.itens + "</p>"
     aux += "<hr>"
})

divHistorico.innerHTML = aux;