function calcularTerreno() {
    const largura = parseFloat(document.getElementById("largura").value);
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const valorMetroQuadrado = parseFloat(document.getElementById("valorMetroQuadrado").value);
  
    const area = largura * comprimento;
    const preco = area * valorMetroQuadrado;
  
    document.getElementById("areaTerreno").textContent = area.toFixed(2);
    document.getElementById("precoTerreno").textContent = preco.toFixed(2);
  }
  