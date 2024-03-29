const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactusRoutes = require('./routes/contact');
const successRoutes = require('./routes/success');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(contactusRoutes);
app.use(successRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });

app.listen(3000);