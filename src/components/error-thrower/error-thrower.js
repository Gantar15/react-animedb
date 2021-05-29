import {Component} from 'react';

import './error-thrower.css';


export default class ErrorThrower extends Component{
    state = {
        isErrorExist: false
    };

    render(){
        if(this.state.isErrorExist){
            this.foo();
        }

        return (
            <button type="button" className="error-thrower btn btn-danger"
            onClick = {() => this.setState({isErrorExist: true})}>
                Throw error
            </button>
        );
    }
}