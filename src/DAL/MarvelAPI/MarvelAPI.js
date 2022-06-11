import useHtttp from "../../hooks/useHtttp";


const useMarvelAPI = () => {
    let { error, loading, request, clearError } = useHtttp();

    const _baseURL = 'https://gateway.marvel.com:443/v1/public/characters';
    const _apiKey = 'apikey=34f1a3219ea2ae0e4d07e8edc8e23bf5';

    const getAllCharcters = async (offset = 500) => {
        let res = await request(`${_baseURL}?limit=9&offset=${offset}&${_apiKey}`);
        return res;
    }

    const getCharacter = async (id) => {
        let res = await request(`${_baseURL}/${id}?limit=9&offset=500&${_apiKey}`);
        return _transformData(res);
    }

    const getAllComics = async (offset = 10000) => {
        let res = await request(`https://gateway.marvel.com:443/v1/public/comics?orderBy=-issueNumber&limit=8&offset=${offset}&apikey=34f1a3219ea2ae0e4d07e8edc8e23bf5`);
        return res;
    }

    const _transformData = (response) => {
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

    return { getAllCharcters, getCharacter, getAllComics, error, loading, clearError };
}

export default useMarvelAPI;