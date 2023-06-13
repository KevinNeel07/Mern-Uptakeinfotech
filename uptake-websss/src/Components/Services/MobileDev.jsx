import React from 'react'
import PopularService from './PopularService'
import h2bg from "../../Images/hero/hero-two-bg.png";
import mobilebanner from "../../Images/banner/Mobile-app-development.png"
import { Link } from "react-router-dom";
function MobileDev() {
  return (
    <div className="page-wrapper">
      {/* main header */}
      <header id="header">
        {/*Header-Upper*/}
        {/*End Header Upper*/}
      </header>
      {/* Page Banner Start */}
      <section
        className="page-banner-area mobile-banner overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: `url(${h2bg})` }}
      >
        <div className="container" data-aos="fade-up">
          <div className="banner-inner rpt-10">
            <h2 className="page-title wow fadeInUp delay-0-2s">
              Mobile App Development Services
            </h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="">
                  <Link to="/">Home &nbsp;</Link>
                </li>

                <li className="breadcrumb-item">
                  <i
                    class="fa-solid fa-chevron-right"
                    style={{ color: "white" }}
                  ></i>
                  &nbsp; Mobile App Development Services
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
            <div className="col-xl-5">
              <div className="about-content mb-35 wow fadeInUp delay-0-2s" data-aos="fade-right"
     data-aos-anchor-placement="top-center">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">What we offer</span>
                  <h2>
                    Willing to get your application designed with the best user
                    interface?
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-sm-6" data-aos="fade-down">
                  <div className="service-list mb-35 wow fadeInUp delay-0-4s">
                    <ul className="list-style-three">
                      <li>  <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp;Simplicity for End Users</li>
                      <li>
                      <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp;
                        Cross Platform Development (Both Android and iOS are
                        covered)
                      </li>
                      <li>
                      <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp;High Performance</li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6"  data-aos="fade-down">
                  <div className="service-list mb-35 wow fadeInUp delay-0-6s">
                    <ul className="list-style-three">
                      <li>  <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp; Security</li>
                      <li>  <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp; Regular Updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-10"  data-aos="fade-left">
              <div className="image pt-30 wow fadeInUp delay-0-2s">
                <img src={mobilebanner} alt="About" />
              </div>
            </div>
          </div>
        </div>
        <span className="big-text" id="TagLine" data-aos="fade-up" >
          Mobile Development
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
                    <h2>Special Solutions For Mobile Development</h2>
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
                <h5>Research and Plan</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-4s">
                <div className="icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h5>Code</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-2s">
                <div className="icon">
                  <i class="fa-brands fa-codepen"></i>
                </div>
                <h5>Build and Monitor</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-4s">
                <div className="icon">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <h5>Test</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-6s">
                <div className="icon">
                  <i class="fa-solid fa-lightbulb"></i>
                </div>
                <h5>Release</h5>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up"
     data-aos-anchor-placement="top-center">
              <div className="service-item style-two wow fadeInLeft delay-0-6s">
                <div className="icon">
                  <i class="fa-solid fa-list-check"></i>
                </div>
                <h5>Operate</h5>
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
 

export default MobileDev