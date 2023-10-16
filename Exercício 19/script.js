function calcularAumentoSalario() {
    const salario = parseFloat(document.getElementById("salario").value);
    let novoSalario = 0.0;
    let aumento = 0.0;
    let porcentagemAumento = 0;
  
    if (salario <= 999.00) {
      porcentagemAumento = 20;
    } else if (salario <= 2999.00) {
      porcentagemAumento = 15;
    } else if (salario <= 7999.00) {
      porcentagemAumento = 10;
    } else {
      porcentagemAumento = 5;
    }
  
    aumento = (salario * porcentagemAumento) / 100;
    novoSalario = salario + aumento;
  
    document.getElementById("novoSalario").textContent = novoSalario.toFixed(2);
    document.getElementById("aumento").textContent = aumento.toFixed(2);
    document.getElementById("porcentagemAumento").textContent = porcentagemAumento + " %";
  }
  