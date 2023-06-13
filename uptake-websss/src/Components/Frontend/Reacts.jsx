import React from 'react'
import OtherCommonSection from '../Enquiry Form/OtherCommonSection';
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";

function Reacts() {
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
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12">
              <h1 id='tech-title' className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                ReactJS
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
                <div className="section-title mb-60 wow  fadeInUp delay-0-2s" data-aos="fade-up">
                  <span className="sub-title mb-15">React.JS</span>
                  <h2>
                    ReactJS Development Services Where Front-end Evolution
                    Begins
                  </h2>
                </div>
                <div className="row gap-60 abt-technology-div overflow-auto">
                  <div className="col-md-6" data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS Product Development</h5>
                      </div>
                      <p>
                        Get bug-free and result-driven custom ReatJS product
                        development services to build-next gen specific to your
                        business needs.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS Front-End Development</h5>
                      </div>
                      <p>
                        Leverage our React front end developer's skill to build
                        effective SPAs, multiple architectures, and real-time
                        data exchange applications.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>React Native App Development</h5>
                      </div>
                      <p>
                        Our top ReactJS developers are well-versed in building
                        cross-platform native applications with 100% guaranteed
                        satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS Website Migration</h5>
                      </div>
                      <p>
                        Our remote React developers have proven expertise in
                        migrating or upgrading your existing web app to the
                        ReactJS platform without losing your data.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS For Enterprise App Development</h5>
                      </div>
                      <p>
                        Our offshore react developers provide scalable and
                        secure solutions to build large-scale B2B &amp;
                        Enterprise web applications.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS Integration</h5>
                      </div>
                      <p>
                        We have a pool of skillful ReactJS developers who have
                        proven expertise in integrating your existing web app
                        and system with ReactJS.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS UI/UX Development</h5>
                      </div>
                      <p>
                        Choose us as your ReactJS development partner to build
                        ReactJS application with captivating UI/UX and
                        interactive features. We use the best React component
                        libraries for real-time user experience across all
                        devices.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS Plugin Development</h5>
                      </div>
                      <p>
                        We have a team of the best React specialists who have
                        top-of-the-line expertise in developing and integrating
                        plugins as well as modules.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>ReactJS Support &amp; Maintenance</h5>
                      </div>
                      <p>
                        Leverage our on-time maintenance and support services to
                        meet your business objectives under all the scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OtherCommonSection />
    </div>
  );
}




export default Reacts