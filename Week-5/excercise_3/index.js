/*
write a function called hasDuplicate which accept arrray and return true or false
if that array contains duplicate. 
*/

/* we are using set constructor because Set constructor returns collections of unique values and its also itrable */

const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

console.log(hasDuplicate([1, 5, -1, 4]));
console.log(hasDuplicate([2, 3, 6, 7, 8, 3, 6]));