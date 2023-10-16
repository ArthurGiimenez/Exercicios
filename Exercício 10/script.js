function encontrarMenorNumero() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const numero3 = parseInt(document.getElementById("numero3").value);
  
    let menor = numero1;
  
    if (numero2 < menor) {
      menor = numero2;
    }
  
    if (numero3 < menor) {
      menor = numero3;
    }
  
    document.getElementById("menorNumero").textContent = menor;
  }
  