import React from "react";
import "./OnDemandTeams.css";
import image3 from "./images/image3.png";
import aim from "../assets/aim.svg";
import timer from "../assets/Timer.svg";
import eye from "../assets/Eye.svg";

function OnDemandTeams() {
  return (
    <div className="banner8">
      <div className="col-lg">
        <div className="container">
          <video src="https://www.youtube.com/watch?v=kkIKk_v7IM4">

          </video>
          <div className="caption">
            <div className="head">
           <h1> On Demand Teams</h1>
            </div>
              <div className="para">
                With one million individuals rigorously assessed for technical
                skills, <br />
                language mastery, and strong communication, we have a
                <br />goldmine waiting to be tapped. 
                <br /><br />Let's leverage this exceptional
                resource and find the perfect fit for <br />your needs.
                resource and find the perfect fit for <br />your needs.
              </div>
            
          </div>
        </div>
      </div>



      <div className="col-lg1">
        <div className="content2">
          <div className="right4">
            <img src={image3} alt="" />
          </div>
          <div className="left4">
            <div className="wwd">
              <h1>What makes us unique?</h1>
              <p>
                Our streamlined process ensures you find the right people with
                the exact skills to take your projects to the next level.{" "}
              </p>
              <br />
              <h4>Ready to Assemble Your Dream Team? </h4>
              <br />
            </div>
            <div className="diverse-expertise">
              <div>
                <img src={aim} alt="" srcset="" />
              </div>
              <div>
                <h1>Diverse Expertise</h1>
                <p>
                  Our powerful platform matches specific needs with the most
                  qualified candidates, ensuring a long term growth of your
                  project.
                </p>
              </div>
            </div>

            <div className="regional-timeshift">
              <div>
                <img src={timer} alt="" srcset="" />
              </div>
              <div>
                <h1>Regional-Timeshift</h1>
                <p>
                  Our powerful platform matches specific needs with the most
                  qualified candidates, ensuring a long term growth of your
                  project.
                </p>
              </div>
            </div>

            <div className="cutting-edge">
              <div>
                <img src={eye} alt="" srcset="" />
              </div>
              <div>
                <h1>Cutting Edge Technology</h1>
                <p>
                  Our powerful platform matches specific needs with the most
                  qualified candidates, ensuring a long term growth of your
                  project.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default OnDemandTeams;
