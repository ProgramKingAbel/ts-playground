/**
 * Intersection Types
 * 
 * - is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type
 * - denoted by &
 */

type Person = {
    name:string;
    age: Number;
}

type Employee = {
    id: number;
    title: string;
}

type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
    id: 1,
    name: "Alice",
    age: 23,
    title: "Director",
}