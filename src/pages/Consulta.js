import React, { useState } from 'react'

const formulario = {
  txtBusqueda: ""
}

export const Consulta = ({handleSearch}) => {

  const [busqueda, setBusqueda] = useState(formulario); 

 const handleChange = (e) => {
   setBusqueda({ 
     ...busqueda,
     [e.target.name]: e.target.value
    });   

 }

 const handleSubmit = async (e) => {
   e.preventDefault();
   
   handleSearch(busqueda.txtBusqueda);
 }

 const onKeyPress = (evento) => {
  var regex = new RegExp("^[a-zA-Z ]+$");
  var key = String.fromCharCode(!evento.charCode ? evento.which : evento.charCode);
  if (!regex.test(key)) {
    evento.preventDefault();
    return false;
  }
 }

 

  return (
    <>
     <form className='form' onSubmit={ handleSubmit }>

      <div className="row text-center">
       <div className="input-group mb-3 text-center">
        <input type="text" className="form-control" id="txtBusqueda" name="txtBusqueda" 
        placeholder="Ingrese nombre del pokémon" aria-label="Recipient's username" 
        aria-describedby="button-addon2" onChange={ handleChange } value={ busqueda.txtBusqueda }
        maxLength="15"
        onKeyPress={ onKeyPress }/>
        <button className="btn btn-success" type="submit">Buscar</button>  
       </div>
      </div>
     </form>
    </>    
  )
}
