import React, { useEffect, useState } from 'react'
import HeroRight from "../../Images/hero/hero-right.png"
import HeroBG from "../../Images/hero/hero-bg.png"
import WhatWeDo from "../../Images/hero/what-we-do-banner.png"
import CircleText from "../../Images/about/circle-text.svg"
import js from "../../Images/skills/js.png"
import react from "../../Images/skills/react.png"
import reactnative from "../../Images/skills/react-native.png"
import bootstraps from "../../Images/skills/bootstrap.png"
import vue from "../../Images/skills/vue.png"
import angular from "../../Images/skills/angular.png"
import asp from "../../Images/skills/asp.png"
import shopify from "../../Images/skills/shopify.png"
import django from "../../Images/skills/django.png"
import css from "../../Images/skills/css.png"
import html from "../../Images/skills/html.png"
import wordpress from "../../Images/skills/wordpress.png"
import node from "../../Images/skills/node.png"
import php from "../../Images/skills/php.png"
import python from "../../Images/skills/python.png"
import e from "../../Images/skills/e.png"
import laravel from "../../Images/skills/laravel.png"
import sass from "../../Images/skills/skill9.png"
import tiffinMom from "../../Images/hero/tiffinMom.png"
import roughTurtle from "../../Images/hero/roughTurtle.png"
import brained from "../../Images/hero/brainEd.png"
import trovaille from "../../Images/hero/trouvallie.png"
import pricePlanBg from "../../Images/shapes/pricing-plan-bg.png"
import price from "../../Images/icons/price.svg"
import whyChooseUs from "../../Images/hero/why-choose-us.png"
import client1 from "../../Images/testimonials/client-1.jpg"
import client2 from "../../Images/testimonials/client-2.jpg"
import client3 from "../../Images/testimonials/client-3.jpg"
import client4 from "../../Images/testimonials/client-4.jpg";
import reviewModified from "../../Images/testimonials/Review-modified.png"
import { Link } from 'react-router-dom'
import Client from '../Clients/Client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'



