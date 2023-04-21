import React from "react";
import EventBanner from "../components/Banner/EventBanner";
import EventTeam from "../components/Team/EventTeam";
import About from "./About";
import Mission from "./Mission";
import Contact from "./Contact";
import CustomNavbar from "../components/CustomNavbar";


const HomeEvent = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <EventBanner />
      <About />
      <Mission />
      <EventTeam />
      <Contact />
    </div>
  );
};
export default HomeEvent;
