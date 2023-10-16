function converterNumero() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    const unidades = [
      "",
      "Um",
      "Dois",
      "Três",
      "Quatro",
      "Cinco",
      "Seis",
      "Sete",
      "Oito",
      "Nove"
    ];
  
    const dezenas = [
      "",
      "",
      "Vinte",
      "Trinta",
      "Quarenta",
      "Cinquenta",
      "Sessenta",
      "Setenta",
      "Oitenta",
      "Noventa"
    ];
  
    if (numero < 1 || numero > 99) {
      resultado.textContent = "Número fora do intervalo.";
      return;
    }
  
    if (numero <= 9) {
      resultado.textContent = unidades[numero];
    } else if (numero >= 10 && numero <= 19) {
      const especiais = [
        "Dez",
        "Onze",
        "Doze",
        "Treze",
        "Catorze",
        "Quinze",
        "Dezesseis",
        "Dezessete",
        "Dezoito",
        "Dezenove"
      ];
      resultado.textContent = especiais[numero - 10];
    } else {
      const unidade = numero % 10;
      const dezena = Math.floor(numero / 10);
      if (unidade === 0) {
        resultado.textContent = dezenas[dezena];
      } else {
        resultado.textContent = dezenas[dezena] + " e " + unidades[unidade];
      }
    }
  }
  