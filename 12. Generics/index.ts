/**
 * Generics 
 * 
 * -> allow you to create reusable components that can work with a variety of types 
 * -> Generics make it possible for you to define functions, classes, and interfaces that can work with 
 *    DIFFERENT DATA TYPES without having to duplicate code. 
 */

// Regular Function

const printString = (x: string) => console.log(x);
const printNumber = (x: number) => console.log(x);
const printBoolean = (x: boolean) => console.log(x);

printString("hello");
printNumber(10);
printBoolean(true);


// Refactor using a generic
// -----implementation -----
function printInfo<T>(x: T): T {
    return x;
}

/**
 * <T> -> the type parameter area -- determine how many data types the function will be processing
 * (x: T) -> function parameter area
 * 
 * therefore USAGE
 * 
 */

// ------ Use case -----
const str = printInfo<string>("Hello"); // Hello
const num1 = printInfo<number>(10); // 2
const bool = printInfo<boolean>(true) // true


function printNum(item: number, defaultValue: number): [number, number] {
    return [item, defaultValue]
}

const num = printNum(50, 60);
console.log(num);

/**
 * You can also specify an interface as a Type Parameter to a generic function
 */
interface Dog {
    name: string;
    breed: string;
}

const dog = printInfo<Dog>({name: "Buddy", breed: "Husky"})
console.log(dog)


// A generic function to get random key value pairs from an object 

function getRandomKeyValuePairs<T>(obj: {[key: string] : T}): { key: string, value: T} {

    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)]

    return { key: randKey, value: obj[randKey] }

}

const stringObject = { a: "apple",  b: "banana", c: "cherry" }
const randomStringPair = getRandomKeyValuePairs<string>(stringObject);
console.log(randomStringPair);

const numberObject = { four: 4,  five: 5, six: 6 }
const randomNumberPair = getRandomKeyValuePairs<number>(numberObject);
console.log(randomNumberPair);


// A generic function to filter array based on condition 

function filterArray<T>(array: T[], condition:  (item: T) => boolean) : T[] {
    return array.filter((item) => condition(item));

}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray<number>(numberArray, (num) => num % 2 === 0);
console.log(evenNumbers);


const stringArray = ["apple", "banana", "cheerry", "date"]
const shortWords = filterArray<string>(stringArray, (word) => word.length < 6)
console.log(shortWords)


interface Fruit {
    name: string;
    color: string;
}

const fruitArray: Fruit[] = [
    {name: "apple", color: "red"},
    {name: "banana", color: "yellow"},
    {name: "cherry", color: "red"}
]

const redFruits = filterArray<Fruit>(fruitArray, ((fruit) => fruit.color === "red"))


// Generic Functions that take multiple types

function reversePair<T, U>(value1: T, value2: U): [U, T] {
    return [value2, value1]
}

const reversedPair = reversePair("hello", 20)
console.log(reversedPair);


// Generic class

class Box<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent;
    }

    getContent(): T {
        return this.content;
    }

    setContent(newContent: T): void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("Hello typeScript");
stringBox.setContent("New content has been added")
console.log(stringBox.getContent())

const numberBox = new Box<number>(20)
console.log(numberBox.getContent())
numberBox.setContent(100);
console.log(numberBox.getContent())