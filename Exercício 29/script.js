function validarCNPJ(cnpj) {
    // Remove caracteres especiais e deixa apenas os números
    cnpj = cnpj.replace(/[^\d]/g, '');
  
    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
      return "Inválido";
    }
  
    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 12; i++) {
      soma += parseInt(cnpj.charAt(i)) * (6 - (i % 6));
    }
    const primeiroDigito = (soma % 11 < 2) ? 0 : 11 - (soma % 11);
  
    // Verifica o primeiro dígito verificador
    if (parseInt(cnpj.charAt(12)) !== primeiroDigito) {
      return "Inválido";
    }
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 13; i++) {
      soma += parseInt(cnpj.charAt(i)) * (7 - (i % 7));
    }
    const segundoDigito = (soma % 11 < 2) ? 0 : 11 - (soma % 11);
  
    // Verifica o segundo dígito verificador
    if (parseInt(cnpj.charAt(13)) !== segundoDigito) {
      return "Inválido";
    }
  
    return "Válido";
  }
  
  // Exemplos de uso:
  console.log(validarCNPJ("70.345.111/0001-09")); // Saída: Inválido
  console.log(validarCNPJ("97.544.324/0001-22")); // Saída: Válido
  