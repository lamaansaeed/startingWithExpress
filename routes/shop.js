const path = require('path');

const express = require('express');

const shopController = require('../controllers/product')

const router = express.Router();

router.get('/shop',shopController.getProducts);

module.exports = router;
