const leapYears = function(year) {
    if ((year % 4 === 0) && !(year % 100 === 0) ){
        return (true);
    }
    else if ((year % 100 === 0) && (year % 400 === 0)){
        return (true);
    }
    else{
        return (false);
    }
};

// Do not edit below this line
module.exports = leapYears;




// year % 4 = 0 is a leap year but year % 100 = 0 is not unless
// year % 100 = 0 is not a leap year unless year % 400 = 0