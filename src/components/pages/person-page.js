import {PersonDetails, PersonList} from '../an-components';
import Row from '../row';
import {withRouter} from 'react-router-dom';

let PersonPage = ({history, match}) => {

    const {id} = match.params;

    return (
        <Row left={<PersonList itemId={54} onItemSelected={id => {
            history.push(id);
        }}/>}
        right={<PersonDetails itemId={id}/>}/>
    );
}

PersonPage = withRouter(PersonPage);

export {PersonPage};