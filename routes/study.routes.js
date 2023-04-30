const express = require('express');
const router = express.Router();
const referenceController = require('../controllers/references.controller');
const planetController = require('../controllers/planet.controller');

router.get('/', referenceController. main);
router.get('/books', referenceController.books);
router.get('/categories', referenceController.categories);
router.get('/videos', referenceController.videos);
router.get('/typos', referenceController.typos);
router.get('/planets',planetController.main);

module.exports = router;