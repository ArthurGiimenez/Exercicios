function mostrarTabuada() {
    const valorN = parseInt(document.getElementById("valorN").value);
    let tabuada = "";
  
    for (let i = 1; i <= 10; i++) {
      const resultado = valorN * i;
      tabuada += `${valorN} x ${i} = ${resultado}<br>`;
    }
  
    document.getElementById("tabuada").innerHTML = tabuada;
  }
  