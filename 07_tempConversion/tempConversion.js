const convertToCelsius = function(fahrenheit) {
  var tempConversion = (fahrenheit - 32) * (5 / 9);
  return Math.round(tempConversion * 10) / 10; 
};

const convertToFahrenheit = function(celsius) {
  var tempConversion = (celsius * (9 / 5) +32);
  return Math.round(tempConversion * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
