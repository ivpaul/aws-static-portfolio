document.addEventListener("DOMContentLoaded", function () {
  const aboutHTML = `
    <!-- CURRENT Section -->
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

    <!-- SKILLS Section -->
    <div class="container">
        <div class="container-title">SKILLS</div>
        <div class="container-content">
            <ul>
                <li onclick="highlightTemporary(this)"><span class="category">Programming</span>
                    <span class="details">Python, Java, Javascript, C, Rust</span></li>
                <li onclick="highlightTemporary(this)"><span class="category">Database</span>
                    <span class="details">MySQL, PostgreSQL, DynamoDB</span></li>
                <li onclick="highlightTemporary(this)"><span class="category">Cloud</span>
                    <span class="details">Amazon Web Services (AWS)</span></li>
                <li onclick="highlightTemporary(this)"><span class="category">Operating Systems</span>
                    <span class="details">Linux, Windows</span></li>
            </ul>
        </div>
    </div>

    <!-- CERTIFICATIONS Section -->
    <div class="container">
        <div class="container-title">CERTIFICATIONS</div>
        <div class="container-content">
            <ul>
                <li onclick="highlightTemporary(this)">
                    <span class="category">Security</span>
                    <span class="details">CompTIA Security+</span>
                </li>
                <!-- <li onclick="highlightTemporary(this)">
                    <span class="category">Networking</span>
                    <span class="details">CompTIA Network+</span>
                </li> -->
                <li onclick="highlightTemporary(this)">
                    <span class="category">Cloud</span>
                    <div class="details-list">
                        <span>AWS Solutions Architect Associate (in-progress)</span>
                        <!-- <span>AWS Security Specialty</span> -->
                      </div>
                </li>
    
            </ul>
        </div>
    </div>

    <!-- EDUCATION Section -->
    <div class="container">
        <div class="container-title">EDUCATION</div>
        <div class="container-content">
            <ul>
                <li onclick="highlightTemporary(this)">
                    <span class="category">Master's</span>
                    <span class="details">Computer and Information Technology</span>
                  </li>
                  <li onclick="highlightTemporary(this)">
                    <span class="category">Bachelor's</span>
                    <span class="details">Chemistry</span>
                  </li>
            </ul>
        </div>
    </div>
    
  `;
  document.getElementById("about").innerHTML = aboutHTML;
});
