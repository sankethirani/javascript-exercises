const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numberList) {
	return numberList.reduce((sum, number) => {
    return sum += number;
  }, 0);
}

const multiply = function(numberList) {
  return numberList.reduce((product, number) => {
    return product *= number;
  }, 1);

};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let answer = 1;
	if (a === 0){
    answer = 1;
  }
  else {
    for (i = 1; i <= a; i++){
      answer *= i;
    }
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
