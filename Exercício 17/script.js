function verificarMultiplos() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
  
    if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
      document.getElementById("mensagem").textContent = "São múltiplos.";
    } else {
      document.getElementById("mensagem").textContent = "Não são múltiplos.";
    }
  }
  