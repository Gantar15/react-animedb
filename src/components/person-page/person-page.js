import {Component} from 'react';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './person-page.css';

export default class PersonPage extends Component{

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch(){
    this.setState({
      hasError: true
    });
  }

  onItemSelected = (id) => {
    this.setState({
        selectedPerson: id
    });
  };

  render(){
    if(this.state.hasError){
      return (
        <div className="page-body">
          <div>
            <ErrorIndicator />
          </div>
        </div>
      );
    }

    return (
      <div className="page-body">
        <div>
            <ItemList onItemSelected={this.onItemSelected}/>
        </div>
        <div>
            <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    );
  }
}