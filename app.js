
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPLEa1Od7Z3b4gVcA5hoUKNImd8DKw0kk",
    authDomain: "awesomeportfolio-6388a.firebaseapp.com",
    projectId: "awesomeportfolio-6388a",
    storageBucket: "awesomeportfolio-6388a.appspot.com",
    messagingSenderId: "79935082843",
    appId: "1:79935082843:web:ce82d45eb23ddc72390a7e",
    measurementId: "G-K9FZCK5DCN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.querySelector('.submit').addEventListener('click', function () {
    // Get the form element
    const form = document.getElementById("contactForm");

    // Get the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Add the form data to the Firebase database
    firebase.database().ref("contact").push({
        name: name,
        email: email,
        message: message
    });
});



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




