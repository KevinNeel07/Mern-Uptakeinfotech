import React from 'react'
import h2bg from "../../Images/hero/hero-two-bg.png"
import WhatWeOffer from './WhatWeOffer';
import abt from "../../Images/banner/UIUX Latest.png";
import PopularService from './PopularService';
import { Link } from 'react-router-dom';

function UiUx() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <>
      <div className="page-wrapper">
        <section
          className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
          style={{ backgroundImage: `url(${h2bg})` }}
        >
          <div className="container">
            <div className="banner-inner rpt-10">
              <h2 className="page-title wow fadeInUp delay-0-2s" data-aos="fade-up">
                UIUX Development
              </h2>
              <nav aria-label="breadcrumb" data-aos="fade-up">
                <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                  <li className="">
                    <Link to="/"  onClick={handleNavClick}>Home &nbsp;</Link>
                  </li>

                  <li className="breadcrumb-item">
                    <i
                      class="fa-solid fa-chevron-right"
                      style={{ color: "white" }}
                    ></i>
                    &nbsp; UIUX Development
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
              <div className="col-lg-10">
                <div className="image pt-30 wow fadeInUp delay-0-2s" data-aos="fade-left">
                  <img src={abt} alt="About" />
                </div>
              </div>
            </div>
          </div>
          <span className="big-text" id="TagLine" data-aos="fade-up">
            UI/UX Designing
          </span>
        </section>
        {/* Services Page About Area end */}
        {/* Service Style Two start */}
        <section className="service-two-area pt-90 rpt-45 pb-100 rpb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-7">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-30 wow fadeInRight delay-0-2s" data-aos="fade-right">
                      <span className="sub-title mb-15">What We Do</span>
                      <h2>Special Solutions For UI/UX</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-item style-two wow fadeInLeft delay-0-2s">
                  <div className="icon">
                    <i class="fa-sharp fa-regular fa-gem"></i>
                  </div>
                  <h5>Understand your customers and their values</h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-item style-two wow fadeInLeft delay-0-4s">
                  <div className="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <h5>
                    Research the <br /> competition <br />
                    <br />
                  </h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-item style-two wow fadeInLeft delay-0-2s">
                  <div className="icon">
                    <i class="fa-brands fa-codepen"></i>
                  </div>
                  <h5>Sketch out your product</h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-item style-two wow fadeInLeft delay-0-4s">
                  <div className="icon">
                    <i class="fa-solid fa-screwdriver-wrench"></i>
                  </div>
                  <h5>Design your product &nbsp;&nbsp;</h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6"data-aos="fade-up">
                <div className="service-item style-two wow fadeInLeft delay-0-6s">
                  <div className="icon">
                    <i class="fa-solid fa-lightbulb"></i>
                  </div>
                  <h5>Implement the solution</h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-item style-two wow fadeInLeft delay-0-6s">
                  <div className="icon">
                    <i class="fa-solid fa-list-check"></i>
                  </div>
                  <h5>Evaluate the work and improve it</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Style Two end */}
        {/* Service Style Three start */}
        <PopularService />
      </div>
    </>
  );
}

export default UiUx



