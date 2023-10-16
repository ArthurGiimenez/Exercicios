function calcularValorAPagar() {
    const minutosConsumidos = parseInt(document.getElementById("minutosConsumidos").value);
    const valorPlanoBasico = 50.00;
    const franquiaMinutos = 100;
    const valorExcedentePorMinuto = 2.00;
  
    let valorAPagar = valorPlanoBasico;
  
    if (minutosConsumidos > franquiaMinutos) {
      const minutosExcedentes = minutosConsumidos - franquiaMinutos;
      valorAPagar += minutosExcedentes * valorExcedentePorMinuto;
    }
  
    document.getElementById("valorAPagar").textContent = valorAPagar.toFixed(2);
  }
  