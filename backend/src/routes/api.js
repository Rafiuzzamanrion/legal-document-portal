const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const { validateSearchQuery } = require('../middlewares/validator');

router.get('/generate', validateSearchQuery, documentController.generate);

module.exports = router;