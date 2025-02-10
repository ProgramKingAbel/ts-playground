/**
 * Unions -> declare a type with one of several possible types
 * -> uselful when we want to allow a var or parameter to accept multiple types
 * 
 * denoted with ( | )
 * Can also be combined with other types e.g. interfaces or classes
 */

let myVar: number | string;

function foo(param: string | string[]) {}

interface myInterface {
    myProp: string | number;
}


type UserInfo = {
    id: number;
    name: string;
}

type AccountDetails = {
    email: string;
    password: string;
}

// use type UserInfo, AccountDetails or Both
const user: UserInfo | AccountDetails = {
    id: 52,
    name: "Johne0",
    email: "john@gmail.com",
    password: "pass"
}


