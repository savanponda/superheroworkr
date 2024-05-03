import React from 'react'
import './FeaturedJob.css'
import { SlLocationPin } from "react-icons/sl";
import { MdBookmarkBorder } from "react-icons/md";
import job1 from "../assets/job1.png";
import job2 from "../assets/job2.png";
import job3 from "../assets/job3.png";
import job4 from "../assets/job4.png";
import job5 from "../assets/job5.png";
import job6 from "../assets/job6.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";

const FeaturedJob = () => {
    return(
        <div className="banner5">
        <div className="featured-job">
          <div className="popular-category">
            <h1>Featured Job</h1>
            <button>
              View All <FaArrowRightLong />
            </button>
          </div>

          <div className="card banner-card2">
            <div className="card card-side1 ">
              <div className="left">
                <img src={job1} alt="" srcset="" />
                <div className="details">
                  <div className="head">
                    <h1>Senior UX Designer</h1>
                    <div className="time">
                      <p>Contract Base</p>
                    </div>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> Austrlia</p>
                    <BsCurrencyDollar className="det-icon" />
                    <p> $30k-$35k</p>
                    <CiCalendarDate className="det-icon" />{" "}
                    <p> 4 Days Remaining</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="bookmark">
                  <MdBookmarkBorder />
                </div>
                <button>
                  Apply Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="card card-side1 ">
              <div className="left">
                <img src={job2} alt="" srcset="" />
                <div className="details">
                  <div className="head">
                    <h1>Software Engineer</h1>
                    <div className="time">
                      <p>Full Time</p>
                    </div>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> China</p>
                    <BsCurrencyDollar className="det-icon" />
                    <p> $50K-$60K</p>
                    <CiCalendarDate className="det-icon" />{" "}
                    <p> 4 Days Remaining</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="bookmark">
                  <MdBookmarkBorder />
                </div>
                <button>
                  Apply Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="card card-side1 ">
              <div className="left">
                <img src={job3} alt="" srcset="" />
                <div className="details">
                  <div className="head">
                    <h1>Junior Graphic Designer</h1>
                    <div className="time">
                      <p>Full Time</p>
                    </div>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> Canada</p>
                    <BsCurrencyDollar className="det-icon" />
                    <p> $50K-$70K</p>
                    <CiCalendarDate className="det-icon" />{" "}
                    <p> 4 Days Remaining</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="bookmark">
                  <MdBookmarkBorder />
                </div>
                <button>
                  Apply Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="card card-side1 ">
              <div className="left">
                <img src={job4} alt="" srcset="" />
                <div className="details">
                  <div className="head">
                    <h1>Product Designer</h1>
                    <div className="time">
                      <p>Full Time</p>
                    </div>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> United States</p>
                    <BsCurrencyDollar className="det-icon" />
                    <p> $35K-$40K</p>
                    <CiCalendarDate className="det-icon" />{" "}
                    <p> 4 Days Remaining</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="bookmark">
                  <MdBookmarkBorder />
                </div>
                <button>
                  Apply Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="card card-side1 ">
              <div className="left">
                <img src={job5} alt="" srcset="" />
                <div className="details">
                  <div className="head">
                    <h1>Marketing Officer</h1>
                    <div className="time">
                      <p>Intership</p>
                    </div>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> Germany</p>
                    <BsCurrencyDollar className="det-icon" />
                    <p> $50K-$90K</p>
                    <CiCalendarDate className="det-icon" />{" "}
                    <p> 4 Days Remaining</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="bookmark">
                  <MdBookmarkBorder />
                </div>
                <button>
                  Apply Now <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="card card-side1 ">
              <div className="left">
                <img src={job6} alt="" srcset="" />
                <div className="details">
                  <div className="head">
                    <h1>Interaction Designer</h1>
                    <div className="time">
                      <p>Full Time </p>
                    </div>
                  </div>
                  <div className="caption">
                    <SlLocationPin className="det-icon" /> <p> France</p>
                    <BsCurrencyDollar className="det-icon" />
                    <p> $5K-$10K</p>
                    <CiCalendarDate className="det-icon" />{" "}
                    <p> 4 Days Remaining</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="bookmark">
                  <MdBookmarkBorder />
                </div>
                <button>
                  Apply Now <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default FeaturedJob