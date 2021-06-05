import { Component } from 'react';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator';

const manageData = (View) => {
  return class extends Component {
    state = {
      peopleList: null,
      data: null,
      error: false
    };

    componentDidUpdate = (prevProps) => {
      if(this.props.getData !== prevProps.getData)
        this.update();
    }

    componentDidMount = () => {
      this.update();
    };

    update(){
      this.setState({
        error: false
      });
      this.props.getData(8)
        .then(data => {
          this.setState({
            data
          });
        })
        .catch(() => {
          this.setState({
            error: true
          });
        });
    }

    render(){
      const {data, error} = this.state;

      if(error){
        return (
          <ul className="item-list list-group">
            <ErrorIndicator />
          </ul>
        );
      }
      if(!data){
        return (
          <ul className="item-list list-group">
            <Loader />
          </ul>
        );
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default manageData;