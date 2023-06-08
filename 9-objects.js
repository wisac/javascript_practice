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




/*WHICH TYPE OF OBJECT CREATION TO USE*/

/*
    Literal notation is used to create simple objects which need only one instance.

    class syntax is used when we want to create an object with many instances. It is prefered to constructor function which are used in exceptional cases.


    Use Object.create() method if class syntax is not available such as in runtime environments which does not support ES2015
*/







/* ACCESSING PROPERTIES AND CALLING METHODS */
/* The dot operator is used to access members of an object.
    The bracket notation can also be used to access members of an object in a situation where using the dot operator would result in syntax error. Such as when the member's name has a minus in it.



    syntax:
        OBJECT["member"];
*/


const currency = 
{
    "name": "Cedi",
    "country-used": "Ghana",
    "exchange rate": 13.0,


  
};



console.log(currency.name);
// console.log(currency.country-used) // syntax error
console.log(currency["country-used"]); //ok
console.log(currency["exchange rate"]);

/* When using the bracket notation, the property should be in qoutes*/




/*SETTERS AND SETTERS 
We use the keyword 'set' to declare a setter method and 'get' to declare a getter.

syntax:
    set methodName() { //code };
    get methodName() { //code}

    The setMethod and get method can have the same name and when they are called in an assignment statement, the setter would be called and when called in an evaluation statement, the getter will be called.



    They can be used with objects created through literal, class, constructor fucntion or object.create() method.
*/




const Animal = 
{
    name: "Sheep",
    quantity: 550,

    get _name()
    {
        return this.name;
    },


    set _name(name)
    {
        this.name = name;
    }
};


console.log(Animal._name); // sheep  - getter call in an evaluation statement
Animal._name = "cat";   // Setter called in an assignement statement
console.log(Animal._name); // sheep Getter called in an asssignment statement




