function mostrarNumerosPares() {
    const valorX = parseInt(document.getElementById("valorX").value);
    let resultado = "";
  
    for (let i = 2; i <= valorX; i += 2) {
      resultado += i + "<br>";
    }
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  