function classificarGlicose() {
    const glicose = parseFloat(document.getElementById("glicose").value);
  
    let classificacao = "";
  
    if (glicose <= 100.0) {
      classificacao = "Normal";
    } else if (glicose <= 140.0) {
      classificacao = "Elevado";
    } else {
      classificacao = "Diabetes";
    }
  
    document.getElementById("classificacao").textContent = classificacao;
  }
  