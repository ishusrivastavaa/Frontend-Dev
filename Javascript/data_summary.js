// Q2: Multi-Type Data Summary

let str = "ChatGPT";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { name: "Ishu", age: 20 };
let nul = null;
let undef = undefined;

console.table([
    { Label: "String", Value: str, Type: typeof str },
    { Label: "Number", Value: num, Type: typeof num },
    { Label: "Boolean", Value: bool, Type: typeof bool },
    { Label: "Array", Value: arr, Type: Array.isArray(arr) ? "array" : typeof arr },
    { Label: "Object", Value: obj, Type: typeof obj },
    { Label: "Null", Value: nul, Type: "null" },
    { Label: "Undefined", Value: undef, Type: typeof undef }
]);
