// Q1: What is DOM? and how does it represent the HTML Structure?
// Ans: DOM stands for Document Obejct Model and isse aap apne web page ko control karsakte hoo through JS and it represents the complete HTML structure as a tree.

// Q2: Name the types of Nodes in the DOM tree.
// Ans: There are two types of nodes: 1.Node  2.Element   3. Text node

// Q3: What's the differnce between an element node and text node?
// Ans: Element node is the actual HTML tag and meanwhile text node is the text of that tag.

// Q4: Inspect the following HTML in the browser and identify each node:
{
    /* <div>
      Hello <span>World </span>
  
  </div> */
}

// Ans: It has element node and has text node which is "Hello" and then we have element node and a text node

// Q5: What's the differnce between getElementbyId() and querySelector?
// Ans: we can select elemnt by id only in getElementbyId() and we can select id, class, elemnt inshort all in querySelector

// Q6: What does getElementsByClassName return? Is it an array?
// Ans: it reutrns an array in which there are all the elements with the same class name. it returns somthing similar to an array which is called HTML collection.

// Q7: Use querySelectorAll to select all buttons with class ."buy-now"
// Ans:

// let buyNow = document.querySelectorAll('.buy-now')
// console.dir(buyNow);

// Task-1: Select the heading of a page by ID and change its text to "Welcome to SMIT!"
// Ans:

// let h1 = document.getElementById("name")
// h1.innerText = "Welcome to SMIT!"

// Task-2: Select all <li> element and print their text using a loop.
// Ans:
// let lis = document.querySelectorAll('li');
// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i].textContent);

// }

// Question-8: What's the differnce between innerText, textContent and innerHTML ??

// Ans: innerText and textContent both are almost same , they both can change the text of an element meanwhile innerHTML is responsible for manipulation of HTML element into any other element.

// Q9: When should you use textContent instead of innerText ?
// Ans: innerText aapka sirf woh content hii bahir nikalay gaa jo visible hai meanwhile it is slow as compared to textContent , textContent aapko saara text content deta hai either it is hidden or visible both, and it is faster as compared to innerText

// Task-3: Select a paragraph and replace its content with:
// {/* <b>Updated</b> by JavaScript   */}

// Ans:
//  let p = document.querySelector('p')
// p.innerHTML = "<b>Updated</b> by JavaScript"

// Task-4: How do you get a src of an image using Javascript

// let img = document.querySelector('img');
// console.log(img.getAttribute("src"));

// Q10: what does setAttribute do ??

// Ans: setAttribute is used to set a new attribute in any HTML element..

// Task-5: Select a link and update it's href to point to https://Google.com
// Ans:

// let a = document.querySelector('a')
// a.setAttribute('href', "https://Google.com")

// Task-6: Add a title attribute to a div dynamically

// let newdiv = document.querySelector('.newdiv')
// newdiv.setAttribute('title', "Ahmed Raza")

// Task-7: Remove the disable attribute from button

// let btn = document.querySelector('button')
// btn.removeAttribute('disabled')

// Q11 : What does createElement do ? What's returned ?

// createElement is used to create new HTML elements and it returns HTML element node

// Q12: Whats the difference between appendChild() and prepend() child.
// Ans: appendChild() is used to create an element in the parent div but in the end of all the elements meanwhile prepend creates element in the starting of the element.

// Q13: Can you remove an element using removeChild()?
// Ans:
// let newdiv = document.querySelector('div')
// newdiv.removeChild("button");

// Task-8: list item <li> New task </li> and add it to the end of <ul>

// let ul = document.querySelector('ul')
// let li = document.createElement('li')
// li.textContent = "New Task"
// ul.appendChild(li)

// Task-9: Create a new image element with a placeholder source and add it at the top of a div.

// let newdiv = document.querySelector('div')
// let img = document.createElement('img')
// img.setAttribute("placeholder", "godfather")
// newdiv.appendChild(img)

// Task-10: Select the first item in a list and delete it from the DOM.

// let li = document.querySelector("li");
// li.remove()

// Q14: How do you change the background color of an element ?

// Ans: we can change the background color of an element in JS by two ways:
// 1. .style     2. classList

// from .style we can give background color directly and from classList we can add that class which contains that background color

// Q15: Whats the difference between .classList.add() and classList.toggle()

// Ans: It means that whenever we use .classList.add() we can add any class in an element from JS meanwhile in classList.toggle() it would do opposite means if there is a class available it would remove that class and if there is no class with that name it would add that class.

// Task-10: Add a highlight class to every even item in a list

// let li = document.querySelectorAll('ul li:nth-child(2n)');
// li.forEach(function(val){
//     val.classList.add ("highlight")
// })

// Task-11: Toggle a class active on a button when clicked (Hint: Use classList.toggle()).  

// will do it after some lessons

// Task - 12: set the font size of all <p> elements to 18px using style.
// Ans:

// let p = document.querySelectorAll('p')
// p.forEach(function (val) {
//     val.style.fontSize = "18px"
// })

function colorChange() {
    p.style.color = 'red'
}

let p = document.querySelector("p")
p.addEventListener('dblclick', colorChange)

p.removeEventListener('dblclick',colorChange)
