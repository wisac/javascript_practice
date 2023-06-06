/* OBJECTS 
Objects can be created by 
    Using object literal notation
    By using contructor function
    By using Object.create() method 
    By instantiating an ES2015 class

syntax:
Using object literal notation
variable objectName = 
{
    member1: value,
    member2: value,
    
    method: function{

    }
}
*/
//object literal notation
let item = 
{
    name: "laptop", 
    number: 1,
    location: "Canada",
    price: 432.99,

    setNumber: function(number) 
    {
        number = number; //this is just a reassigned of the parameter and not the objects property. To use the object property, use the 'this' keyword  
        
        
        this.number = number; //Now we have assigned the data with the function parameter.
    }


}

item.setNumber(55);
console.log(item.location);
console.log(item.name);
console.log(item.price);
console.log(item)


/*Creating objects via Objects.entry()
    Since ES2019, it is possible to create objects based on arrays using the Object.entry() method. 
    
    Each element in the array must be an array of two elements, the first being the property name and the second being the value of the property sepearated by COMMA
    The properties are put in qoutes just as you'll treat strings


    syntax:
        let variable = 
        [
            ["key", value],
            ["key", value],
            ["key", function()
                {
                    //function body code
                }
            ],
        ]

    */


    let teams = 
    [
        [ "england", "Man City" ],
        [ "spain", "Barca" ],
        [ "italy", "Napoli" ],
        [ "france", "PSG" ],
        [ "trophies", 15 ],

    
        [ 
            "printTeam", function() 
            {
              console.log(this.england);
              console.log(this.spain);
              console.log(this.italy);
              console.log(this.france);
            }
        ]

    ];


    const clubs = Object.fromEntries(teams); // creates a new object with key value pairs between property and value
    
    console.log(clubs.england); 
    clubs.printTeam(); 



    /* CREATING OBJECTS VIA CONSTRUCTOR FUNCTION
        Constructor functions are normal functions and can be used to create objects when their call is prepended with the "new" keyword. The constructor function creates a new object and returns it.
        By default, the function returns an object even without a return statement.

        What makes the function a constructor function is when it is called with the new keyword; other than that, it is a normal function.

        Normal functions can also be called with the new keyword to create objects where as constructor functions can also be used as normal functions. But both instances are not necessary.


        syntax:
                function FunctionName(paras)
                {
                    this.property = paras
                    this.propery = function()
                    {
                        //function definition
                    }
                }



                let object1 = new FunctionName(args);


            */
           


            function Book(title, author, pages)
            {   
                this.author = author;
                this.title = title;
                this.pages  = pages;
                this.price = 0;

                this.setPrice = function(price)
                {
                    this.price = price;
                }

                this.getPrice = function()
                {
                    return this.price;
                }   
            }


            console.log("\nCreating Objects Using Constructor functions");

            let myBook = new Book("The Alchemist","Paulo Coelho",158); //creates new Book object via constructor function
            myBook.setPrice(55);
            console.log(`Title = ${myBook.title}`);
            console.log(`Author = ${myBook.author}`);
            console.log(`Price = ${myBook.getPrice()}`);


            /*PROTOTYPES
                Each constructor function internally manages a prototype, an object which serves as the basis for creating objects using the constructor function. 
                The prototype is stored in the prototype property of the function. If an object is created using that function, the object is based on the prototype stored there.

                After the object is created, the prototype of the object can be determined by using:

                     GivenObject.__proto__
                     Object.getPrototypeOf(givenObject)

                Similarly, givenObject.constructor can be used to determine the constructor used to create an object.

                */

                function Movies(title,genre, year)
                {
                    this.title = title;
                    this.genre = genre;
                    this.year = year;
                    this.rating = 0;

                    this.setRating = function(rating)
                    {
                        this.rating = rating;
                    }

                    this.getRating = function()
                    {
                        return this.rating;
                    }
                }

                console.log("\nObject protoypes")
                
                const favMovie = new Movies("Rudy","biography, inspirational, sport",1993);

                favMovie.setRating(4.9);

                console.log(favMovie.__proto__); //Movies {}
                console.log(Movies.prototype); // Movies 
                console.log(Object.getPrototypeOf(favMovie));  //Movies {}
                console.log(favMovie.constructor); // Function: Movies
                console.log(favMovie instanceof Movies)  // true
                console.log(Movies instanceof Movies);  //false because Movies is base on the Object prototype and not on itself.
           

                /*PROTOTYPE CHAINING
                    Prototypes can themselves have prototypes and this creates what we call prototype chain. In this case, the instanceof operator checks precisely which prototype and object is basedo on in the prototype chain.
                
                */



    
    








