// Annotations in Typescript

// Strings
let myName: string = "Abel";

// number
let myNumber: number = 20;

// Boolean
let isAuthenticated: boolean = true;


// Type Inference 

/**
 * typescript feature that allows the compiler to automatically dertermine the type of a variable based on its value
 * Happens when a var is declared without annotation i.e. explicitly specifying its type 
 * Typescript therefore tries to infer its the type
 */

let language = "Typescript"
console.log(typeof language) // returns string

// Error -> cant assign number to inferred type string 
// language = 8;

 
/**
 * The Any Type
 * 
 * a special type that represents any type.
 * if a var is annotated with any Ts will allow it to have any value. i.e.
 * disable all type checking for that variable and its properties
 * 
 * use in limited situations to avoid untyped code.
 * 
 */

let color: any = "blue"

// No Error
color = 20;
color = true

// Funtion Parameter Annotations 
/**
 * specify expected types of parameters that a function takes.
 * ts also checks on the args provided to a function ft parameters set in function defination
 */

// Regular Function
function addOne(num: number) {
    return num += 1;
}

const result = addOne(50);
console.log(result);

// Arrow Function Annotations -> mostly implicitly infers any on param type if not explicitly stated
const double = (x: number, y: number) => x * y
const res = double(10, 3);
console.log(res);

// Default Params Value
function greet(person: string = "Abel") {
    console.log("Hello ", person);
}


// Annotating return values

// Regular Functions 
function calculate(a: number, b: number): number {
    return a * b
}

const calculation = calculate(2, 3);
console.log(calculation);


// Using Arrow Functions 

const subtract = (a: number, b: number): number => a - b;

const res2 = subtract(5, 2);
console.log(res2);