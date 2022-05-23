const _baseURL = 'https://gateway.marvel.com:443/v1/public/characters';
const _apiKey = 'limit=9&offset=500&apikey=34f1a3219ea2ae0e4d07e8edc8e23bf5';

class MarvelAPI {
    getResourse = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharcters = async (offset = 500) => {
        return await this.getResourse(`${_baseURL}?limit=9&offset=${offset}&apikey=34f1a3219ea2ae0e4d07e8edc8e23bf5`);
    }

    getCharacter = async (id) => {
        let res = await this.getResourse(`${_baseURL}/${id}?${_apiKey}`);
        return this._transformData(res);
    }

    _transformData = (response) => {
        return {
            id: response.data.results[0].id,
            name: response.data.results[0].name,
            description: response.data.results[0].description,
            modified: response.data.results[0].modified,
            thumbnail: response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension,
            wiki: response.data.results[0].urls[1].url,
            comics: response.data.results[0].comics
        }
    }
}

export default MarvelAPI