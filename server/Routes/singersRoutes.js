const express = require('express');
const { getSingers } = require('../Controllers/singersControllers');
const router = express.Router();

router.get('/singers', getSingers );

module.exports = router;