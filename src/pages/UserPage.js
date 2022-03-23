import React from "react";
import { Consulta } from "./Consulta";
import { Listado } from "./Listado";

export const UserPage = () => {

return (
  <>
    <h2 className="mt-5 text-left">Buscador de Pokémon</h2>
    <h5 className="Diaplay-5">El que quiere pokemon que los busque</h5>
    <Consulta/>
    <hr/>
    <Listado/>
  </>
  )
}
