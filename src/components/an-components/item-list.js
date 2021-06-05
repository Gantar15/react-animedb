import ItemList from '../item-list';
import manageData from '../hoc-helper'
import {withApiService} from '../hoc-helper';
import {withChildFunction} from '../hoc-helper';


const nameRender = ({name, name_kanji}) => {
    return <span>{name} ({name_kanji})</span>;
};
const titleRender = ({title}) => {
    return <span>{title}</span>;
};


const mapPersonMethodsToProps = apiService => {
    return {
        getData: count => apiService.getAllPerson(count)
    };
}
const mapMangaMethodsToProps = apiService => {
    return {
        getData: count => apiService.getAllManga(count)
    };
}
const mapAnimeMethodsToProps = apiService => {
    return {
        getData: count => apiService.getAllAnime(count)
    };
}


const AnimeList = withApiService(
    manageData(
        withChildFunction(ItemList, titleRender)),
    mapAnimeMethodsToProps
);
const MangaList = withApiService(
    manageData(
        withChildFunction(ItemList, titleRender)),
    mapMangaMethodsToProps
);
const PersonList = withApiService(
    manageData(
        withChildFunction(ItemList, nameRender)),
    mapPersonMethodsToProps
);

export{
    AnimeList,
    MangaList, 
    PersonList
};