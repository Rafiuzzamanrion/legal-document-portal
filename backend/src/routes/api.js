const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const { validateSearchQuery } = require('../middlewares/validator');


router.post('/generate', validateSearchQuery, documentController.generate);
router.get('/documents', documentController.getAllDocuments);
router.get('/stats', documentController.getStats);
router.get('/health', documentController.health);

module.exports = router;