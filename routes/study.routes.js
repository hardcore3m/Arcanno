const express = require('express');
const referenceController = require('../controllers/references.controller');
const router = express.Router();

router.get('/', referenceController. main);
router.get('/list', referenceController.list);

module.exports = router;