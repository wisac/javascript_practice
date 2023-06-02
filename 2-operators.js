/* Javascript has similar operators like the ones in C++/java
    ** - power operator
   
    *Using boolean with non boolean objects
    falsy and truthy values 
    */

    console.log('' && null);

    /* Special values Nan, null and undefined are all falsy values*/

/*RELATIONAL OPERATORS 
    equal == : compares only values. Does not take into consideration data type of operands. 

    strictly equal to === : compares value as well as data type. Returns true  only if value and data type are equal

    strictly NOT equal to !== : compares value and type as well
*/

console.log(5 == "5");  // returns true
console.log(5 === "5"); // returns false
console.log(10 !== 10); // returns false

/* When you compare a string and a number, the number is parsed into a string so the comparison yields true. 
This is called implicit type conversion

Best practice - Always use strict comparison to avoid implicit conversions which may result in buggy code
*/


/*THE OPTIONAL CHAINING OPERATOR
    In order to use nested members of a class, you have to check whether the member is present in the hierachy in order to avoid runtime error.
    This is difficult to do until ES2020.
*/

const Person = {
    name: {
        firstName: "Isaac",
        lastName: "Wilson"
    },
    age: 28,
    height: 170
}

const Work = {
    name: "Software Engineer",
    position: "Frontend developer"
}

console.log(Person.name.firstName); // okay prints first name since first name member is present

console.log(Work.name.firstName); // will produce runtime error since work has no member called firstName in the hierachy


/* With ES2020, the Optional Chain Operator was introduced. This is done by adding ? before the dot operator when trying to acces the member.
*/
console.log(Work.name?.firstName); // returns undefined because it first checks to see if the member exists.


/* OTHER SPECIAL OPERATORS

   1. Ternary operator 
        syntax:
            <condition> ? <expression for true> : <expression for false>

*/

let a = 5;

a < 10 ? a++ : a - 50;
console.log(a); // output 6 because condition is true

a > 5 ? console.log(a) : a++; // print statement is excuted because condition is true




/* 
    2. delete - deletes it's operand. 
Operand can be an object property, array element
*/

let array = [4,5,6,3,5,3,6,5];
delete array[5]; // deletes index 5 from array leaving that location empty. Accesing the location give an undefined behaviour.
console.log(array);
console.log(array[5]); // returns undefined


let obj = {
    name: 50,
    age: 34,
    test: function() {
        console.log(this.name);
    }

}

delete obj.name; // name deleted from object members
console.log(obj);

delete obj.test; // deletes function test from object
console.log(obj);


/* 3. in operator - checks whether an object has a property. Returns true or false
    syntax:
        <property> in <object>
*/

console.log(obj.age in obj); // returns false

/* 4. instanceof operator : Checks  whether object is a specific type. 
        It is used to verify a type
        syntax:
            <object> instanceof <type>
*/

console.log(obj instanceof Array); // false
console.log(obj instanceof Object); // true
console.log(54 instanceof Number); // true




/* typeof operator - used to determine the data type of its operand
*/

console.log(typeof "8783"); // output string



