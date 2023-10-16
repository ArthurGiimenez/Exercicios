function calcularPagamento() {
    const nome = document.getElementById("nome").value;
    const valorPorHora = parseFloat(document.getElementById("valorPorHora").value);
    const horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);
  
    const pagamento = (valorPorHora * horasTrabalhadas).toFixed(2);
  
    document.getElementById("nomeDisplay").textContent = nome;
    document.getElementById("pagamento").textContent = pagamento;
  }
  