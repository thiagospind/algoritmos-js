const livros = require('./listaLivros');
const menorValor = require('./menorValor');

for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];
    
    console.log('Atual: ', livros[atual])
    console.log('Menor Preço: ', livros[menor])

    // console.log(typeof livroAtual)

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;

}

// console.log(livros);