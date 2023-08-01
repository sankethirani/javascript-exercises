const getTheTitles = function(books) {

    // My solution

    // return books.reduce((titleList, currentBook) => {
    //     titleList.push(currentBook.title);
    //     return titleList;
    // }, []);

    // Much cleaner and nicer solution
    return books.map(book => book.title);
}
// Do not edit below this line
module.exports = getTheTitles;
