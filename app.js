
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

// scroll to top functionality
const scrollUpButton = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) { /* Show the button when the user has scrolled down 500 pixels */
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
});

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

//validation
function validateForm() {
    const fnameInput = document.querySelector('input[name="fname"]');
    const emailInput = document.querySelector('input[type="email"]');
  
    // Validate First Name
    if (fnameInput.value.trim() === '') {
      document.getElementById('nameError').textContent = 'Please enter your first name.';
      return false;
    } else {
      document.getElementById('nameError').textContent = '';
    }
  
    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      return false;
    } else {
      document.getElementById('emailError').textContent = '';
    }
  
    // All fields are valid
    return true;
  }



