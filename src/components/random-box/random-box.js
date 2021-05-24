import { Component } from 'react';
import ApiService from '../../services/api-service';

import './random-box.css';

export default class RandomBox extends Component {

  service = new ApiService();

  state = {
    title: null,
    score: null,
    status: null,
    episodes: null,
    img: null,
    description: null
  }

  constructor(){
    super();
    this.update();
  }

  update(){
    const id = ~~(Math.random() * 4282);
    this.service.getAnime(id)
      .then(data => {
        this.setState(data);
      })
      .catch(() => {
        this.update();
      });
  }

  render() {
    this.service.getPerson(3);
    const {title, score, 
      status, episodes, 
      img, description} = this.state;

    return (
      <div className="random-box d-flex card-body bg-dark">
        <div className="random-box-flexer d-flex">
          <img className="random-image"
              src={img} />
          <div>
            <h4>{title}</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Score</span>
                <span>{score}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Status</span>
                <span>{status}</span>
              </li>
              <li className="list-group-item">
                <span className="term">Episodes</span>
                <span>{episodes}</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="description">
            {description}
          </p>
      </div>
    );
  }
}
