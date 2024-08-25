import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'> 
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content-about">
        <h1 className='headtext__cormorant'>About us</h1>
        <img src={images.spoon} alt="" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque laudantium veniam! Quos maxime voluptatem aperiam facilis repudiandae repellat, possimus accusantium ipsa.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>

      <div className="app__aboutus-content-history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="" className='spoon__img' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eaque laudantium veniam! Quos maxime voluptatem aperiam facilis repudiandae repellat, possimus accusantium ipsa.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
