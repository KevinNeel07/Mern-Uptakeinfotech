import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import hero2bg from "../../Images/hero/hero-two-bg.png"
import { Link } from 'react-router-dom';
import Loader from "../LoadingPage/Loader"
import axios from 'axios'

import { sendMail } from '../../actions/action';
function Contact() {
  const [formstate, setformstate] = useState({})
  const dispatch = useDispatch()
  const {isLoading , email } = useSelector(state => ({...state.mail}))
  
  useEffect(() => {
    if (loadingstate) {
      setloadingstate(false)
    }
  }, [isLoading])
  
  const [loadingstate, setloadingstate] = useState()
  const changeHandler = (e) => {
    setformstate({ ...formstate, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(formstate);
    // axios.post('http://localhost:8000/', formstate);
    
    dispatch(sendMail(formstate))
    if (isLoading) {
      setloadingstate(true)
    }
    console.log(isLoading , "from submit")

    

    // console.log("message sent")
    // console.log(formstate)
    // const config = {
    //   SecureToken : "e0b94b0a-ae90-49d5-b200-d3828f181b04",
    //   To : "uptakeenquiry@gmail.com",
    //   From : "uptakeenquiry@gmail.com",
    //   Subject : "Enquiry",
    //   Body : `Username : ${formstate.name}<br>
    //           Contact number : ${formstate.phone_number} <br>
    //           Email address: ${formstate.email} <br>
    //           User Query : ${formstate.message}`
    // }



    // if (window.Email) {
    //   window.Email.send(config).then(() => {
    //     setformstate("")
    //   })
    // }
  }



  return (
    <>
    {
      loadingstate ? (
       <Loader/>
      ):(<div className="page-wrapper">
      {/* Page Banner Start */}
      <section
        className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
        style={{ backgroundImage: `url(${hero2bg})` }}
      >
        <div className="container" data-aos="fade-up">
          <div className="banner-inner rpt-10">
            <h2 className="page-title wow fadeInUp delay-0-2s">Contact</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center wow fadeInUp delay-0-4s">
                <li className="">
                  <Link to="/">Home &nbsp;</Link>
                </li>

                <li className="breadcrumb-item">
                  <i
                    class="fa-solid fa-chevron-right"
                    style={{ color: "white" }}
                  ></i>
                  &nbsp; Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10" data-aos="fade-right">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contact Us</span>
                      <h2>Ready to Work On Your Next Projects</h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30" data-aos="fade-right">
                  <div className="col-sm-8 col-md-8">
                    <div className="our-location-address mb-40">
                      <h5>Ahmedabad, Gujurat</h5>
                      <p>
                        Navjeevan Press Road, Near Karaka Building, Muslim
                        Society, Navrangpura, Ahmedabad, Gujarat 380009
                      </p>
                      <a
                        className="mailto"
                        href="mailto:contact@uptakeinfotech.com"
                      >
                        <i className="fas fa-envelope" />
                        contact@uptakeinfotech.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+91 9726373894">
                        <i class="fa-solid fa-phone"></i> +91 9726373894
                      </a>
                    </div>
                  </div>
                </div>
                <h4 data-aos="fade-right">Follow Us</h4>
                <div className="social-style-two pt-15" data-aos="fade-right">
                  <a
                    href="https://www.facebook.com/UptakeInfotech"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.instagram.com/uptakeinfotech"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/uptake-infotech"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6" data-aos="fade-left">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Get Free Quote</span>
                  <h3>Drop Us a Message</h3>
                </div>
                <form
                  id="contactForm"
                  className="contactForm"
                  name="contactForm"
                  onSubmit={submitHandler}
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formstate.name || ""}
                          className="form-control"
                          onChange={changeHandler}
                          placeholder="Full Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i class="fa-solid fa-phone"></i>
                        </label>
                        <input
                          type="number"
                          id="phone_number"
                          name="phone_number"
                          value={formstate.phone_number || ""}
                          className="form-control"
                          placeholder="Phone"
                          onChange={changeHandler}
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i class="fa-solid fa-envelope"></i>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onChange={changeHandler}
                          className="form-control"
                          value={formstate.email || ""}
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
                          <i class="fa-solid fa-pencil"></i>
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          onChange={changeHandler}
                          value={formstate.message || ""}
                          required
                          data-error="Please enter your Message"

                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          id="submit-button"
                          name="form_btn"
                          className="theme-btn style-two w-100"
                        >
                          Drop an Enquiry
                          <i className="fa-solid fa-arrow-right"></i>
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s" data-aos="fade-up">
        <div className="container-fluid">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29374.122037519635!2d72.53212123096235!3d23.032389836662407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854310b186e9%3A0xc2ff10907f8de50c!2sUptake%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1682517575276!5m2!1sen!2sin"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>)
    }
    
    </>
  );
}

export default Contact