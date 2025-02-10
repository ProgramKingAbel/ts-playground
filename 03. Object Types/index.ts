/**
 * Object -> A structured data type that represents a collection of properties, each with a key and an associated val
 * the object properties can have a specific type and the object itself can be annotated with a specific type defined using an interface or type alias
 * TS uses structural typing i.e. the shape of an object (its structure and properties) is what matters for compatibility
 * 
 * Syntax
 * 
 * type varName (annotations/types) = { property: value }
 */

// object literal notation 

const person: { firstName: string; lastName: string; age: number } = {
    firstName: "john",
    lastName: "Doe",
    age: 30
}

// Objects as function return values

function printUser(): {name: string; age: number; location: string } {
    return {
        name: "Alex",
        age: 30,
        location: "Nairobi"
    }
}
