function calcularIdadeMedia() {
    const nome1 = document.getElementById("nome1").value;
    const idade1 = parseFloat(document.getElementById("idade1").value);
    const nome2 = document.getElementById("nome2").value;
    const idade2 = parseFloat(document.getElementById("idade2").value);
  
    const idadeMedia = ((idade1 + idade2) / 2).toFixed(1);
  
    document.getElementById("nome1Display").textContent = nome1;
    document.getElementById("nome2Display").textContent = nome2;
    document.getElementById("idadeMedia").textContent = idadeMedia;
  }
  