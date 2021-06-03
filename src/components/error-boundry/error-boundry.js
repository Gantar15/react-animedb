import { Component } from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';


export default class ErrorBoundry extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true 
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="page-body row card">
          <div className="col-md-6 offset-md-4">
            <ErrorIndicator />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
