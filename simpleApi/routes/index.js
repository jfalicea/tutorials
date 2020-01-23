var express = require('express');
var router = express.Router();
const name = require('./index.controler')
// router.use((req, res, next)=>{
  
// }); 


router.use(name.checkSec);


router.get('/', name.getName);
router.post('/', name.addName);



module.exports = router;
