import React from "react";
import "./ClientTestimonals.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";

function ClientTestimonals() {
  return (
    <div className="banner7">
      <div className="heading">
        <h2>Clients Testimonial</h2>
      </div>
      <div className="col-lg">
        <div className="row">
          <div className="bt1">
            <button>
              <FaArrowLeftLong />
            </button>
          </div>
          <div className="bt1">
            <button>
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="container">
          <div className="col-sm-4">
            <div className="content">
              <h1>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h1>
              <p>
                “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
                Maecenas ac placerat metus, in faucibus est.”
              </p>
            </div>
            <div className="profile">
              <div className="prof">
                <h1><IoPersonCircleOutline /></h1>
              <div className="text">
                <h1>Robert Fox</h1>
                <p>UI/UX Designer</p>
              </div>
              </div>
              <div className="quotes">
                <h1>
                  <RiDoubleQuotesL />
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="content">
              <h1>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h1>
              <p>
                “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
                Maecenas ac placerat metus, in faucibus est.”
              </p>
            </div>
            <div className="profile">
              <div className="prof">
                <h1><IoPersonCircleOutline /></h1>
              <div className="text">
                <h1>Robert Fox</h1>
                <p>UI/UX Designer</p>
              </div>
              </div>
              <div className="quotes">
                <h1>
                  <RiDoubleQuotesL />
                </h1>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="content" style={{marginTop:'22px'}}>
              <h1>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h1>
              <p>
              “Class aptent taciti sociosqu ad litora torquent per 
              conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”
              </p>
            </div>
            <div className="profile" style={{marginBottom:'30px'}}>
              <div className="prof">
                <h1><IoPersonCircleOutline /></h1>
              <div className="text">
                <h1>Robert Fox</h1>
                <p>UI/UX Designer</p>
              </div>
              </div>
              <div className="quotes">
                <h1>
                  <RiDoubleQuotesL />
                </h1>
              </div>
            </div>
          </div>
          


          
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonals;
