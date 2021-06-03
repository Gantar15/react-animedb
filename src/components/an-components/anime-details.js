import ItemDetails from '../item-details';
import {Record} from '../item-details';
import {withApiService} from '../hoc-helper';

const AnimeDetails = (props) => {
    return (
        <ItemDetails 
        {...props}>
            <Record field="title" label="title" />
            <Record field="status" label="status" />
            <Record field="episodes" label="episodes" />
            <Record field="description" label="description" />
        </ItemDetails>
    );
};

const mapMethodsToProps = apiService => {
    return {
        getData: id => apiService.getAnime(id)
    };
}
export default withApiService(AnimeDetails, mapMethodsToProps);