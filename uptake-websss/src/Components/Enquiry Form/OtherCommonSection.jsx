import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendMail } from '../../actions/action';
import Loader from '../LoadingPage/Loader';

function OtherCommonSection() {
  const { isLoading, email } = useSelector(state => ({ ...state.mail }))
  const [loadingstate, setloadingstate] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    if (loadingstate) {
      setloadingstate(false)
    }
  }, [isLoading])

  console.log(loadingstate);

  const [formstate, setformstate] = useState({})
  // console.log(sendMail);

  const changeHandler = (e) => {
    const techName = document.getElementById('tech-title').innerText;
    setformstate({ ...formstate, [e.target.name]: e.target.value, techname: techName })
    console.log(formstate)
  }

  function submitHandler(e) {
    e.preventDefault()
    // const techName = document.getElementById('tech-title').innerText;

    setformstate(prev => ({ ...prev }));

    // console.log(techName)

    console.log(formstate);
    // axios.post('http://localhost:8000/', formstate);

    dispatch(sendMail(formstate))
    if (isLoading) {
      console.log('this is isLoading');

      setloadingstate(true)
    } else {
      console.log('this is else part');
      dispatch({ type: 'RESET_STATE' })
      setloadingstate(true)
    }
    // console.log(isLoading , "from submit")



    // sendMail(techName,formstate,setformstate)
  }




  return (

    <>
      {/* Services Page About Area end */}
      {/* How We Works start */}
      <section className="how-we-works-area pb-100 rpb-70 rel z-1">
        <div className="container"  >
          <div className="section-title mb-40 wow fadeInUp delay-0-2s" data-aos="fade-up">
            <span className="sub-title mb-15">Software Development Model</span>
            <h2>Simple Step Follow to Complete Work</h2>
            {/* <div class="text mt-30">
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum</p>
      </div> */}
          </div>
          <div className="row gap-90">
            <div className="col-xl-3 col-sm-6" data-aos="fade-up">
              <div className="work-step-item wow fadeInUp delay-0-2s">
                <span className="step-number">Step 01</span>
                <h4 className="title">Requirement Gathering</h4>
                {/* <div class="content">
                  <p>Vero eos et accusamus iusto odio disimos</p>
              </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-sm-6" data-aos="fade-down">
              <div className="work-step-item wow fadeInUp delay-0-3s">
                <span className="step-number">Step 02</span>
                <h4 className="title">
                  Design <br />
                  <br />{" "}
                </h4>
                {/* <div class="content">
                  <p>Quis autems eum iures reprehen voluptate</p>
              </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-sm-6" data-aos="fade-up">
              <div className="work-step-item wow fadeInUp delay-0-4s">
                <span className="step-number">Step 03</span>
                <h4 className="title">
                  Develop &amp; Test <br />
                  <br />
                </h4>
                {/* <div class="content">
                  <p>To take example which ever undertakes</p>
              </div> */}
              </div>
            </div>
            <div className="col-xl-3 col-sm-6" data-aos="fade-down">
              <div className="work-step-item arrow-none wow fadeInUp delay-0-5s">
                <span className="step-number">Step 04</span>
                <h4 className="title">
                  Deploy <br />
                  <br />
                </h4>
                {/* <div class="content">
                  <p>Avoids paine produces resultant pleasure</p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Mobile Apps</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Design &amp; Branding</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fa-regular fa-circle" />
                <b>Mobile Apps</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* FAQ's Area end */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-between">
            <div className="col-md-12">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15 ">Schedule a meeting</span>
                  <h3>
                    Schedule A Developer Interview and Get 3 Days Risk-Free
                    Trial
                  </h3>
                </div>
                <form
                  id="contactForm"
                  className="contactForm"
                  onSubmit={submitHandler}
                  name="contactForm"

                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={changeHandler}
                          value={formstate.name || ""}
                          className="form-control"
                          placeholder="Full Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i class="fa-solid fa-phone"></i>
                        </label>
                        <input
                          type="number"
                          id="phone_number"
                          name="phone_number"
                          onChange={changeHandler}
                          value={formstate.phone_number || ""}
                          className="form-control"
                          placeholder="Phone"
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={changeHandler}
                          value={formstate.email || ""}
                          className="form-control"
                          placeholder="Email Address"
                          required
                          data-error="Please enter your Email Address"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i class="fa-solid fa-message"></i>
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          required
                          data-error="Please enter your Message"
                          onChange={changeHandler}
                          value={formstate.message || ""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12 hire_Contact_Form ">
                      <div className="form-group pt-5 mb-0">
                        {
                          loadingstate ? <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div> : (
                            <button
                              type="submit"
                              className="theme-btn style-two w-100"
                            >
                              Drop an Enquiry
                              <i className="fa-solid fa-arrow-right"></i>
                            </button>
                          )
                        }

                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="hire_Email text-center m-20">
                        <span>
                          <a className href="mailto:contact@uptakeinfotech.com">
                            <i className="far fa-envelope" />
                            contact@uptakeinfotech.com
                          </a>
                        </span>
                      </div>
                      <div className="hire_Content text-center">
                        <p id="successGurantee">Your Success Is Guaranteed !</p>
                        <p className="successParagraph">
                          We accelerate the release of digital products and
                          guarantee your success
                        </p>
                        <p className="successParagraph">
                          We Use Slack, Jira &amp; GitHub for Accurate
                          Deployment and Effective Communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




export default OtherCommonSection