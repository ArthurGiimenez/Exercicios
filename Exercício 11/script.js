function calcularNotaFinal() {
    const primeiraNota = parseFloat(document.getElementById("primeiraNota").value);
    const segundaNota = parseFloat(document.getElementById("segundaNota").value);
  
    const notaFinal = ((primeiraNota + segundaNota) / 2).toFixed(1);
  
    document.getElementById("notaFinal").textContent = notaFinal;
  
    if (notaFinal >= 60.0) {
      document.getElementById("mensagemResultado").textContent = "APROVADO";
    } if (notaFinal < 60.0) {
      document.getElementById("mensagemResultado").textContent = "REPROVADO";
    }
  }
  