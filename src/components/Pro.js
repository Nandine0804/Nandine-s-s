import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "./pro.css";
import Technovation from "../assets/img/technovation.png";
import Skill from "../assets/img/project-2.png";
function Pro() {
  return (
    <div className="project-section">
      <div className="projects" id="projects">
        <div className="project-heading">
          <h2>MY PROJECTS</h2>
          <span className="project-line"></span>
        </div>
      </div>
      <div className="projects-cards">
        <section class="dark">
          <article className="postcard dark blue">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src="https://picsum.photos/1000/1000"
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title blue">
                <a href="#">PROJECT NO 1</a>
              </h1>
              <div className="postcard__subtitle small">
                <p>CHAT APPLICATION USING REACTJS WITH FIREBASE</p>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, fugiat asperiores inventore beatae accusamus odit
                minima enim, commodi quia, doloribus eius! Ducimus nemo
                accusantium maiores velit corrupti tempora reiciendis molestiae
                repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt
                neque nulla unde ipsum dolores nobis enim quidem excepturi,
                illum quos!
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    Demo Link
                  </Button>
                </li>
                <li class="tag__item">
                  <Button variant="dark" className="project-button">
                    Github Link
                  </Button>
                </li>
              </ul>
            </div>
          </article>
          <article class="postcard dark red">
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src={Technovation}
                alt="Image Title"
              />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">PROJECT NO 2</a>
              </h1>
              <div className="postcard__subtitle small">
                <p>MY DEPARTMENT SYPOSIUM WEBSITE - CSBS </p>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                My contribution to the department symposium was significant. The
                SEE IT BUILT IT event I organized was based on assessing web
                development abilities.
                <br />
                <strong>Lang Used : HTML CSS JS</strong>
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    <a
                      href="https://rajalakshmi.org/technovation/"
                      target="_blank"
                    >
                      DEMO LINK
                    </a>
                  </Button>
                </li>
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    <a
                      href="https://github.com/Nandine0804/Technovation_2.0"
                      target="_blank"
                    >
                      {" "}
                      GITHUB LINK
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </article>
          <article class="postcard dark red">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={Skill} alt="Image Title" />
            </a>
            <div className="postcard__text">
              <h1 className="postcard__title red">
                <a href="#">PROJECT NO 3</a>
              </h1>
              <div className="postcard__subtitle small">
                <p>SKILL BREWERY - CODEVITA LIVE WEBSITE RECREATION</p>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                <p>
                  This project was created for the OutOfContext Web Hackathon
                  competition. In my creation, I have included the same
                  functionality and characteristics. Skill Brewery is an
                  internship program provided by CodeVita Live.
                  LANG USED : REACTJS,BOOSTRAP AND FIREBASE
                </p>
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    <a href="https://nandine0804.github.io/OutofContext/">
                      DEMO LINK
                    </a>
                  </Button>
                </li>
                <li className="tag__item">
                  <Button variant="dark" className="project-button">
                    <a href="https://github.com/Nandine0804/OutofContext">
                      GITHUB LINK
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </article>
          <h2 className="more__projects">
            <center>More yet to come....</center>
          </h2>
        </section>
      </div>
    </div>
  );
}

export default Pro;
