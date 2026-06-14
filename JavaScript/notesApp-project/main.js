// Global Variables
const addNote = document.querySelector("#add-note");
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector(".closeForm");
const imgInput = document.querySelector("#img-input");
const nameInput = document.querySelector("#name-input");
const homeInput = document.querySelector("#home-input");
const purposeInput = document.querySelector("#purpose-input");
const form = document.querySelector("form");
const stack = document.querySelector(".stack")
const notes = [];

addNote.addEventListener("click", function (e) {
  formContainer.style.display = "initial";
});

closeForm.addEventListener("click", function (e) {
  formContainer.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const img = imgInput.value.trim();
  const name = nameInput.value.trim();
  const home = homeInput.value.trim();
  const purpose = purposeInput.value.trim();
  const category = document.querySelector("input[name = 'category']:checked");

  const note = {
      id: Date.now(),
      image: img,
    fullName: name,
    address: home,
    reason: purpose,
  };

  notes.push(note);
  console.log(notes);

  form.reset()
  form.style.display = "none"
});
renderNotes()

function renderNotes(){
    stack.textContent = ""

    notes.forEach(function(note){
        const card = document.createElement("div")
        card.classList.add("card")
        card.textContent = note.fullName
        stack.appendChild(card)
    })
}
