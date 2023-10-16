function calcularAreaCirculo() {
    const raio = parseFloat(document.getElementById("raio").value);
  
    const area = (Math.PI * Math.pow(raio, 2)).toFixed(3);
  
    document.getElementById("areaCirculo").textContent = area;
  }
  