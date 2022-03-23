import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemon = (txt_busqueda) => {
    
    const [poke, setPokes] = useState([]);

    useEffect(() => {
      getPokemons(txt_busqueda);
  }, [])
    
    const getPokemons = async(txt_busqueda = "") => {    
     if(txt_busqueda != ""){
      const resp = await pokemonApi.post('http://localhost:8080/api/buscarpokemon/?txt_busqueda='+txt_busqueda);  
      const rep = [];    
      rep.push(resp.data.result);    
      setPokes(rep);
     }
    }
    
    return { 
        poke
    }
}

