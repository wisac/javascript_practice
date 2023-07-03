/*There are different error types in Javascript. These include:
1. EvalError - Occurs when eval() is used incorrectly.
2. RandgeError - Occurs when a number is outside range values
3. ReferenceError - Occurs when a reference type is expected at
    a praticular location. Usually occurs when you try to access noexisting variable.
4. Syntax error - Occurs when there is error in syntax when
    parsing the source code with eval()
TypeError - Occurs when variable is called with invalid type
5. URLError - Occurs when an error occurs when connecting to a
   url
*/


//Use of try-catch statements

function createArray(length)
{
    return new Array(length);
}

let array;

try 
{
    array = createArray(-5); //creating an array with a negative size. An error is expected
}
catch(error)
{
    console.log(error.name); //log type of error: RangeError
    console.log(error.message); //log error description: invalid array length
}





//THE ERROR OBJECT
/* The error object is available in the catch block provides two properties which can be used to get information about the error. 

        errorObject.name - type of error
        errorObject.message - decription of the error

The error object also has fileName, lineNumber and columnName properties in the firefox environment. These are not standardized so using them is not advisable

The error object takes abituary names but this provide the properties.
*/


//USING TRY CATCH STATEMENTS
/* Syntax:
        try 
        {
            code to be executed
        }
        catch(error)
        {
            //
        }


/* TRIGGERING ERRORS
    The throw keyword is used to throw errors.

    Syntax:
        throw new ErrorType("Error message");
*/

    function checkEven(evenNumber)
    {   
        if (isNaN(parseFloat(evenNumber)))
        {
            throw new TypeError("A number must be entered");
        }

        if (evenNumber % 2 !== 0)
        {
            throw new Error("Number is not even");
        }

        return evenNumber;
    }

    
    // console.log(checkEven(8)) // 8
    // console.log(checkEven(19)); // error: Number is not even
    // console.log(checkEven("Kofi")); // TypeError: Even number not a number


    /* NB: You can only use on catch block for every try block in javascript */


    /* Errors and function call stack 
        When an error is thrown in a function, if a catch block is not found, the control jumps from that function to the function which called if a catch block is not found in that function too, the control jumps to the function that called it. This happens until the jump reaches the global code. If the error is not handled in the global code, it ends up with the user.


        NB: Errors that can be handled  or work around by the user should be forwarded to the user. Otherwise, it should be solved in other ways or written to the console.
    */

    
    console.log("\n\nCall stack and error throwing");

    function printA(a)
    {
        console.log("in A")
        throw new TypeError("Error thrown in A");
    }

    function printB(b)
    {
        console.log("in B")
        printA(4);
        
    }

    function printC(c)
    {
        console.log("In C")
        printB(9);
    
        return c;
    }




function printD()
{
    let p;

    console.log("in D")
    try 
    {
         p = printC(3);

    }

    catch(error)
    {
        console.log(error.name);
        console.log("Errror handled in D")// error in A handled here
    }

    return p * 5;
}

console.log(printD());


/*USING FINALLY STATEMENT 
    The finally block is alway executed whether the exception catch is handled or not.

    */

    function tryCatchFinally()
    {
        try 
        {
            let m = new Array(-6);
        }
        catch(er)
        {

            console.log(er.name);
            console.log(er.message);
        }
        finally 
        {
            console.log("done");
        }

    }


    tryCatchFinally();

    /*
        various combinations 
        try - catch 
        try finally
        try catch finally
    */

