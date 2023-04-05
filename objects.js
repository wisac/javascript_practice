/* OBJECTS 
Objects can be created by 
    Using object literal notation
    By using contructor function
    By using Object.create() method 
    By instantiating an ES2015 class

syntax:
Using object literal notation
variable objectName = {
    member1: value,
    member2: value,
    
    method: function{

    }
}
*/

let item = {
    name: "laptop", 
    number: 1,
    location: "Canada",
    price: 432.99,

    setNumber: function(number) {
        number = number; //this is just a reassigned of the parameter and not the objects property. To use the object property, use the 'this' keyword  
        
        
        this.number = number; //Now we have assigned the data with the function parameter.
    }


}

item.setNumber(55);
console.log(item.location);
console.log(item.name);
console.log(item.price);
console.log(item)



