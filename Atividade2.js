// 2)	Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”.

var senha = parseInt (prompt("Digite a Senha de 4 números: "));

const senhaCorreta = '1234';

while (senha != senhaCorreta) {
    alert ("Senha Incorreta. Digite novamente!");
    var senha = parseInt (prompt("Digite a Senha de 4 números: "));    
}

alert ("Senha Correta!");