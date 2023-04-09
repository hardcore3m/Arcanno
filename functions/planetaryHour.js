var SunCalc = require('suncalc');

function getPlanetaryHour(date, latitude, longitude) {
    const utcOffset = longitude / 15;
    const times = SunCalc.getTimes(date, latitude, longitude);
    const dayDuration = (times.sunset.getTime() - times.sunrise.getTime()) / (1000 * 60);
    const planetaryHourLength = dayDuration / 12;

    const sunrise = new Date(times.sunrise);
    sunrise.setUTCMinutes(0, 0, 0);
    const hourStart = new Date(sunrise.getTime() + Math.floor((date.getTime() - sunrise.getTime()) / (planetaryHourLength * 60 * 1000)) * planetaryHourLength * 60 * 1000);

    const hourIndex = Math.floor((date.getTime() - hourStart.getTime()) / (planetaryHourLength * 60 * 1000));
    // const planets = ['Saturn', 'Jupiter', 'Mars', 'Sun', 'Venus', 'Mercury', 'Moon'];
    const planets = [
        { name: 'Saturn', translations: { en: 'Saturn', pt: 'Saturno', es: 'Saturno', la: 'Saturnus' } },
        { name: 'Jupiter', translations: { en: 'Jupiter', pt: 'Júpiter', es: 'Júpiter', la: 'Iuppiter' } },
        { name: 'Mars', translations: { en: 'Mars', pt: 'Marte', es: 'Marte', la: 'Mars' } },
        { name: 'Sun', translations: { en: 'Sun', pt: 'Sol', es: 'Sol', la: 'Sol' } },
        { name: 'Venus', translations: { en: 'Venus', pt: 'Vênus', es: 'Venus', la: 'Venus' } },
        { name: 'Mercury', translations: { en: 'Mercury', pt: 'Mercúrio', es: 'Mercurio', la: 'Mercurius' } },
        { name: 'Moon', translations: { en: 'Moon', pt: 'Lua', es: 'Luna', la: 'Luna' } }
      ];
    const rulingPlanetIndex = hourIndex % 7;
    const rulingPlanet = planets[rulingPlanetIndex];
    
    return rulingPlanet;
}


module.exports = getPlanetaryHour;