function calcularAnguloObliquidadeEcliptica(data) {
    // Obter o número de séculos julianos desde 2000-01-01 12:00:00 UTC
    const diasJulianos = (data.getTime() / 86400000) - (data.getTimezoneOffset() / 1440) + 2440587.5;
    const seculosJulianos = (diasJulianos - 2451545) / 36525;

    // Calcular o ângulo de obliquidade da eclíptica em graus
    const angulo = 23.43929111 - (0.013004167 * seculosJulianos) - (1.6667e-7 * Math.pow(seculosJulianos, 2)) + (5.028e-7 * Math.pow(seculosJulianos, 3));

    // Converter o ângulo para radianos e retornar o resultado
    return angulo * (Math.PI / 180);
}

function calcularNumeroJuliano(data) {
    // Extrair os componentes de data e hora
    const ano = data.getFullYear();
    const mes = data.getMonth() + 1;
    const dia = data.getDate();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();

    // Calcular o número juliano
    const a = Math.floor((14 - mes) / 12);
    const y = ano + 4800 - a;
    const m = mes + 12 * a - 3;
    const jdn = dia +
        Math.floor((153 * m + 2) / 5) +
        365 * y +
        Math.floor(y / 4) -
        Math.floor(y / 100) +
        Math.floor(y / 400) -
        32045 +
        (hora - 12) / 24 +
        minuto / 1440 +
        segundo / 86400;

    return jdn;
}

function calcularTempoSideralMedio(numeroJuliano) {
    const T = (numeroJuliano - 2451545.0) / 36525.0;
    const T0 = 6.697374558 + (2400.051336 * T) + (0.000025862 * T * T);
    const tempoSideralMedio = T0 % 24;
    return tempoSideralMedio < 0 ? tempoSideralMedio + 24 : tempoSideralMedio;
  }


module.exports = "getAstrologicalPositions";