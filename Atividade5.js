// 5)	Faça um programa que simule a urna eletrônica. A tela a ser apresentada deverá ser da seguinte forma:
// Digite o número do candidato ou 0 (zero) para sair
// 1. Candidato Claudia Rodrigues
// 2. Candidato Carlos Luz
// 3. Candidato Neves Rocha
// 4. Nulo
// 5. Branco

// O programa deverá ler os votos dos eleitores e, quando for entrado o número 0, apresentar as seguintes informações:
// a) O número de votos de cada candidato;
// b) A porcentagem de votos nulos;
// c) A porcentagem de votos brancos;
// d) O candidato vencedor.


var voto = parseInt (prompt("----- INICIO DE VOTAÇÃO ----- \n Digite o Número do seu Candidato ou 0 (zero) para sair: \n 1. Candidato Claudia Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco"));
var quantidadeVoto1 = 0;
var quantidadeVoto2 = 0;
var quantidadeVoto3 = 0;
var quantidadeVoto4 = 0;
var quantidadeVoto5 = 0;

while (voto != 0) {
    if(voto == 1){
        quantidadeVoto1 ++;
        console.log("Candidato 1: " + quantidadeVoto1);
    }else if(voto == 2){
        quantidadeVoto2 ++;
        console.log("Candidato 2: " + quantidadeVoto2);
    }else if(voto == 3){
        quantidadeVoto3 ++;
        console.log("Candidato 3: " + quantidadeVoto3);
    }else if(voto == 4){
        quantidadeVoto4 ++;
        console.log("Candidato 4: " + quantidadeVoto4);
    }else if(voto == 5){
        quantidadeVoto5 ++;
        console.log("Candidato 5: " + quantidadeVoto5);
    }else{
        alert("Valor Inválido");
    }
    
    var voto = parseInt (prompt("----- INICIO DE VOTAÇÃO ----- \n Digite o Número do seu Candidato ou 0 (zero) para sair: \n 1. Candidato Claudia Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco"));
}

// ----- A ------
alert("Total de votos: " + "\n" + "1. Claudia Rodrigues: " + quantidadeVoto1 + "\n" + "2. Carlos Luz: " + quantidadeVoto2 + "\n" + "3. Neves Rocha: " + quantidadeVoto3);

// ----- B -------
let percNulo = (quantidadeVoto4 / (quantidadeVoto1 + quantidadeVoto2 + quantidadeVoto3 + quantidadeVoto4 + quantidadeVoto5)) * 100;

alert("Porcentagem de Votos Nulos: " + percNulo + " %");

// --------- C ---------

let perBrancos = (quantidadeVoto5 / (quantidadeVoto1 + quantidadeVoto2 + quantidadeVoto3 + quantidadeVoto4 + quantidadeVoto5)) * 100;

alert ("Porcentagem de votos Brancos: " + perBrancos + " %");


// -------- D ---------

if (quantidadeVoto1 > quantidadeVoto2 && quantidadeVoto1 > quantidadeVoto3){
alert ("Candidato Vencedor é: 1. Candidato Claudia Rodrigues")
} else if (quantidadeVoto2 > quantidadeVoto1 && quantidadeVoto2 > quantidadeVoto3){
    alert ("Candidato Vencedor é: 2. Candidato Carlos Luz ")
} else if (quantidadeVoto3 > quantidadeVoto1 && quantidadeVoto3 > quantidadeVoto2){
    alert ("Candidato Vencedor é: 3. Candidato Neves Rocha")
} else{alert("Empate... Necessário Nova Eleição!")};




