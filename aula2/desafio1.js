// crie um função que receba dois números e retorne a soma, 
// subtração, multiplicação e divisão  desses números em um objeto

// Função que recebe dois números e retorna as operações
function calcularOperacoes(num1, num2) {
    const contas = [
        { soma: num1 + num2 },
        { subtracao: num1 - num2 },
        { multiplicacao: num1 * num2 },
        { divisao: num1 / num2}
        // { divisao: num2 !== 0 ? num1 / num2 : 'Divisão por zero não é permitida' }
    ];

    return contas;
}

// Chamando a função e exibindo o resultado
const resultado = calcularOperacoes(10, 10);
console.log(resultado);
