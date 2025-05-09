//Exercício 1

//function verificarPar(numero){

    //if(numero % 2 === 0) {
        //console.log ("par");
    //}else{
        //console.log("impar");
    //}

//verificarPar(4);
//verificarPar(7);

//Exercício 2

//function calcular (n1,n2){

    //const soma = n1 + n2;
    //const subtracao = n1 - n2;
    //const divisao = n2 !== 0 ? n1 / n2: 'Não pode dividir por zero';
    //const multiplicacao = n1 * n2;

    //console.log(soma);
    //console.log(subtracao);
    //console.log(divisao);
    //console.log(multiplicacao);

    //let n1 = parseFloat(prompt("Digite seu primeiro número"));
    //let n2 = parseFloat(prompt("Digite seu segundo número"));

    //calcular (n1,n2); 
//}

//Exercício 3

//let numero = 10;
//let delay = 0;

//while (numero >=1){

    //console.log(numero);
    //numero--;
//} 

//Exercício 4

//let original = "Javascript";
//let reversed = original.split (''),reverse ().join('');

//console.log (reversed);

//Exercício 5

//function contarCaracteres (string) {
    //return string.length;
//}

//Exercício 6

//class Carro{
    //constructor(marca,modelo, ano){
        //this.marca = marca;
        //this.modelo = modelo;
        //this.ano = ano
    //}
    //exibirinformacoes(){
        //console.log(`carro: ${this.marca} ${this.modelo} ${this.ano}`);
        //}
    //}
    //const meuCarro = new Carro('Volkswagen', 'Beetle', '1963');
    //meuCarro.exibirinformacoes();

//Exercício 7

function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
}

mensagemPersonalizada("João"); 
mensagemPersonalizada("Gabriel", "Bem-vindo,");


