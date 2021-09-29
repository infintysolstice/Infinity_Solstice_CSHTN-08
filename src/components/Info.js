import React from "react";

import "./styles/Info.css";

const Info = () => {
  return (
    <section className="about">
      <div className="image">
        <img src="./assets/images/about.svg" alt="" />
      </div>

      <div className="content">
        <h3>Why choose us?</h3>
        <p>
          We are growing quickly and are always looking forward to a young
          educated society skilled at everything. We have developed this website
          with a futuristic UI to please the user and have an impact on the
          changing times of frontend
        </p>
      </div>
    </section>
  );
};

export default Info;
