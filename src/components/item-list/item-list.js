import { Component } from 'react';
import ApiService from '../../services/api-service';
import Loader from '../loader/loader';

import './item-list.css';

export default class ItemList extends Component {

  state = {
    peopleList: null
  };

  apiService = new ApiService();

  componentDidMount = () => {
    this.apiService.getAllPerson(8)
      .then(peopleList => {
        this.setState({
          peopleList
        });
      })
      .catch(err => console.log(err));
  };

  renderItems(arr){
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {
    const {peopleList} = this.state;

    if(!peopleList){
      return (
        <ul className="item-list list-group">
          <Loader />
        </ul>
      );
    }

    return (
      <ul className="item-list list-group">
        {this.renderItems(peopleList)}
      </ul>
    );
  }
}
