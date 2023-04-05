/*PRIMITIVE TYPES:
    numbers (int and floats)
    strings
    boolean (true or false)
    null 
    undefined
OBJECT TYPES
    objects
    arrays
    functions


*DYNAMIC TYPE OR LOOSELY TYPE
    Javascript is a loosely typed language, ie data types are dynamincally determined at runtime by checking the type of the data assigned to it. 

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








