const express = require("express");
const app = express();
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const contactingController = require('../controllers/contacting');

router.get( '/contactus',contactingController.getContacting);

router.post('/contactus',contactingController.postContacting);

module.exports = router;