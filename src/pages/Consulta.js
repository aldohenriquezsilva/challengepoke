import React, { useState } from 'react'

const form = {
  txtFilter: ""
}

export const Form = ({handleSearch}) => {

  const [search, setSearch] = useState(form); 

 const handleChange = (e) => {
   setSearch({ 
     ...search,
     [e.target.name]: e.target.value
    }); 
 }

 const handleSubmit = async (e) => {
   e.preventDefault();
   
   handleSearch(search.txtFilter);
 }

 const onKeyPress = (event) => {
  var regex = new RegExp("^[a-zA-Z -]+$");
  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
 }
 

  return (
    <>
     <form className='form' onSubmit={ handleSubmit }>

      <div className="row text-center">
       <div className="input-group mb-3 text-center">
        <input type="text" className="form-control" id="txtFilter" name="txtFilter" 
        placeholder="Ingrese nombre del pokémon" aria-label="Recipient's username" 
        aria-describedby="button-addon2" onChange={ handleChange } value={ search.txtFilter }
        maxLength="15"
        onKeyPress={ onKeyPress }/>
        <button className="btn btn-success" type="submit">Buscar</button>  
       </div>
      </div>
     </form>
    </>    
  )
}
