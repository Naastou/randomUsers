import get from "./utils/getElement.js";
import fetchUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = get(".btn");

const showUser = async () => {
  // récupére l'utilisateur depuis l'api
  fetchUser().then((data) => console.log(data));
  const person = await fetchUser();
  // console.log(person);
  // affiche l'utilisateur
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
