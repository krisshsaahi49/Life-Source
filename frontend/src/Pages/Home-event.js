import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import HomeBanner from "../components/Banner/HomeBanner";
import EventTeam from "../components/Team/EventTeam";
import EventFact from "../components/EventFact";
import About from "./About";
import Mission from "./Mission";
import Contact from "./Contact";
import Donor from "./Donor";
import Recipient from "./Recipient";

const homesupport = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        mClass="menu_four hosting_menu"
        nClass="w_menu m-auto"
        slogo="sticky_logo"
        hbtnClass="event_btn"
      />
      <HomeBanner />
      <About />
      <Mission />
      <EventTeam />
      <EventFact />
      <Donor/>
      <Recipient/>
      <Contact />
    </div>
  );
};
export default homesupport;
