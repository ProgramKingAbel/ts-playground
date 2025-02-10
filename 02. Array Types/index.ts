/**
 * Arrays -> a type of object that can store multiple values of the same type 
 * Arrays in typescript are typed i.e. you can specify the types of values that an arr can hold
 * 
 * Types of Array declaration 
 * 1. bracket / [] notation 
 * 2. generic Array<type> notation
 * 
 */

// Bracket notation
const numbers: number[] = [1, 3, 5];
console.log(numbers);

// generic notation -> pretty old syntax rarely used
const names: Array<string> = ["abel", "morara"]


// MultiDimensional Arrays 
/**
 * Contains Other arrays as its elements
 * same notation nested square brackets
 * 
 */

const matrix: number[][] = [
    [1, 2],
    [3, 4]
];