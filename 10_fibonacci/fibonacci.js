const fibonacci = function(n) {
    // let sequence = [1,1];
    // if (!isNaN(n) && n > 0){
    //     for (i = 1; i <= n; i++){
    //         sequence.push(sequence[i] + sequence[i-1]);
    //     }
    //     return (sequence[sequence.length - 3]);
    // }
    // else{
    //     return("OOPS");
    // }

    //better solution
    if (isNaN(n)) return false;
    if(n < 0) return "OOPS";
    if(n === 0) return 0;
    let a = 0;
    let b = 1;
    for (i = 1; i < n; i++){
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
