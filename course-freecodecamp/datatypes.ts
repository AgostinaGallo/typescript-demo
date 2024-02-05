// Typescript has the ability to determine the type from the value that's being assigned
// ❗ But this is not the recommended way
// let lname = "Agostina"; Typescript can but this is not the recommended way

// ✅ Recommended way
let lname : string;
lname = "Agostina";

// -- string

let nameInUppercase = lname.toUpperCase();
console.log(nameInUppercase);

// -- number
let age : number;

age = 25;
age = 25.5;

// typecast
let dob = "25"
let result = parseInt(dob);

// -- boolean
let isValid : boolean; // "error TS2454: Variable 'isValid' is used before being assigned."
// console.log(isValid); // output: undefined

let isValidAgain : boolean = false; // ✅


// -- array
let namesList : string[];
namesList = ["Agostina", "Agostina2", "Agostina3"];

let numList : Array<number>; // generics syntax
numList = [1,2,3,4,5];

let filterResult = numList.filter((num) => num > 2);
let findResult = numList.find((num) => num === 2);

console.log(filterResult);
console.log(findResult);