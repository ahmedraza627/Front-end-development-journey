// Q1: Introduction & Standardization:

// JS console mein console.log("Hello World") run kar
// Ans : It shows "Hello World!" in the output


// Explain karo: console, log, aur "Hello World" ka role

// Ans: console.log is used to print anything in console screen in browser and Hello World is used for checking either it is working fine or not

// Q2: Words vs Keywords & Variables:

// Ek variable name declare karo aur usme apna naam store karo
// Ek variable let aur const use karo aur difference console mein likho
// Try to declare a variable named let ya if → kya hota hai?  // Ans: It will show us an error

// Ans:

// let name = "Ahmed Raza";
// const name1 = "Ahmed Raza";

// console.log("The difference between them is that in let we can reassign the values meanwhile in const we can't reassign the values.");

// Scope & Hoisting:

// Q3: Scope
// Global scope aur function scope ka example banao

// Ans:
// GLobal scope means we can access that variable everywhere in the code and function scope means we can access that varibale inside the function anywhere but not outside the function.

// Ek function bana aur andar variable declare karo → try access outside function → kya hota hai?

// Ans: It won't show the value in the console log because you can't access the function scope variable outside the function.

// function abcd() {
//     let name = "Ahmed Raza"
// }
// console.log(name);

// Ek block {} ke andar variable declare karo with var, let, const → console.log outside → difference dekho


// {
//     var name = "Ahmed Raza";
//     let myName = "Ali Raza";
//     const newName = "Mudasir Junaid";
// }

// console.log(name);
// console.log(myName);
// console.log(newName);

// Ans: Var will not respect block scope meanwhile let and const will respect it so we can access the var variable outside the block too and we can't access the let, const variable outside the block..

// Q4: Hoisting & Temporal Dead Zone:

// Ek variable x ko function ke andar use karo before declaration using var, let, const
//     Predict result → run kar → samjho difference

// function myName() {
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// myName();

// let x = "Singapore";
// var y = "Tokyo";
// const z = "Karachi";

// Ans: It will show error for x as you can't hoist let variable before initialization, it will show undefined for y and z will also show an error for const too as we can't use it before initialization too.

// Primitive vs Reference & Quirks:

// Q5: Primitive vs Reference
// Ek number variable a=10, copy karo b=a → change b → kya hota hai a?
// Ek array arr=[1,2,3], copy karo arr2=arr → change arr2[0] → kya hota hai arr[0]?

// let a = 10
// let b = a
// b = 20;

// console.log(a);
// console.log(b);

// let arr = [1,2,3]
// let arr1 = arr
// arr1[0] = 5

// console.log(arr);
// console.log(arr1);

// Ans: when I changed variable b value nothing happened to a value meanwhile in array when I changed arr1 values it changes arr values too because of primitive vs reference types concept.

// Q6: JS Quirks & Coercion:
// Predict Output:

// console.log("5" + 2)  // 52
// console.log("5" - 2)  // 3
// console.log(true + 1)  // 2
// console.log(false == 0) // false

// Q7: Truthy vs Falsy
// List values [0, "", null, undefined, NaN, "Hello", 1]
// For each → console.log true if truthy, false if falsy

// function checker(val) {
//     if (val) {
//         console.log("True");
//     }
//     else {
//         console.log("False");
//     }

// }

// checker(0);
// checker("");
// checker(null);
// checker(undefined);
// checker(NaN);
// checker("Hello");
// checker(1);

// 🧪 Practice Zone
// 1. Declare your name and city using
// const
// , and your age using let

// Ans:
// const name = "Ahmed Raza"
// const city = "Karachi"
// let age = 21

// 2. Try this and observe the result:

// let x = 5;
// let x = 10;
// Ans: It will show us an error because we cannot redeclare let..

// let x= 5
// let x= 10

// 3. Guess the output:
// console.log(count);
// var count = 42;
// Ans: It will show us an undefined because we can hoist the variable not the values

