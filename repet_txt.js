// Agora vamos solicitar uma string e um número inteiro como entrada. Depois teremos que retornar a string repetida o número de vezes informado

const prompt = require('prompt-sync')(); // Importa o módulo

let nome = prompt("Digite uma string: "); // Captura a string
let valor = parseInt(prompt("Digite um valor: ")); // Captura o valor numérico

// Verifica se o valor é válido
if (isNaN(valor) || valor <= 0) {
  console.log("Por favor, insira um número válido maior que zero.");
} else {
  // Cria a string repetida com espaços
  console.log(Array(valor).fill(nome).join(" "));
}