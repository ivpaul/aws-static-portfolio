import { initContactForm } from "./contact-form";
import { initNavbar } from "./navbar";

function initContactPage(): void {
  initNavbar();
  initContactForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactPage, { once: true });
} else {
  initContactPage();
}
