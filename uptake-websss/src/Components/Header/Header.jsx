import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import Loader from "../LoadingPage/Loader";


function Header() {
  const [header, setheader] = useState(false);
  const [loading, setloading] = useState(false);
  const [togglenav, settogglenav] = useState(true)
  const [togglenavTech, settogglenavTech] = useState(true)
  const [frontendtoggle, setfrontendtoggle] = useState(true)
  const [forback, setforback] = useState(true)

   const [show, setshow] = useState(false)
  function toshow(){
    setshow(!show)
  }

  function forfront() {
    setfrontendtoggle(!frontendtoggle)

    if(!forback){
      setforback(true)
    }

  }

  function forbackend() {
    setforback(!forback)
    if(!frontendtoggle){
      setfrontendtoggle(true)
    }

  }

  function myservice() {
    console.log("set toggle nav")
    settogglenav(!togglenav)
    console.log(togglenav);
  }

  function myTechnologies() {
    console.log("set toggle nav")
    settogglenavTech(!togglenavTech)
    console.log(togglenav);
  }

  // scroll to top
  const handleNavClick = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  // header on scroll color change
  const scrollHeader = () => {
    if (window.scrollY >= 80) {
      setheader(true);
    } else {
      setheader(false);
    }
  };

  window.addEventListener("scroll", scrollHeader);
  const navto = useNavigate();
  function navigateto() {
    navto("/contact");
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
    window.scrollTo({ top: 0, behavior: "auto" });
  }


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <nav className="fixed-top" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-duration="500"
            data-aos-offset="0">
            <header className="main-header menu-absolute fixed-top">
              {/*Header-Upper*/}
              <div className={header ? "header-upper bdark" : "header-upper"}>
                <div className="container container-1620 clearfix">
                  <div className="header-inner rpy-10 rel d-flex align-items-center">
                    {/* <div className="logo-outer">
                      <div className="logo">
                        <Link
                          to="/"
                          id="uptake_infotech"
                          onClick={handleNavClick}
                        >
                          <span>UPTAKE</span>INFOTECH
                        </Link>
                      </div>
                    </div> */}
                    <div className="nav-outer ms-lg-auto clearfix">
                      {/* Main Menu */}
                      <nav class={header ? "navbar navbar-expand-lg navbg fixed-top" : "navbar navbar-expand-lg bg-transparent fixed-top"}>
              <div class="container">
                <Link class="navbar-brand" id="uptake_infotech" to="/" onClick={handleNavClick}>UPTAKE<br></br>INFOTECH</Link>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbar-content">
                  <i class="fas fa-stream text-white"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbar-content">
                  <div className="mx-auto"></div>
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="/about" onClick={handleNavClick}>About</Link>
                    </li>
                    <li class="nav-item dropdown">
                     
                        <Link class="nav-link services1" to="/services" onClick={handleNavClick}
                        >Services</Link>
                       
                        <div className="allmyserve">
                       <Link class="nav-link services2" to="/services" onClick={handleNavClick}
                       >Services 2</Link>  <span  class="services2" onClick={toshow}>+</span>
                       </div>
                       
                      
                      <ul class= {show ?  "dropdown-menu show shadow myfront" : "dropdown-menu shadow " }>
                        <li><Link class="dropdown-item" to="/uiux" onClick={handleNavClick}>UI/UX</Link></li>
                        <li><Link class="dropdown-item" to="/webdev"onClick={handleNavClick}>Web Development</Link></li>
                        <li><Link class="dropdown-item" to="/mobile"onClick={handleNavClick}>Mobile App Development</Link></li>
                      </ul>
                    
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/projects"onClick={handleNavClick}>Projects</Link>
                    </li>
                    <li class="nav-item dropdown">
                      <Link class="nav-link " to="#" data-bs-toggle="dropdown"
                        data-bs-auto-close="outside">Technologies +</Link>
                      <ul class="dropdown-menu shadow">
                        <li class="dropend">
                          <Link to="#" class="dropdown-item dropdown-toggle myfront" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside">Front-End</Link>
                          <ul class="dropdown-menu shadow myfront">
                            <li><Link class="dropdown-item" to="/javascript"onClick={handleNavClick}>JavaScript</Link></li>
                            <li><Link class="dropdown-item" to="/react"onClick={handleNavClick}> React JS</Link></li>
                            <li><Link class="dropdown-item" to="/reactnative"onClick={handleNavClick}> React Native</Link></li>
                            <li><Link class="dropdown-item" to="/angular"onClick={handleNavClick}> Angular</Link></li>
                            <li><Link class="dropdown-item" to="/vue"onClick={handleNavClick}> Vue</Link></li>
                            <li><Link class="dropdown-item" to="/bootstrap"onClick={handleNavClick}> Bootstrap</Link></li>
                          </ul>
                        </li>
                        <li class="dropend">
                          <Link to="#" class="dropdown-item dropdown-toggle myfront" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside">Back-End</Link>
                          <ul class="dropdown-menu shadow myfront">
                            <li><Link class="dropdown-item" to="/node" onClick={handleNavClick}> Node JS</Link></li>
                            <li><Link class="dropdown-item" to="/laravel" onClick={handleNavClick}> Laravel</Link></li>
                            <li><Link class="dropdown-item" to="/php" onClick={handleNavClick}> PHP</Link></li>
                            <li><Link class="dropdown-item" to="/python" onClick={handleNavClick}> Python</Link></li>
                          </ul>
                        </li>
                        <li><Link class="dropdown-item" to="/apis" onClick={handleNavClick}>API</Link></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/hiring" onClick={handleNavClick}>Hire Developers</Link>
                    </li>
                    <li className="">
                    <div class="menu-btns ">
                                            <Link to="/contact" onClick={handleNavClick} class="theme-btn style-two me-4">Let’s
                                                Talk <i class="fas fa-long-arrow-right"></i></Link>
                                        </div>
                    </li>


                  </ul>
                </div>
              </div>
            </nav>
                      {/* Main Menu End*/}
                      {/* Menu Button */}
                    </div>
                  </div>
                </div>
              </div>
              {/*End Header Upper*/}
            </header>
          </nav>
        </>
      )}
    </>
  );
}

export default Header;
