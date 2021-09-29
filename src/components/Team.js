import React from "react";

import "./styles/Team.css";

const Team = () => {
  return (
    <div>
      <section class="mt-5" id="tourist">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">Meet The Team</h3>
            </div>
            <div class="col-md-3">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="./assets/images/avatar-1577909_960_720.png"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Naman Dalsania
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Full-Stack Web Developer
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="./assets/images/avatar-1577909_960_720.png"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Samyak Shah
                </h4>
                <h6 class="font-weight-bold blue-text my-3">
                  Front-End Web developer
                </h6>
                <p class="font-weight-normal dark-grey-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="./assets/images/avatar-1577909_960_720.png"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">Rohit</h4>
                <h6 class="font-weight-bold blue-text my-3">Toursit</h6>
                <p class="font-weight-normal dark-grey-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="./assets/images/avatar-1577909_960_720.png"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Priya Gandhi
                </h4>
                <h6 class="font-weight-bold blue-text my-3">Tourist</h6>
                <p class="font-weight-normal dark-grey-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
