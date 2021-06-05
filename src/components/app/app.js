import { Component } from 'react';

import Header from '../header';
import RandomBox from '../random-box';
import ErrorThrower from '../error-thrower';
import ErrorBoundry from '../error-boundry';

import {PersonPage} from '../pages';

import {ApiServiceProvider} from '../api-service-context';
import ApiService from '../../services/api-service';

import './app.css';


export default class App extends Component {

    state = {
        showRandomBox: true,
        apiService: new ApiService()
    };

    componentDidCatch(err){
        console.log(err)
        this.setState({
            hasError: true
        });
    }

    toggleRandomBox = () => {
        this.setState(currentState => {
            return {
                showRandomBox: !currentState.showRandomBox
            };
        });
    };

    changeApiService = apiService => {
        this.state();
    }

    render() {
        const randomBox = this.state.showRandomBox ? <RandomBox updateInterval={10000}/> : null;

        return (
            <ApiServiceProvider value={this.state.apiService}>
                <ErrorBoundry>
                    <div className="app">
                        <Header />
                        {randomBox}
                        <div className='buttons-block'>
                            <button type="button" className="toggle-random-box btn btn-light"
                                onClick={this.toggleRandomBox}>
                                    Toggle random anime
                            </button>
                            <ErrorThrower />
                        </div> 

                        <PersonPage />
                    </div>
                </ErrorBoundry>
            </ApiServiceProvider>
        );
    }
}