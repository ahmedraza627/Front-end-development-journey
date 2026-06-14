// function CreatePencil(name, price, color) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = color;
//     document.body.append(h1);
//   };
// }
// CreatePencil.prototype.company = "Alison Solutions"

// const info1 = new CreatePencil("Delux", 20, "black");
// const info2 = new CreatePencil("Dux", 30, "Orange");

// classes
class CreatePencil {
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

let p1 = new CreatePencil("Ahmed Raza", "Tecno Solutions", 10000000, "blue");
let p2 = new CreatePencil("Mudaisr Junaid", "Digital Solutions", 5000, "red");

// prototypal inheritance..

let name = {
  name: "Ahmed Raza",
  greet: function () {
    console.log(this.name);
  },
};

let newName = Object.create(name)
newName.name = "Mudasir Junaid"
newName.greet()
