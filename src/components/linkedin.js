import React from "react";
const NewComponent = () => {
  return (
    <div className="linkedin">
      <div className="linkedin-heading">
        <h1 className="about-me">My Linkedin feed</h1>
        <span className="linkedin-line"></span>
        <h2 className="linkedin-text">
          The best place to show our skills is LinkedIn
        </h2>
      </div>
      <div className="linkedin-feed">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7162487457991647232"
          height="500"
          width="450"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7160686074044817408"
          height="500"
          width="450"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7158143885607665664"
          height="500"
          width="450"
          frameborder="0"
          allowfullscreen=""
          title="Embedded post"
        ></iframe>
      </div>
      <div className="linkedin-button">
        <button className="linkedin-connect-button">
          <a href="https://www.linkedin.com/in/nandine/">Show More</a>
        </button>
      </div>
    </div>
  );
};

export default NewComponent;
