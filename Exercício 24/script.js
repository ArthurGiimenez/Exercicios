function ordenarValores() {
    const valor1 = parseInt(document.getElementById("valor1").value);
    const valor2 = parseInt(document.getElementById("valor2").value);
    const valor3 = parseInt(document.getElementById("valor3").value);
    const valor4 = parseInt(document.getElementById("valor4").value);
    const valor5 = parseInt(document.getElementById("valor5").value);
  
    const valores = [valor1, valor2, valor3, valor4, valor5];
  
    valores.sort((a, b) => a - b);
  
    document.getElementById("valoresOrdenados").textContent = valores.join(", ");
  }
  