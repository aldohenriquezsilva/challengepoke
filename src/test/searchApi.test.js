
import  { getFilter } from '../api/searchApi'
import '@testing-library/jest-dom/dist/matchers'

describe('Test to API', () => {
 
  test('having search a pokemon', async ()  =>  {
    const txtBusqueda = 'ditto';
    const result = await getFilter(txtBusqueda);    
    expect(typeof result).toBe('object');
  });

  test('code result 200', async ()  =>  {
    const txtBusqueda = 'ditto';
    const result = await getFilter(txtBusqueda);    
    expect(result.code).toBe(200);
  });

  test('code result 404', async ()  =>  {
    const txtBusqueda = 'tester';
    const result = await getFilter(txtBusqueda);    
    expect(result.code).toBe(404);
  });
  
});