function Home() {
  
  const {ref , inView } = useInView()

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="page-wrapper" >
        {/* Hero Section Start */}
        <section id="home" className="hero-area pt-185 rpt-150 rel z-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero-content wow fadeInLeft delay-0-2s" data-aos="fade-right" >
                  <h1>
                    Creative<span>Premium</span>
                    <i>Solutions</i>
                  </h1>
                </div>
              </div>
              <div className="col-lg-4 social-links">
                <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s" data-aos="fade-up">
                  <img src={HeroRight} alt="Hero" />
                </div>
                <div className="hero-social" data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="300"
                  data-aos-offset="0">
                  <a
                    href="https://www.facebook.com/UptakeInfotech"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" /> <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/uptakeinfotech"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" /> <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/uptake-infotech"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" /> <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bg">
            <img src={HeroBG} alt="lines" />
          </div>
        </section>
        {/* Hero Section End */}
        {/* About Us Area start */}
        <section id="about" className="about-area pt-130 rpt-100 rel z-1">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-3">
                <div className="about-image rmb-45 wow fadeInUp delay-0-2s">
                  <img src={CircleText} alt="Circle Text" data-aos="fade-left" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-9">
                <div className="about-content wow fadeInUp delay-0-4s" data-aos="fade-left"  >
                  <div className="section-title mb-40">
                    <span className="sub-title mb-15">About Us</span>
                    <h2>
                      Providing competitive edge in the form of robust,
                      fore-sighted, and qualitative solutions.
                    </h2>
                  </div>
                  <div className="content">
                    <p>
                      We are an epitome of creative UI/UX designers, skilled
                      developers, disciplined quality analysts and efficient
                      product managers you will rarely come across. We let you
                      access the best brains in the development sector ranging
                      from independent software developers to the fully managed
                      teams..
                    </p>
                    <Link
                      className="read-more mt-10"
                      to="/about"
                      onClick={handleNavClick}
                    >
                      Read More <i class="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Us Area end */}
        {/* Headline area start */}
        <div className="headline-area pt-90 rpt-85 rel z-1">
          <div className="container-fluid">
            <div className="headline-text marquee">
              <span>
                Software<span> Development</span> Agency
              </span>
            </div>
          </div>
        </div>
        {/* Headline Area end */}
        {/* What We Do start */}
        <section className="what-we-do-area pt-90 rpt-80 rel z-1">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-8">
                <div className="what-we-do-content mb-55" >
                  <div className="section-title mb-60 wow fadeInUp delay-0-2s" data-aos="fade-right">
                    <span className="sub-title mb-15">What We Do</span>
                    <h2>
                      Latest Way To Get IT Solutions &amp; Business Growth
                    </h2>
                  </div>
                  <div className="what-we-do-item wow fadeInUp delay-0-3s" data-aos="fade-right">
                    <div className="number">
                      <span>01</span>
                    </div>
                    <div className="content">
                      <h5>UI/UX</h5>
                      <p>
                        We understand the importance of creating unique and
                        hassle free designs to drive an exquisite user
                        experience with a seemingly beautiful user interface
                      </p>
                      <Link
                        className="read-more style-two"
                        to="/UiUx"
                        onClick={handleNavClick}
                      >
                        <span>Read More</span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="what-we-do-item wow fadeInUp delay-0-5s" data-aos="fade-right">
                    <div className="number">
                      <span>02</span>
                    </div>
                    <div className="content">
                      <h5>Mobile App Solutions</h5>
                      <p>
                        We aim to develop intuitive, appealing, user-friendly
                        and scalable cross platform mobile apps. From UI/UX to
                        deployment we cover it all.
                      </p>
                      <Link
                        className="read-more style-two"
                        to="/mobile"
                        onClick={handleNavClick}
                      >
                        <span>Read More</span>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="what-we-do-item wow fadeInUp delay-0-7s" data-aos="fade-right">
                    <div className="number">
                      <span>03</span>
                    </div>
                    <div className="content">
                      <h5>Web App Solutions</h5>
                      <p>
                        We build solutions with great design in mind and we
                        always use the most suitable front end and back end
                        technology for each individual need.
                      </p>
                      <Link
                        className="read-more style-two"
                        to="/webdev"
                        onClick={handleNavClick}
                      >
                        <span>Read More</span>
                        <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 what-we-do-banner" data-aos="fade-left">
                <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                  <img src={WhatWeDo} alt="What We Do" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What We Do end */}
        {/* Statistics Area start */}
        <section className="statistics-area-two pt-75 rpt-45 rel z-1">
          <div className="container container-1290">
            <div className="row justify-content-center pb-45 rpb-25">
              <div className="col-xl-7 col-lg-9">
                <div className="section-title style-two text-center mb-25 wow fadeInUp delay-0-2s" data-aos="fade-up">
                  <span className="sub-title mb-15">Proven results!</span>
                  <h2>
                    When it comes to success,<i> we deliver.</i>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row no-gap justify-content-between" ref={ref}>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-2s" data-aos="fade-up">
                  <i class="fa-sharp fa-regular fa-circle-check"></i>
                  {
                    inView && (<span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={95}
                    >
                      <CountUp start={0} end={95} delay={0.8} />
                    </span>)
                  }
                  
                  <span className="counter-title">Client Retention Ratio</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item style-two bordered-bottom counter-text-wrap wow fadeInUp delay-0-3s" data-aos="fade-down">
                  <i class="fa-sharp fa-regular fa-circle-check"></i>
                  {
                    inView && (<span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={95}
                    >
                      <CountUp start={0} end={100} delay={0.8} />
                    </span>)
                  }
                  <span className="counter-title">Project’s Complete</span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item style-two bordered-top counter-text-wrap wow fadeInUp delay-0-4s" data-aos="fade-up">
                  <i class="fa-sharp fa-regular fa-circle-check"></i>
                  {
                    inView && (<span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={95}
                    >
                      <CountUp start={0} end={15} delay={0.8} />
                    </span>)
                  }
                  <span className="counter-title">
                    Professionals Team Member
                  </span>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="counter-item style-two bordered-bottom bordered-right counter-text-wrap wow fadeInUp delay-0-5s" data-aos="fade-down">
                  <i class="fa-sharp fa-regular fa-circle-check"></i>
                  {
                    inView && (<span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop={95}
                    >
                      <CountUp start={0} end={25} delay={0.8} />
                    </span>)
                  }
                  <span className="counter-title">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Statistics Area end */}
        {/* Skills Area Start */}
        <section id="skills" className="skills-area pt-100 rpt-70 rel z-1">
          <div className="container container-1590">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s"  data-aos="fade-up">
                  <h2>Domain Specific IT Services we deal with</h2>
                </div>
              </div>
            </div>
            <div className="skills-wrap">
              <div className="skill-item">
                <img src={js} alt="Skill Icon" />
                <span className="text">javascript</span>
              </div>
              <div className="skill-item">
                <img src={react} alt="Skill Icon" />
                <span className="text">React</span>
              </div>
              <div className="skill-item">
                <img src={angular} alt="Skill Icon" />
                <span className="text">Angular</span>
              </div>
              <div className="skill-item">
                <img src={vue} alt="Skill Icon" />
                <span className="text">Vue.js</span>
              </div>
              <div className="skill-item">
                <img src={reactnative} alt="Skill Icon" />
                <span className="text">React-Native</span>
              </div>
              <div className="skill-item">
                <img src={node} alt="Skill Icon" />
                <span className="text">node.js</span>
              </div>
              <div className="skill-item">
                <img src={php} alt="Skill Icon" />
                <span className="text">php</span>
              </div>
              <div className="skill-item">
                <img src={laravel} alt="Skill Icon" />
                <span className="text">Laravel</span>
              </div>
              <div className="skill-item">
                <img src={python} alt="Skill Icon" />
                <span className="text">Python</span>
              </div>
              <div className="skill-item">
                <img src={django} alt="Skill Icon" />
                <span className="text">Django</span>
              </div>
              <div className="skill-item">
                <img src={asp} alt="Skill Icon" />
                <span className="text">.net</span>
              </div>
              <div className="skill-item">
                <img src={bootstraps} alt="Skill Icon" />
                <span className="text">Bootstrap</span>
              </div>
              <div className="skill-item">
                <img src={sass} alt="Skill Icon" />
                <span className="text">Sass</span>
              </div>
              <div className="skill-item">
                <img src={html} alt="Skill Icon" />
                <span className="text">HTML</span>
              </div>
              <div className="skill-item">
                <img src={css} alt="Skill Icon" />
                <span className="text">CSS</span>
              </div>
              <div className="skill-item">
                <img src={wordpress} alt="Skill Icon" />
                <span className="text">WordPress</span>
              </div>
              <div className="skill-item">
                <img src={shopify} alt="Skill Icon" />
                <span className="text">Shopify</span>
              </div>
              <div className="skill-item">
                <img src={e} alt="Skill Icon" />
                <span className="text">Elementor</span>
              </div>
            </div>
          </div>
        </section>
        {/* Skills Area End */}
        {/* Headline area start */}
        <div className="headline-area pt-65 rpt-60 rel z-1">
          <div className="container-fluid">
            <div className="headline-text marquee">
              <span>
                <span>Creative and </span> Premium solutions
              </span>
            </div>
          </div>
        </div>
        {/* Headline Area end */}
        {/* Project Timeline Area start */}
        <section
          id="projects"
          className="project-timeline-area pt-90 rpt-75 rel z-1"
        >
          <div className="container container-1290">
            <div className="row justify-content-between align-items-center pb-25">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title mb-30 wow fadeInLeft delay-0-2s"  data-aos="fade-right">
                  <span className="sub-title mb-15">Recent Works Gallery</span>
                  <h2>Let’s Look Our Recent Project Gallery</h2>
                </div>
              </div>
              <div className="col-lg-4 text-lg-end"  data-aos="fade-left">
                <Link
                  to="/projects"
                  onClick={handleNavClick}
                  className="theme-btn mb-25 wow fadeInRight delay-0-2s"
                >
                  View More Projects <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="project-timeline wow fadeInUp delay-0-2s"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <div className="content project-content">
                <div className="content-title">
                  <span className="serial-number">01</span>
                  <h4>
                    <Link to="/tiffinmom" onClick={handleNavClick}>
                      Tiffin Mom
                    </Link>
                  </h4>
                </div>
                <div className="content-text">
                  There is huge clientele base of Indian food in USA and our
                  client grabbed on the need of the hour and started providing
                  cheap, yet good quality food tiffins online with a management
                  system that can deliver reports like order, tiffin, customer,
                  revenue, most selling items and less selling items etc.
                </div>
              </div>
              <div className="image">
                <Link className to="/tiffinmom" onClick={handleNavClick}>
                  <img src={tiffinMom} alt="Project TimeLine Image" />
                </Link>
              </div>
              <div className="right-btn">
                <Link
                  className="details-btn"
                  to="/tiffinmom"
                  onClick={handleNavClick}
                >
                  <i className="fa-solid fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="project-timeline wow fadeInUp delay-0-2s"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <div className="content project-content">
                <div className="content-title">
                  <span className="serial-number">02</span>
                  <h4>
                    <Link to="/roughturtle" onClick={handleNavClick}>
                      Rough Turtle CRM
                    </Link>
                  </h4>
                </div>
                <div className="content-text">
                  CRM to manage streamline business sales, centralization of
                  customer information, improved customer service, detailed
                  analytics and management of human resource
                </div>
              </div>
              <div className="image">
                <Link className to="roughturtle" onClick={handleNavClick}>
                  <img src={roughTurtle} alt="Project TimeLine Image" />
                </Link>
              </div>
              <div className="right-btn">
                <Link
                  className="details-btn"
                  to="roughturtle"
                  onClick={handleNavClick}
                >
                  <i className="fa-solid fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="project-timeline wow fadeInUp delay-0-2s"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <div className="content project-content">
                <div className="content-title">
                  <span className="serial-number">03</span>
                  <h4>
                    <Link to="/brainEd" onClick={handleNavClick}>
                      BrainED
                    </Link>
                  </h4>
                </div>
                <div className="content-text">
                  Each student has a different learning curve and a different
                  mental state while studying, which results in difficulty
                  learning some subjects while securing good marks in others.
                </div>
              </div>
              <div className="image">
                <Link className to="/brainEd" onClick={handleNavClick}>
                  <img src={brained} alt="Project TimeLine Image" />
                </Link>
              </div>
              <div className="right-btn">
                <Link
                  className="details-btn"
                  to="/brainEd"
                  onClick={handleNavClick}
                >
                  <i className="fa-solid fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="project-timeline wow fadeInUp delay-0-2s"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
              <div className="content project-content">
                <div className="content-title">
                  <span className="serial-number">04</span>
                  <h4>
                    <Link to="trouvaille" onClick={handleNavClick}>
                      Trouvaille Trips
                    </Link>
                  </h4>
                </div>
                <div className="content-text">
                  A web portal to provide travel related information and
                  packages for ease of travelling, itinerary planning and carbon
                  footprint calculator.
                </div>
              </div>
              <div className="image">
                <Link className to="/trouvaille" onClick={handleNavClick}>
                  <img src={trovaille} alt="Project TimeLine Image" />
                </Link>
              </div>
              <div className="right-btn">
                <Link
                  className="details-btn"
                  to="/trouvaille"
                  onClick={handleNavClick}
                >
                  <i className="fa-solid fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Headline area start */}
        <div className="headline-area pt-65 rpt-55 rel z-1">
          <div className="container-fluid">
            <div className="headline-text marquee"  data-aos="fade-up">
              <span>
                Dedicated<span> Hiring</span>
              </span>
            </div>
          </div>
        </div>
        {/* Headline Area end */}
        {/* Pricing style three start */}
        <section id="pricing" className="pricing-area-three pt-85">
          <div className="container container-1290">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s"  data-aos="fade-up">
                  <span className="sub-title mb-20">Dedicated Hiring</span>
                  <h2>Best Dedicated Hiring For All Web Design Solutions</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-4s" data-aos="fade-down"
     data-aos-easing="linear">
                <div
                  className="pricing-plan-item style-three"
                  style={{ backgroundImage: `url(${pricePlanBg})` }}
                >
                  <div className="icon-title">
                    <div className="icon">
                      <img src={price} alt="Icon" />
                    </div>
                    <h5>Junior Resources</h5>
                  </div>
                  {/* <p>We denounce with righteous indignation dislike beguiled and demoralize</p> */}
                  <ul className="list-style-one">
                    <li>1 to 2 years of experience</li>
                    <li>Rates are same for all tech stack</li>
                    <li>160 working hours a month</li>
                    <li> Moderate Communication</li>
                  </ul>
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="theme-btn w-100 getStarted_btn"
                  >
                    Get Started <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-6s" data-aos="fade-down"
     data-aos-easing="linear">
                <div
                  className="pricing-plan-item style-three"
                  style={{ backgroundImage: `url(${pricePlanBg})` }}
                >
                  <div className="icon-title">
                    <div className="icon">
                      <img src={price} alt="Icon" />
                    </div>
                    <h5>Senior Resources</h5>
                  </div>
                  {/* <p>We denounce with righteous indignation dislike beguiled and demoralize</p> */}
                  <ul className="list-style-one">
                    <li>3 to 5 years of experience</li>
                    <li>Rates are same for all tech stack</li>
                    <li>160 working hours a month</li>
                    <li>Proficient Communication</li>
                  </ul>
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="theme-btn w-100 getStarted_btn"
                  >
                    Get Started <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp delay-0-6s" data-aos="fade-down"
     data-aos-easing="linear">
                <div
                  className="pricing-plan-item style-three"
                  style={{ backgroundImage: `url(${pricePlanBg})` }}
                >
                  <div className="icon-title">
                    <div className="icon">
                      <img src={price} alt="Icon" />
                    </div>
                    <h5>Scrum Masters</h5>
                  </div>
                  {/* <p>We denounce with righteous indignation dislike beguiled and demoralize</p> */}
                  <ul className="list-style-one">
                    <li>5+ years of experience</li>
                    <li>Strong Agile Based Development</li>
                    <li>Sprint planning and weekly sync ups</li>
                    <li>160 working hours a month</li>
                  </ul>
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className="theme-btn w-100 getStarted_btn"
                  >
                    Get Started <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing style three end */}
        {/* Client Logo Two start */}
        <Client />
        {/* Client Logo Two end */}
        {/* Why Choose Us Area start */}
        <section className="why-choose-area pt-90 rpt-60 rel z-1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7">
                <div className="why-choose-left-image mb-40 wow fadeInLeft delay-0-2s" data-aos="fade-right">
                  <img src={whyChooseUs} alt="Why Choose Left Image" />
                </div>
              </div>
              <div className="col-xl-5">
                <div className="why-choose-two-wrap">
                  <div className="section-title mb-55 wow fadeInUp delay-0-2s" data-aos="fade-left">
                    <span className="sub-title mb-15">Why Choose Us</span>
                    <h2>We Provide Services In One Places</h2>
                  </div>
                  <div className="why-choose-item-two wow fadeInUp delay-0-3s" data-aos="fade-up"  data-aos-duration="3000">
                    <div className="icon">
                      <i className="fas fa-check" />
                      <span className="icon-bottom-shape" />
                    </div>
                    <div className="content">
                      <h4>
                        <a>Innovative Software Development Models</a>
                      </h4>
                    </div>
                  </div>
                  <div className="why-choose-item-two wow fadeInUp delay-0-5s"  data-aos="fade-up"  data-aos-duration="4000">
                    <div className="icon">
                      <i className="fas fa-check" />
                      <span className="icon-bottom-shape" />
                    </div>
                    <div className="content">
                      <h4>
                        <a>Quality Streak</a>
                      </h4>
                    </div>
                  </div>
                  <div className="why-choose-item-two wow fadeInUp delay-0-7s"  data-aos="fade-up"  data-aos-duration="5000">
                    <div className="icon">
                      <i className="fas fa-check" />
                      <span className="icon-bottom-shape" />
                    </div>
                    <div className="content">
                      <h4>
                        <a>Effective Communication</a>
                      </h4>
                    </div>
                  </div>
                  <div className="why-choose-item-two wow fadeInUp delay-0-7s"  data-aos="fade-up"  data-aos-duration="6000">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <div className="content">
                      <h4>
                        <a>Economical Services</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Choose Us Area end */}
        {/* Headline area start */}
        <div className="headline-area pt-60 rpt-50 rel z-1">
          <div className="container-fluid">
            <div className="headline-text marquee">
              <span>
                <span>Client's</span> Testimonials
              </span>
            </div>
          </div>
        </div>
        {/* Headline Area end */}
        {/* Testimonial Area start */}
        <section
          id="testimonials"
          className="testimonials-three-area pt-95 pb-70 rpt-70"
        >
          <div className="container container-1260">
            <div className="row gap-120 align-items-center">
              <div className="col-lg-6 ">
                <div className="testimonial-one-right-part rmb-75">
                  <div className="testimonials-three-active wow fadeInUp delay-0-2s"  data-aos="fade-right">
                    <Slider {...settings} className="myhomeslider">
                      {/* testimonial 1 start */}
                      <div className="testimonial-item style-three">
                        <div className="author-speech">
                          <p>
                            Everything we wanted done, they did without
                            question. They worked very hard to deliver what we
                            wanted
                          </p>
                        </div>
                        <div className="middle-quote">
                          <div className="icon">
                            <i class="fa-solid fa-quote-left"></i>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-author">
                            <div className="author-image">
                              <img src={client1} alt="Author Image" />
                            </div>
                            <div className="author-info">
                              <h4>Shyam Parmar</h4>
                              <span className="designation">
                                CEO and Managing Director
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* testimonial 1 end */}
                      {/* testimonial 2 start */}
                      <div className="testimonial-item style-three">
                        <div className="author-speech">
                          <p>
                            The levels of communication and availability were
                            particularly impressive.
                          </p>
                        </div>
                        <div className="middle-quote">
                          <div className="icon">
                            <i class="fa-solid fa-quote-left"></i>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-author">
                            <div className="author-image">
                              <img src={client2} alt="Author Image" />
                            </div>
                            <div className="author-info">
                              <h4>Neel Patel</h4>
                              <span className="designation">
                                Managing Director
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* testimonial 2 end */}
                      {/* testimonial 3 start */}
                      <div className="testimonial-item style-three">
                        <div className="author-speech">
                          <p>
                            They have a good, professional project manager. He
                            helps to ensure we receive good quality work.
                          </p>
                        </div>
                        <div className="middle-quote">
                          <div className="icon">
                            <i class="fa-solid fa-quote-left"></i>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-author">
                            <div className="author-image">
                              <img src={client3} alt="Author Image" />
                            </div>
                            <div className="author-info">
                              <h4>Jay Patel</h4>
                              <span className="designation">
                                Managing Director
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* testimonial 3 end */}
                      {/* testimonial 4 start */}
                      <div className="testimonial-item style-three">
                        <div className="author-speech">
                          <p>
                            Uptake is flexible and offers prompt replies to our
                            questions
                          </p>
                        </div>
                        <div className="middle-quote">
                          <div className="icon">
                            <i class="fa-solid fa-quote-left"></i>
                          </div>
                        </div>
                        <div className="testimonial-footer">
                          <div className="testimonial-author">
                            <div className="author-image">
                              <img src={client4} alt="Author Image" />
                            </div>
                            <div className="author-info">
                              <h4>ashish agarwal</h4>
                              <span className="designation">CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* testimonial 4 end */}
                    </Slider>
                  </div>
                  {/* <div className="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s">
                    <button className="testimonial-three-prev">
                      <i class="fa-solid fa-arrow-left"></i>
                    </button>
                    <div className="testimonial-three-dots" />
                    <button className="testimonial-three-next">
                      <i className="far fa-long-arrow-right" />
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 testimonial-img">
                <div className="testimonials-three-image wow fadeInRight delay-0-2s"  data-aos="fade-left">
                  <img src={reviewModified} alt="Testimonials" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home