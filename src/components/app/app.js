import { Component } from 'react';

import Header from '../header';
import RandomBox from '../random-box';
import ErrorThrower from '../error-thrower';
import ErrorBoundry from '../error-boundry';

import {PersonPage, MangaPage,
    AnimePage, SecretPage,
    LoginPage} from '../pages';

import {ApiServiceProvider} from '../api-service-context';
import ApiService from '../../services/api-service';

import './app.css';

import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {AnimeDetails} from '../an-components';


export default class App extends Component {

    state = {
        showRandomBox: true,
        apiService: new ApiService(),
        isLogginIn: false
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

    onLogin = () => {
        this.setState({
            isLogginIn: true
        });
    };  

    render() {
        const randomBox = this.state.showRandomBox ? <RandomBox updateInterval={10000}/> : null;
        const {isLogginIn} = this.state;

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

                            <Switch>
                                <Route path="/" exact={true} render={() => <h2>WELCOM TO ANIME</h2>}/>
                                <Route path="/person/:id?" component={PersonPage}/>
                                <Route path="/manga" component={MangaPage}/>
                                <Route path="/anime" exact component={AnimePage}/>
                                <Route path="/anime/:id" 
                                render={({match}) => {
                                    const {id} = match.params;
                                    return <AnimeDetails itemId={id}/>;
                                }}/>
                                <Route path="/login" render={() => {
                                    return <LoginPage 
                                        isLogginIn={isLogginIn}
                                        onLogin={this.onLogin}/>;
                                }}/>
                                <Route path="/secret" render={() => {
                                    return <SecretPage 
                                        isLogginIn={isLogginIn}/>;
                                }}/>
                                
                                <Redirect to="/"/>
                            </Switch>
                        </div>
                    </ErrorBoundry>
                </Router>
            </ApiServiceProvider>
        );
    }
}