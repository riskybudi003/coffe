// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger mnu di click

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click dluar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.terget)) {
    navbarNav.classList.remove("active");
  }
});
