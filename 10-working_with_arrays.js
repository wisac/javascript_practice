/*1. CREATING ARRAYS
    1. Array literal notation
    2. Via constructor function

 literal notation

 let arr = [element0,elem1,...]

 */

let evenNumbers = [2,4,6,8,10]; // literal notation

let oddNumbers = new Array(1,3,5,7,9);

/* The Array constructor fucntion expects length of the array as an argument.
     1. If only one argument is passed, and the argument is a integer, it represents the LENGTH of the array. But if the argument is not an integer, array would be created with that argument as an element.

     2. If two or more integers are passed, an array would be created with the number arguments passed.
*/

let arr1 = new Array(1); // creates array of length 5
let arr2 = new Array(5,6); //creates array of 2 elements
let arr3 = new Array("mango"); //creates an array with one element



/* 2. ADDING AND REMOVING ELEMENTS

        push() : Append elements to the end of the array and returns length of array
        pop() : remove last element from array and returns element.
        shift() : Removes first element from the array and returns it
        unshift() : Adds element at the beginning and return new length

        splice() : Inserts elements at specific index, can delete before inserting new elements. It returns an array of the removed elements

            syntax:
                arr.splice(start index, number of elem to be deleted, elements to insert);


        NB: push and unshift methods do not overwrite members.
*/

    arr2.push(8,9); // 4
    console.log(arr2.pop());
    arr1.shift();
    arr1.unshift(9,0,6,2,4); // 9, 0, ...
    arr1.push(99);
    console.log(arr1)


    arr1.splice(2,0,77,88); // inserts 77 and 88 from [2]. Other elements are shifted backwards
    console.log(arr1);

    arr1.splice(3,1,-4); // removes 1 element from index 3 and insert -4 at index 3

    console.log(arr1);


    /* COPY ELEMENTS FROM AN ARRAY */
    /*The slice() method is used to copy elements from an array. It returns an array containing the copied elements.

    It takes two arguments :
    @param0 - the index from which the extraction should start.
    @param1 = the index from which the extraction should end. If this is not supplied, extraction ends at end of array.
    */

    let names = ["zero", "one", "two", "three", "four"];

    console.log(`Slided = ${names.slice(1,4)}`); // Luke, lily, Ethan
    console.log("Names = ", names);

    console.log(names.slice(2,-1)); // from 2 to 4
    console.log(names.slice(0,-3));
    console.log(names.slice(-4, -1)); 1, 4 // lily ethan
    console.log(names.slice(-2,1)); // ; // 3, 1 Not work
    console.log(names.slice(2,8)); // 2 to end

    /* NB: @start
            If only one args is given, if positive, start from that index and extract till the end inclusive
            If negative, start from the back and extract last inclusive

            If two args are given, if negative add length to start.

            @end
                If negative, add length ot it and exclude end index

            If after adding length to it the first is larger than last, it woudl not work

            If end > length, length is used
            */


    /*SORTING ARRAYS
      The sort and reverse methods are available for use in sorting an array.
      The reverse method reverses the array whilst the sort method sorts the array in a specific order.
    */

     fruits = ["orange", "mango", "melon", "pear", "berries"];
     fruits.reverse();
     console.log(fruits); //berries, pear, melon, mango, orange


     /*Using sort method */
    /* We can use the sort method with comparison functions in order to specify the cateria for sorting elements in an array.
    The comparison function is then passed as an argument to the array.sort method
    */

    ages = [74,45,7,9,25,6,13,12];

    function compare(value1, value2)
    {
        if (value1 > value2)
        {
            return 1;
        }
        else if (value1 < value2)
        {
            return -1;
        }
        else
        {
            return 0;
        }
    }

    ages.sort(compare); //sorting ages in ascending order
    console.log(ages); // output: 6, 7, 9, 12, 13, 25, 45, 74


    /*NB: In Javascript, we can pass functions as arguments to other functions. When doing so, the () is omited so that that return value instead would not be passed.
    */



/* USING ARRAYS AS STACK */
/* Stack can be implemeted in JS by using arrays. To do this, we use the push and pop method of the array object.


Application of stack
     Undo and redo action of a user
*/

const stack = []; /// Declare an empty array

stack.push(4);
stack.push(5,7,4,3,7);
console.log(stack);
stack.pop();
console.log(stack);


/* USING ARRAYS AS QUEUES
    Queue is a linear data structure and works on the FIFO principle.
    Queue can be implemented in js by using arrays and push and shift methods of array.

    Application of queues
        Message queues
    
*/

