const reverseString = function(text) {
    //my solution
    const textArray = text.split("");
    let reverseText = "";
    for (i = textArray.length - 1; i >= 0; i--){
        reverseText += textArray[i];
    }
    return reverseText;

    //better way of doing it
    return text.split("").reverse().join("");
    //Split the text into an array of characters
    //Reverse the array using array.reverse() method
    //Make a string of the character array using the join() method
};

// Do not edit below this line
module.exports = reverseString;
