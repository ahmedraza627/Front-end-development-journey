// Chapter : Objects
// Q1: Create an object for a student with name, age and isEnrolled.

// let studentInfo = {
//     studentName: "Ahmed Raza",
//     age: 21,
//     isEnrolled : true,
// }

// Q2: Can an object key be a number or Boolean ? Try this

// let obj = {

//     name:"Ahmed",
//     2: "name",
//     true:"Enrolled"
// }
// console.log(obj);

// ans: so yes we can keep number and boolean both as a key in an object

// Q3: Access the value of "first-name" from this object:

// const user = {
//     "first-name": "Ahmed",
// }

// console.log(
//  user["first-name"]);

// Q4: Give a dynamic key let key = "age", how will you access user [key]?

// let key = "age"
// const user = {
//     name: "Ahmed",
//     age: 21,
//     city: "Karachi"
// }

// console.log(user[key]);

// Q5: From the object below, print the latitude:

// const locations = {
//     city: "Karachi",
//     coordinates: {
//         lat: 23.2,
//         lng: 77.4,
//     },
// };

// console.log(locations.coordinates.lat);

// Q6: Destructure the city and lat from the location object above.

// const locations = {
//     city: "Karachi",
//     coordinates: {
//         lat: 23.2,
//         lng: 77.4,
//     },
// };

// let {city} = locations
// let {lat} = locations.coordinates
// console.log(city);
// console.log(lat);

// Q7: Destructure the key "first-name" as a variable called firstName.

// const user = {
//     "first-Name": "Ahmed",
// };

// let {"first-Name": firstName} = user
// console.log( firstName);

// Q8: use for-in loop to log all keys in this object:

// const course = {
//     title: "JavaScript",
//     duration: "4 weeks",
// };
// for (let key in course) {
//     console.log(key);
// }

// Q9: Use object.entries() to print all key-value pairs as:
// title : "JavaScript",
//  duration : "4 weeks"

// const course = {
//     title: "JavaScript",
//     duration: "4 weeks",
// };

// let course2 = Object.entries(course).forEach(function(val){
//     console.log(val);

// })

// Q10: Copy this obejct using spread operator

// const original = {
//     a: 1,
//     b: 2,
// };

// const copy = { ...original }
// console.log(copy);

// Q11: What is the issue with the following code: ?

// const obj1 = {info: {score: 80}};
// const clone = {...obj1}
// clone.info.score = 100;
// console.log(obj1.info.score);

// Ans: The problem is that obj1 is nested object and if we clone it using spread operator then still your value can change as it will so for that problem the only solution is deep clone.

// Q12: Deep clone the object1 safely

// const obj1 = { info: { score: 80 } };

// let obj2 = JSON.parse(JSON.stringify(obj1))

// Q13: Rewrite this safely using optional chaining

// const person = {};
// console.log(person.profile?.name);

// Q14: Use a variable to dynamically assign a property
// const key = "role";
// const user = {
//     name: "Ahmed",
//     [key]: "admin",
//     age: 21
// }

// Chapter : Objects
// 🧪 Practice Zone:

// 1. Create an object for a book (title, author, price)

// const obj = {
//     title: "Rich Dad Poor Dad",
//     author: "Robert kiyosaki",
//     price: 500,
// }

// 2. Access properties using both dot and bracket

// console.log(obj.title);
// console.log(obj["price"]);

// 3.Write a nested object (user with address and location)

const user = {
    name: "Ahmed Raza",
    age: 21,
    address: {
        city: "Karachi",
        location: "Garden West",
    },
};

// 4. Destructure name and age from a above object

// let {name , age} = user

// console.log(name);
// console.log(age);

// 5. Loop through keys and values of an object

// for (let key in user) {
//     console.log("Key:", key, "value:", user[key]);
// }

// 6. Convert object to array using Object.entries()

// const obj = {
//     name: "Ahmed Raza",
//     city: "Karachi",
//     age: 25,
//     email: "ahmedraza@gmail.com"
// } 

// let arr = Object.entries(obj)
// console.log(arr);

// 7. Copy an object using spread operator

// const obj = {
//     email: "google@gmail.com",
//     age: 21,
//     password: "Ahmed123?",
// }

// let newObj = { ...obj }
// console.log(newObj);

// 8. Create a deep copy of an object with nested structure

// const obj = {
//     name: "Ahmed Raza",
//     age: 25,
//     email: "ahmed@gmail.com",
//     address: {
//         city: "Karachi",
//         gender: "Male",
//     }
// }

// let newObj = JSON.parse(JSON.stringify(obj))
// console.log(newObj);

// 9. Use optional chaining to safely access deep values

// console.log(obj?.address?.gender);
// console.log(obj?.address?.city);

// 10. Use a variable as a key using computed properties

// let value = "name"
// const newObj = {
//     [value] : "Ahmed Raza",
//     age : 25,
//     email : "ahmed@google.com",
// }

// console.log(newObj);

