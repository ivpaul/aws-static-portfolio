// projects.js
document.addEventListener("DOMContentLoaded", function () {
  const projectsHTML = `
    <div class="projects-container">
      <h2 class="title">PROJECTS</h2>
      <div class="project-list">

        <a href="https://github.com/ivpaul/home-library" class="project-link">
          <div class="project-item">
            <h2>→ Digitized Home Library</h2>
            <p>Building this project to gain more exposure to AWS services -- specifically the Command-Line-Interface (CLI), Cognito, API Gateway, and Virtual
            Private Cloud (VPC) -- and continue practicing cloud development best practices. This library app is incomplete; my next steps are to incorporate 
            terraform to handle infrastructure and automation to upload all of my books to the app.</p>
            <p class="technologies">Technologies: Cognito, IAM, S3, Lambda, API Gateway, DynamoDB, VPC</p>
          </div>
        </a>

        <a href="https://github.com/ivpaul/aws-static-portfolio" class="project-link">
          <div class="project-item">
            <h2>→ Severless Static Website</h2>
            <p>Building and maintaining my portfolio (ivanpaul.dev) in AWS to learn cloud development best practices.</p>
            <p class="technologies">Technologies: IAM, S3, DynamoDB, Lambda, Route53, CloudFront, SES</p>
          </div>
        </a>

        <a href="https://github.com/ivpaul/CIS550-Fall24-Project" class="project-link">
          <div class="project-item">
            <h2>→ Hospify</h2>
            <p>Final project for my database management class. I learned concepts related to database optimization, querying, and full-stack development.</p>
            <p class="technologies">Technologies: React.js, Node.js, SQL, AWS RDS</p>
          </div>
        </a>

        <a href="https://github.com/ivpaul/Airbnb_Predictive_Modeling" class="project-link">
          <div class="project-item">
            <h2>→ New York Airbnb Property Analysis</h2>
            <p>Final project for my big data analytics class. Utilized Python and regression models to predict prices for AirBnBs in NYC.</p>
            <p class="technologies">Technologies: Python, AWS, Machine Learning</p>
          </div>
        </a>

        <a href="https://github.com/ivpaul/Pacers_Streamlit" class="project-link">
          <div class="project-item">
            <h2>→ pacers.streamlit.io</h2>
            <p>Business intelligence application that helped communicate KPIs between retail store leadership and employees. Boosted productivity and sales metrics consistency by 5–10%.</p>
            <p class="technologies">Technologies: Python, StreamLit</p>
          </div>
        </a>

      </div>
    </div>
  `;

  document.getElementById("projects").innerHTML = projectsHTML;
});