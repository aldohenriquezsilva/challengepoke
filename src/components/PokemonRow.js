import React from 'react';

export const PokemonRow = ({ poke }) => {
  return (   

    <div className="col-sm-2 col-lg-2 col-md-2 col-2 mt-2">
        <div className="card">
          <img src={ poke.img } className="card-img-top" alt={ poke.name } />
          <hr/>
          <div className="card-body">
            <h5 className="card-title">{ poke.name }</h5>
            <h6>#{ poke.id }</h6>           
          </div> 
        </div>  
      </div>  
  )
}
