import React from 'react'
import abtbg from "../../Images/hero/hero-two-bg.png"
import arrow from "../../Images/hero/title-arrow.png"
import innovativeIcon from "../../Images/icons/inovative-Icon.png"
import qualityicon from "../../Images/icons/quality-icon.png"
import effectiveCom from "../../Images/icons/effective_Com-icon.png"
import effectiveicon from "../../Images/icons/economial-icon.png"
import reviewModified from "../../Images/testimonials/Review-modified.png"
import Client from '../Clients/Client'
import Testimonial from '../Testimonials/Testimonial'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup';
function About() {
  const {ref , inView } = useInView()
  return (
    <div className="page-wrapper">
      {/*Form Back Drop*/}
      <div className="form-back-drop" />
      {/* Page Banner Section Start */}
      <section
        className="page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1"
        style={{ backgroundImage: `url(${abtbg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-11">
              <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s" data-aos="fade-up">
                We’re Mobile &amp; Web Development Agency
                <span className="arrow">
                  <img
                    className="wow fadeInLeft delay-0-6s"
                    src={arrow}
                    alt="Arrow"
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Who We Are start */}
      <section className="who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-40 wow fadeInUp delay-0-2s" data-aos="fade-zoom-in">
                <span className="sub-title mb-15">Who We Are</span>
              </div>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-12 col-md-12 about-content-two">
              <div className=" content style-two wow fadeInUp delay-0-6s text-center">
                <div data-aos="fade-zoom-in">
                  <p>
                    A present-day modern tech firm established to provide the
                    best tech support and development services to the growing
                    business sectors globally.
                  </p>
                </div>
                <div className=" content text-center" data-aos="fade-zoom-in">
                  <p>
                    Right from understanding our clients to execution, we have
                    consistently delivered the competitive edge in the form of
                    robust, fore-sighted, and qualitative solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-2s">
                <div className="why-choose-header" data-aos="fade-right">
                  <i className>
                    <img src={innovativeIcon} alt />
                  </i>
                  <h5>Innovative Software Development Models</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-4s">
                <div className="why-choose-header"  data-aos="fade-left">
                  <i className>
                    {" "}
                    <img src={qualityicon} alt />
                  </i>
                  <h5>Quality Streak</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header"  data-aos="fade-right">
                  <i className>
                    <img src={effectiveCom} alt />
                  </i>
                  <h5>Effective Communication</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="why-choose-item style-two wow fadeInUp delay-0-6s">
                <div className="why-choose-header"  data-aos="fade-left">
                  <i className>
                    <img src={effectiveicon} alt />
                  </i>
                  <h5>Economical Services</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 about-content-two">
              <div className=" content style-two wow fadeInUp delay-0-6s text-center">
                <div  data-aos="fade-up">
                  <p>
                    We are an epitome of creative UI/UX designers, skilled
                    developers, disciplined quality analysts and efficient
                    product managers you will rarely come across. We let you
                    access the best brains in the development sector ranging
                    from independent software developers to the fully managed
                    teams.{" "}
                  </p>
                </div>
                <div className=" content text-center" id="time_ZoneText" data-aos="fade-up">
                  <p>
                    Time Zone has never been a constraint while working with
                    Uptake, your timezone, milestones and deadlines are our
                    priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who We Are end */}
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
      {/* Statistics Area start */}
      <section className="statistics-area-two pt-75 rpt-45 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s" data-aos="fade-up">
                <span className="sub-title mb-15">Agency Fun Fact</span>
                <h2>
                  Great Achievement For Our Global <i>Contributions</i>
                </h2>
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-between" ref={ref}>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-2s" data-aos="fade-up">
                <i class="fa-regular fa-circle-check"></i>
                {
                  inView && (
                    <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop={95}
                  >
                     <CountUp start={0} end={95} delay={0.8} />
                  </span>
                  )
                }
               
                <span className="counter-title">Client Retention Ratio</span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-bottom counter-text-wrap wow fadeInUp delay-0-3s" data-aos="fade-down">
                <i class="fa-regular fa-circle-check"></i>
                {
                  inView && (
                    <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop={95}
                  >
                     <CountUp start={0} end={100} delay={0.8} />
                  </span>
                  )
                }
               
                <span className="counter-title">Project’s Complete</span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-4s" data-aos="fade-up">
                <i class="fa-regular fa-circle-check"></i>
                {
                  inView && (
                    <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop={95}
                  >
                     <CountUp start={0} end={15} delay={0.8} />
                  </span>
                  )
                }
               
                <span className="counter-title">Professionals Team Member</span>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="counter-item style-two bordered-bottom bordered-right counter-text-wrap wow fadeInUp delay-0-5s" data-aos="fade-down">
                <i class="fa-regular fa-circle-check"></i>
                {
                  inView && (
                    <span
                    className="count-text percent"
                    data-speed={3000}
                    data-stop={95}
                  >
                     <CountUp start={0} end={25} delay={0.8} />
                  </span>
                  )
                }
               
                <span className="counter-title">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-70 rpt-30">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6 testimonial-img">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s" data-aos="fade-right">
                <img src={reviewModified} alt="Testimonial Left Image" />
                <div className="bottom-border" />
              </div>
            </div>
            <Testimonial />
            <Client/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About