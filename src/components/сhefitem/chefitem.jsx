import React from "react";

import './chefitem.css';

const chefitem = ({ name, cena, opis}) =>(
    <div className="app__chefitem">
        <div className="app__chefitem-head">
            <div className="app__chefitem-name">
                <p className="p__cormorant" style={{ color: '#50c878' }}>{name}</p>
            </div>
            <div className="app__chefitem-dash" />
            <div className="app__chefitem-price">
                <p className="p__cormorant">{cena}</p>
            </div>
            </div>

            <div className="app__chefitem-sub">
            <p className="p__opensans" style={{ color: '#AAAAAA' }}>{opis}</p>
        </div>
  </div>
);

export default chefitem;