function calcularSomaIntervalo() {
    const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
    const numeroFinal = parseInt(document.getElementById("numeroFinal").value);
  
    let soma = 0;
    for (let i = numeroInicial; i <= numeroFinal; i++) {
      soma += i;
    }
  
    document.getElementById("resultado").textContent = soma;
  }
  