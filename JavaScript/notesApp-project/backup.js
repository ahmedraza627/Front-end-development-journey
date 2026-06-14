// Global Variables Declarations:

const addBtn = document.querySelector("#add-note");
const formContainer = document.querySelector(".form-container");
const closeForm = document.querySelector(".closeForm");
const imgInput = document.querySelector("#img-input");
const nameInput = document.querySelector("#name-input");
const homeInput = document.querySelector("#home-input");
const purposeInput = document.querySelector("#purpose-input");
const form = document.querySelector("form");
const stack = document.querySelector(".stack");
let currentEditId = null;

// add button to open form
addBtn.addEventListener("click", function () {
  formContainer.style.display = "initial";
});

// close button to close form
closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
});
// form submit prevention and form handling and resetting and hiding form..
let notes =JSON.parse(localStorage.getItem)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Variable declarations for form validation
  const img = imgInput.value.trim();
  const name = nameInput.value.trim();
  const home = homeInput.value.trim();
  const purpose = purposeInput.value.trim();
  const category = document.querySelector("input[name='category']:checked");

  // 🔹 REGEX PATTERNS
  const urlRegex = /^(https?:\/\/.*\.(jpg|jpeg|png|gif|webp))$/i;
  const nameRegex = /^[a-zA-Z\s]{3,30}$/;
  const textRegex = /^[a-zA-Z0-9\s.,'-]{5,100}$/;

  // 🔹Form VALIDATION :

  if (!urlRegex.test(img)) {
    alert("Valid image URL daal (jpg/png etc)");
    return;
  }

  if (!nameRegex.test(name)) {
    alert("Name sirf alphabets hona chahiye (3-30 chars)");
    return;
  }

  if (!textRegex.test(home)) {
    alert("Home town valid daal");
    return;
  }

  if (!textRegex.test(purpose)) {
    alert("Purpose valid daal");
    return;
  }

  if (!category) {
    alert("Category select kar");
    return;
  }

  // ✅ Agar yahan tak aa gaya → form valid hai
  console.log("Form valid hai, aage badh");

  // object main data store karna form ka

  const note = {
    id: Date.now(), // important for delete/edit
    image: img,
    fullName: name,
    address: home,
    purpose: purpose,
    category: category.value,
  };

  // localStorage main save karna and phir usse array main push karna data ko..

  if (localStorage.getItem("notes")) {
    notes = JSON.parse(localStorage.getItem("notes"));
  } else {
    notes = [];
  }

  notes.push(note);

  if(currentEditId){

   notes = notes.map(function(singleNote){

      if(singleNote.id === currentEditId){

         return {
            id: currentEditId,
            image: img,
            fullName: name,
            address: home,
            purpose: purpose,
            category: category.value,
         };

      } else {
         return singleNote;
      }
   });

} else {
   notes.push(note);
}

localStorage.setItem("notes", JSON.stringify(notes));
renderNotes();
form.reset();
  });


  // resetting form and hiding form
  formContainer.style.display = "none";

// for rendering cards..
function renderNotes() {
  notes = JSON.parse(localStorage.getItem("notes")) || [];

  stack.textContent = "";

  notes.forEach((element) => {
    // div card creation
    const card = document.createElement("div");
    card.classList.add("card");
    stack.appendChild(card);

    // img creation
    const imgCard = document.createElement("img");
    imgCard.setAttribute("src", element.image);
    imgCard.classList.add("avatar");
    card.appendChild(imgCard);

    // name card creation
    const nameheading = document.createElement("h2");
    nameheading.textContent = element.fullName;
    card.appendChild(nameheading);

    // home row
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("info");
    const homeText = document.createElement("span");
    homeText.textContent = "Home";
    const homeTextContent = document.createElement("span");
    homeTextContent.textContent = element.address;

    homeDiv.appendChild(homeText);
    homeDiv.appendChild(homeTextContent);
    card.appendChild(homeDiv);

    // purpose div content
    const purposeDiv = document.createElement("div");
    purposeDiv.classList.add("info");
    const purposeText = document.createElement("span");
    purposeText.textContent = "Purpose";
    const purposeTextContent = document.createElement("span");
    purposeTextContent.textContent = element.purpose;

    purposeDiv.appendChild(purposeText);
    purposeDiv.appendChild(purposeTextContent);
    card.appendChild(purposeDiv);

    // buttons card creation
    const btnCard = document.createElement("div");
    btnCard.classList.add("buttons");
    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.textContent = "Call";
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    // delete button
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.setAttribute("data-id", element.id);
    deletebtn.classList.add("delete");

    btnCard.appendChild(callBtn);
    btnCard.appendChild(msgBtn);
    btnCard.appendChild(deletebtn);
    card.appendChild(btnCard);

    // edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit");
    editBtn.setAttribute("data-id", element.id);
    btnCard.appendChild(editBtn);
    
    // renderNotes();

    // delete feature
    stack.addEventListener("click", function (e) {
      if (e.target === deletebtn) {
        const id = Number(deletebtn.dataset.id);
        notes = notes.filter(function (note) {
          return note.id !== id;
        });

        localStorage.setItem("notes", JSON.stringify(notes));
        renderNotes();
      }

      // edit feature
      if (e.target === editBtn) {
        const editId = Number(editBtn.dataset.id);

        const editNotes = notes.find(function (note) {
          return note.id == editId;
        });
        console.log(editNotes);
        formContainer.style.display = "initial";

        imgInput.value = editNotes.image;
        nameInput.value = editNotes.fullName;
        homeInput.value = editNotes.address;
        purposeInput.value = editNotes.purpose;
        document.querySelector(`input[value="${editNotes.category}"]`).checked =
          true;
        currentEditId = editId;
      }
    });
  });
}

if (notes.length === 0) {
  stack.textContent = "No Notes Available";
  stack.style.color = "red";
  stack.style.padding = "90px";
}