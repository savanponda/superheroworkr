import React from "react";
import "./TopCompnies.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import job1 from "../assets/job1.png";

import job8 from "../assets/job8.png";
import job9 from "../assets/job9.png";

function TopCompnies() {
  return (
    <div className="banner6">
      <div className="top-compnies">
        <div className="nav">
          <div className="head">
            <h1>Top Compnies</h1>
          </div>
          <div className="button1">
            <button>
              <FaArrowLeftLong />
            </button>
            <button>
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="card banner-card2">
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job1} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                    <p>Featured</p>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job1} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job8} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job9} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
        </div>



        {/* 2rd Row */}
        <div className="card banner-card2">
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job1} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                    <p>Featured</p>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job1} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job8} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
          <div className="card card-side1 ">
            <div className="card">
              <div className="compnies">
                <div className="icon">
                  <img src={job9} alt="" srcset="" />
                </div>
                <div className="details">
                  <div className="head">
                    <h1>Dribble</h1>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                  </div>
                </div>
              </div>
              <button>Open Position</button>
            </div>
          </div>
        </div>


        {/* 3rd Row */}
       
      </div>
    </div>
  );
}

export default TopCompnies;
