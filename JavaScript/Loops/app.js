// Q1: Print numbers from 1 to 10 using a for loop

// for(let i =0 ; i <11 ;i++){
//     console.log(i);

// }

// Q2: Print numbers from 10 1 to using a while loop

// let i = 10
// while (i > 0) {
//     console.log(i);
//     i--

// }

// Q3: Print even numbers from 1 to 20 using a for loop

// for(let num = 0 ; num <21 ; num++) {
//     if(num % 2 ==0 ){
//         console.log(num);
//     }
// }

// Q4: Print odd numbers from 1 to 15 using a while loop

// let num = 1;
// while (num < 16) {
//     if (num%2 === 1) {
//         console.log(num);
//     }
//     num++
// }

// Q5: Print the multiplication table of 5 (i.e 5 * 1 = 5 ... 5 * 10 = 50)

// let num = 5
// for (let i = 0; i < 11; i++) {
//     console.log(`5 * ${i} : `, num * i );
// }

// Q6: Find the sum of numbers from 1 to 100 using a loop .

// let sum = 0
// for (let i = 1; i < 101; i++) {
//     sum = sum + i
// }
//     console.log(sum);

// Q7: Print all numbers between 1 to 50 that are divisible from 3

// for(let i = 1 ; i<51 ; i++){
//     if(i%3 === 0 ){
//         console.log(i);
//     }
// }

// Q8: Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let num = prompt(+"Enter a number:")
// for(let i = 1; i <= num ; i++){
//     if(i%2===0){
//         console.log("The number is odd", `${i}`);
//     }
//     else{
//         console.log("The number is even" , `${i}`);

//     }
// }

// Q9 : Count how many numbers between 1 to 100 are divisible by both 3 and 5

// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
//     else{
//         console.log(`The number ${i} is not divisible by both 3 and 5`);
//     }
// }

// Break and Continue Questions

// Q10: Stop at First muliple of 7
// Write a loop from 1 to 100 that :
// Prints each number
// Stops completely when it finds the first number divisible by 7

// for(let i = 1; i<101 ; i++){
//     console.log(i);
//     if(i%7===0){
//         console.log("The first number divisible by 7 is : ", i);
//         break;

//     }

// }

// Q2: Skip multiples of 3

// Write a loop from 1 to 20 that :
// Skips numbers divisible by 3
// Prints all others

// for(let i =1 ; i<21 ; i++){
//     if(i%3===0){
//         continue
//     }
//     console.log(i);
// }

// Q3: Print first 5 Odd numbers only
// write a loop from 1 to 100 that :
// Prints only 5 odd numbers
// Then stops the loop

// let count = 0
// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 1) {
//         count++
//         console.log(i);
//     }
//     if (count === 5) {
//         break
//     }

// }

// �Chapter 4: Control Flow
// � Practice Zone

// 1. Student grade logic:
// Write a program that prints A, B, C, D, or F based on marks

// Ans:

// let marks = 90
// if(marks >= 90 && marks <= 100){
//     console.log("A");
// }

// else if(marks >= 80 && marks <= 90){
//     console.log("B");
// }

// else if(marks >= 70 && marks <= 80){
//     console.log("C");
// }

// else if(marks >= 60 && marks <= 70){
//     console.log("D");
// }

// else if(marks >= 50 && marks <= 60){
//     console.log("E");
// }

// else {
//     console.log("F");
// }

// 2. Rock-paper-scissors:
// Given player1 and player2's choice, print winner or draw
// Ans:

// let rock
// let paper
// let scissor

// let player1 = prompt("Enter Rock, Paper or Scissor");
// let player2 = prompt("Enter Rock, Paper or Scissor");

// if (player1 == "rock" && player2 == "paper") {
//     console.log("Player 2 wins");
// }

// else if (player1 == "paper" && player2 == "rock") {
//     console.log("Player 1 wins");
// }

// else if (player1 == "rock" && player2 == "scissor") {
//     console.log("Player 1 wins");
// }

// else if (player1 == "scissor" && player2 == "rock") {
//     console.log("Player 2 wins");
// }

