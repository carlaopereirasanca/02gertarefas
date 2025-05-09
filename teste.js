
// Criando a função saudacao, que recebe nome e cumprimento,
// e realiza a exibição desses dados:

function saudacao(nome, cumprimento) {

    console.log(`${cumprimento}, ${nome}!`);
}

// Testando...
saudacao('Asdrubal', 'Boa noite');
console.log('---');
  
// Copiando a referência da função saudacao para a referência
// bomDiaMaria, utilizando bind para pré-definir os parâmetros.
// Lembrando, o 1o parâmtro de bind é null, porque se refere ao
// 'this', que neste caso não é usado pois não se trata de um
// objeto:

const bomDiaMaria = saudacao.bind(null, "Maria", "Bom dia");

// Testando...
bomDiaMaria();
bomDiaMaria('Asdrubal', 'Boa noite');
console.log('---');
  
// Vamos agora criar uma OUTRA função, que recebe por parâmetro
// a referência de outra função. Em seu interior,
// esta função chama esta função recebida por parâmetro.

function executarSaudacao(funcao) {

    console.log("Preparando saudação...");

    funcao(); // Chama a função passada

    console.log("Saudação feita.\n");

}
  
// Vamos chamar a função criada acima, passando por parâmetro
// a função bomDiaMaria, que é a função original 'saudacao'
// mas com parâmetros pré-fixados. Note neste exemplo, que mesmo
// passando a função para ser usada por outra, os parâmetros fixados
// permaneceram fixados. Lembre disso para utilizar em componentes React,
// passando via props para outro componente a referência de uma função
// já com seus parâmetros fixados:

executarSaudacao(bomDiaMaria);
  
  