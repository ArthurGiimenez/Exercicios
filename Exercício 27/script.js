function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value.toLowerCase();
    const inversa = palavra.split("").reverse().join("");
  
    if (palavra === inversa) {
      document.getElementById("saida").textContent = "É palíndromo.";
    } else {
      document.getElementById("saida").textContent = "Não é palíndromo.";
    }
  }
  