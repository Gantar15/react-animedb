import {AnimeList} from '../an-components';
import {withRouter} from 'react-router-dom';


let AnimePage = ({history}) => {
    return (
        <AnimeList itemId={54} onItemSelected={itemId => {
            const newPath = `/anime/${itemId}`;
            history.push(newPath);
        }}/>
    );
};
AnimePage = withRouter(AnimePage);

export {AnimePage};