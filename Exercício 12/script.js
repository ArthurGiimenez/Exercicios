function calcularRaizes() {
    const coeficienteA = parseFloat(document.getElementById("coeficienteA").value);
    const coeficienteB = parseFloat(document.getElementById("coeficienteB").value);
    const coeficienteC = parseFloat(document.getElementById("coeficienteC").value);
  
    const delta = coeficienteB ** 2 - 4 * coeficienteA * coeficienteC;
  
    if (delta < 0) {
      document.getElementById("x1").textContent = "Esta equação não possui raízes reais";
      document.getElementById("x2").textContent = "";
    } else {
      const x1 = ((-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA)).toFixed(4);
      const x2 = ((-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA)).toFixed(4);
  
      document.getElementById("x1").textContent = x1;
      document.getElementById("x2").textContent = x2;
    }
  }
  