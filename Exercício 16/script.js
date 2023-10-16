function encontrarMaiorDistancia() {
    const distancia1 = parseFloat(document.getElementById("distancia1").value);
    const distancia2 = parseFloat(document.getElementById("distancia2").value);
    const distancia3 = parseFloat(document.getElementById("distancia3").value);
  
    const maiorDistancia = Math.max(distancia1, distancia2, distancia3);
  
    document.getElementById("maiorDistancia").textContent = maiorDistancia.toFixed(2);
  }
  