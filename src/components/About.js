import React from "react";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-heading">
        <h1 className="about-me">About me</h1>
        <span className="about-line"></span>
      </div>
      <div className="about-section">
        <p>
          Enthusiastic and detail-oriented Software Engineer with a B.Tech in Computer Science and Business Systems (GPA: 8.79) from Rajalakshmi Engineering College. 
          Skilled in full-stack development, cloud computing, and Salesforce development with hands-on experience from internships at TCS and SmartInternz.
          Proficient in Java, Python, C++, React, Spring Boot, and experienced with cloud platforms like AWS, Azure, and Salesforce.
        </p>
        <p>
          Demonstrated strengths in designing scalable applications, automating workflows, and optimizing data pipelines. Adept at collaborating in Agile teams, leading UI/UX design initiatives, and delivering real-world solutions through projects and hackathons.

Now seeking a full-time opportunity to contribute technical expertise and drive innovation in a dynamic engineering team.
        </p>
      </div>
      <div className="about-connect">
        <button className="about-connect-button">
          <a
            href="https://drive.google.com/file/d/1x1gEg4FRI1t6_882jOqnrCAZOkm3V--O/view?usp=sharing"
            target="_blank"
            title="Nandine S S"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
