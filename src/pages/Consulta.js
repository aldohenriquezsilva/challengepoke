import React, { useState } from 'react'

import { pokemonApi } from "../api/pokemonApi";

import { usePokemon } from '../hooks/usePokemon';

export const Consulta = () => {

  const [busqueda, setBusqueda] = useState(null);

 const RealizarConsulta = async () => {
    let txt_busqueda = document.getElementById('txt_busqueda').value;
    console.log(txt_busqueda);
    const resp = await pokemonApi.post('http://localhost:8080/api/buscarpokemon/?txt_busqueda='+txt_busqueda);
    console.log(resp);


 }

  return (    
    <>
     <form className='form'>
      <div className="row col-lg-6 col-md-10 col-12">
       <div className="input-group mb-3">
        <input type="text" className="form-control" id='txt_busqueda' placeholder="Ingrese el nombre a búscar" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-success" type="button" id="button-addon2" onClick={RealizarConsulta}>Buscar</button>  
       </div>
      </div>
     </form>
    </>    
  )
}
