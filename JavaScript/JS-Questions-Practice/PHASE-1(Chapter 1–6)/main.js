// Questions:
// 1. var, let, const difference ko real code mein prove kar
// Ans: You can declare mulitple variables with same name in var and in let you cannot do that meanwhile in const once you give it a value you cannot change it.

// var name = "Ahmed"
// var name = "Ali"

// let firstName = "Huzaifa"
// let firstName = "Raza"

// const value = 3.14
// value = 10

// 2. hoisting kya hoti hai? var vs let output predict kar
// Ans: you can hoist in var meanwhile you cannot hoist it in let varibalvariable..

// console.log(name);

// var name = "Salman";

// console.log(newName);

// let newName = "Raza";

// 3."5" + 1 vs "5" - 1 explain + output

// Ans: in the first one the output would be 51 meanwhile in the second one the output will be 4 because pehle waale main ye coercion hoogi pehle usske baad ye concatenate karay gaa and in second one ye minus karay gaa lekin usske pehle type coercion hoogi.

// 4. == vs === difference (at least 3 examples)

// Ans: in == it will check either the value is correct or not and in === it will check that both the values and the datatypes must be correct.

//Examples:
// console.log("2" == 2);
// console.log("2" === 2);
// console.log(23 === "23");

// 5. truthy/falsy test:

// 0, "0", "", [], {}

// Ans:

console.log(0); // answer would be true because 0 is considered falsy value
console.log("0"); // "0" it would be a truthy value because it has a value 0 in the string not an empty string..
console.log(""); // "" it is a falsy value because it is an empty string.. 
console.log([]); // It is a truthy value because it is an empty array and everything  ..
