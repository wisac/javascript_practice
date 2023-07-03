/*PRIMITIVE TYPES:
    numbers (int and floats)
    strings
    boolean (true or false)
    SPECIAL TYPES
    null 
    undefined
REFERENCE DATA TYPES
    objects
    arrays
    functions


*DYNAMIC TYPE OR LOOSELY TYPE
    Javascript is a loosely typed language, i.e data types are dynamincally determined at runtime by checking the type of the data assigned to it. 


1. NUMBER DATA TYPE
*NUMBER SYSTEMS
    Integers can be defined in terms of their base or number system by prefixing the value with a given character. Eg to declare a binary number, prefix it's value with 0b and follow it by the bits of the number
    */

    let number = 0b10101010101;
    console.log(number); //1365


    /*Octal numbers begin with 0 follow by remaining octal digits(0 - 7)*/
    let octalNUmber = 021; //octal representation of 17
    console.log("021 octal to decimal is =",octalNUmber); // 17

    /*hexadecimal number begin with 0x or 0X follow by the hex value (0 - F)*/
    let hexNumber = 0x4353;
    console.log("hex value of 4353 is %d",hexNumber);



/*
SPACING NUMBERS TO IMPROVE READABILITY
    As of ES2021, you can use uderscore to separate larger numbers to improve readability
*/

    let amount = 1_564_00;//separate two numbers
    amount = 1_564_065//separate three numbers

    console.log("amount = %d",amount);

/* Grouping can also be done for binary, octal and hex numbers but the underscore CANNOT be inserted immediately after the b*/

    let binaryNumber = 0b1000_11;
    console.log(binaryNumber); //35




/*RANGE OF NUMBERS
The highest possible value and lowest possible value a number can have

value is stored in Number.MAX_VALUE and Number.MIN_VALUE of the Number object;

for numbers outside this range, use the infinity property of number
*/

console.log("min value = %d",Number.MIN_VALUE);
console.log("max value %d", Number.MAX_VALUE);
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;

/*NaN a value of a calculation that does not yield a number*/




/* 2. STRING DATA TYPE
Use single qoutes or double qoutes to declare strings. Cannot mixed the two


*Template strings
    They are declared with their values inside a ` ` characters(backtick). They can be used as placeholder within another template strings by using $sign

    The placeholders can be variables, function calls
*/

const fname = `Kojo`;
const lname = `Frimpong`;
const fulname = `${fname} ${lname}`;

console.log(fulname);//Kojo Frimpong
console.log(`My name is ${fname} ${lname}`);//Kojo Frimpong

function printFull() 
{
    return (`${fname} ${lname} is my full name`);

}

console.log(`${printFull()}`);//fucntion call withing template strings placeholder
//Kwaku Frimpong is my full name


/*SPECIAL DATA TYPES
    undefined - an uninitialised variable has a value of undefined.
        The return value of a function without a return statement is undefined


    null - an empty object pointer// an empty object
    
    NB: Undefined is not meant to be asssigned to a variable but null is meant to be assigned to a variable;




    *symbols - They are unique and immutable values
            Introduced in ES2015
        
    */

            const firstSym = Symbol("Hello");
            console.log(firstSym);

            const seccondSym = Symbol("Hello");

            console.log(firstSym == seccondSym); // Returns false even though their values and the text are the same, Every symbol is unique;







