import React from 'react'
import WhatWeOffer from './WhatWeOffer';
import h2bg from "../../Images/hero/hero-two-bg.png"
import abt from "../../Images/banner/Web-development.png";
import PopularService from './PopularService';
import { Link } from 'react-router-dom';
function WebDev() {
  return (
    <div className="page-wrapper">
      {/* main header */}
      <header id="header">
        {/*Header-Upper*/}
        {/*End Header Upper*/}
      </header>
      {/* Page Banner Start */}
      <section
        className="page-banner-area webDev-banner overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: `url(${h2bg})` }}
      >
        <div className="container">
          <div className="banner-inner rpt-10">
            <h2 className="page-title wow fadeInUp delay-0-2s" data-aos="fade-up">
              Web and Web App Development Services
            </h2>
            <nav aria-label="breadcrumb" data-aos="fade-up">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="">
                  <Link to="/">Home &nbsp;</Link>
                </li>

                <li className="breadcrumb-item">
                  <i
                    class="fa-solid fa-chevron-right"
                    style={{ color: "white" }}
                  ></i>
                  &nbsp; Web and Web App Development Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center justify-content-end">
            <WhatWeOffer />
            <div className="col-lg-10" data-aos="fade-left">
              <div className="image pt-30 wow fadeInUp delay-0-2s">
                <img src={abt} alt="About" />
              </div>
            </div>
          </div>
        </div>
        <span className="big-text" id="TagLine" data-aos="fade-up">
          Web Development
        </span>
      </section>
      {/* Services Page About Area end */}
      {/* Service Style Two start */}
      <section className="service-two-area pt-90 rpt-45 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="row">
                <div className="col-xl-10">
                  <div className="section-title mb-30 wow fadeInRight delay-0-2s">
                    <span className="sub-title mb-15">What We Do</span>
                    <h2>Special Solutions For Web and Web App Development</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-2s">
                <div className="icon">
                  <i class="fa-sharp fa-regular fa-gem"></i>
                </div>
                <h5>Research and Idea Generation</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-4s">
                <div className="icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h5>Innovation and Design</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-2s">
                <div className="icon">
                  <i class="fa-brands fa-codepen"></i>
                </div>
                <h5>Full Cycle Product Development</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-4s">
                <div className="icon">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <h5>
                  Test <br />
                  <br />
                </h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-6s">
                <div className="icon">
                  <i class="fa-solid fa-lightbulb"></i>
                </div>
                <h5>
                  Release <br />
                  <br />
                </h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-6s">
                <div className="icon">
                  <i class="fa-solid fa-list-check"></i>
                </div>
                <h5>
                  Operate <br />
                  <br />
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Style Two end */}
      {/* Service Style Three start */}
      <PopularService />
    </div>
  );
}




export default WebDev


