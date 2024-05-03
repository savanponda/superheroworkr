import React from "react";
import "./hero.css";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import Illustration from "./images/Illustration.png";
import image2 from "./images/image2.png";
import { PiBriefcase } from "react-icons/pi";
import { RiBuildingLine } from "react-icons/ri";
import { PiUsersDuotone } from "react-icons/pi";
import { PiUserPlusDuotone } from "react-icons/pi";
import { LiaSearchPlusSolid } from "react-icons/lia";
import { GoVerified } from "react-icons/go";

function Hero() {
  return (
    <>
      <div className="banner">
        <div
          className="card banner-card1 "
          style={{
            
          }}
        >
          <figure>
            <img
              src={Illustration}
              alt="Album"
              style={{ width: "672px", height: "420px" }}
            />
          </figure>
          <div className="card-body">
            <h1>
              Find your talent with 
            </h1>
            <h1 style={{ color:'#0A65CC' }}>
            superworkr.com
            </h1>
            <p
              style={{ fontSize: "18px", color: "black", marginBottom: "15px" }}
            >
              Professional Expertise for Advance Production
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "#5E6670",
                marginBottom: "32px",
              }}
            >
              Global center for media agencies and IT companies, looking to{" "}
              <br />
              outsource autonomous tasks and talent.
            </p>

            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="banner-container">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Job title, keyword"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>

                <div className="nav2-divider"></div>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Your location"
                    className="me-3"
                    aria-label="Search"
                  />
                </Form>
                <Button className="nav2-button" style={{ marginRight: "5px" }}>
                  Find Job
                </Button>
              </div>
              <div className="suggestions">
                <p style={{ color:'#9199A3' }}>Suggestion: </p><p> Designer,</p><p> Programing,</p>
                <p style={{ color:'#0A65CC' }}> Digital Marketing,</p><p> Video,</p><p> Animation.</p>
              </div>
            </Nav>
          </div>
        </div>
      </div>

      <div className="banner">
        <div
          className="card banner-card2"
          style={{
           
          }}
        >
          <div className="card card-side ">
            <figure  className="figure2"> 
              <PiBriefcase className="icon" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">1000+</h2>
              <p>Live Jobs</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card card-side ">
            <figure
              style={{
               
              }}
              className="figure2"
            >
              <RiBuildingLine className="icon" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">4,354</h2>
              <p>Listed Compnies</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card card-side ">
            <figure
              style={{
               
              }}
              className="figure2"
            >
              <PiUsersDuotone className="icon" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">50k+</h2>
              <p>Tech Profiles</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card card-side ">
            <figure className="figure2" >
              <PiBriefcase className="icon" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">95%</h2>
              <p>Client Retention</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero2">
        <h6>Driven by Purpose</h6>
        <h1>Niche specialists from around the world</h1>
        <p>
          At Superscouts.com, we're more than just business for profits. <br />
          <br /> <br />
          We're a global center for IT companies and media agencies seeking to
          elevate their projects with precision and <br />
          proficiency. Whether you're looking to outsource independent tasks or
          hire specialized skills, we've got you covered.
        </p>
        <div className="funfact2">
          <div className="one1">
          <div className="icon-back">
              <div className="icon">
                <PiUserPlusDuotone className="icon-body"/>
                </div>
                <div className="content">
                  <p>Precision Matching</p>
              </div>
            </div>
            <div className="content-2">
            <h1>Flexible Connectivity</h1>
            <p style={{marginTop:'30px'}}>
            Our clients can choose from a blended hiring model to contractual 
            assocaition to suit your project scope and shift timings.
              timings.
            </p>
            </div>
          </div>
          <div className="two1">
          <div className="icon-back">
              <div className="icon">
              <LiaSearchPlusSolid className="icon-body"
              style={{transform:'rotate(270deg)'}}/>
                </div>
                <div className="content">
                  <p>Focused Proficiency</p>
              </div>
            </div>
            <div className="content-2">
            <h1>Flexible Connectivity</h1>
            <p style={{marginTop:'30px'}}>
            Our clients can choose from a blended hiring model to contractual 
            assocaition to suit your project scope and shift timings.
              timings.
            </p>
            </div>
          </div>
          <div className="three1">
          <div className="icon-back">
              <div className="icon">
                <GoVerified className="icon-body"/>
                </div>
                <div className="content">
                  <p>Overlapping Timezones</p>
              </div>
            </div>
            <div className="content-2">
            <h1>Flexible Connectivity</h1>
            <p style={{marginTop:'30px'}}>
            Our clients can choose from a blended hiring model to contractual 
            assocaition to suit your project scope and shift timings.
              timings.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero3">
        <div className="content">
          <div className="left3">
            <div className="wwd">
              <h1>What we do?</h1>
              <p>
                At Superscouts.com, we assemble the perfect team for your <br />
                business needs. We specialize in connecting you with top talent
                for Media, Advertising, and IT projects.
              </p>
              <br />
              <h4>Whether you require: </h4>
              <br />
            </div>
            <div className="freelance">
              <h1>Freelancers</h1>
              <p>Flexible, on-demand expertise for specific tasks.</p>
            </div>
            <div className="clients">
              <h1>Clients</h1>
              <p>
                Build a dedicated team for ongoing projects with consistent
                support.
              </p>
            </div>
            <div className="forhire">
              <h1>For Hire</h1>
              <p>
                Hire the perfect fit for your staffing needs, onsite or remote.
              </p>
            </div>
          </div>
          <div className="right3">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;