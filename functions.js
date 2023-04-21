/*
Functions can be created using function declaration and function expression
In function declaration, the function is created using function name.
NB: These functions can be called before their declaration.

In function expression, the function is created by assigning it's imprementation to a variable.
  The name of the fuction is optional and the function is called using the variable with parentesis added.
  NB: They cannot be called before their declaration
*/
//function declaration with two parameters and return statement
function add(a, b)
{
  return a + b;
}

//function declaration with one parameter no return statement
function print(func) 
{
  console.log(func);
}

//function call
print(add(5,7));

mul(4, 8);

function mul(r, t)
{
  return r * t;
}


//**function expression
const myfunction = function() {
  console.log("anonymous function called");
  return 5+25;
}

console.log(myfunction()); // output message and return value.

//function expression with a parameter
let func2 = function (m) {
  return m ** 2;
}

console.log(func2(20));



/** Using strict mode in functions 
 * put the string 'use strict' on the first line of the function body. This allows you to modify (redefine) the function
*/

function strictFunc() {
  'use strict';
  const message = "hello";
  console.log(message);
}

strictFunc(); // outputs hello world because the function has been modified below

function strictFunc() {
  console.log("hello world");
}

strictFunc(); //outpupts hellow world