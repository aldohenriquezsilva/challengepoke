import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemon = () => {
    
    const [poke, setPokes] = useState([]);

    useEffect(() => {
      getPokemons();
  }, [])
    
    const getPokemons = async(busqueda) => {    
      const resp = await pokemonApi.get('https://pokeapi.co/api/v2/pokemon/' + busqueda);   
      console.log(resp.data.results);
      setPokes(resp.data.results);  
    }
    
    return { 
        poke
    }
}
