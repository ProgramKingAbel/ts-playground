/**
 * Interface
 * 
 * -> a way to define a contract for the shape of an object.
 * -> it specifis the properties and their types that an object MUST have
 * -> enforce structure in code.
 */

interface Person1 {
    firstName: string;
    lastName: string;
    age: number
}

const examplePerson: Person1 = {
    firstName: "Abel",
    lastName: "Morara",
    age: 70,
}

/**
 * N.B.
 * 
 * While interfaces are commonly used to define the structure of objects
 * they are not limited to just objects. Interfaces in TD can also be used to
 * describe the shape of functions and classes
 */

// Interface for a function 

interface MathOperation {
    (x: number, y: number): number;
}

// Usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 2));
console.log(subtract(7, 2));

// Example 2

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;

}

function greet(person: Person) {
    console.log(`Hello ${person.firstName}`);
    person.sayHello()
}

const john: Person = {
    firstName: "John",
    lastName: "Museu",
    age: 20,
    sayHello() {console.log(`Hello, Whats Poppin`)},
}

greet(john);

// example 3

interface Song {
    songName: string;
    singerName: string;
    printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
    songName: "Super",
    singerName: "Bruno Mars",
    printSongInfo: (songName, singerName): string => {
        return `Song: ${songName}, Singer: ${singerName}`
    }
}

console.log(song1.printSongInfo("Super", "Bruno Mars"))


interface MovieDetails {
    readonly name: string;
    ratings: number;
    printMovieInfo(name: string, price: number, ratings: number): string | number;

}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie1: MovieGenre = {
    name: "Star wars",
    genre: "Action",
    ratings: 8.9,
    printMovieInfo(name: string, price: number, ratings: number): string | number {
        return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`
    }
}

const res = movie1.printMovieInfo("John Wic", 100, 9);
console.log(res);



// interface for Classes

interface Vehicle {
    start(): void;
    stop(): void;
}

//  Class implementing the interface
class Truck implements Vehicle {
    start() {
        console.log("Truck started")
    }
    stop() {
        console.log("Truck stopped")
    }
}

const myTruck = new Truck();
myTruck.start();
myTruck.stop();


/**
 * DECLARATION MERGING | INTERFACE EXTENSIONS
 * 
 * -> misconstructed as "re-opening" 
 * 
 * Once an interface has been declared it cannot be directly modified
 * 
 * DM is the ability to extend or augment an existing declaration including interfaces
 * useful when you want to add new properties or methods to an 
 * existing interface without modifying the original declaration
 */

// Example 

// Original interface 

interface Car {
    brand: string;
    start(): void;
}


// Declaration Merging (interface extension)
interface Car {
    model: string;
    stop(): void;
}

// usage of the extended interface
const myCar: Car = {
    brand: "Toyota",
    model: "Camry",
    start() {
        console.log("Car Started")
    },
    stop() {
        console.log("Car Stopped")
    }
}

myCar.start()
myCar.stop()