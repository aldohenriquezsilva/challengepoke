
import  { usePokemon } from './usePokemon'
import '@testing-library/jest-dom/dist/matchers'

describe('Prueba de consulta', () => {
 
  test('realizamos consulta',async ()  =>  {

    const txtBusqueda = 'pika';

    const resultado = usePokemon( {txtBusqueda: txtBusqueda });

    console.log(resultado);

  });

})