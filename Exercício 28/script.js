function encontrarMenorMaior() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const valor3 = parseFloat(document.getElementById("valor3").value);
    const valor4 = parseFloat(document.getElementById("valor4").value);
    const valor5 = parseFloat(document.getElementById("valor5").value);
  
    const valores = [valor1, valor2, valor3, valor4, valor5];
  
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
  
    document.getElementById("menorValor").textContent = menorValor;
    document.getElementById("maiorValor").textContent = maiorValor;
  }
  