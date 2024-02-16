const express= require('express');
const app = express();
const path = require('path');
const router = express.Router();

const successController = require('../controllers/contacting')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



router.get('/success',successController.getSuccess);

module.exports= router;