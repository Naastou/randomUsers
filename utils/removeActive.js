// supprime la classe active pour chaque items

export default (items) => {
  items.btns.forEach((btn) => {
    btn.classList.remove("active");
  });
};
