// Chapter 1: Alerts

// 1. Write a script to greet your website visitor using JS alert
// box.
// Ans:

// alert("Hello user!")

// 2.  Write a script to display following message on your web
// page: " Error! Please enter a valid password."

// Ans:
// alert(" Error! Please enter a valid password.")

// 3.Write a script to display following message on your web
// page: (Hint: Use line break) :
// "Welcome to JS Land...
// Happy Coding!
// "

// Ans:
// alert("Welcome to JS Land... \n Happy Coding!")

// 4. Write a script to display following messages in sequence:
// "Welcome to JS land"
// "Happy Coding! "

// Ans:
// alert("Welcome to JS land")
// alert("Happy Coding!")

// 5. Generate the following message through browser’s
// developer console:

// "Hello... I can run JS through my web browser's console"

// Ans:
// alert("Hello... I can run JS through my web browser's console")
// console.log(("Hello... I can run JS through my web browser's console"));

// Chapter 2: Variables for strings:

// 1. Declare a variable called username.
// Ans:
// let username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.

// let meName = "Ahmed Raza";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// Ans:

// let message = "Hello World"
// alert(message)

// 4.Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

// let name1 = "Jhone Doe"
// let name2 = "15 years old"
// let name3 = "Certified Mobile Application Development"

// alert(name1)
// alert(name2)
// alert(name3)

// 5. Write a script to display the following alert using one JS
// variable:

// "PIZZA"
// "PIZZ"
// "PIZ"
// "PI"
// "P"

// let pizza = "P"
// alert(pizza + "IZZA")
// alert(pizza + "IZZ")
// alert(pizza + "IZ")
// alert(pizza + "I")
// alert(pizza)

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// Ans:

// let email = "ahmedrazaafjn"
// alert(email + "@gmail.com")

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

// Ans:
// let book = "A smarter way to learn JavaScript"
// alert(book)

// 8. Write a script to display this in browser through JS .

// " Yah! I can write HTML content through JavaScript "

// let h2 = document.querySelector('h2')
// h2.textContent = "Yah! I can write HTML content through JavaScript"

// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// Ans:

// let str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(str)

// Chapter-3: VARIABLES FOR NUMBERS

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// Ans:

// let age = "21";
// alert(`I am ${age} years old`);


// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// Ans:

// let count = 20
// alert(`You have visited ${count} times`)

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// let birthYear = 2005
// alert(`My birth year is ${birthYear} and Data type of birthYear is ${typeof birthYear} `)

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// let name = "Ahmed Raza"
// let productTitle = "Shirts"
// let quantity = "10"

// alert(`${name} ordered ${quantity} ${productTitle} on XYZ Clothing store.`)

// Chapter 4 : VARIABLE NAMES: LEGAL & ILLEGAL

// 1. Declare 3 variables in one statement.

// Ans:

// let name; let email ; let password;


// 2. Declare 5 legal & 5 illegal variable names.

// Ans:

// Legal names:
// let myName ;
// let age ;
// let password
// let id
// let pic ;

// illegal names :
// let for ;
// let while ;
// let 12sa ;
// let class ;
// let function ;

// Chapter 5 : MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let num1 = +prompt("Enter num 1")
// let num2 = +prompt("Enter num 2")

// let sum = num1 + num2
// alert(`sum of ${num1} and ${num2} is : ${sum}`)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// let subtraction = num1 - num2
// alert(`subtraction of ${num1} and ${num2} is : ${subtraction}`)

// let multiplication = num1 * num2
// alert(`Multiplication of ${num1} and ${num2} is : ${multiplication}`)

// let division = num2 / num1
// alert(`Division of ${num1} and ${num2} is : ${division}`)


// 3. Do the following using JS Mathematic Expressions
// a.Declare a variable.
//     b.Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c.Initialize the variable with some number.
//     d.Show the value of variable in your browser like “Initial
// value: 5”.
// e.Increment the variable.
//     f.Show the value of variable in your browser like “Value
// after increment is: 6”.
// g.Add 7 to the variable.
//     h.Show the value of variable in your browser like “Valueafter addition is: 13”.
// i.Decrement the variable.
//     j.Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k.Show the remainder after dividing the variable’s value
// by 3.
// l.Output : “The remainder is: 0”.

