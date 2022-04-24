import { pokemonApi } from "./pokemonApi";

export const getFilter = async (txtFilter)  => {

    const resp = await pokemonApi.get(`http://localhost:8080/api/searchpokemon/?txtFilter=${ txtFilter }`);      
    return resp.data.result;  
} 
