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

// Exemplos de uso
const jogador1 = calcularNivel(5, 2);
console.log(`O Herói tem de saldo de ${jogador1.saldoVitorias} está no nível de ${jogador1.nivel}`);

const jogador2 = calcularNivel(15, 5);
console.log(`O Herói tem de saldo de ${jogador2.saldoVitorias} está no nível de ${jogador2.nivel}`);

const jogador3 = calcularNivel(75, 10);
console.log(`O Herói tem de saldo de ${jogador3.saldoVitorias} está no nível de ${jogador3.nivel}`);

const jogador4 = calcularNivel(120, 30);
console.log(`O Herói tem de saldo de ${jogador4.saldoVitorias} está no nível de ${jogador4.nivel}`);