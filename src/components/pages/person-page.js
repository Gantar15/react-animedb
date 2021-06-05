import { Component } from "react";
import {PersonDetails, PersonList} from '../an-components';
import Row from '../row';

export class PersonPage extends Component{

    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render(){
        return (
            <Row left={<PersonList itemId={54} onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails itemId={this.state.selectedItem}/>}/>
        );
    }
}