
/*'var' keyword - variable can be called before it's declaration in the up to down flow. The value will be undefined.
variable can be redeclared.
*/
console.log(amount);//produces undefined but program runs
var amount = 2;
var amount = 6; //ok

/*
"strict mode";
'let' keyword is used to declare a variable. If you try to use this variable before it's declaration, reference error is produce.
This is define since ES5
*/
console.log(value);//Error 
let value = 20;

/*
const variable is a let which variable which cannot be modified
*/

const RATE = 4.5;
RATE = 5; //error

/*
EXISTING GLOABAL STANDARD VARIABLES
console
alert
document
window
process
exports
module.

if you use these as variable names, you overwrite the standard variables and calling the standard variables will not work. Eg console.log(something)will fail if you define a new variable with name console.

*/



