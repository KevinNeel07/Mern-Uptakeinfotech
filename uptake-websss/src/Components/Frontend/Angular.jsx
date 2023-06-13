import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";
import OtherCommonSection from "../Enquiry Form/OtherCommonSection";

function Angular() {
  return (
    <div className="page-wrapper">
      {/*Form Back Drop*/}
      <div className="form-back-drop" />
      {/* Hidden Sidebar */}
      {/*End Hidden Sidebar */}
      {/* Page Banner Section Start */}
      <section
        className="page-banner reactjs-Banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: `url(${hero2bg})` }}
      >
        <div className="container"  data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <h1 id='tech-title' className="hero-title tech-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Angular.js
                <img className="mxw-10 leaf" src={leaf} alt="Leaf" />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Services Page About Area start */}
      <section className="why-choose-area pt-100 rpt-70 pb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-md-12 tech-contnet">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow  fadeInUp delay-0-2s"  data-aos="fade-up">
                  <span className="sub-title mb-15">Angular.js</span>
                  <h2>
                    Angular.js Development Services Where Front-end Evolution
                    Begins
                  </h2>
                </div>
                <div className="row gap-60 abt-technology-div overflow-auto">
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Angular Web and Mobile App Development</h5>
                      </div>
                      <p>
                        Whether you are looking to hire AngularJS programmer’s
                        team or dedicated Angular mobile app developers, Find
                        angular js developer to build secure, scalable, and
                        feature-packed applications.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Angular Upgrade Service</h5>
                      </div>
                      <p>
                        Whether you are an independent consultant, a CEO, CTO,
                        an incredible new startup, or a product owner, extend
                        your existing team and fulfill the skill gap. Our
                        Angular Upgrade Service ensures 100% peace of mind
                        without ongoing service interruption or downtime when
                        updating to the latest Angular version.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Angular Ecommerce Portal Development</h5>
                      </div>
                      <p>
                        Development of feature-rich and interactive shopping
                        carts is a lot simpler with the help of Angular. Let us
                        help you develop a simple and ravishing portal system
                        with floating panels.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>UI/UX Development Services</h5>
                      </div>
                      <p>
                        Hire Angular programmers to build interactive web apps
                        to boost your online business. Our Seasoned Angular
                        experts provide eye-catchy UI/UX development services
                        following the industry trends.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Custom Angular Plugin Development</h5>
                      </div>
                      <p>
                        We provide highly-interactive and data-driven
                        enterprise-oriented custom Angular plugin development
                        services to fulfill your unique business requirements.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>AJAX Development</h5>
                      </div>
                      <p>
                        Leverage our seasoned AngularJS developers to bring out
                        their expertise in various Ajax web app development and
                        technologies like JavaScript, XHTML, CSS, and XML HTTP
                        Request (XHR).
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Angular to Angular Migration</h5>
                      </div>
                      <p>
                        Being a globally renowned Angular Development Company,
                        we know how to quickly and efficiently migrate your old
                        Angular application to the latest Angular version.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <OtherCommonSection/>
    </div>
  );
}




export default Angular