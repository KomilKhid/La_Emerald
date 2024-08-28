import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'> 
    

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About us</h1>
        <p className='p__opensans'>Welcome to La Emerald, where culinary artistry meets exquisite dining. Nestled in the heart of Bukhara, La Emerald is a haven for those who appreciate the finer things in life. Our restaurant is a celebration of grande cuisine, where tradition and innovation come together to create an unforgettable gastronomic experience.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <p className='p__opensans'>La Emerald was born from a passion for culinary excellence and a desire to bring the traditions of grande cuisine to life. Founded in 2024, our restaurant has grown from a humble dream into a celebrated destination for fine dining. Inspired by the timeless elegance of classic French cuisine and enriched by the vibrant flavors of global influences, La Emerald has become a beacon of taste and sophistication in Bukhara. </p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
