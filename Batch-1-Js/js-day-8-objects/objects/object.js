// Objects:
// In JavaScript, objects are one of the core data types and are used to store collections of data and more complex entities. They consist of key-value pairs, where keys (or properties) are strings (or Symbols) and values can be of any data type, including other objects, arrays, or functions.


// -----------------------------------------------------------------

// Ex for nested object & this key word OR
// Methods:
// The functions defined inside the constructor become methods of each
// Methods can access and modify the object's properties using this

// ----------------------------------------------------------------------
// Constructor
// A constructor is a special function that creates and initializes objects
// It's like a blueprint for creating similar objects with shared properties and methods
// We use the new keyword to create instances from the constructor
// Inside the constructor, this refers to the new object being created

// Properties:
// Each pet gets its own set of properties (name, species, hunger, energy, etc.)
// These properties are unique to each instance
// When we create a new, it starts with its own values

// Methods:
// The functions defined inside the constructor become methods of each pet
// Methods can access and modify the object's properties using this

// Constructor functions start with a capital letter (convention)
// Use this keyword to add properties and methods
// Use new keyword to create new objects
// Each object gets its own copy of the properties (make, model, year)

// function Car(make, model, year, abc) {
//   (this.make = make),
//     (this.model = model),
//     (this.year = year),
//     (this.abc = abc);
// }

// let car1 = new Car("Toyota", "Innova", 2024, "gafgag");
// let car2 = new Car("Honda", "Civic", 2020);
// let car3 = new Car("Maruthi", "Swift", 2040);
// console.log(car1);
// console.log(car2);
// console.log(car2)



