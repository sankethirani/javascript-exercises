//Original solution that I came up with
// const removeFromArray = function(array, charToRemove) {
//     // for (i = 0; i < array.length; i++){
//     //     for (j = 0; j < arguments.length; j++){
//     //         if(array[i] === arguments[j]){
//     //             array.splice(i, 1);
//     //         }
//     //     }
//     // }
//     // return array;
//     return array.filter(x => !Array.from(arguments).includes(x));
// };

//similar and better way of doing what is done above
const removeFromArray = function(array, ...args){
   return array.filter(element => !args.includes(element));
}


// //Simpler solution from TOP
// const removeFromArray = function(array, ...args){
//     //create empty array
//     const returnArray = [];
//     //loop through each item in the array
//     array.forEach(element => {

//         //check to see if any of the arguments is not equal to the current array element you are looping through
//         if(!args.includes(element)){
//             //if it is not included in the list of args, add it the new empty list ====> it is a unique element;
//             returnArray.push(element);
//         }
//     });
//     return returnArray;
// }

// Do not edit below this line
module.exports = removeFromArray;
