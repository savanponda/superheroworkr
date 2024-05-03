import React from "react";
import "./RegisterJob.css";
import { FaArrowRightLong } from "react-icons/fa6";

function RegisterJob() {
  return (
    <div className="banner9">
      <div className="col-lg">
        <div className="container">
        <div className="box1">
          <div className="head">
            <h1>Hire a Candidate</h1>
          </div>
          <div className="para">
            <p>Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Cras cursus
            a dolor convallis efficitur.</p>
          </div>
          <div className="button">
            Register Now
            <FaArrowRightLong />
          </div>
        </div>
        <div className="box2">
        <div className="head">
            <h1>Hire a Candidate</h1>
          </div>
          <div className="para">
            <p>
            Cras in massa pellentesque, mollis ligula non, <br />
            luctus dui. Morbi sed efficitur dolor. Pelque <br />
            augue risus, aliqu.
            </p>
          </div>
          <div className="button">
            Register Now
            <FaArrowRightLong />
          </div>
        </div>
        </div>
      </div>
      </div>
    
  );
}

export default RegisterJob;
