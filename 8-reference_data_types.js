/* REFERENCE DATA TYPES 
Arrays, objects

In primitive data types, each time a variable is declared, a new memory is allocated and the value is stored in this new memory. Each time a variable is assigned a value, the value is copied into a new memory location. Therefore changing one does not affect the other since they are all in different memory adddresses.
*/

let x = 5;
let y = 10;

x = y; // x = 10;
y += 5; // y = 15, x = 10;

/*
In the reference data types, the data itself is not stored in the variable but rather a reference to the data is stored in the variable.
In this case, assigning one variable to another does not copy the entire object to the other variable but rather the pointer. As a result, both variables points to the same data and the value of one variable will affect the other as well.
*/

let ages = 
{
  kofi: 23,
  yaw: 15,
  Ama: 11,
};


let students = ages; // pointer to object ages has been assigned to students. Two variables pointing to same object.

students.kofi += 2; // derefencing pointer to ages/students object and modify object

ages.Ama = 12; // deferecing pointer to ages/students object and modify object

console.log(ages); //output: [kofi: 25, Yaw: 15, Ama: 13]
console.log(students); //output: [kofi: 25, Yaw: 15, Ama: 13]




/* PRIMITIVE AND REFERENCE DATA TYPES AS FUNCTION ARGUMENTS
    When you pass a primitive data type as an argument to a function, the argument is passed by value, that is the value of the variable is copied into the function parameters and therefore any change you make to the parameters does not affect the variable passed.

    On the other hand, if you pass a primitive data type as and argument to a function, it is passed by reference and therefore when you modify the parameter values, you indirectly modify the data passed as well.
*/


function updatePrice(item)
{
  if (item != undefined)
  {
    if(typeof(item) == "object")
    {
      item.apple -= 1.89; // modifying argument passed
    }

    if (typeof(item) == "number")
    {
      item += 1.5; // modifying argument passed
    }

    return item; 
  }
}


spoon = 31.87;

fruits = 
{
  apple: 17.99,
  orange: 4.59
};


console.log(updatePrice(spoon));  // 33.37 
console.log(spoon);               // 31.87  variable was not modified
console.log(updatePrice(fruits))  // [apple: 16.09, orange: 4.59] 
console.log(fruits);              // [apple: 16.09, orange: 4.59]  object was modified by updatePrice()



/* The typeof operator is a unery operator used to determine the data type of its operand. 
The operator returns a string of the the data type of its operand

syntax: 
  typeof operand
*/


function funcx()
{
  return typeof "something"; 
}

console.log(typeof(typeof(true))); // string - the data type of the return value of typeof


console.log(typeof true);                // boolean
console.log(typeof 4711);                // number
console.log(typeof 'John Doe');         // string
console.log(typeof function () {});     // function
console.log(typeof {});                 // object
console.log(typeof []);                 // object - array is of type object
console.log(typeof null);              // object - null is of type object
console.log(typeof undefined);         // undefined
console.log(typeof Symbol('B'));        // symbol




/* NB: You cannot use the typeof operator to distinguish between reference types since they will all return objects. Eg it cannot be used to distinguish between an array and a normal object*/




/* USING INSTANCEOF OPERATOR TO DISTINGUISH BETWEEN REFERENCE TYPES
  The instanceof operator evaluates if its first operand is an instance of its second operand and return either true or false.


  syntax:
    <operand> instanceof <datatype>


  NB: it cannot be used to distaingush betweeen primitive types
*/


let numbers = [3,5,6,3,7,2,8];

let group = 
{
  name: "spartans",
  location: "Tema"
};

function add(x, y)
{
  return x + y;
}


let text = "9389ioj";

console.log("\nusage of instanceof:")
console.log(numbers instanceof Number); //false
console.log(numbers instanceof Array); //true
console.log(numbers instanceof Object); //true - arrays are objects
console.log(group instanceof Object); //true
console.log(add instanceof Function); //true
console.log(text instanceof String);  //false
console.log(add instanceof Object)  // true - functions are objects/ reference types


/* NB: Object is the type from which all other reference types are derieved. Therefore any reference type is an instance of an object*/

/* To check whether a variable is an array, the Array.isArray(variable) method can be used to check this. It's return value is a boolean*/


console.log(Array.isArray(text)) // false
console.log(Array.isArray(numbers))  // true




/* VARIOUS DEFAULT REFERENCE TYPES IN JS */

/*
  1. Object - represent all types of objects
  2. Array - represent arrays 
  3. RegEx = represent Regular Expressions that can be used to search for 
     partterns in a string
  4. Date - represents data and time
  5. Math - represent mathematical operations for calculations

*/










