const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

 //404 Page 
 app.use((req, res, next) =>{
     res.status(404).send('<h1>Page Not found</h1>')
 })





app.listen(3000)