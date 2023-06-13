import React from 'react'
import {
  faPalette,
  faLaptopCode,
  faDatabase,
  faHouseSignal,
} from "@fortawesome/free-solid-svg-icons";
import pricing from "../../Images/background/pricing-bg-dot-shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import abstract from "../../Images/icons/abstract.png";
import seniour from "../../Images/icons/senior.png";
import flower from "../../Images/icons/flower.png";
import { Link } from 'react-router-dom';
function PopularService() {
   const handleNavClick = () => {
     window.scrollTo({ top: 0, behavior: "auto" });
     console.log("clicked")
   };
  return (
    <>
      <section
        id="services"
        className="service-three-area pt-70 rpt-40 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <span className="sub-title mb-20">Popular Services</span>
                <h2>Let us help you with your technology needs</h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-down" data-aos-anchor-placement="top-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link to="/uiux" onClick={handleNavClick}>
                      UI/UX
                    </Link>
                  </h5>
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faPalette}
                      size="2xl"
                      style={{ fontSize: "50px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link to="/react" onClick={handleNavClick}>
                      Front End Development
                    </Link>
                  </h5>
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faLaptopCode}
                      size="2xl"
                      style={{ fontSize: "50px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link to="/node" onClick={handleNavClick}>Back End Development</Link>
                  </h5>
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="2xl"
                      style={{ fontSize: "50px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link to="/mobile" onClick={handleNavClick}>
                      IoT Development
                    </Link>
                  </h5>
                  <div className="icon">
                    <FontAwesomeIcon
                      icon={faHouseSignal}
                      size="2xl"
                      style={{ fontSize: "50px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Pricing start */}
      <section
        className="pricing-area-three pb-85 rpb-55"
        style={{
          backgroundImage: `url(${pricing})`,
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-down" data-aos-anchor-placement="top-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src={abstract} />
                </div>
                <h5>Junior Resources</h5>
                <ul className="list-style-one">
                  <li>1 to 2 years of experience</li>
                  <li>Rates are same for all tech stack</li>
                  <li>160 working hours a month</li>
                  <li> Moderate Communication</li>
                </ul>
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="theme-btn w-100"
                >
                  Get Started
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon">
                  <img src={seniour} />
                </div>
                <h5>Senior Resources</h5>
                <ul className="list-style-one">
                  <li>3 to 5 years of experience</li>
                  <li>Rates are same for all tech stack</li>
                  <li>160 working hours a month</li>
                  <li>Proficient Communication</li>
                </ul>
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="theme-btn w-100"
                >
                  Get Started
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src={flower} />
                </div>
                <h5>Scrum Masters</h5>
                <ul className="list-style-one">
                  <li>5+ years of experience</li>
                  <li>Strong Agile Based Development</li>
                  <li>Sprint planning and weekly sync ups</li>
                  <li>160 working hours a month</li>
                </ul>
                <Link to="/contact" onClick={handleNavClick} className="theme-btn w-100">
                  Choose Package <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link
                  className="explore-more text-start mt-30"
                  to="/contact"
                  onClick={handleNavClick}
                >
                  <i className="fas fa-arrow-right" />{" "}
                  <span>Let's Connect</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity" data-aos="fade-up" data-aos-anchor-placement="top-center">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
    </>
  );
}

export default PopularService