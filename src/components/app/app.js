import Header from '../header';
import RandomBox from '../random-box';
import ErrorIndicator from '../error-indicator';
import ErrorThrower from '../error-thrower';
import PersonPage from '../person-page';

import './app.css';
import { Component } from 'react';

export default class App extends Component {

    state = {
        showRandomBox: true,
        selectedPerson: null,
        hasError: false
    };

    componentDidCatch(err){
        console.log(err)
        this.setState({
            hasError: true
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id
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

        if(this.state.hasError){
            return (
                <ErrorIndicator />
            );
        }

        return (
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
        );
    }
}