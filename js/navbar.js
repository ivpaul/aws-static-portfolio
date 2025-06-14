document.addEventListener("DOMContentLoaded", function () {
  // Inject floating nav
  const navHTML = `
    <div class="floating-nav">
      <a href="/#home" class="fa fa-home" title="Home" id="link-home"></a>
      <a href="/#about" class="fa fa-user" title="About" id="link-about"></a>
      <a href="/#projects" class="fa fa-code" title="Projects" id="link-projects"></a>
      <span class="divider">|</span>
      <a href="/contact.html" class="fa fa-envelope" title="Contact"></a>
      <a href="https://www.github.com/ivpaul" class="fa fa-github" title="GitHub"></a>
      <a href="https://www.linkedin.com/in/ivpaul" class="fa fa-linkedin" title="LinkedIn"></a>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", navHTML);

  // Enable smooth scroll
  document.documentElement.style.scrollBehavior = "smooth";

  const navLinks = document.querySelectorAll(".floating-nav a");
  const homeLink = document.getElementById("link-home");

  // Add scroll observer
  const sections = [
  { id: "home", linkId: "link-home" },
  { id: "about", linkId: "link-about" },
  { id: "projects", linkId: "link-projects" },
];

  const observer = new IntersectionObserver(
    entries => {
      let activeFound = false;

      entries.forEach(entry => {
        const link = document.getElementById(`link-${entry.target.id}`);
        if (entry.isIntersecting && link) {
          navLinks.forEach(l => l.classList.remove("nav-active-link"));
          link.classList.add("nav-active-link");
          activeFound = true;
        }
      });

      // If no section is intersecting, we're at the top — highlight Home
      if (!activeFound) {
        navLinks.forEach(l => l.classList.remove("nav-active-link"));
        homeLink.classList.add("nav-active-link");
      }
    },
    {
      threshold: 0.6,
    }
  );

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });

  // Also detect scroll near top to activate Home
  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
      navLinks.forEach(l => l.classList.remove("nav-active-link"));
      homeLink.classList.add("nav-active-link");
    }
  });
});