// 1)	Faça um programa que leia um conjunto não determinado de valores e mostre o valor lido, seu dobro, seu quadrado e seu cubo.  Finalize a entrada de dados com um valor negativo ou zero.

var n = parseInt (prompt("Digite um numero para mostar seu valor, o quadrado, e o cubo ou 0 (zero) para sair "));

var cont = 0;

while (n > 0) {
    let dobro = n + n;
    let quad = n ** 2;
    let cub = n ** 3;
    console.log("Numero: " + n + "\n" + "O dobro é: "+ dobro + "\n" + "0 quadrado é: " + quad + "\n" + "O cubo é: " + cub);

    var n = parseInt (prompt("Digite um numero para mostar seu valor, o quadrado, e o cubo ou 0 (zero) para sair "));
}


