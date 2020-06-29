import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import { Parallax} from 'react-parallax';

const Testimonial = () => {
  return(
      <section id="testimonial">
        <Parallax bgImage={require('../../image/hero-darker.jpg')} strength={280} className="testimonial_area">
        <div className="container">
            <TestimonialSlider/>
        </div>
        </Parallax>
     </section>
  )
}
export default Testimonial;