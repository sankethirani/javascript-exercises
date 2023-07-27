const palindromes = function (string) {
    const trimmedString = string.replaceAll(",", "")
        .replaceAll(".","")
        .replaceAll("?", "")
        .replaceAll("'", "")
        .replaceAll("!","")
        .replaceAll(" ", "")
        .toLowerCase();
    
    return trimmedString === trimmedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
