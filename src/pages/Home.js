import React from "react";
import "./styles/home.css";
import { Button } from "@mui/material";

function Home() {
  const featured = [
    {
      title: "Featured Author",
      type: "author",
      name: "Ramlal Yadav",
      image: "./assets/images/author2.png",
      description:
        "Check out the videos of this experienced and very profound programmer and learn on the way",
    },

    {
      title: "Featured Package",
      type: "package",
      name: "Full Stack Web Dev Course",
      image: "./assets/images/package.png",
      description:
        "Take this course and go through basic trainings in learning full stack web development",
    },
    {
      title: "Quizes and Assignments",
      type: "quiz",
      name: "Quick Quiz",
      image: "./assets/images/quiz.png",
      description: "Test your skills and knowledge by taking this short quiz",
    },
  ];

  return (
    <div>
      <div className="homepage">
        <div className="homepage-info-container">
          <div className="homepage-text">
            <h1>Welcome,</h1>
            <p>
              We at Infinity Solstice are very excited to bring to the society,
              this platform of E-learning where students, teachers and keen
              learners can grasp knowledge and practice from this forever
              increasing database in the fields of Computers
            </p>
            <div className="check-more-button">
              <a className="btn btn-outline-primary" href="/courses">
                Check more
              </a>
            </div>
          </div>
          <div className="homepage-image">
            <img src="./assets/images/online-teaching.png" />
          </div>
        </div>
        <div className="homepage-details-container">
          <h1>Study</h1>
          <h1>Innovate</h1>
          <h1>Evolve</h1>
        </div>
      </div>
      <div className="featured">
        <div className="featured-container">
          <div className="featured-heading"></div>
          <div className="featured-content">
            <div className="featured-cards">
              {featured.map((card) => {
                return (
                  <div>
                    <FeaturedCard card={card} />
                  </div>
                );
              })}
              <div className="code-editors">
                <div className="code-editor">
                  <div className=" editor-image">
                    <img src="./assets/images/Monaco_Code_Editor.png" />
                  </div>
                  <div className="editor-text">
                    <div className="editor-heading">
                      <h1>Code Editor</h1>
                    </div>
                    <div className="editor-description">
                      <p>
                        Try your programming skills with this free code editor
                      </p>
                    </div>
                  </div>
                  <div className="to-editor">
                    <a className="btn btn-outline-primary" href="/codeeditor">
                      Code Editor
                    </a>
                  </div>
                </div>
                <div className="code-editor">
                  <div className=" editor-image">
                    <img src="./assets/images/W3schools_Code_Editor.png" />
                  </div>
                  <div className="editor-text">
                    <div className="editor-heading">
                      <h1>Third Party Code Editor</h1>
                    </div>
                    <div className="editor-description">
                      <p>
                        Try your programming skills with this third party code
                        editor and compiler.
                      </p>
                    </div>
                  </div>
                  <div className="to-editor">
                    <a
                      className="btn btn-outline-primary"
                      href="https://www.w3schools.com/tryit/"
                    >
                      Code Editor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({ card }) {
  return (
    <div className="featured-card">
      <div className="card-container">
        <div className={`featured-card-header ${card.type}`}>
          <h1>{card.title}</h1>
        </div>
        <div className="card-wrapper">
          <div className={`card-title ${card.type}-title`}>
            <h1>{card.name}</h1>
          </div>
          <div className={`card-description ${card.type}-description`}>
            <h1>{card.description}</h1>
          </div>
          <a className={`btn explore checkout-${card.type}`}>Checkout</a>
          <div className="card-image">
            <img src={card.image} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
