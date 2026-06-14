// // hamien ye karna hai ke jab bhi form par click karien toh aik div ban kar aajaye jaisa abhi humne CSS se banaya hai

// let form = document.querySelector('form')
// let inputs = document.querySelectorAll('input')
// let main = document.querySelector('#main')

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     let card = document.createElement('div')
//     card.classList.add('card')

//     let profile = document.createElement('div')
//     profile.classList.add('profile')

//     let img = document.createElement('img')

//     img.setAttribute("src", inputs[0].value)

//     let h3 = document.createElement('h3')
//     h3.textContent = inputs[1].value

//     let h5 = document.createElement('h5')
//     h5.textContent = inputs[2].value

//     let p = document.createElement('p')
//     p.textContent = inputs[3].value

//     console.log(card);

//     profile.appendChild(img)
//     card.appendChild(profile)
//     profile.appendChild(h3)
//     profile.appendChild(h5)
//     profile.appendChild(p)
//     main.appendChild(card)

//     inputs.forEach(function (e) {
//         if (e)

//             e.value = ""
//     })
// })

// MouseOver:

// let abcd = document.querySelector('.abcd')

// window.addEventListener('mousemove', function (e) {
//     console.log(e.clientY, e.clientX);

//     abcd.style.top = e.clientY + 'px'
//     abcd.style.left = e.clientX + 'px'
// })

// create a ul with li's and whenever we click on them a line-through property is applied and whenever there is already a line through then when we click on it it removes that line-through 

let ul = document.querySelector('ul')

ul.addEventListener('click', function (e) {
    e.target.classList.toggle('lt')
})