function getPlanetaryHour(userDate) {
  let planetas = ["saturnus", "iovis", "mars", "solis", "venus", "mercurius", "luna"];
  let targetDate = new Date(userDate);
  let diaEmMinutos = 24 * 60;
  let periodoEmMinutos = diaEmMinutos / 12;
  
  let minutosDoDia = targetDate.getHours() * 60 + targetDate.getMinutes();
    
  let periodoAtual = Math.floor(minutosDoDia / periodoEmMinutos) % 12;
    
    
  let planetaAtual = planetas[periodoAtual];
  
  
  return planetaAtual
}

module.exports = getPlanetaryHour;