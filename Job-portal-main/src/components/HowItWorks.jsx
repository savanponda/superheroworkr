import React from "react";
import { PiUserPlusDuotone } from "react-icons/pi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdZoomIn } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import "./HowItWorks.css";
import arrow1 from "../assets/arrow1.png";

const HowItWorks = () => {
  return (
    <>
      <div className="arr">
        <div className="arrow1">
          <img src={arrow1} alt="" />
        </div>
        <div className="arrow2">
          <img src={arrow1} alt="" style={{ transform: "rotateX(180deg)" }} />
        </div>
        <div className="arrow3">
          <img src={arrow1} alt="" />
        </div>
      </div>
      <div className="banner4">
        <div className="heading">
          <h2>How it works for Candidates</h2>
        </div>
        <div className="col-lg">
          <div className="col-sm-4">
            <div className="circle">
              <PiUserPlusDuotone className="user" />
            </div>
            <div className="content">
              <h1>Create account</h1>
              <p>
                Aliquam facilisis egestas sapien, nec <br />
                tempor leo tristique at.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="circle">
              <AiOutlineCloudUpload className="user" />
            </div>
            <div className="content">
              <h1>Upload Resume / CV</h1>
              <p>
                Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="circle">
              <MdZoomIn className="user" />
            </div>
            <div className="content">
              <h1>Find suitable job</h1>
              <p>
                Phasellus quis eleifend ex. Morbi nec <br />
                fringilla nibh.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="circle">
              <GoVerified className="user" />
            </div>
            <div className="content">
              <h1>Apply job</h1>
              <p>
                Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
                purus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="arr1">
        <div className="arrow1-2">
          <img src={arrow1} alt="" />
        </div>
        <div className="arrow2-2">
          <img src={arrow1} alt="" style={{ transform: "rotateX(180deg)" }} />
        </div>
        <div className="arrow3-2">
          <img src={arrow1} alt="" />
        </div>
      </div>
      <div className="banner4-2">
        <div className="heading">
          <h2>How it works for Employers</h2>
        </div>
        <div className="col-lg">
          <div className="col-sm-4">
            <div className="circle">
              <PiUserPlusDuotone className="user" />
            </div>
            <div className="content">
              <h1>Create account</h1>
              <p>
                Aliquam facilisis egestas sapien, nec <br />
                tempor leo tristique at.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="circle">
              <AiOutlineCloudUpload className="user" />
            </div>
            <div className="content">
              <h1>Find Talent</h1>
              <p>
                Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="circle">
              <MdZoomIn className="user" />
            </div>
            <div className="content">
              <h1>Select Resource</h1>
              <p>
                Phasellus quis eleifend ex. Morbi nec <br />
                fringilla nibh.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="circle">
              <GoVerified className="user" />
            </div>
            <div className="content">
              <h1>Request Tasks</h1>
              <p>
                Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
                purus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HowItWorks;
