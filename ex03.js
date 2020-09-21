// EXERCÍCIO 03 - Sequẽncia de Fibonacci
// Rodar no terminal com: node ex03.js

// Fórmula: f(n) = f(n - 1) + f(n - 2);
// Val. Iniciais: f(0) = 1, f(1) = 1;

const fibonacci = n => {
    if(n < 2)
        return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 12;

console.log(fibonacci(n));