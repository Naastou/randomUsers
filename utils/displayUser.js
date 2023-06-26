import get from "./getElement.js";
import removeActive from "./removeActive.js";

const image = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");

const btns = document.querySelectorAll(".icon");

// affiche les infos de l'utilisateur
const displayUser = (person) => {
  image.src = person.image;
  title.textContent = "My name is";
  value.textContent = person.name;

  btns.forEach((btn) => {
    const label = btn.dataset.label;

    btn.classList.remove("active");
    if (label === "name") {
      btn.classList.add("active");
    }

    btn.addEventListener("click", (e) => {
      removeActive({ btns, btn });
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      e.currentTarget.classList.add("active");
    });
  });
};

export default displayUser;
