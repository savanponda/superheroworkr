import React, { useState } from "react";
import "./FindJob.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import job1 from "../assets/jobImage/job1.png";
import job8 from "../assets/jobImage/job8.png";
import job9 from "../assets/jobImage/job9.png";

const FindJob = ({
  filters = ["Latest", "Old"],
  filterPageOptions = ["12 per page", "10 per page"],
}) => {
  const [selectFilter, setSelectFilter] = useState('latest')
  const [pageFilter, setPageFilter] = useState('12 per page')

  const selectedFilter = (item) => {
      setSelectFilter(item)
  }

  const selectedPageFilter = (item) => {
      setPageFilter(item)
  }

  return (
    <>
      <div className="filterTab">
        <div className="filters">
          <div className="design">Design</div>
        </div>
        <div className="options">
          <select name="" value={selectFilter} id="" >
            {filters.map((name) => (
              <option key={name} value={name} onClick={() => {selectedFilter(name)}}>
                {name}
              </option>
            ))}
          </select>
          <select
            name=""
            value={pageFilter}
            id=""

          >
            {filterPageOptions.map((pages) => (
              <option key={pages} value={pages} onClick={() => {selectedPageFilter(pages)}}>
                {pages}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="banner6">
        <div className="top-compnies">
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
                    </div>
                    <div className="caption">
                      <SlLocationPin className="det-icon" />{" "}
                      <p> United States</p>
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
                      <SlLocationPin className="det-icon" />{" "}
                      <p> United States</p>
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
                      <SlLocationPin className="det-icon" />{" "}
                      <p> United States</p>
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
                    </div>
                    <div className="caption">
                      <SlLocationPin className="det-icon" />{" "}
                      <p> United States</p>
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
                      <SlLocationPin className="det-icon" />{" "}
                      <p> United States</p>
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
                      <SlLocationPin className="det-icon" />{" "}
                      <p> United States</p>
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
    </>
  );
};
export default FindJob;
