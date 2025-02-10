/**
 * Access modifiers
 * 
 * -> determine the ways in which class members (properties and methods)
 *  can be accessed from within and outsiide the class
 * 
 * -> Public
 * -> Private
 * -> Protected
 */

// Public

/**
 * Public -> Members marked as public can be accessed from anywhere,
 * both inside and outside the class
 */


// Private

/**
 * Members marked as private can only be
 * accessed from within the class they are defined in
 */

// protected

/**
 * Members marked as protected can be accessed from within the class
 * they are defined in as well as any subclasses that extend that class
 * 
 */

class Animal {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public getName(): string {
        return this.name;
    }

    private getAge(): number {
        return this.age;
    }

    protected getSpecies(): string {
        return this.species;
    } 
}

class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age, "Canine");
    }

    // -> this.age = error
    // public getInfo(): string {
    //     return `${this.getName()} is a ${this.getSpecies()} and is 
    //     ${this.age } years old`;
    // }

    public getInfo(): string {
        return `${this.getName()} is a ${this.getSpecies()}`;
    }
}

/**
 * Getters and setters 
 * ->  are used to access and modify class properties
 * thy allow you define a perperty in a class that looks like a simple variable
 * from the outside but internally has additional logic fo getting and setting the value
 * 
 */

class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        if (value < 0) {
            throw new Error("Value cannot be negative");
        }
        this._myProperty = value;
    }
}

const myInstance = new MyClass();
console.log(`Current value: ${myInstance.myProperty}`)
myInstance.myProperty = 19;
console.log(`Current value: ${myInstance.myProperty}`)