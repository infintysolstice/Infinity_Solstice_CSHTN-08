import React from "react";
import "./styles/Courses.css";
function Courses() {
  const cards = [
    {
      title: "CSS",
    },
    {
      title: "HTML",
    },
    {
      title: "JAVASCRIPT",
    },
  ];

  return (
    <div>
      <div className="courses">
        <div className="courses-container">
          <div className="courses-wrapper">
            <h1>Select from a wide variety of courses</h1>
          </div>
        </div>
      </div>
      <div className="language-courses">
        {cards.map((card) => {
          return (
            <div>
              <Card card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="courses-card">
      <div className="courses-card-container">
        <div className="courses-card-wrapper">
          <h1>{card.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Courses;
