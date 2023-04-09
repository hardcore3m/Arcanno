const express = require('express');
const ephemeridController = require('../controllers/ephemerid.controller');
const router = express.Router();

router.get('/', ephemeridController.getEphemerid);


module.exports = router;