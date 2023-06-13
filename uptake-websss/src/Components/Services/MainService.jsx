import React from 'react'
import herotwobg from "../../Images/hero/hero-two-bg.png"
import workline from "../../Images/shapes/work-process-line.png"
import reviewModified from "../../Images/testimonials/Review-modified.png"
import Testimonial from '../Testimonials/Testimonial'
import { Link } from 'react-router-dom'

function MainService() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <div className="page-wrapper">
      {/* Page Banner Section Start */}
      <section
        className="page-banner service-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: `url(${herotwobg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
                Our Services
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Feature Three Area start */}
      <section className="feature-three-area pb-50 rpb-20 rel z-1">
        <div className="container container-1290">
          <div className="row gap-130">
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s" data-aos="fade-right">
                <div className="top-part">
                  <span className="serial-number">01</span>
                  <Link
                    className="details-btn"
                    to="/uiux"
                    onClick={handleNavClick}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link to="/uiux" onClick={handleNavClick}>UI/UX Design</Link>
                  </h4>
                  <p>
                    We understand the importance of creating unique and hassle
                    free designs to drive an exquisite user experience with a
                    seemingly beautiful user interface
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s" data-aos="fade-left">
                <div className="top-part">
                  <span className="serial-number">02</span>
                  <Link className="details-btn" to="/webdev" onClick={handleNavClick}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link to="/webdev" onClick={handleNavClick}>Web Development</Link>
                  </h4>
                  <p>
                    Our Web development range from developing a simple single
                    static page of plain text to complex web applications,
                    electronic businesses, and social network services.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s" data-aos="fade-right">
                <div className="top-part">
                  <span className="serial-number">03</span>
                  <Link className="details-btn" to="/mobile" onClick={handleNavClick}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link to="/mobile" onClick={handleNavClick}>Application Development</Link>
                  </h4>
                  <p>
                    We aim to develop intuitive, appealing, user-friendly and
                    scalable cross platform mobile apps. From UI/UX to
                    deployment we cover it all.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-4s" data-aos="fade-left">
                <div className="top-part">
                  <span className="serial-number">04</span>
                  <Link className="details-btn" to="/mobile">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link to="/mobile" onClick={handleNavClick}>IoT Development</Link>
                  </h4>
                  <p>
                    The Internet of things is altering the way we work, learn,
                    think, entertain and innovate every industry. IoT is a ball
                    of energy to generate a great economical impact
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item-three wow fadeInUp delay-0-2s" data-aos="fade-right">
                <div className="top-part">
                  <span className="serial-number">05</span>
                  <Link className="details-btn" to="/ITConsultancy" onClick={handleNavClick}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="content">
                  <h4>
                    <Link to="/ITConsultancy">IT Consultancy</Link>
                  </h4>
                  <p>
                    Advisory services that help clients assess different
                    technology strategies and, in doing so, align their
                    technology strategies with their business or process
                    strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Three Area end */}
      {/* Headline area start */}
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
      {/* Headline Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290 rel z-1">
          <div className="row gap-70">
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s" data-aos="fade-up">
                <span className="step-number">Step 01</span>
                <h4 className="title">Requirement Gathering</h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s" data-aos="fade-down">
                <span className="step-number">Step 02</span>
                <h4 className="title">Design</h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two mt-60 wow fadeInDown delay-0-2s" data-aos="fade-up">
                <span className="step-number">Step 03</span>
                <h4 className="title">Develop and Test</h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="work-step-item style-two wow fadeInUp delay-0-2s" data-aos="fade-down">
                <span className="step-number">Step 04</span>
                <h4 className="title">Deploy</h4>
              </div>
            </div>
          </div>
          <div className="bg-line-shape">
            <img src={workline} alt="Work Process Line" />
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-70 rpt-30  pb-70">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6 testimonial-img">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s" data-aos="fade-right">
                <img src={reviewModified} alt="Testimonial Left Image" />
                <div className="bottom-border" />
              </div>
            </div>
            <Testimonial />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainService