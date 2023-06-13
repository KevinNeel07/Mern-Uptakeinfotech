import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png"
import leaf from "../../Images/banner/leaf-small.png"
import tbanner1 from "../../Images/projects/tiffinMom-proj-banner1.png"
import tbanner2 from "../../Images/projects/tiffinMom-proj-banner2.png"
import tbanner3 from "../../Images/projects/tiffinmom-proj-banner3.png"

import OtherProjects from './OtherProjects'
function Tiffin() {
  return (
    <div className="page-wrapper">
    {/* Page Banner Section Start */}
    <section className="page-banner pt-210 rpt-150 pb-75 rel z-1" style={{backgroundImage: `url(${hero2bg})`}}>
      <div className="container container-1290">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
              Tiffin Mom
              <img className="mxw-10 leaf" src={leaf} alt="Leaf" />
            </h1>
            <div className="banner-text wow fadeInUp delay-0-3s">
              The US-based client had a vision to aggregate different tiffin services along with managing his own master franchise of Sankalp and Saffron.
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Page Banner Section End */}
    {/* Project Details Image start */}
    <div className="project-details-image rel z-1">
      <div className="container-fluid">
        <div className="image wow fadeInUp delay-0-2s">
          <img src={tbanner1} alt="Project" />
        </div>
      </div>
    </div>
    {/* Project Details Image end */}
    {/* Project Details Content Area start */}
    <section className="project-details-area pt-80 rel z-1">
      <div className="container container-1290">
        <div className="row pb-35 wow fadeInUp delay-0-2s">
          <div className="col-lg-4">
            <h3 className="title mb-30">Project's Information</h3>
          </div>
          <div className="col-lg-8">
            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
              <div className="col text-center proj-technologies">
                <h5>Sector:</h5>
                <div className="sector-content">
                  <p className="sub-title mb-20">Restaurant Aggegrator and Food Industry Technology</p></div>
              </div>
              <div className="col text-center proj-technologies">
                <h5>Front-End:</h5>
                <div className="tech-names">
                  <p className="sub-title mb-20">HTML, CSS, React.js</p>
                </div>
              </div>
              <div className="col text-center proj-technologies">
                <h5>Back-End:</h5>
                <div className="tech-names">
                  <p className="sub-title mb-20">Node.js, MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row pt-50 pb-70 wow fadeInUp delay-0-2s">
          <div className="col-lg-4">
            <h3 className="title mb-30">The Challenges</h3>
          </div>
          <div className="col-lg-8">
            <div className="big-letter text">The main challenge was to provide a scalable platform to incorporate different tiffin providers across the states of the USA where they can provide weekly tiffins, custom tiffins and add-ons orders.
            </div>
            <div className="big-letter text">
              Creating a backend that can handle a number of requests as per the locations and tiffin category was a challenging task.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="image mb-30 wow fadeInUp delay-0-2s">
              <img src={tbanner2} alt="Project" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image mb-30 wow fadeInUp delay-0-4s">
              <img src={tbanner3} alt="Project" />
            </div>
          </div>
        </div>
        <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
          <div className="col-lg-4">
            <h3 className="title mb-30">The Results</h3>
          </div>
          <div className="col-lg-8">
            <div className="text">
              We have implemented an easily scalable and robust solution keeping in mind the expansion of the platform as there are new tiffin providers and locations adding on to the platform each day. With such huge ordering, apart from success in placing orders online, it was important to check that the client gets the right reports and analytics from time to time, as the future and features of the future depend on past data and current analytics
            </div>
            <div className="content project_keypoints mt-20">
              <ul className="list-style-three pb-25">
                <li>Easy UI/UX for smooth process for online delivery</li>
                <li>Easy management for multiple orders across the street of USA</li>
                <li>Detailed and minute reporting</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
   <OtherProjects/>
  </div>
  )
}




export default Tiffin