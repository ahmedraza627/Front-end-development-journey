// global variable declarations..
const form = document.querySelector("form");
const userName = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");
const usersContainer = document.querySelector(".users");

const userManager = {
  users: [],
  currentEditId: null,
  init: function () {
    form.addEventListener("submit", this.handleSubmit.bind(this));
    usersContainer.addEventListener("click", this.handleClick.bind(this));
    this.pageReload();
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.storeData();
  },

  storeData: function () {
    if (this.currentEditId) {
      this.users = this.users.map((user) => {
        if (this.currentEditId == user.id)
          return {
            id: this.currentEditId,
            fullName: userName.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
          };
        else {
          return user;
        }
      });
      this.currentEditId = null;
      this.saveToLocalStorage();
      this.renderCards();
    } else {
      const user = {
        id: Date.now(),
        fullName: userName.value,
        role: role.value,
        bio: bio.value,
        photo: photo.value,
      };
      this.users.push(user);
      this.saveToLocalStorage();
    }
    form.reset();
    this.renderCards();
  },

  renderCards: function () {
    usersContainer.innerHTML = "";
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
      usersContainer.appendChild(card);
    });
  },

  handleClick: function (e) {
    const id = Number(e.target.dataset.id);
    // Delete feature
    if (e.target.textContent.trim() === "Delete") {
      this.users = this.users.filter(function (user) {
        return user.id !== id;
      });

      this.saveToLocalStorage();
      this.renderCards
    }

    // edit feature..

    if (e.target.textContent.trim() === "Edit") {
      const editUser = this.users.find(function (user) {
        return user.id == id;
      });

      userName.value = editUser.fullName;
      bio.value = editUser.bio;
      role.value = editUser.role;
      photo.value = editUser.photo;

      this.currentEditId = editUser.id;
    }
  },
  saveToLocalStorage: function () {
    localStorage.setItem("users", JSON.stringify(this.users));
  },
  pageReload: function () {
    const savedUsers = JSON.parse(localStorage.getItem("users"));

    if (savedUsers) {
      this.users = savedUsers;
      this.renderCards();
    }
  },
};
userManager.init();