// Ans:

// let value;
// console.log(`Value after declaration is ${value}`);

// value = 5;
// console.log(`Initial value :${value}`);

// value++
// console.log(`Value after increment is ${value}`);

// value = value + 7
// console.log(`Value after addition is : ${value}`);

// value = --value
// console.log(`Value after decrement is :${value}`);

// value = value % 3
// console.log(`Reminder after dividing the variable's value : ${value}`);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output: "Total cost to buy 5 tickets to a movie is 3000PKR"

// let price = 600
// let total = price * 5
// console.log(`Total cost to buy 5 tickets to a movie is ${total} PKR`);

// 5. Write a script to display multiplication table of any
// number in your browser. E.g :

// Table of 4:
// 4 * 1 = 4
// 4 * 2 = 8
// 4 * 3 = 12
// 4 * 4 = 16
// 4 * 5 = 20
// 4 * 6 = 24
// 4 * 7 = 28
// 4 * 8 = 32
// 4 * 9 = 36
// 4 * 10 = 40

// let num = + prompt("Enter any number")

// for(let i = 1; i<11; i++){
//     console.log(`${num} * ${i} =` , num * i);

// }

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

// " C = (F - 32) *5/9 "
// " F = (C * 9/5) + 32 "

// let celcius = +prompt("Enter a celcius temperature ")
// let fahrenheit = (celcius * 9 / 5) + 32
// console.log(`${celcius}C is ${fahrenheit}F `);

// let fahrenheitTemp = + prompt("Enter a fahrenheit temperature")
// let celciusTemp = (celcius * 9 / 5) + 32
// console.log(`${fahrenheitTemp}F is ${celciusTemp}C`);

// 7.  Write a program to implement checkout process of a
// shopping cart system for an e - commerce website.Store
// the following in variables
// a.Price of item 1
// b.Price of item 2
// c.Ordered quantity of item 1
// d.Ordered Quantity of item 2
// e.Shipping charges
// Compute the total cost & show the receipt in your browser.

// let priceItem1 = 100;
// let priceItem2 = 200;
// let orderedItem1 = 2
// let orderedItem2 = 3
// let shippingCharges = 200
// let total = (priceItem1 * orderedItem1) + (priceItem2 * orderedItem2) + shippingCharges

// document.write(`Price of item 1 is ${priceItem1} `)
// document.write(`Quantity of item 1 is ${orderedItem1}`)
// document.write(`Price of item 2 is ${priceItem2}`)
// document.write(`Quantity of item 2 is ${orderedItem2}`)
// document.write(`Shipping Charges ${shippingCharges}`)
// document.write(`Total cost of order is ${total}`)

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// let totalMarks = 980
// let obtainedMarks = 804
// let percentage = obtainedMarks / totalMarks
// document.write(` Total Marks: ${totalMarks} `)
// document.write(`Marks Obtained: ${obtainedMarks}`)
// document.write(` Percentage: ${percentage}`)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let usd = 10
// let riyals = 25
// let pkr = (usd * 104.80) + (riyals * 28)
// document.write(`Total PKR is : ${pkr}`)

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let num = 0
// num = num + 5 * 10 / 2
// document.write(`${num}`)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// Ans:
// let currentYear = 2026
// let birthYear = 2005
// let age = currentYear - birthYear

// document.write(`He is ${age} years old`)

// 12. The Geometrizer: Calculate properties of a circle.
//     a.Store a radius into a variable.
//         b.Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint: Circumference of a circle = 2 π r, π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”.(Hint: Area of a circle = π r2, π = 3.142)

// Ans:
// let radius = 20
// let circumference = 2 * 3.142 * radius
// let area = 3.142 * (radius * radius)
// document.write(`The circumference is ${circumference}`)
// document.write(` The area is ${area}`)

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// Ans: 
// let snack = "popritoes"
// let currentAge = 21
// let amountPerDay = 2
// let oldAge = 70
// let total = (oldAge * 365) * 2
// document.write(`“You will need ${total} to last you until the ripe old age of ${oldAge}`)

