const express = require('express');
const router = express.Router(); 
const path = require('path');
const rootDir = require('../utils/path')
router.use('/add-product',(req,res,next)=>{
    // console.log('hello-world & /users');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title" /><button type="submit">Send</button></form>')
    res.sendFile(path.join(rootDir,"views","add-product.html"))
})

router.post('/product', (req,res,next)=>{
    console.log("req.body",req.body)
    res.redirect('/');
})

module.exports = router; 


