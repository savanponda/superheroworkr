import React from "react";
import "./popularcategory.css";
import { FiPenTool } from "react-icons/fi";
import { LuCode2 } from "react-icons/lu";
import { PiMegaphoneSimpleDuotone } from "react-icons/pi";
import { CiMusicNote1 } from "react-icons/ci";
import { PiChartBarHorizontalDuotone } from "react-icons/pi";
import { PiFirstAidKit } from "react-icons/pi";
import arrow1 from "../assets/arrow1.png";

function Popularcategory() {
  return (
    <>
      {/* Popular Category Section */}
      <div className="banner2">
        <div className="popular-category">
          <h1>Popular category</h1>
          <button>
            View All <img src={arrow1} alt="" srcset="" />
          </button>
        </div>
        <div className="card banner-card2">
          <div className="row-1">
            <div className="card card-side1 ">
              <figure className="figure2">
                <FiPenTool className="icon" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Graphics & Design</h2>
                <p>357 Open position</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card card-side1 ">
              <figure className="figure2">
                <LuCode2 className="icon" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Code & Programing</h2>
                <p>312 Open position</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card card-side1 ">
              <figure className="figure2">
                <PiMegaphoneSimpleDuotone
                  className="icon"
                  style={{ transform: "rotateY(180deg)" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Video & Animation</h2>
                <p>247 Open position</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>

          <div className="row-2">
            <div className="card card-side1 ">
              <figure className="figure2">
                <CiMusicNote1 className="icon" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Music & Audio</h2>
                <p>204 Open position</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card card-side1 ">
              <figure className="figure2">
                <PiChartBarHorizontalDuotone
                  className="icon"
                  style={{ transform: "rotate(270deg)" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Health & Care</h2>
                <p>125 Open position</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
            <div className="card card-side1 ">
              <figure className="figure2">
                <PiFirstAidKit className="icon" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Data & Science</h2>
                <p>57 Open position</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero4"></div>
    </>
  );
}

export default Popularcategory;
