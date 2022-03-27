import React, { useEffect, useState } from "react";

import { Consulta } from "./Consulta";
import { Listado } from "./Listado";
import { Load } from "./Load";

export const UserPage = () => {

  const [busqueda, setBusqueda] = useState("");  
  const [load, setLoad] = useState(true);  

  useEffect(() => {
    if(busqueda === "") return;
    setLoad(true);  
  },[busqueda])

  const handleSearch= (data) => { 
    setLoad(true);    
    setBusqueda(data);     
  }  

  const handleListado= (data) => {
    console.log(data);   
    setLoad(data);    
  }  

return (
  <> 
    <h2 className="mt-5 text-left">Buscador de Pokémon</h2>
    <h5 className="Diaplay-5">El que quiere pokemon que los busque</h5>
    <Consulta handleSearch={ handleSearch }/>
    { load && <Load/>}
    <hr/>   
    <Listado txtBusqueda={ busqueda } handleListado={ handleListado }/>
    <hr/>
    </>
  
  )
}
