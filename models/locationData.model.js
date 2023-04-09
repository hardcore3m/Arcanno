const planetaryHour = require('../functions/planetaryHour');
const astroPosition = require('../functions/astroPositions');

class Location {
  constructor(date, location) {
    this.date = new Date(parseInt(date, 10));
    this.latitude = parseFloat(location.split(',')[0]);
    this.longitude = parseFloat(location.split(',')[1]);
    this.utcRegion = this.longitude < 0 ? '-' + Math.abs(Math.floor(this.longitude / 15)) : '+' + Math.abs(Math.floor(this.longitude / 15));
  }

  toString() {
    return `Date: ${this.date}, 
    Latitude: ${this.latitude}, 
    Longitude: ${this.longitude}, 
    UTC Region: ${this.utcRegion}, 
    Planetary Hour: ${this.getPlanetaryHour()}`;
  }

  getPlanetaryHour() {
    const planet = planetaryHour(this.date, this.latitude, this.longitude);
    return planet.name;
  }

  getAstroPositions() {
    return astroPosition(this.date, this.latitude, this.longitude);
  }
}


module.exports = Location;