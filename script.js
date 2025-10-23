window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.style.background = window.scrollY > 50 ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0.7)";
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

const fadeEls = document.querySelectorAll(".menu-card, .section-title, form");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("fade-in");
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));
