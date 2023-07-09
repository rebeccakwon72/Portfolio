const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.content_container');
hiddenElements.forEach((el) => observer.observe(el));

document.getElementById("contactForm").addEventListener("submit", function(event) {
    if (!isValid) {
      event.preventDefault();
    }
  });