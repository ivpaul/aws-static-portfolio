// projects.js
document.addEventListener("DOMContentLoaded", function () {
  const projectsHTML = `
    <div class="projects-container">
      <h2 class="title">PROJECTS</h2>
      <div class="project-list">

        <a href="" class="project-link">
          <div class="project-item">
            <h2>→ Severless Static Website</h2>
            <p>Building and maintaining my portfolio (ivanpaul.dev) in AWS to learn cloud computing best practices.</p>
            <p class="technologies">Technologies: IAM, S3, DynamoDB, Lambda, Route53, CloudFront, SES</p>
          </div>
        </a>

        <a href="" class="project-link">
          <div class="project-item">
            <h2>→ Hospify</h2>
            <p>Final project for my database management class. I learned concepts related to database optimization, querying, and full-stack development.</p>
            <p class="technologies">Technologies: HTML, CSS, React.js, Node.js, SQL, AWS RDS</p>
          </div>
        </a>

        <a href="" class="project-link">
          <div class="project-item">
            <h2>→ New York Airbnb Property Analysis</h2>
            <p>Final project for my big data analytics class. Utilized Python and regression models to predict prices for AirBnBs in NYC.</p>
            <p class="technologies">Technologies: Python, AWS, Machine Learning</p>
          </div>
        </a>

        <a href="" class="project-link">
          <div class="project-item">
            <h2>→ pacers.streamlit.io</h2>
            <p>Business intelligence application that helped communicate KPIs between retail store leadership and employees. Boosted productivity and sales metrics consistency by 5–10%.</p>
            <p class="technologies">Technologies: Python, StreamLit</p>
          </div>
        </a>

      </div>
    </div>
  `;

  document.getElementById("projects-container").innerHTML = projectsHTML;
});