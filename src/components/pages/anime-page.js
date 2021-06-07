import {AnimeList} from '../an-components';
import {withRouter} from 'react-router-dom';


let AnimePage = ({history}) => {
    return (
        <AnimeList itemId={54} onItemSelected={itemId => {
            history.push(itemId);
        }}/>
    );
};
AnimePage = withRouter(AnimePage);

export {AnimePage};