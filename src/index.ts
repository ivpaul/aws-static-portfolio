import { initAboutSection } from "./about";
import { initNavbar } from "./navbar";
import { initProjectsSection } from "./projects";

function initHomePage(): void {
  initNavbar();
  initAboutSection();
  initProjectsSection();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHomePage, { once: true });
} else {
  initHomePage();
}
