import { Component } from "react";
import {MangaDetails, MangaList} from '../an-components';
import Row from '../row';

export class MangaPage extends Component{

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
            <Row left={<MangaList itemId={54} onItemSelected={this.onItemSelected}/>}
            right={<MangaDetails itemId={this.state.selectedItem}/>}/>
        );
    }
}