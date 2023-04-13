const express = require('express');
const referenceController = require('../controllers/references.controller');
const router = express.Router();

router.get('/', referenceController. main);
router.get('/books', referenceController.books);
router.get('/categories', referenceController.categories);
router.get('/videos', referenceController.videos);

module.exports = router;