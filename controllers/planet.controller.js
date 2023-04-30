const models = require('../models/models');
exports.main = (req, res) => {
    try {

        res.status(200).render('planet/index', {

            title: 'Planetas',
            planets: models.planet.list
        });

    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.read = (req, res) => {
    try {
        let planet = models.planet.getPlanetById(req.params.id)
        res.status(200).render('planet/read', {

            title: planet.name.pt,
            planet: planet
        });

    } catch (error) {
        res.status(400).send(error.message);
    }
}