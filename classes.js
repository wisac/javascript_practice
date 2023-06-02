//Declaring an object using constructor function
function Person(name, age)
{
    this.name = name;
    this.age = age;
    this.printPerson = function()
    {
        console.log("Hello, my name is %s and I am %d",this.name, this.age);
    }
}

//creating Person object
var worker = new Person();
worker.name = "Kofi";
worker.age = 23;

worker.printPerson();


var student = 
{
    age: 55,
    height: 170,
    name: "Magdalene",
}

student.age;



