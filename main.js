"use strict";

const footerLinks = document.querySelectorAll(".footerLinks a");
const navbar = document.querySelector(".navbar");
const navbarBrand = document.querySelector(".navbar-brand");
const navbarToggler = document.querySelector(".navbar-toggler");
const menuLinks = document.querySelectorAll(".menuLinks");

const modalTitle = document.getElementById("exampleModalLongTitle");

footerLinks.forEach((link) =>
  link.addEventListener("click", () => {
    modalTitle.innerHTML = link.innerHTML;
  })
);

window.addEventListener("scroll", () => {
  if (window.scrollY !== 0) {
    navbar.style.backgroundColor = "white";
    navbarBrand.style.color = "black";

    navbarToggler.style.color = "black";
    menuLinks.forEach((item) => {
      item.classList.remove("menuLinks");
      item.classList.add("hovered");
    });
  } else {
    navbar.style.backgroundColor = "transparent";
    navbarBrand.style.color = "#fdcc52";
    navbarToggler.style.color = "grey";

    menuLinks.forEach((item) => {
      item.classList.add("menuLinks");
      item.classList.remove("hovered");
    });
  }
});
