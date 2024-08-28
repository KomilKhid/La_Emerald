import React from 'react';

import { SubHeading, chefitem } from '../../components';
import { data, images } from '../../constants';
import './Chef.css';

const chef = () => (
    <div className="app__specialChef flex__center section__padding app__bg">
    <div className="app__specialChef-title">
      <SubHeading title="Savor the Essence of Culinary Mastery" />
      <h1 className="headtext__cormorant">Chef's Exclusive Creations</h1>
    </div>

    <div className="app__specialChef-menu">
      <div className="app__specialChef-menu_wine  flex__center">
        <p className="app__specialChef-menu_heading">Appetizers</p>
        <div className="app__specialChef_menu_items">
          {data.appetizers.map((appetizer, index) => (
            <div className="app__chefitem">
            <div className="app__chefitem-head">
                <div className="app__chefitem-name">
                    <p className="p__cormorant" style={{ color: '#50c878' }}>{appetizer.name}</p>
                </div>
                <div className="app__chefitem-dash" />
                <div className="app__chefitem-price">
                    <p className="p__cormorant">{appetizer.cena}</p>
                </div>
                </div>
    
                <div className="app__chefitem-sub">
                <p className="p__opensans" style={{ color: '#AAAAAA' }}>{appetizer.opis}</p>
            </div>
      </div>
          ))}
        </div>
      </div>

      <div className="app__specialChef-menu_img">
        <img src={images.sign} alt="menu__img" />
      </div>

      <div className="app__specialChef-menu_cocktails  flex__center">
        <p className="app__specialChef-menu_heading">Main Courses</p>
        <div className="app__specialChef_menu_items">
          {data.courses.map((course, index) => (
            <div className="app__chefitem">
            <div className="app__chefitem-head">
                <div className="app__chefitem-name">
                    <p className="p__cormorant" style={{ color: '#50c878' }}>{course.name}</p>
                </div>
                <div className="app__chefitem-dash" />
                <div className="app__chefitem-price">
                    <p className="p__cormorant">{course.cena}</p>
                </div>
                </div>
    
                <div className="app__chefitem-sub">
                <p className="p__opensans" style={{ color: '#AAAAAA' }}>{course.opis}</p>
            </div>
      </div>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default chef;