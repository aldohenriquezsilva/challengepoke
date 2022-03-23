import { useEffect, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";

export const useConsulta = () => {
    const [resul, setResults] = useState([]);

    useEffect(() => {
        getPokemons();
    }, [])

   
    const getPokemons = async() => {    
        const resp = await pokemonApi.get('https://pokeapi.co/api/v2/pokemon/');   
        console.log(resp.data.results);
        setResults(resp.data.results);  
      }
      
      return { 
        resul
      }
}
