import React from 'react'
import { render } from '@testing-library/react'
import  { UserPage } from './UserPage'
import '@testing-library/jest-dom/dist/matchers'

test('renders content', () => {
  const note = { 
      content: 'Esto es un test',
      important: true
  }

  const component = render(<UserPage />)

  console.log(component);

})