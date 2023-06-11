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
    /* slice() : It is used to copy elements from an array. It returns an array containing the copied elements. 
    
    It takes two arguments :
    @param0 - the index from which the extraction should start.
    @param1 = the index from which the extraction should end. If this is not supplied, extraction ends at end of array.
    */

    let names = ["James", "Luke", "Lily", "Ethan", "Moore"];

    console.log(`Slided = ${names.slice(1,4)}`); // Luke, lily, Ethan
    console.log("Names = ", names);

    console.log(names.slice(2,-1));
    


    

    






    










