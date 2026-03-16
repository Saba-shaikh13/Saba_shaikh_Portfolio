document.addEventListener("DOMContentLoaded", function () {

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});

});

// Contact form message
document.getElementById('contactForm').addEventListener('submit', function(e){

e.preventDefault();

alert('Message sent successfully!');

this.reset();

});

});
