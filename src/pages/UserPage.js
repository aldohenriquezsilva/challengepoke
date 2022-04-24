import React, { useEffect, useState } from "react";

import { Form } from "./Consulta";
import { List } from "./Listado";
import { Load } from "./Load";

export const UserPage = () => {

  const [search, setSearch] = useState("");  
  const [load, setLoad] = useState(true);  

  useEffect(() => {
    if(search === "") return;
    setLoad(true);  
  },[search])

  const handleSearch= (data) => { 
    setLoad(true);    
    setSearch(data);     
  }  

  const handleList= (data) => {       
    setLoad(data);    
  }  

return (
  <> 
    <h2 className="mt-5 text-left">Buscador de Pokémon</h2>
    <h5 className="Diaplay-5">El que quiere pokemon que los busque</h5>
    <Form handleSearch={ handleSearch }/>
    { load && <Load/>}
    <hr/>   
    <List txtFilter={ search } setCode={ 0 } handleList={ handleList }/>
    <hr/>
    </>
  
  )
}