// 4. Create a const object and add a new key to it — does it work?
// Ans: yes we can add a new key in the const object and it will work..
// const obj = {
//     name: "Ahmed Raza",
//     age: 21,
//     email: "ahmedrazaafjn@gmail.com",
// }

// obj.age = 25
// obj.city = "Karachi"
// console.log(obj);

// 5. Try accessing a let variable before declaring it — what error do you see?
// Ans: we can get an error which is cannot acces name before initialization.. because we cannot hoist let variable..

// console.log(name);
// let name = "Abbas Ali"

// 6. Change a const array by pushing a value. Will it throw an error?
// Ans: No it will not throw an error in pushing any value in const array

// const names = ["John", "James", "William"]
// names.push("Uzair")
// console.log(names);

// Chapter 2: Data Types + Type System:

// 1. Predict the output:
// console.log(null + 1);  // 1
// console.log("5" + 3);   // "53" because JS will then convert 3 into string and will concatenate it ..
// console.log("5" - 3);   // 2 because JS will convert "5" into number and will then subtract it with 3..
// console.log(true + false); // 1 because true will be converted into 1 and false into 0 so 0+1 would be 1...

// 2. Check types:
// console.log(typeof []); // it will be an object
// console.log(typeof null); // it will be object
// console.log(typeof 123n); // BigInt datatype..

// // 3. Truthy or Falsy?:
// console.log(Boolean(0));         // Falsy
// console.log(Boolean("0"));       // Truthy
// console.log(Boolean([]));        // Truthy
// console.log(Boolean(undefined)); // Falsy

// 4. Write a function isEmpty(value) that checks if a given value is null, undefined, or "" ..

// aik value hoogi jis ko aap dekhogee ke woh value kia hai agar woh value null, undefined, "" hoogi toh woh value bata daygaa ke iss main se konsi hai

// function isEmpty(val) {
//     if (val) {
//         console.log("It is a truthy value");
//     }

//     else {
//         if (val == null && val != undefined) {
//             console.log("It is a null value");
//         }

//         else if (val == undefined || val == "undefined") {
//             console.log("It is an undefined value");
//         }

//         else if (val == "") {
//             console.log("It is an empty string");
//         }
//     }
// }

// isEmpty(undefined)

// 5. Compare with loose vs strict:
// console.log(5 == "5");  // it will print true because it will check the values only not the datatype

// console.log(5 === "5"); // it will print false because it will check both the values and the datatype so it will match the value but not the datatype that's why it will show false

// 🔄Chapter 3: Operators:

// 🧪 Practice Zone
// 1. Predict:
// console.log("10" + 1); 101 will be the answer 
// console.log("10" - 1); // 9 will be the answer
// console.log(true + false); // 1 will be the answe
// console.log(!!"Sheryians"); // True

// 2. Convert using unary +

// let num = "20"
// console.log(+num);

// 3. Use ternary:

// let age = 18
// age>=18 ? console.log("You are eligible"): console.log("You are not eligible");

// 4. Build a calculator for +, -, *, / using switch statement in function:

// let a = +prompt("Enetr num 1")
// let b = +prompt("Enetr num 2")
// let operator = prompt("Enter your operator")

// let sum = a + b
// let minus = a - b
// let multiply = a * b
// let divide = a / b

// switch (operator) {
//     case "sum":
//         console.log(sum);
//         break;

//     case "minus":
//         console.log(minus);
//         break;

//     case "multiply":
//         console.log(multiply);
//         break;

//     case "divide":
//         console.log(divide);
//         break;

//     default: console.log("Enter relevant operator");
//         break;
// }

// 5. Score logic:

// Print "Excellent", "Good", "Average", or "Fail" based on range

// let marks = 79;
// if (marks >= 90 && marks <= 100) {
//     console.log("Excellent");
// }

// else if (marks >= 80 && marks <= 90) {
//     console.log("Good");
// }

// else if (marks >= 70 && marks <= 80) {
//     console.log("Average");
// }

// else {
//     console.log("Fail");
// }

