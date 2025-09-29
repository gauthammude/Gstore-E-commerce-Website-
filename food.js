document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.style.display = (hamburgerMenu.style.display === "block") ? "none" : "block";
  });

  // Optional: close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburgerIcon.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      hamburgerMenu.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const hamburgerMenu = document.getElementById("hamburger-menu");

  hamburgerIcon.addEventListener("click", () => {
    hamburgerMenu.style.display = (hamburgerMenu.style.display === "block") ? "none" : "block";
  });

  // Optional: close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburgerIcon.contains(event.target) && !hamburgerMenu.contains(event.target)) {
      hamburgerMenu.style.display = "none";
    }
  });
});
document.querySelector(".backto-top").addEventListener("click",function(){
  window.location.href="food.html"
});