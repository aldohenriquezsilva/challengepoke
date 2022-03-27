import React from 'react';

import { usePokemon } from '../hooks/usePokemon';

import { PokemonRow } from '../components/PokemonRow';

export const Listado = ({ txtBusqueda, handleListado }) => {  
  
  const { poke } = usePokemon({txtBusqueda});

  Load();  

  function Load() {
    if(poke.length > 0 ){
    handleListado(false);
    }else if(poke.length == 0 && txtBusqueda === ''){
      handleListado(true);
    }else{
      handleListado(false);
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
