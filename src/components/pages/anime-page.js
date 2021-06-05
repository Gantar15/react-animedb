import { Component } from "react";
import {AnimeDetails, AnimeList} from '../an-components';
import Row from '../row';

export class AnimePage extends Component{

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
            <Row left={<AnimeList itemId={54} onItemSelected={this.onItemSelected}/>}
            right={<AnimeDetails itemId={this.state.selectedItem}/>}/>
        );
    }
}