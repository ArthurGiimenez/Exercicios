function calcularAreas() {
    const medidaA = parseFloat(document.getElementById("medidaA").value);
    const medidaB = parseFloat(document.getElementById("medidaB").value);
    const medidaC = parseFloat(document.getElementById("medidaC").value);
  
    const areaQuadrado = (medidaA * medidaA).toFixed(4);
    const areaTriangulo = (0.5 * medidaA * medidaB).toFixed(4);
    const areaTrapezio = ((medidaA + medidaB) / 2 * medidaC).toFixed(4);
  
    document.getElementById("areaQuadrado").textContent = areaQuadrado;
    document.getElementById("areaTriangulo").textContent = areaTriangulo;
    document.getElementById("areaTrapezio").textContent = areaTrapezio;
  }
  