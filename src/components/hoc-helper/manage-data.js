import { Component } from 'react';
import Loader from '../loader/loader';

const manageData = (View) => {
  return class extends Component {
    state = {
      peopleList: null,
      data: null
    };

    componentDidMount = () => {
      this.props.getData(8)
        .then(data => {
          this.setState({
            data
          });
        })
        .catch(err => console.log(err));
    };

    render(){
      const {data} = this.state;

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