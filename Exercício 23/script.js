function calcularSomaImpares() {
    const valorX = parseInt(document.getElementById("valorX").value);
    const valorY = parseInt(document.getElementById("valorY").value);
  
    let somaImpares = 0;
  
    for (let i = valorX; i <= valorY; i++) {
      if (i % 2 !== 0) {
        somaImpares += i;
      }
    }
  
    document.getElementById("resultado").textContent = somaImpares;
  }
  