const users = [
    {
        name: "Fatima",
        pic: "https://i.pinimg.com/736x/d2/77/c0/d277c0caa12423a447a0aa84325fb831.jpg",
        bio: "Silent chaos in a loud world | not for everyone",
    },
    {
        name: "Fatima mehta",
        pic: "https://i.pinimg.com/736x/5d/22/4c/5d224c2ed31b0443fba4e98520b77b5e.jpg",
        bio: "Main character energy | Coffee > everything",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/e6/50/7f/e6507fd9d78e676ef3abaf11de34ab33.jpg",
        bio: "Walking through dreams in doc martens | late night thinker",
    },
    {
        name: "ojin oklawa",
        pic: "https://i.pinimg.com/736x/6d/a9/af/6da9af5599a3743f1cdfd19338b5f6b7.jpg",
        bio: "too glam to give a damn | filter free soul.",
    },
    {
        name: "tanay rawat",
        pic: "https://i.pinimg.com/1200x/26/2e/4c/262e4c4cbe4b294fc45ba7e24723ed61.jpg",
        bio: "don't text, just vibe | soft heart, sharp mind",
    },
    {
        name: "mohit chabbra",
        pic: "https://i.pinimg.com/736x/09/6f/08/096f086caa18534925de966352e9122b.jpg",
        bio: "aesthetics overload | living in lowercase",
    },
];

const cards = document.querySelector(".cards");
const inp = document.querySelector(".inp");

// 🔹 render function
function showUsers(arr) {
    cards.innerHTML = "";

    if (arr.length === 0) {
        cards.innerHTML = "<p style='color:white;'>No users found</p>";
        return;
    }

    const fragment = document.createDocumentFragment();

    arr.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;

        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        fragment.appendChild(card);
    });

    cards.appendChild(fragment);
}

// initial render
showUsers(users);

// 🔹 debounce logic
let timeout;

inp.addEventListener("input", function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        const search = inp.value.toLowerCase().trim();

        const filtered = users.filter(
            (user) =>
                user.name.toLowerCase().includes(search) ||
                user.bio.toLowerCase().includes(search),
        );

        showUsers(filtered);
    }, 300); 2
});
