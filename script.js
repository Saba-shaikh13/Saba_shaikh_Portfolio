
window.addEventListener("scroll", function() {
  const skills = document.querySelectorAll(".skill-fill");
  const triggerBottom = window.innerHeight * 0.85;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      skill.style.width = skill.style.getPropertyValue("--width");
    }
  });
});


  const fadeElements = document.querySelectorAll("[data-aos]");
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease";
  });

  window.addEventListener("scroll", () => {
    fadeElements.forEach(el => {
      const pos = el.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        el.style.opacity = 1;
      }
    });
  });


// Contact form popup
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent successfully!');
  e.target.reset();
});