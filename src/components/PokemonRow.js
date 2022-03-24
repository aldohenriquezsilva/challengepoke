import React from 'react';

export const PokemonRow = ({ poke }) => {
  return (
    
        <tr>
            <td>{ poke.id }</td>
            <td>{ poke.name }</td>
            <td><img src={ poke.img } width="50"/></td>
           
        </tr>
  
  )
}
