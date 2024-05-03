import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import NavBar from "./components/navBar";
import NavBar2 from "./components/navBar2";
import Hero from "./components/hero";
import Popularcategory from "./components/popularcategory";
import TopCompnies from "./components/TopCompnies";
import ClientTestimonals from "./components/ClientTestimonals";
import OnDemandTeams from "./components/OnDemandTeams";
import RegisterJob from "./components/RegisterJob";
import Footer from "./components/footer";
import ExploreCategories from "./components/ExploreCategories";
import HowItWorks from "./components/HowItWorks";
import FeaturedJob from "./components/FeaturedJob";

function App() {
  return (
    <>
      <NavBar />
      <NavBar2 />
      <Hero />
      <Popularcategory />
      <ExploreCategories />
      <HowItWorks />
      <FeaturedJob />
      <TopCompnies />
      <ClientTestimonals />
      <OnDemandTeams />
      <RegisterJob />
      <Footer />
    </>
  );
}

export default App;
