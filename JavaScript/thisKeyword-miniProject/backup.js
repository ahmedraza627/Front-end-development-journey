let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      username: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      // Image
      const img = document.createElement("img");
      img.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      // Name
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-blue-700";
      name.textContent = user.username;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      // Finally, append the card wherever needed, for example:

      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function () {},
};

userManager.init();

// global variable declarations
// Global Variable Declaration..
let users = [];
const form = document.querySelector("form");
const userName = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");
const usersContainer = document.querySelector(".users");
let currentEditId = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (currentEditId) {
    users = users.map(function (user) {
      if (currentEditId == user.id)
        return {
          id: currentEditId,
          fullName: userName.value,
          role: role.value,
          bio: bio.value,
          photo: photo.value,
        };
      else {
        return user;
      }
    });
    currentEditId = null;
    saveToLocalStorage();
      renderCards();
  } else {
    const user = {
      id: Date.now(),
      fullName: userName.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    };
    users.push(user);
    saveToLocalStorage();
  }
  form.reset();
  renderCards();
});

function renderCards() {
  document.querySelector(".users").innerHTML = "";
  users.forEach(function (user) {
    const card = document.createElement("div");
    card.className =
      "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

    // Image
    const img = document.createElement("img");
    img.className =
      "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
    img.src = user.photo;
    img.alt = "User Photo";
    card.appendChild(img);

    // Name
    const name = document.createElement("h2");
    name.className = "text-2xl font-bold mb-1 text-blue-700";
    name.textContent = user.fullName;
    card.appendChild(name);

    // Role
    const role = document.createElement("p");
    role.className = "text-purple-500 mb-2 font-medium";
    role.textContent = user.role;
    card.appendChild(role);

    // Description
    const desc = document.createElement("p");
    desc.className = "text-gray-700 text-center";
    desc.textContent = user.bio;
    card.appendChild(desc);

    // delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("data-id", user.id);
    deleteBtn.textContent = "Delete";
    card.appendChild(deleteBtn);

    // edit btn
    const editBtn = document.createElement("button");
    editBtn.setAttribute("data-id", user.id);
    editBtn.textContent = "Edit";
    card.appendChild(editBtn);

    // Finally, append the card wherever needed, for example:

    document.querySelector(".users").appendChild(card);
  });
}

usersContainer.addEventListener("click", function (e) {
  const id = Number(e.target.dataset.id);
  // Delete Feature
  if (e.target.textContent.trim() === "Delete") {
    users = users.filter(function (user) {
      return user.id !== id;
    });

    saveToLocalStorage();
    renderCards();
  }

  // edit feature..

  if (e.target.textContent.trim() === "Edit") {
    const editUser = users.find(function (user) {
      return user.id == id;
    });

    userName.value = editUser.fullName;
    bio.value = editUser.bio;
    role.value = editUser.role;
    photo.value = editUser.photo;

    currentEditId = editUser.id;
  }
});

function saveToLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}
const savedUsers = JSON.parse(localStorage.getItem("users"));

if (savedUsers) {
  users = savedUsers
  renderCards();
}
