import React from 'react';
import home1 from '../img/home1.png'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            We work to make
          </div>
          <div className="hide">
            your <span>dreams</span> come
          </div>
          <div className="hide">
          true.
        </div>
          <p>Contact us for any photography or videography ideas that you have. We
            have professionals with amazing skills to help you achieve it.</p>
        </div>
        <button>Contact us</button>
        <div className="image">
          <img src={home1} alt='photografi man'/>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
