import ItemDetails from '../item-details';
import {Record} from '../item-details';
import {withApiService} from '../hoc-helper';

const PersonDetails = (props) => {
    return (
        <ItemDetails 
        {...props}>
            <Record field="name" label="name" />
            <Record field="name_kanji" label="name_kanji" />
            <Record field="about" label="about" />
        </ItemDetails>
    );
};

const mapMethodsToProps = apiService => {
    return {
        getData: id => apiService.getPerson(id)
    };
}
export default withApiService(PersonDetails, mapMethodsToProps);