import React from "react";
import "./Footer.css";
import { PiBriefcase } from "react-icons/pi";
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="col-lg">
        <div className="container">
          <div className="col1">
            <div className="head">
              <PiBriefcase /> <h1>Superworkr.com</h1>
            </div>
            <div className="phone">
              <p>Call now: </p>
              <h1> (962) 521-4305</h1>
            </div>
            <div className="para">
              <p>
                Outsource media and tech ops with our <br />
                talented and ready-to-work offshore <br />
                resources.
              </p>
            </div>
            <div className="social">
              <CgFacebook />
              <FaYoutube />
              <BsInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="col2">
            <div className="head">
              <h1>Company</h1>
            </div>
            <p>About</p>
            <div className="head-2">
              <FaArrowRightLong />
              Top Categories
            </div>

            <p>Talent</p>
            <p>Clients</p>
          </div>
          <div className="col3">
          <h1>For Clients</h1>
          <p>Post Jobs</p>
          <p>Browse Employers</p>
          <p>Dashboard</p>
          <p>Applications</p>
          </div>
          <div className="col4">
          <h1>Explore</h1>
          <p>Platform</p>
          <p>Blogs</p>
          <p>Partnerships</p>
          <p>Community</p>
          </div>
          <div className="col5">
          <h1>Support</h1>
          <p>FAQs</p>
          <p>Contact</p>
          <p>Customer Solutoins</p>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="caption">
        <p>Cookie Settings | Terms of Service | GDPR</p>
        <p>© 2024 Superworkr.com™ All Rights Reserved. Managed by Werbex Inc.</p>
        </div>
                
        
      </div>
    </footer>
  );
}

export default Footer;
