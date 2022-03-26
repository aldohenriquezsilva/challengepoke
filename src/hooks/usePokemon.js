import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemon = ({txt_busqueda}) => {
    
    const [poke, setPokes] = useState([]);

  useEffect(() => {    
      getPokemons(txt_busqueda);
  }, [poke])
    
    const getPokemons = async(txt_busqueda) => { 
      console.log('antes de enviar a la api',txt_busqueda);         
      const resp = await pokemonApi.post(`http://localhost:8080/api/buscarpokemon/?txt_busqueda=${ txt_busqueda }`);      
      setPokes(resp.data.result);      
    }
     
    return { 
        poke
    }
}

