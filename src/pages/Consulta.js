import React from 'react'

export const Consulta = () => {

  return (    
    <>
     <form>
     <div className="row col-lg-6 col-md-10 col-12">
       <div className="input-group mb-3">
        <input type="text" className="form-control " placeholder="Ingrese el nombre a búscar" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-success" type="button" id="button-addon2">Buscar</button>  
      </div>
     </div>
    </form>
    </>    
  )
}
