import React from "react";
import { Banner } from "../components/Banner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Tools } from "../components/Tool";
import { Intro } from "../components/Intro";
import hero from "../assets/BACK ground.jpg";
function Home() {
  console.log("home");
  return (
    <div>
      {/* <Banner /> */}
      <img src={hero} alt="hero" />
      {/* <Intro/> */}
      {/* <Skills />
      
      <Tools/> */}
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
