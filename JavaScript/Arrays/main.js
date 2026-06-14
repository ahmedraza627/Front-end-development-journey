// Q1: Create an array with 3 fruits and print the second fruit.

// let fruits = ["apple", "mango", "banana"]
// console.log(fruits[1]);

// Q2: Add mango at the end and pineapple at the beginning of this array:

// let fruits = ["Guava", "Kiwi"]
// fruits.push("mango")
// fruits.unshift("pineapple")
// console.log(fruits);

// Q3: Replace banana with kiwi from the given array:
// let fruits = ["Apple", "Banana"]
// fruits.pop()
// fruits.push("kiwi")
// console.log(fruits);

// Q4: what is the difference between push() and unshift() ??

// Ans: push() is used to add any value in the last of array and unshift is used to add any value in the beginning of an array.

// Q5:Remove the last item from this array using a method:
// let numbers = [1,2,3,4]

// let numbers = [1,2,3,4]
// numbers.pop()
// console.log(numbers);

// Q6: Insert red and blue at index 1 in this array:
// let colors = ["Green", "Yellow"]

// let colors = ["Green", "Yellow"]
// colors.splice(1,0,"Red","Blue")

// Q7: Extract only the middle 3 elements from the array
// let items = [1,2,3,4,5,6]

// let items = [1,2,3,4,5,6]
// let newItems = items.slice(1,4)
// console.log(newItems);

// Q8: Sort this alphabetically and then reverse it
// let names = ["Zara", "Arjun", "Mira", "Bhavya"];

// let names = ["Zara", "Arjun", "Mira", "Bhavya"];
// names.sort();
// names.reverse();
// console.log(names);

// Q9: use .map to square each number
// let arr = [1,2,3,4]

// let arr = [1,2,3,4]
// let newarr = arr.map(function(val){
//     return val * val
// })
// console.log(newarr);

// Q10: use .filter to keep number greater than 10:
// let arr = [5,12,8,20,3];
// let newarr = arr.filter(function(val){
//     return val>10
// })
// console.log(newarr);

// Q11: use reduce to find the sum of an array:
// let arr = [10,20,30];

// let arr = [10, 20, 30];
// let sum = arr.reduce(function (accumulator, val) {
//     return accumulator + val;
// }, 0)

// console.log(sum);

// Q12: use .find to get the first number less than 10
// let arr = [12,15,3,8,20];

// let arr = [12,15,3,8,20];
// let sorting = arr.find(function(val){
//     return val < 10
// })
// console.log(sorting)

// Q13: Use .some() to check if any student has scored below 35:
// let arr = [45,60,28,90];

// let arr = [45,60,28,90];
// let newarr = arr.some(function(val){
//     return val < 35
// })
// console.log(newarr);

// Q14: Use .every() to check all numbers are even:
// let arr = [2,4,6,8,10];

// let arr = [2,4,6,8,10]
// let newarr =  arr.every(function(val){
//     return val % 2 ===0
// })

// console.log(newarr);

// Q15: Destructure this array to get first name and last name
// let fullName = ["Ahmed", "Raza"];
// let [firstName, lastName] = fullName
// console.log("Your First Name is :",firstName);
// console.log("Your last Name is :",lastName);

// Q16: Merge two arrays using spread operators:

// let a = [1,2]
// let b = [3,4]
// let merge = [...a, ...b]
// console.log(merge);

// Q17: Add Pakistan to the start of the array using spread:
// let countries = ["USA","UK"];

// let countries = ["USA","UK"];
// let newCountries = [...countries]
// newCountries.unshift("Pakistan")
// console.log(newCountries);

// Q18: Clone this array properly (not by reference)

// let arr = [1, 2, 3];
// let newarr = [...arr]
// console.log(newarr);

// Chapter: Arrays
// 1. Create an array of student names and print each:

// let arr = ["Ahmed Raza", "Uzair", "Hashir"]
// arr.forEach(function (val) {
//     console.log(val);

// })

// 2. Filter even numbers from an array

// let arr = [, 1, 2, 3, 4, 56, 7, 8, 9, 10, 11, 12, 13, 141, 16, 15, 17, 19, 21, 22, 27]
// let even = arr.filter(function (val) {
//     return val % 2 === 0
// })
// console.log(even);

// 3.Map prices to include GST (18%)

// let prices = [1000,1500,1700,2100,2300,4500,500,100]
// let total = prices.map(function(val){
//     let gst = 18
//     let total = val + (val) * (gst /100)
//     return total
// })
// console.log(total);

// 4. Reduce salaries to calculate total payroll

// let salaries = [100000,200000,250000,150000,80000,70000,50000,15000,5000]
// let total = salaries.reduce(function(accumulator,currentVal){
//     let total = accumulator + currentVal
//     return total
// },0)

// console.log(total);

// 5. Find the first student with grade A

// let grades = ["D","E","F","C","D","A","B","C","C","B",]
// let grade = grades.find(function(val){
//     return val === "A"
// })

// console.log(grade);

// 6. Write a function to reverse an array

// let arr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
// let reverse = arr.reverse()
// console.log(reverse);

// 7. Sort array of ages in ascending order:

// let arr = [50, 70, 40, 10, 18, 25, 30,65]
// let sort = arr.sort(function (a, b) {
//     return a - b
// })
// console.log(sort);

// 8. Destructure first two elements of an array
// let arr = ["Ahmed","Karachi","age","email","Password"]

// let [newName , city] = arr
// console.log(newName);
// console.log(city);

// 9. Use some() to check if any student failed

// let grades = ["A", "B", "C", "E", "D", "F", "B",]
// let fail = grades.some = (n) => n === "F"
// console.log(fail);

// 10.Use spread to copy and add new item

// let arr = [500, 200, 300, 100, 250, 650]
// let newArr = [...arr]
// console.log(newArr);