// else if (player1 == "scissor" && player2 == "rock") {
//     console.log("Player 2 wins");
// }

// else if (player1 == "paper" && player2 == "scissor") {
//     console.log("Player 2 wins");
// }

// 3. Login message:

// let isLoggedIn = prompt(" are you login ? True or False");
// let isAdmin = prompt("are you an admin ? True or False");
// Show different messages based on combination

// if (isLoggedIn === "true" && isAdmin === "true") {
//   console.log("You can login");
// } else if (isLoggedIn === "true" && isAdmin === "false") {
//   console.log("You can login as a user not as admin");
// } else if (isLoggedIn === "false" && isAdmin === "true") {
//   console.log("You can login as admin");
// } else {
//   console.log("You cannot login !");
// }

// 4. Weather advice:

// let weather = "summer";
// Use switch-case to print what to wear

// switch (weather) {
//     case "rainy":
//         console.log("Wear a raincoat !");
//         break;

//     case "sunny":
//         console.log("Wear a light shirt and light clothes");
//         break;

//     case "summer":
//         console.log("Wear a light shirt and light clothes");
//         break;

//     case "winter":
//         console.log("Wear a jacket !");
//         break;

//     default:
//         console.log("Check the weather first");

//         break;
// }

// 5. Age checker:
// Return "Kid", "Teen", "Adult", or "Senior"

// let age = + prompt("Enter Your age")
// if (age >= 5 && age <= 12) {
//     console.log("Kid");
// }

// else if (age >= 13 && age <= 17) {
//     console.log("Teen");
// }

// else if (age >= 18 && age <= 24) {
//     console.log("Adult");
// }

// else if (age >= 25 && age <= 60) {
//     console.log("Senior");
// }

// else {
//     console.log("Enter a valid age ");

// }

// 🧪 Practice Zone:

// 1. Print 1 to 10 using for

// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }

// 2. Print even numbers between 1 to 20

// for(let i = 0; i<21; i = i+2){
//     console.log(i);
// }

// 3. Reverse a string using loop

// let str = "Ahmed Raza";
// let reverse = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i]

// }
// console.log(reverse);

// 4. Sum of all numbers in an array with method and without method

let arr = [10, 20, 30];
// let sum = arr.reduce(function (accumulator, currentval) {
//     return accumulator + currentval
// }, 0)

// console.log(sum);

// let count = 0

// for(let i =0 ; i<arr.length ; i++){
//     count = count + arr[i]
// }

// console.log(count);

// 5. Print all characters of a name using for-of

// let char = "Ahmed Raza"

// for(let str of char){
//     console.log(str);
// }

// 6. Print all object keys and values using for-in

// let obj = {
//     name: "Ahmed Raza",
//     city: "Karachi",
//     age: 21,
//     email: "ahmedrazaafjn@gmail.com"
// }

// for (let key in obj) {
//     console.log(key, obj[key]);

// }

// 7. Use continue to skip a specific number

// for(let i = 0 ; i<11 ; i++){
//     if(i==7){
//         continue
//     }
//     console.log(i);
// }

// 8. Guess number game – use while to ask until correct

// let randomNumber = Math.floor(Math.random() * 10) + 1;
// let guess = 0;

// while (guess !== randomNumber) {
//   guess = +prompt("Guess a number between 1-10");

//   if (guess > randomNumber) {
//     console.log("Too High!");
//   } else if (guess < randomNumber) {
//     console.log("Too Low!");
//   } else {
//     console.log("Correct!");
//   }
// }

// 9. Pattern: Print triangle using *

// let star = "*"
// let newStr = ""

// for(let i =1; i<=5 ; i++){
//     newStr = newStr + star
//     console.log(newStr);
// }

// 10. Sum of even numbers in an array using forEach

// let arr1 = [10, 20, 30, 15, 17, 18, 16, 22];
// let count = 0;

// newArr = arr1.forEach(function (val) {
//     if (val % 2 === 0) {
//         count = count + val;
//     }
// });
// console.log(count);


