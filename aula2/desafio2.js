// crie uma função que receba um número e 
// retorne "positivo" se o número for maior que
// "0", "negativo" se o número for menor que "0", e 
// "zero" se o número for igual a 0, usando o 
// operador ternário.

// const resultado = x % 2 == 0 ? "par" : "impar";

// const resultado = x > 0 ? "positivo" : x < 0 ? "negativo" : "zero";

const verificar = num => num > 0 ? "Positivo" : num < 0 ? "Negativo" : 0;

const verificar2 = (num) =>{
    return num > 0 ? 
                    "Positivo" 
            : num < 0 ?
                    "Negativo" 
            : 0;
}