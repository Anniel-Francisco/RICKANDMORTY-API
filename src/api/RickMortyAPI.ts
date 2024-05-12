import axios from 'axios';

export default {
    
    async getCharacters(query: string){
        return axios.get(`https://rickandmortyapi.com/api/character${query}`).then(data => data);
    },
    
    async getLocations(query: string){
        return axios.get(`https://rickandmortyapi.com/api/location${query}`).then((data) => data);
    }
}
