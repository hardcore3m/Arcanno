const express = require('express');
const router = express.Router();
const planetController = require('../controllers/planet.controller');

router.get('/',planetController.main);
router.get('/:id',planetController.read);

module.exports = router;