import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";
import OtherCommonSection from '../Enquiry Form/OtherCommonSection';
function Python() {
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 id='tech-title' className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Python
                <img
                  className="mxw-10 leaf"
                  src={leaf}
                  alt="Leaf"
                />
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
                <div className="section-title mb-60 wow  fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Python</span>
                  <h2>
                    Python Development Services Where Back-end Evolution Begins
                  </h2>
                </div>
                <div className="row gap-60 abt-technology-div overflow-auto">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Python Web Application Development</h5>
                      </div>
                      <p>
                        Our seasoned Python developers can help you create the
                        best possible web application while keeping your vision
                        in mind. This will help you to reach the pinnacle of
                        success in your business.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Custom Python App Development</h5>
                      </div>
                      <p>
                        Hire a team of the best Python developers skilled at
                        building custom Python applications and well-equipped to
                        handle the challenges.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Enterprise-level Python Application development</h5>
                      </div>
                      <p>
                        Our experienced Python developers are well-versed in
                        building secure, scalable and high-performing python web
                        and mobile apps as per the specific business
                        requirements.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Python Migration and Integration</h5>
                      </div>
                      <p>
                        Our senior Python developers can help you migrate your
                        existing applications to Python or integrate Python
                        modules into your existing codebase easily and quickly.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Back-end development</h5>
                      </div>
                      <p>
                        We offer professional back-end development services
                        using Python programming language to build robust and
                        scalable server-side applications.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>SaaS development</h5>
                      </div>
                      <p>
                        Our python programmers have expertise in developing
                        Software as a Service (SaaS) applications using Python,
                        ensuring high reliability and scalability for your
                        business.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>API development</h5>
                      </div>
                      <p>
                        Hire dedicated python developers to design and develop
                        APIs using Python, allowing your applications to
                        communicate seamlessly with each other and external
                        services.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Python Support &amp; Maintenance</h5>
                      </div>
                      <p>
                        Hire Dedicated Python developer in India to get reliable
                        support and maintenance services to facilitate instant
                        adoption and implement an immediate fix for bugs.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>
                          Hire Python Programmer for Futuristic Technologiest
                        </h5>
                      </div>
                      <p>
                        Hire Python developers from us with expertise in IoT,
                        AI, ML, NLP, Robotics, and more. We offer comprehensive
                        solutions in automation, cybersecurity, computer vision,
                        and big data. Trust our team for top-of-the-line Python
                        solutions.
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




export default Python