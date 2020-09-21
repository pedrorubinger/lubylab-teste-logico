// EXERCÍCIO 04 - Cálculo Estatístico
// Rodar no terminal com: node ex04.js

const arr = [193, 123, 44, 9, 44, 801, 1800, 44, 98, 801, 999, 1780];

const mediana = () => {
    if(arr.length === 0)
        return 0;
  
    arr.sort((a, b) => a - b);

    let metade = Math.floor(arr.length / 2);

    if (arr.length % 2)
      return arr[metade];

    return (arr[metade - 1] + arr[metade]) / 2.0;
}

const moda = () => {
    const tabelaDeFrequencia = {};

    arr.forEach(item => tabelaDeFrequencia[item] = tabelaDeFrequencia[item] + 1 || 1);

    let modais = [];
    let maior = 0;

    for(const key in tabelaDeFrequencia) {
        if(tabelaDeFrequencia[key] > maior) {
            modais = [Number(key)];
            maior = tabelaDeFrequencia[key];
        } else if(tabelaDeFrequencia[key] === maior)
            modais.push(Number(key));
    }

    if(modais.length === Object.keys(tabelaDeFrequencia).length)
        modais = [];
    
    return modais;
}

const estatistica = () => {
    const sum = arr.reduce((accumulator, a) => accumulator + a, 0);
    const avg = sum / arr.length;
    const median = mediana();
    const mode = moda();

    return { avg, median, mode };
}

const data = estatistica();

console.log(`
    Média: ${data.avg}
    Mediana: ${data.median}
    Moda: ${data.mode}
`);