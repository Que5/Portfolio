
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
  if (window.scrollY > 500) { /* Show the button when the user has scrolled down 500 pixels */
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

function submitForm() {
  // Validate function should be added here
  function validateForm() {
    var name = document.getElementsByName('fname')[0].value;
    var email = document.getElementsByClassName('rectangle-25')[0].value;
    var message = document.getElementsByClassName('rectangle-27')[0].value;
    var captcha = grecaptcha.getResponse();

    // Example validation: check if name, email, and message are not empty
    if (name === '' || email === '' || message === '') {
      // Display an error message or perform any other necessary actions
      // For example, updating the error message elements
      document.getElementById('nameError').textContent = name === '' ? 'Please enter your name' : '';
      document.getElementById('emailError').textContent = email === '' ? 'Please enter your email' : '';
      return false; // Prevent form submission
    }

    // Additional validation logic can be added here

    return true; // Allow form submission
  }

  // Get form values
  var name = document.getElementsByName('fname')[0].value;
  var email = document.getElementsByClassName('rectangle-25')[0].value;
  var message = document.getElementsByClassName('rectangle-27')[0].value;

  // Set up template parameters
  var templateParams = {
    from_name: name,
    from_email: email,
    message: message
  };

  // Send the email using EmailJS
  emailjs.send('service_x3b2pwi', 'template_u6s7cgh', templateParams)
    .then(function (response) {
      console.log('Email successfully sent!', response.status, response.text);
      // Add any success message or redirect logic here
    }, function (error) {
      console.error('Email sending failed:', error);
      // Add any error handling logic here
    });
}







