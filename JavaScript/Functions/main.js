// Q1: What's the difference between function declaration and function expression in terms of hoisting ??

// Ans: The maine difference is that we can have no error in calling function declaration before creating it, so we can use it even before it was created meanwhile we can't do this in function expression , in function expression we can always use it after creating it so we would expect an error in function expression.

// Q2: What would be the output of the following:

// greet();

// function greet() {
//     console.log("Hello!");
// }

// Ans: we would get "Hello!" because hoisting is allowed in function declaration.

// Q3: Convert this function into an arrow function:

// function multiply(a,b){
//     return a*b
// }

// Ans:
//  let multiply = (a,b)=>{
//     return a*b
// }

// Q4: Identify parameters and arguments:

// function Welcome(name){
//     console.log(name);
// }

// Welcome("Ahmed")

// Ans : (name) is parameter and ("Ahmed") is argument

// Q5: how many parameters does this function have and how many arguments are passed

// function demo(a,b,c){}
// demo(1,2)

// Ans: There are 3 parameters in this function and there are 2 arguments in this function

// Q6: Predict the output:

// function sayHi(name = "Guest"){
//     console.log("Hi", name);
// }
// sayHi();

// Ans: It will show "Hi Guest" as an output because we haven't given any argument so as a result it will use it's default parameter.

// What does the ...operator mean in parameters ?

// function abcd(...num){

// }

// abcd(1,2,3,4,5,6);

// Ans: It means that all of the arguments values will be in the num variable now in the array form.

// Q7: Use rest parameter to accept any number of scores and return the total.

// function total(...sum){
// console.log();

// }

// total()  // will solve later after studying arrays topic

// Q8: fix this function using early return:

// function checkAge(age) {
//     if (age < 18) {
//         console.log("Too Young");
//     } else {
//         console.log("Allowed");
//     }
// }

// Ans:
// function checkAge(age) {
//     if (age < 18) return "Too Young"
//     return "Allowed"
// }

// console.log(checkAge(15));

// Q9: What's the return value of this function ??

// function f() {
//     return
// }
// console.log(f());

// Ans: It will return undefined

// Q10: what does it mean when we say functions are first class citizens

// Ans: It means that our functions can be treated as a value so we can use them as an argument or even cans store in a variable for getting values .

// Q11: Can you assign a function to a variable ??

// Ans: yes we can assign a function to a variable and it is called function expression

// For example:

// let a = function () {
//     console.log("Function expression");
// }
// a();

// Q12: Pass a function into another function and execute it inside.

// function sum(val) {
//     val()
// }

// sum(function () {
//     console.log("Ahmed Raza");

// })

// Q13: what is a higher order function ??

// Ans: A function which can return another function inside the parent function or it can accept another function inside the parameter or it can be both.

// For Example :

// function myFunc(func) {
//     func();
// }
// myFunc(function () {
//     console.log("Your name");
// })

// Q14: Identify either it is a pure function or impure function

// let total = 0;
// function addTotal(num) {
//     total += num
// }

// Ans: It is an impure function as it will causes to change the value of total variable.

// Q15: Convert the above function into pure function :

// let total = 0;
// function addTotal(num) {
//     total += num
// }

// Ans:
// function addTotal(num) {
//     let total = 0
//     total = total + num
// }

// Q18 : What is a closure ? When it is created ?

// Ans: Any function which returns another function and also uses any variable of a function is called closure

// Q19: Cpnvert this normal function into IIFE :

// function init() {
//     console.log("Initialized");
// }

// Ans:

// (function init() {
//     console.log("Initialized");

// })();

// Q20 : What is the use of IIFE? Name one real-world use case.

// Ans: IT is used to immediately invoke the function.

// Q21: What will be thee output and why ??

// greet();

// var greet = function () {
//     console.log("Salam Bhai");
// };

// Ans: It will show an error because it is a function expression not a function statement

// Q22 : What will be thee output and why ??

// greet();

// function greet(){
//     console.log("Hi!");
// };

// Ans: It will show Hi as an output because it is a function declaration.

// BMI Calculator:

// let weight = prompt("Enter your weight in KGs");
// let height = prompt("Enter your height in meters");

// let bmi = weight / (height * height)
// bmi.toFixed(2)

// if (bmi < 18.5) {
//     alert("You are underweight")
// }

// else if (bmi >= 18.5 && bmi < 25) {
//     alert("You are normal")
// }

// else if (bmi >= 25 && bmi < 30) {
//     alert("You are Overwight")
// }

// else if (bmi >= 30) {
//     alert("You are Obese")
// }

// Q14: Function Statement & Expression

// Function to add 2 numbers → statement style

// function add() {
//     let num1 = 10
//     let num2 = 20
//     console.log(num1 + num2);

// }
// add();

// Same function → expression style → assign to variable → call it

// let add = function(){
//     let sum = 120
//     console.log(sum);
// }
// add()

// Q15: Convert above functions into arrow function

// let add = () => {
//     console.log("Arrow Function");
// }

// add()

// Q16: parametrs & Arguments:

// Function to greet user with name → default parameter = "Guest"

