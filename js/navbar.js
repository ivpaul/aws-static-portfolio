document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <div class="floating-nav">
      <a href="/" class="fa fa-home" title="Home"></a>
      <a href="/#about-container" class="fa fa-user" title="About"></a>
      <a href="/#projects-container" class="fa fa-code" title="Projects"></a>
      <span class="divider">|</span>
      <a href="/contact.html" class="fa fa-envelope" title="Contact"></a>
      <a href="https://www.github.com/ivpaul" class="fa fa-github" title="GitHub"></a>
      <a href="https://www.linkedin.com/in/ivpaul" class="fa fa-linkedin" title="LinkedIn"></a>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", navHTML);
});