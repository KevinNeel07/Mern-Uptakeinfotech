import React from 'react'

function WhatWeOffer() {
    return (
      <>
        <div className="col-xl-5">
          <div className="about-content mb-35 wow fadeInUp delay-0-2s">
            <div className="section-title mb-40">
              <span className="sub-title mb-15" data-aos="fade-right">What we offer</span>
              <h2 data-aos="fade-right">
                Design creates culture. Culture shapes values. Values determine
                the future
              </h2>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="row">
            <div className="col-sm-6">
              <div className="service-list mb-35 wow fadeInUp delay-0-4s">
                <ul className="list-style-three" data-aos="fade-down">
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>
                    &nbsp; Responsive Web Designs
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp; Mobile Responsive Web Apps
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp; Mobile App Custom Designs
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp; Corporate Profile and Pitch Deck Designs
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="service-list mb-35 wow fadeInUp delay-0-6s">
                <ul className="list-style-three" data-aos="fade-down">
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp;Cross Browser and Platform
                  </li>
                  <li>
                    <i
                      class="fa-solid fa-check-double"
                      style={{ color: "#0091CD" }}
                    ></i>{" "}
                    &nbsp; Responsive Website Design
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default WhatWeOffer