// EXERCÍCIO 02 - Cálculo de fatorial
// Rodar no terminal com: node ex02.js

const factorial = num => {
    if(num < 0)
        return 'O número não pode ser menor que zero!';
    if(num === 0 || num === 1)
        return 1;

    return num * factorial(num - 1);
}

let num = 4;

console.log(`${num}! = ${factorial(num)}`);