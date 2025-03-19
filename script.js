function calcular (n1,n2){

    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1 / n2: 'Não pode dividir por zero';
    const multiplicacao = n1 * n2;

    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);

}

    let n1 = parseFloat(prompt("Digite seu primeiro número"));
    let n2 = parseFloat(prompt("Digite seu segundo número"));

    calcular (n1,n2); 