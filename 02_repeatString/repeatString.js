const repeatString = function(inputString, noOfRepeats) {
    let returnString = '';
    if (noOfRepeats < 0){
        return 'ERROR';
    }
    else{
        for (i = 1; i <= noOfRepeats; i++){
            returnString += inputString;
        }
        return returnString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
