import React from 'react'
import footerBgShape2 from "../../Images/footer/footer-bg-shape-two.png"
import uptakelogo from "../../Images/footer/uptake_Logo.png"
import { Link } from 'react-router-dom';

function Footer() {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <>
      <footer
        className="main-footer footer-three rel bgs-cover z-1"
        style={{ backgroundImage: `url(${footerBgShape2})` }}
      >
        <div className="container container-1290">
          <div className="footer-top pt-30 pb-10">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="footer-logo mb-20 wow fadeInRight delay-0-2s" data-aos="fade-right" >
                  <Link to="/" onClick={handleNavClick}>
                    <img
                      id="uptakeLogo"
                      src={uptakelogo}
                      alt="Uptake Infotech"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-8 text-lg-end" id="social_Media_Link_div" data-aos="fade-left">
                <div
                  className="social-style-four mb-20 wow fadeInLeft delay-0-2s"
                  id="social_Media_Link"
                >
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
                    <i className="fab fa-linkedin-in" /> <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="footer-left-content pt-80">
                <div className="lets-work mb-50 wow fadeInUp delay-0-2s" data-aos="fade-right">
                  <span>Let’s Work Together</span>
                </div>
                <div className="footer-contact-info wow fadeInUp delay-0-3s" data-aos="fade-up">
                  <a
                    className="theme-btn style-three"
                    href="mailto:contact@uptakeinfotech.com"
                  >
                    contact@uptakeinfotech.com
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <a
                    className="theme-btn style-three phone-number"
                    href="callto:9726373894"
                  >
                    +91 9726373894
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-right-content" data-aos="fade-left">
                <h4 className="footer-title wow fadeInUp delay-0-2s">
                  Quick Links
                </h4>
                <div className="footer-widget widget_nav_menu">
                  <ul className="list-style-two wow fadeInUp delay-0-3s">
                    <li>
                      <Link to="/" onClick={handleNavClick}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" onClick={handleNavClick}>
                        Popular Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={handleNavClick}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <ul className="list-style-two wow fadeInUp delay-0-4s">
                    <li>
                      <Link to="/uiux" onClick={handleNavClick}>UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/webdev" onClick={handleNavClick}>Development</Link>
                    </li>
                    <li>
                      <Link to="/mobile" onClick={handleNavClick}>Mobile App &amp; IoT</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-6">
              </div>
              <div className="col-xl-12 col-lg-6 col-md-12">
                <div className="copyright-text text-lg-end pt-40 pb-35 rpt-10 wow fadeInLeft delay-0-2s">
                  <p className="text-center">
                    Copyright @2023,
                    <Link to="/" onClick={handleNavClick}>Uptake Infotech Pvt Ltd</Link>
                    &nbsp; All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer