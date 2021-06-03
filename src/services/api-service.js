
export default class ApiService {

    #baseUrl = 'https://api.jikan.moe/v3/';

    async getResourse(url){
        const res = await fetch(this.#baseUrl + url);
        if(res.status !== 200){
            throw new Error(`Error in fetch ${this.#baseUrl + url} with status ${res.status}`);
        }
        return await res.json();
    }

    getIdFromUrl(url){
        const match = url.match(/^.+\/(\d+)\/?.*$/);
        return match[1];
    }

    //Anime
    async getAnime(id){
        const data = await this.getResourse(`anime/${id}`);
        return this._transformateAnime(data);
    }

    _transformateAnime(data){ 
        const {
            title, score, 
            status, episodes,
            image_url: img,
            synopsis: description,
            url
        } = data;
        
        const id = this.getIdFromUrl(url);

        return {
          title, score,
          status, episodes,
          img,
          description,
          id
        };
    }

    async getAllAnime(count){
        const data = [];
        for(let i = 1; i <= count; i++){
            let val;
            try{
                val = await this.getResourse(`anime/${i}`);
            } catch(err){
                count++;
            }
            
            if(val)
                data.push(val);
        }   
        return data.map(this._transformateAnime.bind(this));
    }

    //Manga
    async getManga(id){
        const data = await this.getResourse(`manga/${id}`);
        return this._transformateManga(data);
    }

    _transformateManga(data){
        const {
            title, score, 
            status, chapters,
            image_url: img,
            synopsis: description,
            url
        } = data;
        
        const id = this.getIdFromUrl(url);

        return {
          title, score,
          status, chapters,
          img,
          description,
          id
        };
    }

    async getAllManga(count){
        const data = [];
        for(let i = 1; i <= count; i++){
            let val;
            try{
                val = await this.getResourse(`manga/${i}`);
            } catch(err){
                count++;
            }
            
            if(val)
                data.push(val);
        }   
        return data.map(this._transformateManga.bind(this));
    }

    //Person
    async getPerson(id){
        const data = await this.getResourse(`character/${id}`);
        return this._transformatePerson(data);
    }

    _transformatePerson(data){
        const {
            name,image_url: img,
            about, url,
            name_kanji
        } = data;
        
        const id = this.getIdFromUrl(url);

        return {
            name, name_kanji,
            img, about,
            id
        };
    }

    async getAllPerson(count){
        const data = [];
        for(let i = 1; i <= count; i++){
            let val;
            try{
                val = await this.getResourse(`character/${i}`);
            } catch(err){
                count++;
            }
            
            if(val)
                data.push(val);
        }   
        return data.map(this._transformatePerson.bind(this));
    }
}