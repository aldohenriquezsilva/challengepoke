import React from 'react';

export const PokemonRow = ({ poke }) => {
  return (   

    <div className="col-sm-4 col-lg-4 col-md-4 col-4 mt-2">
        <div className="card">
          <img src={ poke.img } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ poke.name }</h5>
            <h6>#{ poke.id }</h6>           
          </div> 
        </div>  
      </div>  
  )
}
