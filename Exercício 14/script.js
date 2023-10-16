function calcularTroco() {
    const precoUnitario = parseFloat(document.getElementById("precoUnitario").value);
    const quantidadeComprada = parseInt(document.getElementById("quantidadeComprada").value);
    const dinheiroRecebido = parseFloat(document.getElementById("dinheiroRecebido").value);
  
    const totalAPagar = precoUnitario * quantidadeComprada;
    const troco = dinheiroRecebido - totalAPagar;
  
    if (troco >= 0) {
      document.getElementById("troco").textContent = troco.toFixed(2);
      document.getElementById("mensagemTrocoInsuficiente").textContent = "";
    } else {
      document.getElementById("troco").textContent = "0.00";
      document.getElementById("mensagemTrocoInsuficiente").textContent = `DINHEIRO INSUFICIENTE. FALTAM R$ ${(totalAPagar - dinheiroRecebido).toFixed(2)} REAIS`;
    }
  }
  