import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png"
import tmom from "../../Images/projects/tiffinMom-projList.png"
import roughTurtle from "../../Images/projects/roughTurtle-projList.png"
import brainproj from "../../Images/projects/brainEd-projList.png"
import ttrips  from "../../Images/projects/trouvaille-projList.png"
import { Link } from 'react-router-dom'
function Project() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <div className="page-wrapper">
      {/* Page Banner Start */}
      <section
        className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: `url(${hero2bg})` }}
      >
        <div className="container" data-aos="fade-up"
   >
          <div className="banner-inner rpt-10">
            <h2 className="page-title wow fadeInUp delay-0-2s">Project List</h2>
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
                  &nbsp; Project List
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Project List Area start */}
      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s"  data-aos="fade-right">
              <img src={tmom} alt="Project List"
    />
              <Link
                to="/tiffinmom"
                onClick={handleNavClick}
                className="project-btn"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s"  data-aos="fade-left">
              <h2>
                <Link to="/tiffinmom" onClick={handleNavClick}>
                  Tiffin <i>Mom</i>
                </Link>
              </h2>
              <hr />
              <p>
                There is huge clientele base of Indian food in USA and our
                client grabbed on the need of the hour and started providing
                cheap, yet good quality food tiffins online with a management
                system that can deliver reports like order, tiffin, customer,
                revenue, most selling items and less selling items etc.
              </p>
              <Link
                className="read-more"
                to="/tiffinmom"
                onClick={handleNavClick}
              >
                Project Details <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s"  data-aos="fade-right">
              <h2>
                <Link to="/roughturtle" onClick={handleNavClick}>
                  Rough Turtle <i>CRM</i>
                </Link>
              </h2>
              <hr />
              <p>
                CRM to manage streamline business sales, centralization of
                customer information, improved customer service, detailed
                analytics and management of human resource
              </p>
              <Link
                className="read-more"
                to="/roughturtle"
                onClick={handleNavClick}
              >
                Project Details <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s"  data-aos="fade-left">
              <img src={roughTurtle} alt="Project List" />
              <Link
                to="/roughturtle"
                className="project-btn"
                onClick={handleNavClick}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s"  data-aos="fade-right">
              <img src={brainproj} alt="Project List" />
              <Link
                to="/brainEd"
                className="project-btn"
                onClick={handleNavClick}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s"  data-aos="fade-left">
              <h2>
                <Link to="/brainEd" onClick={handleNavClick}>
                  BrainED
                </Link>
              </h2>
              <hr />
              <p>
                Each student has a different learning curve and a different
                mental state while studying, which results in difficulty
                learning some subjects while securing good marks in others.
              </p>
              <Link
                className="read-more"
                to="/brainEd"
                onClick={handleNavClick}
              >
                Project Details <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s"  data-aos="fade-right">
              <h2>
                <Link to="/trouvaille" onClick={handleNavClick}>
                  Trouvaille <i>Trpis</i>
                </Link>
              </h2>
              <hr />
              <p>
                A web portal to provide travel related information and packages
                for ease of travelling, itinerary planning and carbon footprint
                calculator.
              </p>
              <Link
                className="read-more"
                to="/trouvaille"
                onClick={handleNavClick}
              >
                Project Details <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s"  data-aos="fade-left">
              <img src={ttrips} alt="Project List" />
              <Link
                to="/trouvaille"
                className="project-btn"
                onClick={handleNavClick}
              >
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Project List Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s"  data-aos="fade-up"  data-aos-anchor-placement="top-center">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link
                  className="explore-more text-start mt-30"
                  to="/contact"
                  onClick={handleNavClick}
                >
                  <i className="fas fa-arrow-right" />
                  <span>Let's Connect</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity"  data-aos="fade-up"  data-aos-anchor-placement="top-center">Let’s Work Together</span>
      </section>
    </div>
  );
}



export default Project