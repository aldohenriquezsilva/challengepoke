
import  { usePokemon } from './usePokemon'
import '@testing-library/jest-dom/dist/matchers'

describe('prueba consulta', () => {
 
  test('consulta',async ()  =>  {

    const txtBusqueda = 'pika';

    const resultado = usePokemon( {txtBusqueda: txtBusqueda });

    expect ( resultado ).toBe(txtBusqueda);

  });

})