import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemon = (txt_busqueda) => {
    
    const [poke, setPokes] = useState([]);

    useEffect(() => {
      getPokemons(txt_busqueda);
  }, [])
    
    const getPokemons = async(txt_busqueda = "") => {    
    
      const resp = await pokemonApi.post('http://localhost:8080/api/buscarpokemon/?txt_busqueda='+txt_busqueda);  
      const rep = [];
      
      console.log(resp.data.result);

     for(var i = 0 ; i < resp.data.result.results.length; i++) {
            const url = resp.data.result.results[i].url;
            const result = await pokemonApi.get(url);

            console.log(result.data.id);

            const Pokemon = {
                id: result.data.id,
                name: resp.data.result.results[i].name,
                img: result.data.sprites.front_default
            }
            
            rep.push(Pokemon);

      }        

      setPokes(rep);
     
    }
    
    return { 
        poke
    }
}

