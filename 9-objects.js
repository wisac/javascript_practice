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



    
    /*CREATING OBJECTS USING CLASSES
        Since ES6, classes are available and serve as the blue print for creating objects.

        syntax:
                class ClassName 
                {
                  
                    //members
                }

    
        A constructor method can be created by using the keyword 'constructor'
        The constructor behaves similar to the constructor function.


        An object instance is created from a class by using the new keyword.
    */


        class Music
        {
            constructor(artist, album, title, duration,year)
            {
                this.artist = artist;
                this.album = album;
                this.title = title;
                this.year = year;
                this.duration = duration;
                
            }

            play()
            {
                console.log(`Now Playing ${this.title} || ${this.artist} || ${this.album} || ${this.year}`);
            }

            stop()
            {
                console.log("Music stopped");
            }
        }



        /*Creating object from a class*/
        const newMusic = new Music("Hillsong", "Of dirt and grace","Touch the sky", 4.32, 2016);

        console.log("Creating objects from class");

        newMusic.play();
        newMusic.stop();


    /* The __proto__ property, Object.getPrototypeOf() method and the object.constructor method are all available for checking the protoype and or constructor from which the object was created.*/

    console.log(newMusic.__proto__);  // {} Music
    console.log(Object.getPrototypeOf(newMusic)); // {}  Music
    console.log(Music.prototype);  // {} Music
    console.log(newMusic instanceof Music); // true
    console.log(Music instanceof Music); //false
    console.log(newMusic.constructor)  //class Music





/* CREATING OBJECTS VIA THE OBJECTS.CREATE() FUNCTION

        Since ES5, it is possible to create objects using the Objects.create() helper method.

        The method expects the prototype of the object to be created and the configuration for the properties of the object to be created as an argument.


        syntax:
           variable = Object.create(Nameobject.prototype, 
            {
                Property:
                {
                    attribute: value
                },

                Property:
                {
                        attribute: value
                }

            });

           NB: .prototype is required



*/


let poorMovie = Object.create(Movies.prototype,
{
    title: 
    {
        value: "Her"
    },

    genre: 
    {
        value: "Sci-Fi"
    },

    year:
    {
        value: 2023
    },


    rating:
    {
        value: 1
    },

    //methods 
    setRating:
    {
        value: function(rating)
        {
            this.rating = rating;
        }
            
    },
    getRating:
    {
        value: function()
        {
            return this.rating;
        }
    }
    
});



console.log("\nCreating objects using Object.create() method");
console.log(poorMovie.title); //her

poorMovie.setRating(5); // Not working because the property attribute writable which determines whether the property can be changed or not is by default set to false.

console.log(poorMovie.getRating()); // 1



/* Property Attributes
        Aside the value attribute, there are other property attributes which can be used to set individual properties.
        These include:

        1. writable : This determines by a boolean value whether the property
            can be changed after it's initialization.
            DEFAULT = false.

        2. enumerable : This specifies by boolean value whether the property
            is included when iterating over the properties. 
            DEFAULT = false
        
        3. configurable : This specify by boolean value whether the property can be deleted and it's attribute also modified.

        4. get : Specify the getter function

        5. set : Specify setter function


*/




    
let cities = Object.create(Object.prototype, 
    {
        name:
        {
            value: "Tema", 
            writable: false, // value attribute cannot be changed
            configurable: true, //name can be deleted and attributes can be modified
            enumerable: true    // name is iterable
        },
        population:
        {
            value:750000,
            writable: true, //value attribute can be changed
            configurable: false, //name not cannot be deleted and it's attributes cannot be modified.
            enumerable: false
        },

        size: 
        {
            value: "764300 sqm",
            writable: false,
            configurable: true,
            enumerable:false
        }
    });



    cities.name = "East Legon";
    console.log(`\nCity name = ${cities.name}`) // Tema since name is not writable
    console.log(`Population = ${cities.population}`);
    cities.population += 500000;
    console.log(`New Population = ${cities.population}`); //population changed






/* To access the property/methods attribute, the Object.getOwnPropertyDescriptor() method is used. It takes the object as an argument, and the property/method who's attributes are to be determined.




syntax:
    let variableName = Object.getOwnPropertyDescriptor(namedObject,"property/method");


The method returns an object with the known properties value, enumerable, writable, configurable.

We can then use variableName.attribute to get value of that attribute.
*/

let propertyDescription = Object.getOwnPropertyDescriptor(cities,"name");
console.log(propertyDescription.enumerable) // true since name has enumerable attribute set to true;
console.log(propertyDescription.configurable) //true
console.log(propertyDescription.writable) //false
console.log(propertyDescription.value) // Tema




/*WHICH TYPE OF OBJECT CREATION TO USE */

/*
    Literal notation is used to create simple objects which need only one instance.

    class syntax is used when we want to create an object with many instances. It is prefered to constructor function which are used in exceptional cases.


    Use Object.create() method if class syntax is not available such as in runtime environments which does not support ES2015
*/
