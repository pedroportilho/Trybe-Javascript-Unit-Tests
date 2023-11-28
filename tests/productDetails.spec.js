const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    const teste = productDetails('alcool gel', 'mascara');

    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(teste)).toEqual(true)
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(teste.length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof teste[0]).toEqual('object');
    expect(typeof teste[1]).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(teste[0]).not.toEqual(teste[1])
    // Teste se os dois productIds terminam com 123.
    const prod1 = teste[0].details.productId;
    const last1 = prod1.substring(prod1.length - 3);
    expect(last1).toEqual('123');

    const prod2 = teste[1].details.productId;
    const last2 = prod2.substring(prod2.length - 3);
    expect(last2).toEqual('123');
  });
});
