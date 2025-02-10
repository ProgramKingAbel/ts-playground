/**
 * Type Aliases
 * - a way to create a new name [Custom] for an xisting type and give it a more meaningful / descriptive name
 * 
 * syntax"
 * type myString = string;
 * 
 */

type Person = {
    name: string;
    age: number;
}

function printPerson(person: Person): void {
    console.log(`name: ${person.name}, Age: ${person.age}`)
}

const myPerson: Person = { name: "Alice", age: 30 }
printPerson(myPerson)

// Optional Properties -> by adding question mark ? as a postfix

type Car = {
    name: string;
    make: string;
    ownerId?: string;
}

// readonly property can only read the property but we cannot the change its value 
type Fruit = {
    name: string;
    readonly quantity: number;
}

let apple: Fruit = {
    name: "apple",
    quantity: 5,
}

// apple.quantity = 10; -> throws error