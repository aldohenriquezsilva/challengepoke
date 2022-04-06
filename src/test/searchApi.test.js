
import  { getFilter } from '../api/searchApi'
import '@testing-library/jest-dom/dist/matchers'

describe('Test to API', () => {
 
  test('having search a pokemon', async ()  =>  {
    const txtBusqueda = 'ditto';
    const result = await getFilter(txtBusqueda);    
    expect(typeof result).toBe('object');
  });

});