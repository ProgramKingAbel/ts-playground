/**
 * Class Properties Annotations
 * 
 * - you can annotate class properties with a type to ensure consistency
 * 
 */

class Person {
    // name: string;
    age: number;

    // readonly properties
    readonly name: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("John", 90);
console.log(person);