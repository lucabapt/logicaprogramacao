// Lógica de Programação 
// Problema: obter 3 notas de um aluno, calcula a média,
// exibir a média e exibir a situação do aluno: aprovado
// em exame ou reprovado. 

console.log('Inicio do Programa');

// declaração das variáveis 
const nota1 = parseInt(prompt('Digite a nota 1'));
const nota2 = parseInt(prompt('Digite a nota 2'));
const nota3 = parseInt(prompt('Digite a nota 3'));

// calculo da média
const media = (nota1+nota2+nota3) /3;

console.log("O calculo médio das notas de um aluno:" + "nota 1", nota1,  "nota 2", nota2, "nota 3", nota3);

console.log('A nota 1 é:', nota1);
console.log('A nota 2 é:', nota2);
console.log('A nota 3 é:' ,nota3);

console.log('A média do aluno é:' ,media);

console.log('Fim do programa');



