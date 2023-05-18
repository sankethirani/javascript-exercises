const sumAll = function(value1, value2) {
    let sum = 0;

    if (value1 < 0 ||
        value2 < 0 ||
        !Number.isInteger(value1) ||
        !Number.isInteger(value2)){
            return "ERROR";
    }
    else{
        let smallerValue;
        let largerValue;

        if (value1 > value2){
            largerValue = value1;
            smallerValue = value2;
        }
        else{
            largerValue = value2;
            smallerValue = value1;
        }

        for(i = smallerValue; i <= largerValue; i++){
            sum += i;
        }
        
        return sum;
    }

    
};

// Do not edit below this line
module.exports = sumAll;
