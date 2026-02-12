const prompt = require('prompt-sync')();

function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  
  let nivel;
  
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }
  
  return {
    saldoVitorias,
    nivel
  };
}

// Capturando valores do terminal
console.log("=== CALCULADORA DE PARTIDAS RANKEADAS ===\n");

const vitorias = parseInt(prompt("Digite a quantidade de vitórias: ")); 
const derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

// Calculando o nível
const resultado = calcularNivel(vitorias, derrotas);

// Exibindo o resultado
console.log(`\nO Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);