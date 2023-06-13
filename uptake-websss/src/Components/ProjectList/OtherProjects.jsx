import React from 'react'
import { Link } from 'react-router-dom'
import trouvsmall from "../../Images/projects/trouvaille-small.png"
import roughsmall from "../../Images/projects/roughTurtle-small.png"
function OtherProjects() {
   const handleNavClick = () => {
     window.scrollTo({ top: 0, behavior: "auto" });
   };
  return (
    <>
      {/* other projects */}
      <section className="next-prev-post-area">
        <div className="container container-1290">
          <div className="next-prev-post pt-110 rpt-80 pb-100 rpb-70">
            <div className="prev-post wow fadeInLeft delay-0-2s">
              <div className="image">
                <img src={trouvsmall} alt="Prev" />
              </div>
              <div className="content">
                <h4>
                  <Link to="/trouvaille" onClick={handleNavClick}>
                    Trouvaille Trips
                  </Link>
                </h4>
                <Link
                  className="read-more"
                  to="/trouvaille"
                  onClick={handleNavClick}
                >
                  Prev <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="next-post wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link to="/roughturtle" onClick={handleNavClick}>
                    Rough Turtle CRM
                  </Link>
                </h4>
                <Link
                  className="read-more"
                  to="/roughturtle"
                  onClick={handleNavClick}
                >
                  Next <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
              <div className="image">
                <img src={roughsmall} alt="Next" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OtherProjects