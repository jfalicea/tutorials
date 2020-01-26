

function convertRAAnswers(arr){
    const convertedAnswersquestionGroup= arr.map(answer => {
       return wordsRiskConvertToNumbers(answer)
        })
    return convertedAnswersquestionGroup 
};

function riskAssessment(arr){
    const arrAvg = arr.reduce((a,b) => a + b, 0)/arr.length
    return Math.ceil(arrAvg)
};


function numericRiskConvertToWords(num){
    switch(num){
        case 3:
            return 'high';
        case 2: 
            return 'medium';
        case 1: 
            return 'low';
    }
}

function wordsRiskConvertToNumbers(str){
    switch(str.toLowerCase()){
        case 'high':
            return 3;
        case 'medium':
            return 2;
        case 'low':
            return 1;
    }
}

module.exports = {
    convertRAAnswers,
    riskAssessment,
    numericRiskConvertToWords,
    wordsRiskConvertToNumbers
}