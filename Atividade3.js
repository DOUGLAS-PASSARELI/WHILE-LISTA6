// 3)	Faça um programa que leia números inteiros maiores que zero. Quando for entrado o número zero, o programa deverá apresentar quantos números foram entrados e a média destes.

var n = parseInt ( prompt ("Digite um numero inteiro para encontrar a média de um range e 0 (zero) para sair"));

cont = 0;
soma = 0;
media = 0;

while (n != 0){
    console.log("Número digitado: " + n);
    cont++;
    soma += n;
    var n = parseInt ( prompt ("Digite um numero inteiro para encontrar a média de um range e 0 (zero) para sair"));    
}

var media = soma / cont;
console.log ("Quantidade de números digitados: "+ cont + "\n"+ "Média dos números digitados: " + media);

