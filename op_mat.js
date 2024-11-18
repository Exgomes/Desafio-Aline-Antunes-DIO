// Vamos solicitar como entrada dois números e depois vamos realizar uma operação entre eles.

const prompt = require("prompt-sync")(); // Inicializa o prompt-sync

// Captura os valores e converte para números
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

// Captura a operação desejada
const operacao = prompt("Digite a operação que deseja realizar (+, -, *, /): ");

// Verifica a operação e realiza o cálculo
if (operacao === "+") {
  console.log("Resultado:", valor1 + valor2);
} else if (operacao === "-") {
  console.log("Resultado:", valor1 - valor2);
} else if (operacao === "*") {
  console.log("Resultado:", valor1 * valor2);
} else if (operacao === "/") {
  if (valor2 === 0) {
    console.log("Erro: divisão por zero não é permitida.");
  } else {
    console.log("Resultado:", valor1 / valor2);
  }
} else {
  console.log("Operação inválida.");
}