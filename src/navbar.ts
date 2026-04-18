const floatingNavMarkup = `
  <div class="floating-nav">
    <a href="/#home" class="fa fa-home" title="Home" id="link-home"></a>
    <a href="/#about" class="fa fa-user" title="About" id="link-about"></a>
    <a href="/#projects" class="fa fa-code" title="Projects" id="link-projects"></a>
    <span class="divider">|</span>
    <a href="https://www.github.com/ivpaul" class="fa fa-github" title="GitHub"></a>
    <a href="https://www.linkedin.com/in/ivpaul" class="fa fa-linkedin" title="LinkedIn"></a>
  </div>
`;

type ObservedSection = {
  id: "home" | "about" | "projects";
  linkId: "link-home" | "link-about" | "link-projects";
};

const observedSections: ObservedSection[] = [
  { id: "home", linkId: "link-home" },
  { id: "about", linkId: "link-about" },
  { id: "projects", linkId: "link-projects" },
];

function renderFloatingNav(): void {
  if (document.querySelector(".floating-nav")) {
    return;
  }

  document.body.insertAdjacentHTML("beforeend", floatingNavMarkup);
}

function clearActiveLinks(navLinks: HTMLAnchorElement[]): void {
  navLinks.forEach((link) => link.classList.remove("nav-active-link"));
}

function initSectionHighlighting(): void {
  const navLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".floating-nav a"),
  );
  const homeLink = document.getElementById("link-home");

  if (!(homeLink instanceof HTMLAnchorElement) || navLinks.length === 0) {
    return;
  }

  const availableSections = observedSections
    .map((section) => ({
      section,
      element: document.getElementById(section.id),
    }))
    .filter(
      (
        entry,
      ): entry is { section: ObservedSection; element: HTMLElement } =>
        entry.element instanceof HTMLElement,
    );

  if (availableSections.length === 0) {
    homeLink.classList.add("nav-active-link");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      let activeFound = false;

      entries.forEach((entry) => {
        const link = document.getElementById(`link-${entry.target.id}`);

        if (entry.isIntersecting && link instanceof HTMLAnchorElement) {
          clearActiveLinks(navLinks);
          link.classList.add("nav-active-link");
          activeFound = true;
        }
      });

      if (!activeFound) {
        clearActiveLinks(navLinks);
        homeLink.classList.add("nav-active-link");
      }
    },
    {
      threshold: 0.6,
    },
  );

  availableSections.forEach(({ element }) => observer.observe(element));

  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
      clearActiveLinks(navLinks);
      homeLink.classList.add("nav-active-link");
    }
  });
}

export function initNavbar(): void {
  renderFloatingNav();
  document.documentElement.style.scrollBehavior = "smooth";
  initSectionHighlighting();
}
