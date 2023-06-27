// SHOW CATEGORIES PET CARD

window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;

  if (scroll > 350) {
    let gbCategories = document.querySelectorAll(".gbCategories");

    for (let gbCategorie of gbCategories) {
      gbCategorie.classList.add("show");
    }
  }

  if (scroll > 1000) {
    let serviceCards = document.querySelectorAll(".serviceCard");

    for (let serviceCard of serviceCards) {
      serviceCard.classList.add("show");
    }
  }
});
