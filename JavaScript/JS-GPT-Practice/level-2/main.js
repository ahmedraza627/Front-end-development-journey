// 🧠 LEVEL 2: Functions & Logic

// 4. Function Expression vs Hoisting

// sayHello();

// var sayHello = function () {
//     console.log("Hello");
// };

// 👉 Tasks:

// Error explain karo
// Same code ko working version mein convert karo

// Ans: hum jab sayHello() ka function pehle call karenge so ye error daygaa because function expression aap hoist nahi karsakte hoo meanwhile aap function declaration ko hoist karsakte hoo.and iss code ko agar aapko hoist karna hai toh isse function declaration main convert karna paray gaa, which are as follows:

// sayHello();

// function sayHello() {
//     console.log("Hello");
// }

// 5. First-Class Function (Real Use)

// Ek function banao:

// operate(a, b, fn)

// 👉 Example:

// operate(2, 3, add) // 5
// operate(2, 3, multiply) // 6

// 👉 Constraint:

// fn ko dynamically use karo

// Ans: 

// function operate(a, b, fn) {
//     function multiply() {
//         return a * b
//     }

//     function divide() {
//         return b / a;
//     }
//     function sum() {
//         return a + b;
//     }
//     function subtract() {
//         return b - a;
//     }

//     if (fn === "divde") {
//         return divide();
//     }

//     else if (fn === "multiply") {
//         return multiply();
//     }
//     else if (fn === "sum") {
//         return sum();
//     }
//     else if (fn === "subtract") {
//         return subtract();
//     }
// }

// let ans = operate(2, 6, "divde");
// console.log(ans);

