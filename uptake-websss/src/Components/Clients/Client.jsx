import React , {useRef} from 'react'
import sankalpLogo from "../../Images/client-logos/Sankalp_logo.png";
import saffron from "../../Images/client-logos/saffron_logo.png";
import sankalp from "../../Images/client-logos/sankalp.png";
import satoriLogo from "../../Images/client-logos/Satori-Logo-01.png";
import tgslogo from "../../Images/client-logos/TGSlogo.png";
import dubai from "../../Images/client-logos/sylvia-logo.png"
import tiffinmomLogo from "../../Images/client-logos/tiffinmom.png";
import workmate from "../../Images/client-logos/workmate-logo.png";
import dk from "../../Images/client-logos/DK.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Client() {
  const slider = useRef(null)

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="client-logo-area pt-130 rpt-100 pb-100 rpb-70"  >
        <div className="container" data-aos="fade-up"  data-aos-duration="2000">
          <div className="section-title text-center mb-60">
            <h4>Some Of Our Perstigious Clients</h4>
          </div>
          <div>
            <Slider ref={slider} {...settings} >
              <div className="">
                <a className="client-logo-item wow fadeInUp delay-0-3s" href>
                  <img src={sankalp} alt="Client Logo" />
                </a>
              </div>
              <div className="">
                <a className="client-logo-item wow fadeInUp delay-0-2s" href>
                  <img src={satoriLogo} alt="Client Logo" />
                </a>
              </div>
              <div className="">
                <a className="client-logo-item wow fadeInUp delay-0-5s" href>
                  <img src={tiffinmomLogo} alt="Client Logo" />
                </a>
              </div>
              <div className="">
                <a className="client-logo-item wow fadeInUp delay-0-2s" href>
                  <img src={tgslogo} alt="Client Logo" />
                </a>
              </div>
              <div className="">
                <a className="client-logo-item wow fadeInUp delay-0-2s" href>
                  <img src={dubai} alt="Client Logo" id='dubai' />
                </a>
              </div>
              <div className="">
                <a
                  className="client-logo-item wow fadeInUp delay-0-2s owl-logo-width"
                  
                >
                  <img src={dk} alt="Client Logo" id='dk' />
                </a>
              </div>
              <div className="">
                <a
                  className="client-logo-item wow fadeInUp delay-0-2s owl-logo-width"
                  href
                >
                  <img src={workmate} alt="Client Logo" id='wm' />
                </a>
              </div>
            </Slider>

            <div className="customSlidesbtns">
              <button id="btnback" onClick={() => slider.current.slickPrev()}>
                <i class="fa-solid fa-backward"></i>
              </button>
              <button id="btnforw" onClick={() => slider.current.slickNext()}>
                <i class="fa-solid fa-forward"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client