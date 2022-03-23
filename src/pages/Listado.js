import React from 'react';

import { usePokemon } from '../hooks/usePokemon';

import { PokemonRow } from '../components/PokemonRow';

export const Listado = () => {

  const { poke } = usePokemon('');  
  
  return (
    <>  
    <div className='mt-5'>Aquí va ir el listado de la busqueda

    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Imagen</th>
          <th scope="col">Nombre</th>
        </tr>
      </thead>
      <tbody>
        {
          poke.map( poke => (
          <PokemonRow
          key = { poke.id } 
          poke = { poke }
          /> 
          ))
        }
      </tbody>
    </table>
    
</div>
</>
  )
}
