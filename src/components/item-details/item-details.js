import React, {Component} from 'react';
import ApiService from '../../services/api-service';
import ErrorThrower from '../error-thrower';
import ErrorBoundry from '../error-boundry';
import Loader from '../loader/loader';

import './item-details.css';


const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item">
          <span className="term">{label}</span>
          <span>{item[field]}</span>
      </li>
  );
};
export {Record};


export default class ItemDetails extends Component{

    apiService = new ApiService();
  
    state = {
      item : null,
      loading: false
    };

    componentDidUpdate(prevProps){
      if(this.props.itemId !== prevProps.itemId)
        this.updateItem();
    }

    componentDidMount(){
      this.updateItem();
    }

    updateItem = () => {
      const { itemId, getData } = this.props;
      if(!itemId) return;

      this.setState({
        loading: true
      });
      getData(itemId)
        .then(item => {
          this.setState({
            item,
            loading: false
          });
        })
    }

    render(){
        if(this.state.loading){
          return (
            <div className="item-details card">
              <Loader />
            </div>
          );
        }

        if(!this.state.item){
          return (
            <div className="item-details card">
              <span>Select a item from list</span>
            </div>
          );
        }

        let {
            name,
            img,
        } = this.state.item;

        return (
          <ErrorBoundry>
            <div className="item-details card">
              <img className="item-image"
                src={img} />
      
              <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                  {
                    React.Children.map(this.props.children, child => {
                      return React.cloneElement(child, {item: this.state.item});
                    }) 
                  }
                  <li className="list-group-item">
                    <ErrorThrower />
                  </li>
                </ul>
              </div>
            </div>
          </ErrorBoundry>
        );
    }
}