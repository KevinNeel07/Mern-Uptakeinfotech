import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";
import OtherCommonSection from "../Enquiry Form/OtherCommonSection";

function Vue() {
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
                Vue.js
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
            <div className="col-xl-12 col-md-12 tech-contnet ">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow  fadeInUp delay-0-2s"  data-aos="fade-up">
                  <span className="sub-title mb-15">Vue.js</span>
                  <h2>
                    Vue.js Development Services Where Front-end Evolution Begins
                  </h2>
                </div>
                <div className="row gap-60 abt-technology-div overflow-auto">
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Custom Application Development</h5>
                      </div>
                      <p>
                        Leverage our Vue.js application development services to
                        build an app within the stipulated time-frame without
                        compromising quality.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Single Page Application Development</h5>
                      </div>
                      <p>
                        Vue.js is our mainstream front-end development
                        technology and we have gained top-of-the- line expertise
                        in building top-notch single page web applications
                        Vue.js.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Native Mobile Apps Development</h5>
                      </div>
                      <p>
                        Hire Vue native developers from us to build
                        cross-platform native mobile applications. Our experts
                        make use of Vue Native Command Line Interface to build
                        interactive Vue native apps.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>SSR with Vue and Nuxt.js</h5>
                      </div>
                      <p>
                        To render SPAs on the server instead of the browser, our
                        experts make use of Nuxt.js. As Nuxt is built on SSR
                        features and it lets you build an application with the
                        help of SSR.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Real-time Application Development</h5>
                      </div>
                      <p>
                        Hire Vue JS developer from us to build a
                        performance-obsessed real-time application to give your
                        users an immersive experience.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Vue.js Migration Services</h5>
                      </div>
                      <p>
                        Level up your business and make your application more
                        performant, responsive, and better optimized from
                        migrating your existing application from different
                        framework to Vue.js.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Data Analysis Tools</h5>
                      </div>
                      <p>
                        We own skillful expertise in building ideal data
                        analysis tools to help your product handle large volumes
                        of structured and unstructured data.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-left">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Portal Development Solutions</h5>
                      </div>
                      <p>
                        We provide industry-specific web portal design and
                        development services for B2B and B2C enterprises to
                        build interactive and efficient web solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6"  data-aos="fade-right">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Maintenance and Upgradation Services</h5>
                      </div>
                      <p>
                        Our skillful vue js developers are always available with
                        our comprehensive maintenance support and most-advanced
                        Vue.js development Service.
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

export default Vue