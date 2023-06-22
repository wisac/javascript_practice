/* Strings are primitive data types in Js but have methods like objects */
/* Popular Methods: 
    length - returns length of string

    indexOf() - searched the string for the index of the first occurrance of its parameter. It takes additional parameter, which specify the index from which the search should begin.

    slice() - To copy part of the string
    substring(index,preEndIndex) - Extracts string starting from an index to before index.

    substr(index,numberOfStringToExtract) - Extracts specific number of strings starting from an index

    toUpperCase() - convert all string to uppercase
    toLowerCase() - convert all string to lowercase

    charAt() - returns character at a specific index
    
    padStart(maxLen,"str") - Prepends the string with str until string lenght = maxlen
    padEnd(MaxLen, "str") - append the string with str until string lenght = maxlen



*/

let fristName = "Magdalene";
let lastName = "Wilson";

console.log(fristName.indexOf("g")); //2
console.log(lastName.indexOf("son")); // 3 because it starts at index 3
console.log(fristName.indexOf("e",6)); // 7

console.log(fristName.lastIndexOf("a")); // 4

console.log(lastName.slice(1,3)); // il
console.log(fristName.substring(0,3)); // Mag
console.log(fristName.substr(0,4)) // Magd Extracts 4 strings
console.log(fristName.repeat(3)); // MagdaleneMagdaleneMagdalene
console.log(fristName.padStart(15,"Af"));
console.log(lastName.padEnd(10,"e"));








