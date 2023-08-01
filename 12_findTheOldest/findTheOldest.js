const findTheOldest = function(peopleList) {
    return peopleList.reduce((oldestPerson, currentPerson) => {
        const oldestPersonAge = getAge (oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentPersonAge = getAge (currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return oldestPersonAge < currentPersonAge ? currentPerson : oldestPerson;
    });




    // Solution to question 1

    // let oldestPerson = '';

    // peopleList.forEach(person => {
    //     if (oldestPerson === ''){
    //         oldestPerson = person;
    //     }
    //     else{
    //         if ((oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) < (person.yearOfDeath - person.yearOfBirth)){
    //             oldestPerson = person;
    //         }
    //     }
    // });
    // return oldestPerson;
};

const getAge = function(birthDate, deathDate){
    if (!deathDate){
        deathDate = new Date().getFullYear();
    }
    //console.log (`${deathDate} - ${birthDate} = ${deathDate - birthDate}`);
    return deathDate - birthDate;
};


// Do not edit below this line
module.exports = findTheOldest;
