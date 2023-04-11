const express = require('express');
const readingController = require('../controllers/reading.controller');
const router = express.Router();

router.get('/', readingController.read);


module.exports = router;