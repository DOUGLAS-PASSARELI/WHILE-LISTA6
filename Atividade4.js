// 4)	O cardápio de uma casa de lanches é dado pela tabela abaixo:

/*Codigo  Produto               Preço
100     Cachorro quente       1,70
101     Bauru Simples         2,30
102     Bauru com ovo         2,60
103     Hamburguer            2,40
104     Cheeseburguer         2,50
105     Refrigerante          1,00

 
Escreva um algoritmo que leia os códigos dos itens adquiridos pelo consumidor e a quantidade, calculando e mostrando o valor a pagar. Não será necessário exibir o produto e o valor, somente o valor final. Para FINALIZAR o pedido, o usuário deverá digitar 0 (ZERO). */

var produto = parseInt ( prompt ("Digite o Código do item ou 0 (zero) para finalizar o pedido:  \n  100     Cachorro quente       1,70  \n  101     Bauru Simples         2,30  \n  102     Bauru com ovo         2,60  \n  103     Hamburguer            2,40  \n  104     Cheeseburguer         2,50  \n  105     Refrigerante          1,00 "));

var quantidade = parseInt (prompt("Digite a quantidade: "));

var valorTotalItem = 0;

var valorTotalPedidoItem = 0;

var valorTotalPedido = 0;


while (produto != 0) {
    if(produto  == 100){
        valorTotalItem = quantidade * 1.70;
        valorTotalPedidoItem += valorTotalItem;
        console.log("Código Produto: " + produto + " Valor total do Produto: R$ " + valorTotalItem);
    }else if(produto == 101){
        valorTotalItem = quantidade * 2.30;
        valorTotalPedidoItem += valorTotalItem;
        console.log("Código Produto: " + produto + " Valor total do Produto: R$ " + valorTotalItem);       
    }else if(produto == 102){
        valorTotalItem = quantidade * 2,60;
        valorTotalPedidoItem += valorTotalItem;
        console.log("Código Produto: " + produto + " Valor total do Produto: R$ " + valorTotalItem);
    }else if (produto == 103){
        valorTotalItem = quantidade * 2.40;
        valorTotalPedidoItem += valorTotalItem;
        console.log("Código Produto: " + produto + " Valor total do Produto: R$ " + valorTotalItem);
    }else if(produto == 104){
        valorTotalItem = quantidade * 2.60;
        valorTotalPedidoItem += valorTotalItem;
        console.log("Código Produto: " + produto + " Valor total do Produto: R$ " + valorTotalItem);
    }else if(produto == 105){
        valorTotalItem = quantidade * 1;
        valorTotalPedidoItem += valorTotalItem;
        console.log("Código Produto: " + produto + " Valor total do Produto: R$ " + valorTotalItem);
    }else{
        alert("Valor inválido");
    }
    valorTotalPedido += valorTotalItem;    

    var produto = parseInt ( prompt ("Digite o Código do item ou 0 (zero) para finalizar o pedido:  \n  100     Cachorro quente       1,70  \n  101     Bauru Simples         2,30  \n  102     Bauru com ovo         2,60  \n  103     Hamburguer            2,40  \n  104     Cheeseburguer         2,50  \n  105     Refrigerante          1,00 "));

    if(produto != 0){
        var quantidade = parseInt (prompt("Digite a quantidade: "));}    
}
alert("Valor Total Pedido" + " R$ " + valorTotalPedido);
console.log("Valor Total pedido: R$: " + valorTotalPedido);