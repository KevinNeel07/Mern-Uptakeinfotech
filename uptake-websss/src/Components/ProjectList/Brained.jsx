import React from 'react'
import OtherProjects from './OtherProjects'
import hero2bg from "../../Images/hero/hero-two-bg.png"
import leaf from "../../Images/banner/leaf-small.png"
import bb1 from "../../Images/projects/brainEd-proj-banner1.png"
import bb2 from "../../Images/projects/brainEd-proj-banner2.png"
import bb3 from "../../Images/projects/brainEd-proj-banner3.png"


function Brained() {
  return (
    <div className="page-wrapper">
  {/* Page Banner Section Start */}
  <section className="page-banner pt-210 rpt-150 pb-75 rel z-1" style={{backgroundImage: `url(${hero2bg})`}}>
    <div className="container container-1290">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
            BrainED
            <img className="mxw-10 leaf" src={leaf} alt="Leaf" />
          </h1>
          <div className="banner-text wow fadeInUp delay-0-3s">
            Brain-Computer Interface(BCI) device and app to track students' cognitive abilities such as
            their attention, focus, memory, etc. while learning with the help of wearable hardware and
            thorough analytics software. This wearable BCI can track a student’s mental and emotional
            behaviour and can guide the students to improve their learning through brain analytics.
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
        <img src={bb1} alt="Project" />
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
                <p className="sub-title mb-20">Ed-Tech</p>
              </div>
            </div>
            <div className="col text-center proj-technologies">
              <h5>Front-End:</h5>
              <div className="tech-names">
                <p className="sub-title mb-20">JavaScript, React.js</p>
              </div>
            </div>
            <div className="col text-center proj-technologies">
              <h5>Back-End:</h5>
              <div className="tech-names">
                <p className="sub-title mb-20">Laravel, MySQL, Python, MQTT</p>
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
          <div className="big-letter text">Due to the competition between educational digital platforms, the
            real education system requires a deep understanding and knowledge for developing software
            that accurately collects the brain data sent via the BCI device. It was a challenge to draw
            an application that is highly responsive and accurate for collecting brain data of each
            student resulting in bulks of data over a short period of time.</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="image mb-30 wow fadeInUp delay-0-2s">
            <img src={bb2} alt="Project" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image mb-30 wow fadeInUp delay-0-4s">
            <img src={bb3} alt="Project" />
          </div>
        </div>
      </div>
      <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
        <div className="col-lg-4">
          <h3 className="title mb-30">The Results</h3>
        </div>
        <div className="col-lg-8">
          <div className="text">
            We have implemented a robust solution looking forward to client needs. The app screen
            layouts are designed and developed in such a way as to make the teacher’s interface
            interactive. the teacher can easily download and sign up to select the subject, topic and
            chapter before starting the session to collect the data via BCI.
          </div>
          <div className="content project_keypoints mt-20">
            <ul className="list-style-three pb-25">
              <li>Makes day-to-day learning easy and transparent.</li>
              <li>Record Student’s attention, focus, and emotional well-being using a sensor placed on
                their forehead.</li>
              <li>Helps teachers to know live stats like average, lowest and highest attention in a
                live class.</li>
              <li>Helps teachers to know the weak spots of a child simultaneously so they can help
                children better understand the topics being taught.</li>
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


export default Brained