const queue = [];
queue.push(12);
queue.push(5,32,6,9);
console.log(queue);
queue.shift();
console.log(queue);


/*FINDING ELEMENTS IN AN ARRAY 

indexOf() - returns the index of its argument, a second argument can be used to specify where the search should begin. It returns -1 if element was not found

lastIndexOf() - It searches from the end of the array and return the index of the argument if present. Otherwise, returns -1;
*/

console.log(queue.indexOf(6));
console.log(queue.lastIndexOf(6));


    /*Using arrays.includes() method
        As of ES2016, the includes() method is used to check whether an arrat contains the passed values or not. It returns a boolean.
        
        Addtional @para can be used to specify where the search should begiin.

    */

    console.log(queue.includes(13)); // false



    /* USING find() and findIndex() methods

        Both methods accept a test function. find() returns the first occurrance of an element which satisfies the condition and findIndex() returns the index of the first element which meets the condition.
        

        Syntax: 
          array.find(callback(element[, index[, array]])[, thisArg])

                *array: The array on which the find() method is called.

                *callback: A function that is called for each element in the array. It accepts three arguments:

                *element: The current element being processed in the array.

                *index (optional): The index of the current element being processed.

                *array (optional): The array on which the find() method was called.

                *thisArg (optional): An object that will be used as the this value within the callback function.
*/

                const integers = [4,6,29,0,1,7,43,223,87,10];

                const even = integers.find(function (element) 
                {
                    if (element % 2 == 0)
                        return element;
                });
                    
                console.log("\nUSING FIND AND FINDINDEX METHODS\n");

                console.log(even); // 6

                const largeNum = integers.find(element => element > 100); //222
                console.log(largeNum);

                const odd = integers.findIndex(element => element % 2 == 1);
                console.log(odd); // 2



/* COPY ELEMENTS WITHIN AN ARRAY 
    As of ES6, it is possible to copy elements within an array. That is copy elements from one part of the array to another part of the same array.


    copyWithin() method takes three arguments 
     1. The destination starting index
     2. The source starting index
     3. The source end index

*/


const cars = ["Mercedez","Toyota","Honda","Land Rover", "Jaguar", "Audi", "KIA"];
console.log("\nUSING copyWithin method");
console.log(cars);
cars.copyWithin(1,3,4);
console.log(cars);


/*CONVERTING ARRAYS TO FUNCTIONS 
    To convert arrays into a string (and output it to the console, for
example), you have several options. On the one hand, you can use
the toString(), toLocaleString(), and valueOf() methods. On the
other hand, arrays offer the join() method, which can be used to
join the individual elements of an array into a string. In this case, it’s
possible to specify a string as a parameter that is to be used as a
separator.
*/

const namez = ['John', 'James', 'Peter'];
const namesString = namez.toString();
console.log(namesString); // Output: John,James,Peter

const namesLocaleString = namez.toLocaleString();
console.log(namesLocaleString); // Output: John,James,Peter

const namesValue = namez.valueOf();
console.log(namesValue); // Output: ["John", "James", "Peter"]

const namesJoined = namez.join('-'); // it takes a string as a separator
console.log(namesJoined);  // Output: John-James-Peter



/* EXTRACTING VALUES FROM ARRAYS AND OBJECTS 
    Destructuring of arrays or object refers to assigning object properties or array elements to variables. This saves us from writing redundant code

    Array destructuring provides a simple way to assign the elements of an array to a variable

    NB: Destructuring does not affect the original values in the array.
*/

/*Extrating values from array without destructuring technique. 
Redundant and WET code*/

const cities = ["Accra", "Kumasi", "Wa", "Ho"];
const city1 = cities[0];
const city2 = cities[1];
const city3 = cities[2];
const city4 = cities[3];


/*Extracting from array with destructuring technique
        syntax:
            let [var1,var2,...] = array
*/

const [cityA, cityB, cityC, cityD] = cities; // simply and DRY code
console.log(cityA,cityB,cityC,cityD); // Accra Kumasi Wa Ho

/*NB: If the variables already exist, ignore the const, let or var keyword 
    Default values can also be defined for variable in the array destructuring in order to prevent them from being assigned the undefined.
*/

const [ town1 = "Hohoe",town2 = "sunyi",town3, town4, town5="Cape"] = cities;
console.log(town1,town2,town3,town4,town5);


/* To extract only specific values, provide no variable at the corresponging position and leave a comma in place.
*/


const [c1,,c3,c4,,] = cities;
console.log(c1,c3,c4);






 







































