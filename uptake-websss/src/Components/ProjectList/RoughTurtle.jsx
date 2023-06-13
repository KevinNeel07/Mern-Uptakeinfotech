import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png"
import leaf from "../../Images/banner/leaf-small.png"
import OtherProjects from './OtherProjects'
import rb1 from "../../Images/projects/roughTurtle-proj-banner1.png"
import rb2 from "../../Images/projects/roughTurtle-proj-banner2.png"
import rb3 from "../../Images/projects/roughTurtle-proj-banner3.png"


function RoughTurtle() {
  return (
    
<div className="page-wrapper">
 
  {/* Page Banner Section Start */}
  <section className="page-banner pt-210 rpt-150 pb-75 rel z-1" style={{backgroundImage: `url(${hero2bg})`}}>
    <div className="container container-1290">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
            Rough Turtle CRM
            <img className="mxw-10 leaf" src={leaf} alt="Leaf" />
          </h1>
          <div className="banner-text wow fadeInUp delay-0-3s">
            The client wanted to have his own easy-to-use CRM so he can manage his multiple stores, customers, products, employees and reports all at once instead of creating a stack of excel sheets.
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
        <img src={rb1} alt="Project" />
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
            <div className="col text- proj-technologies">
              <h5>Sector:</h5>
              <div className="sector-content">
                <p className="sub-title mb-20">Recycle Product</p></div>
            </div>
            <div className="col text-center proj-technologies">
              <h5>Front-End:</h5>
              <div className="tech-names">
                <p className="sub-title mb-20">HTML, CSS </p>
              </div>
            </div>
            <div className="col text-center proj-technologies">
              <h5>Back-End:</h5>
              <div className="tech-names">
                <p className="sub-title mb-20">Laravel, MySQL</p>
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
          <div className="big-letter text">After the GST implementation on purchase and sales, managing manual reports after each month is a tedious task, so we wanted to implement a feature where GST can be calculated automatically on one click itself.
          </div>
          <div className="big-letter text">
            The second challenge was to deliver a system that was easy to use and compute for staff who have no hands-on experience using a tech product.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="image mb-30 wow fadeInUp delay-0-2s">
            <img src={rb2} alt="Project" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image mb-30 wow fadeInUp delay-0-4s">
            <img src={rb3} alt="Project" />
          </div>
        </div>
      </div>
      <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
        <div className="col-lg-4">
          <h3 className="title mb-30">The Results</h3>
        </div>
        <div className="col-lg-8">
          <div className="text">
            We have implemented an easily tweakable and robust solution keeping the scope of CRM expansion with other new future features in mind. The web screen and layouts are designed in such a way that it feels easy and interactive for non-tech staff to incorporate the usage of CRM into their daily routine.
          </div>
          <div className="content project_keypoints mt-20">
            <ul className="list-style-three pb-25">
              <li>Manage customers and send email invoices via CRM</li>
              <li>Stock management &amp; Product management as per brands</li>
              <li>Auto GST calculations in purchase and sales reports</li>
              <li>Easy to use HRM module</li>
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



export default RoughTurtle