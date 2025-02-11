function uniqueDataTypesFunc<T>(item: T, defaultValue: T): [T, T] {
    return [item, defaultValue]
}

const resStr = uniqueDataTypesFunc<string>("hello", "abel")
console.log(resStr)

const resNum = uniqueDataTypesFunc<number>(10, 30)
console.log(resNum);

const resBool = uniqueDataTypesFunc<boolean>(true, false)
console.log(resBool)


interface Dog {
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypesFunc<Dog>({name: "Bruno", breed: "husky"}, {name: "simba", breed: "chihuahua"})
console.log(dog1)

function getRandomKeyValuePair<T>(obj: { [key: string]: T}) : { key: string; value: T; } {
    const keys = Object.keys(obj);
    const randomKey = keys[Math.floor(Math.random() * keys.length)]

    return { key: randomKey, value: obj[randomKey] }

}

const strObj = {a: "apple", b: "banana", c: "cherry"}
const res = getRandomKeyValuePair<string>(strObj)
console.log(res);


const numObj = { one: 1, two: 2, three: 3 };
const result = getRandomKeyValuePair<number>(numObj);
console.log(result)


// generic function that filters on a given condition 

function arrFilter<T>(arr: T[], condition: (item: T) => boolean): T[] {
    return arr.filter(condition);
}

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNums = arrFilter<number>(arrNum, (item) => item % 2 === 0 )
console.log(evenNums)


const fruits = ["apple", "banana", "kiwi"]
const shortFruitNames = arrFilter<string>(fruits, (item) => item.length <= 4)
console.log(shortFruitNames);