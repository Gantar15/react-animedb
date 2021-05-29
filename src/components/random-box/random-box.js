import React, { Component } from 'react';
import ApiService from '../../services/api-service';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';

import './random-box.css';


export default class RandomBox extends Component {

  service = new ApiService();

  state = {
    anime: {
      title: null,
      score: null,
      status: null,
      episodes: null,
      img: null,
      description: null
    },
    loading: true,
    error: false
  }

  constructor(){
    super();
  }

  //Компонент инициализирован и отрендерен на странице
  componentDidMount(){
    this.update();
    this.interval = setInterval(() => this.update(), 15000);
  }

  //Компонент удаляется
  componentWillUnmount(){
    clearInterval(this.interval); 
  }

  onAnimeLoaded = data => {
    this.setState({
      anime: data,
      loading: false,
      error: false
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  }

  update = () => {
    const id = ~~(Math.random() * 4282);
    this.service.getAnime(id)
      .then(this.onAnimeLoaded)
      .catch(this.onError);
  }

  render() {
    this.service.getPerson(3);
    const { anime, loading, error } = this.state;

    const errorMessage = error ? <ErrorIndicator/> : null;
    const loader = loading ? <Loader/> : null;
    const content = error || loading ? null : <AnimetView anime={anime}/>;

    return (
      <div className="random-box d-flex card-body bg-dark">
        {errorMessage}
        {loader}
        {content}
      </div>
    );
  }
}

const AnimetView = ({anime}) => {
  const { title, score, 
    status, episodes, 
    img, description } = anime;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}