import { Component } from 'react';

import Header from '../header';
import RandomBox from '../random-box';
import ErrorThrower from '../error-thrower';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import {ApiServiceProvider} from '../api-service-context';
import ApiService from '../../services/api-service';

import {
    AnimeList,
    MangaList,
    PersonList,
    AnimeDetails,
    MangaDetails,
    PersonDetails
} from '../an-components';

import './app.css';


export default class App extends Component {

    apiService = new ApiService();

    state = {
        showRandomBox: true,
        selectedItem: null
    };

    componentDidCatch(err){
        console.log(err)
        this.setState({
            hasError: true
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    toggleRandomBox = () => {
        this.setState(currentState => {
            return {
                showRandomBox: !currentState.showRandomBox
            };
        });
    };

    render() {
        const randomBox = this.state.showRandomBox ? <RandomBox /> : null;

        return (
            <ApiServiceProvider value={this.apiService}>
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

                        <Row left={<PersonList itemId={54} onItemSelected={this.onItemSelected}/>} right={<PersonDetails itemId={this.state.selectedItem}/>}/>
                    </div>
                </ErrorBoundry>
            </ApiServiceProvider>
        );
    }
}