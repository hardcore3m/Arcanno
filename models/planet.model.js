const jsonData = require('../functions/readJsonFiles');

class Planet {
    constructor(id, astrodot, name, quality, key, domicile, exaltation, fall, exile, topics, description, characteristics, interpretation, positioning) {
        this.id = id;
        this.astrodot = astrodot;
        this.name = name;
        this.quality = quality;
        this.key = key;
        this.domicile = domicile;
        this.exaltation = exaltation;
        this.fall = fall;
        this.exile = exile;
        this.topics = topics;
        this.description = description;
        this.characteristics = characteristics;
        this.interpretation = interpretation;
        this.positioning = positioning;
    }

    getIdNameAndQuality() {
        return {id:this.id,astrodot:this.astrodot,name:this.name,quality:this.quality};
    }

    getDignities() {
        return `Domicile: ${this.domicile}, Exaltation: ${this.exaltation}, Fall: ${this.fall}, Exile: ${this.exile}`;
    }

    getDescriptionAndCharacteristics() {
        return `${this.description} ${this.characteristics}`;
    }

    getInterpretationAndPositioning() {
        return `${this.interpretation} ${this.positioning}`;
    }

}

const planets = jsonData.planets[0].data.map((el) => {
    let _id = el.id.toLowerCase();
    let _astrodot = el.astrodot;
    let _name = {
        pt: el.name_pt,
        en: el.name_en,
        es: el.name_es
    };
    let _quality = {
        pt: el.quality_pt,
        en: el.quality_en,
        es: el.quality_es
    };
    let _key = {
        pt: el.key_pt,
        en: el.key_en,
        es: el.key_es
    };
    let _domicile = el.domicile.split(',');
    let _exaltation = el.exaltation.split(',');
    let _fall = el.fall.split(',');
    let _exile = el.exile.split(',');
    let _topics = {
        pt: el.topics_pt.split(','),
        en: el.topics_en.split(','),
        es: el.topics_es.split(',')
    };
    let _description = {
        pt: el.description_pt,
        en: el.description_en,
        es: el.description_es
    };
    let _characteristics = {
        pt: el.characteristics_pt,
        en: el.characteristics_en,
        es: el.characteristics_es
    };
    let _interpretation = {
        pt: el.interpretation_pt,
        en: el.interpretation_en,
        es: el.interpretation_es
    };
    let _positioning = {
        pt: el.positioning_pt,
        en: el.positioning_en,
        es: el.positioning_es
    };

    return new Planet(_id, _astrodot, _name, _quality, _key, _domicile, _exaltation, _fall, _exile, _topics, _description, _characteristics, _interpretation, _positioning);
})

exports.getPlanetById = function (id) {
    return planets.find(planet => planet.id === id)
}
exports.list=planets.map((planet)=>{
    return planet.getIdNameAndQuality()
})