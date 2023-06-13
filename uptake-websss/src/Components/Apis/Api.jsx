import React from 'react'
import OtherCommonSection from '../Enquiry Form/OtherCommonSection';
import hero2bg from "../../Images/hero/hero-two-bg.png";
import leaf from "../../Images/banner/leaf.png";
function Api() {
  return (
    <div className="page-wrapper">
      {/* Page Banner Section Start */}
      <section
        className="page-banner reactjs-Banner pt-210 rpt-150 pb-25 rel z-1"
        style={{ backgroundImage: `url(${hero2bg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 id='tech-title' className="hero-title style-two mb-100 rmb-50 wow fadeInUp delay-0-2s">
                API
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
                <div className="section-title mb-60 wow  fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">API</span>
                  <h2>
                    API Development Services Where Back-end Evolution Begins
                  </h2>
                </div>
                <div className="row gap-60 abt-technology-div overflow-auto">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Improved collaboration</h5>
                      </div>
                      <p>
                        APIs enable integration so that these platforms and apps
                        can seamlessly communicate with one another. Through
                        this integration, companies can automate workflows and
                        improve workplace collaboration. Without APIs, many
                        enterprises would lack connectivity, causing information
                        silos that compromise productivity and performance.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Accelerated innovation</h5>
                      </div>
                      <p>
                        APIs offer flexibility, allowing companies to make
                        connections with new business partners, offer new
                        services to their existing market, and, ultimately,
                        access new markets that can generate massive returns and
                        drive digital transformation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>Data monetization</h5>
                      </div>
                      <p>
                        Many companies choose to offer APIs for free, at least
                        initially, so that they can build an audience of
                        developers around their brand and forge relationships
                        with potential business partners. If the API grants
                        access to valuable digital assets, the business monetize
                        it by selling access. This is referred to as the API
                        economy.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>System security</h5>
                      </div>
                      <p>
                        APIs separate the requesting application from the
                        infrastructure of the responding service, and offer
                        layers of security between the two as they communicate.
                        For example, API calls typically require authentication
                        credentials; HTTP headers, cookies or query strings can
                        provide additional security during data exchange and an
                        API gateway can control access to further minimize
                        security threats.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="fa-solid fa-chevron-right" />
                        <h5>End user security and Privacyt</h5>
                      </div>
                      <p>
                        Just as APIs provide added protection within a network,
                        they can also provide another layer of protection for
                        personal users. When a website requests a user’s
                        location, which is provided via a location API, the user
                        can then decide whether to allow or deny this request.
                        Many web browsers and mobile operating systems, like
                        iOS, have permission structures built-in when APIs
                        request access to applications and their data. When the
                        app must access files through an API, file systems such
                        as windows, Mac and Linux use permissions for that
                        access.
                      </p>
                    </div>
                  </div>
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


export default Api