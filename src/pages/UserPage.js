import React, { useEffect, useState } from "react";

import { Consulta } from "./Consulta";
import { Listado } from "./Listado";
import { Load } from "./Load";

export const UserPage = () => {

  const [busqueda, setBusqueda] = useState("");  
  const [load, setLoad] = useState(false);  

  useEffect(() => {
    if(busqueda === "") return;
    setLoad(load);  
  },[busqueda])

  const handleSearch= (data) => {    
    setBusqueda(data);
  }  

  const handleListado= (data) => {    
    setLoad(false);    
  }  

return (
  <>
    <h2 className="mt-5 text-left">Buscador de Pokémon</h2>
    <h5 className="Diaplay-5">El que quiere pokemon que los busque</h5>
    <Consulta handleSearch={ handleSearch }/>
    <hr/>
    { load && <Load/>}
    <Listado txt_busqueda={ busqueda }/> 
  </>
  )
}
