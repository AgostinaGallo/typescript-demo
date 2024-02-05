"use strict";
// Typescript has the ability to determine the type from the value that's being assigned
// ❗ But this is not the recommended way
// let lname = "Agostina"; Typescript can but this is not the recommended way
// ✅ Recommended way
let lname;
lname = "Agostina";
// -- string
let nameInUppercase = lname.toUpperCase();
console.log(nameInUppercase);
// -- number
let age;
age = 25;
age = 25.5;
// typecast
let dob = "25";
let result = parseInt(dob);
// -- boolean
let isValid; // "error TS2454: Variable 'isValid' is used before being assigned."
// console.log(isValid); // output: undefined
let isValidAgain = false; // ✅
// -- array
let emptyList;
emptyList = ["Agostina", "Agostina2", "Agostina3"];
let numList; // generics syntax
numList = [1, 2, 3, 4, 5];
let filterResult = numList.filter((num) => num > 2);
let findResult = numList.find((num) => num === 2);
console.log(filterResult);
console.log(findResult);
