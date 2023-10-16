function calcularTroco() {
    const precoUnitario = parseFloat(document.getElementById("precoUnitario").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const dinheiroRecebido = parseFloat(document.getElementById("dinheiroRecebido").value);
  
    const totalCompra = precoUnitario * quantidade;
    const troco = (dinheiroRecebido - totalCompra).toFixed(2);
  
    document.getElementById("troco").textContent = troco;
  }
  