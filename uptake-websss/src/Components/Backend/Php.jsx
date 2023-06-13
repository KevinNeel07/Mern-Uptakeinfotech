import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";
import OtherCommonSection from "../Enquiry Form/OtherCommonSection"
function Php() {
  return (
    <div className="page-wrapper">
      {/*Form Back Drop*/}
      <div className="form-back-drop" />

      {/* Page Banner Section Start */}
      <section
        className="page-banner reactjs-Banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: `url(${hero2bg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 id='tech-title' className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                PHP
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
            <div className="col-xl-12 col-lg-12 mx-xl-auto">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title">PHP</span>
                </div>
                <div className="content">
                  <ul className="list-style-three pb-25">
                    <li>
                      <i
                        class="fa-solid fa-check-double"
                        style={{ color: "#0091CD" }}
                      ></i>{" "}
                      &nbsp; Attractive, innovative and dynamic website
                      development
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-check-double"
                        style={{ color: "#0091CD" }}
                      ></i>{" "}
                      &nbsp; PHP application development which beastly meets
                      customers needs Development &amp; post development
                      application maintenance
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-check-double"
                        style={{ color: "#0091CD" }}
                      ></i>{" "}
                      &nbsp;PHP based and related software product developmentn
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-check-double"
                        style={{ color: "#0091CD" }}
                      ></i>{" "}
                      &nbsp;E-commerce websites
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-check-double"
                        style={{ color: "#0091CD" }}
                      ></i>{" "}
                      &nbsp;Shopping carts
                    </li>
                    <li>
                      <i
                        class="fa-solid fa-check-double"
                        style={{ color: "#0091CD" }}
                      ></i>{" "}
                      &nbsp;online stores
                    </li>
                  </ul>
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



export default Php