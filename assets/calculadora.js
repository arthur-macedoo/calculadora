function calculadora() {
    const operacao = prompt('Digite o número para o métedo de operação desejada:\n 1 = Soma (+)\n 2 = Subtração (-)\n 3 = Divisão Real (/)\n 4 = Divisão Inteira (%)\n 5 = Multiplicação (*)\n 6 = Potenciação (**)\n 7 - Sair');

    if (!operacao || operacao >= 8 || operacao == 0){
        alert("Erro. Número não válido.");
        calculadora();
    } 
    else if (operacao == 7){
        alert("Até mais!")
    } else{
        
    let n1 = Number(prompt("Insira o primero valor:"));
    let n2 = Number(prompt("Insira o segundo valor:"));
    let resultado;

    if(!n1 || !n2){
        alert("Erro. Parâmetros inválidos.");
        calculadora();
    }

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
    }
    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
    };
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} ÷ ${n2} = ${resultado}`);
        novaOperacao();
    };
    function divisaoInteira(){
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
        novaOperacao();
    };
    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} × ${n2} = ${resultado}`);
        novaOperacao();
    };
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} ^ ${n2} = ${resultado}`);
        novaOperacao();
    }
    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2- Não')

        if (opcao == 1){
            calculadora();
        }
        else if (opcao == 2){
            alert("Até mais!")
        }
        else {
            alert("Desculpe, não entendi. Digite uma opção válida.")
            novaOperacao();
        }
    }

    if (operacao == 1){
        soma();
    }
    else if (operacao == 2){
        subtracao();
    }
    else if (operacao == 3){
        divisaoReal();
    }
    else if (operacao == 4){
        divisaoInteira();
    }
    else if (operacao == 5){
        multiplicacao();
    }
    else if (operacao == 6){
        potenciacao();
    }
}
}
calculadora();
    