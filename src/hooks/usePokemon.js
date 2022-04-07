import { useEffect, useState } from "react";
import { getFilter } from '../api/searchApi';

export const usePokemon = ({txtFilter}) => {
    
    const [poke, setPokes] = useState([]);

  useEffect(() => {    
      getPokemons(txtFilter);
  }, [txtFilter])
    
    const getPokemons = async(txtFilter) => {             
      const resp = await getFilter(txtFilter);
      setPokes(resp);       
    }
     
    return { 
        poke
    }
}

