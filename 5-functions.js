/*FUNCTIONS
Functions can be created using function declaration and function expression

In function declaration, the function is created using function name.
NB: These functions can be called before their declaration.

In function expression, the function is created by assigning it's imprementation to a variable.
  The name of the fuction is optional and the function is called using the variable with parentesis added.
  NB: They cannot be called before their declaration


NB: Functions can be redefined and also can be called before their declaration appears in the program.
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


// function expression
const myfunction = function() 
{
  console.log("anonymous function called");
  return 5+25;
}

console.log(myfunction()); // output message and return value.

// function expression with a parameter
let func2 = function (m) 
{
  return m ** 2;
}

console.log(func2(20));


function add(a, b) 
{
  return a * a * a;
}


/** Using strict mode in functions 
 * put the string 'use strict' on the first line of the function body. 
*/

function strictFunc() 
{
  'use strict';
  const message = "hello";
  console.log(message);
}

strictFunc(); // outputs hello world because the function has been modified below

function strictFunc() 
{
  console.log("hello world");
}

strictFunc(); //outputs hellow world



/**
 * CALLING FUNCTIONS WITH FEWER PARAMETERS THAN EXPECTED
    Funcions can be called with fewer arguments than parameter defined. In this case, parameters without arguments behave like an uninitialised local variable.It value is undefined.
 */

    function listItems(a,b,c,d)
    {
      console.log(a,b,c,d);
    }

    listItems(4,5); //output 4 5 undefined undefined

    /*Due to this feature of javascript, you need to always check if arguments are passed to the function before using the parameters with the function.
    This can be done by checking to see if the value of the parameter is not equal to undefined
     */

    function listItemsSafe(a, b, c)
    {
      if(a !== undefined)
        console.log(a);
      
      if (b !== undefined)
        console.log(b);

      if (c !== undefined)
        console.log(c);
    }

    listItemsSafe(5,3) //output 5 \n 3


    /*
     **CALLING FUNCTIONS WITH MORE ARGUMENTS THAN EXPECTED
       It is possible to call functions with more arguments than expected.

       In this case, the excess arguments is not available in the function. 
       
       There is still a way to access the excess arguments. The @arguments object is an array-like object that contains all passed arguments and so every argument can be accessed by using array index notation. We can use argements.length method to find the number of args passed.

       NB: The arguments object does not have all the method available in an array
     */

       /*output formatting : writing without \n character to the console */
       process.stdout.write("343");
       process.stdout.write("now");// output 343now
       

      function listExcess(a, b, c) 
      {
        console.log(a,b,c);

        if (arguments.length > 3)
        {
          for (i = 3; i < arguments.length; i++)
          console.log(arguments[i]);
        }


      }



      console.log("listExcess:");
      listExcess(4,5,1,0,7);  //output 4 5 1 \n 0 \n 7




      /**
       * USING REST PARAMETERS 
       * Since ES2015, rest parameters provide a better way to use excess arguments within a function. Rest parameters contains all excess arguments passed to the function. 
       * 
       * Rest parameters is an array of remaining arguments without parameters and they can be accessed via an index.
       * 
       * 
       * syntax: function(args1, args2, ...restArgs)
       * {
       *  //function body
       * }
       *        
       *NB: the rest parameter container is an array which contains ONLY the arguments to which there are no corresponding parameters. 
       The length property can be used to check whether the length of the array to indicate whether excess arguments were passed or not. 

       rest parameters can be accessed through index notation since it's a proper array.
       * 
       * 
       */
       function showCourses(course1, course2, ...remainingCourses)
       {  
          console.log(course1);
          console.log(course2);
          if (remainingCourses.length > 0)
          {
            let i = 0;
       
            while (i < remainingCourses.length)
            {
              console.log(remainingCourses[i]);
              i++;
            }
          }
       
       
       }
       
       showCourses("DCIT 201", "DCIT 205", "DCIT 209", "DCIT 207");
    /*output 

    DCIT 201
    DCIT 205
    DCIT 209 = restArgs[0]
    DCIT 207 = restArgs[1]

    */


    /* VARIADIC FUNCTIONS
    These are functions with varied number of parameters.
    rest parameters can be used to easily implement variadic functions. 

    An array can also be used to implement variadic fuctions
    */

    function displayMenu(...foodItems)
    {
      //making sure at least one arg was passed
      if (foodItems.length === 0)
      {
        return;
      }

      let i = 0;

      while (i < foodItems.length)
      {
        console.log(foodItems[i]);
        i++;
      }
    }


    displayMenu("Banku","Tuo-zaafi"); // prints Banku \n Tuo-zaafi
    displayMenu(); //prints nothing



    /*DEFINING FUNCTIONS WITHIN FUNCTIONS 
    *
    *Unlike other languages like Java or C++, JavaScript allow functions to be defined inside other functions.

    These inner functions can ONLY be called inside the function it was defined since that is their scope.

    NB: The inner functions are recreated anytime we call the other function.

    */


    function differenceOfTWoSquares(x,y)
    {
      function add()
      {
        return x + y;
      }

      function sub()
      {
        return x - y;
      }


      console.log(add() * sub());
    }
    

    differenceOfTWoSquares(3,2); //output 5



    /*USING ELEMENTS FROM AN ARRAY AS A PARAMETER 

    This can be achieved by passing in each element by using index notation. 
    i.e fuc(array[i]);

    *Using Spread operator 
      The spread operator helps you to use array elements directly as arguments. The array elements are spread over the parameters

      syntax:

      declare:
          func(item,item,item)
          {
            console.log(item,item,item);
          }
      call:
          func(...array);

       It is achieved by preceding the array name with 3 dots as an argument.

       */


      let evenNumbers = [2, 4, 6, 8, 10];

      function printArray(element1, element2, element3, ...elements)
      {
        //this prints elements excluding rest Parameters
        console.log(element1,element2,element3);


        //this print rest parameters
        if (elements.length > 0)
        {
          let i = 0;
          while (i < elements.length)
          {
            console.log(elements[i]);
            i++;
          }
        }
      }


      printArray(...evenNumbers); 
      //output 2 4 6 \n 8 \n 10


      /*DEFINING FUNCTIONS USING SHORT NOTATIONS
      Function expressions can be defined in a short way using arrow functions.

      syntax:
        variable = (parameters) => {function body}


        If the function has only one parameter, the parenthesis around the parameters can be omitted. 
        Also if the body of the function is made up of one statement, the curly braces can be omited. typeScript prevents this tho

        syntax: 
          variable = parameter => x + y
      */


          const arrowFunc1 = (item1, item2) => 
          { 
            return item1 / item2
          }

    
         console.log( arrowFunc1(100, 10)); //output 10


         



