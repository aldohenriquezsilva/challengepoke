import React, { useState } from 'react'

import { pokemonApi } from "../api/pokemonApi";

const Formulario = {
  txt_busqueda: ""
}

export const Consulta = ({handleSearch}) => {

  const [busqueda, setBusqueda] = useState(Formulario);

 const RealizarConsulta = async () => {
    let txt_busqueda = document.getElementById('txt_busqueda').value;    
    const resp = await pokemonApi.post(`http://localhost:8080/api/buscarpokemon/?txt_busqueda=${txt_busqueda}`);
    console.log(resp.data.result);
 }

 const handleChange = (e) => {
   setBusqueda({ 
     ...busqueda,
     [e.target.name]: e.target.value
    });
 }

 const handleSubmit = async (e) => {
   e.preventDefault();
   //const resp = await pokemonApi.post(`http://localhost:8080/api/buscarpokemon/?txt_busqueda=${busqueda.txt_busqueda}`);
   handleSearch(busqueda.txt_busqueda);
 }

  return (    
    <>
     <form className='form' onSubmit={ handleSubmit }>
      <div className="row col-lg-6 col-md-10 col-12">
       <div className="input-group mb-3">
        <input type="text" className="form-control" id="txt_busqueda" name="txt_busqueda" placeholder="Ingrese el nombre a búscar" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={ handleChange } value={ busqueda.txt_busqueda }/>
        <button className="btn btn-success" type="submit">Buscar</button>  
       </div>
      </div>
     </form>
    </>    
  )
}
