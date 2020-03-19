import React, {Component} from 'react';
import { Card } from 'semantic-ui-react';

const Cards = () => (
    <div className="ui four cards">
    <div className="card">
          <div className="image">
          <img src="bmwrus.jpg" alt="space"></img>
          </div>
          <div className="extra">
              item:
            <div className="ui star rating" data-rating="4"></div>
          </div>
          <div className="extra">
              price:
            <div className="ui star rating" data-rating="4"></div>
          </div> 
    </div>
</div>
);
export default Cards;