import axios, { AxiosResponse } from 'axios';

export default {
    
    async getCharacters(): Promise<AxiosResponse> {
        return axios.get(`https://rickandmortyapi.com/api/character`).then(data => data);
    },

}
