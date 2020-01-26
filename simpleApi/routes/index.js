var express = require('express');
var router = express.Router();
const name = require('./index.controler')
const raFunc = require('./index.models')
const axios = require('axios')

const sampleData = ["HIGH","LOW","MEDIUM"]
const fs = require('fs')

router.get('/', (req, res, next)=>{
    filename = `hello-world.txt`
    fs.writeFileSync(filename, 'goodbye-word', (err)=>{
        if(err) throw err ; 
    }) 
    res.json('ok')
})

router.put('/', (req,res,next)=>{
    fs.appendFileSync(req.body.name, `\n${req.body.body}`, 'utf8', (err)=>{
        if(err) fs.writeFileSync('errs', err); 
        console.log('ok')
        res.json('fail')
    })
    console.log('success')
    res.json('success')
})
router.post('/questions', riskAssessmentQuestionAnswers )



function riskAssessmentQuestionAnswers (req,res,next) {
    const answerArr = req.body.answerArr.split(',')
    if(typeof answerArr != 'string'){
        res.status(400).json('the answerArr input should be a string.')
    }
    const aggRiskAssessmentValue = raFunc.riskAssessment(raFunc.convertRAAnswers(answerArr))
    //TODO: submit to database

    //send aggreagate risk assessed value back to frontend 
    const aggRiskAssessmentValueWord = raFunc.numericRiskConvertToWords(aggRiskAssessmentValue)
    res.status(200).json(aggRiskAssessmentValueWord.toUpperCase()) 
}








function sanityCheck (req,res,next){
    console.log("'/' is ok");
    res.status(200).json('everything is ok.')
};
module.exports = router;
