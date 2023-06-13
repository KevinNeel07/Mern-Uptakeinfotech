import React from 'react'
import myclient1 from "../../Images/testimonials/client-1.jpg";
import myclient2 from "../../Images/testimonials/client-2.jpg";
import myclient3 from "../../Images/testimonials/client-3.jpg";
import myclient4 from "../../Images/testimonials/client-4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonial() {
   const settings = {
     dots: true,
     infinite: true,
     autoplay: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };
  return (
    <div className="col-lg-6 testimonial-content">
      <div className="testimonial-one-right-part wow fadeInLeft delay-0-2s">
        <div className="testimonials-active" data-aos="fade-left">
          <Slider {...settings} className='mytestimonialslider'>
            <div className="testimonial-item">
              <div className="author-speech">
                <p>
                  <span className="quote">“</span>Everything we wanted done,
                  they did without question. They worked very hard to deliver
                  what we wanted<span className="quote right-quote">“</span>
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={myclient1} alt="Author Image" />
                  </div>
                  <div className="author-info">
                    <h4>Shyam Parmar.</h4>
                    <span className="designation">
                      CEO and Managing Director
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="author-speech">
                <p>
                  <span className="quote">“</span>The levels of communication
                  and availability were particularly impressive.
                  <span className="quote right-quote">“</span>
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={myclient2} alt="Author Image" />
                  </div>
                  <div className="author-info">
                    <h4>Neel Patel.</h4>
                    <span className="designation">Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="author-speech">
                <p>
                  <span className="quote">“</span>They have a good, professional
                  project manager. He helps to ensure we receive good quality
                  work.<span className="quote right-quote">“</span>
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={myclient3} alt="Author Image" />
                  </div>
                  <div className="author-info">
                    <h4>Jay Patel</h4>
                    <span className="designation">Managing Director</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="author-speech">
                <p>
                  <span className="quote">“</span>Uptake is flexible and offers
                  prompt replies to our questions
                  <span className="quote right-quote">“</span>
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={myclient4} alt="Author Image" />
                  </div>
                  <div className="author-info">
                    <h4>ashish agarwal</h4>
                    <span className="designation">CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        {/* <div className="testimonial-controls mt-75 rmt-40">
          <button className="testimonial-prev">
            <i className="far fa-chevron-left" />
          </button>
          <div className="testimonial-dots" />
          <button className="testimonial-next">
            <i className="far fa-chevron-right" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonial