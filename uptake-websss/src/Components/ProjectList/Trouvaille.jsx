import React from 'react'
import hero2bg from "../../Images/hero/hero-two-bg.png"
import leaf from "../../Images/banner/leaf-small.png"
import OtherProjects from './OtherProjects'
import tb1 from "../../Images/projects/trouvaille-proj-banner1.png"
import tb2 from "../../Images/projects/trouvaille-proj-banner2.png"
import tb3 from "../../Images/projects/trouvaille-proj-banner3.png"

function Trouvaille() {
  return (
    <div className="page-wrapper">
  {/* Preloader */}

  {/* main header */}
  <header id="header">
    {/*Header-Upper*/}
    {/*End Header Upper*/}
  </header>
  {/* Page Banner Section Start */}
  <section className="page-banner pt-210 rpt-150 pb-75 rel z-1" style={{backgroundImage: `url(${hero2bg})`}}>
    <div className="container container-1290">
      <div className="row">
        <div className="col-lg-12">
          <h1 className="hero-title style-two mt-65 mb-30 wow fadeInUp delay-0-2s">
            Trouvaille Trips
            <img className="mxw-10 leaf" src={leaf} alt="Leaf" />
          </h1>
          <div className="banner-text wow fadeInUp delay-0-3s">
            The client had a vision to provide all travel related information and guides to users for
            knowledge sharing with travel plans and travel medium booking facility in the near future
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
        <img src={tb1} alt="Project" />
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
                <p className="sub-title mb-20">Travel and Entertainment
                </p>
              </div>
            </div>
            <div className="col text-center proj-technologies">
              <h5>Front-End:</h5>
              <div className="tech-names">
                <p className="sub-title mb-20">React.js, Javascript</p>
              </div>
            </div>
            <div className="col text-center proj-technologies">
              <h5>Back-End:</h5>
              <div className="tech-names">
                <p className="sub-title mb-20">PHP, Laravel, MySQL</p>
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
          <div className="big-letter text">
            The main challenge was to find a way for our clientele to penetrate in the over competitive
            market of travel stay and medium bookings.
          </div>
          <div className="big-letter text">
            The second main challenge was to find a way to make travelers understand importance of trees
            and pollution free environment via an informative page on carbon footprint calculator and
            how to reduce pollution
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="image mb-30 wow fadeInUp delay-0-2s">
            <img src={tb2} alt="Project" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image mb-30 wow fadeInUp delay-0-4s">
            <img src={tb3} alt="Project" />
          </div>
        </div>
      </div>
      <div className="row pt-40 pb-105 rpb-80 wow fadeInUp delay-0-2s">
        <div className="col-lg-4">
          <h3 className="title mb-30">The Results</h3>
        </div>
        <div className="col-lg-8">
          <div className="text">
            The best possible way to capture the audience is via knowledge sharing in an
            innovative manner and this brings us this concluded approach to start an informative website
            that can answer to all travel and stay based queries along with do’s and don'ts. Giving back
            to the community can also help by involving the locals and frequent travellers
            <br />
            <br />
            Once we have an audience, other phases will be launched such for B2B and B2C Bookings.
          </div>
          <div className="content project_keypoints mt-20">
            <ul className="list-style-three pb-25">
              <li>Detailed Informative page for each location to travel with information like
                geographic importance, historic importance, best time to travel, average spend per
                person etc.
              </li>
              <li> Carbon Foot print calculator to make user understand the impact of pollution
              </li>
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


export default Trouvaille