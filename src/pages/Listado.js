import React from 'react';

import { usePokemon } from '../hooks/usePokemon';

import { PokemonRow } from '../components/PokemonRow';

export const List = ({ txtFilter, setCode , handleList }) => {  
  
  const { poke } = usePokemon({ txtFilter });
  var row = [];
  let code = setCode;
  Load();  

  function Load() {      
    if(poke.length == 0){
      handleList(true);
    }else{
      row = poke.data;
      code = poke.code;
      if(code == 0) {
        handleList(true);
      }else{
        handleList(false);
      }
    }

  }

  return (
    <>     
      <div className="row">      
        {
          row.map( poke => (
            <PokemonRow key = { poke.id } poke = { poke } /> 
          ))               
        }
        { 
          row.length == 0 && txtFilter !== '' &&
          <div className="alert alert-warning" role="alert">
            La búsqueda no encontró resultado
          </div>
        }
      </div>         
    </>
  )
}