/* Data properties and Access Properties
        Data properties are properties which contain data, i.e the variables in the object.
        Access properties do not container data but they are the setters and getters of data properties.

        From the code above, name is a data property and _name is an access property
        */




        /* ADDING AND OVERWRITING OBJECT PROPERTIES AND METHODS*/
        /* Unlike other languages like Java, Object properties and methods can  
            be overwritten and also new ones added using the dot operator or bracket notation


            syntax:
                objectName.newProperty = value;
        */


        Animal.kind = "Mammal"; // Added kind property and it's value to the object
        console.log(`Adding and overwriting properties:\nAnimal name = ${Animal.name}`);
        console.log(Animal.kind)
        
       Animal.getQuantity = function()
       {
            return this.quantity;
       }


       console.log(`Adding method: getQuantity`);
       console.log(Animal.getQuantity());
        
       //displaying Animal Object
       console.log(Animal);


       //overwriting methods     
       Animal.getQuantity = function()
       {
        console.log(`Method overwritten: Animal quantity now = ${Animal.quantity % 2}`);
       }


       Animal.getQuantity(); //calling new method definition



       /*Adding properties/methods using bracket notation*/
       Animal["colour"] = "black";
       console.log(`Animal color = ${Animal.colour}`); //black




    /*CREATING OBJECT PROPERTIES AND METHODS USING HELPER METHOD*/
       /* Since ES5, JavaScript provides two helper methods for creating object properties and methods.

       Object.defineProperty(obj,'property',property configuration{}) and Object.defineProperties(para0, para1, para2);

       It accepts three arguments:
       @para0 : The object which new properties are to be added
       @para1 : The name of the new property/method
       @para2 : The configuration object for the property.
       
       */


       // Adding Properties to an object using Object.defineProperties() helper method
       const Course = {};

       Object.defineProperty(Course,"name", {
        value: "Data Structures and Algorithm"
       })

       console.log("\nCreating properties via helper methods")
       console.log(Course.name); // Data Strutures ...
       
       Object.defineProperties(Course, {
            couseCode: {
                value: "CS52"
            },
            creditHOurs: {
                value: 3
            },
            duration: {
                value: 2.00
            }
        });

         console.log(`Course code = ${Course.couseCode}`);
         console.log(`Course weight = ${Course.creditHOurs}`);
         console.log(`Course duration = ${Course.duration}`);





    /* DELETING OBJECT MEMBERS */
         /* Just as members can be added dynamically to an object, members can also be removed or deleted from an object. To do this, the "delete" operator is used.
         Syntax:
            delete <obj.member> OR delete <obj[member]>

        NB: It is advisable to check for the presence of the member in the object before attempting the deletion operation.
        To do this, the "in" operator is used to check for the availability of the member.

         Syntax:
            if ("member" in obj){
                //delete operation }
        */

            const Phone = {
                brand: "Samsung",
                name: "Galaxy S22",
                "Andriod version": "13.0",
                "power on": function() {
                    console.log(`Turning on your ${this.brand} ${this.name}`);
                }
            };

        function deleteMember(obj, member) {
            if (member in obj) {
                delete obj[member];// [] bcos member could be of type string
            }
            else {
                throw new ReferenceError(`${member} not found in ${obj}`);
            }
        }

        console.log("\nDeleting Members");
        console.log("brand" in Phone)   // true
        deleteMember(Phone, "brand");   // OK brand deleted
        console.log("brand" in Phone)   // false
        // deleteMember(Course,"grade");   // throws a reference error

        deleteMember(Course, "name");   // OK but does not work because properties created using Object.defineProperty() by default sets configurable attribute to false. In order to change the configurable attribute, you need to define a new property, copy the old attributes to the new one, configure the new property as desired and then delete the old property.

        console.log("name" in Course); // still outputs true
    
        



        /* NB: The delete operator is not same as assigning  "null" or "undefined" to a property. "null" sets the property to null whilst "undefined" sets the value of the property to undefined, but delete completely removes the property and its value.
        */



    /* OUTPUTING OBJECT PROPERTIES AND METHODS */
        /*     To output all properties and methods of an object, there are two options.

            1. Using 'for-in' loop
            2. USe Object.keys(), Object.value() and Object.entries()


        /* Using for-in loop
        NB: Properties must have an attribute of enumerable set to true
        
            syntax:
                for (let propName in obj) {
                    console.log(propName);
                    console.log(obj[propName]);
                }
        */
       console.log("\nIterating over object properties\nUsing for-in loop");

        let Country = {
            name: "Ghana",
            continent: "Africa",
            population: 0xDA54A4,
            IncreasePopulation: function(newCitizens) {
                this.population += newCitizens; 
            }
        };

        for(let props in Country) {
            console.log("Property = ",props); //name continent population
            console.log("Value = ",Country[props]); //Ghana Africa 424242
        }



        /* Using Object.keys() 
                This helper method returns an array of all enumerable properties of the object without their values.
                Syntax: 
                    let arr = Object.keys(obj);
        */

        let propArray = Object.keys(Country);
        for (let i = 0; i < propArray.length; i++) {
            console.log(propArray[i]); // name continent population increasePop.
        }

        
        /* Using Object.values()
            This helper method returns an array of all enumerable properties values only. 
                syntax:
                    let arr = Object.values(obj);
        */

        let valArray = Object.values(Country);
        for (let i = 0; i < valArray.length; i++) {
            console.log(valArray[i]); //Ghana Africa 4579745 increasePop...
        }



        /* Using Object.entries()
            This helper method returns array of arrays which is made up of key-value pairs
        */

        let pairArray = Object.entries(Country);
        for (let i = 0; i < pairArray.length; i++) {
            console.log(pairArray[i]);
        }

        /* NB: The for-in loop also iterates over the objects prototype but object.keys() only returns property names of the instance passed.
        */

        const NewCountry = Object.create(Country, {
            language: {
                value: "English",
                enumerable: true
            }
        });


        console.log("\nFOR-IN VS OBJECT.KEYS\n");
        console.log(Country);// 
        console.log(NewCountry);// {language: english}
        console.log(Country.language); // undefined
        console.log(NewCountry.language); // english


        // iterating over NewCountry but this will also display properties from its prototype
        console.log("\nFOR-IN LOOP ITERATION");
        for (let newProps in NewCountry) {
            console.log(newProps);
        }

        // iterating over newCountry this will not iterate over prototype
        console.log("\nOBJECT.KEYS ITERATION");
        let newArray = Object.keys(NewCountry);
        for (let i = 0; i < newArray.length; i++) {
            console.log(newArray[i]);
        }
        




    /* USING SYMBOLS TO DEFINE OBJECT PROPERTIES */

    /* Symbols can be used define unique names for object properties. These properties in turn are only read using these symbols with the bracket notation. 
    */

        const firstName = Symbol('firstName');
        const lastName = Symbol('lastName');
        const person = {};
        person[firstName] = 'John';
        person[lastName] = 'Doe';
        console.log(person[firstName]);// "John"
        console.log(person[lastName]); // "Doe"
        console.log(person[0]); // undefined
        console.log(person[1]); // undefined
        console.log(person.firstName); // undefined
        console.log(person.lastName); // undefined
        console.log(person['firstName']); // undefined
        console.log(person['lastName']);// undefined  




        
