/**
 * Process of refining a variable's type within a conditional block of code.
 * allows you to write more precise and type-safe code 
 * 
 * Means of achieving Tpye Narrowing ----
 * 1. Type Guards
 * 2. instance of Operator 
 * 3. intersection types
 * 
 */


/**
 * TypeGuards
 * -> mechanisms that help ts understand and narrow down the types more precisely
 * common example is typeof operator
 */


// Define a union type 

type MyType =  string | number;

// Example function with type guard

function exampleFunc(value: MyType): void {
    // typeguard using typeof
    if (typeof value === "string") {
        // within this block typescript knows that 'value' is a string
        console.log(value.toLocaleUpperCase())
    } else {
        // within this block typescript knows that 'value' is a number
        console.log(value.toFixed(2))
    }
}

// Example Usage 
exampleFunc("hello");
exampleFunc(42)


/**
 * Type Narrowing with instanceOf Operator 
 * -> allows you to check whether an object is an isntance of a particular class or constructor function
 * 
 */

class Dog {
    bark(): void {
        console.log("woof")
    }
}

class Cat {
    meaw(): void {
        console.log("meaw!")
    }
}

// Example function with instance of typeguard

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark()
    } else {
        animal.meaw();
    }
}

// example usage 
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);


/**
 * Intersection Types
 * 
 * -> allow you to combine multiple types into one type 
 * -> resulting type will have all the properties of or each individual type.
 * -> created using the & Operator
 */

type Employee = {
    id: number;
    name: string;
};

type Manager = {
    department: string;
    role: string;
}

// create an intersection type 
type ManagerWithEmployeeInfo = Employee & Manager;

// Example Usage
const manager: ManagerWithEmployeeInfo = {
    id: 123,
    name: "John Doe",
    department: "Engineering",
    role: "Team Lead",
}

console.log(manager.id);
console.log(manager.name);
console.log(manager.department);
console.log(manager.role);