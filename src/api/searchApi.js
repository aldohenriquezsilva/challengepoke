import { pokemonApi } from "./pokemonApi";

export const getFilter = async (txtFilter)  => {

    const resp = await pokemonApi.get(`http://localhost:8080/api/searchpokemon/?txtFilter=${ txtFilter }`);
    console.log(resp);    
    return resp.data.result.data;  
} 
