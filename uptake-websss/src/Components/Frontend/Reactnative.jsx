import React from 'react'
import OtherCommonSection from '../Enquiry Form/OtherCommonSection';
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";


function Reactnative() {
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
              <h1 id='tech-title' className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                React-Native
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
                  <span className="sub-title mb-15">React-Native</span>
                  <h2>
                    React-Native Development Services Where Front-end Evolution
                    Begins
                  </h2>
                </div>
                <div className="row gap-60 abt-technology-div overflow-auto">
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Full-Cycle React Native Apps Development</h5>
                      </div>
                      <p>
                        Our Full stack React Native experts are skilled at
                        developing customized React Native mobile app solutions
                        catering the unique requirements of your target audience
                        to meet your product’s objectives.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>React Native iOS App Development</h5>
                      </div>
                      <p>
                        Hire certified React Native iOS developer from us to
                        build feature-rich and exceptional React native iOS
                        app..
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>React Native Android App Development</h5>
                      </div>
                      <p>
                        Looking for a development partner to build Android
                        mobile application? Hire React Native developers from us
                        to design interactive android apps to make your way to
                        the market.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>React Native Components and API Integration</h5>
                      </div>
                      <p>
                        Need assistance in enhancing native user experience or
                        integrating 3rd party APIs in your existing application?
                        We can be your one-stop solution. Hire React Native Dev
                        experts to turn your ideas into reality.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Code Audit</h5>
                      </div>
                      <p>
                        Hire React Native app developers and experts to review
                        and analyze the code quality of your existing
                        application to improve speed, stability, and code
                        performance.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>React Native Upgrade and Migration Services</h5>
                      </div>
                      <p>
                        Re-engineer your web app by leveraging the expertise of
                        our React Native developers. We have successfully helped
                        hundreds of businesses to enhance their UI and UX. Our
                        React Native Dev ensures to get the job done without any
                        tech inconsistency or data loss.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>React Native Team Augmentation</h5>
                      </div>
                      <p>
                        Set up a cross-functional dynamic React Native
                        development team with our flexible team augmentation
                        model. Hire React Native developer India from us to
                        upskill your dev team without stretching your budget.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>React Native Consulting</h5>
                      </div>
                      <p>
                        Leverage our React Native consulting services to get the
                        complete project roadmap and layout to build a mobile
                        app with the native look and feel using Agile
                        methodology.
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


export default Reactnative