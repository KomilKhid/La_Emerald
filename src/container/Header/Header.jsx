import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Experience the Emerald Essence" />
      <h1 className="app__header-h1">Your Gateway to Gourmet Excellence</h1>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.G} alt="header_img" />
    </div>
  </div>
);

export default Header;