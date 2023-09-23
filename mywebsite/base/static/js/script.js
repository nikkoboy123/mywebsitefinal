function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  } 
  function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    // Toggle the 'active' class on click
    hamburgerIcon.classList.toggle('active');
    menuLinks.classList.toggle('active');
  }
  const text = "Nickpacs"; // The text you want to type

function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML =
      text.substring(0, i + 1) + '<span class="cursor">|</span>';
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 100); // Adjust typing speed here
  } else if (typeof fnCallback === "function") {
    setTimeout(fnCallback, 1000); // Delay before starting cursor blinking
  }
}

// Start the typing animation on page load
window.onload = function () {
  typeWriter(text, 0, function () {
    // Callback (called after typing is complete)
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.display = "none"; // Hide the cursor after typing
    }
  });
};