import { moviesOptions } from './options';

class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }
  
    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(res);
    }

    getBeatfilmMovies() {
        return fetch(`${this.url}`, {
            headers: {
              ...this.headers,
            },
        }).then(this._checkResponse);
    }
}

const moviesApi = new Api(moviesOptions);

export default moviesApi;