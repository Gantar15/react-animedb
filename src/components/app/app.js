import { Component } from 'react';

import Header from '../header';
import RandomBox from '../random-box';
import ErrorThrower from '../error-thrower';
import ErrorBoundry from '../error-boundry';

import {PersonPage, MangaPage, AnimePage} from '../pages';

import {ApiServiceProvider} from '../api-service-context';
import ApiService from '../../services/api-service';

import './app.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MangaDetails, PersonDetails, AnimeDetails} from '../an-components';


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

    render() {
        const randomBox = this.state.showRandomBox ? <RandomBox updateInterval={10000}/> : null;

        return (
            <ApiServiceProvider value={this.state.apiService}>
                <Router>
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

                            <Route path="/" exact={true} render={() => <h2>WELCOM TO ANIME</h2>}/>
                            <Route path="/person" exact component={PersonPage}/>
                            <Route path="/anime" exact component={AnimePage}/>
                            <Route path="/manga" exact component={MangaPage}/>
                            <Route path="/manga/:id" 
                            render={({match}) => {
                                const {id} = match.params;
                                return <MangaDetails itemId={id}/>;
                            }}/>
                            <Route path="/anime/:id" 
                            render={({match}) => {
                                const {id} = match.params;
                                return <AnimeDetails itemId={id}/>;
                            }}/>
                            <Route path="/person/:id" 
                            render={({match}) => {
                                const {id} = match.params;
                                return <PersonDetails itemId={id}/>;
                            }}/>
                        </div>
                    </ErrorBoundry>
                </Router>
            </ApiServiceProvider>
        );
    }
}