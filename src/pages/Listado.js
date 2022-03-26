import React from 'react';

import { usePokemon } from '../hooks/usePokemon';

import { PokemonRow } from '../components/PokemonRow';

export const Listado = ({ txt_busqueda }) => {  
  
  const { poke } = usePokemon({txt_busqueda}); 

  return (
    <>  
    <div className='mt-5'>Aquí va ir el listado de la busqueda
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
    </div>
</>
  )
}
