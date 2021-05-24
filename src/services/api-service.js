
export default class ApiService {

    #baseUrl = 'https://api.jikan.moe/v3/';

    async getResourse(url){
        const res = await fetch(this.#baseUrl + url);
        if(res.status !== 200){
            throw new Error(`Error in fetch ${this.#baseUrl + url} with status ${res.status}`);
        }
        return await res.json();
    }

    async getAnime(id){
        const data = await this.getResourse(`anime/${id}`);
        return this._transfotmateAnime(data);
    }

    _transfotmateAnime(data){ 
        const {
            title, score, 
            status, episodes,
            image_url: img,
            synopsis: description
        } = data;
        
        return {
          title, score,
          status, episodes,
          img,
          description
        };
    }

    async getManga(id){
        const data = await this.getResourse(`manga/${id}`);
        return this._transformateManga(data);
    }

    _transformateManga(data){
        const {
            title, score, 
            status, chapters,
            image_url: img,
            synopsis: description
        } = data;
        
        return {
          title, score,
          status, chapters,
          img,
          description
        };
    }

    async getPerson(id){
        const data = await this.getResourse(`person/${id}`);
        return this._transformatePerson(data);
    }

    _transformatePerson(data){
        const {
            name, birthday,
            image_url: img, about
        } = data;
        
        return {
            name, birthday,
            img, about
        };
    }
}