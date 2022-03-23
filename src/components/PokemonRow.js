import React from 'react';

export const PokemonRow = ({ poke }) => {
  return (
    
        <tr>
            <td>{ poke.id }</td>
            <td><img src={poke.sprites.front_default} width="50"/></td>
            <td>{ poke.name }</td>
        </tr>
  
  )
}
