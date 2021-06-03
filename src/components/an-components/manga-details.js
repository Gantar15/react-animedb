import ItemDetails from '../item-details';
import {Record} from '../item-details';
import {withApiService} from '../hoc-helper';

const MangaDetails = (props) => {
    return (
        <ItemDetails
        {...props}>
            <Record field="title" label="title" />
            <Record field="score" label="score" />
            <Record field="status" label="status" />
            <Record field="chapters" label="chapters" />
            <Record field="description" label="description" />
        </ItemDetails>
    );
};

const mapMethodsToProps = apiService => {
    return {
        getData: id => apiService.getManga(id)
    };
}
export default withApiService(MangaDetails, mapMethodsToProps);