// let greet = function (name = "Guest") {
//     console.log("Welcome", name);
// }

// greet()

// Q17:Rest Parameters:

// Function to sum any number of arguments

// let sum = function (a, b, c, ...val) {
//     let sum = a + b + c;
//     console.log(sum);
// }

// sum(12, 10, 15, 16, 17, 25, 30, 35, 45, 55, 65, 71)

// Q18: Return :
// Function to calculate square of number → return value → log output

// let square = function (num1) {
//     return num1 * num1
// }
// console.log(square(20));

// Q19: First Class & Higher Order Functions:

// Function as argument → call it inside another function

// Ans:

// let myFunc = function (val) {
//     val()
// }
// myFunc(function () {
//     console.log("Ahmed raza");

// })

// Function returning function → try example

// let name = function (name) {
//     return function () {
//         console.log("My name is",name);

//     }
// }

// name("Ahmed Raza")()

// Q20: Pure VS Impure Functions:

// Pure function → sum of two numbers
// Impure function → adds number to global variable

// Pure Function Example:
// function sum(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
// }

// Impure Function Example:

// let score = 0;
// function counter(sum) {
//     score++;
//     sum = sum + score;
//     console.log(sum);

// }
// counter(1);
// counter(1);
// counter(1);
// counter(5);
// counter(1);

// Closures & Lexical Scoping:

// Function inside function → inner function accesses outer variable → print result

// let name =  function () {
//     let name = "Ahmed Raza"
//     return function () {
//     console.log("Welcome!", name);
//     }
// }

// name()();

// Q22: IIFE:
// Immediately invoked function→ print something

// (function () {
//     let bankBalance = 150000
//     console.log(bankBalance);

// })();

// Hoisting Difference:
// Q23: Declaration vs Expression:
// Try calling function before declaration → works?

// Ans:

// newFunc();

// function newFunc(){
//     console.log("New Function Declaration");
// }

// We can hoist Function declaration

// Try calling function expression before assignment → works?

// Ans:

// myName();

// let newName = function () {
//     console.log("Function Expression");
// }

// It will show us an error.

// Q24: Create a function to transform a value

// function double(val) {
//     return val * val
// }
// console.log(double(25));

// Q25: Use IIFE to isolate variables

// (function (){
//     let balance = 50000;
//     console.log(balance);

// }) ();

// Functions:
// 1. Write a BMI calculator function

// function bmi() {

//     let weight = prompt("Enter your weight in KGs");
//     let height = prompt("Enter your height in meters");
//     let bmi = weight / (height * height)

//     bmi.toFixed(2)

//     if (bmi < 18.5) {
//         alert("You are underweight")
//     }

//     else if (bmi >= 18.5 && bmi < 25) {
//         alert("You are normal")
//     }

//     else if (bmi >= 25 && bmi < 30) {
//         alert("You are Overwight")
//     }

//     else if (bmi >= 30) {
//         alert("You are Obese")
//     }

// }

// bmi()

// 2. Create a greet function with default name

// function greet(name = "Ahmed Raza") {
//     console.log(`Hello ${name}`);

// }

// greet("Ali Raza")

// 3. Sum all numbers using rest parameter

// function sum(...num) {
//     let count = 0;
//     for (let i = 0; i < num.length; i++) {
//         count = count + num[i];
//     }
//     console.log(count);
// }
// sum(10, 20, 30, 40);

// 4.Create a closure counter function

// it means ke aapko aik aisa function banana hai jo ye toh function ke andar aik or function return karay ya phir woh uss outer function ki values ko apne inner function main use karay..

// function counter(){
// }

// 5. Write a function that returns another function

// function name(name) {
//     console.log("Your name is:",name);

//     function age(age){
//         console.log("Your name is :", name ,"age is:",age);
//     }
//     age(21)
// }
// name("Ahmed Raza")

// 6. Use a function to log even numbers in array

// function even(...num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       console.log(num[i]);
//     }
//   }
// }
// even(10, 20, 30, 15, 17, 18);

// 7. Create a pure function to add tax
// aik aisa system jis main aapki saari amount par tax calculate hoone ke baad aapko amount dikha f=day after tax

// function totalTax(...amount) {
//   let tax = 17;
//   amount.forEach(function (num) {
//     console.log(num + num * (tax / 100));
//   });
// }
// totalTax(100, 120, 150, 170);

// 8. Use IIFE to show welcome message

// (function (name) {
//   console.log("Hello", name);
// })("Ahmed Raza");

// 9. Write a discount calculator (HOF style)

// function discount(price) {
//     let discount = +prompt("Enter your discount");

//     return function actualValue() {
//         let priceAfterDiscount = price - price * (discount / 100);
//         return priceAfterDiscount;
//     }
//     actualValue()
// }

// let priceAfterDiscount = discount(2000);
// console.log(priceAfterDiscount());

// 10. Make a toUpperCase transformer using HOF

// function textTransformer(){
//     return function upperCase(str){
//         let result = str.toUpperCase()
//         return result
//     }
// }

// const upperCase = textTransformer()
// console.log(upperCase("uzair"));