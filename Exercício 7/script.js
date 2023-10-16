function calcularConsumoMedio() {
    const distanciaPercorrida = parseFloat(document.getElementById("distanciaPercorrida").value);
    const combustivelGasto = parseFloat(document.getElementById("combustivelGasto").value);
  
    const consumoMedio = (distanciaPercorrida / combustivelGasto).toFixed(3);
  
    document.getElementById("consumoMedio").textContent = consumoMedio;
  }
  