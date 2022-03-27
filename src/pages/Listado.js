import React, { useEffect } from 'react';

import { usePokemon } from '../hooks/usePokemon';

import { PokemonRow } from '../components/PokemonRow';

export const Listado = ({ txt_busqueda, handleListado }) => {  
  
  const { poke } = usePokemon({txt_busqueda}); 

  if(poke.length > 0){
    Load();
  }

  function Load() {
    handleListado(false);
  }

  return (
    <>  
   
    <div className="row">      
        {
          poke.map( poke => (
          <PokemonRow
          key = { poke.id } 
          poke = { poke }
          /> 
          ))         
        }
      </div>     
    
</>
  )
}
