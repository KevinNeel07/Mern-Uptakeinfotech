import React from 'react'
import OtherCommonSection from '../Enquiry Form/OtherCommonSection';
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";

function Bootstrap() {
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
                Bootstrap
                <img className="mxw-10 leaf" src={leaf} alt="Leaf" />
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner Section End */}
      {/* Services Page About Area start */}
      <section className="service-page-about py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row gap-90 align-items-center">
            {/* <div class="col-lg-6">
                  <div class="service-about-image rmb-55 wow fadeInUp delay-0-2s">
                      <img src="../assets/images/about/service-page-about.jpg" alt="About">
                      <div class="service-about-box bgc-primary" style="background-image: url(../assets/images/shapes/work-step-bg.png);">
                          <h3><a href="">Web Solutions Research and Idea Generate</a></h3>
                      </div>
                  </div>
              </div> */}
            <div className="col-lg-12 col-md-=12 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s"  data-aos="fade-right">
                <div className="section-title mb-40">
                  <span className="sub-title">Bootstrap</span>
                </div>
                <div className="content">
                  <ul className="list-style-three pb-25 tech-list">
                    <li>
                    <i class="fas fa-check-double" style={{color: "#0091CD"}}></i>&nbsp;
                      Modifying existing bootstrap templates into a more
                      responsive one
                    </li>
                    <li> <i class="fas fa-check-double" style={{color: "#0091CD"}}></i>&nbsp; Convert normal CSS to Bootstrap Framework</li>
                    <li> <i class="fas fa-check-double" style={{color: "#0091CD"}}></i>&nbsp; Digital Product Design</li>
                    <li>
                    <i class="fas fa-check-double" style={{color: "#0091CD"}}></i>&nbsp;
                      Responsive templates in bootstrap using HTML, Joomla,
                      WordPress, Drupal
                    </li>
                  </ul>
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




export default Bootstrap