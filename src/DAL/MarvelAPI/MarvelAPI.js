class MarvelAPI {
    getResourse = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharcters = () => {
        return this.getResourse('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=500&apikey=34f1a3219ea2ae0e4d07e8edc8e23bf5');
    }

    getCharacter = (id) => {
        return this.getResourse(`https://gateway.marvel.com:443/v1/public/characters/${id}?limit=9&offset=500&apikey=34f1a3219ea2ae0e4d07e8edc8e23bf5`);
    }
}

export default MarvelAPI