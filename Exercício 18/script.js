function converterTemperatura() {
    const escalaOrigem = document.getElementById("escala").value;
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    let escalaDestino = "";
    let temperaturaConvertida = 0.0;
  
    if (escalaOrigem === "C") {
      escalaDestino = "Fahrenheit";
      temperaturaConvertida = (temperatura * 9 / 5) + 32;
    } else if (escalaOrigem === "F") {
      escalaDestino = "Celsius";
      temperaturaConvertida = ((temperatura - 32) * 5 / 9);
    }
  
    document.getElementById("escalaDestino").textContent = escalaDestino;
    document.getElementById("temperaturaConvertida").textContent = temperaturaConvertida.toFixed(2);
  }
  