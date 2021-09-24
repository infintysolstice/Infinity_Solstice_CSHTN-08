<<<<<<< HEAD
import React from 'react';

const Home = () => {
    return (
        <div>
            Home Page
        </div>
    )
}

=======
import React from "react";
import "./styles/home.css";

function Home() {
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
          </div>
          <div className="homepage-image">
            <img src="./assets/images/documentation.jpg" />
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
          <div className="featured-heading">
            <h1>Featured</h1>
          </div>
          <div className="featured-content">{featuredCard()}</div>
        </div>
      </div>
    </div>
  );
}

function featuredCard() {
  return (
    <div className="featured-cards">
      <div className="featured-card">
        <div className="card-container author">
          <div className="card-wrapper">
            <div className="card-image">
              <img src="../assets/images/man.png" />
            </div>
            <div className="card-title">
              <h1>Ramlal Yadav</h1>
            </div>
          </div>
        </div>
        <h1>Featured Author</h1>
      </div>
      <div className="featured-card">
        <div className="card-container package">
          <div className="card-wrapper">
            <div className="card-title">
              <h1>Html + Css + AngularJs</h1>
            </div>
          </div>
        </div>
        <h1>Featured Package</h1>
      </div>
      <div className="featured-card">
        <div className="card-container learn-now">
          <div className="card-wrapper">
            <div className="card-title">
              <h1>Learn Js Now</h1>
            </div>
          </div>
        </div>
        <h1>Fast Learning</h1>
      </div>
    </div>
  );
}
>>>>>>> faca7ff5cd9dac1a6b1d5ebbeb911f90fd47a57b
export default Home;
