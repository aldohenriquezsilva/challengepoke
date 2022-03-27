import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const usePokemon = ({txtBusqueda}) => {
    
    const [poke, setPokes] = useState([]);

  useEffect(() => {    
      getPokemons(txtBusqueda);
  }, [txtBusqueda])
    
    const getPokemons = async(txtBusqueda) => {             
      const resp = await pokemonApi.get(`http://localhost:8080/api/buscarpokemon/?txtBusqueda=${ txtBusqueda }`); 
      console.log(resp);
      setPokes(resp.data.result);           
    }
     
    return { 
        poke
    }
}

