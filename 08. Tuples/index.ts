/**
 * Tuples 
 * -> type that rep an arr with a fixed no of elements, where each element can have a different type
 * -> Order of types in tuple definition corresponds with order of values in the actual array
 * -> Tuples are similar to arrs but have a specific structure and can be used to model finite sequnces with known lengths
 */

let myTuple: [string, number] = ["hello", 42];
console.log(myTuple[0]);
console.log(myTuple[1]);

// Destructuring individual elements

let [first, second] = myTuple
console.log(first);
console.log(second);