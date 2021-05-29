import {Component} from 'react';
import ApiService from '../../services/api-service';
import ErrorThrower from '../error-thrower';
import Loader from '../loader/loader';

import './person-details.css';

export default class PersonDetails extends Component{

    apiService = new ApiService();
  
    state = {
      person : null,
      loading: false
    };

    componentDidUpdate(prevProps){
      if(this.props.personId !== prevProps.personId)
        this.updatePerson();
    }

    updatePerson = () => {
      const { personId } = this.props;
      if(!personId) return;

      this.setState({
        loading: true
      });
      this.apiService.getPerson(personId)
        .then(person => {
          this.setState({
            person,
            loading: false
          });
        })
    }

    render(){
        if(this.state.loading){
          return (
            <div className="person-details card">
              <Loader />
            </div>
          );
        }

        if(!this.state.person){
          return (
            <div className="person-details card">
              <span>Select a person from list</span>
            </div>
          );
        }

        let {
            name, birthday,
            img, about, id
        } = this.state.person;

        const dateSt = Date.parse(birthday);
        if(dateSt){
          const formatter = new Intl.DateTimeFormat('ru', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
          birthday = formatter.format();
        }

        return (
          <div className="person-details card">
            <img className="person-image"
              src={img} />
    
            <div className="card-body">
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Birthday</span>
                  <span>{birthday}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">About</span>
                  <span>{about}</span>
                </li>
                <li className="list-group-item">
                  <ErrorThrower />
                </li>
              </ul>
            </div>
          </div>
        );
    }
}