const aboutMarkup = `
  <div class="container">
    <div class="container-title">CURRENT</div>
    <div class="container-content">
      <ul>
        <li>
          <span class="category">Full-Time</span>
          <span class="details">Systems Architect @ DoD (TS/SCI + Full Scope Polygraph Clearance)</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="container">
    <div class="container-title">SKILLS</div>
    <div class="container-content">
      <ul>
        <li data-highlightable="true">
          <span class="category">Programming</span>
          <span class="details">Python, Java, Javascript, C, Rust</span>
        </li>
        <li data-highlightable="true">
          <span class="category">Database</span>
          <span class="details">MySQL, PostgreSQL, DynamoDB</span>
        </li>
        <li data-highlightable="true">
          <span class="category">Cloud</span>
          <span class="details">Amazon Web Services (AWS)</span>
        </li>
        <li data-highlightable="true">
          <span class="category">Operating Systems</span>
          <span class="details">Linux, Windows</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="container">
    <div class="container-title">CERTIFICATIONS</div>
    <div class="container-content">
      <ul>
        <li data-highlightable="true">
          <span class="category">Security</span>
          <span class="details">CompTIA Security+</span>
        </li>
        <li data-highlightable="true">
          <span class="category">Cloud</span>
          <div class="details-list">
            <span>AWS Solutions Architect Associate</span>
          </div>
        </li>
        <li data-highlightable="true">
          <span class="category">DevOps</span>
          <span class="details">HashiCorp Terraform Associate</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="container">
    <div class="container-title">EDUCATION</div>
    <div class="container-content">
      <ul>
        <li data-highlightable="true">
          <span class="category">Master's</span>
          <span class="details">Computer Science</span>
        </li>
        <li data-highlightable="true">
          <span class="category">Bachelor's</span>
          <span class="details">Chemistry</span>
        </li>
      </ul>
    </div>
  </div>
`;

function bindTemporaryHighlight(root: HTMLElement): void {
  const highlightableItems = root.querySelectorAll<HTMLLIElement>(
    "li[data-highlightable='true']",
  );

  highlightableItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.add("tapped");

      window.setTimeout(() => {
        item.classList.remove("tapped");
      }, 300);
    });
  });
}

export function initAboutSection(): void {
  const aboutSection = document.getElementById("about");

  if (!(aboutSection instanceof HTMLElement)) {
    return;
  }

  aboutSection.innerHTML = aboutMarkup;
  bindTemporaryHighlight(aboutSection);
}
