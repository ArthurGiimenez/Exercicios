function converterTempo() {
    const duracaoSegundos = parseInt(document.getElementById("duracaoSegundos").value);
  
    const horas = Math.floor(duracaoSegundos / 3600);
    const minutos = Math.floor((duracaoSegundos % 3600) / 60);
    const segundos = duracaoSegundos % 60;
  
    const tempoFormatado = `${horas}:${minutos}:${segundos}`;
  
    document.getElementById("tempoFormatado").textContent = tempoFormatado;
  }
  