import React from "react";

const EventBanner = () => {
  return (
    <section className="event_banner_area">
      <div
        className="parallax-effect"
        style={{
          backgroundImage:
            "url(" + require("../../img/logo-1.png") + ")",
        }}
      ></div>
      <div className="container">
        <div className="event_banner_content">
          <div className="round wow zoomIn" data-wow-delay="0.2s"></div>
          <h2 className="wow fadeInUp" data-wow-delay="0.8s">
            <span>Life Source</span>
          </h2>
          <p className="wow fadeInUp" data-wow-delay="0.5s">
            Welcome to Lifesource, the blood donation portal connecting generous
            donors with those in need.
            <br /> With our easy-to-use platform, you can make a life-saving
            difference with just a few clicks.
          </p>
          {/* <a className="event_btn btn_hover wow fadeInLeft" data-wow-delay="0.9s" href="/#">Register Now</a>
                    <a className="event_btn event_btn_two btn_hover wow fadeInRight" data-wow-delay="0.9s" href="/#"><i className="arrow_triangle-right_alt2"></i>How we Work</a> */}
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
