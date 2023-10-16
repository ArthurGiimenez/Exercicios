function calcularRetangulo() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    const area = (base * altura).toFixed(4);
    const perimetro = (2 * (base + altura)).toFixed(4);
    const diagonal = Math.sqrt(base * base + altura * altura).toFixed(4);
  
    document.getElementById("areaRetangulo").textContent = area;
    document.getElementById("perimetroRetangulo").textContent = perimetro;
    document.getElementById("diagonalRetangulo").textContent = diagonal;
  }
  