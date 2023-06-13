import React from 'react'
import hirebanner from "../../Images/banner/hireBanner.jpg"
import pricing from "../../Images/background/pricing-bg-dot-shape.png";
import abstract from "../../Images/icons/abstract.png";
import seniour from "../../Images/icons/senior.png";
import flower from "../../Images/icons/flower.png";
import { Link } from 'react-router-dom';
function Hire() {
  return (
    <div className="page-wrapper">
      {/* Page Banner Start */}
      <section
        className="page-banner-area hire-banner overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: `url(${hirebanner})` }}
      >
        <div className="container" data-aos="fade-up">
          <div className="banner-inner rpt-10">
            <h2 className="page-title wow fadeInUp delay-0-2s">
              Dedicated Hiring
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
                  &nbsp; Dedicated Hiring
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Why Choose start */}
      <section className="why-choose-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div className="row">
                <div className="col-xl-11">
                  <div className="why-choose-left-content mb-30 rmb-55 wow fadeInLeft delay-0-2s">
                    <div className="section-title mb-50" data-aos="fade-up"
                      data-aos-duration="3000">
                      <span className="sub-title mb-15" >Why Choose Us</span>
                      <h2>Benefit Of Working With Us</h2>
                    </div>
                    <h5 data-aos="fade-right"
                      data-aos-duration="4000">Customer Satisfaction</h5>
                    <p data-aos="fade-right"
                      data-aos-duration="4000">
                      Cause it takes months to find a customer.... seconds to
                      loose one
                    </p>
                    <br />
                    <h5 data-aos="fade-right"
                      data-aos-duration="5000">Social Contribution</h5>
                    <p data-aos="fade-right"
                      data-aos-duration="5000">
                      We pioneer the art of listening and the science of Hope
                    </p>
                    <a className="theme-btn style-two mt-35" href="about.html" data-aos="fade-right"
                      data-aos-duration="6000">
                      Learn More <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="row">
                <div className="col-md-6" 
    >
                  <div className="service-item wow fadeInRight delay-0-2s" data-aos="fade-up">
                    <div className="icon">
                      <i class="fa-solid fa-bezier-curve"></i>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Ontime meeting <br />
                        with experts
                      </a>
                    </h5>
                    <p>
                      It's respectful of others. Showing up on time shows that
                      you value other people's schedules and commitments.
                    </p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-3s" data-aos="fade-up">
                    <div className="icon">
                      <i class="fa-solid fa-users-gear"></i>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Assured Quality <br />
                        Check
                      </a>
                    </h5>
                    <p>
                      A small part of quality management focused on providing
                      confidence that quality requirements will be fulfilled.
                    </p>
                  </div>
                </div>
                <div className="col-md-6" >
                  <div className="service-item mt-30 wow fadeInRight delay-0-4s" data-aos="fade-down">
                    <div className="icon">
                      <i class="fa-solid fa-chart-pie"></i>
                    </div>
                    <h5>
                      <a href="service-details.html">
                        Detailed Log
                        <br />
                        sheet submission
                      </a>
                    </h5>
                    <p>
                      We clearly indicate our client's what accessibility
                      aspects they are able to validate and the meaning of the
                      results generated.
                    </p>
                  </div>
                  <div className="service-item wow fadeInRight delay-0-5s" data-aos="fade-down">
                    <div className="icon">
                      <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <h5>
                      <a href="service-details.html">Flexibility</a>
                    </h5>
                    <p>
                      The team leader assigned to your project will scale your
                      resources as per your requirements. This will help you in
                      having flexibility and adaptability so that you can work
                      more efficiently to reach your ultimate goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose end */}
      {/* Pricing style three start */}
      <section
        className="pricing-area-three pb-85 rpb-55"
        style={{
          backgroundImage: `url(${pricing})`,
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10" >
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s" data-aos="fade-up">
                <span className="sub-title mb-20">Dedicated Hiring</span>
                <h2>Best Dedicated Hiring For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-down">
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
                <a href="contact.html" className="theme-btn w-100">
                  Get Started
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
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
                <a href="contact.html" className="theme-btn w-100">
                  Get Started
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
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
                <a href="contact.html" className="theme-btn w-100">
                  Choose Package <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i class="fa-regular fa-circle"></i>
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <a
                  className="explore-more text-start mt-30"
                  href="contact.html"
                >
                  <i className="fas fa-arrow-right" />{" "}
                  <span>Let's Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
    </div>
  );
}



export default Hire