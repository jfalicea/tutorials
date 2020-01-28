const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const path = require('path')
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

 //404 Page 
 app.use((req, res, next) =>{
    //  res.status(404).send('<h1>Page Not found</h1>')
    res.status(404).sendFile(path.join(__dirname,'views','404.html'), (err)=>{if (err) throw err} )
 })





app.listen(3000)