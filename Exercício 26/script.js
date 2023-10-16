function contarVogaisConsoantes() {
    const palavra = document.getElementById("palavra").value.toLowerCase();
    let vogais = 0;
    let consoantes = 0;
  
    for (let i = 0; i < palavra.length; i++) {
      const char = palavra[i];
      if (char.match(/[aeiouáéíóúàèìòùãõâêîôû]/)) {
        vogais++;
      } else if (char.match(/[bcdfghjklmnpqrstvwxyzç]/)) {
        consoantes++;
      }
    }
  
    document.getElementById("vogais").textContent = vogais;
    document.getElementById("consoantes").textContent = consoantes;
  }
  