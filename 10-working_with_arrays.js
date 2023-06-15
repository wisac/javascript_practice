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
console.log(even);

const largeNum = integers.find(element => element > 100);
console.log(largeNum);

const odd = integers.findIndex(element => element % 2 == 1);
console.log(odd);









 




































