import React from 'react';

import { usePokemon } from '../hooks/usePokemon';

import { PokemonRow } from '../components/PokemonRow';

export const Listado = ({ txtBusqueda, handleList }) => {  
  
  const { poke } = usePokemon({txtBusqueda});

  Load();  

  function Load() {
    if(poke.length > 0 ){
      handleList(false);
    }else if(poke.length == 0 && txtBusqueda === ''){
      handleList(true);
    }else{
      handleList(false);
    }
  }

  return (
    <>     
      <div className="row">      
        {
          poke.map( poke => (
            <PokemonRow key = { poke.id } poke = { poke } /> 
          ))               
        }
        { poke.length == 0 && txtBusqueda !== '' &&
          <div className="alert alert-warning" role="alert">
            La búsqueda no encontró resultado
          </div>
        }
      </div>         
    </>
  )
}
