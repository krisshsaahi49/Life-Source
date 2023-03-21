import React from "react";

const HomeBanner = () => {
  return (
    <section id='home' className="event_banner_area">
      <div
        className="parallax-effect"
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
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
