import { initNavbar } from "./navbar";

function initBlogPage(): void {
  initNavbar();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBlogPage, { once: true });
} else {
  initBlogPage();
}
