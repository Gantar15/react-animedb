import {Component} from 'react';

import './anime-details.css';

export default class AnimeDetails extends Component{

    render(){
        return (
            <div className="anime-details card">
            <img className="anime-image"
              src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />
    
            <div className="card-body">
              <h4>Tokiyo revengers</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Gender</span>
                  <span>male</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Birth Year</span>
                  <span>43</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Eye Color</span>
                  <span>red</span>
                </li>
              </ul>
            </div>
          </div>
        );
    }
}